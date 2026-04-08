import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Pricing — MeasureLens",
  description:
    "MeasureLens pricing information. We are in early development — early access conversations are free.",
};

export default function PricingPage() {
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
              Pricing
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
              We are not there yet. But here is the direction.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#A78BFA",
                lineHeight: 1.6,
              }}
            >
              MeasureLens is in early development. Pricing has not been finalized. What we can tell you is how we are thinking about it.
            </p>
          </div>
        </div>

        {/* Principles */}
        <div
          style={{
            paddingTop: 64,
            paddingBottom: 64,
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
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
                  Usage-based, not seat-based
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  You should not pay more because your team grows.
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
                  Calibrated to media spend
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  Pricing scales with the value you are measuring.
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
                  No black-box contracts
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  You should know what you are paying for.
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
                Early access is free
              </h3>
              <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                If you are in our early access cohort, your conversations with the team are free. We want to understand your problem well before we ask you to pay for a solution.
              </p>
            </div>

            {/* CTA */}
            <div style={{ textAlign: "center" }}>
              <Link
                href="/#cta"
                className="btn-primary link-hover-muted"
                style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}
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
