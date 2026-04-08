"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const rows = [
  {
    feature: "Reconciles conflicting sources",
    lens: true,  dash: false, mta: "partial", mmm: false,
  },
  {
    feature: "Confidence scoring per channel",
    lens: true,  dash: false, mta: false,     mmm: false,
  },
  {
    feature: "Decision recommendation (scale / cut / test)",
    lens: true,  dash: false, mta: false,     mmm: false,
  },
  {
    feature: "Incrementality-aware",
    lens: true,  dash: false, mta: false,     mmm: "partial",
  },
  {
    feature: "Works without a data science team",
    lens: true,  dash: true,  mta: false,     mmm: false,
  },
  {
    feature: "Time to first insight",
    lens: "< 1 hr", dash: "Real-time", mta: "Days", mmm: "4–8 weeks",
  },
  {
    feature: "Flags attribution overlap",
    lens: true,  dash: false, mta: "partial", mmm: false,
  },
  {
    feature: "Explains source disagreements",
    lens: true,  dash: false, mta: false,     mmm: false,
  },
];

const cols = [
  { key: "lens", label: "MeasureLens", highlight: true  },
  { key: "dash", label: "Dashboards",  highlight: false },
  { key: "mta",  label: "MTA Tools",   highlight: false },
  { key: "mmm",  label: "MMM",         highlight: false },
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
  if (val === "partial") {
    return (
      <span className="text-xs font-mono px-2 py-0.5 rounded" style={{ color: "#FCD34D", background: "rgba(252,211,77,0.08)" }}>
        Partial
      </span>
    );
  }
  // string value
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
          <div className="section-tag justify-center">Why Not Just Use What You Have</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Every existing tool solves{" "}
            <span className="gradient-text">half the problem.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            Dashboards show you data. MTA models guess at causality. MMM gets you closer,
            but takes months. None of them reconcile conflicts or tell you what to do.
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
            style={{ gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr", background: "rgba(255,255,255,0.02)", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
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
                gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
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
        <div className="grid md:grid-cols-3 gap-5 mt-10 reveal-on-scroll reveal-delay-4">
          {[
            {
              tool: "Dashboards",
              verdict: "Show data, don't interpret it",
              problem: "Looker, Tableau, and GA4 are great at surfacing numbers. They're not built to tell you which number is right, why sources conflict, or what to do next.",
            },
            {
              tool: "MTA Tools",
              verdict: "Fragile models, no causal grounding",
              problem: "Multi-touch attribution redistributes credit across touchpoints — but it's still based on observed correlation. It doesn't measure what would have happened without the ad.",
            },
            {
              tool: "MMM",
              verdict: "Powerful but slow and expensive",
              problem: "Marketing Mix Models are the gold standard for causality, but a full engagement takes 6–12 weeks, costs $50K+, and goes stale quickly. Not viable for monthly decisions.",
            },
          ].map((c) => (
            <div
              key={c.tool}
              className="glass-card rounded-xl p-6"
            >
              <p
                className="text-xs font-mono font-bold mb-2 uppercase tracking-wider"
                style={{ color: "#6B7CB0" }}
              >
                {c.tool}
              </p>
              <p className="text-sm font-semibold text-white mb-3">{c.verdict}</p>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>{c.problem}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
