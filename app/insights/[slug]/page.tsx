import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import Divider from "../../components/Divider";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import { insights as allInsights } from "../page";

const insightsContent: Record<string, string[]> = {
  "why-mes-projects-fail": [
    "Manufacturing Execution Systems have been around for decades, yet the majority of large-scale MES rollouts still fail to deliver on their promises. The reasons are well-documented: scope creep, integration nightmares, change management friction, and timelines that stretch from months into years.",
    "The fundamental problem isn't the technology — it's the approach. Traditional MES projects attempt to replace everything at once. A single vendor, a single platform, a single cutover date. This 'big bang' strategy puts enormous pressure on every stakeholder, from IT to operators on the floor.",
    "Modular production apps flip this model. Instead of replacing your entire system, you deploy targeted applications that solve specific problems — a quality checklist here, a downtime tracker there. Each app delivers value independently, and together they form a connected production layer.",
    "The results speak for themselves. Our customers go live with their first production app in under 90 days. They see ROI before the traditional MES vendor has finished their requirements gathering phase. And because each module is independent, there's no catastrophic failure mode.",
    "This isn't about building a worse MES. It's about recognizing that the factory floor doesn't need a monolithic system — it needs tools that work the way operators already think, deployed at the speed the business demands.",
  ],
  "real-time-production-visibility": [
    "The biggest myth in manufacturing technology is that you need to replace your legacy systems to get real-time visibility. You don't. Your PLCs, SCADA systems, and even your spreadsheets already contain the data you need — it's just trapped in silos.",
    "The key is a lightweight integration layer that reads from your existing sources without disrupting them. Think of it as a read-only overlay: your legacy systems continue to run exactly as they do today, while a modern dashboard surfaces the data operators and managers actually need.",
    "We've seen factories go from zero real-time visibility to live production dashboards in under three weeks. The secret isn't sophisticated technology — it's pragmatic architecture. OPC-UA for PLC data, simple database connectors for ERP, and REST APIs for everything else.",
    "The most common pushback we hear is about data quality. Yes, legacy data can be messy. But messy data you can see is infinitely more valuable than clean data locked in a system nobody checks. Start with visibility, then iterate on quality.",
    "Once operators can see what's happening in real time, something remarkable happens: they start asking for more. That first dashboard becomes the seed for a broader digital transformation — one that's driven by the people who actually run production.",
  ],
  "spreadsheet-to-system": [
    "Every factory has them: the critical spreadsheets that hold production together. Shift handover logs, quality inspection records, maintenance schedules, production targets. They're flexible, familiar, and terrifyingly fragile.",
    "The path from spreadsheet to structured system doesn't require a six-figure software project. It requires understanding what the spreadsheet actually does, who uses it, and what breaks when it fails. Start there, and the solution often writes itself.",
    "Week 1–2: Shadow the operators. Watch how they interact with the spreadsheet. You'll find that 80% of the cells are never touched, and the 20% that matter could be captured in a simple form. Document the workflow, not the spreadsheet.",
    "Week 3–6: Build a minimal app that replaces the core workflow. No bells, no whistles. Just the fields operators need, in the order they need them, accessible on a tablet at the workstation. Deploy it alongside the spreadsheet, not instead of it.",
    "Week 7–12: Iterate based on operator feedback. Add the reporting view that managers want. Connect it to the data sources that eliminate manual entry. By day 90, the spreadsheet is still there — but nobody opens it anymore.",
  ],
  "digital-thread-manufacturing": [
    "The digital thread — a continuous flow of data from design through production to delivery — remains one of manufacturing's most compelling and elusive goals. Most factories have islands of data: ERP knows about orders, PLCs know about machine state, quality systems know about defects. But nothing connects them.",
    "Traditional approaches to the digital thread require massive integration projects. Middleware platforms, data lakes, enterprise service buses — the infrastructure alone can take a year to deploy. And by the time it's live, the requirements have changed.",
    "A more pragmatic approach starts with the connections that matter most. What's the one data gap that causes the most pain? Usually it's something simple: knowing which batch produced which defect, or tracking whether a changeover followed the correct procedure.",
    "Build that single connection first. A lightweight API that links your quality data to your production orders. A simple event stream that correlates machine alarms with batch records. Each connection is a thread, and threads accumulate into fabric.",
    "The digital thread isn't a product you buy — it's a practice you build. Start small, connect what matters, and let the architecture emerge from real needs rather than theoretical frameworks.",
  ],
  "operator-adoption": [
    "The graveyard of factory software is filled with systems that worked perfectly in the demo and failed completely on the shop floor. The difference between success and failure almost never comes down to features — it comes down to whether operators actually use the tool.",
    "Lesson one: speed matters more than completeness. If your app takes more than 2 seconds to load or requires more than 3 taps to complete the most common action, operators will find a workaround. Usually that workaround is the clipboard and pen you were trying to replace.",
    "Lesson two: design for gloves, not mice. Touch targets need to be large. Contrast needs to be high. Text needs to be readable from arm's length. The shop floor is not a desk, and your interface needs to respect that.",
    "Lesson three: involve operators from day one. Not in a requirements workshop — on the floor, during a shift. Watch them work, ask them what slows them down, and build the thing they describe. The best factory software is co-designed, not delivered.",
    "Lesson four: launch quietly. The worst thing you can do is announce a 'digital transformation initiative' and roll out new software with a mandatory training session. Instead, put a tablet at one station and let curiosity do the rest. Organic adoption beats mandated adoption every time.",
  ],
  "predictive-quality-control": [
    "Predictive quality sounds like it requires a team of data scientists, a massive training dataset, and months of model development. In practice, the most effective quality predictions in manufacturing come from embarrassingly simple models applied to data you're already collecting.",
    "Start with correlation, not prediction. Plot your process parameters against your quality outcomes. Temperature vs. defect rate. Cycle time vs. dimensional accuracy. In most factories, you'll find that 2-3 variables explain 80% of quality variation.",
    "Once you've identified those variables, a basic threshold model — essentially an automated control chart — catches most issues before they become scrap. No neural networks required. Just statistical process control with better data and faster feedback.",
    "The real value isn't in the model — it's in the feedback loop. When operators see a real-time quality prediction based on current process parameters, they adjust before the defect occurs. The model doesn't need to be perfect; it needs to be fast and directional.",
    "We've seen factories reduce scrap rates by 25-35% with models that a junior engineer built in a week. The secret ingredient isn't AI — it's closing the loop between process data and operator action at the speed of production.",
  ],
  "lean-digital-transformation": [
    "The factories seeing the biggest digital gains aren't the ones with the largest IT budgets. They're the ones that treat software the way they treat inventory: lean, just-in-time, and ruthlessly focused on flow.",
    "Most digital transformation programs fail because they start with technology instead of problems. A factory doesn't need 'an IoT platform' — it needs to know why Line 3 keeps stopping at shift change.",
    "The lean approach to digital transformation starts with gemba. Walk the floor, identify the constraint, and ask: what's the smallest piece of software that removes this bottleneck? Build that, measure the impact, and move to the next constraint.",
    "We've seen a single tablet app — built in two weeks — eliminate 45 minutes of daily downtime on a packaging line. Not because the technology was sophisticated, but because it replaced a paper-based changeover checklist that operators were skipping.",
    "Less software, more impact. That's not a slogan — it's a strategy. Every tool you deploy is a tool someone has to learn, maintain, and trust. The fewer tools that deliver more value, the better your digital transformation will stick.",
  ],
  "edge-computing-factory": [
    "Cloud computing transformed how we build software, but the factory floor has physics that the cloud can't negotiate with. When a press is closing at 200mm/s, a 150ms round trip to AWS isn't just slow — it's irrelevant.",
    "Edge computing in manufacturing isn't about replacing the cloud. It's about putting computation where latency matters: at the machine, on the line, inside the control loop. The cloud handles analytics, dashboards, and long-term storage. The edge handles real-time decisions.",
    "The most common edge use case we see isn't AI inference or digital twins — it's simple data aggregation. A lightweight device that reads from multiple PLCs, normalizes the data, and pushes summaries to the cloud every few seconds. No vendor lock-in, no complex infrastructure.",
    "Security is the concern that comes up most in edge conversations, and rightly so. Every device on the factory network is an attack surface. Our approach: edge devices are read-only by default, communicate outbound only, and run minimal operating systems with automatic updates.",
    "Start with one line, one edge device, one use case. Prove the value before scaling. The factories that succeed with edge computing are the ones that treat it as an evolution of their existing automation, not a revolution.",
  ],
  "composable-manufacturing": [
    "For decades, factory software has followed the ERP model: one vendor, one platform, one throat to choke. The result is brittle systems that take years to deploy and decades to replace. The composable manufacturing stack offers an alternative.",
    "Composable means exactly what it sounds like: building your production technology from independent, interchangeable components. A quality module from one vendor, a scheduling tool from another, a custom dashboard built in-house — all connected through APIs.",
    "The key enabler isn't any single technology — it's the API contract. When every component exposes a clean, documented interface, you can swap, upgrade, or extend any piece without touching the rest. This is how modern web applications work, and manufacturing is finally catching up.",
    "The biggest objection to composable architectures is integration complexity. And it's valid — if you're integrating 20 tools manually. The answer is a thin integration layer: an event bus or API gateway that handles routing, transformation, and monitoring in one place.",
    "The composable stack isn't about having more software. It's about having the right software, chosen for each specific need, and connected in a way that lets you evolve at the speed of your business rather than the speed of your vendor's roadmap.",
  ],
};

export default async function InsightDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const insight = allInsights.find((i) => i.slug === slug);
  const content = insightsContent[slug];

  if (!insight || !content) {
    return (
      <main>
        <div className="border-b border-slate-200 bg-slate-50">
          <Wrapper>
            <section className="px-8 py-16 text-center">
              <h1 className="font-serif text-[48px] leading-none tracking-[-1.44px] text-slate-900">
                Insight not found
              </h1>
              <Link
                href="/insights"
                className="mt-6 inline-flex text-sm font-medium text-slate-600 hover:text-slate-900"
              >
                <i className="ri-arrow-left-line mr-1" /> Back to insights
              </Link>
            </section>
          </Wrapper>
        </div>
      </main>
    );
  }

  // Pick 3 other insights for "Read also"
  const related = allInsights
    .filter((i) => i.slug !== slug)
    .slice(0, 3);

  return (
    <main>
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="px-4 pt-12 pb-10 md:px-8 md:pt-16 md:pb-12">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-slate-600"
            >
              <i className="ri-arrow-left-line text-xs" /> Back to insights
            </Link>
            <div className="mt-6 flex items-center gap-3 md:mt-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                {insight.category}
              </span>
              <span className="text-xs text-slate-300">·</span>
              <span className="text-xs text-slate-400">{insight.date}</span>
            </div>
            <h1 className="mt-4 max-w-[720px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              {insight.title}
            </h1>
          </section>
        </Wrapper>
      </div>

      <Divider />

      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="mx-auto max-w-[720px] px-4 pt-8 md:px-8 md:pt-12">
            <div className="aspect-[16/9] w-full bg-slate-200" />
          </div>
          <article className="mx-auto max-w-[720px] px-4 py-8 md:px-8 md:py-12">
            {content.map((paragraph, i) => (
              <p
                key={i}
                className={`text-base leading-relaxed text-slate-600 ${
                  i > 0 ? "mt-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </article>
        </Wrapper>
      </div>

      <Divider />

      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="px-4 pt-8 pb-6 md:px-8 md:pt-12 md:pb-8">
            <h2 className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900 md:text-[32px] md:tracking-[-0.96px]">
              More worth reading
            </h2>
          </div>
          <div className="grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2 md:grid-cols-3">
            {related.map((item, i) => (
              <Link
                key={item.slug}
                href={`/insights/${item.slug}`}
                className={`group flex flex-col border-b border-slate-200 p-4 transition-colors hover:bg-slate-100 sm:border-r sm:p-6 sm:last:border-r-0 md:[&:nth-child(3)]:border-r-0 ${
                  i < 2 ? "md:border-r" : ""
                }`}
              >
                <div className="aspect-[16/9] w-full bg-slate-200" />
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-300">·</span>
                  <span className="text-xs text-slate-400">{item.date}</span>
                </div>
                <h3 className="mt-3 font-serif text-[20px] leading-tight tracking-[-0.6px] text-slate-900 group-hover:text-slate-700">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm font-normal leading-relaxed text-slate-500">
                  {item.excerpt}
                </p>
              </Link>
            ))}
          </div>
        </Wrapper>
      </div>

      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
