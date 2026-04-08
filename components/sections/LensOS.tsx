"use client";
import { useState } from "react";
import { useScrollReveal } from "../ui/useScrollReveal";

const steps = [
  {
    step: "01",
    title: "Ingest",
    subtitle: "Bring every signal together",
    body:
      "The starting point is unifying data that was never designed to talk to each other. Platform exports, model outputs, and experiment results all use different naming conventions, different time windows, and different definitions of a conversion. The first step is getting them into a common language so they can actually be compared.",
    detail: "Meta · Google Ads · GA4 · MMM outputs · MTA feeds · Experiment results",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
  {
    step: "02",
    title: "Evaluate",
    subtitle: "Score each source by evidence quality",
    body:
      "Not all data is created equal. A geo holdout experiment earns a higher evidence tier than a platform's last-click attribution model. A recent MMM with strong geographic coverage carries more weight than one built six months ago. LensOS scores every source on methodology, recency, and coverage before any reconciliation happens.",
    detail: "Evidence Tier · Staleness Penalty · Coverage Assessment · Methodology Classification",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Reconcile",
    subtitle: "Make conflicts explicit",
    body:
      "Where sources disagree, LensOS surfaces the delta rather than averaging it away. Each disagreement is flagged as CONFIRMED, DISPUTED, PARTIAL, or UNVERIFIED, and the likely cause is documented. This is the step most measurement tools skip. It is also the most important one.",
    detail: "Delta Computation · Flag Assignment · Conflict Explanation · Consensus iROAS",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 3v2M12 19v2M3 12h2M19 12h2M5.636 5.636l1.414 1.414M15.95 15.95l1.414 1.414M5.636 18.364l1.414-1.414M15.95 8.05l1.414-1.414"/>
      </svg>
    ),
  },
  {
    step: "04",
    title: "Synthesize",
    subtitle: "Produce a confidence-weighted truth",
    body:
      "LensOS computes a Measurement Confidence Score between 0 and 100 that combines evidence tier weights, source agreement, recency, and coverage. The number it produces reflects both what the answer is and how certain we are about it. A narrow confidence band is earned, not assumed.",
    detail: "MCS Score · Confidence Band · Source Agreement Map · Uncertainty Range",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M4 7h16M4 12h16M4 17h10"/>
      </svg>
    ),
  },
  {
    step: "05",
    title: "Recommend",
    subtitle: "A decision, not a report",
    body:
      "The output is not a chart. It is a recommendation. Scale this channel, cut that one, or run a holdout test before committing. Every recommendation includes the confidence level behind it and what evidence would change the answer. Designed to be acted on in a meeting, not interpreted afterward.",
    detail: "Recommended Action · Confidence Level · Evidence Gap · Experiment Design Brief",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

export default function LensOS() {
  const [active, setActive] = useState(0);
  const ref = useScrollReveal();

  return (
    <section id="lensos" ref={ref as any} className="py-24 lg:py-32" style={{ background: "#0C0C1E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div className="reveal-on-scroll">
            <div className="section-tag">LensOS · Intelligence Layer</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
              Not a dashboard.
              <br />
              <span className="gradient-text">A reasoning engine.</span>
            </h2>
            <p className="text-lg" style={{ color: "#6B7CB0" }}>
              LensOS is the core intelligence layer of MeasureLens. It does not display
              your data. It evaluates it. It weighs competing sources of evidence,
              flags what is in conflict, and produces an answer you can act on.
              That distinction is the whole point.
            </p>
          </div>
          <div className="reveal-on-scroll reveal-delay-2">
            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <p className="text-xs font-mono font-semibold mb-3" style={{ color: "#7C3AED", letterSpacing: "0.08em" }}>
                LENSOS SYSTEM DESIGN
              </p>
              <div className="space-y-2">
                {[
                  "Signal normalization",
                  "Evidence tier scoring",
                  "Conflict resolution logic",
                  "Confidence computation",
                  "Decision synthesis",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="status-confirmed text-xs">●</span>
                    <span className="text-sm font-mono" style={{ color: "#8892B4" }}>{item}</span>
                    <span className="ml-auto text-xs font-mono" style={{ color: "rgba(124,58,237,0.5)" }}>IN DEVELOPMENT</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Steps — interactive tabs */}
        <div className="grid lg:grid-cols-5 gap-4 mb-4 reveal-on-scroll reveal-delay-3">
          {steps.map((s, i) => (
            <button
              key={s.step}
              onClick={() => setActive(i)}
              className={`text-left p-5 rounded-xl border transition-all duration-200 ${
                active === i
                  ? "border-violet-600 bg-violet-900/10"
                  : "border-white/5 bg-white/[0.015] hover:border-violet-800/40"
              }`}
            >
              <div
                className="flex items-center gap-2 mb-3"
                style={{ color: active === i ? "#A78BFA" : "#6B7CB0" }}
              >
                {s.icon}
                <span className="text-xs font-mono font-bold tracking-widest" style={{ letterSpacing: "0.1em" }}>
                  {s.step}
                </span>
              </div>
              <p className={`text-sm font-semibold ${active === i ? "text-white" : "text-slate-400"}`}>
                {s.title}
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
            <p className="text-base font-semibold text-white mb-1">See LensOS reconcile your data</p>
            <p className="text-sm" style={{ color: "#6B7CB0" }}>
              Load the demo dataset and walk through all 4 screens — no setup, no API key required.
            </p>
          </div>
          <a
            href="https://app.measurelens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary flex-shrink-0"
            style={{ whiteSpace: "nowrap" }}
          >
            See LensOS in Action
            <svg width="15" height="15" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Active step detail */}
        <div
          className="rounded-2xl p-8 lg:p-10 reveal-on-scroll reveal-delay-4"
          style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
        >
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <span
                  className="text-xs font-mono font-bold px-3 py-1 rounded"
                  style={{ background: "rgba(124,58,237,0.2)", color: "#A78BFA", border: "1px solid rgba(124,58,237,0.3)" }}
                >
                  STEP {steps[active].step}
                </span>
                <span className="text-sm" style={{ color: "#6B7CB0" }}>{steps[active].subtitle}</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">{steps[active].title}</h3>
              <p className="leading-relaxed" style={{ color: "#8892B4" }}>{steps[active].body}</p>
            </div>
            <div>
              <p className="text-xs font-mono font-semibold mb-3" style={{ color: "#6B7CB0", letterSpacing: "0.1em" }}>
                COMPONENTS
              </p>
              <div className="flex flex-wrap gap-2">
                {steps[active].detail.split(" · ").map((d) => (
                  <span
                    key={d}
                    className="text-xs px-3 py-1.5 rounded-lg font-mono"
                    style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#C4CAEE" }}
                  >
                    {d}
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
