#!/usr/bin/env python3
"""
MeasureLens daily blog post generator.

Reads the content calendar, finds today's scheduled post,
generates it via the Claude API, writes the TypeScript file,
registers it in index.ts, and marks the calendar entry published.

Usage:
  ANTHROPIC_API_KEY=<key> python scripts/generate-post.py

Environment variables:
  ANTHROPIC_API_KEY  Required. Your Anthropic API key.
  POST_DATE          Optional. Override today's date (YYYY-MM-DD) for testing.
"""

import os
import re
import sys
from datetime import date
from pathlib import Path

try:
    import anthropic
except ImportError:
    print("ERROR: anthropic package not installed. Run: pip install anthropic")
    sys.exit(1)

# ── Paths ──────────────────────────────────────────────────────────────────
ROOT          = Path(__file__).parent.parent
CALENDAR_PATH = ROOT / "content/blog/CONTENT_CALENDAR.md"
POSTS_DIR     = ROOT / "content/blog/posts"
INDEX_PATH    = ROOT / "content/blog/index.ts"


# ── Date helpers ───────────────────────────────────────────────────────────
def today_str() -> str:
    override = os.environ.get("POST_DATE")
    return override if override else date.today().isoformat()


def iso_to_calendar_label(iso_date: str) -> str:
    """Turn '2026-04-10' into 'April 10'."""
    d = date.fromisoformat(iso_date)
    return d.strftime("%B %-d")   # Linux: %-d strips leading zero


# ── Calendar parsing ───────────────────────────────────────────────────────
def parse_calendar(today: str) -> dict | None:
    """Find the post entry for today. Returns None if not found or already published."""
    content = CALENDAR_PATH.read_text()
    label   = iso_to_calendar_label(today)   # e.g. "April 10"

    # Each day block: ## Day N — Month Day\n...\n---
    pattern = re.compile(
        r"## Day \d+ — " + re.escape(label) + r"\n(.*?)(?=\n---|\Z)",
        re.DOTALL,
    )
    match = pattern.search(content)
    if not match:
        print(f"No post scheduled for {label} ({today}). Nothing to do.")
        return None

    block = match.group(1)

    if "PUBLISHED" in block:
        print(f"Post for {label} is already marked PUBLISHED. Skipping.")
        return None

    def field(name: str) -> str:
        m = re.search(rf"\*\*{re.escape(name)}:\*\*\s*(.+)", block)
        return m.group(1).strip() if m else ""

    info = {
        "title":         field("Title"),
        "angle":         field("Angle"),
        "summary":       field("Summary"),
        "category":      field("Category"),
        "date":          today,
        "calendar_label": label,
    }

    if not info["title"]:
        print("ERROR: Could not parse post title from calendar entry.")
        print("Block found:\n", block)
        sys.exit(1)

    return info


# ── Prompt builder ─────────────────────────────────────────────────────────
SYSTEM_PROMPT = """\
You are the founding content writer for MeasureLens, a marketing measurement
intelligence product in early development. Your sole job right now is to write
one blog post that will be published on the MeasureLens website.

## About MeasureLens

MeasureLens is for marketing leaders, performance marketers, and heads of growth
responsible for paid media at scale. The core problem: every ad platform reports
a different ROAS for the same campaign, and most teams have no principled way to
reconcile the differences and arrive at a number they can trust.

The product, LensOS, is a reasoning layer that sits above existing data sources,
scores evidence quality, surfaces conflicts rather than averaging them, and
produces a confidence-weighted recommendation. The product is in active
development and is not yet live.

## Voice and Tone

Write like a smart, experienced marketing practitioner who has seen this problem
firsthand. The tone is: direct and confident, warm and human, analytically
rigorous, founder-led.

NEVER use these phrases or words:
ai-powered, cutting-edge, revolutionary, next-generation, robust platform,
seamless experience, game-changing, groundbreaking, state-of-the-art,
leverage (as a verb meaning "use"), utilize.

## Sentence Style (critical)

- NO em dashes. Zero. Not a single one.
- Short, intentional sentences. Vary length naturally.
- Write in paragraphs. Use bullet lists only when they genuinely serve structure.
- No decorative dashes or separator lines in the prose.
- Do not start with "In today's..." or "As marketers know..."

## What Every Post Must Do

1. Articulate a real, specific problem the target reader faces.
2. Explain the mechanics of why that problem exists.
3. Offer a clear, non-obvious insight or reframe.
4. End with a natural connection to the MeasureLens approach, without making it a sales pitch.

## What Every Post Must NOT Do

- Make unsupported factual claims or invent statistics without caveat.
- Invent case studies or attribute specific outcomes to named companies.
- Promise product features that are not built.
- Sound like SEO content padded to a word count.
- Repeat the intro framing in the conclusion.
- Use filler phrases: "In conclusion", "It is worth noting", "At the end of the day".

## Output Format

Output a single TypeScript file, nothing else. No markdown fences. No preamble.
No explanation. The file must start with:

  import type { BlogPost } from "../schema";

And must export a default BlogPost matching this shape exactly:

  const post: BlogPost = {
    slug:            "kebab-case-slug",
    title:           "Full Post Title",
    excerpt:         "1-2 sentence excerpt for blog index and OG tags.",
    date:            "YYYY-MM-DD",
    category:        "Category",
    readingTime:     7,
    seoTitle:        "SEO Title — MeasureLens",
    metaDescription: "Under 155 characters.",
    body: [
      { type: "p",       text: "..." },
      { type: "h2",      text: "Section heading" },
      { type: "h3",      text: "Subsection" },
      { type: "quote",   text: "...", attribution: "optional" },
      { type: "list",    items: ["item 1", "item 2"] },
      { type: "callout", text: "..." },
      { type: "divider" },
    ],
    cta: {
      heading: "Short CTA heading related to the post topic",
      body:    "1-2 sentences connecting this post to MeasureLens. Soft, honest.",
    },
  };

  export default post;

Rules for the body array:
- At least 5 h2 sections. Each section needs 2+ paragraphs.
- Target 1400-1600 words total across all paragraph blocks.
- At least one callout or pull quote.
- No em dashes in any text field.
"""

def build_user_message(info: dict) -> str:
    return f"""\
Write today's blog post using the topic details below.

Working Title: {info['title']}
Angle: {info['angle']}
Summary: {info['summary']}
Category: {info['category']}
Date (use exactly): {info['date']}

Output only the TypeScript file content. Start the first line with:
import type {{ BlogPost }} from "../schema";
"""


# ── API call ───────────────────────────────────────────────────────────────
def generate_post(info: dict) -> str:
    api_key = os.environ.get("ANTHROPIC_API_KEY")
    if not api_key:
        print("ERROR: ANTHROPIC_API_KEY environment variable is not set.")
        sys.exit(1)

    client = anthropic.Anthropic(api_key=api_key)

    print(f"Calling Claude API to generate: {info['title']}")
    message = client.messages.create(
        model="claude-sonnet-4-6",
        max_tokens=4096,
        system=SYSTEM_PROMPT,
        messages=[
            {"role": "user", "content": build_user_message(info)},
        ],
    )

    ts_content = message.content[0].text.strip()

    # Strip markdown code fences if the model added them despite instructions
    ts_content = re.sub(r"^```(?:typescript|ts)?\n?", "", ts_content)
    ts_content = re.sub(r"\n?```\s*$", "", ts_content)
    return ts_content.strip()


# ── File writing ───────────────────────────────────────────────────────────
def extract_slug(ts_content: str, fallback_title: str) -> str:
    m = re.search(r'slug:\s*["\']([^"\']+)["\']', ts_content)
    if m:
        return m.group(1)
    # Fallback: derive from title
    slug = fallback_title.lower()
    slug = re.sub(r"[^a-z0-9\s-]", "", slug)
    slug = re.sub(r"\s+", "-", slug.strip())
    slug = re.sub(r"-+", "-", slug)
    return slug.strip("-")


def write_post_file(ts_content: str, slug: str) -> Path:
    filepath = POSTS_DIR / f"{slug}.ts"
    filepath.write_text(ts_content + "\n", encoding="utf-8")
    print(f"Post written: {filepath}")
    return filepath


def slug_to_camel(slug: str) -> str:
    """'my-post-slug' → 'myPostSlug'"""
    parts = slug.split("-")
    camel = parts[0] + "".join(w.capitalize() for w in parts[1:])
    return camel


def register_in_index(slug: str) -> None:
    """Prepend import + array entry to content/blog/index.ts."""
    index     = INDEX_PATH.read_text(encoding="utf-8")
    var_name  = slug_to_camel(slug)
    import_ln = f'import {var_name} from "./posts/{slug}";'

    # Avoid double registration
    if import_ln in index:
        print(f"Already registered in index.ts: {var_name}")
        return

    # Insert import after the last existing import line
    imports = list(re.finditer(r"^import .+;$", index, re.MULTILINE))
    if imports:
        pos   = imports[-1].end()
        index = index[:pos] + "\n" + import_ln + index[pos:]
    else:
        index = import_ln + "\n" + index

    # Prepend to posts array (newest first)
    index = re.sub(
        r"(export const posts: BlogPost\[\] = \[\n\s*)",
        rf"\g<1>{var_name},\n  ",
        index,
    )

    INDEX_PATH.write_text(index, encoding="utf-8")
    print(f"Registered in index.ts: {var_name}")


def mark_published(calendar_label: str) -> None:
    """Append **Status:** PUBLISHED to the matching day block in the calendar."""
    content = CALENDAR_PATH.read_text(encoding="utf-8")
    pattern = re.compile(
        r"(## Day \d+ — " + re.escape(calendar_label) + r"\n.*?)(---|\Z)",
        re.DOTALL,
    )

    def inject(m: re.Match) -> str:
        block = m.group(1).rstrip()
        end   = m.group(2)
        if "**Status:**" not in block:
            block += "\n**Status:** PUBLISHED"
        return block + "\n\n" + end

    updated = pattern.sub(inject, content)
    CALENDAR_PATH.write_text(updated, encoding="utf-8")
    print(f"Marked PUBLISHED in calendar: {calendar_label}")


# ── Main ───────────────────────────────────────────────────────────────────
def main() -> None:
    today = today_str()
    print(f"Blog generator running for date: {today}")

    post_info = parse_calendar(today)
    if post_info is None:
        sys.exit(0)

    ts_content = generate_post(post_info)
    slug       = extract_slug(ts_content, post_info["title"])
    print(f"Slug: {slug}")

    existing = POSTS_DIR / f"{slug}.ts"
    if existing.exists():
        print(f"Post file already exists ({existing}). Marking published and exiting.")
        mark_published(post_info["calendar_label"])
        sys.exit(0)

    write_post_file(ts_content, slug)
    register_in_index(slug)
    mark_published(post_info["calendar_label"])
    print("Done.")


if __name__ == "__main__":
    main()
