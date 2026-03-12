"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  { label: "Planning", icon: "ri-file-list-3-line" },
  { label: "Start order", icon: "ri-play-line" },
  { label: "Quality", icon: "ri-shield-check-line" },
  { label: "Assembly", icon: "ri-tools-line" },
  { label: "Packaging", icon: "ri-box-3-line" },
  { label: "Completion", icon: "ri-check-double-line" },
];

export default function Workflow() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const progressDesktopRef = useRef<HTMLDivElement>(null);
  const progressMobileRef = useRef<HTMLDivElement>(null);
  const iconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const labelsRef = useRef<(HTMLSpanElement | null)[]>([]);
  const mobileIconsRef = useRef<(HTMLDivElement | null)[]>([]);
  const mobileLabelsRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const totalSteps = steps.length;

    ScrollTrigger.create({
      trigger: section,
      start: "top 80%",
      end: "top 40%",
      scrub: 0.3,
      onUpdate: (self) => {
        const p = self.progress;
        const activeIndex = Math.min(
          Math.floor(p * totalSteps),
          totalSteps - 1
        );

        // Desktop progress
        if (progressDesktopRef.current) {
          progressDesktopRef.current.style.width = `${p * 100}%`;
        }

        // Mobile progress
        if (progressMobileRef.current) {
          progressMobileRef.current.style.height = `${p * 100}%`;
        }

        const updateIcons = (icons: (HTMLDivElement | null)[], labels: (HTMLSpanElement | null)[]) => {
          icons.forEach((icon, i) => {
            if (!icon) return;
            const iconEl = icon.querySelector("i");
            if (i <= activeIndex) {
              icon.style.borderColor = "#e2e8f0";
              icon.style.backgroundColor = "#1e293b";
              if (iconEl) {
                iconEl.style.backgroundImage = "linear-gradient(to bottom, #E8824F, #C70C5B)";
                iconEl.style.webkitBackgroundClip = "text";
                iconEl.style.webkitTextFillColor = "transparent";
              }
            } else {
              icon.style.borderColor = "#475569";
              icon.style.backgroundColor = "#1e293b";
              if (iconEl) {
                iconEl.style.backgroundImage = "none";
                iconEl.style.webkitBackgroundClip = "unset";
                iconEl.style.webkitTextFillColor = "#64748b";
              }
            }
          });

          labels.forEach((label, i) => {
            if (!label) return;
            label.style.color = i <= activeIndex ? "#e2e8f0" : "#64748b";
          });
        };

        updateIcons(iconsRef.current, labelsRef.current);
        updateIcons(mobileIconsRef.current, mobileLabelsRef.current);
      },
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
        <div className="px-4 pt-12 text-center md:px-8 md:pt-20">
          <h2 className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-50 md:text-[48px] md:tracking-[-1.44px]">
            Start with one workflow.
            <br />
            <span className="text-gradient">Scale</span> from there.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-sm font-normal text-slate-400 md:mt-7 md:text-base">
            Deploy individual production apps in weeks. Expand step by step —
            without risky, all-at-once rollouts.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonGradient href="/product">
              See modules <i className="ri-arrow-right-line" />
            </ButtonGradient>
          </div>
        </div>

        <div
          ref={sectionRef}
          className="mt-10 border-t border-dashed border-slate-600 md:mt-16"
        >
          <div className="mx-4 border-x border-dashed border-slate-600 md:mx-12">
            <div className="relative px-6 py-16 md:px-10 md:py-24">
              {/* Mobile: vertical layout */}
              <div className="block md:hidden">
                <div className="relative flex flex-col items-center gap-6">
                  {/* Background line */}
                  <div className="absolute left-1/2 w-[1px] -translate-x-1/2 border-l border-dashed border-slate-600" style={{ top: 22, bottom: 22 }} />

                  {/* Progress line */}
                  <div
                    ref={progressMobileRef}
                    className="absolute left-1/2 w-[1px] -translate-x-1/2 bg-slate-200"
                    style={{ top: 22, height: 0, transition: "none", maxHeight: "calc(100% - 44px)" }}
                  />

                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className="relative z-10 flex flex-col items-center gap-2"
                    >
                      <div
                        ref={(el) => { mobileIconsRef.current[i] = el; }}
                        className="flex h-11 w-11 items-center justify-center border border-slate-600 bg-slate-800 text-slate-400 transition-colors duration-300"
                      >
                        <i className={`${step.icon} text-lg`} />
                      </div>
                      <span
                        ref={(el) => { mobileLabelsRef.current[i] = el; }}
                        className="text-center text-[10px] leading-tight text-slate-500 transition-colors duration-300"
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop: horizontal layout */}
              <div className="hidden md:block">
                <div className="relative flex items-start justify-between">
                  {/* Background line */}
                  <div className="absolute top-[21px] h-[1px] border-t border-dashed border-slate-600" style={{ left: 22, right: 22 }} />

                  {/* Progress line */}
                  <div
                    ref={progressDesktopRef}
                    className="absolute top-[21px] h-[1px] w-0 bg-slate-200"
                    style={{ left: 22, transition: "none", maxWidth: "calc(100% - 44px)" }}
                  />

                  {steps.map((step, i) => (
                    <div
                      key={i}
                      className="relative z-10 flex flex-col items-center gap-2.5"
                    >
                      <div
                        ref={(el) => { iconsRef.current[i] = el; }}
                        className="flex h-11 w-11 items-center justify-center border border-slate-600 bg-slate-800 text-slate-400 transition-colors duration-300"
                      >
                        <i className={`${step.icon} text-lg`} />
                      </div>
                      <span
                        ref={(el) => { labelsRef.current[i] = el; }}
                        className="max-w-[72px] text-center text-[10px] leading-tight text-slate-500 transition-colors duration-300"
                      >
                        {step.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Mantsu bar */}
              <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2">
                <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#E8824F]" />
                <span className="flex items-center gap-1.5 text-[10px] font-normal uppercase tracking-widest text-slate-400">
                  Connected by{" "}
                  <img
                    src="/mantsu-icon.svg"
                    alt=""
                    className="inline h-3 w-3"
                  />{" "}
                  Mantsu
                </span>
                <div className="h-[1px] w-6 bg-gradient-to-r from-[#C70C5B] to-transparent" />
              </div>
            </div>
          </div>
          <div className="border-b border-solid border-slate-600" />
        </div>
        <div className="h-16" />
      </Wrapper>
    </div>
  );
}
