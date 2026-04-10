"use client";

import { useEffect, useRef, useState } from "react";

const CAPS = [
  {
    id: "01",
    name: "Signal Coverage",
    tagline: "Full-stack measurement audit",
    body: "Maps every active tracker, tag, and data connector to the LensOS channel taxonomy. Surfaces which funnel stages have measurement blind spots before you spend on them.",
    color: "#818CF8",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><path d="M21 21l-4.35-4.35M11 7v4l2 2"/>
      </svg>
    ),
  },
  {
    id: "02",
    name: "Causal Attribution",
    tagline: "Bayesian MMM + geo holdouts",
    body: "Isolates true incremental contribution per channel — controlling for seasonality, saturation, and external lift. Every coefficient has a credible interval. Every result is calibrated to geo experiments.",
    color: "#A78BFA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3v18h18M7 17V13M11 17V9M15 17V5M19 17v-3"/>
      </svg>
    ),
  },
  {
    id: "03",
    name: "Scenario Simulation",
    tagline: "Budget modeling with credible intervals",
    body: "Models portfolio-level budget scenarios against calibrated response curves. See the forecasted revenue impact of every allocation decision — with risk-adjusted credible intervals, not point estimates.",
    color: "#60A5FA",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
  {
    id: "04",
    name: "Portfolio Decisions",
    tagline: "Prescriptive. Confidence-scored. Audit-trailed.",
    body: "Constrained multi-KPI optimization produces specific channel allocations with confidence scores, the evidence behind each recommendation, and experiment briefs to upgrade them next cycle.",
    color: "#34D399",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M9 12l2 2 4-4M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2z"/>
      </svg>
    ),
  },
];

export default function CapabilitySummary() {
  const [visible, setVisible] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setVisible(true); obs.disconnect(); } },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      id="capabilities"
      style={{
        padding: "88px 0 80px",
        background: "#06060F",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Top separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 500,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.25), transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Header ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            gap: 32,
            alignItems: "flex-end",
            marginBottom: 48,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
          <div>
            <span
              style={{
                display: "inline-block",
                fontSize: 11,
                fontWeight: 700,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: "#7C3AED",
                background: "rgba(124,58,237,0.10)",
                border: "1px solid rgba(124,58,237,0.25)",
                borderRadius: 8,
                padding: "5px 14px",
                marginBottom: 14,
              }}
            >
              Platform
            </span>
            <h2
              style={{
                fontSize: "clamp(26px, 3.5vw, 40px)",
                fontWeight: 800,
                color: "#E8EEFF",
                lineHeight: 1.18,
                margin: 0,
              }}
            >
              Four integrated capabilities.
              <br />
              <span
                style={{
                  background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                One shared evidence base.
              </span>
            </h2>
          </div>
          <a
            href="https://app.measurelens.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 7,
              background: "#7C3AED",
              color: "white",
              padding: "10px 20px",
              borderRadius: 10,
              fontSize: 13,
              fontWeight: 700,
              textDecoration: "none",
              flexShrink: 0,
              whiteSpace: "nowrap",
            }}
          >
            Open LensOS
            <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* ── 4 capability cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 12,
          }}
        >
          {CAPS.map((cap, i) => {
            const isHov = hovered === cap.id;
            return (
              <div
                key={cap.id}
                onMouseEnter={() => setHovered(cap.id)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  background: isHov ? "rgba(255,255,255,0.04)" : "rgba(255,255,255,0.02)",
                  border: "1px solid " + (isHov ? cap.color + "50" : "rgba(255,255,255,0.07)"),
                  borderRadius: 14,
                  padding: "24px 22px 26px",
                  cursor: "default",
                  transition: "all 0.2s ease",
                  boxShadow: isHov ? "0 4px 24px " + cap.color + "18" : "none",
                  opacity: visible ? 1 : 0,
                  transform: visible ? "translateY(0)" : "translateY(20px)",
                  transitionDelay: visible ? 0.1 + i * 0.07 + "s" : "0s",
                }}
              >
                {/* ID + Icon */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 16,
                  }}
                >
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      color: cap.color,
                      letterSpacing: "0.1em",
                      fontFamily: "JetBrains Mono, monospace",
                    }}
                  >
                    {cap.id}
                  </span>
                  <span style={{ color: cap.color, opacity: 0.8 }}>{cap.icon}</span>
                </div>

                {/* Name + tagline */}
                <h3
                  style={{
                    fontSize: 15,
                    fontWeight: 700,
                    color: "#E8EEFF",
                    margin: "0 0 4px",
                    lineHeight: 1.3,
                  }}
                >
                  {cap.name}
                </h3>
                <p
                  style={{
                    fontSize: 11,
                    color: cap.color,
                    fontWeight: 600,
                    margin: "0 0 12px",
                  }}
                >
                  {cap.tagline}
                </p>

                {/* Body */}
                <p
                  style={{
                    fontSize: 13,
                    color: "#6B7CB0",
                    lineHeight: 1.65,
                    margin: 0,
                  }}
                >
                  {cap.body}
                </p>
              </div>
            );
          })}
        </div>

        {/* ── Closing credibility line ── */}
        <div
          style={{
            marginTop: 40,
            textAlign: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.5s",
          }}
        >
          <p style={{ fontSize: 13, color: "#4A5180" }}>
            Every capability runs on the same Bayesian evidence base.{" "}
            <span style={{ color: "#6B7CB0" }}>
              Measurement feeds validation. Validation calibrates simulation. Simulation drives decisions.
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}
