import type { Metadata } from "next";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import ButtonGradient from "../components/ButtonGradient";
import ButtonOutline from "../components/ButtonOutline";

export const metadata: Metadata = {
  title: "Pricing",
  description: "Simple, transparent pricing for teams of every size. Start small and scale as your factory grows.",
};

const tiers = [
  {
    name: "Starter",
    description: "For teams digitising their first production workflow.",
    platform: "€450",
    platformPer: "/month",
    users: "€45",
    usersPer: "/user/month",
    cta: "Get started",
    ctaStyle: "outline" as const,
    features: [
      "1 production app",
      "Up to 10 users",
      "Shared cloud resources",
      "2 environments",
      "Community support",
      "99.5% uptime SLA",
    ],
  },
  {
    name: "Professional",
    description: "For departments scaling modular production apps.",
    platform: "€1,800",
    platformPer: "/month",
    users: "€35",
    usersPer: "/user/month",
    cta: "Talk to us",
    ctaStyle: "gradient" as const,
    popular: true,
    features: [
      "Up to 5 production apps",
      "Unlimited users",
      "Dedicated database",
      "4 environments",
      "Private component library",
      "SSO & IDP integration",
      "Vertical scaling",
      "9–5 support",
      "99.9% uptime SLA",
    ],
  },
  {
    name: "Enterprise",
    description: "For organisations running mission-critical factory systems.",
    platform: "Custom",
    platformPer: "",
    users: "Custom",
    usersPer: "",
    cta: "Contact us",
    ctaStyle: "outline" as const,
    features: [
      "Unlimited production apps",
      "Unlimited users",
      "Horizontal scaling",
      "Flexible environments",
      "High availability & failover",
      "Multi-region deployment",
      "24/7 dedicated support",
      "Custom SLA",
      "Advanced audit & compliance",
    ],
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

const featureCategories = [
  {
    name: "Build",
    features: [
      { label: "Visual app builder", starter: true, professional: true, enterprise: true },
      { label: "Production templates", starter: true, professional: true, enterprise: true },
      { label: "Private component library", starter: false, professional: true, enterprise: true },
      { label: "Custom integrations (API)", starter: false, professional: true, enterprise: true },
      { label: "Design system support", starter: false, professional: false, enterprise: true },
    ],
  },
  {
    name: "Deploy",
    features: [
      { label: "Mantsu Cloud", starter: true, professional: true, enterprise: true },
      { label: "Private Cloud", starter: false, professional: true, enterprise: true },
      { label: "On-Premise", starter: false, professional: false, enterprise: true },
      { label: "CI/CD pipelines", starter: false, professional: true, enterprise: true },
    ],
  },
  {
    name: "Run",
    features: [
      { label: "Environments", starter: "2", professional: "4", enterprise: "Flexible" },
      { label: "Vertical scaling", starter: false, professional: true, enterprise: true },
      { label: "Horizontal scaling", starter: false, professional: false, enterprise: true },
      { label: "HA & failover", starter: false, professional: false, enterprise: true },
      { label: "Ops dashboard", starter: true, professional: true, enterprise: true },
    ],
  },
  {
    name: "Support",
    features: [
      { label: "Community forum", starter: true, professional: true, enterprise: true },
      { label: "9–5 support", starter: false, professional: true, enterprise: true },
      { label: "24/7 dedicated support", starter: false, professional: false, enterprise: true },
      { label: "Onboarding workshop", starter: false, professional: true, enterprise: true },
      { label: "Dedicated success manager", starter: false, professional: false, enterprise: true },
    ],
  },
];

function FeatureValue({ value }: { value: boolean | string }) {
  if (typeof value === "string") {
    return <span className="text-sm text-slate-600">{value}</span>;
  }
  if (value) {
    return <i className="ri-check-line text-base text-emerald-600" />;
  }
  return <span className="text-sm text-slate-300">—</span>;
}

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
              Simple pricing that <span className="text-gradient">scales</span> with your factory
            </h1>
            <p className="mt-6 max-w-[440px] text-base font-normal text-slate-600">
              Platform fee for the tools. Per-user pricing for your team.
              Hosting that fits your infrastructure.
            </p>
          </section>
        </Wrapper>
      </div>

      <Divider />

      {/* Tier cards */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-[subgrid] md:[grid-template-rows:repeat(5,auto)]">
            {tiers.map((tier, i) => (
              <div
                key={tier.name}
                className={`border-slate-200 p-6 md:row-span-5 md:grid md:grid-rows-subgrid md:p-8 ${
                  i < 2 ? "border-b md:border-b-0 md:border-r" : ""
                }`}
              >
                <div>
                  {tier.popular ? (
                    <span className="mb-4 inline-flex w-fit rounded-full bg-gradient-to-r from-[#E8824F]/10 to-[#C70C5B]/10 px-3 py-1 text-[10px] font-medium uppercase tracking-widest text-[#C70C5B]">
                      Most popular
                    </span>
                  ) : (
                    <span className="mb-4 block h-[26px]" />
                  )}
                  <h2 className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900">
                    {tier.name}
                  </h2>
                  <p className="mt-3 text-sm leading-relaxed text-slate-500">
                    {tier.description}
                  </p>
                </div>

                <div className="mt-8 flex flex-col gap-4">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Platform
                    </p>
                    <p className="mt-1.5">
                      <span className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
                        {tier.platform}
                      </span>
                      {tier.platformPer && (
                        <span className="ml-1 text-sm text-slate-400">
                          {tier.platformPer}
                        </span>
                      )}
                    </p>
                  </div>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      Users
                    </p>
                    <p className="mt-1.5">
                      <span className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
                        {tier.users}
                      </span>
                      {tier.usersPer && (
                        <span className="ml-1 text-sm text-slate-400">
                          {tier.usersPer}
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                <div className="mt-8">
                  {tier.ctaStyle === "gradient" ? (
                    <ButtonGradient href="/contact">{tier.cta} <i className="ri-arrow-right-line" /></ButtonGradient>
                  ) : (
                    <ButtonOutline href="/contact">{tier.cta}</ButtonOutline>
                  )}
                </div>

                <div className="mt-8 border-t border-slate-200" />

                <ul className="pt-8 flex flex-col gap-3">
                  {tier.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-2.5 text-sm text-slate-600"
                    >
                      <i className="ri-check-line mt-0.5 text-emerald-600" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </Wrapper>
      </div>

      <Divider />

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

      <Divider />

      {/* Feature comparison table */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="px-4 pt-10 pb-2 md:px-8 md:pt-12">
            <h2 className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900 md:text-[32px] md:tracking-[-0.96px]">
              Compare plans
            </h2>
          </div>

          {/* Table header */}
          <div className="sticky top-[96px] z-10 mt-6 grid grid-cols-4 border-t border-b border-slate-200 bg-slate-50 px-4 py-3 md:px-8 md:py-4">
            <div />
            <div className="text-center text-xs font-medium text-slate-900 md:text-sm">Starter</div>
            <div className="text-center text-xs font-medium text-slate-900 md:text-sm">Professional</div>
            <div className="text-center text-xs font-medium text-slate-900 md:text-sm">Enterprise</div>
          </div>

          {/* Categories */}
          {featureCategories.map((category) => (
            <div key={category.name}>
              <div className="border-t border-slate-200 px-4 py-3 md:px-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  {category.name}
                </span>
              </div>
              {category.features.map((feature, fi) => (
                <div
                  key={feature.label}
                  className={`grid grid-cols-4 border-t border-slate-100 px-4 py-3 md:px-8 ${
                    fi % 2 === 1 ? "bg-slate-50" : "bg-white"
                  }`}
                >
                  <div className="text-xs text-slate-600 md:text-sm">{feature.label}</div>
                  <div className="flex items-center justify-center">
                    <FeatureValue value={feature.starter} />
                  </div>
                  <div className="flex items-center justify-center">
                    <FeatureValue value={feature.professional} />
                  </div>
                  <div className="flex items-center justify-center">
                    <FeatureValue value={feature.enterprise} />
                  </div>
                </div>
              ))}
            </div>
          ))}

          {/* Bottom CTA row */}
          <div className="hidden grid-cols-4 border-t border-slate-200 px-8 py-6 md:grid">
            <div />
            <div className="flex justify-center">
              <ButtonOutline href="/contact">Get started</ButtonOutline>
            </div>
            <div className="flex justify-center">
              <ButtonGradient href="/contact">
                Talk to us <i className="ri-arrow-right-line" />
              </ButtonGradient>
            </div>
            <div className="flex justify-center">
              <ButtonOutline href="/contact">Contact us</ButtonOutline>
            </div>
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
