// ─────────────────────────────────────────────────────────────
//  Post: lightweight-mmm-future
//  This post uses a custom dedicated page at
//  /app/blog/lightweight-mmm-future/page.tsx for Chart.js
//  visualizations. The body array here is kept minimal and is
//  not rendered by the generic [slug] renderer (the static
//  route takes precedence in Next.js routing).
// ─────────────────────────────────────────────────────────────

import type { BlogPost } from "../schema";

const post: BlogPost = {
  slug:        "lightweight-mmm-future",
  title:       "Your MMM Runs Twice a Year. Your Competitors' Runs Every Week. That's the Entire Problem.",
  excerpt:
    "Marketing Mix Modeling doesn't have a methodology problem — it has a cadence problem. The industry spent a decade building better models and forgot to ask how often they'd actually be used.",
  date:        "2026-04-10",
  category:    "MMM",
  readingTime: 12,
  seoTitle:
    "Lightweight MMM: Why Weekly Modeling Beats Quarterly | MeasureLens",
  metaDescription:
    "Traditional MMM runs twice a year. Lightweight Bayesian MMM runs every week. Here's why cadence — not methodology — is the defining advantage in modern marketing measurement.",
  body: [
    {
      type: "p",
      text: "This post includes interactive data visualizations. See the full article for charts on decision coverage, the always-on measurement loop, Bayesian credible intervals, and budget reallocation.",
    },
  ],
  cta: {
    heading: "LensOS runs always-on Bayesian MMM on your portfolio.",
    body:    "Weekly data refresh, monthly model retrain, calibrated with geo experiments. See how it works on your actual spend data.",
  },
};

export default post;
