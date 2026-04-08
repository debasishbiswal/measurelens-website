import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Insights — MeasureLens",
  description:
    "Product thinking, measurement philosophy, and observations on marketing analytics from the MeasureLens team.",
};

const milestones = [
  {
    date:     "April 2026",
    tag:      "Product",
    title:    "First blog post live",
    body:     "Published our first piece of writing: a deep dive into why platform-reported ROAS consistently overstates performance and what it costs marketing teams who rely on it for budget decisions.",
    link:     { label: "Read it", href: "/blog/why-roas-numbers-dont-agree" },
  },
  {
    date:     "April 2026",
    tag:      "Brand",
    title:    "Website launched",
    body:     "The MeasureLens marketing site went live with full positioning, problem articulation, a detailed explanation of the LensOS approach, and an early access waitlist. The site is intentionally honest about where we are: early development, actively shaping the product.",
    link:     null,
  },
  {
    date:     "March 2026",
    tag:      "Product",
    title:    "LensOS concept finalized",
    body:     "Settled on the core architecture for LensOS: evidence scoring, conflict detection, confidence-weighted synthesis, and decision output. The reasoning engine model is the right frame for what we are building.",
    link:     { label: "Learn about LensOS", href: "/lensos" },
  },
  {
    date:     "February 2026",
    tag:      "Research",
    title:    "Early discovery interviews",
    body:     "Spoke with 12 marketing leaders, heads of growth, and performance marketing directors about their measurement challenges. The pattern was consistent: conflicting numbers, no principled way to resolve them, decisions made by feel. Every conversation confirmed the problem we are solving.",
    link:     null,
  },
  {
    date:     "January 2026",
    tag:      "Founding",
    title:    "MeasureLens founded",
    body:     "Started with a clear thesis: the marketing measurement problem is not a data problem. It is a reasoning problem. Teams have too much conflicting data and no systematic way to evaluate which parts of it deserve trust.",
    link:     null,
  },
];

const tagColors: Record<string, string> = {
  Product:   "#7C3AED",
  Brand:     "#10B981",
  Research:  "#F59E0B",
  Founding:  "#3B82F6",
};

export default function InsightsPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "64px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="glow-orb"
          style={{
            width: 500,
            height: 350,
            top: "-100px",
            left: "30%",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.10) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <div className="section-tag">MeasureLens</div>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-5"
            style={{ color: "#E8EEFF", lineHeight: 1.08 }}
          >
            Insights
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "#6B7CB0" }}>
            Product milestones, thinking on measurement philosophy, and notes
            from building MeasureLens. A running log of where we are and what
            we are learning.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <div className="relative">
          {/* Vertical line */}
          <div
            className="absolute left-[11px] top-2 bottom-0 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.4), rgba(124,58,237,0.05))" }}
          />

          <div className="space-y-12">
            {milestones.map((m, i) => {
              const color = tagColors[m.tag] ?? "#7C3AED";
              return (
                <div key={i} className="relative pl-9">
                  {/* Dot */}
                  <div
                    className="absolute left-0 top-1.5 w-[22px] h-[22px] rounded-full border-2 flex items-center justify-center"
                    style={{
                      borderColor: "#7C3AED",
                      background: "#06060F",
                    }}
                  >
                    <div className="w-2 h-2 rounded-full" style={{ background: "#7C3AED" }} />
                  </div>

                  {/* Content */}
                  <div className="flex flex-wrap items-center gap-3 mb-3">
                    <span
                      className="text-xs font-mono font-semibold px-2.5 py-0.5 rounded-md"
                      style={{
                        color,
                        background: `${color}18`,
                        border: `1px solid ${color}25`,
                        letterSpacing: "0.05em",
                        textTransform: "uppercase",
                      }}
                    >
                      {m.tag}
                    </span>
                    <span className="text-xs font-mono" style={{ color: "rgba(107,124,176,0.6)" }}>
                      {m.date}
                    </span>
                  </div>

                  <h3
                    className="font-semibold text-lg mb-2"
                    style={{ color: "#C4CAEE" }}
                  >
                    {m.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-3"
                    style={{ color: "#6B7CB0" }}
                  >
                    {m.body}
                  </p>

                  {m.link && (
                    <Link
                      href={m.link.href}
                      className="inline-flex items-center gap-2 text-sm font-semibold transition-colors duration-150"
                      style={{ color: "#7C3AED", textDecoration: "none" }}
                    >
                      {m.link.label}
                      <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
                        <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom note */}
        <div
          className="mt-20 rounded-2xl p-7"
          style={{
            background: "rgba(255,255,255,0.02)",
            border: "1px solid rgba(255,255,255,0.06)",
          }}
        >
          <p className="text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>
            We publish new insights as the product develops. If you are interested
            in following along or contributing to our early research, the best place
            to start is by joining the waitlist.
          </p>
          <Link
            href="/#cta"
            className="inline-flex items-center gap-2 text-sm font-semibold mt-4 transition-colors duration-150"
            style={{ color: "#A78BFA", textDecoration: "none" }}
          >
            Join the waitlist
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </Link>
        </div>
      </section>
    </PageWrapper>
  );
}
