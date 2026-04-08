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

    // TODO: replace with real waitlist endpoint
    // e.g. POST /api/waitlist  →  Resend / Loops / ConvertKit
    // await fetch("/api/waitlist", {
    //   method: "POST",
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify({ email }),
    // });

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
          background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 65%)",
        }}
      />
      {/* Grid */}
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
          Stop guessing.
          <br />
          <span className="gradient-text">Start knowing.</span>
        </h2>

        <p
          className="text-xl mb-4 reveal-on-scroll reveal-delay-2"
          style={{ color: "#6B7CB0" }}
        >
          Get your real ROAS in under an hour.
        </p>
        <p
          className="text-base mb-12 reveal-on-scroll reveal-delay-2"
          style={{ color: "rgba(107,124,176,0.6)" }}
        >
          No data science team. No six-week engagement. Just upload your exports
          and LensOS does the rest.
        </p>

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
            <button type="submit" className="btn-primary">
              Request Access
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
              You're on the list. We'll be in touch shortly.
            </p>
          </div>
        )}

        <p
          className="text-xs mb-16 reveal-on-scroll reveal-delay-3"
          style={{ color: "rgba(107,124,176,0.5)" }}
        >
          No credit card required · Built for teams spending $10K–$500K/month · Early access cohort filling now
        </p>

        {/* Secondary CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center reveal-on-scroll reveal-delay-4"
        >
          <a href="#how-it-works" className="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <polygon points="5 3 19 12 5 21 5 3"/>
            </svg>
            See how it works
          </a>
          <a href="#" className="btn-ghost">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
            </svg>
            Upload your data
          </a>
        </div>

        {/* Trust row */}
        <div
          className="mt-20 pt-10 reveal-on-scroll reveal-delay-5"
          style={{ borderTop: "1px solid rgba(255,255,255,0.05)" }}
        >
          <p
            className="text-xs uppercase tracking-widest mb-6 font-semibold"
            style={{ color: "rgba(107,124,176,0.4)" }}
          >
            Built on the same data your team already exports
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {["Meta Ads", "Google Ads", "GA4", "MMM Output", "MTA Feeds", "Experiments"].map((t) => (
              <span
                key={t}
                className="text-sm font-semibold px-4 py-2 rounded-lg"
                style={{
                  color: "rgba(184,192,224,0.5)",
                  background: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.04)",
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
