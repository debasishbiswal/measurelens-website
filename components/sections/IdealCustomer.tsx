"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const profiles = [
  {
    role: "CMO / VP Marketing",
    company: "Enterprise · $5M–$50M annual media budget",
    pain: "My board wants to know if our $18M media investment is working. My agency gives me ROAS numbers. My MMM vendor sends a quarterly report 12 weeks late. I need something that helps me make a decision this week — not something that explains last quarter.",
    gains: [
      "Executive-ready briefings with confidence intervals",
      "Scenario planning before board and budget meetings",
      "Defensible budget rationale backed by causal evidence",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    role: "Head of Growth / Performance",
    company: "Scale-up · $500K–$5M/month ad spend",
    pain: "I need to know whether to push harder on paid or diversify into CTV before our planning cycle closes. My team has three different analyses saying three different things. I need a system that gives me a single confident answer — with the uncertainty quantified.",
    gains: [
      "Per-channel prescriptive decisions with confidence bands",
      "Budget reallocation recommendations with iROAS evidence",
      "Experiment design briefs for the highest-priority gaps",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
      </svg>
    ),
  },
  {
    role: "Analytics / Data Science Lead",
    company: "Any stage · Building measurement infrastructure",
    pain: "We've got MMM, MTA, and geo test results. They all say something different and none of them produce an output my CMO can act on. I need a reconciliation framework that integrates causal evidence from multiple sources and surfaces the uncertainty — not hides it.",
    gains: [
      "Principled evidence reconciliation across MMM, MTA, and experiments",
      "Model cards and audit trails for cross-functional trust",
      "API exports and deck-ready outputs for stakeholder delivery",
    ],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="2" y="3" width="20" height="14" rx="2"/>
        <path d="M8 21h8M12 17v4"/>
      </svg>
    ),
  },
];

const signals = [
  "You've run a geo holdout that came back 'inconclusive' and didn't know what to do with it",
  "Your MMM was delivered 10 weeks ago and is already being questioned by finance",
  "You've committed budget based on a number you privately don't trust",
  "Your CFO asked for a confidence interval and you couldn't provide one",
  "You have three measurement tools and still can't answer 'what should we cut?'",
  "You know you need causal measurement but can't justify a $200K consulting engagement",
];

export default function IdealCustomer() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as any} className="py-24 lg:py-32 section-light">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-16 reveal-on-scroll">
          <div className="section-tag justify-center" style={{ color: "#7C3AED" }}>
            <span>Who It's Built For</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-5" style={{ color: "#0F0F2A" }}>
            Built for teams making
            <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}> high-stakes growth decisions.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7280" }}>
            If you're allocating significant media budget and need decisions — not
            just measurement — grounded in causal evidence and explicit uncertainty,
            LensOS is built for you.
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
              <div className="h-px mb-5" style={{ background: "rgba(0,0,0,0.07)" }} />
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
            LensOS was built for you if any of these sound familiar:
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
