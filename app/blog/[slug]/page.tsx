import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageWrapper from "@/components/PageWrapper";
import { getPostBySlug, getAllPostSlugs, getRecentPosts } from "@/content/blog/index";
import { formatDate } from "@/lib/blog";
import type { ContentBlock } from "@/content/blog/schema";

// ── Static params for pre-rendering ──────────────────────────
export function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

// ── SEO metadata ─────────────────────────────────────────────
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return { title: "Not Found — MeasureLens" };
  return {
    title:       post.seoTitle,
    description: post.metaDescription,
    openGraph: {
      title:       post.seoTitle,
      description: post.metaDescription,
      type:        "article",
      publishedTime: post.date,
    },
  };
}

// ── Content block renderer ────────────────────────────────────
function Block({ block }: { block: ContentBlock }) {
  switch (block.type) {
    case "h2":
      return (
        <h2
          style={{
            fontSize: "1.6rem",
            fontWeight: 700,
            color: "#E8EEFF",
            letterSpacing: "-0.02em",
            lineHeight: 1.25,
            marginTop: "2.5rem",
            marginBottom: "1rem",
          }}
        >
          {block.text}
        </h2>
      );
    case "h3":
      return (
        <h3
          style={{
            fontSize: "1.2rem",
            fontWeight: 600,
            color: "#C4CAEE",
            letterSpacing: "-0.01em",
            marginTop: "2rem",
            marginBottom: "0.75rem",
          }}
        >
          {block.text}
        </h3>
      );
    case "p":
      return (
        <p
          style={{
            color: "#8892B4",
            lineHeight: 1.8,
            fontSize: "1.0625rem",
            marginBottom: "1.25rem",
          }}
        >
          {block.text}
        </p>
      );
    case "quote":
      return (
        <blockquote
          style={{
            borderLeft: "3px solid #7C3AED",
            paddingLeft: "1.5rem",
            margin: "2rem 0",
          }}
        >
          <p
            style={{
              color: "#C4CAEE",
              fontSize: "1.125rem",
              fontStyle: "italic",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {block.text}
          </p>
          {block.attribution && (
            <cite style={{ color: "#6B7CB0", fontSize: "0.85rem", fontStyle: "normal" }}>
              {block.attribution}
            </cite>
          )}
        </blockquote>
      );
    case "list":
      return (
        <ul
          style={{
            paddingLeft: "1.25rem",
            marginBottom: "1.5rem",
            display: "flex",
            flexDirection: "column",
            gap: "0.6rem",
          }}
        >
          {block.items.map((item, i) => (
            <li
              key={i}
              style={{
                color: "#8892B4",
                lineHeight: 1.7,
                fontSize: "1.0625rem",
                listStyleType: "disc",
              }}
            >
              {item}
            </li>
          ))}
        </ul>
      );
    case "callout":
      return (
        <div
          style={{
            background: "rgba(124,58,237,0.07)",
            border: "1px solid rgba(124,58,237,0.2)",
            borderRadius: "10px",
            padding: "1.25rem 1.5rem",
            margin: "1.75rem 0",
          }}
        >
          <p
            style={{
              color: "#A78BFA",
              fontSize: "0.975rem",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {block.text}
          </p>
        </div>
      );
    case "divider":
      return (
        <div
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
            margin: "2.5rem 0",
          }}
        />
      );
    default:
      return null;
  }
}

// ── Page ─────────────────────────────────────────────────────
export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const recent = getRecentPosts(3).filter((p) => p.slug !== slug);

  return (
    <PageWrapper>
      {/* Article hero */}
      <header
        style={{
          background: "#06060F",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          padding: "72px 0 56px",
        }}
      >
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          {/* Back */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm mb-8 transition-colors duration-150"
            style={{ color: "#6B7CB0", textDecoration: "none" }}
            onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.color = "#A78BFA")}
            onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.color = "#6B7CB0")}
          >
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M7 4l-4 4 4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All posts
          </Link>

          {/* Category + meta */}
          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span
              className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
              style={{
                color: "#7C3AED",
                background: "rgba(124,58,237,0.1)",
                border: "1px solid rgba(124,58,237,0.25)",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
              }}
            >
              {post.category}
            </span>
            <span className="text-xs font-mono" style={{ color: "#6B7CB0" }}>
              {formatDate(post.date)}
            </span>
            <span className="text-xs font-mono" style={{ color: "rgba(107,124,176,0.5)" }}>
              {post.readingTime} min read
            </span>
          </div>

          {/* Title */}
          <h1
            style={{
              fontSize: "clamp(1.75rem, 4vw, 2.75rem)",
              fontWeight: 800,
              color: "#E8EEFF",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
              marginBottom: "1.25rem",
            }}
          >
            {post.title}
          </h1>

          {/* Excerpt */}
          <p
            style={{
              fontSize: "1.125rem",
              color: "#6B7CB0",
              lineHeight: 1.65,
              maxWidth: "580px",
            }}
          >
            {post.excerpt}
          </p>
        </div>
      </header>

      {/* Article body */}
      <article className="max-w-3xl mx-auto px-6 lg:px-8 py-16">
        {post.body.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </article>

      {/* End CTA */}
      <section
        className="max-w-3xl mx-auto px-6 lg:px-8 pb-20"
      >
        <div
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.18)",
            borderRadius: "16px",
            padding: "2.5rem",
          }}
        >
          <p className="text-lg font-bold mb-2" style={{ color: "#C4CAEE" }}>
            {post.cta?.heading ?? "We are building MeasureLens to fix this."}
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7CB0" }}>
            {post.cta?.body ??
              "If the measurement problems described here sound familiar, we would like to talk. MeasureLens is in active development. Early conversations with marketing leaders are shaping the product."}
          </p>
          <Link href="/#cta" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
            Join the Waitlist
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>

      {/* More posts */}
      {recent.length > 0 && (
        <section
          style={{
            borderTop: "1px solid rgba(255,255,255,0.05)",
            padding: "64px 0",
            background: "#04040D",
          }}
        >
          <div className="max-w-5xl mx-auto px-6 lg:px-8">
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-10"
              style={{ color: "rgba(107,124,176,0.5)" }}
            >
              More reading
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {recent.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  style={{ textDecoration: "none" }}
                >
                  <div
                    className="h-full rounded-xl p-5 transition-all duration-200"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <span
                      className="text-xs font-mono"
                      style={{ color: "#7C3AED" }}
                    >
                      {p.category}
                    </span>
                    <h3
                      className="mt-3 font-semibold text-sm leading-snug"
                      style={{ color: "#C4CAEE" }}
                    >
                      {p.title}
                    </h3>
                    <p className="mt-2 text-xs" style={{ color: "rgba(107,124,176,0.6)" }}>
                      {p.readingTime} min read
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </PageWrapper>
  );
}
