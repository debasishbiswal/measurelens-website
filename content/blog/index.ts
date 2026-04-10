// ─────────────────────────────────────────────────────────────
//  Blog Post Registry
//
//  To publish a new post:
//  1. Create a file in /content/blog/posts/<slug>.ts
//  2. Export a BlogPost object as default
//  3. Import it here and add to the `posts` array (newest first)
//
//  The blog index page and [slug] page both read from this file.
//  No CMS or database required — just TypeScript files.
// ─────────────────────────────────────────────────────────────

import type { BlogPost } from "./schema";

import whyROASNumbersDontAgree from "./posts/why-roas-numbers-dont-agree";
import lightweightMMMFuture from "./posts/lightweight-mmm-future";

// ── Add new posts at the TOP (newest first) ───────────────────
export const posts: BlogPost[] = [
  lightweightMMMFuture,
  whyROASNumbersDontAgree,
];

// ── Helpers ───────────────────────────────────────────────────

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAllPostSlugs(): string[] {
  return posts.map((p) => p.slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  return posts.filter((p) => p.category === category);
}

export function getRecentPosts(n = 5): BlogPost[] {
  return [...posts].sort((a, b) => b.date.localeCompare(a.date)).slice(0, n);
}
