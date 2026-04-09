"use client";
import { useState } from "react";
import { useScrollReveal } from "../ui/useScrollReveal";

export default function CTA() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const ref = useScrollReveal();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubmitted(true);
  };

  return (
    <section
      id="cta"
      ref={ref as any}
      className="py-24 lg:py-36 relative overflow-hidden"
      style={{ background: "#06060F" }}
    >
      {/* Background glow */}
      <div
        className="glow-orb"
        style={{
          width: 700,
          height: 500,
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          background: "radial-gradient(ellipse, rgba(124,58,237,0.14) 0%, transparent 65%)",
        }}
      />
      {/* Subtle grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "linear-gradient(rgba(124,58,237,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.025) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8 text-center">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 mb-8 reveal-on-scroll">
          <span
            className="w-2 h-2 rounded-full animate-pulse"
            style={{ background: "#34D399" }}
          />
          <span
            className="text-xs font-mono font-semibold uppercase tracking-widest"
            style={{ color: "#34D399" }}
          >
            Early Access Open
          </span>
        </div>

        {/* Headline */}
        <h2
          className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight mb-6 leading-[1.05] reveal-on-scroll reveal-delay-1"
          style={{ color: "#E8EEFF" }}
        >
          The future of growth
          <br />
          <span className="gradient-text">decisioning is here.</span>
        </h2>

        <p
          className="text-xl mb-4 reveal-on-scroll reveal-delay-2"
          style={{ color: "#8892B4" }}
        >
          Join the growth teams replacing consulting-heavy MMM programs with
          AI-native commercial intelligence that's causal, confident, and always-on.
        </p>
        <p
          className="text-base mb-12 leading-relaxed reveal-on-scroll reveal-delay-2"
          style={{ color: "rgba(107,124,176,0.6)" }}
        >
          LensOS is in active rollout. We're talking with growth leaders who are
          ready to move beyond quarterly reports and build a principled,
          always-on decisioning system for their marketing investment.
        </p>

        {/* Primary CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10 reveal-on-scroll reveal-delay-2">
          <a
            href="https://app.measurelens.com"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
            style={{ padding: "14px 28px", fontSize: "0.95rem" }}
          >
            Launch LensOS
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="mailto:hello@measurelens.com"
            className="btn-ghost"
            style={{ padding: "14px 28px", fontSize: "0.95rem" }}
          >
            Book a Discovery Call
          </a>
        </div>

        {/* CTA form */}
        {!submitted ? (
          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto mb-8 reveal-on-scroll reveal-delay-3"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              required
              className="flex-1 px-4 py-3 rounded-lg text-sm outline-none transition-all"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#E8EEFF",
              }}
              onFocus={(e) => (e.currentTarget.style.borderColor = "rgba(124,58,237,0.5)")}
              onBlur={(e) => (e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)")}
            />
            <button type="submit" className="btn-primary" style={{ whiteSpace: "nowrap" }}>
              Stay Updated
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </form>
        ) : (
          <div
            className="flex items-center justify-center gap-3 max-w-md mx-auto mb-8 py-4 px-6 rounded-lg reveal-on-scroll"
            style={{ background: "rgba(52,211,153,0.07)", border: "1px solid rgba(52,211,153,0.2)" }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#34D399" strokeWidth="2">
              <path d="M20 6L9 17l-5-5"/>
            </svg>
            <p className="text-sm font-medium" style={{ color: "#34D399" }}>
              You're on the list. We'll be in touch directly.
            </p>
          </div>
        )}

        <p
          className="text-xs mb-16 reveal-on-scroll reveal-delay-3"
          style={{ color: "rgba(107,124,176,0.4)" }}
        >
          No pitch deck. No canned demo. A direct conversation about your measurement stack.
        </p>

        {/* Methodology trust row */}
        <div
          className="mt-16 pt-10 reveal-on-scroll reveal-delay-4"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-6 font-semibold"
            style={{ color: "rgba(107,124,176,0.35)" }}
          >
            Built on
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            {[
              "Bayesian Hierarchical MMM",
              "BSTS / CausalImpact",
              "Constrained Optimizer",
              "Deterministic Reconciliation",
              "Governed LLM Agent",
              "Audit Pack Exports",
            ].map((t) => (
              <span
                key={t}
                className="text-sm font-semibold px-4 py-2 rounded-lg"
                style={{
                  color: "rgba(184,192,224,0.45)",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                }}
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
