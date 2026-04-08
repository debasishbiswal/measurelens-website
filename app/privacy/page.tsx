import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Privacy Policy — MeasureLens",
  description: "Privacy policy for MeasureLens.",
};

export default function PrivacyPage() {
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
              Privacy Policy
            </h1>
            <p
              style={{
                fontSize: 14,
                color: "#6B7CB0",
              }}
            >
              Effective: April 2026
            </p>
          </div>
        </div>

        {/* Content */}
        <div
          style={{
            paddingTop: 64,
            paddingBottom: 64,
            paddingLeft: 32,
            paddingRight: 32,
          }}
        >
          <div style={{ maxWidth: 720, margin: "0 auto" }}>
            {/* Intro */}
            <div style={{ marginBottom: 48 }}>
              <p
                style={{
                  fontSize: 16,
                  color: "#E8EEFF",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                MeasureLens takes data privacy seriously. This policy describes how we collect and use information.
              </p>
            </div>

            {/* What We Collect */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                What we collect
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                }}
              >
                We collect your email address when you join our waitlist. We do not collect financial information, payment details, or other personal data unless you provide them directly.
              </p>
            </div>

            {/* How We Use It */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                How we use it
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                }}
              >
                We use your email address to send product updates, feature announcements, and communications about early access opportunities. We will not use your information for marketing beyond these purposes without your consent.
              </p>
            </div>

            {/* Third Parties */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                Third parties
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                }}
              >
                We do not sell, trade, or share your personal information with third parties. We use service providers only as needed to deliver our service, and they are bound by confidentiality agreements.
              </p>
            </div>

            {/* Contact */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                Questions or concerns
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                If you have any questions about this privacy policy, please reach out to us.
              </p>
              <a
                href="mailto:hello@measurelens.com"
                style={{
                  color: "#7C3AED",
                  textDecoration: "none",
                  fontSize: 16,
                  fontWeight: 600,
                }}
              >
                hello@measurelens.com
              </a>
            </div>

            {/* Back Link */}
            <div style={{ marginTop: 64, paddingTop: 32, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              <Link
                href="/#cta"
                style={{
                  color: "#7C3AED",
                  textDecoration: "none",
                  fontSize: 14,
                  fontWeight: 600,
                  display: "inline-block",
                  marginTop: 16,
                }}
              >
                Back to home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
