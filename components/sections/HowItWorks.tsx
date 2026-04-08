"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const steps = [
  {
    n: "1",
    title: "Connect your data",
    time: "~10 min",
    body: "Upload CSVs from Meta, Google, and GA4. Drop in your MMM output or MTA export. If you ran an incrementality experiment, upload that too. No data pipeline required.",
    chips: ["Meta Ads CSV", "Google Ads CSV", "GA4 Export", "MMM Output", "Experiment Results"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4M17 8l-5-5-5 5M12 3v12"/>
      </svg>
    ),
  },
  {
    n: "2",
    title: "LensOS reconciles everything",
    time: "~2 min",
    body: "LensOS scores each source by evidence quality, detects attribution overlap, flags disagreements, and computes a weighted truth layer. No configuration needed — it knows what to trust.",
    chips: ["Evidence Scoring", "Overlap Detection", "Conflict Flagging", "Consensus iROAS"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    n: "3",
    title: "Get your real numbers",
    time: "Immediate",
    body: "You see your true iROAS per channel, a Measurement Confidence Score for each one, and a clear breakdown of where sources agree and where they diverge.",
    chips: ["True iROAS", "MCS 0–100", "Source Agreement Map", "Confidence Band"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    n: "4",
    title: "Take the recommended action",
    time: "Your call",
    body: "LensOS tells you exactly what to do: scale this channel, cut that one, or run a holdout test before deciding. Each recommendation includes the confidence level and what evidence would change it.",
    chips: ["Scale / Cut / Test", "Experiment Brief", "Budget Scenarios", "Decision Rationale"],
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
            <span>Process</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5" style={{ color: "#0F0F2A" }}>
            From conflicting data to clear decision
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> in under an hour.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            No data science team. No six-week MMM engagement. No waiting for a consultant.
            Upload your exports, and LensOS does the rest.
          </p>
        </div>

        {/* Steps */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[39px] top-10 bottom-10 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(79,70,229,0.1))" }}
          />

          <div className="space-y-6">
            {steps.map((step, i) => (
              <div
                key={step.n}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 reveal-on-scroll reveal-delay-${i + 1}`}
              >
                {/* Step number bubble */}
                <div className="flex-shrink-0 flex items-start">
                  <div
                    className="w-[78px] h-[78px] rounded-2xl flex items-center justify-center flex-col gap-1 z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <div style={{ color: "#7C3AED" }}>{step.icon}</div>
                    <span className="text-xs font-mono font-bold" style={{ color: "rgba(124,58,237,0.6)" }}>
                      0{step.n}
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
                      {step.title}
                    </h3>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full flex-shrink-0 self-start"
                      style={{
                        background: "rgba(124,58,237,0.08)",
                        color: "#7C3AED",
                        border: "1px solid rgba(124,58,237,0.15)",
                      }}
                    >
                      {step.time}
                    </span>
                  </div>
                  <p className="mb-5 leading-relaxed" style={{ color: "#6B7280", fontSize: "0.95rem" }}>
                    {step.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {step.chips.map((c) => (
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
