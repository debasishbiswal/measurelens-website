import type { Metadata } from "next";
import Link from "next/link";
import PageWrapper from "@/components/PageWrapper";

export const metadata: Metadata = {
  title: "About — MeasureLens",
  description:
    "MeasureLens is being built for marketing leaders who are tired of staring at conflicting numbers and not knowing which one to trust.",
};

export default function AboutPage() {
  return (
    <PageWrapper>
      {/* Hero */}
      <section
        style={{
          paddingTop: "80px",
          paddingBottom: "72px",
          borderBottom: "1px solid rgba(255,255,255,0.05)",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <div
          className="glow-orb"
          style={{
            width: 500,
            height: 400,
            top: "-120px",
            left: "50%",
            transform: "translateX(-30%)",
            background: "radial-gradient(ellipse, rgba(124,58,237,0.12) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-4xl mx-auto px-6 lg:px-8 relative">
          <div className="section-tag">About</div>
          <h1
            className="text-5xl sm:text-6xl font-bold tracking-tight mb-6"
            style={{ color: "#E8EEFF", lineHeight: 1.08 }}
          >
            Built because the{" "}
            <span className="gradient-text">problem is real</span>
          </h1>
          <p className="text-xl max-w-2xl leading-relaxed" style={{ color: "#6B7CB0" }}>
            Every serious marketing team faces the same measurement gap.
            They just do not always talk about it out loud.
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="max-w-3xl mx-auto px-6 lg:px-8 py-20">
        <div
          className="space-y-8 text-lg leading-relaxed"
          style={{ color: "#8892B4" }}
        >
          <p>
            If you run performance marketing at any meaningful scale, you have been
            in this meeting. Quarterly business review. Finance wants to know
            which channels are working. You pull ROAS from Meta. You pull ROAS from
            Google. You look at GA4. Maybe you have an MMM sitting somewhere.
            Every number is different. None of them agree.
          </p>

          <p>
            So you do what everyone does. You pick the number that feels most defensible,
            you frame it carefully, and you move on. The decision gets made. The budget
            gets set. And somewhere in the back of your mind, you wonder how much of what
            you just reported is actually true.
          </p>

          <p>
            This is not a data problem. You have more data than any marketing team
            in history. It is a measurement reasoning problem. The platforms that produce
            your ROAS numbers have a commercial interest in those numbers looking strong.
            Their attribution models were designed by teams whose job is to demonstrate
            channel value. That conflict of interest is structural, and it does not go away
            no matter how carefully you instrument your stack.
          </p>

          <p>
            The result is that marketing leaders are making large, consequential budget
            decisions based on data that systematically overstates channel performance.
            A reasonable estimate is that most paid media programs, when properly
            measured with incremental holdout tests, show true causal ROAS that runs
            40 to 80 percent below what the platforms report. At $100K per month in
            media spend, that gap translates to a meaningful amount of misallocated
            capital every single quarter.
          </p>

          <div
            style={{
              borderLeft: "3px solid #7C3AED",
              paddingLeft: "1.5rem",
              margin: "2.5rem 0",
            }}
          >
            <p
              style={{
                color: "#C4CAEE",
                fontStyle: "italic",
                fontWeight: 500,
                lineHeight: 1.65,
              }}
            >
              The problem is not that teams lack data. It is that they lack
              a principled way to weigh competing evidence and arrive at a
              number they can actually trust.
            </p>
          </div>

          <p>
            We built MeasureLens because we have lived on both sides of this problem.
            We have been the people staring at conflicting dashboards, trying to
            construct a coherent story for leadership. We have watched teams
            over-invest in channels that were capturing, not creating, demand.
            We have seen the downstream damage that bad measurement causes when it
            compounds over multiple budget cycles.
          </p>

          <p>
            What we did not find, looking at the tools available, was something that
            approached the problem the right way. Most attribution tools add another
            data source to an already crowded picture. Most analytics platforms
            show you more charts. What no one was doing was asking: given all of these
            competing data sources, which ones actually deserve to be trusted,
            by how much, and what should you do with that information?
          </p>

          <p>
            That is the question MeasureLens is built to answer.
          </p>
        </div>

        {/* Values / principles */}
        <div className="mt-20 space-y-6">
          <p
            className="text-xs font-mono font-semibold uppercase tracking-widest mb-8"
            style={{ color: "rgba(107,124,176,0.5)" }}
          >
            What we believe
          </p>

          {[
            {
              title: "Measurement should produce decisions, not just reports.",
              body:  "A ROAS number that does not come with a recommended action is half-finished. The output of a good measurement system is not a chart. It is a clear next step.",
            },
            {
              title: "Confidence matters as much as the estimate.",
              body:  "A 2.4x result with high confidence is more useful than a 4.0x result that you cannot trust. Knowing how sure you are is part of the answer, not a footnote to it.",
            },
            {
              title: "Conflicts should be surfaced, not averaged.",
              body:  "When your data sources disagree, the honest response is to make the disagreement visible and explain why it exists. Averaging it away just hides the problem one level deeper.",
            },
            {
              title: "Platform incentives and measurement quality are in tension.",
              body:  "This is not a conspiracy theory. It is just an incentive structure. The same company that sells you ads also reports how effective those ads were. You are allowed to be skeptical.",
            },
          ].map((item) => (
            <div
              key={item.title}
              className="rounded-xl p-6"
              style={{
                background: "rgba(255,255,255,0.02)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h3
                className="font-semibold mb-2"
                style={{ color: "#C4CAEE", fontSize: "1rem" }}
              >
                {item.title}
              </h3>
              <p style={{ color: "#6B7CB0", fontSize: "0.95rem", lineHeight: 1.7 }}>
                {item.body}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div
          className="mt-20 rounded-2xl p-8 text-center"
          style={{
            background: "rgba(124,58,237,0.06)",
            border: "1px solid rgba(124,58,237,0.18)",
          }}
        >
          <p className="text-lg font-bold mb-2" style={{ color: "#C4CAEE" }}>
            We are building this now
          </p>
          <p className="text-sm leading-relaxed mb-6" style={{ color: "#6B7CB0" }}>
            MeasureLens is in active development. We are having early conversations
            with marketing leaders and performance teams who feel this problem firsthand.
            If that is you, we would like to connect.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link href="/#cta" className="btn-primary" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Join the Waitlist
            </Link>
            <Link href="/contact" className="btn-ghost" style={{ display: "inline-flex", padding: "10px 24px", fontSize: "0.875rem" }}>
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
