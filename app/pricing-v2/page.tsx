"use client";

import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Divider from "../components/Divider";
import Cta from "../components/Cta";
import Footer from "../components/Footer";
import ButtonGradient from "../components/ButtonGradient";
import ButtonOutline from "../components/ButtonOutline";

const BASE_PRICE = 1200;
const MODULE_PRICE = 350;
const EXTRA_USER_PRICE = 35;
const INCLUDED_USERS = 25;
const ANNUAL_DISCOUNT = 0.15;

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
    id: "downtime",
    name: "Downtime Tracking",
    description: "Log, categorize, and analyze machine stops in real time.",
    icon: "ri-time-line",
  },
  {
    id: "quality",
    name: "Quality Inspections",
    description: "Digital checklists, measurements, and sign-off workflows.",
    icon: "ri-shield-check-line",
  },
  {
    id: "handover",
    name: "Shift Handover",
    description: "Structured shift logs with notes, issues, and follow-ups.",
    icon: "ri-swap-box-line",
  },
  {
    id: "oee",
    name: "OEE Monitoring",
    description: "Live OEE dashboards connected to machine data.",
    icon: "ri-bar-chart-2-line",
  },
  {
    id: "maintenance",
    name: "Maintenance Requests",
    description: "Operator-initiated maintenance tickets with photo and priority.",
    icon: "ri-tools-line",
  },
  {
    id: "scheduling",
    name: "Production Scheduling",
    description: "Drag-and-drop scheduling linked to orders and capacity.",
    icon: "ri-calendar-schedule-line",
  },
  {
    id: "traceability",
    name: "Batch Traceability",
    description: "Track raw materials, batches, and outputs across production steps.",
    icon: "ri-route-line",
  },
  {
    id: "connectivity",
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

export default function PricingV2Page() {
  const [selected, setSelected] = useState<Set<string>>(new Set(["downtime"]));
  const [users, setUsers] = useState(25);
  const [annual, setAnnual] = useState(false);

  const toggleModule = (id: string) => {
    setSelected((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id);
      } else {
        next.add(id);
      }
      return next;
    });
  };

  const moduleCount = selected.size;
  const extraUsers = Math.max(0, users - INCLUDED_USERS);
  const monthlyBase = BASE_PRICE;
  const monthlyModules = moduleCount * MODULE_PRICE;
  const monthlyUsers = extraUsers * EXTRA_USER_PRICE;
  const monthlyTotal = monthlyBase + monthlyModules + monthlyUsers;
  const total = annual ? Math.round(monthlyTotal * (1 - ANNUAL_DISCOUNT)) : monthlyTotal;
  const annualSavings = annual ? monthlyTotal * 12 - total * 12 : 0;

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

            {/* Annual / Monthly toggle */}
            <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-slate-200 bg-white px-1.5 py-1.5">
              <button
                onClick={() => setAnnual(false)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  !annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setAnnual(true)}
                className={`cursor-pointer rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                  annual ? "bg-slate-900 text-white" : "text-slate-500 hover:text-slate-900"
                }`}
              >
                Annual
                <span className="ml-1.5 text-xs text-emerald-500">-15%</span>
              </button>
            </div>
          </section>
        </Wrapper>
      </div>

      <Divider />

      {/* Calculator */}
      <div className="border-b border-slate-200 bg-slate-50">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-[1fr_380px]">
            {/* Left: Configuration */}
            <div className="border-b border-slate-200 md:border-b-0 md:border-r">
              {/* Base fee */}
              <div className="border-b border-slate-200 p-6 md:p-8">
                <div className="flex items-start justify-between">
                  <div>
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
                  </div>
                  <div className="hidden shrink-0 text-right md:block">
                    <p className="font-serif text-[36px] leading-none tracking-[-1.08px] text-slate-900">
                      €{monthlyBase.toLocaleString()}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">/month</p>
                  </div>
                </div>
                <div className="mt-4 md:hidden">
                  <p className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
                    €{monthlyBase.toLocaleString()}
                    <span className="ml-1 text-sm font-normal text-slate-400">/month</span>
                  </p>
                </div>
                <ul className="mt-6 grid grid-cols-1 gap-2 sm:grid-cols-2">
                  {baseIncludes.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-sm text-slate-600">
                      <i className="ri-check-line text-emerald-600" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* User slider */}
              <div className="border-b border-slate-200 p-6 md:p-8">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  //&nbsp;&nbsp;TEAM SIZE
                </span>
                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-slate-500">
                    {INCLUDED_USERS} users included. Additional users at €{EXTRA_USER_PRICE}/user/month.
                  </p>
                </div>
                <div className="mt-6">
                  <div className="flex items-center justify-between">
                    <span className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900">
                      {users}
                    </span>
                    <span className="text-sm text-slate-400">users</span>
                  </div>
                  <input
                    type="range"
                    min={5}
                    max={200}
                    step={5}
                    value={users}
                    onChange={(e) => setUsers(Number(e.target.value))}
                    className="mt-4 h-1.5 w-full cursor-pointer appearance-none rounded-full bg-slate-200 accent-slate-900 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-slate-900"
                  />
                  <div className="mt-2 flex justify-between text-xs text-slate-400">
                    <span>5</span>
                    <span>200+</span>
                  </div>
                </div>
                {extraUsers > 0 && (
                  <p className="mt-4 text-sm text-slate-500">
                    {extraUsers} extra user{extraUsers !== 1 ? "s" : ""} = €{monthlyUsers.toLocaleString()}/month
                  </p>
                )}
              </div>

              {/* Module picker */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                      //&nbsp;&nbsp;PRODUCTION MODULES
                    </span>
                    <p className="mt-2 text-sm text-slate-500">
                      €{MODULE_PRICE}/module/month — pick what your factory needs.
                    </p>
                  </div>
                  <span className="hidden text-sm font-medium text-slate-900 md:block">
                    {moduleCount} selected
                  </span>
                </div>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {modules.map((mod) => {
                    const isSelected = selected.has(mod.id);

                    return (
                      <button
                        key={mod.id}
                        onClick={() => toggleModule(mod.id)}
                        className={`flex cursor-pointer items-start gap-3 border p-4 text-left transition-all duration-200 ${
                          isSelected
                            ? "border-slate-900 bg-slate-900"
                            : "border-slate-200 bg-white hover:border-slate-300"
                        }`}
                      >
                        <i
                          className={`${mod.icon} mt-0.5 text-lg ${
                            isSelected ? "text-white" : "text-slate-400"
                          }`}
                        />
                        <div className="flex-1">
                          <p
                            className={`text-sm font-medium ${
                              isSelected ? "text-white" : "text-slate-900"
                            }`}
                          >
                            {mod.name}
                          </p>
                          <p
                            className={`mt-1 text-xs leading-relaxed ${
                              isSelected ? "text-slate-400" : "text-slate-500"
                            }`}
                          >
                            {mod.description}
                          </p>
                        </div>
                        <div
                          className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                            isSelected
                              ? "border-white bg-white"
                              : "border-slate-300"
                          }`}
                        >
                          {isSelected && (
                            <i className="ri-check-line text-xs text-slate-900" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Right: Calculator summary (sticky) */}
            <div className="p-6 md:p-8">
              <div className="md:sticky md:top-[120px]">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  //&nbsp;&nbsp;YOUR ESTIMATE
                </span>

                {annual && (
                  <div className="mt-4 flex items-center gap-2 rounded border border-emerald-200 bg-emerald-50 px-3 py-2">
                    <i className="ri-discount-percent-line text-emerald-600" />
                    <span className="text-xs font-medium text-emerald-700">
                      Annual billing saves you €{annualSavings.toLocaleString()}/year
                    </span>
                  </div>
                )}

                <div className={`${annual ? "mt-4" : "mt-6"} space-y-4`}>
                  <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                    <span className="text-sm text-slate-600">Base platform</span>
                    <span className="text-sm font-medium text-slate-900">
                      €{monthlyBase.toLocaleString()}
                    </span>
                  </div>

                  <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                    <span className="text-sm text-slate-600">
                      {moduleCount} module{moduleCount !== 1 ? "s" : ""} × €{MODULE_PRICE}
                    </span>
                    <span className="text-sm font-medium text-slate-900">
                      €{monthlyModules.toLocaleString()}
                    </span>
                  </div>

                  {extraUsers > 0 && (
                    <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                      <span className="text-sm text-slate-600">
                        {extraUsers} extra user{extraUsers !== 1 ? "s" : ""} × €{EXTRA_USER_PRICE}
                      </span>
                      <span className="text-sm font-medium text-slate-900">
                        €{monthlyUsers.toLocaleString()}
                      </span>
                    </div>
                  )}

                  {/* Selected modules list */}
                  {moduleCount > 0 && (
                    <div className="space-y-1.5 border-b border-dashed border-slate-200 pb-4">
                      {modules
                        .filter((m) => selected.has(m.id))
                        .map((m) => (
                          <div key={m.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                              <i className={`${m.icon} text-xs text-slate-400`} />
                              <span className="text-xs text-slate-500">{m.name}</span>
                            </div>
                            <button
                              onClick={() => toggleModule(m.id)}
                              className="cursor-pointer text-xs text-slate-400 hover:text-red-500"
                            >
                              <i className="ri-close-line" />
                            </button>
                          </div>
                        ))}
                    </div>
                  )}

                  {annual && (
                    <div className="flex items-center justify-between border-b border-dashed border-slate-200 pb-4">
                      <span className="text-sm text-emerald-600">Annual discount (15%)</span>
                      <span className="text-sm font-medium text-emerald-600">
                        −€{(monthlyTotal - total).toLocaleString()}
                      </span>
                    </div>
                  )}

                  <div className="flex items-end justify-between pt-2">
                    <div>
                      <span className="text-sm font-medium text-slate-900">Total</span>
                      {annual && (
                        <p className="text-xs text-slate-400">
                          €{(total * 12).toLocaleString()}/year
                        </p>
                      )}
                    </div>
                    <div className="text-right">
                      {annual && (
                        <p className="text-sm text-slate-400 line-through">
                          €{monthlyTotal.toLocaleString()}
                        </p>
                      )}
                      <p className="font-serif text-[40px] leading-none tracking-[-1.2px] text-slate-900">
                        €{total.toLocaleString()}
                      </p>
                      <p className="mt-1 text-sm text-slate-400">/month</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8 flex flex-col gap-2">
                  <ButtonGradient href="/contact">
                    Get started <i className="ri-arrow-right-line" />
                  </ButtonGradient>
                  <ButtonOutline href="/contact">Talk to sales</ButtonOutline>
                </div>

                <p className="mt-6 text-xs leading-relaxed text-slate-400">
                  Need 200+ users, custom SLAs, or on-premise deployment?{" "}
                  <a href="/contact" className="text-slate-600 hover:text-slate-900">
                    Contact us
                  </a>{" "}
                  for enterprise pricing.
                </p>
              </div>
            </div>
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

      <Cta />
      <Divider />
      <Footer />
      <Divider variant="dark" />
    </main>
  );
}
