"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const reasons = [
  {
    number: "01",
    title: "Attribution overlap",
    body:
      "Meta claims the conversion. Google claims it too. Your CRM logs one purchase. Every platform counts full credit for the same sale. So your reported ROAS can be two or three times what you actually earned. The number looks great. The underlying reality does not match it.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <circle cx="9" cy="9" r="6"/><circle cx="15" cy="15" r="6"/>
      </svg>
    ),
  },
  {
    number: "02",
    title: "Platform incentives",
    body:
      "Every ad platform has a commercial reason to report strong performance. Their attribution windows and models are designed by the same teams that benefit from a high ROAS number. This is not a conspiracy. It is just a conflict of interest that no one talks about plainly enough.",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"/>
      </svg>
    ),
  },
  {
    number: "03",
    title: "Missing incrementality",
    body:
      "ROAS tells you how many dollars came in alongside your ads. It does not tell you how many dollars came in because of them. Without knowing what is truly incremental, you cannot tell whether cutting a channel saves you money or costs you sales. That distinction is worth a lot.",
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
          <div className="section-tag">The Real Problem</div>
          <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-5">
            Why the ROAS number you are looking at is probably{" "}
            <span className="gradient-text">wrong</span>
          </h2>
          <p className="text-lg" style={{ color: "#6B7CB0" }}>
            Three structural issues corrupt most marketing measurement reports.
            They exist regardless of which platform you use,
            how carefully you built your stack,
            or how experienced your team is.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {reasons.map((r, i) => (
            <div
              key={r.number}
              className={`glass-card glass-card-hover rounded-xl p-7 reveal-on-scroll reveal-delay-${i + 1}`}
            >
              <div className="flex items-start gap-4 mb-5">
                <div
                  className="p-2.5 rounded-lg flex-shrink-0"
                  style={{ background: "rgba(124,58,237,0.1)", color: "#A78BFA" }}
                >
                  {r.icon}
                </div>
                <span
                  className="text-xs font-mono font-bold mt-1"
                  style={{ color: "rgba(124,58,237,0.5)", letterSpacing: "0.1em" }}
                >
                  {r.number}
                </span>
              </div>
              <h3 className="text-lg font-semibold text-white mb-3">{r.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>
                {r.body}
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
              Most marketing teams are making significant budget decisions based on
              numbers that overstate performance by{" "}
              <span className="gradient-text">40 to 80 percent.</span>
            </p>
            <p className="mt-5 text-sm leading-relaxed" style={{ color: "#6B7CB0" }}>
              That is not a data infrastructure problem. It is a measurement
              philosophy problem. And that is exactly what we are building toward.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
