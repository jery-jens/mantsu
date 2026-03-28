"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

gsap.registerPlugin(ScrollTrigger);

const modules = [
  {
    label: "Downtime Tracking",
    icon: "ri-time-line",
    description: "See every stop, instantly",
    active: true,
  },
  {
    label: "Quality Control",
    icon: "ri-shield-check-line",
    description: "Digital inspections & sign-offs",
    active: true,
  },
  {
    label: "Shift Handover",
    icon: "ri-swap-box-line",
    description: "Structured shift logs",
    active: true,
  },
  {
    label: "OEE Dashboards",
    icon: "ri-bar-chart-2-line",
    description: "Real-time performance",
    active: false,
  },
  {
    label: "Maintenance",
    icon: "ri-tools-line",
    description: "Operator-initiated tickets",
    active: false,
  },
  {
    label: "Scheduling",
    icon: "ri-calendar-schedule-line",
    description: "Drag-and-drop planning",
    active: false,
  },
  {
    label: "Traceability",
    icon: "ri-route-line",
    description: "Batch & material tracking",
    active: false,
  },
  {
    label: "Connectivity",
    icon: "ri-plug-line",
    description: "PLC, OPC-UA, SCADA",
    active: false,
  },
];

export default function Workflow() {
  const blocksRef = useRef<(HTMLDivElement | null)[]>([]);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    blocksRef.current.forEach((block, i) => {
      if (!block) return;

      gsap.fromTo(
        block,
        { y: 40, opacity: 0, scale: 0.95 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 75%",
            toggleActions: "play none none none",
          },
          delay: i * 0.08,
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <div className="border-b border-slate-600 bg-slate-800">
      <Wrapper className="border-slate-600">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Left: copy */}
          <div className="flex flex-col justify-center border-b border-slate-600 px-6 py-12 md:border-b-0 md:border-r md:px-12 md:py-20">
            <span className="font-mono text-[10px] uppercase text-slate-400">
              //&nbsp;&nbsp;MODULAR BY DESIGN
            </span>
            <h2 className="mt-6 font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-50 md:mt-10 md:text-[48px] md:tracking-[-1.44px]">
              Start with one.
              <br />
              <span className="text-gradient">Stack</span> as you grow.
            </h2>
            <p className="mt-5 max-w-[400px] text-sm font-normal leading-relaxed text-slate-400 md:mt-7 md:text-base">
              Each module is a standalone production app. Deploy one in weeks,
              add more when you&apos;re ready — no dependencies, no big bang.
            </p>
            <div className="mt-8">
              <ButtonGradient href="/pricing">
                See modules <i className="ri-arrow-right-line" />
              </ButtonGradient>
            </div>
          </div>

          {/* Right: module blocks grid */}
          <div ref={sectionRef}>
            <div className="grid grid-cols-1 sm:grid-cols-2">
              {modules.map((mod, i) => (
                <div
                  key={mod.label}
                  ref={(el) => { blocksRef.current[i] = el; }}
                  className={`group relative flex flex-col gap-4 border-b border-dashed border-slate-600 p-5 transition-all md:p-5 ${
                    i % 2 === 0 ? "sm:border-r" : ""
                  } ${i === modules.length - 1 ? "border-b-0" : ""} ${i >= modules.length - 2 ? "sm:border-b-0" : ""} ${
                    mod.active ? "bg-slate-700/30" : "bg-transparent"
                  }`}
                >
                  {mod.active && (
                    <span
                      className="absolute right-4 top-4 flex h-5 items-center rounded-full px-2 text-[10px] font-medium text-white"
                      style={{ background: "linear-gradient(to right, #E8824F, #C70C5B)" }}
                    >
                      Active
                    </span>
                  )}
                  {!mod.active && (
                    <i className="ri-add-line absolute right-4 top-4 text-sm text-slate-600" />
                  )}
                  <div
                    className={`flex h-9 w-9 items-center justify-center ${
                      mod.active ? "bg-slate-600" : "bg-slate-700/50"
                    }`}
                  >
                    <i
                      className={`${mod.icon} text-base ${
                        mod.active ? "text-slate-50" : "text-slate-500"
                      }`}
                    />
                  </div>

                  <div>
                    <p
                      className={`text-sm font-medium ${
                        mod.active ? "text-slate-50" : "text-slate-500"
                      }`}
                    >
                      {mod.label}
                    </p>
                    <p
                      className={`mt-0.5 text-xs ${
                        mod.active ? "text-slate-400" : "text-slate-600"
                      }`}
                    >
                      {mod.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

          </div>
        </div>
      </Wrapper>
    </div>
  );
}
