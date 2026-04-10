"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Platform",         href: "/#lensos" },
  { label: "Architecture",     href: "/#architecture" },
  { label: "Channel Coverage", href: "/taxonomy" },
  { label: "Methodology",      href: "/#how-it-works" },
  { label: "Blog",             href: "/blog" },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(6,6,15,0.90)" : "transparent",
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
          <Link href="/" className="flex items-center gap-2.5 group" style={{ textDecoration: "none" }}>
            <svg width="32" height="32" viewBox="0 0 260 260" fill="none" aria-hidden="true" className="flex-shrink-0">
              <rect x="18" y="18" width="224" height="224" rx="34" ry="34"
                fill="rgba(124,58,237,0.08)" stroke="#7C3AED" strokeWidth="8"/>
              <path stroke="#E8EEFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"
                d="M 72 170 L 72 88 L 118 120 L 146 102"/>
              <path stroke="#E8EEFF" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"
                d="M 146 102 L 146 174 L 188 206"/>
              <path stroke="#7C3AED" strokeWidth="10" strokeLinecap="round" strokeLinejoin="round" fill="none"
                d="M 193 82 L 193 168 L 219 194"/>
              <line stroke="#A78BFA" strokeWidth="9" strokeLinecap="round"
                x1="58" y1="178" x2="103" y2="154"/>
              <circle fill="#A78BFA" cx="54" cy="180" r="15"/>
              <circle fill="#A78BFA" cx="108" cy="151" r="15"/>
            </svg>
            <span className="font-bold text-base tracking-tight" style={{ color: "#E8EEFF" }}>
              Measure<span style={{ color: "#A78BFA" }}>Lens</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="text-sm font-medium transition-colors duration-150"
                style={{ color: "#8892B4", textDecoration: "none" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#E8EEFF")}
                onMouseLeave={e => (e.currentTarget.style.color = "#8892B4")}
              >
                {l.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/contact"
              className="text-sm font-medium transition-colors duration-150"
              style={{ color: "#8892B4", textDecoration: "none" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8EEFF")}
              onMouseLeave={e => (e.currentTarget.style.color = "#8892B4")}
            >
              Contact
            </Link>
            <Link
              href="/#cta"
              className="text-sm font-medium transition-colors duration-150"
              style={{
                color: "#8892B4",
                textDecoration: "none",
                padding: "9px 14px",
                borderRadius: "8px",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={e => {
                (e.currentTarget as HTMLElement).style.color = "#E8EEFF";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.14)";
              }}
              onMouseLeave={e => {
                (e.currentTarget as HTMLElement).style.color = "#8892B4";
                (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.08)";
              }}
            >
              Request Access
            </Link>
            <a
              href="https://app.measurelens.com"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
              style={{ padding: "9px 18px", fontSize: "0.85rem", display: "inline-flex", alignItems: "center", gap: 6 }}
            >
              Try LensOS
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
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
              <Link
                key={l.label}
                href={l.href}
                className="block px-3 py-2.5 rounded-lg text-sm font-medium"
                style={{ color: "#8892B4", textDecoration: "none" }}
                onClick={() => setMenuOpen(false)}
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/contact"
              className="block px-3 py-2.5 rounded-lg text-sm font-medium"
              style={{ color: "#8892B4", textDecoration: "none" }}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </Link>
            <div className="pt-3 px-3 flex flex-col gap-2">
              <a
                href="https://app.measurelens.com"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary w-full justify-center"
                onClick={() => setMenuOpen(false)}
                style={{ display: "flex", alignItems: "center", gap: 6 }}
              >
                Try LensOS
                <svg width="13" height="13" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <Link
                href="/#cta"
                className="w-full text-center text-sm font-medium py-2 rounded-lg"
                style={{ color: "#8892B4", textDecoration: "none", border: "1px solid rgba(255,255,255,0.08)" }}
                onClick={() => setMenuOpen(false)}
              >
                Request Access
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
