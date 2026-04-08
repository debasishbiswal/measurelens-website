import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";
import { posts } from "@/content/blog/index";
import { formatDate } from "@/lib/blog";

export const metadata: Metadata = {
  title: "Blog — MeasureLens",
  description:
    "Thinking on marketing measurement, attribution, incrementality, and why the numbers on your dashboard often disagree with reality.",
};

const categoryColors: Record<string, string> = {
  Attribution:     "#7C3AED",
  Incrementality:  "#10B981",
  Strategy:        "#F59E0B",
  MMM:             "#3B82F6",
  "Data Quality":  "#EC4899",
  "Decision-Making": "#8B5CF6",
  Experimentation: "#06B6D4",
};

function categoryColor(cat: string): string {
  return categoryColors[cat] ?? "#7C3AED";
}

export default function BlogIndex() {
  const sortedPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <PageWrapper>
      {/* Hero */}
      <section
        className="relative overflow-hidden"
        style={{
          background: "#06060F",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          paddingTop: "80px",
          paddingBottom: "72px",
        }}
      >
        <div
          className="glow-orb"
          style={{
            width: 500,
            height: 400,
            top: "-100px",
            left: "50%",
            transform: "translateX(-40%)",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
          <div className="section-tag">MeasureLens</div>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-5"
            style={{ color: "#E8EEFF", lineHeight: 1.08 }}
          >
            Writing on{" "}
            <span className="gradient-text">measurement</span>
          </h1>
          <p className="text-lg max-w-2xl" style={{ color: "#6B7CB0" }}>
            Ideas on attribution, incrementality, budget allocation, and why
            the numbers on your dashboard often disagree with what is actually
            happening in your business.
          </p>
        </div>
      </section>

      {/* Posts */}
      <section className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
        {sortedPosts.length === 0 ? (
          <p className="text-center py-20" style={{ color: "#6B7CB0" }}>
            No posts yet. Check back soon.
          </p>
        ) : (
          <div className="space-y-8">
            {sortedPosts.map((post, i) => {
              const color = categoryColor(post.category);
              return (
                <Link
                  key={post.slug}
                  href={`/blog/${post.slug}`}
                  className="block group"
                  style={{ textDecoration: "none" }}
                >
                  <article
                    className="rounded-2xl p-7 lg:p-9 blog-card-hover"
                    style={{
                      background: "rgba(255,255,255,0.02)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    {/* Top row: category + meta */}
                    <div className="flex flex-wrap items-center gap-3 mb-4">
                      <span
                        className="text-xs font-mono font-semibold px-2.5 py-1 rounded-md"
                        style={{
                          color,
                          background: `${color}18`,
                          border: `1px solid ${color}30`,
                          letterSpacing: "0.06em",
                          textTransform: "uppercase",
                        }}
                      >
                        {post.category}
                      </span>
                      <span className="text-xs font-mono" style={{ color: "rgba(107,124,176,0.6)" }}>
                        {formatDate(post.date)}
                      </span>
                      <span className="text-xs font-mono" style={{ color: "rgba(107,124,176,0.4)" }}>
                        {post.readingTime} min read
                      </span>
                    </div>

                    {/* Title */}
                    <h2
                      className="text-2xl lg:text-3xl font-bold tracking-tight mb-3 transition-colors duration-200"
                      style={{ color: "#C4CAEE", lineHeight: 1.2 }}
                    >
                      {post.title}
                    </h2>

                    {/* Excerpt */}
                    <p
                      className="text-base leading-relaxed mb-5"
                      style={{ color: "#6B7CB0", maxWidth: "680px" }}
                    >
                      {post.excerpt}
                    </p>

                    {/* Read more */}
                    <span
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-200"
                      style={{ color: "#7C3AED" }}
                    >
                      Read post
                      <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </article>
                </Link>
              );
            })}
          </div>
        )}

        {/* Newsletter nudge */}
        <div
          className="mt-20 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(124,58,237,0.05)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <p className="text-lg font-semibold mb-2" style={{ color: "#C4CAEE" }}>
            New posts every week
          </p>
          <p className="text-sm mb-6" style={{ color: "#6B7CB0" }}>
            Topics include attribution, incrementality, MMM, budget allocation,
            and the decision-making gaps that modern measurement leaves behind.
          </p>
          <Link href="/#cta" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
            Join the Waitlist
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
