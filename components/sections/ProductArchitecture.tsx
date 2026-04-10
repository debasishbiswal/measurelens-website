"use client";

import { useEffect, useRef, useState } from "react";

/* ─────────────────────────────────────────────
   Architecture blocks: Data → Decision Intelligence
   ───────────────────────────────────────────── */
const BLOCKS = [
  {
    id: "A",
    label: "Data Ingestion",
    tagline: "Every signal, every channel",
    description:
      "Connects to paid, owned, and earned data sources automatically — ad platforms, CRM, analytics, and attribution tools — without manual exports or brittle spreadsheets.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="2" y="8" width="7" height="12" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <rect x="10.5" y="4" width="7" height="20" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <rect x="19" y="10" width="7" height="8" rx="2" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M5.5 20v3M14 24v-3M22.5 18v3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: "#818CF8",
    bgGlow: "rgba(129,140,248,0.07)",
    pills: ["Meta Ads", "Google Ads", "GA4", "Klaviyo", "+40 more"],
  },
  {
    id: "B",
    label: "AI Data Interpreter",
    tagline: "Clean, unified, trustworthy",
    description:
      "A large language model layer inspects every incoming data stream, flags anomalies, resolves naming conflicts, and standardizes metrics — so downstream analysis isn't poisoned by bad data.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="14" r="6" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M14 2v4M14 22v4M2 14h4M22 14h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <circle cx="14" cy="14" r="2.5" fill="currentColor"/>
        <path d="M6.1 6.1l2.8 2.8M19.1 19.1l2.8 2.8M19.1 8.9l-2.8 2.8M8.9 19.1l-2.8 2.8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
    color: "#A78BFA",
    bgGlow: "rgba(167,139,250,0.07)",
    pills: ["Anomaly Detection", "Metric Harmonisation", "LLM QA Layer"],
  },
  {
    id: "C",
    label: "Taxonomy Standardisation",
    tagline: "485-node channel hierarchy",
    description:
      "Every signal is mapped to a universal channel taxonomy — 8 L1 tiers, 50 L2 channels, 300+ L3 tactics — giving every metric a consistent address regardless of source platform.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <circle cx="14" cy="5" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="6" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="14" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <circle cx="22" cy="20" r="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M14 8v6M14 14L6 17M14 14l8 3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
      </svg>
    ),
    color: "#7C3AED",
    bgGlow: "rgba(124,58,237,0.10)",
    pills: ["L1→L4 Hierarchy", "Funnel Mapping", "485 Nodes"],
  },
  {
    id: "D",
    label: "MMM / Genome Engine",
    tagline: "Causal attribution at scale",
    description:
      "Bayesian Media Mix Modelling and Genome attribution run continuously on your standardised data — isolating the true incremental contribution of every channel, controlling for saturation and external lift.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M4 22L8 14l4 6 5-10 4 6 3-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="8" cy="14" r="2" fill="currentColor"/>
        <circle cx="17" cy="10" r="2" fill="currentColor"/>
        <circle cx="24" cy="14" r="2" fill="currentColor"/>
      </svg>
    ),
    color: "#06B6D4",
    bgGlow: "rgba(6,182,212,0.07)",
    pills: ["Bayesian MMM", "Genome Attribution", "Saturation Curves"],
  },
  {
    id: "E",
    label: "Decision Intelligence Agents",
    tagline: "AI that thinks, not just reports",
    description:
      "Autonomous agents run budget simulations, surface cross-channel conflicts, and generate scenario forecasts — translating model outputs into specific, evidence-backed recommendations your team can act on.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <rect x="8" y="3" width="12" height="16" rx="3" stroke="currentColor" strokeWidth="1.8" fill="none"/>
        <path d="M11 7h6M11 10h4M11 13h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M10 19v4l4-2 4 2v-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#10B981",
    bgGlow: "rgba(16,185,129,0.07)",
    pills: ["Budget Simulation", "Scenario Forecasting", "Conflict Detection"],
  },
  {
    id: "F",
    label: "Executive Outputs",
    tagline: "Decisions, not dashboards",
    description:
      "Leaders receive channel-level budget decisions with confidence scores, the evidence trail behind every recommendation, and natural-language explanations that remove interpretation from the critical path.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
        <path d="M6 24h16M14 4v16" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/>
        <path d="M8 14l6-6 6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" fill="none"/>
        <circle cx="20" cy="8" r="4" fill="rgba(16,185,129,0.18)" stroke="#10B981" strokeWidth="1.5"/>
        <path d="M18.5 8l1 1 2-2" stroke="#10B981" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
    color: "#F59E0B",
    bgGlow: "rgba(245,158,11,0.07)",
    pills: ["Confidence Scores", "Evidence Trail", "NL Explanations"],
  },
];

/* Connector arrow between blocks */
function Arrow({ vertical }: { vertical?: boolean }) {
  if (vertical) {
    return (
      <div
        className="flex items-center justify-center"
        style={{ height: 32, width: "100%" }}
      >
        <div
          style={{
            width: 1,
            height: 28,
            background: "linear-gradient(to bottom, rgba(124,58,237,0.5), rgba(124,58,237,0.1))",
          }}
        />
      </div>
    );
  }
  return (
    <div
      className="hidden lg:flex items-center justify-center flex-shrink-0"
      style={{ width: 44 }}
    >
      <svg width="44" height="16" viewBox="0 0 44 16" fill="none">
        <path
          d="M2 8h36M34 4l6 4-6 4"
          stroke="rgba(124,58,237,0.55)"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* Single architecture block card */
function ArchBlock({
  block,
  index,
  visible,
}: {
  block: (typeof BLOCKS)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  const delay = index * 80;

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        flex: "1 1 0",
        minWidth: 0,
        background: hovered
          ? "rgba(255,255,255,0.042)"
          : "rgba(255,255,255,0.025)",
        border: hovered
          ? "1px solid " + block.color + "55"
          : "1px solid rgba(255,255,255,0.07)",
        borderRadius: 16,
        padding: "22px 20px",
        cursor: "default",
        transition: "all 0.25s ease",
        boxShadow: hovered ? "0 0 32px " + block.bgGlow : "none",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transitionDelay: delay + "ms",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow orb top-right */}
      <div
        style={{
          position: "absolute",
          top: -20,
          right: -20,
          width: 80,
          height: 80,
          borderRadius: "50%",
          background: block.bgGlow,
          filter: "blur(20px)",
          pointerEvents: "none",
          opacity: hovered ? 1 : 0.4,
          transition: "opacity 0.3s ease",
        }}
      />

      {/* Step badge + icon row */}
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
            fontSize: 10,
            fontWeight: 700,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: block.color,
            background: block.color + "18",
            border: "1px solid " + block.color + "35",
            borderRadius: 6,
            padding: "3px 8px",
          }}
        >
          Step {block.id}
        </span>
        <span style={{ color: block.color, opacity: 0.85 }}>{block.icon}</span>
      </div>

      {/* Label & tagline */}
      <div style={{ marginBottom: 10 }}>
        <h3
          style={{
            fontSize: 15,
            fontWeight: 700,
            color: "#E8EEFF",
            margin: 0,
            lineHeight: 1.3,
          }}
        >
          {block.label}
        </h3>
        <p
          style={{
            fontSize: 11,
            color: block.color,
            margin: "3px 0 0",
            fontWeight: 500,
          }}
        >
          {block.tagline}
        </p>
      </div>

      {/* Description */}
      <p
        style={{
          fontSize: 12.5,
          lineHeight: 1.65,
          color: "#8892B4",
          margin: "0 0 14px",
        }}
      >
        {block.description}
      </p>

      {/* Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
        {block.pills.map((pill) => (
          <span
            key={pill}
            style={{
              fontSize: 10.5,
              color: "#8892B4",
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 5,
              padding: "2.5px 7px",
              fontWeight: 500,
            }}
          >
            {pill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function ProductArchitecture() {
  const [visible, setVisible] = useState(false);
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
      { threshold: 0.1 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="architecture"
      style={{
        padding: "100px 0 80px",
        background: "rgba(6,6,15,1)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background grid */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          pointerEvents: "none",
        }}
      />

      {/* Radial glow centre */}
      <div
        style={{
          position: "absolute",
          top: "30%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 800,
          height: 400,
          background:
            "radial-gradient(ellipse at center, rgba(124,58,237,0.08) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      <div
        className="max-w-7xl mx-auto px-6 lg:px-8"
        style={{ position: "relative" }}
      >
        {/* Header */}
        <div
          style={{
            textAlign: "center",
            marginBottom: 60,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "all 0.6s ease",
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
              marginBottom: 18,
            }}
          >
            Product Architecture
          </span>

          <h2
            style={{
              fontSize: "clamp(28px, 4vw, 46px)",
              fontWeight: 800,
              lineHeight: 1.15,
              margin: "0 auto 16px",
              maxWidth: 700,
            }}
          >
            <span style={{ color: "#E8EEFF" }}>From Data to </span>
            <span
              style={{
                background:
                  "linear-gradient(135deg, #A78BFA 0%, #7C3AED 50%, #06B6D4 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Decision Intelligence
            </span>
          </h2>

          <p
            style={{
              fontSize: 16,
              lineHeight: 1.7,
              color: "#6B7CB0",
              maxWidth: 620,
              margin: "0 auto",
            }}
          >
            Six integrated layers transform raw marketing signals into specific,
            evidence-backed budget decisions — automatically, continuously, at
            enterprise scale.
          </p>
        </div>

        {/* ── Row 1: A → B → C ── */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
            marginBottom: 0,
          }}
        >
          {[BLOCKS[0], BLOCKS[1], BLOCKS[2]].map((block, i) => (
            <div
              key={block.id}
              style={{ display: "flex", alignItems: "stretch", flex: "1 1 0", minWidth: 0 }}
            >
              <ArchBlock block={block} index={i} visible={visible} />
              {i < 2 && <Arrow />}
            </div>
          ))}
        </div>

        {/* ── Down-arrow between rows ── */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            padding: "10px 0",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 0,
            }}
          >
            <div
              style={{
                width: 1,
                height: 36,
                background:
                  "linear-gradient(to bottom, rgba(124,58,237,0.5), rgba(6,182,212,0.5))",
              }}
            />
            <svg width="16" height="10" viewBox="0 0 16 10" fill="none">
              <path
                d="M2 2l6 6 6-6"
                stroke="rgba(124,58,237,0.6)"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* ── Row 2: D → E → F ── */}
        <div
          style={{
            display: "flex",
            alignItems: "stretch",
            gap: 0,
          }}
        >
          {[BLOCKS[3], BLOCKS[4], BLOCKS[5]].map((block, i) => (
            <div
              key={block.id}
              style={{ display: "flex", alignItems: "stretch", flex: "1 1 0", minWidth: 0 }}
            >
              <ArchBlock block={block} index={i + 3} visible={visible} />
              {i < 2 && <Arrow />}
            </div>
          ))}
        </div>

        {/* ── Bottom stat bar ── */}
        <div
          style={{
            marginTop: 56,
            borderRadius: 16,
            border: "1px solid rgba(255,255,255,0.07)",
            background: "rgba(255,255,255,0.025)",
            padding: "28px 40px",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: 24,
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(20px)",
            transition: "opacity 0.7s ease 0.5s, transform 0.7s ease 0.5s",
          }}
        >
          {[
            { value: "485", label: "Taxonomy Nodes" },
            { value: "40+", label: "Data Connectors" },
            { value: "< 60s", label: "Audit to Insight" },
            { value: "∞", label: "Scenario Simulations" },
          ].map((stat) => (
            <div key={stat.label} style={{ textAlign: "center" }}>
              <div
                style={{
                  fontSize: "clamp(22px, 3vw, 32px)",
                  fontWeight: 800,
                  background:
                    "linear-gradient(135deg, #E8EEFF 0%, #A78BFA 100%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                  lineHeight: 1,
                  marginBottom: 6,
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: 12,
                  color: "#6B7CB0",
                  fontWeight: 500,
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
