// ─────────────────────────────────────────────────────────────
//  MeasureLens Blog Content Schema
//  Every blog post must satisfy this interface.
//  New posts go in: /content/blog/posts/<slug>.ts
//  Register them in: /content/blog/index.ts
// ─────────────────────────────────────────────────────────────

export type ContentBlock =
  | { type: "h2";      text: string }
  | { type: "h3";      text: string }
  | { type: "p";       text: string }
  | { type: "quote";   text: string; attribution?: string }
  | { type: "list";    items: string[] }
  | { type: "callout"; text: string }
  | { type: "divider" }

export interface BlogPost {
  // ── Routing ──────────────────────────────────────────────
  slug:            string   // URL: /blog/<slug>

  // ── Display metadata ─────────────────────────────────────
  title:           string
  excerpt:         string   // 1-2 sentences. Used on index + OG
  date:            string   // ISO: "2026-04-09"
  category:        string   // e.g. "Attribution", "Incrementality", "Strategy"
  readingTime:     number   // minutes (estimate)

  // ── SEO ──────────────────────────────────────────────────
  seoTitle:        string
  metaDescription: string

  // ── Content ──────────────────────────────────────────────
  body:            ContentBlock[]

  // ── End CTA (optional override) ──────────────────────────
  cta?: {
    heading: string
    body:    string
  }
}
