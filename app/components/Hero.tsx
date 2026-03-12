"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ButtonGradient from "./ButtonGradient";
import ButtonOutline from "./ButtonOutline";
import Wrapper from "./Wrapper";

gsap.registerPlugin(SplitText);

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!headingRef.current) return;

    const split = SplitText.create(headingRef.current, {
      type: "lines",
      linesClass: "hero-line",
    });

    gsap.set(headingRef.current, { visibility: "visible" });

    gsap.from(split.lines, {
      yPercent: 100,
      opacity: 0,
      filter: "blur(8px)",
      duration: 0.8,
      ease: "power3.out",
      stagger: 0.12,
    });

    return () => split.revert();
  }, []);

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <section className="flex flex-col items-center px-4 py-10 md:px-8 md:py-16">
          <div className="max-w-[440px] text-center md:max-w-[660px]">
            <h1
              ref={headingRef}
              className="invisible font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.92px] [&_.hero-line]:overflow-hidden [&_.hero-line]:pb-2 [&_.hero-line]:-mb-2"
            >
              Production shouldn&apos;t run on spreadsheets and guesswork.
            </h1>
            <p className="mt-6 text-base font-normal text-slate-600">
              Deploy modular production apps in 3 months, eliminate manual
              processes, and gain real-time control — without risky &quot;big
              bang&quot; MES projects.
            </p>
          </div>
          <div className="mt-6 flex flex-col items-center gap-2 sm:mt-8 sm:flex-row sm:gap-1">
            <ButtonGradient href="/contact">
              Talk to us <i className="ri-arrow-right-line" />
            </ButtonGradient>
            <ButtonOutline href="/product">See how it works</ButtonOutline>
          </div>
        </section>
      </Wrapper>
    </div>
  );
}
