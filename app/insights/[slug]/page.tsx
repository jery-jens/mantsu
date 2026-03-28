import Link from "next/link";
import Wrapper from "../../components/Wrapper";
import Divider from "../../components/Divider";
import Cta from "../../components/Cta";
import Footer from "../../components/Footer";
import ShareBar from "../../components/ShareBar";
import { insights as allInsights } from "../page";

const insightsContent: Record<string, string[]> = {
  "european-packaging-group": [
    "European Packaging Group operates three production plants across Belgium, running 24/7 packaging lines for FMCG clients. With growing customer demands and aging infrastructure, their operations team was drowning in manual downtime tracking, paper-based shift handovers, and disconnected reporting.",
    "They'd scoped a traditional MES project — 18 months, seven-figure budget, full plant rollout. But after two failed vendor pilots, the COO decided to try a different approach. They started with Mantsu on a single packaging line in Gent.",
    "Week 1–2: Mantsu deployed a downtime tracking app on the line. Operators logged stops on tablets mounted at each station. Within days, the team had visibility into downtime patterns they'd been guessing about for years.",
    "Month 2: A second app went live for shift handover — replacing a paper logbook that had been the source of recurring miscommunication between shifts. The digital handover cut changeover-related stops by 40%.",
    "Month 3: Real-time dashboards connected both apps, giving plant managers live OEE data for the first time. Downtime on the pilot line dropped 30%. The board approved rollout to the remaining two plants.",
  ],
  "nordsteel-industries": [
    "NordSteel Industries is a Scandinavian steel producer with operations spanning three countries. Their challenge wasn't a lack of technology — it was too much of it. Each plant had its own mix of legacy systems, custom scripts, and manual processes.",
    "The VP of Operations had a clear vision: standardize production visibility across all sites without forcing a single system on plants that had evolved independently over decades. A traditional MES approach would have meant years of integration work and significant disruption.",
    "Mantsu started with one extrusion line in their Swedish facility. A simple production tracking app replaced a whiteboard-based scheduling system. Operators adopted it within the first week — no training sessions needed, just a tablet at the workstation.",
    "Within six weeks, the same app template was adapted and deployed to a line in their Norwegian plant. Different products, different workflows, but the same modular foundation. The local team customized their own dashboards without IT involvement.",
    "Today, NordSteel runs Mantsu across three plants and twelve production lines. Each plant maintains its own configurations while corporate gets unified reporting. The rollout that was quoted at 24 months by three MES vendors took 5 months with Mantsu.",
  ],
  "precision-manufacturing-ag": [
    "Precision Manufacturing AG is a German manufacturer of high-tolerance components for automotive and aerospace clients. Their existing MES had been in place for over a decade — deeply integrated, heavily customized, and increasingly brittle.",
    "Replacing it was out of the question. The risk of disrupting production for their automotive OEM clients was too high. But the system couldn't support the new quality documentation requirements their aerospace customers demanded.",
    "The CTO proposed a layer approach: keep the existing MES for what it does well, and add Mantsu modules for the gaps. First target: a quality inspection app that could capture measurements, photos, and sign-offs digitally — replacing a paper-based process that had caused two audit findings.",
    "The quality app went live in 8 weeks. Inspectors used tablets on the shop floor, data flowed directly into customer-facing reports, and the audit trail was automatic. Their next aerospace audit passed with zero findings for the first time.",
    "ROI came in the first quarter — not from cost savings, but from a new aerospace contract they won specifically because they could demonstrate digital quality traceability. Mantsu paid for itself before the first invoice was due.",
  ],
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

  const articleJsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: insight.title,
    description: insight.excerpt,
    datePublished: insight.date,
    author: {
      "@type": "Organization",
      name: "Mantsu",
      url: "https://mantsu.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Mantsu",
      logo: { "@type": "ImageObject", url: "https://mantsu.com/mantsu-logo-new.svg" },
    },
    mainEntityOfPage: `https://mantsu.com/insights/${slug}`,
    articleSection: insight.category,
  };

  return (
    <main>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="px-4 pt-12 pb-10 md:px-8 md:pt-16 md:pb-12">
            <Link
              href="/insights"
              className="inline-flex items-center gap-1 text-sm font-medium text-slate-400 hover:text-slate-600"
            >
              <i className="ri-arrow-left-line text-xs" /> Back to resources
            </Link>
            <div className="mt-6 flex items-center gap-3 md:mt-8">
              <span
                className={`inline-flex rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider ${
                  insight.type === "case"
                    ? "bg-gradient-to-r from-[#E8824F] to-[#C70C5B] text-white"
                    : "bg-slate-200 text-slate-600"
                }`}
              >
                {insight.type === "case" ? "Case study" : "Blog"}
              </span>
              <span className="text-xs text-slate-300">·</span>
              <span className="text-xs text-slate-400">{insight.date}</span>
            </div>
            <h1 className="mt-4 max-w-[720px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              {insight.title}
            </h1>
          </section>

          {/* Author + share */}
          <div className="flex items-center justify-between border-t border-slate-200 px-4 py-4 md:px-8">
            <div className="flex items-center gap-3">
              <div className="h-9 w-9 shrink-0 rounded-full bg-slate-200" />
              <div>
                <p className="text-sm font-medium text-slate-900">Mantsu Team</p>
                <p className="text-xs text-slate-400">Editorial</p>
              </div>
            </div>
            <ShareBar
              url={`https://mantsu.com/insights/${slug}`}
              title={insight.title}
            />
          </div>
        </Wrapper>
      </div>

      <Divider />

      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="px-4 pt-4 md:px-8 md:pt-8">
            <div className="aspect-[16/9] w-full bg-slate-200" />
          </div>
          <div className={`px-4 py-8 md:px-8 md:py-12 ${insight.type === "case" ? "flex flex-col-reverse gap-8 md:flex-row" : ""}`}>
            <article className={`${insight.type === "case" ? "flex-1" : "mx-auto max-w-[720px]"}`}>
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

            {insight.type === "case" && (
              <aside className="w-full shrink-0 md:w-[240px]">
                <div className="sticky top-[120px] space-y-6 border border-slate-200 bg-white p-6">
                  {/* Logo placeholder */}
                  <div className="flex h-16 items-center justify-center bg-slate-100">
                    <div className="h-6 w-[100px] rounded bg-slate-300" />
                  </div>

                  <div className="space-y-4">
                    {insight.industry && (
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Industry</p>
                        <p className="mt-1 text-sm font-medium text-slate-900">{insight.industry}</p>
                      </div>
                    )}
                    {insight.region && (
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Region</p>
                        <p className="mt-1 text-sm font-medium text-slate-900">{insight.region}</p>
                      </div>
                    )}
                    {insight.year && (
                      <div>
                        <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">Year</p>
                        <p className="mt-1 text-sm font-medium text-slate-900">{insight.year}</p>
                      </div>
                    )}
                  </div>
                </div>
              </aside>
            )}
          </div>
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
