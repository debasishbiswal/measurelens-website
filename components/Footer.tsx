"use client";

export default function Footer() {
  const year = new Date().getFullYear();

  const links = {
    Product:  ["How it works", "LensOS", "Pricing", "Changelog"],
    Company:  ["About", "Blog", "Careers", "Contact"],
    Resources:["Docs", "API Reference", "Status", "Security"],
    Legal:    ["Privacy", "Terms", "Cookie Policy"],
  };

  return (
    <footer
      style={{ background: "#04040D", borderTop: "1px solid rgba(255,255,255,0.05)" }}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        {/* Top row */}
        <div className="grid md:grid-cols-5 gap-10 mb-14">

          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2.5 mb-4">
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
            </div>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#6B7CB0", maxWidth: 280 }}>
              Marketing measurement intelligence that tells you what's real — not what
              each platform wants you to believe.
            </p>
            <div className="flex items-center gap-2">
              <span
                className="w-2 h-2 rounded-full animate-pulse"
                style={{ background: "#34D399" }}
              />
              <span className="text-xs font-mono" style={{ color: "#34D399" }}>
                Early Access Open
              </span>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(links).map(([group, items]) => (
            <div key={group}>
              <p
                className="text-xs font-bold uppercase tracking-wider mb-4"
                style={{ color: "#4B5563" }}
              >
                {group}
              </p>
              <ul className="space-y-2.5">
                {items.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="text-sm transition-colors duration-150"
                      style={{ color: "#6B7CB0" }}
                      onMouseEnter={(e) => (e.currentTarget.style.color = "#C4CAEE")}
                      onMouseLeave={(e) => (e.currentTarget.style.color = "#6B7CB0")}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="divider-glow mb-8" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs" style={{ color: "#4B5563" }}>
            © {year} MeasureLens, Inc. All rights reserved.
          </p>

          {/* LensOS badge */}
          <div
            className="flex items-center gap-2 px-3 py-1.5 rounded-lg"
            style={{ background: "rgba(124,58,237,0.07)", border: "1px solid rgba(124,58,237,0.15)" }}
          >
            <svg width="12" height="12" viewBox="0 0 14 14" fill="none">
              <path d="M7 1L13 4.5V9.5L7 13L1 9.5V4.5L7 1Z" stroke="#A78BFA" strokeWidth="1.2" fill="none"/>
              <circle cx="7" cy="7" r="2" fill="#A78BFA"/>
            </svg>
            <span className="text-xs font-mono font-medium" style={{ color: "#A78BFA" }}>
              Powered by LensOS
            </span>
          </div>

          {/* Socials */}
          <div className="flex items-center gap-4">
            {[
              {
                label: "Twitter / X",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                ),
              },
              {
                label: "LinkedIn",
                icon: (
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
                    <circle cx="4" cy="4" r="2"/>
                  </svg>
                ),
              },
            ].map((s) => (
              <a
                key={s.label}
                href="#"
                aria-label={s.label}
                className="transition-colors duration-150"
                style={{ color: "#4B5563" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#A78BFA")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "#4B5563")}
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
