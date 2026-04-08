"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const profiles = [
  {
    role: "Growth Marketer",
    company: "DTC brand, $50K–$200K/month ad spend",
    pain: "Stuck choosing between Meta's ROAS report and the GA4 numbers that don't match. Making budget decisions by gut because nothing agrees.",
    gains: ["Unified ROAS per channel", "Clear scale / cut guidance", "No analytics team needed"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    role: "VP / Director of Marketing",
    company: "Series A–C startup, $200K–$500K/month",
    pain: "CFO wants real attribution numbers before approving Q3 budget increase. Can't go to the board with four conflicting data sources.",
    gains: ["Board-ready confidence scores", "Source disagreement breakdown", "Defensible budget rationale"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    ),
  },
  {
    role: "Performance Lead / Media Buyer",
    company: "Agency or in-house, $10K–$100K/month",
    pain: "Clients ask why Google says 3.5× and Meta says 4.0×. The answer 'attribution window differences' isn't good enough anymore.",
    gains: ["Per-channel true iROAS", "Client-ready reports", "Incrementality test briefs"],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
];

const signals = [
  "You've ever said 'it depends which platform you look at'",
  "You've averaged ROAS numbers to get a 'blended' view",
  "You cut a channel and couldn't tell if revenue actually dropped",
  "You scaled Meta because the dashboard said 4× but CAC didn't improve",
  "You've wanted an MMM but couldn't justify the cost or wait time",
  "Your data team is too busy to run incrementality tests",
];

export default function IdealCustomer() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as any} className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <div className="section-tag justify-center" style={{ color: "#7C3AED" }}>
            <span>Who It's For</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5" style={{ color: "#0F0F2A" }}>
            Built for teams who've
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> outgrown dashboards.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            Spending $10K–$500K/month on ads and making decisions without confidence.
            You know your numbers are wrong — you just don't know by how much.
          </p>
        </div>

        {/* Profile cards */}
        <div className="grid md:grid-cols-3 gap-6 mb-16">
          {profiles.map((p, i) => (
            <div
              key={p.role}
              className={`rounded-2xl p-7 reveal-on-scroll reveal-delay-${i + 1}`}
              style={{
                background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(0,0,0,0.08)",
                backdropFilter: "blur(8px)",
              }}
            >
              <div
                className="w-11 h-11 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(124,58,237,0.1)", color: "#7C3AED" }}
              >
                {p.icon}
              </div>
              <p
                className="text-xs font-mono font-bold uppercase tracking-wider mb-1"
                style={{ color: "#9CA3AF" }}
              >
                {p.company}
              </p>
              <h3 className="text-lg font-bold mb-3" style={{ color: "#0F0F2A" }}>
                {p.role}
              </h3>
              <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7280" }}>
                {p.pain}
              </p>
              <div
                className="h-px mb-5"
                style={{ background: "rgba(0,0,0,0.07)" }}
              />
              <ul className="space-y-2">
                {p.gains.map((g) => (
                  <li key={g} className="flex items-start gap-2.5">
                    <span
                      className="flex-shrink-0 w-4 h-4 rounded-full flex items-center justify-center mt-0.5"
                      style={{ background: "rgba(124,58,237,0.1)" }}
                    >
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2 3-3" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className="text-sm" style={{ color: "#374151" }}>{g}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Recognition signals */}
        <div
          className="rounded-2xl p-8 lg:p-10 reveal-on-scroll reveal-delay-4"
          style={{
            background: "linear-gradient(135deg, rgba(124,58,237,0.06), rgba(79,70,229,0.04))",
            border: "1px solid rgba(124,58,237,0.15)",
          }}
        >
          <p className="text-lg font-semibold text-center mb-8" style={{ color: "#0F0F2A" }}>
            MeasureLens is probably right for you if you've ever said or done any of these:
          </p>
          <div className="grid md:grid-cols-2 gap-3">
            {signals.map((s) => (
              <div key={s} className="flex items-start gap-3">
                <span
                  className="flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mt-0.5"
                  style={{ background: "rgba(124,58,237,0.12)", border: "1px solid rgba(124,58,237,0.2)" }}
                >
                  <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
                    <path d="M2 5l2.5 2.5 3.5-4" stroke="#7C3AED" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
                <p className="text-sm leading-relaxed" style={{ color: "#374151" }}>{s}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
