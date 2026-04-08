"use client";

import { useEffect, useState } from "react";

const navLinks = [
  { label: "Why MeasureLens", href: "#problem" },
  { label: "How It Works",    href: "#how-it-works" },
  { label: "LensOS",          href: "#lensos" },
  { label: "Pricing",         href: "#cta" },
];

export default function Navbar() {
  const [scrolled,     setScrolled]     = useState(false);
  const [menuOpen,     setMenuOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled
          ? "rgba(6,6,15,0.88)"
          : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled
          ? "1px solid rgba(255,255,255,0.06)"
          : "1px solid transparent",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">

          {/* Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            {/* Icon mark */}
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center flex-shrink-0"
              style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)" }}
            >
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" stroke="white" strokeWidth="1.5" fill="none"/>
                <circle cx="7" cy="7" r="2" fill="white"/>
              </svg>
            </div>
            <span
              className="font-bold text-base tracking-tight"
              style={{ color: "#E8EEFF" }}
            >
              Measure<span style={{ color: "#A78BFA" }}>Lens</span>
            </span>
          </a>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#8892B4" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8EEFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8892B4")}
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#cta"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "#8892B4" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8EEFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8892B4")}
            >
              Sign in
            </a>
            <a href="#cta" className="btn-primary" style={{ padding: "9px 18px", fontSize: "0.85rem" }}>
              Request Access
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden p-2 rounded-lg"
            style={{ color: "#8892B4", background: "rgba(255,255,255,0.04)" }}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            ) : (
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M3 12h18M3 6h18M3 18h18"/>
              </svg>
            )}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            className="md:hidden pb-4 pt-2 space-y-1"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium"
                style={{ color: "#8892B4" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </a>
            ))}
            <div className="pt-3 px-3">
              <a href="#cta" className="btn-primary w-full justify-center" onClick={() => setMenuOpen(false)}>
                Request Access
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
