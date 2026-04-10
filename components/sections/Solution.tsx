"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const loop = [
  { label: "Measure",   desc: "Bayesian MMM + causal contribution",       color: "#7C3AED", bg: "rgba(124,58,237,0.12)" },
  { label: "Validate",  desc: "Geo tests + synthetic controls + holdouts", color: "#4F46E5", bg: "rgba(79,70,229,0.12)"  },
  { label: "Simulate",  desc: "What-if scenario planning + forecasts",     color: "#3B82F6", bg: "rgba(59,130,246,0.12)" },
  { label: "Decide",    desc: "Prescriptive optimization + AI agent",      color: "#10B981", bg: "rgba(16,185,129,0.12)" },
];

const principles = [
  {
    title: "Bayesian-native uncertainty",
    body: "Every output carries a credible interval. Low confidence is surfaced explicitly — never hidden inside a single number. You see what the model knows and what it doesn't.",
  },
  {
    title: "Every rollup ties out",
    body: "Geo → regional → national → channel → subchannel → portfolio. Every number is coherent across the hierarchy. CFO-grade deterministic reconciliation is built in.",
  },
  {
    title: "Decisions, not reports",
    body: "The output is a recommendation with rationale — what to do, why, and what confidence interval backs it. Designed to be acted on in a meeting, not interpreted afterward.",
  },
];

export default function Solution() {
  const ref = useScrollReveal();

  return (
    <section id="solution" ref={ref as any} className="py-24 lg:py-32" style={{ background: "#06060F" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-20 reveal-on-scroll">
          <div className="section-tag justify-center">The LensOS Architecture</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Not a dashboard.
            <br />
            <span className="gradient-text">A decisioning loop.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            Measurement, validation, simulation, and optimization are not separate
            workflows. LensOS connects them into a single always-on intelligence loop —
            so every decision is grounded in causal evidence and explicit uncertainty.
          </p>
        </div>

        {/* Loop diagram */}
        <div className="flex flex-col md:flex-row items-stretch justify-center gap-0 mb-20 reveal-on-scroll reveal-delay-2">
          {loop.map((step, i) => (
            <div key={step.label} className="flex flex-col md:flex-row items-stretch flex-1">
              <div
                className="flex-1 rounded-2xl p-6 text-center flex flex-col items-center justify-center gap-3"
                style={{ background: step.bg, border: `1px solid ${step.color}30` }}
              >
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center text-xs font-mono font-bold"
                  style={{ background: `${step.color}20`, color: step.color, border: `1px solid ${step.color}40` }}
                >
                  {String(i + 1).padStart(2, "0")}
                </div>
                <p className="text-base font-bold text-white">{step.label}</p>
                <p className="text-xs leading-relaxed" style={{ color: "#8892B4" }}>{step.desc}</p>
              </div>
              {i < loop.length - 1 && (
                <div className="hidden md:flex items-center px-2">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M4 10h12M12 5l5 5-5 5" stroke="rgba(124,58,237,0.4)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Technical credibility row */}
        <div className="mb-16 reveal-on-scroll reveal-delay-3">
          <p
            className="text-xs font-mono font-semibold text-center mb-6 uppercase tracking-widest"
            style={{ color: "#4A5180" }}
          >
            Model stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Bayesian Hierarchical MMM",
              "BSTS / CausalImpact",
              "Synthetic Control Methods",
              "Constrained Multi-KPI Optimizer",
              "Deterministic Reconciliation",
              "Governed LLM Explanations",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-4 py-2 rounded-lg"
                style={{
                  color: "#A78BFA",
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Bottom principles */}
        <div
          className="grid md:grid-cols-3 gap-px reveal-on-scroll reveal-delay-4"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {principles.map((p) => (
            <div key={p.title} className="p-7" style={{ background: "#06060F" }}>
              <h3 className="text-base font-semibold text-white mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
