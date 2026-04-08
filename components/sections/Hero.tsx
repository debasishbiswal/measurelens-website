"use client";

import { useEffect, useState } from "react";

const lines = [
  { label: "Meta ROAS",   value: "4.0×", status: "DISPUTED",   color: "status-disputed"   },
  { label: "Google ROAS", value: "3.5×", status: "PARTIAL",    color: "status-partial"    },
  { label: "GA4 ROAS",    value: "2.8×", status: "UNVERIFIED", color: "status-unverified" },
  { label: "MMM iROAS",   value: "2.0×", status: "CONFIRMED",  color: "status-confirmed"  },
];

const output = {
  label:      "True ROAS",
  value:      "2.4×",
  confidence: "78 / 100",
  band:       "MODERATE",
  action:     "Reduce Meta spend 20% · Google under-attributed · run holdout",
};

export default function Hero() {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    const t1 = setTimeout(() => setPhase(1), 800);
    const t2 = setTimeout(() => setPhase(2), 2200);
    const t3 = setTimeout(() => setPhase(3), 3600);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, []);

  return (
    <section className="hero-bg relative min-h-screen flex flex-col justify-center overflow-hidden">

      {/* Glow orbs */}
      <div
        className="glow-orb"
        style={{ width: 600, height: 600, top: "-200px", left: "50%", transform: "translateX(-30%)",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.18) 0%, transparent 70%)" }}
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
              <span>Marketing Measurement</span>
            </div>

            <h1
              className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] mb-6"
            >
              <span className="block text-white animate-fade-up" style={{ animationDelay: "0.15s" }}>
                Four platforms.
              </span>
              <span className="block animate-fade-up" style={{ animationDelay: "0.25s" }}>
                <span className="gradient-text">Four answers.</span>
              </span>
              <span className="block text-white animate-fade-up" style={{ animationDelay: "0.35s" }}>
                One is real.
              </span>
            </h1>

            <p
              className="text-lg leading-relaxed mb-8 max-w-lg animate-fade-up"
              style={{ color: "#8892B4", animationDelay: "0.45s" }}
            >
              Every ad platform reports a different ROAS. None of them agree.
              Most marketing teams pick the number that sounds right and move on.
              We are building something that tells you which one to actually trust.
            </p>

            <div
              className="flex flex-col sm:flex-row gap-3 mb-10 animate-fade-up"
              style={{ animationDelay: "0.55s" }}
            >
              <a href="#cta" className="btn-primary">
                Request Early Access
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a href="#how-it-works" className="btn-ghost">
                See our approach
              </a>
            </div>

            <p
              className="text-sm animate-fade-up"
              style={{ color: "rgba(107,124,176,0.6)", animationDelay: "0.65s" }}
            >
              Built for performance marketers and growth leaders who are tired of
              guessing which number to believe.
            </p>
          </div>

          {/* Right: terminal illustration */}
          <div
            className="terminal p-5 lg:p-6 animate-fade-up"
            style={{ animationDelay: "0.4s" }}
          >
            {/* Title bar */}
            <div className="flex items-center gap-2 mb-5 pb-4" style={{ borderBottom: "1px solid rgba(124,58,237,0.15)" }}>
              <span className="terminal-dot bg-red-500 opacity-70" />
              <span className="terminal-dot bg-yellow-400 opacity-70" />
              <span className="terminal-dot bg-green-400 opacity-70" />
              <span className="ml-3 text-xs font-mono" style={{ color: "#6B7CB0" }}>
                lensos — signal reconciliation
              </span>
              {phase >= 1 && (
                <span className="ml-auto text-xs font-mono" style={{ color: "#7C3AED" }}>
                  {phase === 1 ? "ingesting..." : phase === 2 ? "reconciling..." : "✓ complete"}
                </span>
              )}
            </div>

            {/* Source signals */}
            <div className="space-y-2 mb-5">
              <p className="text-xs font-mono mb-3" style={{ color: "#6B7CB0" }}>
                $ lensos reconcile --client acme-co --period 2024-Q4
              </p>
              {lines.map((l) => (
                <div key={l.label} className="flex items-center justify-between py-1.5 px-3 rounded" style={{ background: "rgba(255,255,255,0.02)" }}>
                  <span className="text-sm font-mono" style={{ color: "#8892B4", minWidth: 130 }}>
                    {l.label}
                  </span>
                  <span className="text-sm font-mono font-semibold" style={{ color: "#C4CAEE" }}>
                    {l.value}
                  </span>
                  <span className={`text-xs font-mono font-medium ${l.color}`}>
                    [{l.status}]
                  </span>
                </div>
              ))}
            </div>

            {/* Divider */}
            <div className="divider-glow mb-5" />

            {/* Output */}
            {phase < 3 ? (
              <div className="flex items-center gap-3 py-2 px-3">
                <div className="flex gap-1">
                  {[0,1,2].map(i => (
                    <span
                      key={i}
                      className="w-1.5 h-1.5 rounded-full bg-violet-500 animate-bounce"
                      style={{ animationDelay: `${i * 0.15}s`, opacity: phase >= 1 ? 1 : 0 }}
                    />
                  ))}
                </div>
                <span className="text-sm font-mono" style={{ color: "#6B7CB0" }}>
                  {phase === 0 ? "Ready." : phase === 1 ? "Ingesting signals..." : "Resolving conflicts..."}
                </span>
              </div>
            ) : (
              <div className="space-y-3 animate-fade-up">
                <div className="flex items-center justify-between py-2 px-3 rounded-lg" style={{ background: "rgba(124,58,237,0.08)", border: "1px solid rgba(124,58,237,0.2)" }}>
                  <span className="text-sm font-mono font-bold" style={{ color: "#A78BFA" }}>
                    {output.label}
                  </span>
                  <span className="text-xl font-mono font-bold text-white">
                    {output.value}
                  </span>
                  <div className="text-right">
                    <span className="text-xs font-mono status-confirmed block">
                      MCS {output.confidence}
                    </span>
                    <span className="text-xs font-mono status-confirmed">[{output.band}]</span>
                  </div>
                </div>
                <div className="py-2 px-3 rounded" style={{ background: "rgba(16,185,129,0.06)", border: "1px solid rgba(16,185,129,0.15)" }}>
                  <p className="text-xs font-mono" style={{ color: "#34D399" }}>
                    → {output.action}
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-in" style={{ animationDelay: "1.5s" }}>
        <span className="text-xs" style={{ color: "rgba(107,124,176,0.5)", letterSpacing: "0.08em" }}>SCROLL</span>
        <div className="w-px h-10" style={{ background: "linear-gradient(to bottom, rgba(124,58,237,0.4), transparent)" }} />
      </div>
    </section>
  );
}
