"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Wrapper from "./Wrapper";

gsap.registerPlugin(SplitText, ScrollTrigger);

export default function Statement() {
  const textRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const split = SplitText.create(el, { type: "chars" });

    gsap.set(split.chars, { opacity: 0.1 });
    gsap.set(el, { visibility: "visible" });

    gsap.to(split.chars, {
      opacity: 1,
      duration: 0.3,
      stagger: 0.02,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        end: "bottom 40%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === el) t.kill();
      });
      split.revert();
    };
  }, []);

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="px-4 py-16 md:px-8 md:py-24">
          <p
            ref={textRef}
            className="invisible mx-auto max-w-[900px] text-center font-serif text-[28px] leading-[1.3] tracking-[-0.84px] text-slate-900 md:text-[44px] md:leading-[1.2] md:tracking-[-1.32px]"
          >
            Factories still run on disconnected spreadsheets, outdated MES
            systems, and manual workarounds. It&apos;s time for software that
            actually fits the shop floor.
          </p>
        </div>
      </Wrapper>
    </div>
  );
}
