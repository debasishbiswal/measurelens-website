"use client";

import { useEffect, useRef, useState } from "react";
import { useScrollReveal } from "../ui/useScrollReveal";

/* ─── Loop node data ────────────────────────────────────────── */
const NODES = [
  {
    id: "measure",
    label: "Measure",
    sub: "Causal Attribution",
    detail: "Bayesian MMM isolates the true incremental contribution of every channel. Credible intervals on every coefficient — never a point estimate.",
    color: "#7C3AED",
    pos: "top" as const,
    iconPath: "M3 3v18h18M7 17V13M11 17V9M15 17V5M19 17v-3",
  },
  {
    id: "validate",
    label: "Validate",
    sub: "Geo Experiments",
    detail: "Holdout tests and BSTS-based synthetic controls confirm what the model finds. Contamination scoring flags experiments you can't trust at scale.",
    color: "#4F46E5",
    pos: "right" as const,
    iconPath: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z",
  },
  {
    id: "simulate",
    label: "Simulate",
    sub: "Scenario Modeling",
    detail: "What-if simulation runs portfolio budget scenarios against calibrated response curves — with credible intervals, not point estimates.",
    color: "#3B82F6",
    pos: "bottom" as const,
    iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
  },
  {
    id: "decide",
    label: "Decide",
    sub: "Prescriptive Output",
    detail: "Constrained multi-KPI optimization produces specific allocations with confidence scores and experiment briefs for the next cycle.",
    color: "#10B981",
    pos: "left" as const,
    iconPath: "M9 11l3 3L22 4M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11",
  },
];

const PRINCIPLES = [
  {
    title: "Bayesian-native uncertainty",
    body: "Every output carries a credible interval. Low confidence is surfaced explicitly — never hidden inside a single number. You see what the model knows and what it doesn't.",
  },
  {
    title: "Every rollup ties out",
    body: "Geo → regional → national → channel → subchannel → portfolio. Every number is coherent across the hierarchy. CFO-grade deterministic reconciliation is built in.",
  },
  {
    title: "Decisions, not reports",
    body: "The output is a recommendation with rationale — what to do, why, and what confidence interval backs it. Designed to be acted on in a meeting, not interpreted afterward.",
  },
];

/* ─── Sub-component: single orbital node card ───────────────── */
function NodeCard({
  node,
  active,
  onEnter,
  onLeave,
}: {
  node: (typeof NODES)[0];
  active: boolean;
  onEnter: () => void;
  onLeave: () => void;
}) {
  const posStyle: React.CSSProperties =
    node.pos === "top"
      ? { top: 0, left: "50%", transform: "translate(-50%, 0)" }
      : node.pos === "right"
      ? { right: 0, top: "50%", transform: "translate(0, -50%)" }
      : node.pos === "bottom"
      ? { bottom: 0, left: "50%", transform: "translate(-50%, 0)" }
      : { left: 0, top: "50%", transform: "translate(0, -50%)" };

  return (
    <div
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        position: "absolute",
        ...posStyle,
        width: 136,
        zIndex: 20,
      }}
    >
      {/* Orbit connector dot */}
      <div
        style={{
          position: "absolute",
          width: 10,
          height: 10,
          borderRadius: "50%",
          background: node.color,
          boxShadow: "0 0 14px " + node.color + (active ? "" : "88"),
          transition: "box-shadow 0.25s ease",
          ...(node.pos === "top"
            ? { bottom: active ? -8 : -5, left: "50%", transform: "translateX(-50%)" }
            : node.pos === "right"
            ? { left: active ? -8 : -5, top: "50%", transform: "translateY(-50%)" }
            : node.pos === "bottom"
            ? { top: active ? -8 : -5, left: "50%", transform: "translateX(-50%)" }
            : { right: active ? -8 : -5, top: "50%", transform: "translateY(-50%)" }),
        }}
      />

      {/* Card */}
      <div
        style={{
          background: active ? "rgba(255,255,255,0.055)" : "rgba(255,255,255,0.025)",
          border: "1px solid " + (active ? node.color + "70" : "rgba(255,255,255,0.09)"),
          borderRadius: 13,
          padding: active ? "14px 13px 16px" : "12px 13px",
          textAlign: "center",
          transition: "all 0.24s ease",
          boxShadow: active ? "0 8px 32px " + node.color + "28" : "none",
          cursor: "default",
        }}
      >
        {/* Icon */}
        <div
          style={{
            width: 36,
            height: 36,
            borderRadius: 10,
            background: node.color + (active ? "22" : "15"),
            border: "1px solid " + node.color + (active ? "50" : "30"),
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            margin: "0 auto 9px",
            transition: "all 0.24s ease",
          }}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke={node.color}
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d={node.iconPath} />
          </svg>
        </div>

        {/* Label */}
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
        <div
          style={{
            fontSize: 10,
            color: node.color,
            fontWeight: 600,
            marginBottom: active ? 9 : 0,
          }}
        >
          {node.sub}
        </div>

        {/* Expanded detail on hover */}
        {active && (
          <p style={{ fontSize: 11, color: "#8892B4", lineHeight: 1.55, margin: 0 }}>
            {node.detail}
          </p>
        )}
      </div>
    </div>
  );
}

/* ─── Main export ───────────────────────────────────────────── */
export default function Solution() {
  const revealRef = useScrollReveal();
  const [activeNode, setActiveNode] = useState<string | null>(null);
  const [loopVisible, setLoopVisible] = useState(false);
  const loopRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = loopRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) { setLoopVisible(true); obs.disconnect(); }
      },
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="solution"
      ref={revealRef as any}
      className="py-24 lg:py-32"
      style={{ background: "#06060F" }}
    >
      {/* CSS keyframes */}
      <style>{`
        @keyframes sol-orbit-spin {
          from { stroke-dashoffset: 0; }
          to   { stroke-dashoffset: -1131; }
        }
        @keyframes sol-center-pulse {
          0%, 100% { opacity: 0.18; transform: scale(1); }
          50%       { opacity: 0.42; transform: scale(1.1); }
        }
        @keyframes sol-node-in {
          from { opacity: 0; transform: scale(0.75); }
          to   { opacity: 1; transform: scale(1); }
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* ── Section header ── */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <div className="section-tag justify-center">The LensOS Architecture</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Not a dashboard.
            <br />
            <span className="gradient-text">A decisioning loop.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            Measurement, validation, simulation, and optimization are not separate
            workflows. LensOS connects them into a single always-on intelligence
            loop — every decision grounded in causal evidence and explicit uncertainty.
          </p>
        </div>

        {/* ── Orbital loop visual ── */}
        <div
          ref={loopRef}
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: 72,
            opacity: loopVisible ? 1 : 0,
            transition: "opacity 0.7s ease",
          }}
        >
          <div
            style={{
              position: "relative",
              width: "min(560px, 92vw)",
              aspectRatio: "1 / 1",
            }}
          >
            {/* ── SVG layer: rings + arcs ── */}
            <svg
              viewBox="0 0 560 560"
              width="100%"
              height="100%"
              style={{ position: "absolute", inset: 0 }}
              overflow="visible"
            >
              <defs>
                {/* Arrowhead markers for each arc color */}
                <marker id="arr-v" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <polygon points="0 0, 7 2.5, 0 5" fill="rgba(124,58,237,0.55)"/>
                </marker>
                <marker id="arr-i" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <polygon points="0 0, 7 2.5, 0 5" fill="rgba(79,70,229,0.55)"/>
                </marker>
                <marker id="arr-b" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <polygon points="0 0, 7 2.5, 0 5" fill="rgba(59,130,246,0.55)"/>
                </marker>
                <marker id="arr-g" markerWidth="7" markerHeight="5" refX="5" refY="2.5" orient="auto">
                  <polygon points="0 0, 7 2.5, 0 5" fill="rgba(16,185,129,0.55)"/>
                </marker>
              </defs>

              {/* Outer faint decorative ring */}
              <circle cx="280" cy="280" r="230"
                fill="none" stroke="rgba(255,255,255,0.025)" strokeWidth="1"/>

              {/* Inner faint decorative ring */}
              <circle cx="280" cy="280" r="130"
                fill="none" stroke="rgba(124,58,237,0.05)" strokeWidth="1"/>

              {/* Animated spinning dashed orbit ring */}
              <circle cx="280" cy="280" r="180"
                fill="none"
                stroke="rgba(124,58,237,0.28)"
                strokeWidth="1.5"
                strokeDasharray="6 12"
                style={{
                  animation: "sol-orbit-spin 28s linear infinite",
                  transformOrigin: "280px 280px",
                }}
              />

              {/* Directional arc segments: N→E, E→S, S→W, W→N */}
              {/* N→E  (violet) */}
              <path d="M 280 100 A 180 180 0 0 1 460 280"
                fill="none" stroke="rgba(124,58,237,0.30)" strokeWidth="1.8"
                strokeDasharray={activeNode === "measure" || activeNode === "validate" ? "none" : "5 9"}
                markerEnd="url(#arr-v)"
                style={{ transition: "stroke-opacity 0.2s" }}
              />
              {/* E→S  (indigo) */}
              <path d="M 460 280 A 180 180 0 0 1 280 460"
                fill="none" stroke="rgba(79,70,229,0.30)" strokeWidth="1.8"
                strokeDasharray={activeNode === "validate" || activeNode === "simulate" ? "none" : "5 9"}
                markerEnd="url(#arr-i)"
              />
              {/* S→W  (blue) */}
              <path d="M 280 460 A 180 180 0 0 1 100 280"
                fill="none" stroke="rgba(59,130,246,0.30)" strokeWidth="1.8"
                strokeDasharray={activeNode === "simulate" || activeNode === "decide" ? "none" : "5 9"}
                markerEnd="url(#arr-b)"
              />
              {/* W→N  (emerald) */}
              <path d="M 100 280 A 180 180 0 0 1 280 100"
                fill="none" stroke="rgba(16,185,129,0.30)" strokeWidth="1.8"
                strokeDasharray={activeNode === "decide" || activeNode === "measure" ? "none" : "5 9"}
                markerEnd="url(#arr-g)"
              />

              {/* Active arc highlights */}
              {activeNode === "measure" && (
                <path d="M 280 100 A 180 180 0 0 1 460 280"
                  fill="none" stroke="#7C3AED" strokeWidth="2.5" strokeOpacity="0.7"/>
              )}
              {activeNode === "validate" && (
                <path d="M 460 280 A 180 180 0 0 1 280 460"
                  fill="none" stroke="#4F46E5" strokeWidth="2.5" strokeOpacity="0.7"/>
              )}
              {activeNode === "simulate" && (
                <path d="M 280 460 A 180 180 0 0 1 100 280"
                  fill="none" stroke="#3B82F6" strokeWidth="2.5" strokeOpacity="0.7"/>
              )}
              {activeNode === "decide" && (
                <path d="M 100 280 A 180 180 0 0 1 280 100"
                  fill="none" stroke="#10B981" strokeWidth="2.5" strokeOpacity="0.7"/>
              )}

              {/* Center pulse rings */}
              <circle cx="280" cy="280" r="58"
                fill="rgba(124,58,237,0.07)"
                stroke="rgba(124,58,237,0.18)"
                strokeWidth="1"
                style={{
                  animation: "sol-center-pulse 4s ease-in-out infinite",
                  transformOrigin: "280px 280px",
                }}
              />
              <circle cx="280" cy="280" r="42"
                fill="rgba(124,58,237,0.10)"
                stroke="rgba(124,58,237,0.28)"
                strokeWidth="1"
              />

              {/* Orbit connector dots */}
              <circle cx="280" cy="100" r="6" fill="#7C3AED"/>
              <circle cx="280" cy="100" r="11" fill="#7C3AED" fillOpacity="0.18"/>
              <circle cx="460" cy="280" r="6" fill="#4F46E5"/>
              <circle cx="460" cy="280" r="11" fill="#4F46E5" fillOpacity="0.18"/>
              <circle cx="280" cy="460" r="6" fill="#3B82F6"/>
              <circle cx="280" cy="460" r="11" fill="#3B82F6" fillOpacity="0.18"/>
              <circle cx="100" cy="280" r="6" fill="#10B981"/>
              <circle cx="100" cy="280" r="11" fill="#10B981" fillOpacity="0.18"/>
            </svg>

            {/* ── Center hub ── */}
            <div
              style={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                textAlign: "center",
                zIndex: 10,
                width: 90,
              }}
            >
              <div style={{
                fontSize: 11,
                fontWeight: 800,
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                color: "#A78BFA",
                marginBottom: 3,
              }}>
                LensOS
              </div>
              <div style={{
                fontSize: 9,
                color: "#4A5180",
                lineHeight: 1.45,
                letterSpacing: "0.02em",
              }}>
                Always-on<br />decision<br />intelligence
              </div>
            </div>

            {/* ── Node cards ── */}
            {NODES.map((node, i) => (
              <div
                key={node.id}
                style={{
                  position: "absolute",
                  ...(node.pos === "top"
                    ? { top: 0, left: "50%", transform: "translate(-50%, 0)" }
                    : node.pos === "right"
                    ? { right: 0, top: "50%", transform: "translate(0, -50%)" }
                    : node.pos === "bottom"
                    ? { bottom: 0, left: "50%", transform: "translate(-50%, 0)" }
                    : { left: 0, top: "50%", transform: "translate(0, -50%)" }),
                  width: 136,
                  zIndex: 20,
                  animationName: loopVisible ? "sol-node-in" : "none",
                  animationDuration: "0.5s",
                  animationDelay: 0.2 + i * 0.1 + "s",
                  animationFillMode: "both",
                  animationTimingFunction: "ease",
                }}
              >
                <NodeCard
                  node={node}
                  active={activeNode === node.id}
                  onEnter={() => setActiveNode(node.id)}
                  onLeave={() => setActiveNode(null)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* ── Model stack ── */}
        <div className="mb-16 reveal-on-scroll reveal-delay-3">
          <p
            className="text-xs font-mono font-semibold text-center mb-6 uppercase tracking-widest"
            style={{ color: "#4A5180" }}
          >
            Model stack
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {[
              "Bayesian Hierarchical MMM",
              "BSTS / CausalImpact",
              "Synthetic Control Methods",
              "Constrained Multi-KPI Optimizer",
              "Deterministic Reconciliation",
              "Governed LLM Explanations",
            ].map((tech) => (
              <span
                key={tech}
                className="text-xs font-mono px-4 py-2 rounded-lg"
                style={{
                  color: "#A78BFA",
                  background: "rgba(124,58,237,0.07)",
                  border: "1px solid rgba(124,58,237,0.2)",
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* ── Bottom principles ── */}
        <div
          className="grid md:grid-cols-3 gap-px reveal-on-scroll reveal-delay-4"
          style={{ background: "rgba(255,255,255,0.05)" }}
        >
          {PRINCIPLES.map((p) => (
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
