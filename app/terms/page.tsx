import type { Metadata } from "next";
import Link from "next/link";
import { PageWrapper } from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "Terms of Use — MeasureLens",
  description: "Terms of use for MeasureLens.",
};

export default function TermsPage() {
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
              Terms of Use
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
            {/* Use of Site */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                Use of site
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                }}
              >
                You agree to use this website only for lawful purposes and in a way that does not infringe upon the rights of others or restrict their use and enjoyment. Prohibited behavior includes harassing or causing distress or inconvenience to any person, transmitting obscene or offensive content, or disrupting the normal flow of dialogue within our website.
              </p>
            </div>

            {/* Intellectual Property */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                Intellectual property rights
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                }}
              >
                All content on this website, including text, graphics, logos, and images, is the property of MeasureLens or its content suppliers and is protected by international copyright laws. You may not reproduce, distribute, transmit, or display this content without our written permission.
              </p>
            </div>

            {/* No Warranties */}
            <div style={{ marginBottom: 48 }}>
              <h2
                style={{
                  fontSize: 24,
                  fontWeight: 600,
                  color: "#E8EEFF",
                  marginBottom: 16,
                }}
              >
                No warranties
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                }}
              >
                This website is provided on an "as-is" and "as-available" basis. MeasureLens makes no representations or warranties of any kind, express or implied, regarding the operation of this site or the information, content, or materials included on this site. To the fullest extent permissible by applicable law, MeasureLens disclaims all warranties, express and implied, including but not limited to implied warranties of merchantability and fitness for a particular purpose.
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
                Contact us
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "#A78BFA",
                  lineHeight: 1.8,
                  marginBottom: 16,
                }}
              >
                If you have any questions about these terms, please contact us.
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
