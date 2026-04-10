"use client";

import { useEffect, useRef, useState } from "react";

/* ─── The three measurement layers ────────────────────────────
   These are NOT comparable systems — they are different layers
   of measurement that answer fundamentally different questions.
   ──────────────────────────────────────────────────────────── */
const LAYERS = [
  {
    num: "01",
    name: "Platform Attribution",
    question: "What did we report?",
    description:
      "Platform dashboards report conversions attributed by their own models — last-click, view-through, data-driven — optimized to show channel performance in the best possible light.",
    examples: ["Meta Ads Manager", "Google Ads", "TikTok Ads", "LinkedIn Campaign Manager"],
    limitation: "Double-counts users who touched multiple channels. Incentivized to over-attribute.",
    color: "#818CF8",
    weight: "Low",
    weightNote: "directional only",
  },
  {
    num: "02",
    name: "Analytics Instrumentation",
    question: "What did our site observe?",
    description:
      "Site and app analytics tools track user sessions and conversion paths from first touch to transaction. They see what your owned properties see — nothing more.",
    examples: ["GA4", "Segment", "Mixpanel", "Amplitude"],
    limitation: "Blind to offline, view-through, and cross-device journeys. Can't identify causal contribution.",
    color: "#60A5FA",
    weight: "Medium",
    weightNote: "useful signal, not causal",
  },
  {
    num: "03",
    name: "Causal Measurement",
    question: "What actually drove growth?",
    description:
      "Statistical models that control for seasonality, competitive activity, and external factors to isolate the true incremental contribution of each channel to business outcomes.",
    examples: ["Media Mix Modelling", "Geo Holdout Tests", "Synthetic Controls", "BSTS"],
    limitation: "Requires calibration and geo experiments to be decision-ready. Not a plug-and-play number.",
    color: "#34D399",
    weight: "High",
    weightNote: "decision-grade evidence",
  },
];

export default function SignalReconciliation() {
  const [visible, setVisible] = useState(false);
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
      id="reconciliation"
      style={{
        padding: "96px 0 80px",
        background: "#0C0C1E",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle top separator */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: "50%",
          transform: "translateX(-50%)",
          width: 600,
          height: 1,
          background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.3), transparent)",
          pointerEvents: "none",
        }}
      />

      <div className="max-w-7xl mx-auto px-6 lg:px-8" style={{ position: "relative" }}>

        {/* ── Header ── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 680,
            margin: "0 auto 64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease, transform 0.6s ease",
          }}
        >
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
              marginBottom: 20,
            }}
          >
            Signal Reconciliation
          </span>

          <h2
            style={{
              fontSize: "clamp(26px, 4vw, 44px)",
              fontWeight: 800,
              lineHeight: 1.15,
              color: "#E8EEFF",
              margin: "0 0 16px",
            }}
          >
            Multiple signals.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA, #60A5FA)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One defensible decision.
            </span>
          </h2>

          <p style={{ fontSize: 16, color: "#6B7CB0", lineHeight: 1.72, margin: 0 }}>
            Platform dashboards, site analytics, and causal models each answer a
            different question — and each has a built-in ceiling on what it can prove.
            LensOS weighs all three layers together to produce a single,
            confidence-scored portfolio decision.
          </p>
        </div>

        {/* ── Three layer cards ── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 2,
            marginBottom: 2,
            background: "rgba(255,255,255,0.04)",
            borderRadius: "14px 14px 0 0",
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 0.6s ease 0.15s, transform 0.6s ease 0.15s",
          }}
        >
          {LAYERS.map((layer, i) => (
            <LayerCard key={layer.num} layer={layer} index={i} />
          ))}
        </div>

        {/* ── Connector band ── */}
        <div
          style={{
            background: "rgba(255,255,255,0.025)",
            borderLeft: "2px solid rgba(255,255,255,0.04)",
            borderRight: "2px solid rgba(255,255,255,0.04)",
            padding: "16px 32px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: 12,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.5s ease 0.35s",
          }}
        >
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v10M4 9l4 4 4-4" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span
            style={{
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4A5180",
            }}
          >
            LensOS confidence-weights and reconciles all three layers
          </span>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M8 2v10M4 9l4 4 4-4" stroke="rgba(124,58,237,0.5)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>

        {/* ── LensOS reconciliation output panel ── */}
        <div
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "2px solid rgba(124,58,237,0.22)",
            borderTop: "none",
            borderRadius: "0 0 14px 14px",
            padding: "28px 32px",
            display: "grid",
            gridTemplateColumns: "1fr auto 1fr auto 1fr",
            gap: "20px 12px",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 0.6s ease 0.5s, transform 0.6s ease 0.5s",
          }}
        >
          {/* Decision output */}
          <div>
            <div
              style={{
                fontSize: 10,
                fontWeight: 700,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                color: "#7C3AED",
                marginBottom: 5,
              }}
            >
              LensOS Output
            </div>
            <div
              style={{
                fontSize: 17,
                fontWeight: 700,
                color: "#E8EEFF",
                lineHeight: 1.3,
                marginBottom: 4,
              }}
            >
              One defensible budget decision
            </div>
            <div style={{ fontSize: 12, color: "#6B7CB0" }}>
              With confidence interval, evidence trail, and rationale
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 56, background: "rgba(124,58,237,0.2)" }} />

          {/* What makes it defensible */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7CB0", marginBottom: 8 }}>
              What makes it defensible
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                "Causal evidence — not platform attribution",
                "Calibrated to geo holdout experiments",
                "Credible interval on every channel number",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                  <span style={{ color: "#34D399", fontSize: 11, flexShrink: 0, marginTop: 1 }}>✓</span>
                  <span style={{ fontSize: 12, color: "#8892B4" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Divider */}
          <div style={{ width: 1, height: 56, background: "rgba(124,58,237,0.2)" }} />

          {/* What it replaces */}
          <div>
            <div style={{ fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", color: "#6B7CB0", marginBottom: 8 }}>
              What it replaces
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              {[
                "Budget meetings where four numbers disagree",
                "Platform-reported ROAS as a decision input",
                "Quarterly consultant decks, already outdated",
              ].map((point) => (
                <div key={point} style={{ display: "flex", alignItems: "flex-start", gap: 7 }}>
                  <span style={{ color: "#F87171", fontSize: 11, flexShrink: 0, marginTop: 1 }}>✕</span>
                  <span style={{ fontSize: 12, color: "#6B7CB0" }}>{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

/* ── Layer card sub-component ── */
function LayerCard({
  layer,
  index,
}: {
  layer: (typeof LAYERS)[0];
  index: number;
}) {
  const [hovered, setHovered] = useState(false);
  const bg = index === 0 ? "#06060F" : index === 1 ? "#080818" : "#060F0A";

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: hovered ? "rgba(255,255,255,0.04)" : bg,
        padding: "28px 24px 26px",
        cursor: "default",
        transition: "background 0.2s ease",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Layer number + weight badge */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: 14,
        }}
      >
        <span
          style={{
            fontSize: 11,
            fontWeight: 700,
            color: layer.color,
            letterSpacing: "0.08em",
            fontFamily: "JetBrains Mono, monospace",
          }}
        >
          LAYER {layer.num}
        </span>
        <span
          style={{
            fontSize: 9.5,
            fontWeight: 700,
            color: layer.color,
            background: layer.color + "15",
            border: "1px solid " + layer.color + "35",
            borderRadius: 4,
            padding: "2px 7px",
            textTransform: "uppercase",
            letterSpacing: "0.06em",
          }}
        >
          {layer.weight} confidence
        </span>
      </div>

      {/* Name */}
      <h3
        style={{
          fontSize: 16,
          fontWeight: 700,
          color: "#E8EEFF",
          margin: "0 0 3px",
        }}
      >
        {layer.name}
      </h3>

      {/* Question */}
      <p
        style={{
          fontSize: 12,
          color: layer.color,
          fontWeight: 600,
          margin: "0 0 12px",
          fontStyle: "italic",
        }}
      >
        "{layer.question}"
      </p>

      {/* Description */}
      <p
        style={{
          fontSize: 13,
          color: "#8892B4",
          lineHeight: 1.62,
          margin: "0 0 14px",
        }}
      >
        {layer.description}
      </p>

      {/* Examples */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 14 }}>
        {layer.examples.map((ex) => (
          <span
            key={ex}
            style={{
              fontSize: 10.5,
              color: "#6B7CB0",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.07)",
              borderRadius: 4,
              padding: "2px 7px",
            }}
          >
            {ex}
          </span>
        ))}
      </div>

      {/* Limitation */}
      <div
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 7,
          padding: "10px 12px",
          background: "rgba(248,113,113,0.05)",
          border: "1px solid rgba(248,113,113,0.12)",
          borderRadius: 7,
        }}
      >
        <span style={{ fontSize: 11, color: "#F87171", flexShrink: 0 }}>⚠</span>
        <span style={{ fontSize: 11.5, color: "#8892B4", lineHeight: 1.5 }}>
          <span style={{ color: "#F87171", fontWeight: 600 }}>Ceiling: </span>
          {layer.limitation}
        </span>
      </div>

      {/* Confidence note */}
      <div
        style={{
          marginTop: 10,
          fontSize: 10.5,
          color: "#4A5180",
          fontFamily: "JetBrains Mono, monospace",
        }}
      >
        Decision weight: {layer.weightNote}
      </div>
    </div>
  );
}
