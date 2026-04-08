import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://measurelens.com"),
  title: "MeasureLens — Marketing Intelligence That Tells You What's Real",
  description:
    "MeasureLens reconciles conflicting attribution data across Meta, Google, GA4, and your models — producing a single confidence-scored truth with clear recommendations. Built for teams spending $10K–$500K/month on ads.",
  keywords: [
    "marketing measurement",
    "attribution reconciliation",
    "ROAS",
    "marketing mix modeling",
    "multi-touch attribution",
    "marketing analytics",
    "LensOS",
    "MeasureLens",
    "incrementality",
  ],
  alternates: {
    canonical: "https://measurelens.com",
  },
  openGraph: {
    title: "MeasureLens — Marketing Intelligence That Tells You What's Real",
    description:
      "Stop averaging conflicting ROAS numbers. MeasureLens triangulates every signal and delivers a single decision-ready truth.",
    type: "website",
    url: "https://measurelens.com",
    siteName: "MeasureLens",
  },
  twitter: {
    card: "summary_large_image",
    title: "MeasureLens — Marketing Intelligence That Tells You What's Real",
    description:
      "Stop averaging conflicting ROAS numbers. MeasureLens triangulates every signal and delivers a single decision-ready truth.",
  },
  robots: { index: true, follow: true },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  );
}
