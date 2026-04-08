"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const principles = [
  {
    n: "1",
    title: "Not all evidence is equal",
    category: "Foundation",
    body: "A geo holdout experiment is more reliable than a platform click model. A well-structured MMM is more trustworthy than GA4 last-click attribution. Getting to a real answer starts with acknowledging that some data deserves more weight than others. Most tools treat every source the same. We do not.",
    chips: ["Evidence Tiers", "Methodology Assessment", "Source Weighting", "Causal vs Correlational"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    n: "2",
    title: "Conflicts need to be surfaced, not averaged",
    category: "Principle",
    body: "When Meta reports 4.0× ROAS and your MMM reports 2.0×, averaging them gives you 3.0×. That is not a reconciliation. That is hiding the problem. The real work is understanding why those two sources disagree and which one has the stronger methodological foundation.",
    chips: ["Conflict Detection", "Delta Analysis", "Source Agreement Map", "Dispute Flags"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    n: "3",
    title: "Confidence matters as much as the number",
    category: "Approach",
    body: "A ROAS figure without a confidence range is precision theater. We are building a Measurement Confidence Score that tells you not just what the answer is, but how certain you should be about it. A confident 2.4× is far more useful than an uncertain 4.0×.",
    chips: ["Measurement Confidence Score", "Confidence Bands", "Uncertainty Range", "Recency Weighting"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    n: "4",
    title: "The goal is a decision, not a chart",
    category: "Vision",
    body: "Marketing leaders do not need more dashboards. They need to know what to do next. Should you scale this channel? Cut that one? Run a holdout before committing? That is what we are building toward. Measurement that ends with a clear recommendation, not another tab to interpret.",
    chips: ["Recommended Actions", "Scale / Cut / Test", "Experiment Design", "Decision Rationale"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

export default function HowItWorks() {
  const ref = useScrollReveal();

  return (
    <section id="how-it-works" ref={ref as any} className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-20 reveal-on-scroll">
          <div className="section-tag justify-center" style={{ color: "#7C3AED" }}>
            <span>Our Approach</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5" style={{ color: "#0F0F2A" }}>
            How we think about
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> the problem</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Most attribution tools add more data to an already confusing picture.
            We are building something different. Something that evaluates the quality
            of the data you already have, and tells you which parts of it to trust.
          </p>
        </div>

        {/* Principles */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[39px] top-10 bottom-10 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(79,70,229,0.1))" }}
          />

          <div className="space-y-6">
            {principles.map((p, i) => (
              <div
                key={p.n}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 reveal-on-scroll reveal-delay-${i + 1}`}
              >
                {/* Number bubble */}
                <div className="flex-shrink-0 flex items-start">
                  <div
                    className="w-[78px] h-[78px] rounded-2xl flex items-center justify-center flex-col gap-1 z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <div style={{ color: "#7C3AED" }}>{p.icon}</div>
                    <span className="text-xs font-mono font-bold" style={{ color: "rgba(124,58,237,0.6)" }}>
                      0{p.n}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div
                  className="flex-1 rounded-2xl p-7"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    border: "1px solid rgba(0,0,0,0.07)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <h3 className="text-lg font-bold" style={{ color: "#0F0F2A" }}>
                      {p.title}
                    </h3>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full flex-shrink-0 self-start"
                      style={{
                        background: "rgba(124,58,237,0.08)",
                        color: "#7C3AED",
                        border: "1px solid rgba(124,58,237,0.15)",
                      }}
                    >
                      {p.category}
                    </span>
                  </div>
                  <p className="mb-5 leading-relaxed" style={{ color: "#6B7280", fontSize: "0.95rem" }}>
                    {p.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {p.chips.map((c) => (
                      <span
                        key={c}
                        className="text-xs px-3 py-1 rounded-lg font-medium"
                        style={{
                          background: "rgba(124,58,237,0.06)",
                          color: "#7C3AED",
                          border: "1px solid rgba(124,58,237,0.12)",
                        }}
                      >
                        {c}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
