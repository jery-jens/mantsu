"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "./Wrapper";

gsap.registerPlugin(ScrollTrigger);

const features = [
  {
    label: "Modular architecture",
    title: "Modular architecture",
    description:
      "A flexible foundation designed to grow with your production environment.",
    checks: [
      "Deploy standalone production apps or combine them seamlessly",
      "Start small and expand without full-system replacement",
      "Avoid risky, monolithic MES implementations",
    ],
  },
  {
    label: "Cloud-native foundation",
    title: "Cloud-native foundation",
    description:
      "Built on modern cloud infrastructure for reliability, speed, and global access.",
    checks: [
      "Automatic updates with zero factory downtime",
      "Secure, scalable infrastructure out of the box",
      "Access your production data from anywhere",
    ],
  },
  {
    label: "Multi-device access",
    title: "Multi-device access",
    description:
      "Designed to work on any screen — from shop-floor tablets to executive dashboards.",
    checks: [
      "Responsive interfaces for tablets, phones, and desktops",
      "Consistent experience across all devices",
      "Offline-capable for unreliable factory networks",
    ],
  },
  {
    label: "Role-based workflows",
    title: "Role-based workflows",
    description:
      "Tailor every screen and action to the person using it — operators, leads, or managers.",
    checks: [
      "Custom views per role and responsibility",
      "Reduce complexity by showing only what matters",
      "Enforce process compliance through guided workflows",
    ],
  },
  {
    label: "Connected operations",
    title: "Connected operations",
    description:
      "Bridge the gap between your machines, systems, and people in one unified layer.",
    checks: [
      "Integrate with ERP, PLC, SCADA, and more",
      "Real-time data flow across your entire operation",
      "Eliminate manual data entry and information silos",
    ],
  },
];

const stats = [
  { num: 3, prefix: "", suffix: " months", description: "Average time to first production" },
  { num: 30, prefix: "–", suffix: "% downtime", description: "Reported reduction after Mantsu" },
  { num: 100, prefix: "", suffix: "% connected", description: "Machines, operators and systems" },
  { num: 24, prefix: "", suffix: "/7 secure", description: "Encrypted data in transit and at rest" },
];

function CountUp({ num, prefix, suffix }: { num: number; prefix: string; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const triggered = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 90%",
      onEnter: () => {
        if (triggered.current) return;
        triggered.current = true;
        gsap.to(obj, {
          val: num,
          duration: 1.5,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
          },
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
    };
  }, [num, prefix, suffix]);

  return (
    <span ref={ref}>
      {prefix}0{suffix}
    </span>
  );
}

export default function Features() {
  const [active, setActive] = useState(0);
  const feature = features[active];

  return (
    <div className="border-b border-slate-600 bg-slate-800">
      <Wrapper className="border-slate-600">
        {/* Features tabs section */}
        <div className="flex flex-col md:grid md:grid-cols-[480px_1fr]">
          {/* Sidebar */}
          <div className="border-b border-slate-600 px-6 py-6 md:border-b-0 md:border-r md:px-8 md:py-8">
            <span className="font-mono text-[10px] uppercase text-slate-400">
              //&nbsp;&nbsp;FEATURES
            </span>
            <div className="mt-6 flex flex-wrap gap-2 md:mt-10 md:flex-col md:gap-0">
              {features.map((f, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`flex cursor-pointer items-center gap-3 rounded-full border px-4 py-1.5 text-left text-sm font-medium transition-colors md:rounded-none md:border-0 md:px-0 md:py-[5px] ${
                    i === active
                      ? "border-slate-500 text-slate-50 md:border-transparent"
                      : "border-slate-700 text-slate-400 hover:text-slate-200 md:border-transparent"
                  }`}
                >
                  <span
                    className={`hidden h-1.5 w-1.5 shrink-0 rounded-full md:block ${
                      i === active
                        ? "bg-gradient-to-b from-[#E8824F] to-[#C70C5B]"
                        : "bg-transparent"
                    }`}
                  />
                  {f.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex flex-col justify-between px-6 py-6 md:px-8 md:py-8">
            <div>
              <h3 className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-50 md:text-[32px] md:tracking-[-0.96px]">
                {feature.title}
              </h3>
              <p className="mt-5 max-w-[400px] text-sm font-normal leading-5 text-slate-400">
                {feature.description}
              </p>
              <div className="mt-6 flex flex-col gap-2">
                {feature.checks.map((check, i) => (
                  <div key={i} className="flex items-center gap-2.5">
                    <i className="ri-check-line text-slate-400" />
                    <span className="text-sm font-normal text-slate-300">
                      {check}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <a
              href="/product"
              className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-slate-50 hover:text-slate-300 md:mt-16"
            >
              Read more <i className="ri-arrow-right-line" />
            </a>
          </div>
        </div>

        {/* Enterprise-grade foundation */}
        <div className="border-t border-slate-600">
          <div className="flex flex-col md:grid md:grid-cols-[1fr_auto]">
            <div className="px-6 py-6 md:px-8 md:py-8">
              <span className="font-mono text-[10px] uppercase text-slate-400">
                //&nbsp;&nbsp;ENTERPRISE-GRADE FOUNDATION
              </span>
              <h3 className="mt-6 font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-50 md:mt-10 md:text-[32px] md:tracking-[-0.96px]">
                Built secure. Designed to scale.
              </h3>
              <p className="mt-5 max-w-[400px] text-sm font-normal leading-5 text-slate-400">
                Mantsu is engineered for modern manufacturing environments
                — combining cloud-native architecture, role-based access
                control, and secure machine connectivity to support
                production at scale.
              </p>
            </div>
            <div className="flex items-center gap-4 px-6 pb-6 md:px-8 md:pb-0">
              <Image src="/badge-soc-1.svg" alt="AICPA SOC" width={100} height={100} />
              <Image src="/badge-soc-2.svg" alt="AICPA SOC" width={100} height={100} />
              <Image src="/badge-soc-2.svg" alt="AICPA SOC" width={100} height={100} />
            </div>
          </div>
        </div>

        {/* Stats bar */}
        <div className="grid grid-cols-2 border-t border-slate-600 md:grid-cols-4">
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-6 md:px-8 md:py-8 ${
                i < 3 ? "md:border-r md:border-slate-600" : ""
              } ${i % 2 === 0 ? "border-r border-slate-600 md:border-r-0" : ""} ${
                i < 2 ? "border-b border-slate-600 md:border-b-0" : ""
              } ${i < 3 ? "md:border-r" : ""}`}
            >
              <p className="font-serif text-[24px] leading-none tracking-[-0.72px] text-slate-50 md:text-[32px] md:tracking-[-0.96px]">
                <CountUp num={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-xs font-normal text-slate-400 md:text-sm">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
