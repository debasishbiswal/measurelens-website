import type { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Docs — MeasureLens",
  description:
    "MeasureLens documentation. Coming as the product develops.",
};

export default function DocsPage() {
  return (
    <PageWrapper>
      <div style={{ minHeight: "100vh", backgroundColor: "#06060F" }}>
        {/* Hero */}
        <div
          style={{
            paddingTop: 80,
            paddingBottom: 64,
            borderBottom: "1px solid rgba(255,255,255,0.05)",
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            <p
              style={{
                fontSize: 14,
                color: "#6B7CB0",
                marginBottom: 16,
                textTransform: "uppercase",
                letterSpacing: 1.5,
              }}
            >
              Documentation
            </p>
            <h1
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#E8EEFF",
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              Documentation is coming.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#A78BFA",
                lineHeight: 1.6,
              }}
            >
              We are in active development. Documentation will be published as we reach beta.
            </p>
          </div>
        </div>

        {/* Status Section */}
        <div
          style={{
            paddingTop: 64,
            paddingBottom: 64,
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {/* Upcoming Sections */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
                gap: 24,
                marginBottom: 64,
              }}
            >
              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#E8EEFF",
                    marginBottom: 12,
                  }}
                >
                  Getting started
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  How to set up and begin using MeasureLens.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#E8EEFF",
                    marginBottom: 12,
                  }}
                >
                  LensOS architecture
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  Deep dive into how the platform is designed.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#E8EEFF",
                    marginBottom: 12,
                  }}
                >
                  Data source integration
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  Connect your marketing data to MeasureLens.
                </p>
              </div>

              <div
                style={{
                  backgroundColor: "rgba(255,255,255,0.02)",
                  border: "1px solid rgba(255,255,255,0.05)",
                  borderRadius: 8,
                  padding: 24,
                }}
              >
                <h3
                  style={{
                    fontSize: 16,
                    fontWeight: 600,
                    color: "#E8EEFF",
                    marginBottom: 12,
                  }}
                >
                  Measurement Confidence Score
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  Understand how we calculate confidence in your data.
                </p>
              </div>
            </div>

            {/* Early Access Note */}
            <div
              style={{
                backgroundColor: "rgba(124, 58, 237, 0.08)",
                border: "1px solid rgba(124, 58, 237, 0.2)",
                borderRadius: 8,
                padding: 32,
                marginBottom: 64,
              }}
            >
              <h3
                style={{
                  fontSize: 16,
                  fontWeight: 600,
                  color: "#A78BFA",
                  marginBottom: 12,
                }}
              >
                Early access gets direct support
              </h3>
              <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                If you are in early access, you will receive documentation directly from the team along with personalized onboarding.
              </p>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center" }}>
              <Link
                href="/#cta"
                style={{
                  display: "inline-block",
                  padding: "12px 24px",
                  backgroundColor: "#7C3AED",
                  color: "#E8EEFF",
                  textDecoration: "none",
                  borderRadius: 6,
                  fontSize: 14,
                  fontWeight: 600,
                  transition: "opacity 0.2s",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.opacity = "0.8")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.opacity = "1")
                }
              >
                Join the waitlist
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
