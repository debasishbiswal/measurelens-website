"use client";

import { useState } from "react";
import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

/* ── Design tokens (match globals.css) ── */
const C = {
  bg:       "#06060F",
  bg2:      "#0C0C1E",
  bg3:      "#10102A",
  violet:   "#7C3AED",
  violetLt: "#A78BFA",
  indigo:   "#4F46E5",
  text:     "#E8EEFF",
  muted:    "#6B7CB0",
  line:     "#1C1C3A",
};

/* ── Full 485-node LensOS Channel Taxonomy v1.0 ── */
const TAXONOMY = [
  {
    id: "L1-001", name: "Paid Media", icon: "💸", color: "#7C3AED",
    l2Count: 10, l3Count: 102,
    tagline: "Every major paid channel — search, social, display, CTV, retail media and more",
    channels: [
      { id: "L2-001", name: "Paid Search", funnel: ["Consideration", "Conversion"], surface: ["Digital"], l3: 11 },
      { id: "L2-002", name: "Paid Social", funnel: ["Awareness", "Consideration", "Conversion", "Retention"], surface: ["Digital"], l3: 13 },
      { id: "L2-003", name: "Display & Programmatic", funnel: ["Awareness", "Consideration", "Retention"], surface: ["Digital"], l3: 11 },
      { id: "L2-004", name: "Connected TV (CTV) / OTT", funnel: ["Awareness", "Consideration"], surface: ["Digital"], l3: 15 },
      { id: "L2-005", name: "Digital Audio Advertising", funnel: ["Awareness", "Consideration"], surface: ["Digital"], l3: 8 },
      { id: "L2-006", name: "Native Advertising", funnel: ["Awareness", "Consideration"], surface: ["Digital"], l3: 6 },
      { id: "L2-007", name: "In-App & Mobile Advertising", funnel: ["Awareness", "Consideration", "Conversion"], surface: ["Digital"], l3: 7 },
      { id: "L2-008", name: "Retail Media Networks", funnel: ["Consideration", "Conversion"], surface: ["Digital"], l3: 18 },
      { id: "L2-009", name: "Digital Out-of-Home (DOOH)", funnel: ["Awareness"], surface: ["Digital", "Physical"], l3: 6 },
      { id: "L2-010", name: "Gaming & In-Game Advertising", funnel: ["Awareness", "Consideration"], surface: ["Digital", "Emerging"], l3: 7 },
    ],
  },
  {
    id: "L1-002", name: "Traditional Media", icon: "📺", color: "#4F46E5",
    l2Count: 6, l3Count: 33,
    tagline: "TV, radio, print, OOH, direct mail — measured alongside digital",
    channels: [
      { id: "L2-011", name: "Broadcast Television", funnel: ["Awareness"], surface: ["Traditional"], l3: 6 },
      { id: "L2-012", name: "Radio", funnel: ["Awareness"], surface: ["Traditional"], l3: 4 },
      { id: "L2-013", name: "Print Advertising", funnel: ["Awareness", "Consideration"], surface: ["Traditional"], l3: 6 },
      { id: "L2-014", name: "Out-of-Home (OOH)", funnel: ["Awareness"], surface: ["Traditional", "Physical"], l3: 8 },
      { id: "L2-015", name: "Direct Mail", funnel: ["Awareness", "Consideration", "Conversion"], surface: ["Traditional", "Physical"], l3: 6 },
      { id: "L2-016", name: "Telemarketing & Outbound", funnel: ["Consideration", "Conversion"], surface: ["Traditional", "Offline"], l3: 3 },
    ],
  },
  {
    id: "L1-003", name: "Owned Channels", icon: "🏠", color: "#059669",
    l2Count: 7, l3Count: 31,
    tagline: "Email, SMS, push, website, app, loyalty — the channels you control",
    channels: [
      { id: "L2-017", name: "Email Marketing", funnel: ["Consideration", "Conversion", "Retention", "Advocacy"], surface: ["Owned"], l3: 7 },
      { id: "L2-018", name: "SMS / MMS Marketing", funnel: ["Conversion", "Retention"], surface: ["Owned"], l3: 4 },
      { id: "L2-019", name: "Push Notifications", funnel: ["Retention", "Conversion"], surface: ["Owned"], l3: 3 },
      { id: "L2-020", name: "Website & Landing Pages", funnel: ["Consideration", "Conversion"], surface: ["Owned"], l3: 7 },
      { id: "L2-021", name: "Branded App", funnel: ["Retention", "Advocacy"], surface: ["Owned"], l3: 3 },
      { id: "L2-022", name: "Loyalty & CRM Programs", funnel: ["Retention", "Advocacy"], surface: ["Owned"], l3: 4 },
      { id: "L2-023", name: "QR Code Marketing", funnel: ["Consideration", "Conversion"], surface: ["Owned", "Physical"], l3: 3 },
    ],
  },
  {
    id: "L1-004", name: "Earned & Organic", icon: "🌱", color: "#D97706",
    l2Count: 6, l3Count: 35,
    tagline: "SEO, PR, organic social, reviews, community — signals money cannot buy",
    channels: [
      { id: "L2-024", name: "SEO / Organic Search", funnel: ["Awareness", "Consideration"], surface: ["Digital"], l3: 5 },
      { id: "L2-025", name: "Public Relations (PR) & Earned Media", funnel: ["Awareness", "Consideration"], surface: ["Traditional", "Digital"], l3: 5 },
      { id: "L2-026", name: "Organic Social", funnel: ["Awareness", "Consideration", "Retention"], surface: ["Digital"], l3: 9 },
      { id: "L2-027", name: "Reviews & Reputation", funnel: ["Consideration", "Advocacy"], surface: ["Digital"], l3: 7 },
      { id: "L2-028", name: "Word of Mouth & Referral (Organic)", funnel: ["Awareness", "Advocacy"], surface: ["Offline", "Digital"], l3: 3 },
      { id: "L2-029", name: "Community & Forums", funnel: ["Awareness", "Consideration", "Retention"], surface: ["Digital"], l3: 6 },
    ],
  },
  {
    id: "L1-005", name: "Partner & Performance Marketing", icon: "🤝", color: "#DB2777",
    l2Count: 6, l3Count: 35,
    tagline: "Affiliate, influencer, referral, sponsorships — the performance layer",
    channels: [
      { id: "L2-030", name: "Affiliate Marketing", funnel: ["Consideration", "Conversion"], surface: ["Digital"], l3: 9 },
      { id: "L2-031", name: "Influencer Marketing", funnel: ["Awareness", "Consideration"], surface: ["Digital"], l3: 9 },
      { id: "L2-032", name: "Referral Programs", funnel: ["Acquisition", "Advocacy"], surface: ["Digital", "Owned"], l3: 3 },
      { id: "L2-033", name: "Co-Marketing & Brand Partnerships", funnel: ["Awareness", "Consideration"], surface: ["Digital", "Offline"], l3: 4 },
      { id: "L2-034", name: "Sponsorships", funnel: ["Awareness"], surface: ["Offline", "Digital"], l3: 6 },
      { id: "L2-035", name: "Channel Sales & Reseller Marketing", funnel: ["Consideration", "Conversion"], surface: ["Offline", "Digital"], l3: 4 },
    ],
  },
  {
    id: "L1-006", name: "Offline & Field Marketing", icon: "🎪", color: "#0891B2",
    l2Count: 5, l3Count: 21,
    tagline: "Events, experiential, in-store, field sales — the physical touchpoints",
    channels: [
      { id: "L2-036", name: "Events & Conferences", funnel: ["Awareness", "Consideration", "Conversion"], surface: ["Offline"], l3: 6 },
      { id: "L2-037", name: "Experiential & Guerrilla Marketing", funnel: ["Awareness"], surface: ["Offline"], l3: 4 },
      { id: "L2-038", name: "In-Store & Point-of-Sale Marketing", funnel: ["Consideration", "Conversion"], surface: ["Physical", "Offline"], l3: 5 },
      { id: "L2-039", name: "Field Sales & Door-to-Door", funnel: ["Conversion"], surface: ["Offline"], l3: 3 },
      { id: "L2-040", name: "Cause & CSR Marketing", funnel: ["Awareness", "Advocacy"], surface: ["Offline", "Digital"], l3: 3 },
    ],
  },
  {
    id: "L1-007", name: "Emerging & Next-Gen Channels", icon: "🚀", color: "#7C3AED",
    l2Count: 7, l3Count: 28,
    tagline: "AI search ads, social commerce, AR, metaverse, voice — built for what is next",
    channels: [
      { id: "L2-041", name: "AI-Powered Advertising & Conversational Surfaces", funnel: ["Awareness", "Consideration"], surface: ["Emerging", "Digital"], l3: 7 },
      { id: "L2-042", name: "Shoppable Video & Social Commerce", funnel: ["Consideration", "Conversion"], surface: ["Emerging", "Digital"], l3: 6 },
      { id: "L2-043", name: "Augmented Reality (AR) Advertising", funnel: ["Awareness", "Consideration"], surface: ["Emerging"], l3: 4 },
      { id: "L2-044", name: "Metaverse / Virtual World Marketing", funnel: ["Awareness"], surface: ["Emerging"], l3: 4 },
      { id: "L2-045", name: "Voice & Smart Speaker Marketing", funnel: ["Awareness", "Consideration"], surface: ["Emerging"], l3: 3 },
      { id: "L2-046", name: "NFT / Web3 & Blockchain Marketing", funnel: ["Awareness", "Advocacy"], surface: ["Emerging"], l3: 2 },
      { id: "L2-047", name: "Wearables & IoT Advertising", funnel: ["Awareness"], surface: ["Emerging"], l3: 2 },
    ],
  },
  {
    id: "L1-008", name: "B2B Demand Generation", icon: "🏢", color: "#4F46E5",
    l2Count: 3, l3Count: 15,
    tagline: "ABM, SDR programs, content syndication — built for complex sales cycles",
    channels: [
      { id: "L2-048", name: "Account-Based Marketing (ABM)", funnel: ["Awareness", "Consideration", "Conversion"], surface: ["Digital"], l3: 7 },
      { id: "L2-049", name: "Sales Outreach / SDR Programs", funnel: ["Consideration", "Conversion"], surface: ["Digital", "Offline"], l3: 4 },
      { id: "L2-050", name: "Content Syndication & Review Platforms", funnel: ["Awareness", "Consideration"], surface: ["Digital"], l3: 4 },
    ],
  },
];

const FUNNEL_STAGES = [
  { name: "Awareness",     color: "#A78BFA", desc: "Top-of-funnel visibility channels" },
  { name: "Consideration", color: "#60A5FA", desc: "Research & evaluation touchpoints" },
  { name: "Conversion",    color: "#34D399", desc: "Direct purchase & sign-up drivers" },
  { name: "Retention",     color: "#FCD34D", desc: "Re-engagement & loyalty channels" },
  { name: "Advocacy",      color: "#F97316", desc: "Referral & word-of-mouth amplifiers" },
  { name: "Acquisition",   color: "#F87171", desc: "Growth & new user acquisition" },
];

const WHY_CARDS = [
  { icon: "🗂️", title: "Four levels deep", body: "L1 to L2 to L3 to L4. Every node knows its parent — lineage-aware findings tell you not just what you are missing but where in your funnel it hurts." },
  { icon: "🎯", title: "Funnel stage on every node", body: "Each channel is tagged with the funnel stages it serves. Awareness channels score differently from Conversion channels — your audit reflects that weighting." },
  { icon: "📡", title: "Delivery surface scoring", body: "Digital channels are measurable with pixels. Traditional and Offline channels are not. The taxonomy encodes that reality so your score is calibrated against what is actually trackable." },
  { icon: "🏭", title: "Industry overlays", body: "Retail media for e-commerce, compliance channels for financial services, prescription tracking for healthcare. Industry context on top of the universal hierarchy." },
  { icon: "🔮", title: "Built for what is next", body: "AI search ads, TikTok Shop, AR filters, metaverse placements — the Emerging channel family is first-class, not an afterthought." },
  { icon: "🔗", title: "Machine-readable by design", body: "Every node has a stable ID. Audit findings reference taxonomy IDs directly, enabling coverage dashboards and auto-generated media plans." },
];

/* ── Sub-components ── */
function FunnelBadge({ stage }: { stage: string }) {
  const colorMap: Record<string, string> = {
    Awareness: "#A78BFA", Consideration: "#60A5FA", Conversion: "#34D399",
    Retention: "#FCD34D", Advocacy: "#F97316", Acquisition: "#F87171",
  };
  const color = colorMap[stage] || C.muted;
  return (
    <span style={{
      fontSize: 11, fontWeight: 600, color,
      background: color + "18", border: "1px solid " + color + "40",
      borderRadius: 4, padding: "2px 7px",
    }}>{stage}</span>
  );
}

function SurfaceBadge({ surface }: { surface: string }) {
  const colorMap: Record<string, string> = {
    Digital: "#60A5FA", Owned: "#34D399", Traditional: "#FCD34D",
    Emerging: "#A78BFA", Physical: "#F97316", Offline: "#94A3B8",
  };
  const color = colorMap[surface] || C.muted;
  return (
    <span style={{
      fontSize: 10, fontWeight: 500, color,
      background: color + "15", border: "1px solid " + color + "30",
      borderRadius: 4, padding: "1px 6px",
    }}>{surface}</span>
  );
}

/* ── Page ── */
export default function TaxonomyPage() {
  const [expanded, setExpanded] = useState<string | null>("L1-001");

  return (
    <div style={{ background: C.bg, minHeight: "100vh", fontFamily: "Inter, system-ui, sans-serif", color: C.text }}>

      {/* Marketing site Navbar */}
      <Navbar />

      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "100px 32px 48px" }}>

        {/* ── Hero ── */}
        <div style={{ textAlign: "center", marginBottom: 64 }}>
          <div style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            background: C.violet + "20", border: "1px solid " + C.violet + "40",
            borderRadius: 20, padding: "6px 16px", marginBottom: 24,
          }}>
            <span style={{ fontSize: 13, color: C.violetLt, fontWeight: 600 }}>LensOS Channel Taxonomy v1.0</span>
          </div>

          <h1 style={{ fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 800, lineHeight: 1.1, margin: "0 0 24px" }}>
            The most complete<br />
            <span style={{ color: C.violetLt }}>marketing channel taxonomy</span><br />
            ever built
          </h1>

          <p style={{ fontSize: 18, color: C.muted, maxWidth: 680, margin: "0 auto 40px", lineHeight: 1.7 }}>
            485 nodes across 8 channel families, 50 sub-categories, and 300+ platforms.
            Built so LensOS can tell you not just what you are missing — but exactly where
            in your funnel the gap hurts.
          </p>

          <div style={{ display: "flex", gap: 20, justifyContent: "center", flexWrap: "wrap" }}>
            {[
              { value: "8",    label: "Channel Families (L1)" },
              { value: "50",   label: "Sub-Categories (L2)" },
              { value: "300+", label: "Platforms (L3)" },
              { value: "57",   label: "Detailed Tactics (L4)" },
              { value: "485",  label: "Total Nodes" },
              { value: "5",    label: "Funnel Stages Mapped" },
            ].map((s) => (
              <div key={s.label} style={{
                background: C.bg2, border: "1px solid " + C.line, borderRadius: 12,
                padding: "20px 28px", textAlign: "center", minWidth: 120,
              }}>
                <div style={{ fontSize: 30, fontWeight: 800, color: C.violetLt }}>{s.value}</div>
                <div style={{ fontSize: 11, color: C.muted, marginTop: 4, fontWeight: 500 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Why it's different ── */}
        <div style={{
          background: "linear-gradient(135deg, " + C.bg2 + ", " + C.bg3 + ")",
          border: "1px solid " + C.violet + "30",
          borderRadius: 20, padding: "48px 48px", marginBottom: 64,
        }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 8 }}>Why this taxonomy is different</h2>
          <p style={{ color: C.muted, fontSize: 15, marginBottom: 36, lineHeight: 1.6 }}>
            Most measurement frameworks treat channels as a flat list. LensOS treats them as a structured intelligence layer.
          </p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {WHY_CARDS.map((card) => (
              <div key={card.title} style={{
                background: C.bg + "80", border: "1px solid " + C.line, borderRadius: 14, padding: "24px",
              }}>
                <div style={{ fontSize: 28, marginBottom: 12 }}>{card.icon}</div>
                <div style={{ fontWeight: 700, fontSize: 16, marginBottom: 8 }}>{card.title}</div>
                <div style={{ fontSize: 14, color: C.muted, lineHeight: 1.65 }}>{card.body}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Funnel stage legend ── */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Funnel stage coverage</h2>
          <p style={{ color: C.muted, fontSize: 14, marginBottom: 28 }}>
            Every channel family maps to one or more funnel stages. LensOS weights your score by stage.
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 12 }}>
            {FUNNEL_STAGES.map((s) => (
              <div key={s.name} style={{
                background: C.bg2, border: "1px solid " + s.color + "40",
                borderRadius: 12, padding: "16px 22px",
                display: "flex", alignItems: "center", gap: 12,
              }}>
                <div style={{ width: 10, height: 10, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                <div>
                  <div style={{ fontWeight: 700, fontSize: 14, color: s.color }}>{s.name}</div>
                  <div style={{ fontSize: 12, color: C.muted, marginTop: 2 }}>{s.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Full hierarchy accordion ── */}
        <div style={{ marginBottom: 64 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, marginBottom: 8 }}>Full channel hierarchy</h2>
          <p style={{ color: C.muted, fontSize: 14, marginBottom: 28 }}>
            Click any channel family to explore its sub-categories with funnel stages and delivery surface.
          </p>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {TAXONOMY.map((l1) => {
              const isOpen = expanded === l1.id;
              return (
                <div key={l1.id} style={{
                  background: C.bg2,
                  border: "1px solid " + (isOpen ? l1.color + "60" : C.line),
                  borderRadius: 14, overflow: "hidden",
                  transition: "border-color 0.2s ease",
                }}>
                  <button
                    onClick={() => setExpanded(isOpen ? null : l1.id)}
                    style={{
                      width: "100%", background: "none", border: "none", cursor: "pointer",
                      padding: "20px 24px", display: "flex", alignItems: "center", gap: 16,
                      textAlign: "left",
                    }}
                  >
                    <span style={{ fontSize: 26, flexShrink: 0 }}>{l1.icon}</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                        <span style={{
                          fontSize: 11, fontWeight: 700, color: l1.color,
                          background: l1.color + "20", borderRadius: 4, padding: "2px 7px",
                        }}>{l1.id}</span>
                        <span style={{ fontSize: 17, fontWeight: 700, color: C.text }}>{l1.name}</span>
                      </div>
                      <span style={{ fontSize: 13, color: C.muted }}>{l1.tagline}</span>
                    </div>
                    <div style={{ display: "flex", gap: 20, alignItems: "center", flexShrink: 0 }}>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 18, fontWeight: 800, color: l1.color }}>{l1.l2Count}</div>
                        <div style={{ fontSize: 10, color: C.muted }}>Sub-cats</div>
                      </div>
                      <div style={{ textAlign: "center" }}>
                        <div style={{ fontSize: 18, fontWeight: 800, color: C.violetLt }}>{l1.l3Count}</div>
                        <div style={{ fontSize: 10, color: C.muted }}>Platforms</div>
                      </div>
                      <svg
                        width="16" height="16" viewBox="0 0 16 16" fill="none"
                        style={{
                          color: C.muted,
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      >
                        <path d="M3 6l5 5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </button>

                  {isOpen && (
                    <div style={{ borderTop: "1px solid " + C.line, padding: "8px 24px 20px" }}>
                      <div style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
                        gap: 10, marginTop: 12,
                      }}>
                        {l1.channels.map((l2) => (
                          <div key={l2.id} style={{
                            background: C.bg3 + "80", border: "1px solid " + C.line,
                            borderRadius: 10, padding: "14px 16px",
                          }}>
                            <div style={{
                              display: "flex", alignItems: "flex-start",
                              justifyContent: "space-between", gap: 8, marginBottom: 8,
                            }}>
                              <div>
                                <span style={{ fontSize: 10, color: C.muted, fontWeight: 600, marginRight: 6 }}>{l2.id}</span>
                                <span style={{ fontSize: 14, fontWeight: 600, color: C.text }}>{l2.name}</span>
                              </div>
                              <span style={{
                                fontSize: 11, color: C.violetLt, background: C.violet + "20",
                                borderRadius: 4, padding: "2px 7px", flexShrink: 0, fontWeight: 600,
                              }}>{l2.l3} channels</span>
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 4, marginBottom: 6 }}>
                              {l2.funnel.map((f) => <FunnelBadge key={f} stage={f} />)}
                            </div>
                            <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                              {l2.surface.map((sv) => <SurfaceBadge key={sv} surface={sv} />)}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{
          background: "linear-gradient(135deg, " + C.violet + "20, " + C.indigo + "15)",
          border: "1px solid " + C.violet + "40",
          borderRadius: 20, padding: "56px", textAlign: "center",
        }}>
          <h2 style={{ fontSize: 32, fontWeight: 800, marginBottom: 12 }}>
            See how your stack maps to this taxonomy
          </h2>
          <p style={{ color: C.muted, fontSize: 16, maxWidth: 520, margin: "0 auto 32px" }}>
            LensOS scans your site in seconds and maps every detected tracker to its exact
            taxonomy position — revealing which funnel stages have blind spots and where
            your measurement has gaps.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <a
              href="https://app.measurelens.com"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                background: C.violet, color: "white", padding: "16px 40px",
                borderRadius: 12, fontSize: 16, fontWeight: 700, textDecoration: "none",
              }}
            >
              Open LensOS
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <Link
              href="/#cta"
              style={{
                display: "inline-flex", alignItems: "center",
                color: C.violetLt, padding: "16px 32px",
                border: "1px solid " + C.violet + "50",
                borderRadius: 12, fontSize: 15, fontWeight: 600, textDecoration: "none",
              }}
            >
              Request Access
            </Link>
          </div>
        </div>

      </div>

      <Footer />
    </div>
  );
}
