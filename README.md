# MeasureLens Website

Production-ready marketing site for MeasureLens — built with **Next.js 14 App Router** and **Tailwind CSS**.

## Quick start

```bash
cd measurelens-website
npm install
npm run dev
# → http://localhost:3000
```

## Project structure

```
measurelens-website/
├── app/
│   ├── layout.tsx          # Root layout, metadata, font imports
│   ├── page.tsx            # Page assembly — imports all sections in order
│   └── globals.css         # Design tokens, utility classes, animations
│
├── components/
│   ├── Navbar.tsx          # Fixed nav with scroll-blur effect + mobile menu
│   ├── Footer.tsx          # Four-column footer with LensOS badge
│   │
│   ├── ui/
│   │   └── useScrollReveal.tsx  # IntersectionObserver hook for scroll animations
│   │
│   └── sections/
│       ├── Hero.tsx             # Animated terminal showing live reconciliation
│       ├── WhyROASWrong.tsx     # Three structural reasons ROAS is wrong (hook)
│       ├── Problem.tsx          # Four platforms, four numbers — the concrete pain
│       ├── Solution.tsx         # Triangulation + evidence tier system
│       ├── LensOS.tsx           # Interactive 5-step agentic AI walkthrough
│       ├── HowItWorks.tsx       # 4-step onboarding flow with timing
│       ├── Output.tsx           # Per-channel table: true iROAS + recommendations
│       ├── Differentiation.tsx  # Feature matrix vs dashboards / MTA / MMM
│       ├── IdealCustomer.tsx    # Three buyer profiles + recognition checklist
│       └── CTA.tsx              # Email capture + secondary CTAs
│
├── package.json
├── next.config.mjs
├── tailwind.config.ts
├── postcss.config.mjs
└── tsconfig.json
```

## Section order (conversion logic)

| # | Section | Purpose |
|---|---------|---------|
| 1 | Hero | Immediate value prop + animated proof |
| 2 | Why ROAS Is Wrong | Hook — makes the problem visceral |
| 3 | Problem | Concrete four-number scenario |
| 4 | Solution | How triangulation works |
| 5 | LensOS | Core AI differentiator (interactive) |
| 6 | How It Works | Removes friction — shows it's fast |
| 7 | Output | Makes value tangible with real numbers |
| 8 | Differentiation | Handles "why not use what I have?" |
| 9 | Ideal Customer | Self-qualification — "this is me" |
| 10 | CTA | Email capture + access request |

## Design system

All design tokens live in `tailwind.config.ts` under `theme.extend.colors.lens` and in CSS variables inside `globals.css`.

| Token | Value | Use |
|-------|-------|-----|
| `lens-bg` | `#06060F` | Primary dark background |
| `lens-surface` | `#0C0C1E` | Alternating dark sections |
| `lens-card` | `#10102A` | Card backgrounds |
| `lens-purple` | `#7C3AED` | Primary accent |
| `lens-indigo` | `#4F46E5` | Secondary accent |
| `lens-muted` | `#6B7CB0` | Body text on dark |

Key utility classes (defined in `globals.css`):

- `.gradient-text` — purple → indigo → blue text gradient
- `.glass-card` — frosted glass card style
- `.glass-card-hover` — adds lift + glow on hover
- `.btn-primary` — gradient CTA button
- `.btn-ghost` — bordered ghost button
- `.section-light` — white section with dark text
- `.terminal` — monospace output panel style
- `.reveal-on-scroll` + `.in-view` — scroll animation pair
- `.reveal-delay-{1-5}` — staggered animation delays

## Scroll animations

The `useScrollReveal` hook attaches an `IntersectionObserver` to a section element.
Any child with `.reveal-on-scroll` fades up when it enters the viewport.
Add `.reveal-delay-{1–5}` for staggered timing within a group.

```tsx
const ref = useScrollReveal();
return (
  <section ref={ref as any}>
    <div className="reveal-on-scroll">First item</div>
    <div className="reveal-on-scroll reveal-delay-2">Second item</div>
  </section>
);
```

## Deploy to Vercel

```bash
npx vercel --prod
```

Or connect the repo in the Vercel dashboard — zero configuration required.

## Connecting to the MeasureLens API

The CTA form (`components/sections/CTA.tsx`) currently uses local state.
To wire it to a real waitlist endpoint, replace the `handleSubmit` function:

```tsx
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  await fetch("/api/waitlist", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email }),
  });
  setSubmitted(true);
};
```

Then add `app/api/waitlist/route.ts` pointing to your backend or a tool like Resend / Loops.
