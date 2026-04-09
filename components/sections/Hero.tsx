"use client";

import { useEffect, useState } from "react";

const channels = [
  { label: "Paid Social",   iroas: "1.2×", mcs: 31,  status: "DISPUTED",   color: "#F87171", action: "Cut $50K" },
  { label: "SEM Brand",     iroas: "5.1×", mcs: 84,  status: "CONFIRMED",  color: "#34D399", action: "+$80K" },
  { label: "CTV / Video",   iroas: "2.8×", mcs: 71,  status: "PARTIAL",    color: "#FCD34D", action: "+$70K" },
  { label: "Email / CRM",   iroas: "3.9×", mcs: 78,  status: "CONFIRMED",  color: "#34D399", action: "Hold" },
];

const decision = {
  action:     "Shift $200K: Paid Social → SEM Brand + CTV",
  impact:     "+$310K projected revenue",
  confidence: "HIGH · MCS 79/100",
  experiment: "Geo holdout brief ready →",
};

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 700);
    const t2 = setTimeout(() => setPhase(2), 2000);
    const t3 = setTimeout(() => setPhase(3), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="hero-bg relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{ width: 700, height: 600, top: "-200px", left: "50%", transform: "translateX(-30%)",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.20) 0%, transparent 70%)" }}
      />
      <div
        className="glow-orb"
        style={{ width: 400, height: 400, bottom: "0px", right: "5%",
          background: "radial-gradient(ellipse, rgba(79,70,229,0.12) 0%, transparent 70%)" }}
      />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: copy */}
          <div>
            <div className="section-tag animate-fade-in">
              <span style={{ color: "#A78BFA" }}>●</span>
              <span>Decisioning OS for Growth Teams</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="block text-white animate-fade-up" style={{ animationDelay: "0.15s" }}>
                Know exactly
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.25s" }}>
                <span className="gradient-text">where to invest</span>
              </span>
              <span className="block text-white animate-fade-up" style={{ animationDelay: "0.35s" }}>
                next.
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-lg animate-fade-up"
              style={{ color: "#8892B4", animationDelay: "0.45s" }}
            >
              LensOS is the AI-native commercial intelligence platform that connects
              Bayesian measurement, causal validation, and prescriptive budget optimization
              into a single always-on decisioning loop.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a
                href="https://app.measurelens.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary"
              >
                Launch LensOS
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="mailto:hello@measurelens.com" className="btn-ghost">
                Book a Demo
              </a>
            </div>

            {/* Methodology chips */}
            <div
              className="flex flex-wrap gap-2 animate-fade-up"
              style={{ animationDelay: "0.65s" }}
            >
              {[
                "Bayesian Hierarchical MMM",
                "Causal Validation",
                "Scenario Simulation",
                "Prescriptive Optimization",
              ].map((chip) => (
                <span
                  key={chip}
                  className="text-xs font-mono px-3 py-1 rounded-full"
                  style={{
                    color: "rgba(167,139,250,0.7)",
                    background: "rgba(124,58,237,0.06)",
                    border: "1px solid rgba(124,58,237,0.18)",
                  }}
                >
                  {chip}
                </span>
              ))}
            </div>
          </div>

          {/* Right: decision engine terminal */}
          <div
            className="terminal p-5 lg:p-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 mb-4 pb-4" style={{ borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
              <span className="terminal-dot bg-red-500 opacity-70" />
              <span className="terminal-dot bg-yellow-400 opacity-70" />
              <span className="terminal-dot bg-green-400 opacity-70" />
              <span className="ml-3 text-xs font-mono" style={{ color: "#6B7CB0" }}>
                lensos — budget decision engine
              </span>
              {phase >= 1 && (
                <span className="ml-auto text-xs font-mono" style={{ color: "#7C3AED" }}>
                  {phase === 1 ? "measuring..." : phase === 2 ? "optimizing..." : "✓ decision ready"}
                </span>
              )}
            </div>

            {/* Query */}
            <div className="mb-4">
              <p className="text-xs font-mono mb-1" style={{ color: "#4A5180" }}>$ query</p>
              <p className="text-xs font-mono" style={{ color: "#6B7CB0" }}>
                "Where should I reallocate $200K this quarter?"
              </p>
            </div>

            {/* Channel signals */}
            <div className="space-y-1.5 mb-4">
              <p className="text-xs font-mono mb-2" style={{ color: "#4A5180" }}>
                ↳ analyzing channels · iROAS + confidence
              </p>
              {channels.map((ch) => (
                <div
                  key={ch.label}
                  className="flex items-center gap-2 py-1.5 px-3 rounded"
                  style={{ background: "rgba(255,255,255,0.02)" }}
                >
                  <span className="text-xs font-mono flex-1" style={{ color: "#8892B4", minWidth: 110 }}>
                    {ch.label}
                  </span>
                  <span className="text-xs font-mono font-semibold w-10" style={{ color: "#C4CAEE" }}>
                    {ch.iroas}
                  </span>
                  <div
                    className="h-1 rounded-full flex-1 max-w-16"
                    style={{ background: "rgba(255,255,255,0.06)" }}
                  >
                    <div
                      className="h-full rounded-full"
                      style={{ width: `${ch.mcs}%`, background: ch.color }}
                    />
                  </div>
                  <span
                    className="text-xs font-mono w-20 text-right"
                    style={{ color: ch.color }}
                  >
                    [{ch.status}]
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="divider-glow mb-4" />

            {/* Decision output */}
            {phase < 3 ? (
              <div className="flex items-center gap-3 py-2 px-3">
                <div className="flex gap-1">
                  {[0, 1, 2].map((i) => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s`, opacity: phase >= 1 ? 1 : 0 }}
                    />
                  ))}
                </div>
                <span className="text-sm font-mono" style={{ color: "#6B7CB0" }}>
                  {phase === 0 ? "Awaiting input..." : phase === 1 ? "Running Bayesian MMM..." : "Simulating scenarios..."}
                </span>
              </div>
            ) : (
              <div className="space-y-2 animate-fade-up">
                <div
                  className="py-2.5 px-3 rounded-lg"
                  style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <p className="text-xs font-mono font-semibold mb-1.5" style={{ color: "#A78BFA" }}>
                    → DECISION
                  </p>
                  <p className="text-sm font-mono font-bold text-white">{decision.action}</p>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div
                    className="py-2 px-3 rounded"
                    style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}
                  >
                    <p className="text-xs font-mono" style={{ color: "#34D399" }}>↑ {decision.impact}</p>
                  </div>
                  <div
                    className="py-2 px-3 rounded"
                    style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
                  >
                    <p className="text-xs font-mono" style={{ color: "#A78BFA" }}>{decision.confidence}</p>
                  </div>
                </div>
                <div
                  className="py-1.5 px-3 rounded"
                  style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.06)" }}
                >
                  <p className="text-xs font-mono" style={{ color: "#4A5180" }}>{decision.experiment}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in"
        style={{ animationDelay: "1.5s" }}
      >
        <span className="text-xs" style={{ color: "rgba(107,124,176,0.5)", letterSpacing: "0.08em" }}>SCROLL</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.4), transparent)" }} />
      </div>
    </section>
  );
}
