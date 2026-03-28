import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import ButtonGradient from "../components/ButtonGradient";
import ButtonOutline from "../components/ButtonOutline";

export const metadata: Metadata = {
  title: "Pricing",
  description: "One base fee, then add production modules at a fixed price. Simple, transparent pricing that scales with your factory.",
};

const baseIncludes = [
  "Cloud-hosted platform",
  "Up to 25 users included",
  "2 environments (staging + production)",
  "Real-time dashboards",
  "Role-based access control",
  "SSO integration",
  "API access",
  "9–5 support",
  "99.9% uptime SLA",
];

const modules = [
  {
    name: "Downtime Tracking",
    description: "Log, categorize, and analyze machine stops in real time.",
    icon: "ri-time-line",
  },
  {
    name: "Quality Inspections",
    description: "Digital checklists, measurements, and sign-off workflows.",
    icon: "ri-shield-check-line",
  },
  {
    name: "Shift Handover",
    description: "Structured shift logs with notes, issues, and follow-ups.",
    icon: "ri-swap-box-line",
  },
  {
    name: "OEE Monitoring",
    description: "Live OEE dashboards connected to machine data.",
    icon: "ri-bar-chart-2-line",
  },
  {
    name: "Maintenance Requests",
    description: "Operator-initiated maintenance tickets with photo and priority.",
    icon: "ri-tools-line",
  },
  {
    name: "Production Scheduling",
    description: "Drag-and-drop scheduling linked to orders and capacity.",
    icon: "ri-calendar-schedule-line",
  },
  {
    name: "Batch Traceability",
    description: "Track raw materials, batches, and outputs across production steps.",
    icon: "ri-route-line",
  },
  {
    name: "Machine Connectivity",
    description: "PLC, OPC-UA, and SCADA integration layer for real-time data.",
    icon: "ri-plug-line",
  },
];

const hostingOptions = [
  {
    name: "Mantsu Cloud",
    description:
      "Fully managed hosting on our infrastructure. Zero setup, automatic updates, and built-in monitoring.",
    tags: ["Fastest to deploy", "Fully managed"],
  },
  {
    name: "Private Cloud",
    description:
      "Run Mantsu on your own cloud provider — AWS, Azure, or GCP. You control the infrastructure, we manage the platform.",
    tags: ["Your infrastructure", "Full control"],
  },
  {
    name: "On-Premise",
    description:
      "Deploy inside your factory network for maximum data sovereignty. Air-gapped deployments available.",
    tags: ["Data sovereignty", "Air-gap ready"],
  },
];

export default function PricingPage() {
  return (
    <main>
      {/* Hero */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <section className="flex flex-col items-center px-4 pt-12 pb-10 text-center md:px-8 md:pt-16 md:pb-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              // Pricing
            </p>
            <h1 className="mt-4 max-w-[560px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
              One platform. <span className="text-gradient">Add</span> what you need.
            </h1>
            <p className="mt-6 max-w-[480px] text-base font-normal text-slate-600">
              A single base fee covers the platform and your team. Then pick the
              production modules your factory needs — at a fixed price per module.
            </p>
          </section>
        </Wrapper>
      </div>

      <Divider />

      {/* Base platform + price */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_400px]">
            {/* Left: what's included */}
            <div className="border-b border-slate-200 p-6 md:border-b-0 md:border-r md:p-8">
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                //&nbsp;&nbsp;BASE PLATFORM
              </span>
              <h2 className="mt-4 font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900 md:text-[32px] md:tracking-[-0.96px]">
                Everything to get started
              </h2>
              <p className="mt-3 max-w-[400px] text-sm leading-relaxed text-slate-500">
                The core platform with hosting, users, environments, and
                support — included in every plan.
              </p>
              <ul className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                {baseIncludes.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-600">
                    <i className="ri-check-line text-emerald-600" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right: pricing card */}
            <div className="flex flex-col justify-between p-6 md:p-8">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  Base fee
                </p>
                <p className="mt-3">
                  <span className="font-serif text-[48px] leading-none tracking-[-1.44px] text-slate-900">
                    €1,200
                  </span>
                  <span className="ml-1 text-sm text-slate-400">/month</span>
                </p>
                <div className="mt-6 border-t border-dashed border-slate-200 pt-6">
                  <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    Extra users
                  </p>
                  <p className="mt-3">
                    <span className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
                      €35
                    </span>
                    <span className="ml-1 text-sm text-slate-400">/user/month</span>
                  </p>
                  <p className="mt-2 text-xs text-slate-500">
                    25 users included. Additional users billed per user.
                  </p>
                </div>
              </div>
              <div className="mt-8 flex flex-col gap-2">
                <ButtonGradient href="/contact">
                  Talk to us <i className="ri-arrow-right-line" />
                </ButtonGradient>
                <ButtonOutline href="/pricing-v2">
                  Calculate your price
                </ButtonOutline>
              </div>
            </div>
          </div>
        </Wrapper>
      </div>

      <Divider />

      {/* Modules grid */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="flex items-end justify-between px-4 pt-10 pb-2 md:px-8 md:pt-12">
            <div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                //&nbsp;&nbsp;PRODUCTION MODULES
              </span>
              <h2 className="mt-4 font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900 md:text-[32px] md:tracking-[-0.96px]">
                Add the modules you need
              </h2>
              <p className="mt-3 max-w-[480px] text-sm leading-relaxed text-slate-500">
                Each module works independently or together. Start with one and expand
                as your operation grows.
              </p>
            </div>
            <div className="hidden items-baseline gap-1 md:flex">
              <span className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
                €350
              </span>
              <span className="text-sm text-slate-400">/module/month</span>
            </div>
          </div>
          {/* Mobile price */}
          <div className="px-4 pb-2 md:hidden">
            <span className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900">
              €350
            </span>
            <span className="ml-1 text-sm text-slate-400">/module/month</span>
          </div>

          <div className="mt-6 grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2 md:grid-cols-4">
            {modules.map((mod, i) => {
              const lastRowMd = i >= modules.length - (modules.length % 4 || 4);
              const lastRowSm = i >= modules.length - (modules.length % 2 || 2);

              return (
              <div
                key={mod.name}
                className={`flex flex-col gap-5 p-6 md:p-8 ${
                  !lastRowSm ? "border-b border-slate-200" : "border-b border-slate-200 sm:border-b-0"
                } ${
                  lastRowMd ? "md:border-b-0" : "md:border-b"
                } ${
                  i % 4 < 3 ? "md:border-r md:border-slate-200" : ""
                } ${
                  i % 2 === 0 ? "sm:border-r sm:border-slate-200" : ""
                }`}
              >
                <div className="flex h-10 w-10 items-center justify-center border border-slate-200 bg-white">
                  <i className={`${mod.icon} text-lg text-gradient`} />
                </div>
                <h3 className="font-serif text-[18px] leading-tight tracking-[-0.54px] text-slate-900">
                  {mod.name}
                </h3>
                <p className="text-xs leading-relaxed text-slate-500">
                  {mod.description}
                </p>
              </div>
              );
            })}
          </div>
        </Wrapper>
      </div>

      <Divider />

      {/* Enterprise callout */}
      <div className="border-b border-slate-600 bg-slate-800">
        <Wrapper className="border-slate-600">
          <div className="flex flex-col items-center gap-6 px-6 py-12 text-center md:flex-row md:justify-between md:px-8 md:py-16 md:text-left">
            <div>
              <h2 className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-50 md:text-[32px] md:tracking-[-0.96px]">
                Enterprise or custom needs?
              </h2>
              <p className="mt-3 max-w-[440px] text-sm leading-relaxed text-slate-400">
                200+ users, on-premise deployment, custom SLAs, dedicated support,
                or multi-region — let&apos;s build a plan that fits.
              </p>
            </div>
            <ButtonGradient href="/contact">
              Contact us <i className="ri-arrow-right-line" />
            </ButtonGradient>
          </div>
        </Wrapper>
      </div>

      <Divider variant="dark" />

      {/* Hosting */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="px-4 pt-10 pb-2 md:px-8 md:pt-12">
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
              // Hosting
            </p>
            <h2 className="mt-4 font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
              Deploy where it makes sense
            </h2>
            <p className="mt-4 max-w-[480px] text-sm leading-relaxed text-slate-500">
              Every plan supports flexible hosting. Choose the deployment model
              that fits your security, compliance, and infrastructure needs.
            </p>
          </div>
          <div className="mt-6 grid grid-cols-1 border-t border-slate-200 md:grid-cols-3">
            {hostingOptions.map((option, i) => (
              <div
                key={option.name}
                className={`flex flex-col border-slate-200 p-6 md:p-8 ${
                  i < 2 ? "border-b md:border-b-0 md:border-r" : ""
                }`}
              >
                <h3 className="font-serif text-[20px] leading-none tracking-[-0.6px] text-slate-900">
                  {option.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-500">
                  {option.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {option.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 px-3 py-1 text-[11px] font-medium text-slate-500"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
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
