"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { SplitText } from "gsap/SplitText";
import ButtonGradient from "./ButtonGradient";
import ButtonOutline from "./ButtonOutline";
import HeroWidget from "./HeroWidget";
import Wrapper from "./Wrapper";

gsap.registerPlugin(SplitText);

const slides = [
  { label: "Control room", key: "control-room" },
  { label: "Quality checks", key: "quality" },
  { label: "Machine connectivity", key: "connectivity" },
];

export default function Hero() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const visualRef = useRef<HTMLDivElement>(null);
  const slideRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeSlide, setActiveSlide] = useState(0);

  const movePill = useCallback((idx: number) => {
    const pill = pillRef.current;
    const tab = tabsRef.current[idx];
    const container = pill?.parentElement;
    if (!pill || !tab || !container) return;

    const containerRect = container.getBoundingClientRect();
    const tabRect = tab.getBoundingClientRect();

    gsap.to(pill, {
      x: tabRect.left - containerRect.left,
      width: tabRect.width,
      duration: 0.35,
      ease: "power2.out",
    });
  }, []);

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

    if (visualRef.current) {
      gsap.fromTo(visualRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }

    return () => split.revert();
  }, []);

  // Position pill on mount
  useEffect(() => {
    movePill(activeSlide);
  }, [activeSlide, movePill]);

  const switchSlide = useCallback((idx: number) => {
    if (idx === activeSlide || !slideRef.current) return;

    gsap.to(slideRef.current, {
      opacity: 0,
      y: 20,
      duration: 0.25,
      ease: "power2.in",
      onComplete: () => {
        setActiveSlide(idx);
        gsap.fromTo(slideRef.current, { opacity: 0, y: -20 }, {
          opacity: 1,
          y: 0,
          duration: 0.35,
          ease: "power2.out",
        });
      },
    });
  }, [activeSlide]);

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="flex flex-col md:grid md:grid-cols-2 md:min-h-[70vh]">
          {/* Left: text */}
          <section className="flex flex-col justify-center px-6 py-10 md:px-12">
            <h1
              ref={headingRef}
              className="invisible font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[56px] md:tracking-[-2.24px] [&_.hero-line]:overflow-hidden [&_.hero-line]:pb-2 [&_.hero-line]:-mb-2"
            >
              Production shouldn&apos;t run on <span className="text-gradient">spreadsheets</span> and guesswork.
            </h1>
            <p className="mt-6 max-w-[420px] text-base font-normal text-slate-600">
              Deploy modular production apps in 3 months, eliminate manual
              processes, and gain real-time control — without risky &quot;big
              bang&quot; MES projects.
            </p>
            <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-1">
              <ButtonGradient href="/contact" size="lg">
                Talk to us <i className="ri-arrow-right-line" />
              </ButtonGradient>
              <ButtonOutline href="/product" size="lg">See how it works</ButtonOutline>
            </div>
          </section>

          {/* Right: visual with gradient bg */}
          <div
            className="relative flex flex-col overflow-hidden border-t border-slate-200 md:border-t-0 md:border-l"
            style={{
              background: "linear-gradient(135deg, #E8824F, #C70C5B)",
            }}
          >
            {/* Slide content */}
            <div className="flex flex-1 items-center p-6 pb-16 md:p-10 md:pb-20">
              <div ref={visualRef} className="w-full">
                <div ref={slideRef}>
                  <HeroWidget key={activeSlide} variant={slides[activeSlide].key} />
                </div>
              </div>
            </div>

            {/* Slide tabs — centered bottom with sliding pill */}
            <div className="absolute bottom-4 left-0 right-0 flex justify-center md:bottom-6">
              <div className="relative flex gap-0.5">
                {/* Sliding pill background */}
                <div
                  ref={pillRef}
                  className="pointer-events-none absolute top-0 left-0 h-full rounded-full bg-white/20"
                  style={{ width: 0 }}
                />
                {slides.map((slide, i) => (
                  <button
                    key={slide.key}
                    ref={(el) => { tabsRef.current[i] = el; }}
                    onClick={() => switchSlide(i)}
                    onMouseEnter={() => movePill(i)}
                    onMouseLeave={() => movePill(activeSlide)}
                    className={`relative z-10 cursor-pointer rounded-full px-3.5 py-1.5 text-xs font-medium transition-colors duration-300 ${
                      i === activeSlide ? "text-white" : "text-white/60 hover:text-white/90"
                    }`}
                  >
                    {slide.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
