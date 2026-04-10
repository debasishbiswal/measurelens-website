"use client";

import { useEffect, useRef, useState } from "react";

/* ─── Measurement conflict data ─────────────────────────────── */
const SOURCES = [
  {
    source: "Platform Analytics",
    value: "4.7x",
    label: "ROAS (self-reported)",
    color: "#F87171",
    note: "Excludes view-through overlap",
  },
  {
    source: "GA4 Last-Click",
    value: "1.3x",
    label: "ROAS (attributed)",
    color: "#FBBF24",
    note: "Misses upper-funnel contribution",
  },
  {
    source: "Multi-Touch Model",
    value: "0.8x",
    label: "ROAS (data-driven)",
    color: "#FBBF24",
    note: "No causal identification",
  },
  {
    source: "Media Mix Model",
    value: "2.1x",
    label: "iROAS (uncalibrated)",
    color: "#6B7CB0",
    note: "No holdout validation",
  },
];

/* ─── Orbital nodes ──────────────────────────────────────────── */
const NODES = [
  {
    id: "measure",
    label: "Measure",
    sublabel: "Causal Attribution",
    detail: "Bayesian MMM isolates true incremental contribution per channel, controlling for saturation, carryover, and external lift. Every coefficient has a credible interval.",
    color: "#7C3AED",
    iconPath: "M3 3v18h18M7 17V13M11 17V9M15 17V5M19 17v-3",
    pos: "top" as const,
  },
  {
    id: "validate",
    label: "Validate",
    sublabel: "Geo Experiments",
    detail: "Holdout geo tests and BSTS-based synthetic controls confirm incremental lift. Contamination scoring flags experiments that can't be trusted at scale.",
    color: "#4F46E5",
    iconPath: "M9 12l2 2 4-4M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z",
    pos: "right" as const,
  },
  {
    id: "simulate",
    label: "Simulate",
    sublabel: "Scenario Modeling",
    detail: "What-if simulation runs portfolio-level budget scenarios against calibrated response curves. Every forecast carries a credible interval — not a point estimate.",
    color: "#0891B2",
    iconPath: "M2 2l20 20M8 8C5 9.5 3 12 3 15a9 9 0 0018 0c0-3-2-5.5-5-7M12 3v4",
    pos: "bottom" as const,
  },
  {
    id: "decide",
    label: "Decide",
    sublabel: "Prescriptive Output",
    detail: "Constrained multi-KPI optimization produces specific channel allocations with confidence scores and the experiment briefs needed to upgrade them next cycle.",
    color: "#059669",
    iconPath: "M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5",
    pos: "left" as const,
  },
];

/* ─── Node card component ─────────────────────────────────────── */
function OrbitalNode({
  node,
  active,
  onHover,
}: {
  node: (typeof NODES)[0];
  active: boolean;
  onHover: (id: string | null) => void;
}) {
  const posStyle: React.CSSProperties =
    node.pos === "top"
      ? { top: 0, left: "50%", transform: "translate(-50%, 0)" }
      : node.pos === "right"
      ? { top: "50%", right: 0, transform: "translate(0, -50%)" }
      : node.pos === "bottom"
      ? { bottom: 0, left: "50%", transform: "translate(-50%, 0)" }
      : { top: "50%", left: 0, transform: "translate(0, -50%)" };

  return (
    <div
      onMouseEnter={() => onHover(node.id)}
      onMouseLeave={() => onHover(null)}
      style={{
        position: "absolute",
        ...posStyle,
        width: 130,
        zIndex: 10,
        cursor: "default",
      }}
    >
      {/* Connector dot */}
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: node.color,
          boxShadow: "0 0 12px " + node.color,
          ...(node.pos === "top"
            ? { bottom: -5, left: "50%", transform: "translateX(-50%)" }
            : node.pos === "right"
            ? { left: -5, top: "50%", transform: "translateY(-50%)" }
            : node.pos === "bottom"
            ? { top: -5, left: "50%", transform: "translateX(-50%)" }
            : { right: -5, top: "50%", transform: "translateY(-50%)" }),
        }}
      />

      {/* Card */}
      <div
        style={{
          background: active ? "rgba(255,255,255,0.06)" : "rgba(255,255,255,0.03)",
          border: "1px solid " + (active ? node.color + "70" : "rgba(255,255,255,0.08)"),
          borderRadius: 12,
          padding: active ? "14px 14px 16px" : "12px 14px",
          textAlign: node.pos === "left" ? "right" : node.pos === "right" ? "left" : "center",
          transition: "all 0.25s ease",
          boxShadow: active ? "0 0 28px " + node.color + "22" : "none",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            justifyContent:
              node.pos === "left"
                ? "flex-end"
                : node.pos === "right"
                ? "flex-start"
                : "center",
            marginBottom: 6,
          }}
        >
          <svg
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke={node.color}
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={node.iconPath} />
          </svg>
        </div>
        <div
          style={{
            fontSize: 13,
            fontWeight: 700,
            color: "#E8EEFF",
            letterSpacing: "0.01em",
            marginBottom: 2,
          }}
        >
          {node.label}
        </div>
        <div style={{ fontSize: 10, color: node.color, fontWeight: 600, marginBottom: active ? 8 : 0 }}>
          {node.sublabel}
        </div>
        {active && (
          <div
            style={{
              fontSize: 11,
              color: "#6B7CB0",
              lineHeight: 1.55,
            }}
          >
            {node.detail}
          </div>
        )}
      </div>
    </div>
  );
}

/* ─── Main section ───────────────────────────────────────────── */
export default function ProductArchitecture() {
  const [visible, setVisible] = useState(false);
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      style={{
        background: "#06060F",
        padding: "96px 0 80px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* CSS keyframes injected once */}
      <style>{`
        @keyframes orbit-spin {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -1010; }
        }
        @keyframes arc-travel-1 {
          0%   { stroke-dashoffset: 260; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes center-pulse {
          0%, 100% { opacity: 0.25; transform: scale(1); }
          50%       { opacity: 0.55; transform: scale(1.08); }
        }
        @keyframes node-entry {
          from { opacity: 0; transform: scale(0.7); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes conflict-slide {
          from { opacity: 0; transform: translateY(16px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Subtle grid */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.035) 1px, transparent 1px)," +
            "linear-gradient(90deg, rgba(124,58,237,0.035) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
          pointerEvents: "none",
        }}
      />

      {/* Radial ambient glow */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "40%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 900,
          height: 500,
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.07) 0%, transparent 65%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        style={{ position: "relative" }}
      >
        {/* ── Section header ────────────────────────────────── */}
        <div
          style={{
            textAlign: "center",
            maxWidth: 720,
            margin: "0 auto 64px",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(24px)",
            transition: "opacity 0.7s ease, transform 0.7s ease",
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
              marginBottom: 22,
            }}
          >
            Decision Intelligence Engine
          </span>

          <h2
            style={{
              fontSize: "clamp(30px, 4.5vw, 52px)",
              fontWeight: 800,
              lineHeight: 1.12,
              margin: "0 0 18px",
              color: "#E8EEFF",
            }}
          >
            One budget.{" "}
            <span
              style={{
                background: "linear-gradient(135deg, #F87171 0%, #FBBF24 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Four truths.
            </span>
            <br />
            <span
              style={{
                background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              One defensible decision.
            </span>
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.75,
              color: "#6B7CB0",
              maxWidth: 600,
              margin: "0 auto",
            }}
          >
            Four measurement systems are running on your data right now — and each one
            returns a different number for the same channel. LensOS is the only system
            built to reconcile them into a single, evidence-backed portfolio decision.
          </p>
        </div>

        {/* ── Conflict strip ────────────────────────────────── */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.6s ease 0.2s, transform 0.6s ease 0.2s",
            marginBottom: 72,
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4A5180",
              marginBottom: 16,
            }}
          >
            What your measurement stack tells you about Paid Social — right now
          </p>

          <div
            style={{
              display: "flex",
              alignItems: "stretch",
              justifyContent: "center",
              gap: 0,
              flexWrap: "wrap",
              maxWidth: 1000,
              margin: "0 auto",
            }}
          >
            {SOURCES.map((s, i) => (
              <div
                key={s.source}
                style={{
                  display: "flex",
                  alignItems: "stretch",
                  animationName: visible ? "conflict-slide" : "none",
                  animationDuration: "0.5s",
                  animationDelay: 0.3 + i * 0.08 + "s",
                  animationFillMode: "both",
                  animationTimingFunction: "ease",
                }}
              >
                <div
                  style={{
                    background: "rgba(255,255,255,0.025)",
                    border: "1px solid rgba(255,255,255,0.07)",
                    borderRight: i < SOURCES.length - 1 ? "none" : "1px solid rgba(255,255,255,0.07)",
                    borderRadius:
                      i === 0
                        ? "10px 0 0 10px"
                        : i === SOURCES.length - 1
                        ? "0 10px 10px 0"
                        : "0",
                    padding: "16px 20px",
                    minWidth: 160,
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      fontSize: 10,
                      color: "#4A5180",
                      fontWeight: 600,
                      textTransform: "uppercase",
                      letterSpacing: "0.07em",
                      marginBottom: 6,
                    }}
                  >
                    {s.source}
                  </div>
                  <div
                    style={{
                      fontSize: 28,
                      fontWeight: 800,
                      color: s.color,
                      lineHeight: 1,
                      marginBottom: 4,
                    }}
                  >
                    {s.value}
                  </div>
                  <div style={{ fontSize: 10, color: "#4A5180", marginBottom: 4 }}>{s.label}</div>
                  <div
                    style={{
                      fontSize: 9.5,
                      color: "#4A5180",
                      fontStyle: "italic",
                    }}
                  >
                    {s.note}
                  </div>
                </div>
              </div>
            ))}

            {/* Arrow */}
            <div
              style={{
                display: "flex",
                alignItems: "center",
                padding: "0 16px",
                flexShrink: 0,
              }}
            >
              <svg width="32" height="16" viewBox="0 0 32 16" fill="none">
                <path
                  d="M2 8h26M22 4l6 4-6 4"
                  stroke="rgba(124,58,237,0.5)"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </div>

            {/* LensOS output */}
            <div
              style={{
                background: "rgba(124,58,237,0.08)",
                border: "1px solid rgba(124,58,237,0.3)",
                borderRadius: 10,
                padding: "16px 22px",
                minWidth: 180,
                textAlign: "center",
                alignSelf: "stretch",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                animationName: visible ? "conflict-slide" : "none",
                animationDuration: "0.5s",
                animationDelay: "0.72s",
                animationFillMode: "both",
                animationTimingFunction: "ease",
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  color: "#7C3AED",
                  fontWeight: 700,
                  textTransform: "uppercase",
                  letterSpacing: "0.07em",
                  marginBottom: 6,
                }}
              >
                LensOS Decision
              </div>
              <div
                style={{
                  fontSize: 24,
                  fontWeight: 800,
                  color: "#A78BFA",
                  lineHeight: 1,
                  marginBottom: 3,
                }}
              >
                1.9x iROAS
              </div>
              <div style={{ fontSize: 10, color: "#6B7CB0", marginBottom: 3 }}>
                Calibrated [1.4 – 2.4]
              </div>
              <div
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 4,
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    width: 6,
                    height: 6,
                    borderRadius: "50%",
                    background: "#34D399",
                    flexShrink: 0,
                  }}
                />
                <span style={{ fontSize: 10, color: "#34D399", fontWeight: 600 }}>
                  74% confidence
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Orbital decision engine ───────────────────────── */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            marginBottom: 72,
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s ease 0.4s",
          }}
        >
          <p
            style={{
              textAlign: "center",
              fontSize: 11,
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#4A5180",
              marginBottom: 40,
            }}
          >
            Hover any node to explore the loop
          </p>

          {/* Orbital container */}
          <div
            style={{
              position: "relative",
              width: 520,
              height: 520,
              maxWidth: "100%",
            }}
          >
            {/* SVG layer: rings + arcs */}
            <svg
              viewBox="0 0 520 520"
              width="520"
              height="520"
              style={{ position: "absolute", inset: 0 }}
              overflow="visible"
            >
              {/* Outer decorative ring */}
              <circle
                cx="260"
                cy="260"
                r="220"
                fill="none"
                stroke="rgba(255,255,255,0.03)"
                strokeWidth="1"
              />

              {/* Mid decorative ring */}
              <circle
                cx="260"
                cy="260"
                r="165"
                fill="none"
                stroke="rgba(124,58,237,0.06)"
                strokeWidth="1"
              />

              {/* Animated orbit ring */}
              <circle
                cx="260"
                cy="260"
                r="165"
                fill="none"
                stroke="rgba(124,58,237,0.3)"
                strokeWidth="1.5"
                strokeDasharray="8 14"
                style={{
                  animation: "orbit-spin 22s linear infinite",
                  transformOrigin: "260px 260px",
                }}
              />

              {/* Connecting arcs between nodes (subtle) */}
              {/* N → E */}
              <path
                d="M 260 95 A 165 165 0 0 1 425 260"
                fill="none"
                stroke="rgba(124,58,237,0.20)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />
              {/* E → S */}
              <path
                d="M 425 260 A 165 165 0 0 1 260 425"
                fill="none"
                stroke="rgba(79,70,229,0.20)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />
              {/* S → W */}
              <path
                d="M 260 425 A 165 165 0 0 1 95 260"
                fill="none"
                stroke="rgba(8,145,178,0.20)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />
              {/* W → N */}
              <path
                d="M 95 260 A 165 165 0 0 1 260 95"
                fill="none"
                stroke="rgba(5,150,105,0.20)"
                strokeWidth="1.5"
                strokeDasharray="4 8"
              />

              {/* Active node highlight arcs */}
              {activeNode === "measure" && (
                <>
                  <path
                    d="M 260 95 A 165 165 0 0 1 425 260"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M 95 260 A 165 165 0 0 1 260 95"
                    fill="none"
                    stroke="#7C3AED"
                    strokeWidth="2"
                    strokeOpacity="0.4"
                  />
                </>
              )}
              {activeNode === "validate" && (
                <>
                  <path
                    d="M 425 260 A 165 165 0 0 1 260 425"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M 260 95 A 165 165 0 0 1 425 260"
                    fill="none"
                    stroke="#4F46E5"
                    strokeWidth="2"
                    strokeOpacity="0.4"
                  />
                </>
              )}
              {activeNode === "simulate" && (
                <>
                  <path
                    d="M 260 425 A 165 165 0 0 1 95 260"
                    fill="none"
                    stroke="#0891B2"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M 425 260 A 165 165 0 0 1 260 425"
                    fill="none"
                    stroke="#0891B2"
                    strokeWidth="2"
                    strokeOpacity="0.4"
                  />
                </>
              )}
              {activeNode === "decide" && (
                <>
                  <path
                    d="M 95 260 A 165 165 0 0 1 260 95"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeOpacity="0.7"
                  />
                  <path
                    d="M 260 425 A 165 165 0 0 1 95 260"
                    fill="none"
                    stroke="#059669"
                    strokeWidth="2"
                    strokeOpacity="0.4"
                  />
                </>
              )}

              {/* Center pulse rings */}
              <circle
                cx="260"
                cy="260"
                r="56"
                fill="rgba(124,58,237,0.06)"
                stroke="rgba(124,58,237,0.15)"
                strokeWidth="1"
                style={{
                  animation: "center-pulse 3.5s ease-in-out infinite",
                  transformOrigin: "260px 260px",
                }}
              />
              <circle
                cx="260"
                cy="260"
                r="40"
                fill="rgba(124,58,237,0.10)"
                stroke="rgba(124,58,237,0.25)"
                strokeWidth="1"
              />

              {/* Node connector dots on orbit ring */}
              {/* Top (Measure) */}
              <circle cx="260" cy="95" r="5" fill="#7C3AED" />
              <circle cx="260" cy="95" r="10" fill="#7C3AED" fillOpacity="0.2" />
              {/* Right (Validate) */}
              <circle cx="425" cy="260" r="5" fill="#4F46E5" />
              <circle cx="425" cy="260" r="10" fill="#4F46E5" fillOpacity="0.2" />
              {/* Bottom (Simulate) */}
              <circle cx="260" cy="425" r="5" fill="#0891B2" />
              <circle cx="260" cy="425" r="10" fill="#0891B2" fillOpacity="0.2" />
              {/* Left (Decide) */}
              <circle cx="95" cy="260" r="5" fill="#059669" />
              <circle cx="95" cy="260" r="10" fill="#059669" fillOpacity="0.2" />
            </svg>

            {/* Center hub — HTML overlay */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                zIndex: 10,
                width: 100,
              }}
            >
              <div
                style={{
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: "#A78BFA",
                  marginBottom: 4,
                }}
              >
                LensOS
              </div>
              <div
                style={{
                  fontSize: 9,
                  color: "#4A5180",
                  lineHeight: 1.4,
                }}
              >
                Continuous<br />Decision<br />Intelligence
              </div>
            </div>

            {/* Node cards — absolutely positioned HTML */}
            {/* TOP — Measure */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: "50%",
                transform: "translate(-50%, 0)",
                width: 148,
                zIndex: 20,
                animationName: visible ? "node-entry" : "none",
                animationDuration: "0.5s",
                animationDelay: "0.5s",
                animationFillMode: "both",
                animationTimingFunction: "ease",
              }}
              onMouseEnter={() => setActiveNode("measure")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <NodeCard node={NODES[0]} active={activeNode === "measure"} />
            </div>

            {/* RIGHT — Validate */}
            <div
              style={{
                position: "absolute",
                right: 0,
                top: "50%",
                transform: "translate(0, -50%)",
                width: 148,
                zIndex: 20,
                animationName: visible ? "node-entry" : "none",
                animationDuration: "0.5s",
                animationDelay: "0.6s",
                animationFillMode: "both",
                animationTimingFunction: "ease",
              }}
              onMouseEnter={() => setActiveNode("validate")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <NodeCard node={NODES[1]} active={activeNode === "validate"} />
            </div>

            {/* BOTTOM — Simulate */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: "50%",
                transform: "translate(-50%, 0)",
                width: 148,
                zIndex: 20,
                animationName: visible ? "node-entry" : "none",
                animationDuration: "0.5s",
                animationDelay: "0.7s",
                animationFillMode: "both",
                animationTimingFunction: "ease",
              }}
              onMouseEnter={() => setActiveNode("simulate")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <NodeCard node={NODES[2]} active={activeNode === "simulate"} />
            </div>

            {/* LEFT — Decide */}
            <div
              style={{
                position: "absolute",
                left: 0,
                top: "50%",
                transform: "translate(0, -50%)",
                width: 148,
                zIndex: 20,
                animationName: visible ? "node-entry" : "none",
                animationDuration: "0.5s",
                animationDelay: "0.8s",
                animationFillMode: "both",
                animationTimingFunction: "ease",
              }}
              onMouseEnter={() => setActiveNode("decide")}
              onMouseLeave={() => setActiveNode(null)}
            >
              <NodeCard node={NODES[3]} active={activeNode === "decide"} />
            </div>
          </div>
        </div>

        {/* ── Bottom belief row ──────────────────────────────── */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: 1,
            background: "rgba(255,255,255,0.05)",
            borderRadius: 16,
            overflow: "hidden",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.6s, transform 0.7s ease 0.6s",
          }}
        >
          {[
            {
              label: "Portfolio-level, not channel-level",
              body: "LensOS optimizes across your entire media mix simultaneously — not one channel at a time. Every budget shift shows its cross-channel effects before you commit.",
              accent: "#7C3AED",
            },
            {
              label: "Always-on, not quarterly",
              body: "The loop runs continuously. New spend data updates the model. New geo tests update the priors. Decisions made today are grounded in evidence from this week, not last quarter.",
              accent: "#4F46E5",
            },
            {
              label: "Evidence-backed, not gut-backed",
              body: "Every recommendation carries a confidence interval and the reasoning behind it. When the CMO asks why, the answer isn't 'trust the model' — it's a credible interval and an experiment design.",
              accent: "#0891B2",
            },
          ].map((p, i) => (
            <div
              key={p.label}
              style={{
                background: "#06060F",
                padding: "28px 28px 30px",
                borderLeft: i > 0 ? "1px solid rgba(255,255,255,0.05)" : "none",
              }}
            >
              <div
                style={{
                  width: 28,
                  height: 3,
                  background: p.accent,
                  borderRadius: 2,
                  marginBottom: 14,
                  opacity: 0.8,
                }}
              />
              <h3
                style={{
                  fontSize: 14,
                  fontWeight: 700,
                  color: "#E8EEFF",
                  marginBottom: 10,
                  lineHeight: 1.4,
                }}
              >
                {p.label}
              </h3>
              <p
                style={{
                  fontSize: 13,
                  lineHeight: 1.65,
                  color: "#6B7CB0",
                }}
              >
                {p.body}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Extracted NodeCard to reduce repetition ──────────────────── */
function NodeCard({
  node,
  active,
}: {
  node: (typeof NODES)[0];
  active: boolean;
}) {
  return (
    <div
      style={{
        background: active ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.025)",
        border: "1px solid " + (active ? node.color + "70" : "rgba(255,255,255,0.08)"),
        borderRadius: 12,
        padding: active ? "13px 13px 15px" : "11px 13px 13px",
        textAlign: "center",
        transition: "all 0.22s ease",
        boxShadow: active ? "0 4px 32px " + node.color + "25" : "none",
        cursor: "default",
      }}
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke={node.color}
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        style={{ marginBottom: 6, display: "block", margin: "0 auto 6px" }}
      >
        <path d={node.iconPath} />
      </svg>
      <div
        style={{
          fontSize: 13,
          fontWeight: 700,
          color: "#E8EEFF",
          marginBottom: 2,
        }}
      >
        {node.label}
      </div>
      <div style={{ fontSize: 10, color: node.color, fontWeight: 600, marginBottom: active ? 8 : 0 }}>
        {node.sublabel}
      </div>
      {active && (
        <div style={{ fontSize: 11, color: "#8892B4", lineHeight: 1.55 }}>
          {node.detail}
        </div>
      )}
    </div>
  );
}
