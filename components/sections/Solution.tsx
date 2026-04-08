"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const sources = [
  { name: "Platform Data", desc: "Fast, granular, biased", tag: "Biased", color: "#F87171" },
  { name: "Analytics",     desc: "Broader view, incomplete", tag: "Incomplete", color: "#FCD34D" },
  { name: "MMM / Models",  desc: "Causal, lags by weeks", tag: "Slow", color: "#60A5FA" },
  { name: "Experiments",   desc: "Ground truth, limited coverage", tag: "Sparse", color: "#A78BFA" },
];

const tiers = [
  { tier: "T1", label: "RCT / Geo Holdout",    color: "#34D399", score: "100" },
  { tier: "T2", label: "Calibrated MMM",        color: "#60A5FA", score: "80"  },
  { tier: "T3", label: "Uncalibrated MMM / MTA",color: "#FCD34D", score: "55"  },
  { tier: "T4", label: "Platform ROAS only",    color: "#F87171", score: "25"  },
];

export default function Solution() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as any} className="py-24 lg:py-32" style={{ background: "#06060F" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        <div className="text-center max-w-2xl mx-auto mb-20 reveal-on-scroll">
          <div className="section-tag justify-center">The MeasureLens Approach</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            We don't pick a winner.
            <br />
            <span className="gradient-text">We triangulate.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            No single source is right. Every source has a known bias and a known coverage gap.
            MeasureLens weights each signal by its evidence credibility and reconciles them into one truth.
          </p>
        </div>

        {/* Triangulation visual */}
        <div className="grid lg:grid-cols-5 gap-6 items-center mb-20">

          {/* Sources */}
          <div className="lg:col-span-2 space-y-3 reveal-on-scroll">
            <p className="text-xs font-mono font-semibold mb-4" style={{ color: "#6B7CB0", letterSpacing: "0.1em" }}>
              INPUT SIGNALS
            </p>
            {sources.map((s, i) => (
              <div
                key={s.name}
                className={`glass-card rounded-lg p-4 reveal-on-scroll reveal-delay-${i + 1}`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-sm font-semibold" style={{ color: "#C4CAEE" }}>{s.name}</span>
                  <span
                    className="text-xs px-2 py-0.5 rounded font-mono"
                    style={{ color: s.color, background: `${s.color}15`, border: `1px solid ${s.color}20` }}
                  >
                    {s.tag}
                  </span>
                </div>
                <p className="text-xs" style={{ color: "#6B7CB0" }}>{s.desc}</p>
              </div>
            ))}
          </div>

          {/* Arrow / connector */}
          <div className="hidden lg:flex flex-col items-center justify-center gap-3 reveal-on-scroll reveal-delay-3">
            <div className="flex flex-col items-center gap-2">
              <div
                className="w-px flex-1"
                style={{ height: 80, background: "linear-gradient(to bottom, transparent, rgba(124,58,237,0.4))" }}
              />
              {/* Diamond connector */}
              <svg width="48" height="48" viewBox="0 0 48 48" className="animate-pulse-slow">
                <polygon
                  points="24,4 44,24 24,44 4,24"
                  fill="rgba(124,58,237,0.08)"
                  stroke="rgba(124,58,237,0.4)"
                  strokeWidth="1"
                />
                <polygon
                  points="24,12 36,24 24,36 12,24"
                  fill="rgba(124,58,237,0.15)"
                  stroke="rgba(124,58,237,0.6)"
                  strokeWidth="1"
                />
                <circle cx="24" cy="24" r="4" fill="#7C3AED" />
              </svg>
              <p className="text-xs text-center font-mono font-semibold" style={{ color: "#7C3AED", letterSpacing: "0.06em" }}>
                WEIGHT &<br/>RECONCILE
              </p>
              <div
                className="w-px flex-1"
                style={{ height: 80, background: "linear-gradient(to bottom, rgba(124,58,237,0.4), transparent)" }}
              />
            </div>
          </div>

          {/* Output */}
          <div className="lg:col-span-2 reveal-on-scroll reveal-delay-4">
            <p className="text-xs font-mono font-semibold mb-4" style={{ color: "#6B7CB0", letterSpacing: "0.1em" }}>
              EVIDENCE SCORING (TIER 1–4)
            </p>
            <div className="space-y-2 mb-6">
              {tiers.map((t) => (
                <div key={t.tier} className="flex items-center gap-3">
                  <span
                    className="text-xs font-mono font-bold w-8 flex-shrink-0"
                    style={{ color: t.color }}
                  >
                    {t.tier}
                  </span>
                  <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.06)" }}>
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${t.score}%`, background: t.color }}
                    />
                  </div>
                  <span className="text-xs" style={{ color: "#8892B4", minWidth: 160 }}>{t.label}</span>
                </div>
              ))}
            </div>

            {/* Truth output card */}
            <div
              className="rounded-xl p-5"
              style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
            >
              <p className="text-xs font-mono font-semibold mb-3" style={{ color: "#7C3AED", letterSpacing: "0.08em" }}>
                ✓ RECONCILED OUTPUT
              </p>
              <div className="flex items-baseline gap-2 mb-2">
                <span className="text-3xl font-bold text-white">2.4×</span>
                <span className="text-sm" style={{ color: "#A78BFA" }}>True iROAS</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-1.5 rounded-full" style={{ background: "rgba(255,255,255,0.08)" }}>
                  <div className="h-full rounded-full w-[78%]" style={{ background: "linear-gradient(90deg, #7C3AED, #4F46E5)" }} />
                </div>
                <span className="text-xs font-mono status-confirmed">MCS 78/100</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom principles */}
        <div className="grid md:grid-cols-3 gap-px reveal-on-scroll reveal-delay-5" style={{ background: "rgba(255,255,255,0.05)" }}>
          {[
            { title: "Every source rated",      body: "Each data input receives an evidence tier (T1–T4) and a staleness penalty. Causal evidence always outranks correlation." },
            { title: "Conflicts surfaced",       body: "When Meta and MMM disagree by >20%, we flag it, explain the likely cause, and show you the gap. No silent averaging." },
            { title: "Confidence, not certainty",body: "We give you a Measurement Confidence Score (0–100). Low scores trigger a recommendation to run an experiment before scaling." },
          ].map((p) => (
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
