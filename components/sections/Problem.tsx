"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const sources = [
  { platform: "Meta Ads",   roas: "4.0×", color: "#4267B2", status: "DISPUTED",   statusColor: "#F87171", note: "Last-click, 7-day view attribution" },
  { platform: "Google Ads", roas: "3.5×", color: "#4285F4", status: "PARTIAL",    statusColor: "#FCD34D", note: "Search + Display overlap" },
  { platform: "GA4",        roas: "2.8×", color: "#E37400", status: "UNVERIFIED", statusColor: "#94A3B8", note: "Cross-device identity gaps" },
  { platform: "MMM iROAS",  roas: "2.0×", color: "#10B981", status: "CONFIRMED",  statusColor: "#34D399", note: "Causal, holdout-calibrated" },
];

const pains = [
  {
    title: "Your board asks a simple question. You don't have a defensible answer.",
    body: "The CFO asks: where should we put next quarter's incremental $500K? You have four data sources. None of them agree. The answer becomes a conference call, not a decision. Every dollar allocated without confidence is a dollar that could be working harder somewhere else.",
  },
  {
    title: "Every misinformed bet compounds as you scale.",
    body: "If your true iROAS is 1.2× but you believe it's 4.0×, you double down on a channel that doesn't deserve it. At $500K/month, that misallocation costs millions annually — and it almost never gets caught until the damage shows up in revenue, not dashboards.",
  },
  {
    title: "The tools that could help take too long and cost too much.",
    body: "A proper MMM engagement takes 8–16 weeks and $150K+. Geo holdout experiments require traffic and patience. Incrementality vendors give you one channel. None of them integrate. By the time the analysis arrives, the budget is already committed.",
  },
];

export default function Problem() {
  const ref = useScrollReveal();

  return (
    <section
      ref={ref as any}
      id="problem"
      className="py-24 lg:py-32 section-light"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left: visual */}
          <div className="reveal-on-scroll">
            <div className="section-tag" style={{ color: "#7C3AED" }}>The Attribution Reality</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6" style={{ color: "#0F0F2A" }}>
              One campaign.{" "}
              <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Four numbers.
              </span>
              <br />Three are wrong.
            </h2>
            <p className="text-lg mb-10" style={{ color: "#6B7280" }}>
              The conflict isn't noise. It's a structural problem with how every platform
              measures success for itself. Until you resolve it, budget decisions are
              built on the most optimistic number, not the most credible one.
            </p>

            {/* Source cards */}
            <div className="space-y-3">
              {sources.map((s, i) => (
                <div
                  key={s.platform}
                  className={`flex items-center gap-4 p-4 rounded-xl reveal-on-scroll reveal-delay-${i + 1}`}
                  style={{ background: "rgba(255,255,255,0.7)", border: "1px solid rgba(0,0,0,0.07)", backdropFilter: "blur(8px)" }}
                >
                  <div
                    className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                    style={{ background: s.color, boxShadow: `0 0 8px ${s.color}40` }}
                  />
                  <span className="font-semibold w-24 flex-shrink-0" style={{ color: "#0F0F2A" }}>
                    {s.platform}
                  </span>
                  <div className="flex-1">
                    <div className="text-xs" style={{ color: "#9CA3AF" }}>{s.note}</div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xl font-bold" style={{ color: "#0F0F2A" }}>{s.roas}</span>
                    <span
                      className="text-xs font-mono font-semibold px-2 py-0.5 rounded"
                      style={{ color: s.statusColor, background: `${s.statusColor}15`, border: `1px solid ${s.statusColor}30` }}
                    >
                      {s.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Emphasis */}
            <div
              className="mt-6 p-4 rounded-xl reveal-on-scroll reveal-delay-5"
              style={{ background: "rgba(124,58,237,0.06)", border: "1px dashed rgba(124,58,237,0.25)" }}
            >
              <p className="text-sm font-medium" style={{ color: "#7C3AED" }}>
                The problem isn't having the data. It's not having a principled way to
                weigh it — and a system that turns that weight into a decision you can
                defend in a board meeting.
              </p>
            </div>
          </div>

          {/* Right: pain points */}
          <div className="space-y-8">
            {pains.map((p, i) => (
              <div
                key={p.title}
                className={`reveal-on-scroll reveal-delay-${i + 2}`}
              >
                <div className="flex gap-4">
                  <div className="flex-shrink-0 mt-1">
                    <div
                      className="w-8 h-8 rounded-full flex items-center justify-center"
                      style={{ background: "rgba(124,58,237,0.1)", border: "1px solid rgba(124,58,237,0.2)" }}
                    >
                      <span className="text-xs font-bold" style={{ color: "#7C3AED" }}>{i + 1}</span>
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-2" style={{ color: "#0F0F2A" }}>
                      {p.title}
                    </h3>
                    <p className="leading-relaxed" style={{ color: "#6B7280" }}>{p.body}</p>
                  </div>
                </div>
                {i < pains.length - 1 && (
                  <div className="ml-12 mt-6 h-px" style={{ background: "rgba(0,0,0,0.07)" }} />
                )}
              </div>
            ))}

            {/* Stat callout */}
            <div
              className="rounded-2xl p-6 reveal-on-scroll reveal-delay-5"
              style={{ background: "linear-gradient(135deg, rgba(124,58,237,0.08), rgba(79,70,229,0.08))", border: "1px solid rgba(124,58,237,0.15)" }}
            >
              <p className="text-4xl font-bold mb-1" style={{ color: "#7C3AED" }}>40–80%</p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                Typical platform overstatement of ROAS vs. causal iROAS from holdout-calibrated
                measurement — across major paid channels.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
