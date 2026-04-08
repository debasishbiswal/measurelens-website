// ─────────────────────────────────────────────────────────────
//  Blog rendering utilities
//  Used by: /app/blog/[slug]/page.tsx
// ─────────────────────────────────────────────────────────────

import type { ContentBlock } from "@/content/blog/schema";

export function formatDate(iso: string): string {
  const d = new Date(iso + "T12:00:00Z");
  return d.toLocaleDateString("en-US", {
    year:  "numeric",
    month: "long",
    day:   "numeric",
  });
}

export function readingTimeLabel(min: number): string {
  return `${min} min read`;
}

// Renders a single content block to HTML string.
// Used with dangerouslySetInnerHTML in [slug]/page.tsx.
// Content is entirely author-controlled so XSS risk is nil.
export function renderBlock(block: ContentBlock): string {
  switch (block.type) {
    case "h2":
      return `<h2>${block.text}</h2>`;
    case "h3":
      return `<h3>${block.text}</h3>`;
    case "p":
      return `<p>${block.text}</p>`;
    case "quote":
      return `<blockquote>${block.text}${block.attribution ? `<cite>${block.attribution}</cite>` : ""}</blockquote>`;
    case "list":
      return `<ul>${block.items.map((i) => `<li>${i}</li>`).join("")}</ul>`;
    case "callout":
      return `<div class="callout">${block.text}</div>`;
    case "divider":
      return `<hr />`;
    default:
      return "";
  }
}

export function renderBody(blocks: ContentBlock[]): string {
  return blocks.map(renderBlock).join("\n");
}
