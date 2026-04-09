"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const differentiators = [
  {
    n: "1",
    title: "Transparent Bayesian models. Not a black box.",
    category: "Methodology",
    body: "LensOS uses Bayesian hierarchical MMM as the measurement backbone. Uncertainty is native to the architecture — every output includes a posterior distribution, not a point estimate. Model cards document assumptions, priors, fit diagnostics, and holdout performance. When the CFO asks why, you have an answer.",
    chips: ["Bayesian Hierarchical MMM", "Model Cards", "Posterior Distributions", "Assumption Transparency", "Fit Diagnostics"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    n: "2",
    title: "Causal validation. Not correlation dressed up as causation.",
    category: "Validation",
    body: "BSTS and CausalImpact methods estimate incremental lift when clean randomized experiments aren't available. Contamination scoring flags walled-garden tests that overstate lift. Geo-level holdouts feed directly back into the measurement loop as calibration evidence — not as isolated point estimates disconnected from the MMM.",
    chips: ["BSTS / CausalImpact", "Geo Holdout Design", "Contamination Scoring", "Experiment Calibration", "Causal Inference"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    n: "3",
    title: "Deterministic reconciliation. Every rollup ties out.",
    category: "Coherence",
    body: "From geo to regional to national. From channel to subchannel to portfolio. Every number is coherent across the hierarchy — no silent averaging, no rounding errors that compound. Conflicts are surfaced, explained, and documented. This is the 'one version of the truth' that every enterprise needs and no one actually delivers.",
    chips: ["Deterministic Reconciliation", "Hierarchy Coherence", "Conflict Flagging", "Audit Logs", "One Version of Truth"],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    n: "4",
    title: "AI explanations governed by evidence. Not hallucinations.",
    category: "Governance",
    body: "LensOS generates natural language recommendations and explanations only from governed model artifacts — posterior summaries, evidence ledgers, experiment records, and audit logs. Not from an unconstrained black box. Human oversight is operationalized in the product: approval workflows, parameter versioning, and change logs are built in.",
    chips: ["Governed LLM Outputs", "Evidence Ledger", "Approval Workflows", "Parameter Versioning", "Human Oversight"],
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
            <span>Technical Foundation</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5" style={{ color: "#0F0F2A" }}>
            Built differently
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> from the ground up.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Every architectural decision in LensOS was made to solve the specific
            failures of legacy commercial intelligence: opacity, lag, siloed evidence,
            and recommendations you can't interrogate.
          </p>
        </div>

        {/* Differentiators */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div
            className="hidden lg:block absolute left-[39px] top-10 bottom-10 w-px"
            style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.3), rgba(79,70,229,0.1))" }}
          />

          <div className="space-y-6">
            {differentiators.map((d, i) => (
              <div
                key={d.n}
                className={`relative flex flex-col lg:flex-row gap-6 lg:gap-10 reveal-on-scroll reveal-delay-${i + 1}`}
              >
                {/* Icon bubble */}
                <div className="flex-shrink-0 flex items-start">
                  <div
                    className="w-[78px] h-[78px] rounded-2xl flex items-center justify-center flex-col gap-1 z-10"
                    style={{
                      background: "linear-gradient(135deg, rgba(124,58,237,0.15), rgba(79,70,229,0.1))",
                      border: "1px solid rgba(124,58,237,0.2)",
                    }}
                  >
                    <div style={{ color: "#7C3AED" }}>{d.icon}</div>
                    <span className="text-xs font-mono font-bold" style={{ color: "rgba(124,58,237,0.6)" }}>
                      0{d.n}
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
                      {d.title}
                    </h3>
                    <span
                      className="text-xs font-mono px-3 py-1 rounded-full flex-shrink-0 self-start"
                      style={{
                        background: "rgba(124,58,237,0.08)",
                        color: "#7C3AED",
                        border: "1px solid rgba(124,58,237,0.15)",
                      }}
                    >
                      {d.category}
                    </span>
                  </div>
                  <p className="mb-5 leading-relaxed" style={{ color: "#6B7280", fontSize: "0.95rem" }}>
                    {d.body}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {d.chips.map((c) => (
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
