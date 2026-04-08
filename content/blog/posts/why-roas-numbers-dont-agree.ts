import type { BlogPost } from "../schema";

const post: BlogPost = {
  slug:        "why-roas-numbers-dont-agree",
  title:       "Why Your ROAS Numbers Don't Agree. And What It Costs You.",
  excerpt:
    "Every platform reports a different ROAS for the same campaign. Most teams average the numbers and move on. That averaging is where the real damage starts.",
  date:        "2026-04-09",
  category:    "Attribution",
  readingTime: 8,
  seoTitle:    "Why Your ROAS Numbers Don't Agree — MeasureLens",
  metaDescription:
    "Meta says 4x. Google says 3.5x. GA4 says 2.8x. Your MMM says 2x. Why do they all disagree — and why does it matter for every budget decision you make?",

  body: [
    {
      type: "p",
      text: "You know the situation. You pull ROAS from Meta. You check Google. You look at GA4. Maybe you have an MMM output or a recent incrementality study sitting in a spreadsheet somewhere. Every number is different. You stare at them for a moment, pick the one that feels most defensible, and move on to the next meeting.",
    },
    {
      type: "p",
      text: "Most performance teams do some version of this. And most would privately admit that the number they report is more of a negotiated position than a measurement. That is not a criticism. It is what the current measurement landscape forces you to do.",
    },
    {
      type: "p",
      text: "But there is a cost. And it compounds faster than most teams realize.",
    },
    {
      type: "h2",
      text: "Why Each Platform Reports a Different Number",
    },
    {
      type: "p",
      text: "Attribution is fundamentally a question of credit assignment. When a customer converts, which touchpoints get to claim responsibility? The answer depends entirely on the rules you use to assign credit.",
    },
    {
      type: "p",
      text: "Each platform has its own rules. Meta's default attribution window attributes a conversion to an ad view that happened up to seven days ago, even if the customer never clicked. Google's last-click model assigns all credit to the final click before purchase, ignoring everything that came before. GA4 uses a data-driven model trained on your own conversion history, which sounds sophisticated until you remember that cross-device journeys routinely break it.",
    },
    {
      type: "p",
      text: "None of these rules are neutral. Each one was designed by a team whose job is to make that platform look effective. That is not speculation. It is just how incentives work.",
    },
    {
      type: "callout",
      text: "The measurement model is designed by the same team that benefits from a strong result. That conflict does not mean the data is worthless. It means it should not be taken at face value.",
    },
    {
      type: "h2",
      text: "The Attribution Overlap Problem",
    },
    {
      type: "p",
      text: "Here is the core mechanics issue. A customer sees a Meta ad on Monday. They see a Google search ad on Wednesday. They click through and convert on Thursday.",
    },
    {
      type: "p",
      text: "Meta claims 100 percent of that conversion. Google claims 100 percent. Your CRM logs one sale. Add the platform-reported revenues and you get a number that is larger than reality. Your aggregated ROAS is inflated before you have even started analyzing anything.",
    },
    {
      type: "p",
      text: "This is not a data quality problem. Both platforms are reporting what their models say, and both models are doing exactly what they were designed to do. The problem is that reporting from inside each platform's perspective creates a structurally overestimated picture of total performance.",
    },
    {
      type: "p",
      text: "Studies on overlapping attribution consistently find that aggregate reported ROAS across platforms runs 40 to 80 percent above what a properly controlled incrementality test finds as the true causal lift. That gap is not rounding error.",
    },
    {
      type: "h2",
      text: "MMM Tells a Different Story. Often the Right One.",
    },
    {
      type: "p",
      text: "Marketing Mix Modeling approaches the question differently. Instead of following individual users through a funnel, it looks at aggregate patterns over time and uses regression analysis to isolate the contribution of each channel. A well-built MMM does not care about attribution windows or click models. It asks: when spend in this channel goes up, does total revenue follow? And by how much?",
    },
    {
      type: "p",
      text: "That is a more honest question. It is also a harder one to answer. MMM requires historical data, careful modeling assumptions, and enough variation in spend levels to identify effects. When done well, it typically produces incrementality estimates that are materially lower than platform-reported ROAS. Not because platforms are lying, but because click-based models count a lot of conversions that would have happened anyway.",
    },
    {
      type: "p",
      text: "The problem is that MMM has its own issues. The output is typically 6 to 8 weeks stale by the time it arrives. Channel-level estimates often have wide confidence intervals. And without ongoing recalibration against actual experiments, model drift becomes a real concern.",
    },
    {
      type: "h2",
      text: "So Which Number Do You Actually Use?",
    },
    {
      type: "p",
      text: "This is the practical question that marketing leaders face every week. You have multiple data sources. They disagree. A budget decision is coming and you need a defensible number to put in a slide.",
    },
    {
      type: "p",
      text: "Most teams default to one of a few approaches.",
    },
    {
      type: "list",
      items: [
        "Use the platform number because it is easy to pull and easy to explain to a CFO.",
        "Average the available figures and present that as a balanced view.",
        "Use the most conservative number and frame it as being appropriately skeptical.",
        "Defer to whichever number aligns with the decision that has already been made.",
      ],
    },
    {
      type: "p",
      text: "None of these approaches are based on a principled evaluation of which evidence is most reliable. They are workarounds for the absence of one.",
    },
    {
      type: "h2",
      text: "The Cost Is Structural, Not Just Analytical",
    },
    {
      type: "p",
      text: "Here is where the real problem sits. Budget allocation decisions made on inflated ROAS do not just cost you money in the obvious sense. They reshape your entire marketing mix over time.",
    },
    {
      type: "p",
      text: "If you believe Meta is delivering 4x ROAS when the true causal return is closer to 2x, you will over-allocate to Meta and under-invest in channels that are harder to measure but genuinely incremental. This compounds every quarter. Channels that survive reporting reviews get more budget. Channels that do not get cut. The measurement system drives the allocation. If the measurement system is biased, the allocation follows the bias.",
    },
    {
      type: "p",
      text: "Over 12 months, the teams we speak with who have done proper incrementality work routinely find that 20 to 35 percent of their paid media budget was allocated to channels or audiences that were not delivering meaningful incremental value. That is not an edge case. It is a pattern.",
    },
    {
      type: "quote",
      text: "The number you use to make budget decisions shapes your entire channel mix over time. If the number is structurally wrong, the mix follows.",
    },
    {
      type: "h2",
      text: "The Confidence Problem",
    },
    {
      type: "p",
      text: "There is a second issue that gets less attention. When teams know their numbers are uncertain, they often stop trusting measurement altogether. Budget decisions start getting made on gut feel, on channel champion advocacy, or on which vendor has the most persuasive QBR deck.",
    },
    {
      type: "p",
      text: "This is a rational response to measurement systems that feel unreliable. If you cannot trust any of the numbers, you might as well rely on experience and instinct. But that is a significant step backward, and it is avoidable.",
    },
    {
      type: "p",
      text: "The problem is not that we have too many numbers. The problem is that we have no principled way to weigh them against each other. No framework for saying: this data source has stronger evidence, this one has weaker evidence, and here is what the picture looks like when you account for that.",
    },
    {
      type: "h2",
      text: "What the Solution Actually Looks Like",
    },
    {
      type: "p",
      text: "The path forward is not another attribution model. It is not a better last-click replacement or a fancier data-driven approach. Those still live inside the same paradigm of platform-centric measurement.",
    },
    {
      type: "p",
      text: "What is actually needed is a layer that sits above the data sources and does three things.",
    },
    {
      type: "list",
      items: [
        "Ranks the evidence quality of each source based on its methodology, recency, and coverage.",
        "Surfaces the conflicts explicitly rather than hiding them in an average.",
        "Produces a single output that reflects both the best estimate and the confidence behind it.",
      ],
    },
    {
      type: "p",
      text: "A confidence score matters as much as the ROAS figure. A 2.4x result with 78 out of 100 confidence is more useful than a 4.0x result with 35 out of 100 confidence. The first one tells you something actionable. The second one tells you to go get more data before deciding.",
    },
    {
      type: "p",
      text: "The measurement stack you need is not a new platform to add to the list. It is a reasoning layer that helps you make sense of the platforms you already have.",
    },
    {
      type: "p",
      text: "That is the problem we are building toward. And based on every conversation we have with growth leaders, heads of performance, and marketing executives, it is the right problem to solve.",
    },
  ],

  cta: {
    heading: "We are building MeasureLens to solve exactly this.",
    body:    "If this resonates with your team's measurement challenges, we would like to talk. We are in early development and actively shaping the product with a small group of marketing leaders.",
  },
};

export default post;
