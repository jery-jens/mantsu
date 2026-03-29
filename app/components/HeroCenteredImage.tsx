"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import ButtonGradient from "./ButtonGradient";
import ButtonOutline from "./ButtonOutline";
import { useHeroVariant } from "./HeroContext";
import HeroWidget from "./HeroWidget";
import Wrapper from "./Wrapper";

const slides = [
  { label: "Control room", key: "control-room" },
  { label: "Quality checks", key: "quality" },
  { label: "Machine connectivity", key: "connectivity" },
];

export default function HeroCenteredImage() {
  const { mode } = useHeroVariant();
  const dark = mode === "dark";
  const contentRef = useRef<HTMLDivElement>(null);
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
    if (contentRef.current) {
      gsap.fromTo(
        contentRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", stagger: 0.12 }
      );
    }
    if (visualRef.current) {
      gsap.fromTo(
        visualRef.current,
        { y: 60, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.5 }
      );
    }
  }, []);

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
    <div className={`border-b ${dark ? "border-slate-600 bg-slate-800" : "border-slate-200 bg-white"}`}>
      <Wrapper className={dark ? "border-slate-600" : ""}>
        {/* Text */}
        <div
          ref={contentRef}
          className="flex flex-col items-center px-6 pt-12 text-center md:pt-20"
        >
          <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
            //&nbsp;&nbsp;MODULAR PRODUCTION SOFTWARE
          </span>
          <h1 className={`mt-6 max-w-[720px] font-serif text-[32px] leading-none tracking-[-0.96px] md:text-[56px] md:tracking-[-2.24px] ${dark ? "text-slate-50" : "text-slate-900"}`}>
            Production shouldn&apos;t run on{" "}
            <span className="text-gradient">spreadsheets</span> and guesswork.
          </h1>
          <p className={`mt-6 max-w-[480px] text-base ${dark ? "text-slate-400" : "text-slate-500"}`}>
            Deploy modular production apps in 3 months, eliminate manual
            processes, and gain real-time control.
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

        {/* Widget visual */}
        <div
          ref={visualRef}
          className={`relative mt-10 border-t md:mt-16 ${dark ? "border-slate-600" : "border-slate-200"}`}
          style={{
            background: "linear-gradient(135deg, #E8824F, #C70C5B)",
          }}
        >
          <div className="mx-auto max-w-[700px] px-6 pb-16 pt-6 md:px-10 md:pb-20 md:pt-10">
            <div ref={slideRef}>
              <HeroWidget key={activeSlide} variant={slides[activeSlide].key} />
            </div>
          </div>

          {/* Slide tabs */}
          <div className="absolute bottom-4 left-0 right-0 flex justify-center md:bottom-6">
            <div className="relative flex gap-0.5">
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
      </Wrapper>
    </div>
  );
}
