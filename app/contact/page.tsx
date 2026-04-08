import type { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Contact — MeasureLens",
  description: "Start a conversation with the MeasureLens team.",
};

export default function ContactPage() {
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
            <h1
              style={{
                fontSize: 56,
                fontWeight: 700,
                color: "#E8EEFF",
                marginBottom: 24,
                lineHeight: 1.2,
              }}
            >
              Let's talk.
            </h1>
            <p
              style={{
                fontSize: 18,
                color: "#A78BFA",
                lineHeight: 1.6,
              }}
            >
              We are a small team building something we believe in. If the measurement problems we describe resonate with your work, we want to hear from you.
            </p>
          </div>
        </div>

        {/* Email Card */}
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
                backgroundColor: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.05)",
                borderRadius: 8,
                padding: 32,
                marginBottom: 64,
              }}
            >
              <p style={{ color: "#6B7CB0", fontSize: 14, marginBottom: 16 }}>
                Email us directly
              </p>
              <a
                href="mailto:hello@measurelens.com"
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  textDecoration: "none",
                  display: "block",
                  marginBottom: 12,
                }}
              >
                hello@measurelens.com
              </a>
              <p style={{ color: "#6B7CB0", fontSize: 14 }}>
                Click to copy or write directly
              </p>
            </div>

            {/* Three Reasons */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
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
                  You want to shape the product
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  We are actively having conversations with marketing leaders to understand what matters most.
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
                  You want early access
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  If you are running performance marketing at scale and want to be in the first cohort, reach out.
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
                  You have a measurement problem
                </h3>
                <p style={{ color: "#6B7CB0", fontSize: 14, lineHeight: 1.6 }}>
                  Not every problem is an early-access pitch. Sometimes a conversation is just useful.
                </p>
              </div>
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
