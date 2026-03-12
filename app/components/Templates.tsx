"use client";

import { useState } from "react";
import Image from "next/image";
import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

const tabs = [
  {
    label: "Downtimes",
    icon: "/icon-downtimes.svg",
    title: "Downtimes",
    image: "/downtimes.png",
    description:
      "With its user-friendly interface, operators and technicians can effortlessly record and monitor downtime events. It allows you to identify the causes, durations, and impact on production. By having a comprehensive overview of the situation, you can easily spot patterns and trends, enabling you to make more informed decisions. By analysing the underlying reasons for downtime, you can take proactive steps to enhance equipment reliability and streamline maintenance processes.",
  },
  {
    label: "Lists (SOP)",
    icon: "/icon-downtimes.svg",
    title: "Lists (SOP)",
    description:
      "Standardize your operating procedures with digital checklists. Ensure every step is followed, every time — reducing errors and improving consistency across shifts and teams.",
  },
  {
    label: "Quality Management",
    icon: "/icon-downtimes.svg",
    title: "Quality Management",
    description:
      "Track quality checks, defects, and corrective actions in real time. Gain full traceability from raw materials to finished goods and ensure compliance with industry standards.",
  },
  {
    label: "Order Cockpit",
    icon: "/icon-downtimes.svg",
    title: "Order Cockpit",
    description:
      "Get a real-time overview of all production orders. Monitor progress, track delays, and ensure on-time delivery with a centralized command center for your factory floor.",
  },
  {
    label: "Recipe Management",
    icon: "/icon-downtimes.svg",
    title: "Recipe Management",
    description:
      "Manage and version your production recipes digitally. Ensure consistent output quality and simplify changeovers between product variants.",
  },
  {
    label: "Insights",
    icon: "/icon-downtimes.svg",
    title: "Insights",
    description:
      "Turn production data into actionable intelligence. Dashboards and reports give managers the visibility they need to optimize performance and reduce waste.",
  },
  {
    label: "Communication Layer",
    icon: "/icon-downtimes.svg",
    title: "Communication Layer",
    description:
      "Connect your existing systems — ERP, PLC, SCADA — through a unified communication layer. No rip-and-replace, just seamless integration.",
  },
];

export default function Templates() {
  const [active, setActive] = useState(0);
  const tab = tabs[active];

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="px-6 pt-12 md:px-12 md:pt-20">
          <div className="mb-6 md:mb-10">
            <span className="font-mono text-[10px] uppercase text-slate-400">
              //&nbsp;&nbsp;TEMPLATES
            </span>
          </div>
          <h2 className="max-w-[425px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
            Start with <span className="text-gradient">proven</span> production templates.
          </h2>

          <div className="mt-6 mb-10 flex max-w-[600px] flex-wrap gap-1 md:mt-10 md:mb-16">
            {tabs.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`cursor-pointer rounded-full border px-4 py-1 text-sm font-medium transition-colors ${
                  i === active
                    ? "border-slate-300 bg-white text-slate-900"
                    : "border-slate-200 text-slate-500 hover:border-slate-300 hover:text-slate-700"
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        <div className="border-t border-slate-200">
          <div className="mx-4 border-x border-dashed border-slate-300 md:mx-12">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex flex-col justify-between p-6 md:p-8">
                <div>
                  <Image
                    src={tab.icon}
                    alt={tab.title}
                    width={48}
                    height={48}
                  />
                  <h3 className="mt-10 font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-900 md:mt-20">
                    {tab.title}
                  </h3>
                  <p className="mt-5 max-w-[400px] text-sm font-normal leading-5 text-slate-500">
                    {tab.description}
                  </p>
                </div>
                <div className="mt-8">
                  <ButtonGradient href="/product">
                    Learn more <i className="ri-arrow-right-line" />
                  </ButtonGradient>
                </div>
              </div>

              <div className="border-t border-slate-200 p-6 md:border-t-0 md:border-l md:p-16">
                <div className="overflow-hidden border border-slate-200 bg-white">
                  <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                    <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
                  </div>
                  <div className="relative h-[240px] bg-slate-50 md:h-[400px]">
                    {tab.image && (
                      <Image
                        src={tab.image}
                        alt={tab.title}
                        fill
                        className="object-cover object-top"
                      />
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
