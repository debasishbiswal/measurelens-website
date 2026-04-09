"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const failures = [
  {
    number: "01",
    title: "Black-box models. No audit trail.",
    body:
      "Legacy commercial intelligence delivers recommendations without model cards, confidence intervals, or the ability to ask why. The CFO asks a question. The answer is: trust the model. When budget is $10M, that's not good enough. You need to know what assumptions drove the output — and what would change it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
        <path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Consulting-heavy. Always lagging.",
    body:
      "Full commercial analytics engagements take 8–16 weeks. Quarterly reports arrive after you've committed the budget. You're optimizing last quarter's strategy with last quarter's model. Meanwhile your competitors are making decisions. Measurement that lives in the past cannot drive decisions in the present.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="12" cy="12" r="10"/>
        <path d="M12 6v6l4 2"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Optimization without uncertainty quantification.",
    body:
      "Recommending a budget shift without a confidence interval is not optimization — it's a guess with expensive infrastructure attached. Real commercial intelligence knows what it knows, quantifies what it doesn't, and never confuses precision for accuracy. Uncertainty is a first-class output, not a footnote.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2"/>
      </svg>
    ),
  },
];

export default function WhyROASWrong() {
  const ref = useScrollReveal();

  return (
    <section ref={ref as any} className="py-24 lg:py-32" style={{ background: "#0C0C1E" }}>
      <div className="max-w-7xl mx-auto px-6 lg:px-8">

        {/* Header */}
        <div className="max-w-2xl mb-16 reveal-on-scroll">
          <div className="section-tag">The Market Gap</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Legacy measurement tells you what happened.{" "}
            <span className="gradient-text">Not what to do.</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            The commercial intelligence incumbents built powerful platforms. But they built them
            for a world where measurement happened quarterly, models were consulting deliverables,
            and decisions waited for the next board meeting. That world is over.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {failures.map((f, i) => (
            <div
              key={f.number}
              className={`glass-card glass-card-hover rounded-xl p-7 reveal-on-scroll reveal-delay-${i + 1}`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="p-2.5 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.1)", color: "#A78BFA" }}
                >
                  {f.icon}
                </div>
                <span
                  className="text-xs font-mono font-bold mt-1"
                  style={{ color: "rgba(124,58,237,0.5)", letterSpacing: "0.1em" }}
                >
                  {f.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{f.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>
                {f.body}
              </p>
            </div>
          ))}
        </div>

        {/* Pull quote */}
        <div className="mt-16 reveal-on-scroll reveal-delay-4">
          <div
            className="rounded-2xl p-8 lg:p-10 text-center max-w-3xl mx-auto"
            style={{ background: "rgba(124,58,237,0.06)", border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <p className="text-2xl lg:text-3xl font-semibold tracking-tight" style={{ color: "#E8EEFF", lineHeight: 1.4 }}>
              The market already has commercial intelligence.
              What it's missing is commercial intelligence you can{" "}
              <span className="gradient-text">audit, trust, and act on</span>{" "}
              — in days, not quarters.
            </p>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>
              LensOS is built on transparent Bayesian models, explicit uncertainty quantification,
              and workflow-first exports. Not a consulting engagement. A product.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
