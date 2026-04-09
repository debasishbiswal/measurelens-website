"use client";
import { useState } from "react";
import { useScrollReveal } from "../ui/useScrollReveal";

const pillars = [
  {
    id: "01",
    label: "Measurement",
    title: "Measurement Engine",
    tagline: "Understand what is actually driving growth",
    body:
      "Bayesian hierarchical MMM calibrated to your media mix, markets, and conversion KPIs. Handles sparse data, media carryover and saturation, and shares statistical strength across geographies. Response curves per channel. Causal contribution decomposition. Model fit diagnostics and holdout validation built into every run.",
    chips: ["Bayesian Hierarchical MMM", "Media Carryover + Saturation", "Causal Contribution", "Response Curves", "Geo-level Modeling"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M3 3v18h18"/><path d="M18 17V9M13 17V5M8 17v-3"/>
      </svg>
    ),
    metric: { label: "MCS", value: "84", color: "#34D399", sub: "CONFIRMED" },
  },
  {
    id: "02",
    label: "Validation",
    title: "Validation Layer",
    tagline: "Validate what is truly incremental",
    body:
      "Geo holdouts, synthetic controls, and BSTS-based CausalImpact for estimating incremental lift. Contamination scoring flags walled-garden experiments that can't be trusted at scale. Experiment results feed directly back into the measurement loop as priors — not as isolated point estimates. Every test calibrates the model.",
    chips: ["Geo Holdout Design", "BSTS / CausalImpact", "Synthetic Control", "Contamination Scoring", "Experiment Calibration"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
    metric: { label: "iLift", value: "+34%", color: "#60A5FA", sub: "GEO HOLDOUT" },
  },
  {
    id: "03",
    label: "Forecasting",
    title: "Scenario Planning",
    tagline: "See what happens before you spend",
    body:
      "What-if simulation engine built on calibrated response curves. Model the revenue impact of moving $500K from Paid Social to CTV. Forecast bookings under three spend scenarios — conservative, moderate, aggressive — with risk-adjusted credible intervals. Upload plans, adjust assumptions, track results in-market against forecast.",
    chips: ["What-If Simulation", "Risk-Adjusted Forecasts", "Budget Scenario Planning", "Revenue Projection", "Credible Intervals"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M2 2l20 20M8 8C5 9.5 3 12 3 15a9 9 0 0018 0c0-3-2-5.5-5-7M12 3v4"/>
      </svg>
    ),
    metric: { label: "Δ Revenue", value: "+$310K", color: "#A78BFA", sub: "MODERATE SCENARIO" },
  },
  {
    id: "04",
    label: "Optimization",
    title: "Optimization Engine",
    tagline: "Know exactly where to invest next",
    body:
      "Constrained budget allocation that maximizes bookings, minimizes CAC, or hits a revenue target — with guardrails. Set channel floors and ceilings, brand spend minimums, and probability-of-miss constraints. Multi-KPI optimization across the portfolio. Every allocation comes with a confidence interval and the experiment brief needed to upgrade it.",
    chips: ["Constrained Budget Allocation", "Multi-KPI Optimization", "Channel Guardrails", "Brand Floor Protection", "Probability of Miss"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/><path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
    metric: { label: "CAC Δ", value: "−18%", color: "#34D399", sub: "OPTIMIZED PLAN" },
  },
  {
    id: "05",
    label: "AI Agent",
    title: "AI Decision Agent",
    tagline: "Ask growth questions like you'd ask your best strategist",
    body:
      "Conversational decision interface grounded in governed model outputs — not an unconstrained LLM. Ask: 'Why is Paid Social flagged as disputed?' or 'What's the risk if I cut CTV 30%?' or 'Which experiments should I run next quarter?' Every answer includes confidence intervals, the evidence behind it, and what would change the recommendation.",
    chips: ["Natural Language Interface", "Governed LLM Outputs", "Confidence Intervals", "Evidence Rationale", "Experiment Design"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z"/>
      </svg>
    ),
    metric: { label: "Confidence", value: "HIGH", color: "#A78BFA", sub: "MCS 79/100" },
  },
];

export default function LensOS() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  const p = pillars[active];

  return (
    <section id="lensos" ref={ref as any} className="py-24 lg:py-32" style={{ background: "#0C0C1E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div className="reveal-on-scroll">
            <div className="section-tag">Platform · Five Integrated Capabilities</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
              Five capabilities.
              <br />
              <span className="gradient-text">One connected system.</span>
            </h2>
            <p className="text-lg" style={{ color: "#6B7CB0" }}>
              Most teams patch together five separate tools and still can't get a
              confident budget decision. LensOS integrates the full decisioning stack —
              so measurement, validation, simulation, and optimization share the same
              evidence base and speak the same language.
            </p>
          </div>
          <div className="reveal-on-scroll reveal-delay-2">
            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <p className="text-xs font-mono font-semibold mb-4" style={{ color: "#7C3AED", letterSpacing: "0.08em" }}>
                THE DECISIONING LOOP
              </p>
              <div className="space-y-2">
                {pillars.map((pill, i) => (
                  <div key={pill.id} className="flex items-center gap-3">
                    <span
                      className="text-xs font-mono font-bold w-6"
                      style={{ color: active === i ? "#A78BFA" : "rgba(124,58,237,0.35)" }}
                    >
                      {pill.id}
                    </span>
                    <span
                      className="text-sm font-mono"
                      style={{ color: active === i ? "#C4CAEE" : "#6B7CB0" }}
                    >
                      {pill.title}
                    </span>
                    {active === i && (
                      <span className="ml-auto text-xs font-mono status-confirmed">● active</span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Pillar tabs */}
        <div className="grid lg:grid-cols-5 gap-3 mb-4 reveal-on-scroll reveal-delay-3">
          {pillars.map((pillar, i) => (
            <button
              key={pillar.id}
              onClick={() => setActive(i)}
              className={`text-left p-4 rounded-xl border transition-all duration-200 ${
                active === i
                  ? "border-violet-600 bg-violet-900/10"
                  : "border-white/5 bg-white/[0.015] hover:border-violet-800/40"
              }`}
            >
              <div
                className="flex items-center gap-2 mb-3"
                style={{ color: active === i ? "#A78BFA" : "#6B7CB0" }}
              >
                {pillar.icon}
                <span className="text-xs font-mono font-bold tracking-widest" style={{ letterSpacing: "0.1em" }}>
                  {pillar.id}
                </span>
              </div>
              <p className={`text-sm font-semibold ${active === i ? "text-white" : "text-slate-400"}`}>
                {pillar.label}
              </p>
            </button>
          ))}
        </div>

        {/* CTA banner */}
        <div
          className="rounded-2xl p-6 lg:p-8 mb-4 reveal-on-scroll reveal-delay-4 flex flex-col sm:flex-row items-center justify-between gap-4"
          style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
        >
          <div>
            <p className="text-base font-semibold text-white mb-1">See the full decisioning loop in action</p>
            <p className="text-sm" style={{ color: "#6B7CB0" }}>
              Load the LensOS demo — walk through all five capabilities with realistic data. No setup required.
            </p>
          </div>
          <a
            href="https://app.measurelens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
            style={{ whiteSpace: "nowrap" }}
          >
            Launch LensOS
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Active pillar detail */}
        <div
          className="rounded-2xl p-8 lg:p-10 reveal-on-scroll reveal-delay-4"
          style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-start">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-mono font-bold px-3 py-1 rounded"
                  style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  CAPABILITY {p.id}
                </span>
                <span className="text-sm" style={{ color: "#6B7CB0" }}>{p.tagline}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{p.title}</h3>
              <p className="leading-relaxed mb-6" style={{ color: "#8892B4" }}>{p.body}</p>

              {/* Sample metric */}
              <div
                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-lg"
                style={{ background: `${p.metric.color}10`, border: `1px solid ${p.metric.color}25` }}
              >
                <div>
                  <p className="text-xs font-mono" style={{ color: p.metric.color }}>{p.metric.label}</p>
                  <p className="text-xl font-bold font-mono" style={{ color: p.metric.color }}>{p.metric.value}</p>
                </div>
                <div
                  className="w-px h-8 mx-1"
                  style={{ background: `${p.metric.color}20` }}
                />
                <p className="text-xs font-mono" style={{ color: `${p.metric.color}80` }}>{p.metric.sub}</p>
              </div>
            </div>

            <div>
              <p className="text-xs font-mono font-semibold mb-4" style={{ color: "#6B7CB0", letterSpacing: "0.1em" }}>
                CAPABILITIES
              </p>
              <div className="flex flex-wrap gap-2">
                {p.chips.map((chip) => (
                  <span
                    key={chip}
                    className="text-xs px-3 py-1.5 rounded-lg font-mono"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#C4CAEE" }}
                  >
                    {chip}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
