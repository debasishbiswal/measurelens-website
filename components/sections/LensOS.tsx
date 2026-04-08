"use client";
import { useState } from "react";
import { useScrollReveal } from "../ui/useScrollReveal";

const steps = [
  {
    step: "01",
    title: "Ingest",
    subtitle: "Connect every signal",
    body:
      "Upload CSVs, connect Meta/Google/GA4 exports, feed MMM outputs and experiment results. LensOS normalizes every source into a canonical taxonomy regardless of naming conventions.",
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
    subtitle: "Score the evidence",
    body:
      "Every data source receives an evidence tier (T1–T4) based on methodology and a staleness penalty based on recency. A geo holdout experiment beats a platform click attribution model every time — LensOS knows the difference.",
    detail: "Evidence Tier · Staleness Score · Coverage % · Methodology Assessment",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
  },
  {
    step: "03",
    title: "Reconcile",
    subtitle: "Resolve conflicts explicitly",
    body:
      "Where sources disagree, LensOS surfaces the delta, assigns a CONFIRMED / DISPUTED / PARTIAL / UNVERIFIED flag, and explains the likely cause. No silent averaging. No false precision.",
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
    subtitle: "Generate the truth layer",
    body:
      "LensOS computes a Measurement Confidence Score (0–100) combining evidence tier weight, source agreement, recency, and coverage. The number it gives you reflects both how right it is and how sure it is.",
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
    subtitle: "Decision-ready output",
    body:
      "Not a chart. A recommendation. Scale, cut, or run a test first — every output includes the action, the confidence behind it, and what evidence would change the answer. Built for a CMO to act on in a meeting.",
    detail: "Action · Confidence Level · Evidence Gap · Experiment Design Brief",
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
    <section ref={ref as any} className="py-24 lg:py-32" style={{ background: "#0C0C1E" }}>
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
              LensOS is the agentic AI core of MeasureLens. It doesn't show you data —
              it actively weighs evidence, flags conflicts, and produces decisions.
              The difference is everything.
            </p>
          </div>
          <div className="reveal-on-scroll reveal-delay-2">
            <div
              className="p-5 rounded-xl"
              style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <p className="text-xs font-mono font-semibold mb-3" style={{ color: "#7C3AED", letterSpacing: "0.08em" }}>
                LENSOS SYSTEM STATUS
              </p>
              <div className="space-y-2">
                {["Signal ingestion", "Evidence scoring", "Conflict resolution", "Confidence computation"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <span className="status-confirmed text-xs">●</span>
                    <span className="text-sm font-mono" style={{ color: "#8892B4" }}>{item}</span>
                    <span className="ml-auto text-xs font-mono status-confirmed">ACTIVE</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Steps — interactive */}
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
                OUTPUTS
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
