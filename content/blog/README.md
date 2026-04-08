# MeasureLens Blog Content System

This directory contains all blog content for the MeasureLens website.
The system is intentionally simple: TypeScript files, a central registry, no CMS required.

---

## Directory Structure

```
content/blog/
  schema.ts          — TypeScript types for BlogPost and ContentBlock
  index.ts           — Central registry. Import posts here to publish them.
  README.md          — This file
  AGENT_PROMPT.md    — Reusable prompt template for the blog writer agent
  CONTENT_CALENDAR.md — 15-day editorial calendar
  posts/
    why-roas-numbers-dont-agree.ts   — Post 1 (published)
    <slug>.ts                         — Future posts go here
```

---

## How to Publish a New Post

**Step 1.** Create a new file in `/content/blog/posts/` named after the slug.

```
content/blog/posts/your-post-slug-here.ts
```

**Step 2.** Write the post using the BlogPost schema from `schema.ts`.

```typescript
import type { BlogPost } from "../schema";

const post: BlogPost = {
  slug:            "your-post-slug-here",
  title:           "Your Post Title",
  excerpt:         "One or two sentences used on the index page.",
  date:            "2026-04-10",
  category:        "Attribution",
  readingTime:     7,
  seoTitle:        "Your Post Title — MeasureLens",
  metaDescription: "155-character description for search engines.",
  body: [
    { type: "p",  text: "Opening paragraph..." },
    { type: "h2", text: "First section heading" },
    // ...
  ],
  cta: {
    heading: "Short CTA heading",
    body:    "1-2 sentences connecting post to MeasureLens.",
  },
};

export default post;
```

**Step 3.** Register the post in `/content/blog/index.ts`.

Add it at the TOP of the `posts` array (newest first):

```typescript
import yourPost from "./posts/your-post-slug-here";

export const posts: BlogPost[] = [
  yourPost,          // ← add here
  whyROASNumbersDontAgree,
  // ...
];
```

**Step 4.** Commit and push to GitHub. Vercel deploys automatically.

---

## Content Block Types

| Type      | Fields                                | Description                         |
|-----------|---------------------------------------|-------------------------------------|
| `h2`      | `text`                                | Section heading                     |
| `h3`      | `text`                                | Sub-heading                         |
| `p`       | `text`                                | Paragraph                           |
| `quote`   | `text`, `attribution?`               | Pull quote with optional attribution|
| `list`    | `items: string[]`                     | Unordered list                      |
| `callout` | `text`                                | Highlighted callout box             |
| `divider` | (none)                                | Visual section break                |

---

## Blog Writer Agent

For AI-assisted post generation, use the prompt template in `AGENT_PROMPT.md`.

The agent:
1. Takes a topic, angle, and one-sentence summary as input
2. Generates a complete BlogPost TypeScript file
3. Follows the MeasureLens voice guidelines (no em dashes, no AI clichés, founder tone)
4. Runs a self-quality-check before outputting

---

## Automated Publishing (Future)

The content system is designed to support automated daily publishing via:

**Option A — GitHub Actions**
Create `.github/workflows/daily-blog.yml`:
- Schedule: `cron: '0 12 * * *'` (7:00 AM EST = 12:00 UTC)
- Action: Run a script that generates a new post using the agent prompt and commits it

**Option B — External Scheduler (Make / Zapier)**
- Trigger: Daily at 7:00 AM EST
- Action: Call OpenAI or Anthropic API with AGENT_PROMPT.md + next topic from CONTENT_CALENDAR.md
- Output: Commit new `.ts` file to GitHub via API
- Deploy: Vercel auto-deploys on push

**Option C — Cursor / Claude Code with cron**
- Schedule the blog writer to run in a Cursor background agent
- Agent generates the post file and uses git commit + push

The content directory structure is intentionally stable so any of these automation options can plug in without code changes.

---

## Voice Guidelines (Quick Reference)

- No em dashes
- No AI startup clichés (AI-powered, cutting-edge, revolutionary, etc.)
- Short, intentional sentences
- Founder voice, not press release tone
- End with a soft CTA, not a product pitch
- No invented case studies or named companies
