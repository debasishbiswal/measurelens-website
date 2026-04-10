"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import {
  Chart,
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ScatterController,
  PointElement,
} from "chart.js";

Chart.register(
  BarController,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  ScatterController,
  PointElement
);

// ── Shared chart defaults ─────────────────────────────────────
const CHART_DEFAULTS = {
  color: "#4A5180",
  borderColor: "rgba(255,255,255,0.06)",
  font: { family: "-apple-system, BlinkMacSystemFont, 'Inter', sans-serif" },
};

// ── Chart 1: Decision coverage ────────────────────────────────
function CadenceChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d");
    if (!ctx) return;
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],
        datasets: [
          {
            label: "Traditional MMM — weeks with guidance",
            data: [0,0,0,0,0,4,0,0,0,0,0,4],
            backgroundColor: "rgba(124,58,237,0.22)",
            borderColor: "rgba(124,58,237,0.5)",
            borderWidth: 1,
            borderRadius: 4,
          },
          {
            label: "Lightweight MMM — weeks with guidance",
            data: [4,4,4,4,4,4,4,4,4,4,4,5],
            backgroundColor: "rgba(167,139,250,0.55)",
            borderColor: "rgba(167,139,250,0.9)",
            borderWidth: 1,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: "#6B7CB0", padding: 16, font: { size: 12 } } },
          tooltip: {
            backgroundColor: "rgba(12,12,28,0.95)",
            borderColor: "rgba(124,58,237,0.3)",
            borderWidth: 1,
            titleColor: "#E8EEFF",
            bodyColor: "#8892B4",
            callbacks: { label: (c) => " " + c.dataset.label!.split("—")[0].trim() + ": " + c.raw + " weeks" },
          },
        },
        scales: {
          x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#4A5180", font: { size: 11 } } },
          y: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#4A5180", font: { size: 11 }, stepSize: 1 },
            title: { display: true, text: "Weeks of guidance available", color: "#4A5180", font: { size: 11 } },
            max: 6,
          },
        },
      },
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={ref} />;
}

// ── Chart 3: Credible intervals ───────────────────────────────
function CredibleChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d");
    if (!ctx) return;
    const channels = [
      "Paid Search (Brand)",
      "Paid Search (Non-Brand)",
      "Paid Social",
      "Connected TV",
      "Email / CRM",
      "Streaming Audio",
      "Display",
      "Out-of-Home",
    ];
    const means =  [22, 14, 18,  9, 11,  6,  5,  5];
    const lower =  [19, 11, 13,  6,  9,  3,  2,  2];
    const upper =  [25, 18, 25, 14, 13, 10,  9,  9];

    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: channels,
        datasets: [
          {
            label: "90% Credible Interval",
            data: channels.map((_, i) => [lower[i], upper[i]]) as unknown as number[],
            backgroundColor: channels.map((_, i) => {
              const w = upper[i] - lower[i];
              return w <= 6 ? "rgba(124,58,237,0.55)" : w <= 10 ? "rgba(124,58,237,0.38)" : "rgba(124,58,237,0.22)";
            }),
            borderColor: "rgba(124,58,237,0.7)",
            borderWidth: 1,
            borderRadius: 3,
          },
          {
            type: "scatter" as const,
            label: "Posterior Mean",
            data: means.map((y, i) => ({ x: y, y: i })) as unknown as number[],
            pointBackgroundColor: "#A78BFA",
            pointBorderColor: "#A78BFA",
            pointRadius: 5,
            pointHoverRadius: 7,
          } as any,
        ],
      },
      options: {
        indexAxis: "y" as const,
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: "#6B7CB0", padding: 16, font: { size: 12 } } },
          tooltip: {
            backgroundColor: "rgba(12,12,28,0.95)",
            borderColor: "rgba(124,58,237,0.3)",
            borderWidth: 1,
            titleColor: "#E8EEFF",
            bodyColor: "#8892B4",
            callbacks: {
              label: (c) => {
                if (Array.isArray(c.raw)) return " Credible interval: " + (c.raw as number[])[0] + "% – " + (c.raw as number[])[1] + "%";
                return " Mean: " + c.raw + "%";
              },
            },
          },
        },
        scales: {
          x: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#4A5180", font: { size: 11 }, callback: (v) => v + "%" },
            title: { display: true, text: "% contribution to revenue (posterior)", color: "#4A5180", font: { size: 11 } },
          },
          y: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#8892B4", font: { size: 12 } } },
        },
      },
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={ref} />;
}

// ── Chart 4: Budget reallocation ──────────────────────────────
function BudgetChart() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    if (!ref.current) return;
    const ctx = ref.current.getContext("2d");
    if (!ctx) return;
    const chart = new Chart(ctx, {
      type: "bar",
      data: {
        labels: ["Paid Search Brand","Paid Social","Connected TV","Email / CRM","Streaming Audio","Display","Out-of-Home"],
        datasets: [
          {
            label: "Before MMM (platform-ROAS optimized)",
            data: [28, 32, 12, 8, 7, 8, 5],
            backgroundColor: "rgba(74,81,128,0.5)",
            borderColor: "rgba(74,81,128,0.8)",
            borderWidth: 1,
            borderRadius: 4,
          },
          {
            label: "After MMM (incremental ROAS optimized)",
            data: [22, 24, 18, 12, 10, 6, 8],
            backgroundColor: "rgba(167,139,250,0.6)",
            borderColor: "rgba(167,139,250,0.9)",
            borderWidth: 1,
            borderRadius: 4,
          },
        ],
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { position: "bottom", labels: { color: "#6B7CB0", padding: 16, font: { size: 12 } } },
          tooltip: {
            backgroundColor: "rgba(12,12,28,0.95)",
            borderColor: "rgba(124,58,237,0.3)",
            borderWidth: 1,
            titleColor: "#E8EEFF",
            bodyColor: "#8892B4",
            callbacks: { label: (c) => " " + String(c.dataset.label).split("(")[0].trim() + ": " + c.raw + "% of budget" },
          },
        },
        scales: {
          x: { grid: { color: "rgba(255,255,255,0.04)" }, ticks: { color: "#4A5180", font: { size: 11 }, maxRotation: 30 } },
          y: {
            grid: { color: "rgba(255,255,255,0.04)" },
            ticks: { color: "#4A5180", font: { size: 11 }, callback: (v) => v + "%" },
            title: { display: true, text: "% of total media budget", color: "#4A5180", font: { size: 11 } },
          },
        },
      },
    });
    return () => chart.destroy();
  }, []);
  return <canvas ref={ref} />;
}

// ── Shared components ─────────────────────────────────────────

function PullQuote({ children }: { children: React.ReactNode }) {
  return (
    <blockquote style={{
      borderLeft: "3px solid #7C3AED",
      padding: "20px 28px",
      margin: "40px 0",
      background: "rgba(124,58,237,0.07)",
      borderRadius: "0 12px 12px 0",
    }}>
      <p style={{ fontSize: 19, fontWeight: 600, color: "#E8EEFF", lineHeight: 1.55, margin: 0, fontStyle: "italic" }}>
        {children}
      </p>
    </blockquote>
  );
}

function Callout({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div style={{
      border: "1px solid rgba(124,58,237,0.25)",
      background: "rgba(124,58,237,0.06)",
      borderRadius: 14,
      padding: "24px 28px",
      margin: "32px 0",
    }}>
      <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase" as const, color: "#A78BFA", marginBottom: 10 }}>
        {title}
      </div>
      <div style={{ fontSize: 15, color: "#8892B4", lineHeight: 1.65 }}>{children}</div>
    </div>
  );
}

function ChartSection({
  num,
  title,
  sub,
  note,
  height = 280,
  children,
}: {
  num: string;
  title: string;
  sub: string;
  note: string;
  height?: number;
  children: React.ReactNode;
}) {
  return (
    <div style={{
      margin: "48px 0",
      background: "rgba(255,255,255,0.02)",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: 16,
      padding: "32px 28px 24px",
    }}>
      <div style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#7C3AED", marginBottom: 6 }}>
        Visualization {num}
      </div>
      <div style={{ fontSize: 17, fontWeight: 700, color: "#E8EEFF", marginBottom: 4 }}>{title}</div>
      <div style={{ fontSize: 13, color: "#4A5180", marginBottom: 24, lineHeight: 1.5 }}>{sub}</div>
      <div style={{ position: "relative", height }}>{children}</div>
      <div style={{ fontSize: 12, color: "#4A5180", marginTop: 14, fontStyle: "italic" as const }}>{note}</div>
    </div>
  );
}

function SectionDivider() {
  return (
    <div style={{
      width: "100%",
      height: 1,
      background: "linear-gradient(90deg, transparent, rgba(124,58,237,0.25), transparent)",
      margin: "56px 0 0",
    }} />
  );
}

// ── Inline styles ─────────────────────────────────────────────
const S = {
  body: {
    background: "#06060F",
    color: "#E8EEFF",
    fontFamily: "-apple-system, BlinkMacSystemFont, 'Inter', 'Segoe UI', sans-serif",
    lineHeight: 1.7,
    fontSize: 17,
    WebkitFontSmoothing: "antialiased" as const,
  } as React.CSSProperties,
  nav: {
    background: "rgba(6,6,15,0.92)",
    borderBottom: "1px solid rgba(255,255,255,0.07)",
    padding: "14px 0",
    position: "sticky" as const,
    top: 0,
    zIndex: 50,
    backdropFilter: "blur(16px)",
  } as React.CSSProperties,
  article: {
    maxWidth: 780,
    margin: "0 auto",
    padding: "64px 24px 120px",
  } as React.CSSProperties,
  h2: {
    fontSize: "clamp(22px, 3.5vw, 28px)",
    fontWeight: 800,
    color: "#E8EEFF",
    lineHeight: 1.25,
    margin: "56px 0 18px",
    letterSpacing: "-0.015em",
  } as React.CSSProperties,
  h3: {
    fontSize: 18,
    fontWeight: 700,
    color: "#E8EEFF",
    margin: "36px 0 14px",
  } as React.CSSProperties,
  p: {
    fontSize: 17,
    color: "#8892B4",
    lineHeight: 1.78,
    marginBottom: 22,
  } as React.CSSProperties,
  tag: {
    fontSize: 11,
    fontWeight: 700,
    letterSpacing: "0.12em",
    textTransform: "uppercase" as const,
    color: "#7C3AED",
    background: "rgba(124,58,237,0.1)",
    border: "1px solid rgba(124,58,237,0.25)",
    borderRadius: 8,
    padding: "5px 14px",
    display: "inline-block",
    marginBottom: 20,
  } as React.CSSProperties,
};

// ── Page ─────────────────────────────────────────────────────
export default function LightweightMMMPage() {
  return (
    <div style={S.body}>
      {/* Nav */}
      <nav style={S.nav}>
        <div style={{ maxWidth: 860, margin: "0 auto", padding: "0 24px", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Link href="/" style={{ display: "flex", alignItems: "center", gap: 8, textDecoration: "none", fontWeight: 700, fontSize: 15, color: "#E8EEFF" }}>
            <svg width="26" height="26" viewBox="0 0 260 260" fill="none">
              <rect x="18" y="18" width="224" height="224" rx="34" ry="34" fill="rgba(124,58,237,0.08)" stroke="#7C3AED" strokeWidth="8"/>
              <path stroke="#E8EEFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M 72 170 L 72 88 L 118 120 L 146 102"/>
              <path stroke="#E8EEFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none" d="M 146 102 L 146 174 L 188 206"/>
              <circle fill="#A78BFA" cx="54" cy="180" r="15"/>
              <circle fill="#A78BFA" cx="108" cy="151" r="15"/>
            </svg>
            Measure<span style={{ color: "#A78BFA" }}>Lens</span>
          </Link>
          <Link href="/blog" style={{ fontSize: 13, color: "#6B7CB0", textDecoration: "none", display: "flex", alignItems: "center", gap: 6 }}>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            All articles
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <header style={{ background: "#06060F", borderBottom: "1px solid rgba(255,255,255,0.05)", padding: "72px 0 56px" }}>
        <div style={{ maxWidth: 780, margin: "0 auto", padding: "0 24px" }}>
          <div style={S.tag}>MMM</div>
          <h1 style={{
            fontSize: "clamp(28px, 5vw, 46px)",
            fontWeight: 900,
            color: "#E8EEFF",
            lineHeight: 1.1,
            letterSpacing: "-0.025em",
            marginBottom: 20,
          }}>
            Your MMM Runs Twice a Year.<br/>
            Your Competitors&apos; Runs Every Week.<br/>
            <span style={{
              background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}>
              That&apos;s the Entire Problem.
            </span>
          </h1>
          <p style={{ fontSize: 19, color: "#6B7CB0", lineHeight: 1.6, maxWidth: 640 }}>
            Marketing Mix Modeling doesn&apos;t have a methodology problem. It has a cadence problem. The industry spent a decade building better models and forgot to ask how often they&apos;d actually be used.
          </p>
          <div style={{ display: "flex", alignItems: "center", gap: 20, marginTop: 28, paddingTop: 24, borderTop: "1px solid rgba(255,255,255,0.07)" }}>
            <span style={{ fontSize: 13, color: "#6B7CB0" }}><strong style={{ color: "#8892B4" }}>MeasureLens</strong></span>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
            <span style={{ fontSize: 13, color: "#4A5180" }}>April 2026</span>
            <span style={{ color: "rgba(255,255,255,0.1)" }}>·</span>
            <span style={{ fontSize: 13, color: "#4A5180" }}>12 min read</span>
          </div>
        </div>
      </header>

      {/* Body */}
      <article style={S.article}>

        <p style={S.p}>
          There&apos;s a ritual in most marketing organizations that goes like this: a consulting firm or data science team spends three to four months building a Marketing Mix Model. A 200-slide deck lands in a senior leadership meeting. Some budget recommendations get approved, partially. Six months later, market conditions have shifted, the model is stale, and the team is already preparing the next engagement — a process that will take another three months and another six-figure budget line.
        </p>
        <p style={S.p}>
          This is not a technology failure. It&apos;s an organizational one. Traditional MMM was designed to be a retrospective audit, not an operational input. It was built for the pace at which finance reviews strategy, not the pace at which media teams buy inventory.
        </p>
        <p style={S.p}>
          <strong style={{ color: "#E8EEFF" }}>Lightweight MMM changes the premise entirely.</strong> It is not a faster version of the same model. It is a fundamentally different philosophy: that measurement should ship decisions at the speed decisions need to be made — weekly, not quarterly.
        </p>

        <PullQuote>
          &ldquo;The best MMM is not the most accurate retrospective model. It&apos;s the one that makes this week&apos;s budget decision defensible.&rdquo;
        </PullQuote>

        <p style={S.p}>
          This article makes the case for why lightweight MMM isn&apos;t just a technical improvement — it&apos;s an architectural shift that will define how serious marketing organizations operate for the next decade.
        </p>

        {/* Section 1 */}
        <SectionDivider />
        <h2 style={S.h2}>1. The Speed of Decisions Has Outpaced the Speed of Models</h2>
        <p style={S.p}>
          Marketing in 2026 does not resemble the world in which traditional MMM was designed. Media buyers are making real-time allocation decisions across platforms that didn&apos;t exist five years ago. A brand running connected TV, paid social, retail media, and podcast sponsorships simultaneously is managing a portfolio that can shift by millions of dollars in a single day.
        </p>
        <p style={S.p}>
          Against this backdrop, a model that refreshes twice a year isn&apos;t just slow — it&apos;s silent for the decision that actually matters. By the time a traditional MMM publishes its recommendations, most of the media investment it informed has already been spent.
        </p>

        <Callout title="The Timing Gap">
          <>
            Traditional MMM averages <strong style={{ color: "#E8EEFF" }}>two engagements per year</strong>, each taking 8–16 weeks to deliver. That means the average marketer has access to MMM-based guidance for roughly <strong style={{ color: "#E8EEFF" }}>4 out of 52 weeks</strong> — less than 8% of the time decisions are actually being made.
            <br /><br />
            Lightweight MMM, running on a weekly data refresh and monthly model retrain, is <strong style={{ color: "#E8EEFF" }}>operationally present</strong> for every planning cycle.
          </>
        </Callout>

        <ChartSection
          num="01"
          title="Decision Coverage: Traditional vs. Lightweight MMM"
          sub="Weeks per month where MMM-informed guidance is available to the media planning team"
          note="* Traditional MMM assumes 2 engagements/year, 10-week delivery each. Lightweight assumes weekly data refresh with continuous output."
          height={240}
        >
          <CadenceChart />
        </ChartSection>

        <p style={S.p}>
          The PODS moving and storage brand lived this problem. They were running traditional MMM twice a year — which meant their media team spent most of the year flying blind, or relying on platform-reported ROAS numbers that overstated paid channel contribution. After switching to a weekly-cadence measurement model, they replaced 26 weeks of guesswork with data-driven portfolio guidance on every planning cycle.
        </p>

        {/* Stats */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(160px, 1fr))", gap: 12, margin: "32px 0" }}>
          {[
            { n: "8%",   d: "of the year traditional MMM guidance is available" },
            { n: "96%",  d: "of the year lightweight MMM maintains live output" },
            { n: "4–5×", d: "faster time-to-first-recommendation vs. legacy approach" },
            { n: "3 mo", d: "time BARK built its first in-house MMM (vs. typical 6–9)" },
          ].map((s) => (
            <div key={s.n} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "20px 18px", textAlign: "center" }}>
              <div style={{ fontSize: 30, fontWeight: 900, lineHeight: 1, marginBottom: 6, background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>{s.n}</div>
              <div style={{ fontSize: 12, color: "#4A5180", lineHeight: 1.5 }}>{s.d}</div>
            </div>
          ))}
        </div>

        {/* Section 2 */}
        <SectionDivider />
        <h2 style={S.h2}>2. Lower Data Requirements Don&apos;t Mean Less Rigor</h2>
        <p style={S.p}>
          One of the most persistent misconceptions about lightweight MMM is that it trades accuracy for speed. The thinking goes: if you&apos;re updating weekly instead of quarterly, you must be using less data — and less data means less reliable models.
        </p>
        <p style={S.p}>
          This confuses data volume with data quality. Traditional MMM required 3–5 years of weekly data because frequentist regression couldn&apos;t incorporate prior knowledge — it had to discover everything from scratch. Bayesian MMM changes this equation entirely. <strong style={{ color: "#E8EEFF" }}>Prior distributions encode domain knowledge directly into the model</strong>, meaning a Bayesian framework can produce credible parameter estimates with as little as 2 years of weekly data.
        </p>

        <PullQuote>
          &ldquo;Priors aren&apos;t an escape hatch from rigor. They&apos;re a mechanism for making your assumptions explicit and testable — which is more honest than pretending you have none.&rdquo;
        </PullQuote>

        <h3 style={S.h3}>Hierarchical Pooling: Getting More from Less</h3>
        <p style={S.p}>
          When a model is run across multiple markets, channels, or product lines, <strong style={{ color: "#E8EEFF" }}>hierarchical pooling</strong> shares statistical strength across related subgroups rather than treating each as independent. A market with limited spend history can borrow from patterns observed in similar markets. A channel with only six months of data can be informed by structural priors on typical response curves.
        </p>
        <p style={S.p}>
          This is how BARK built its first in-house MMM in three months. They didn&apos;t have a decade of clean historical data. They had clean recent data, sensible priors, and a Bayesian framework that could work with both.
        </p>

        {/* Section 3 */}
        <SectionDivider />
        <h2 style={S.h2}>3. Bayesian Priors Are Actually a Governance Mechanism</h2>
        <p style={S.p}>
          Here&apos;s an angle that rarely makes it into technical discussions but matters enormously in practice: the Bayesian structure of lightweight MMM is not just a statistical choice. It&apos;s an organizational one.
        </p>
        <p style={S.p}>
          In a traditional regression-based MMM, model assumptions are buried in methodological decisions that most stakeholders can&apos;t see or audit. Bayesian priors force those assumptions into the open. The prior distribution for a paid search channel&apos;s contribution says explicitly: <em style={{ color: "#8892B4" }}>&ldquo;Before we look at the data, we believe this channel typically drives X% of conversion, with uncertainty range Y.&rdquo;</em> That assumption can be challenged, defended, updated with experiment results, and audited.
        </p>

        <Callout title="Calibration as Credibility">
          <>
            The gold standard for prior calibration is the <strong style={{ color: "#E8EEFF" }}>geo holdout experiment</strong> — a randomized market test where spend is held constant in a control group while a treatment group receives incremental investment. The measured lift anchors the MMM output to a causal estimate rather than a correlational one.
            <br /><br />
            This makes the model&apos;s evidence chain auditable: <strong style={{ color: "#E8EEFF" }}>&ldquo;We believe paid search drove 18% contribution this quarter, because our geo experiment showed 14–22% incremental lift at this spend level.&rdquo;</strong>
          </>
        </Callout>

        {/* Feedback loop diagram */}
        <ChartSection
          num="02"
          title="The Always-On Measurement Loop"
          sub="How lightweight MMM closes the gap between decisions, experiments, and model improvement"
          note="Cycle repeats weekly — model improves with every campaign and every experiment"
          height={180}
        >
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", height: "100%", flexWrap: "wrap", gap: 8 }}>
            {[
              { color: "#7C3AED", icon: "✓", title: "Budget Decision", sub: "Allocate spend based on model output" },
              { color: "#60A5FA", icon: "↗", title: "Media Execution", sub: "Run campaigns; collect signals" },
              { color: "#34D399", icon: "▦", title: "Weekly Refresh", sub: "Data ingested; posteriors updated" },
              { color: "#A78BFA", icon: "◎", title: "Geo Calibration", sub: "Experiments anchor priors" },
            ].map((node, i, arr) => (
              <div key={node.title} style={{ display: "flex", alignItems: "center", gap: 8, flex: 1, minWidth: 120, justifyContent: "center" }}>
                <div style={{ background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, padding: "14px 12px", textAlign: "center", flex: 1 }}>
                  <div style={{ fontSize: 22, color: node.color, marginBottom: 6 }}>{node.icon}</div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: "#C4CAEE", marginBottom: 3 }}>{node.title}</div>
                  <div style={{ fontSize: 11, color: "#4A5180", lineHeight: 1.4 }}>{node.sub}</div>
                </div>
                {i < arr.length - 1 && (
                  <div style={{ color: "rgba(124,58,237,0.4)", fontSize: 18, flexShrink: 0 }}>→</div>
                )}
              </div>
            ))}
          </div>
        </ChartSection>

        {/* Section 4 */}
        <SectionDivider />
        <h2 style={S.h2}>4. Bayesian MMM Is the Technical Foundation That Makes This Possible</h2>
        <p style={S.p}>
          Lightweight MMM describes a specific technical architecture. The workhorse is <strong style={{ color: "#E8EEFF" }}>Bayesian hierarchical regression</strong>, implemented through probabilistic programming frameworks — Meta&apos;s Robyn, Google&apos;s LightweightMMM, and PyMC-Marketing have all significantly lowered the barrier to entry.
        </p>

        <ul style={{ paddingLeft: 22, marginBottom: 22 }}>
          {[
            { h: "Priors on adstock and saturation", b: "The model starts with informed priors on how spend transforms into response over time and how response diminishes at high spend levels — calibrated from experiments and updated with each retrain." },
            { h: "Credible intervals, not point estimates", b: "Every coefficient estimate comes with a posterior distribution. The output is always a range (14–22%), not a false-precision point estimate (18%)." },
            { h: "Regularization for channel proliferation", b: "Lasso, Elastic Net, or Bayesian shrinkage priors prevent overfitting as channel counts grow — making the model tractable even with 20+ channels in scope." },
            { h: "Privacy durability", b: "The model operates entirely on aggregated time-series data. No cookies, no user-level identifiers, no cross-site tracking. Privacy changes have no effect on data requirements." },
          ].map((item) => (
            <li key={item.h} style={{ fontSize: 17, color: "#8892B4", lineHeight: 1.75, marginBottom: 10, listStyleType: "disc" }}>
              <strong style={{ color: "#E8EEFF" }}>{item.h}:</strong> {item.b}
            </li>
          ))}
        </ul>

        <ChartSection
          num="03"
          title="Channel Contribution with 90% Credible Intervals"
          sub="Lightweight MMM provides a range of plausible contributions — not false precision. Narrower intervals reflect higher calibration confidence from geo experiments."
          note="* Illustrative posterior distributions. Narrower intervals (Brand Search, Email) reflect geo-experiment calibration. Wider intervals (Audio, DOOH) reflect limited incrementality test history."
          height={320}
        >
          <CredibleChart />
        </ChartSection>

        {/* Section 5 */}
        <SectionDivider />
        <h2 style={S.h2}>5. The Adoption Wave Is Already Here — and It&apos;s Accelerating</h2>
        <p style={S.p}>
          Lightweight MMM is already mainstream in early-adopter organizations. What&apos;s happening now is the diffusion into the broader market — driven by four converging forces.
        </p>

        {[
          { h: "Force 1: Privacy Regulation Has Made MTA Structurally Unreliable", b: "Multi-touch attribution built its case on user-level tracking. The tracking is going away — not gradually, in meaningful disruptive ways that make MTA outputs increasingly disconnected from reality. MMM is the natural destination." },
          { h: "Force 2: Channel Fragmentation Has Made Holistic Measurement Mandatory", b: "When spend is distributed across 15+ digital and traditional channels, each with different measurement APIs and attribution models, the platform-reported numbers become irreconcilable. Only a model that treats all channels as inputs to a single unified response function can produce a portfolio-level view." },
          { h: "Force 3: Open-Source Tooling Has Democratized Access", b: "Robyn, LightweightMMM, and PyMC-Marketing have removed the barrier of proprietary methodology. A data science team with solid Python skills can build a production-grade Bayesian MMM today. BARK's three-month timeline is a direct result of this." },
          { h: "Force 4: Planning Cycles Have Compressed", b: "Annual planning is supplemented by quarterly reviews, monthly optimizations, and weekly performance conversations. Lightweight MMM is the only framework that can actually serve all of them — it has something meaningful to say in every planning conversation, not just the annual one." },
        ].map((f) => (
          <div key={f.h}>
            <h3 style={S.h3}>{f.h}</h3>
            <p style={S.p}>{f.b}</p>
          </div>
        ))}

        <ChartSection
          num="04"
          title="Budget Reallocation: Before vs. After MMM-Guided Planning"
          sub="Illustrative portfolio shift when incremental ROAS replaces platform-reported ROAS as the optimization objective"
          note="* Illustrative reallocation based on typical findings in Bayesian MMM deployments. Paid social and branded search commonly show lower incremental contribution than platform-reported metrics suggest."
          height={300}
        >
          <BudgetChart />
        </ChartSection>

        {/* Case studies */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))", gap: 12, margin: "32px 0" }}>
          {[
            { co: "PODS",      result: "Twice-yearly → Weekly", desc: "Replaced legacy consulting MMM with continuous weekly measurement" },
            { co: "Lemonade",  result: "+78% YoY",              desc: "US revenue growth Q4 2021, driven by MMM-optimized portfolio decisions" },
            { co: "Talisa",    result: "+17% Sales",            desc: "Revenue increase with flat total spend via channel reallocation" },
            { co: "BARK",      result: "3 Months",              desc: "First in-house MMM built and deployed, previously estimated 6–9 months" },
          ].map((c) => (
            <div key={c.co} style={{ background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.07)", borderRadius: 12, padding: "18px 20px" }}>
              <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" as const, color: "#A78BFA", marginBottom: 6 }}>{c.co}</div>
              <div style={{ fontSize: 19, fontWeight: 800, color: "#E8EEFF", lineHeight: 1.2, marginBottom: 4 }}>{c.result}</div>
              <div style={{ fontSize: 12, color: "#4A5180", lineHeight: 1.5 }}>{c.desc}</div>
            </div>
          ))}
        </div>

        {/* Conclusion */}
        <SectionDivider />
        <h2 style={S.h2}>What This Means for Your Organization</h2>
        <p style={S.p}>
          The argument for lightweight MMM is not that traditional approaches were wrong. It&apos;s that the world they were designed for no longer exists. The pace of decisions, the fragmentation of channels, the collapse of user-level tracking, and the democratization of Bayesian tooling have collectively made the quarterly model-then-wait cycle untenable.
        </p>
        <p style={S.p}>
          The organizations that will measure best over the next five years are not the ones with the most sophisticated models. They are the ones with the most continuous feedback loops — models that improve with every campaign, priors that tighten with every experiment, and recommendations that are present for every planning conversation.
        </p>
        <p style={S.p}>
          <strong style={{ color: "#E8EEFF" }}>Lightweight MMM is not a shortcut to measurement.</strong> It is measurement done at the speed of the business — operationalized, governed, and always on.
        </p>

        <PullQuote>
          &ldquo;The question isn&apos;t whether you can afford to run MMM continuously. It&apos;s whether you can afford not to.&rdquo;
        </PullQuote>

        {/* CTA */}
        <div style={{
          background: "linear-gradient(135deg, rgba(124,58,237,0.15) 0%, rgba(96,165,250,0.08) 100%)",
          border: "1px solid rgba(124,58,237,0.25)",
          borderRadius: 20,
          padding: "52px 44px",
          margin: "72px 0 0",
          textAlign: "center",
        }}>
          <div style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase" as const, color: "#A78BFA", marginBottom: 16 }}>MeasureLens</div>
          <h2 style={{ fontSize: "clamp(22px, 4vw, 32px)", fontWeight: 900, color: "#E8EEFF", lineHeight: 1.2, marginBottom: 16, letterSpacing: "-0.02em" }}>
            LensOS runs always-on Bayesian MMM<br/>
            <span style={{ background: "linear-gradient(135deg, #A78BFA 0%, #60A5FA 100%)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              on your actual portfolio.
            </span>
          </h2>
          <p style={{ fontSize: 16, color: "#6B7CB0", maxWidth: 500, margin: "0 auto 32px", lineHeight: 1.65 }}>
            Weekly data refresh. Monthly model retrain. Calibrated with geo experiments. Connected directly to budget scenario modeling and portfolio decisions.
          </p>
          <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
            <Link href="https://app.measurelens.com" style={{
              background: "#7C3AED",
              color: "white",
              padding: "12px 24px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 700,
              textDecoration: "none",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}>
              Try LensOS
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </Link>
            <Link href="/contact" style={{
              background: "transparent",
              color: "#6B7CB0",
              padding: "12px 24px",
              borderRadius: 10,
              fontSize: 14,
              fontWeight: 600,
              textDecoration: "none",
              border: "1px solid rgba(255,255,255,0.10)",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
            }}>
              Talk to the team
            </Link>
          </div>
        </div>

        <div style={{ fontSize: 12, color: "#2E3460", borderTop: "1px solid rgba(255,255,255,0.05)", marginTop: 24, paddingTop: 16, lineHeight: 1.6 }}>
          Sources: Case study data drawn from published industry research for PODS, Lemonade, BARK, Talisa, and Domino&apos;s. Visualizations are illustrative of typical MMM deployment patterns. This article draws on methodology from Google LightweightMMM, Meta Robyn, and the broader academic literature on Bayesian hierarchical regression in marketing science.
        </div>

      </article>
    </div>
  );
}
