import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lens: {
          bg:      "#06060F",
          surface: "#0C0C1E",
          card:    "#10102A",
          border:  "rgba(255,255,255,0.07)",
          purple:  "#7C3AED",
          indigo:  "#4F46E5",
          violet:  "#8B5CF6",
          muted:   "#6B7CB0",
          text:    "#E8EEFF",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "-apple-system", "sans-serif"],
        mono: ["JetBrains Mono", "Fira Code", "monospace"],
      },
      backgroundImage: {
        "lens-gradient":    "linear-gradient(135deg, #7C3AED 0%, #4F46E5 100%)",
        "lens-gradient-r":  "linear-gradient(135deg, #4F46E5 0%, #7C3AED 100%)",
        "hero-grid":        "linear-gradient(rgba(124,58,237,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124,58,237,0.04) 1px, transparent 1px)",
        "glow-purple":      "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(124,58,237,0.15) 0%, transparent 70%)",
        "glow-indigo":      "radial-gradient(ellipse 60% 40% at 50% 0%, rgba(79,70,229,0.12) 0%, transparent 70%)",
      },
      backgroundSize: {
        grid: "40px 40px",
      },
      animation: {
        "fade-in":       "fadeIn 0.6s ease-out forwards",
        "fade-up":       "fadeUp 0.7s ease-out forwards",
        "fade-up-slow":  "fadeUp 1s ease-out forwards",
        "pulse-slow":    "pulse 4s cubic-bezier(0.4,0,0.6,1) infinite",
        "ping-slow":     "ping 2.5s cubic-bezier(0,0,0.2,1) infinite",
        "slide-right":   "slideRight 0.5s ease-out forwards",
        "glow-pulse":    "glowPulse 3s ease-in-out infinite",
        "float":         "float 6s ease-in-out infinite",
        "blink":         "blink 1.2s step-end infinite",
        "scan":          "scan 2.5s linear infinite",
        "reveal":        "reveal 0.8s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%":   { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeUp: {
          "0%":   { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%":   { opacity: "0", transform: "translateX(-16px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        glowPulse: {
          "0%, 100%": { opacity: "0.5", transform: "scale(1)" },
          "50%":      { opacity: "1",   transform: "scale(1.05)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%":      { transform: "translateY(-12px)" },
        },
        blink: {
          "0%, 100%": { opacity: "1" },
          "50%":      { opacity: "0" },
        },
        scan: {
          "0%":   { transform: "translateY(-100%)" },
          "100%": { transform: "translateY(400%)" },
        },
        reveal: {
          "0%":   { opacity: "0", clipPath: "inset(0 100% 0 0)" },
          "100%": { opacity: "1", clipPath: "inset(0 0% 0 0)" },
        },
      },
      boxShadow: {
        "glow-purple": "0 0 40px rgba(124,58,237,0.25)",
        "glow-sm":     "0 0 20px rgba(124,58,237,0.15)",
        "card":        "0 1px 1px rgba(0,0,0,0.3), 0 0 0 1px rgba(255,255,255,0.06)",
        "card-hover":  "0 4px 24px rgba(0,0,0,0.4), 0 0 0 1px rgba(124,58,237,0.2)",
      },
    },
  },
  plugins: [],
};

export default config;
