"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const channels = [
  {
    name: "Meta (Facebook + Instagram)",
    platformRoas: "4.0×",
    trueRoas: "1.9×",
    mcs: 62,
    band: "MODERATE",
    bandColor: "#FCD34D",
    flag: "DISPUTED",
    flagColor: "#F87171",
    action: "Reduce spend by 25%",
    actionType: "cut",
  },
  {
    name: "Google Search (Brand)",
    platformRoas: "6.2×",
    trueRoas: "5.1×",
    mcs: 84,
    band: "HIGH",
    bandColor: "#34D399",
    flag: "CONFIRMED",
    flagColor: "#34D399",
    action: "Scale +15% — strong geo holdout evidence",
    actionType: "scale",
  },
  {
    name: "Google Search (Non-brand)",
    platformRoas: "3.5×",
    trueRoas: "2.7×",
    mcs: 71,
    band: "MODERATE",
    bandColor: "#FCD34D",
    flag: "PARTIAL",
    flagColor: "#FCD34D",
    action: "Hold. Run holdout test before scaling.",
    actionType: "test",
  },
  {
    name: "YouTube / Display",
    platformRoas: "2.1×",
    trueRoas: "0.9×",
    mcs: 38,
    band: "LOW",
    bandColor: "#F87171",
    flag: "DISPUTED",
    flagColor: "#F87171",
    action: "Cut. Evidence does not support current spend.",
    actionType: "cut",
  },
];

const actionColors: Record<string, { bg: string; text: string; border: string }> = {
  scale: { bg: "rgba(16,185,129,0.07)", text: "#34D399", border: "rgba(16,185,129,0.2)" },
  cut:   { bg: "rgba(239,68,68,0.07)",  text: "#F87171", border: "rgba(239,68,68,0.2)"  },
  test:  { bg: "rgba(250,204,21,0.07)", text: "#FCD34D", border: "rgba(250,204,21,0.2)" },
};

const actionIcons: Record<string, string> = {
  scale: "↑",
  cut:   "↓",
  test:  "⊙",
};

export default function Output() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as any} className="py-24 lg:py-32" style={{ background: "#06060F" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16 items-end">
          <div className="reveal-on-scroll">
            <div className="section-tag">From Questions to Decisions</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
              Per-channel decisions.
              <br />
              <span className="gradient-text">With evidence behind each one.</span>
            </h2>
            <p className="text-lg" style={{ color: "#6B7CB0" }}>
              Every channel gets a causal iROAS, a Measurement Confidence Score, and a clear
              action. Scale. Cut. Hold. Run a test. Every recommendation includes
              the evidence — and what would change it.
            </p>
          </div>

          {/* Summary stats */}
          <div className="grid grid-cols-3 gap-4 reveal-on-scroll reveal-delay-2">
            {[
              { label: "Avg. platform overstatement", value: "38%", color: "#F87171" },
              { label: "True blended iROAS",           value: "2.6×", color: "#A78BFA" },
              { label: "Budget to reallocate",         value: "$24K", color: "#34D399" },
            ].map((s) => (
              <div
                key={s.label}
                className="rounded-xl p-4 text-center"
                style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <p className="text-2xl font-bold mb-1" style={{ color: s.color }}>
                  {s.value}
                </p>
                <p className="text-xs leading-tight" style={{ color: "#6B7CB0" }}>
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Channel table */}
        <div
          className="rounded-2xl overflow-hidden reveal-on-scroll reveal-delay-3"
          style={{ border: "1px solid rgba(255,255,255,0.07)" }}
        >
          {/* Table header */}
          <div
            className="grid grid-cols-12 gap-4 px-6 py-3 text-xs font-mono font-semibold uppercase tracking-widest"
            style={{ background: "rgba(255,255,255,0.03)", color: "#6B7CB0", borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <span className="col-span-3">Channel</span>
            <span className="col-span-2 text-center">Platform ROAS</span>
            <span className="col-span-2 text-center">True iROAS</span>
            <span className="col-span-1 text-center">MCS</span>
            <span className="col-span-1 text-center">Flag</span>
            <span className="col-span-3 text-right">Recommendation</span>
          </div>

          {/* Rows */}
          {channels.map((ch, i) => {
            const ac = actionColors[ch.actionType];
            return (
              <div
                key={ch.name}
                className={`grid grid-cols-12 gap-4 px-6 py-5 items-center reveal-on-scroll reveal-delay-${i + 1}`}
                style={{ borderBottom: i < channels.length - 1 ? "1px solid rgba(255,255,255,0.04)" : "none" }}
              >
                {/* Channel name */}
                <div className="col-span-3">
                  <p className="text-sm font-medium" style={{ color: "#C4CAEE" }}>{ch.name}</p>
                </div>

                {/* Platform ROAS */}
                <div className="col-span-2 text-center">
                  <span
                    className="text-sm line-through"
                    style={{ color: "#6B7CB0" }}
                  >
                    {ch.platformRoas}
                  </span>
                </div>

                {/* True iROAS */}
                <div className="col-span-2 text-center">
                  <span className="text-base font-bold text-white">{ch.trueRoas}</span>
                </div>

                {/* MCS bar */}
                <div className="col-span-1">
                  <div className="flex flex-col items-center gap-1">
                    <span className="text-xs font-mono font-bold" style={{ color: ch.bandColor }}>
                      {ch.mcs}
                    </span>
                    <div
                      className="w-full h-1 rounded-full"
                      style={{ background: "rgba(255,255,255,0.08)" }}
                    >
                      <div
                        className="h-full rounded-full"
                        style={{ width: `${ch.mcs}%`, background: ch.bandColor }}
                      />
                    </div>
                  </div>
                </div>

                {/* Flag */}
                <div className="col-span-1 text-center">
                  <span
                    className="text-xs font-mono px-2 py-0.5 rounded"
                    style={{ color: ch.flagColor, background: `${ch.flagColor}12`, border: `1px solid ${ch.flagColor}25` }}
                  >
                    {ch.flag}
                  </span>
                </div>

                {/* Recommendation */}
                <div className="col-span-3 text-right">
                  <span
                    className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-lg font-semibold"
                    style={{ background: ac.bg, color: ac.text, border: `1px solid ${ac.border}` }}
                  >
                    <span>{actionIcons[ch.actionType]}</span>
                    {ch.action}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom callout */}
        <div
          className="mt-10 rounded-2xl p-7 reveal-on-scroll reveal-delay-5"
          style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
        >
          <div className="flex flex-col md:flex-row gap-6 items-start md:items-center justify-between">
            <div>
              <p className="font-semibold text-white mb-1">
                What evidence would change this?
              </p>
              <p className="text-sm" style={{ color: "#6B7CB0" }}>
                Every recommendation includes the experiment brief needed to upgrade confidence.
                LensOS tells you exactly what data would move the MCS from MODERATE to HIGH.
              </p>
            </div>
            <a href="#cta" className="btn-primary flex-shrink-0">
              See a live example
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
