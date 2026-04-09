"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const rows = [
  {
    feature: "Time to first decision",
    lens: "Days",
    legacy: "8–16 weeks",
    saas: "Real-time",
    better: "lens",
  },
  {
    feature: "Model transparency",
    lens: "Bayesian — full model cards",
    legacy: "Proprietary — gated",
    saas: "Black-box",
    better: "lens",
  },
  {
    feature: "Uncertainty quantification",
    lens: "Native credible intervals",
    legacy: "Unspecified / undocumented",
    saas: "None",
    better: "lens",
  },
  {
    feature: "Causal validation",
    lens: "Built into measurement loop",
    legacy: "Separate engagement",
    saas: "No",
    better: "lens",
  },
  {
    feature: "Experiment contamination check",
    lens: true,
    legacy: true,
    saas: false,
    better: "both",
  },
  {
    feature: "Always-on model updates",
    lens: true,
    legacy: "Quarterly",
    saas: true,
    better: "lens",
  },
  {
    feature: "Audit trail + governance",
    lens: true,
    legacy: "Partial",
    saas: false,
    better: "lens",
  },
  {
    feature: "Export format",
    lens: "Excel · PPTX · API · Audit Pack",
    legacy: "PDF reports",
    saas: "Dashboard only",
    better: "lens",
  },
  {
    feature: "Prescriptive budget optimization",
    lens: true,
    legacy: true,
    saas: false,
    better: "both",
  },
  {
    feature: "Pricing model",
    lens: "SaaS — product-led",
    legacy: "$150K+ engagement",
    saas: "SaaS",
    better: "lens",
  },
];

const cols = [
  { key: "lens",   label: "LensOS",                      highlight: true  },
  { key: "legacy", label: "Legacy Commercial Intel",     highlight: false },
  { key: "saas",   label: "MMM / Attribution SaaS",      highlight: false },
];

function Cell({ val, highlight }: { val: boolean | string; highlight: boolean }) {
  if (val === true) {
    return (
      <span
        className="inline-flex items-center justify-center w-6 h-6 rounded-full"
        style={{ background: highlight ? "rgba(52,211,153,0.15)" : "rgba(52,211,153,0.08)" }}
      >
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M2 6l3 3 5-5" stroke="#34D399" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </span>
    );
  }
  if (val === false) {
    return (
      <span className="inline-flex items-center justify-center w-6 h-6">
        <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
          <path d="M3 3l6 6M9 3l-6 6" stroke="rgba(255,255,255,0.18)" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      </span>
    );
  }
  if (val === "Partial" || val === "Quarterly") {
    return (
      <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ color: "#FCD34D", background: "rgba(252,211,77,0.08)" }}>
        {val}
      </span>
    );
  }
  return (
    <span
      className="text-xs font-mono font-semibold"
      style={{ color: highlight ? "#A78BFA" : "#6B7CB0" }}
    >
      {val}
    </span>
  );
}

export default function Differentiation() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as any} className="py-24 lg:py-32" style={{ background: "#0C0C1E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <div className="section-tag justify-center">LensOS vs. The Alternatives</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Same outcome.{" "}
            <span className="gradient-text">Radically different path.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            Legacy commercial intelligence platforms sell the right outcome — confident budget decisions.
            They just take months, cost a small fortune, and give you a PDF you can't interrogate.
            LensOS is the same outcome, productized.
          </p>
        </div>

        {/* Comparison table */}
        <div
          className="rounded-2xl overflow-hidden reveal-on-scroll reveal-delay-2"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Column headers */}
          <div
            className="grid"
            style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div className="px-6 py-4" />
            {cols.map((c) => (
              <div
                key={c.key}
                className="px-4 py-4 text-center"
                style={c.highlight ? { borderLeft: "1px solid rgba(124,58,237,0.25)", background: "rgba(124,58,237,0.06)" } : {}}
              >
                {c.highlight && (
                  <div
                    className="inline-flex items-center gap-1.5 text-xs px-2.5 py-0.5 rounded-full mb-1.5 font-semibold"
                    style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
                  >
                    <span>★</span> Our product
                  </div>
                )}
                <p
                  className={`text-sm font-semibold ${c.highlight ? "text-white" : ""}`}
                  style={!c.highlight ? { color: "#6B7CB0" } : {}}
                >
                  {c.label}
                </p>
              </div>
            ))}
          </div>

          {/* Feature rows */}
          {rows.map((row, i) => (
            <div
              key={row.feature}
              className={`grid items-center reveal-on-scroll reveal-delay-${(i % 4) + 1}`}
              style={{
                gridTemplateColumns: "2fr 1fr 1fr 1fr",
                borderBottom: i < rows.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none",
              }}
            >
              <div className="px-6 py-4">
                <span className="text-sm" style={{ color: "#B8C0E0" }}>{row.feature}</span>
              </div>
              {cols.map((c) => (
                <div
                  key={c.key}
                  className="px-4 py-4 flex items-center justify-center"
                  style={c.highlight ? { borderLeft: "1px solid rgba(124,58,237,0.15)", background: "rgba(124,58,237,0.03)" } : {}}
                >
                  <Cell val={(row as any)[c.key]} highlight={c.highlight} />
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Competitor summary cards */}
        <div className="grid md:grid-cols-2 gap-5 mt-10 reveal-on-scroll reveal-delay-4">
          {[
            {
              tool: "Legacy Commercial Intelligence",
              subtitle: "Analytic Partners, Nielsen, Ipsos",
              verdict: "Powerful models. Opaque delivery.",
              problem: "The incumbents invented commercial intelligence and deserve credit for it. But their output is a consulting deliverable — not a product. 16-week engagements, gated model specifications, and PDF reports don't meet the cadence of modern growth teams. You can't interrogate the model. You can't run a what-if at 2pm on a Tuesday.",
            },
            {
              tool: "MMM / Attribution SaaS",
              subtitle: "Meridian, Northbeam, Triple Whale",
              verdict: "Fast to deploy. Built for performance, not decisions.",
              problem: "New-wave MMM tools democratized measurement and that's genuinely valuable. But most stop at measurement. They don't validate incrementality, don't run scenario planning across the full portfolio, and don't produce a defensible decision with a confidence interval behind it. A dashboard is not a decision.",
            },
          ].map((c) => (
            <div
              key={c.tool}
              className="glass-card rounded-xl p-6"
            >
              <p
                className="text-xs font-mono font-bold mb-0.5 uppercase tracking-wider"
                style={{ color: "#6B7CB0" }}
              >
                {c.tool}
              </p>
              <p className="text-xs font-mono mb-3" style={{ color: "#4A5180" }}>{c.subtitle}</p>
              <p className="text-sm font-semibold text-white mb-3">{c.verdict}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>{c.problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
