"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import ButtonGradient from "./ButtonGradient";
import ButtonOutline from "./ButtonOutline";
import { useHeroVariant } from "./HeroContext";
import Wrapper from "./Wrapper";

export default function HeroCentered() {
  const { mode } = useHeroVariant();
  const dark = mode === "dark";
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );
    }
  }, []);

  return (
    <div className={`border-b ${dark ? "border-slate-600 bg-slate-800" : "border-slate-200 bg-slate-50"}`}>
      <Wrapper className={`${dark ? "border-slate-600" : ""} overflow-hidden`}>
        <div
          className="relative flex flex-col items-center px-6 py-16 text-center md:py-28"
        >
          {/* Gradient glow */}
          <div
            className="pointer-events-none absolute inset-0"
            style={{
              background: dark
                ? "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(232,130,79,0.3) 0%, rgba(199,12,91,0.15) 40%, transparent 70%)"
                : "radial-gradient(ellipse 80% 50% at 50% 110%, rgba(232,130,79,0.15) 0%, rgba(199,12,91,0.08) 40%, transparent 70%)",
            }}
          />
          <div ref={contentRef} className="relative flex flex-col items-center">
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            //&nbsp;&nbsp;MODULAR PRODUCTION SOFTWARE
          </span>
          <h1 className={`mt-6 max-w-[780px] font-serif text-[32px] leading-none tracking-[-0.96px] md:text-[64px] md:tracking-[-2.56px] ${dark ? "text-slate-50" : "text-slate-900"}`}>
            The modular MES built for{" "}
            <span className="text-gradient">how factories actually work.</span>
          </h1>
          <p className={`mt-6 max-w-[520px] text-base ${dark ? "text-slate-400" : "text-slate-500"}`}>
            Deploy modular production apps in 3 months, eliminate manual
            processes, and gain real-time control — without risky &quot;big
            bang&quot; MES projects.
          </p>
          <div className="mt-8 flex flex-col gap-2 sm:flex-row sm:gap-1">
            <ButtonGradient href="/contact" size="lg">
              Talk to us <i className="ri-arrow-right-line" />
            </ButtonGradient>
            <ButtonOutline href="/product" size="lg" variant={dark ? "dark" : "light"}>
              See how it works
            </ButtonOutline>
          </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
