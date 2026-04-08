import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "LensOS — MeasureLens",
  description:
    "LensOS is the reasoning layer inside MeasureLens. It weighs evidence, surfaces conflicts, and produces decisions — not dashboards.",
};

const capabilities = [
  {
    title: "Evidence scoring",
    body:  "Not all data sources are equally reliable. LensOS assigns each source an evidence tier based on its methodology, from geo holdout experiments at the top to platform last-click attribution at the bottom. A holdout study earns more weight than an analytics dashboard. The hierarchy is explicit, not hidden.",
    icon:  (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
      </svg>
    ),
  },
  {
    title: "Conflict surfacing",
    body:  "When two sources report different things, LensOS does not average them. It surfaces the disagreement explicitly, assigns a status flag, and explains the most likely reason for the delta. Attribution overlap, window differences, cross-device gaps, and model methodology differences each produce recognizable conflict signatures.",
    icon:  (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="3"/>
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83"/>
      </svg>
    ),
  },
  {
    title: "Confidence-weighted synthesis",
    body:  "After evaluating and reconciling sources, LensOS computes a Measurement Confidence Score between 0 and 100. This score reflects the agreement between sources, the evidence quality of each, and the recency of the data. A high-confidence result means multiple strong sources agree. A low-confidence result means you need more data before deciding.",
    icon:  (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"/>
      </svg>
    ),
  },
  {
    title: "Decision synthesis",
    body:  "The final output is not a chart. It is a recommendation: scale this channel, cut that one, or run a holdout test before committing. Each recommendation includes the confidence level behind it and what evidence would change the answer. It is designed to be useful in a meeting, not just in a spreadsheet.",
    icon:  (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
];

const inputs = [
  { label: "Meta Ads",       note: "Last-click and view-through attribution" },
  { label: "Google Ads",     note: "Search, display, and performance max" },
  { label: "GA4",            note: "Cross-device journey data" },
  { label: "MMM Output",     note: "Regression-based channel attribution" },
  { label: "MTA Feeds",      note: "Multi-touch attribution models" },
  { label: "Experiments",    note: "Geo holdout and incrementality tests" },
];

export default function LensOSPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "72px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
          background: "#06060F",
        }}
      >
        <div
          className="glow-orb"
          style={{
            width: 600,
            height: 400,
            top: "-100px",
            left: "50%",
            transform: "translateX(-40%)",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 70%)",
          }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "linear-gradient(rgba(124,58,237,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.025) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <div className="section-tag">LensOS</div>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-6"
            style={{ color: "#E8EEFF", lineHeight: 1.08 }}
          >
            The reasoning layer.{" "}
            <br />
            <span className="gradient-text">Not another dashboard.</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "#6B7CB0" }}>
            LensOS is the intelligence engine inside MeasureLens. It sits above your
            existing data sources, evaluates each one, resolves conflicts between them,
            and produces a single answer with a confidence score attached.
          </p>

          {/* Status */}
          <div
            className="inline-flex items-center gap-2 mt-8 px-4 py-2 rounded-full"
            style={{
              background: "rgba(124,58,237,0.08)",
              border: "1px solid rgba(124,58,237,0.2)",
            }}
          >
            <span className="w-2 h-2 rounded-full animate-pulse" style={{ background: "#A78BFA" }} />
            <span className="text-sm font-mono font-medium" style={{ color: "#A78BFA" }}>
              In active development
            </span>
          </div>
        </div>
      </section>

      {/* What it is */}
      <section
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          className="text-xs font-mono font-semibold uppercase tracking-widest mb-10"
          style={{ color: "rgba(107,124,176,0.5)" }}
        >
          What LensOS is
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <h2
              className="text-3xl font-bold tracking-tight mb-5"
              style={{ color: "#E8EEFF", lineHeight: 1.2 }}
            >
              Most tools show you data. LensOS interprets it.
            </h2>
            <div className="space-y-4 text-base leading-relaxed" style={{ color: "#8892B4" }}>
              <p>
                The fundamental problem with modern marketing measurement is not a lack
                of data. Teams have access to more performance data than ever. The problem
                is having no principled framework for evaluating which data deserves trust.
              </p>
              <p>
                LensOS is being built to fill that gap. It is not a new attribution model.
                It is not a better dashboard. It is a reasoning layer that sits above your
                existing data, assesses the quality of each source, and synthesizes a
                defensible answer from the evidence available.
              </p>
              <p>
                Think of it as the operating system for marketing measurement decisions.
                It does not replace your MMM or your attribution platform. It interprets
                them, weighs them against each other, and tells you what to do with the result.
              </p>
            </div>
          </div>

          {/* Inputs */}
          <div>
            <p
              className="text-xs font-mono font-semibold uppercase tracking-widest mb-5"
              style={{ color: "rgba(107,124,176,0.5)" }}
            >
              Data sources LensOS evaluates
            </p>
            <div className="space-y-3">
              {inputs.map((inp) => (
                <div
                  key={inp.label}
                  className="flex items-center gap-4 px-4 py-3 rounded-xl"
                  style={{
                    background: "rgba(255,255,255,0.02)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: "#7C3AED" }} />
                  <span className="font-semibold text-sm" style={{ color: "#C4CAEE", minWidth: 110 }}>
                    {inp.label}
                  </span>
                  <span className="text-sm" style={{ color: "#6B7CB0" }}>
                    {inp.note}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section
        className="max-w-4xl mx-auto px-6 lg:px-8 py-20"
        style={{ borderBottom: "1px solid rgba(255,255,255,0.05)" }}
      >
        <p
          className="text-xs font-mono font-semibold uppercase tracking-widest mb-10"
          style={{ color: "rgba(107,124,176,0.5)" }}
        >
          Core capabilities
        </p>

        <div className="grid sm:grid-cols-2 gap-6">
          {capabilities.map((cap) => (
            <div
              key={cap.title}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <div
                className="p-2.5 rounded-lg mb-4 inline-flex"
                style={{ background: "rgba(124,58,237,0.1)", color: "#A78BFA" }}
              >
                {cap.icon}
              </div>
              <h3
                className="font-semibold mb-3"
                style={{ color: "#C4CAEE", fontSize: "1rem" }}
              >
                {cap.title}
              </h3>
              <p style={{ color: "#6B7CB0", fontSize: "0.9375rem", lineHeight: 1.7 }}>
                {cap.body}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why it matters */}
      <section className="max-w-4xl mx-auto px-6 lg:px-8 py-20">
        <div
          className="rounded-2xl p-10 lg:p-12"
          style={{
            background: "rgba(124,58,237,0.05)",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <h2
            className="text-3xl font-bold tracking-tight mb-5"
            style={{ color: "#E8EEFF", lineHeight: 1.2 }}
          >
            Why "OS" is the right framing
          </h2>
          <div className="space-y-4 text-base leading-relaxed max-w-2xl" style={{ color: "#8892B4" }}>
            <p>
              An operating system does not do your work for you. It manages resources,
              arbitrates between processes, and provides a stable foundation for
              everything running on top of it. LensOS does the same thing for measurement.
            </p>
            <p>
              Your MMM, your attribution tools, your incrementality experiments: these
              are all processes running in parallel. They each produce an output.
              They sometimes agree. They often disagree. LensOS arbitrates between them
              using explicit rules about evidence quality, then provides a stable answer
              that the rest of your decision-making can run on top of.
            </p>
            <p>
              Without that layer, you are back to picking numbers by feel.
              With it, you have a defensible position, a confidence level,
              and a clear action to take.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/#cta" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Request Early Access
            </Link>
            <Link href="/about" className="btn-ghost" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              About MeasureLens
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
