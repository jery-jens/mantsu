import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import InsightsGrid from "../components/InsightsGrid";

export const metadata: Metadata = {
  title: "Resources",
  description: "Articles, guides, and perspectives on modern manufacturing, production software, and factory digitisation.",
};

export interface Insight {
  slug: string;
  type: "case" | "blog";
  category: string;
  date: string;
  title: string;
  excerpt: string;
  // Case study metadata
  industry?: string;
  region?: string;
  year?: string;
}

export const insights: Insight[] = [
  {
    slug: "european-packaging-group",
    type: "case",
    category: "Case Study",
    date: "March 15, 2026",
    title: "How European Packaging Group cut downtime by 30% in 3 months",
    excerpt:
      "A two-year MES project compressed into 90 days. Real-time visibility across 3 plants, with measurable impact from week one.",
    industry: "Packaging",
    region: "Belgium",
    year: "2026",
  },
  {
    slug: "nordsteel-industries",
    type: "case",
    category: "Case Study",
    date: "February 28, 2026",
    title: "NordSteel Industries: from one line to three plants",
    excerpt:
      "Starting small with a single digitized production line and scaling modular apps across an entire multi-site operation.",
    industry: "Steel & Metals",
    region: "Scandinavia",
    year: "2026",
  },
  {
    slug: "precision-manufacturing-ag",
    type: "case",
    category: "Case Study",
    date: "February 10, 2026",
    title: "Precision Manufacturing AG: ROI in the first quarter",
    excerpt:
      "Layering Mantsu on top of existing systems without rip-and-replace. Modular deployment that delivered ROI before the budget review.",
    industry: "Precision Engineering",
    region: "Germany",
    year: "2025",
  },
  {
    slug: "why-mes-projects-fail",
    type: "blog",
    category: "Product",
    date: "March 10, 2026",
    title: "Why 70% of MES projects fail — and how modular apps change the equation",
    excerpt:
      "Large-scale MES rollouts are plagued by delays, budget overruns, and poor adoption. A modular approach delivers value in weeks, not years.",
  },
  {
    slug: "real-time-production-visibility",
    type: "blog",
    category: "Engineering",
    date: "March 3, 2026",
    title: "Real-time production visibility without ripping out your existing stack",
    excerpt:
      "You don't need a forklift upgrade to see what's happening on the shop floor. Here's how to layer real-time dashboards over legacy systems.",
  },
  {
    slug: "spreadsheet-to-system",
    type: "blog",
    category: "Insights",
    date: "February 24, 2026",
    title: "From spreadsheet to system: a 90-day transformation playbook",
    excerpt:
      "Most factories run critical processes on spreadsheets. We break down the fastest path to structured, reliable production apps.",
  },
  {
    slug: "digital-thread-manufacturing",
    type: "blog",
    category: "Product",
    date: "February 15, 2026",
    title: "Building a digital thread across disconnected factory systems",
    excerpt:
      "Connecting ERP, PLC, and quality data into a single source of truth — without a two-year integration project.",
  },
  {
    slug: "operator-adoption",
    type: "blog",
    category: "Insights",
    date: "February 5, 2026",
    title: "Designing for operator adoption: lessons from 50 factory deployments",
    excerpt:
      "The best production software is the one operators actually use. Here's what we've learned about building for the shop floor.",
  },
  {
    slug: "predictive-quality-control",
    type: "blog",
    category: "Engineering",
    date: "January 28, 2026",
    title: "Predictive quality control with lightweight ML on production data",
    excerpt:
      "You don't need a data science team to catch defects early. Simple models on existing sensor data can reduce scrap by 30%.",
  },
  {
    slug: "lean-digital-transformation",
    type: "blog",
    category: "Insights",
    date: "January 15, 2026",
    title: "Lean digital transformation: less software, more impact",
    excerpt:
      "The factories seeing the biggest gains aren't buying more tools — they're deploying fewer, better ones where they matter most.",
  },
  {
    slug: "edge-computing-factory",
    type: "blog",
    category: "Engineering",
    date: "January 5, 2026",
    title: "Edge computing on the factory floor: when cloud latency isn't good enough",
    excerpt:
      "For real-time machine control and safety-critical decisions, milliseconds matter. Here's how edge deployments complement your cloud strategy.",
  },
  {
    slug: "composable-manufacturing",
    type: "blog",
    category: "Product",
    date: "December 20, 2025",
    title: "The composable manufacturing stack: building blocks over monoliths",
    excerpt:
      "Why the future of factory software looks more like Lego than SAP — and how to start building your composable stack today.",
  },
];

export default function InsightsPage() {
  const cases = insights.filter((i) => i.type === "case");
  const blogs = insights.filter((i) => i.type === "blog");

  return (
    <main>
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="px-4 pt-12 pb-10 md:px-8 md:pt-16 md:pb-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              // Resources
            </p>
            <h1 className="mt-4 max-w-[600px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              Ideas shaping the <span className="text-gradient">future</span> of manufacturing
            </h1>
            <p className="mt-6 max-w-[480px] text-base font-normal text-slate-600">
              Perspectives on production technology, factory operations, and the
              shift from legacy systems to modular software.
            </p>
          </section>
        </Wrapper>
      </div>

      <Divider />

      {/* Case studies */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="px-4 py-8 md:px-8 md:py-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              //&nbsp;&nbsp;CASE STUDIES
            </span>
          </div>
        </Wrapper>
      </div>

      <InsightsGrid insights={cases} />

      <Divider />

      {/* Blog */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="px-4 py-8 md:px-8 md:py-12">
            <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              //&nbsp;&nbsp;BLOG
            </span>
          </div>
        </Wrapper>
      </div>

      <InsightsGrid insights={blogs} />

      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
