"use client";
import { useScrollReveal } from "../ui/useScrollReveal";

const sources = [
  { platform: "Meta",   roas: "4.0×", color: "#4267B2", status: "DISPUTED",   statusColor: "#F87171", note: "Last-click, 7-day view window" },
  { platform: "Google", roas: "3.5×", color: "#4285F4", status: "PARTIAL",    statusColor: "#FCD34D", note: "Search + Display overlap" },
  { platform: "GA4",    roas: "2.8×", color: "#E37400", status: "UNVERIFIED", statusColor: "#94A3B8", note: "Cross-device gaps" },
  { platform: "MMM",    roas: "2.0×", color: "#10B981", status: "CONFIRMED",  statusColor: "#34D399", note: "Causal, but 6-week lag" },
];

const pains = [
  {
    title: "You default to the number that confirms what you already believed",
    body: "Most teams do not average the data. They pick the platform that supports the decision they wanted to make anyway. That is not measurement. It is confirmation bias running on a media budget.",
  },
  {
    title: "Every wrong assumption compounds at scale",
    body: "If your true ROAS is 2.0× but you believe it is 4.0×, you are doubling down on channels that do not deserve it. At $20K per month, the error is uncomfortable. At $200K per month, it is a serious problem. It rarely gets caught until the damage is done.",
  },
  {
    title: "No one has a clear answer yet",
    body: "MMM takes six weeks and a consultant. Incrementality tests require traffic volume and patience. Most teams cycle back to the same place: staring at platform dashboards and hoping they are not being misled. We think there is a better path.",
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
            <div className="section-tag" style={{ color: "#7C3AED" }}>The Attribution Problem</div>
            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6" style={{ color: "#0F0F2A" }}>
              Same campaign.{" "}
              <span style={{ background: "linear-gradient(135deg,#7C3AED,#4F46E5)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                Four answers.
              </span>
            </h2>
            <p className="text-lg mb-10" style={{ color: "#6B7280" }}>
              You run one campaign. Every platform gives you a different number.
              The delta is not noise. It is a structural problem with how
              each platform measures success for itself.
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
                  <span className="font-semibold w-16 flex-shrink-0" style={{ color: "#0F0F2A" }}>
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
                Three of these numbers are overstating performance. One is grounded
                in causal evidence. The problem is not having the data. It is knowing
                which data to trust.
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
              <p className="text-4xl font-bold mb-1" style={{ color: "#7C3AED" }}>62%</p>
              <p className="text-sm" style={{ color: "#6B7280" }}>
                of performance teams report making budget decisions they later discovered
                were based on significantly overreported attribution data.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
