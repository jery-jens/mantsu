"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import gsap from "gsap";
import Wrapper from "./Wrapper";

interface TextTestimonial {
  type: "text";
  quote: string;
  name: string;
  role: string;
}

interface VideoTestimonial {
  type: "video";
  quote: string;
  name: string;
  role: string;
  videoUrl: string;
  thumbnailUrl?: string;
}

type Testimonial = TextTestimonial | VideoTestimonial;

const testimonials: Testimonial[] = [
  {
    type: "text",
    quote:
      "\u201CWe were looking at a two-year MES project. With Mantsu, we had our first production apps live in under three months \u2014 and we saw downtime drop almost immediately.\u201D",
    name: "Marc De Smet",
    role: "COO, European Packaging Group",
  },
  {
    type: "video",
    quote:
      "\u201CMantsu gave us the flexibility to start small and scale. We digitized one line in weeks, and now we\u2019re rolling out across three plants.\u201D",
    name: "Sophie Janssen",
    role: "VP Operations, NordSteel Industries",
    videoUrl: "#",
  },
  {
    type: "text",
    quote:
      "\u201CThe modular approach meant we didn\u2019t have to rip and replace. We layered Mantsu on top of our existing systems and saw ROI in the first quarter.\u201D",
    name: "Thomas Müller",
    role: "CTO, Precision Manufacturing AG",
  },
];

function QuoteSlide({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-8">
      <p className="max-w-[480px] font-serif text-[18px] leading-[1.4] tracking-[-0.54px] text-slate-50 md:text-[24px] md:tracking-[-0.72px]">
        {testimonial.quote}
      </p>
      <div className="flex items-center gap-4">
        <div className="h-10 w-10 shrink-0 rounded-full bg-slate-600" />
        <div>
          <p className="text-sm font-medium text-slate-50">
            {testimonial.name}
          </p>
          <p className="text-sm font-normal text-slate-400">
            {testimonial.role}
          </p>
        </div>
      </div>
    </div>
  );
}

function GridLines() {
  return (
    <>
      <div className="absolute left-[88px] top-0 h-full border-l border-dashed border-slate-600" />
      <div className="absolute left-[392px] top-0 h-full border-l border-dashed border-slate-600" />
      <div className="absolute left-0 top-[88px] w-full border-t border-dashed border-slate-600" />
      <div className="absolute left-0 top-[392px] w-full border-t border-dashed border-slate-600" />
    </>
  );
}

function LogoPlaceholder() {
  return (
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <div className="h-8 w-[153px] rounded bg-slate-600" />
    </div>
  );
}

function VideoPanel({ testimonial }: { testimonial: VideoTestimonial }) {
  return (
    <a
      href={testimonial.videoUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group absolute inset-0 flex items-center justify-center bg-slate-700"
    >
      {testimonial.thumbnailUrl ? (
        <img
          src={testimonial.thumbnailUrl}
          alt=""
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : null}
      <div className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-sm transition-transform group-hover:scale-110">
        <i className="ri-play-fill text-2xl text-white" />
      </div>
      <div className="absolute bottom-4 left-4 flex items-center gap-1.5">
        <span className="rounded bg-white/10 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-white/80 backdrop-blur-sm">
          Watch video
        </span>
      </div>
    </a>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);
  const mobileQuoteRef = useRef<HTMLDivElement>(null);
  const desktopQuoteRef = useRef<HTMLDivElement>(null);
  const desktopLeftRef = useRef<HTMLDivElement>(null);
  const isAnimating = useRef(false);
  const prevTypeRef = useRef(testimonials[0].type);

  const current = testimonials[active];
  const isVideo = current.type === "video";

  const goTo = useCallback(
    (next: number) => {
      if (isAnimating.current || next === active) return;
      isAnimating.current = true;

      const currentType = testimonials[active].type;
      const nextType = testimonials[next].type;
      const typeChanges = currentType !== nextType;

      const targets = [
        mobileQuoteRef.current?.children[0],
        desktopQuoteRef.current?.children[0],
        ...(typeChanges ? [desktopLeftRef.current] : []),
      ].filter(Boolean) as HTMLElement[];

      const tl = gsap.timeline({
        onComplete: () => {
          setActive(next);
          isAnimating.current = false;
        },
      });

      targets.forEach((el) => {
        tl.to(
          el,
          { y: 80, duration: 0.5, ease: "power2.in" },
          0
        );
      });
    },
    [active]
  );

  useEffect(() => {
    const prevType = prevTypeRef.current;
    const currType = testimonials[active].type;
    const typeChanged = prevType !== currType;
    prevTypeRef.current = currType;

    const targets = [
      mobileQuoteRef.current?.children[0],
      desktopQuoteRef.current?.children[0],
      ...(typeChanged ? [desktopLeftRef.current] : []),
    ].filter(Boolean) as HTMLElement[];

    targets.forEach((el) => {
      gsap.fromTo(
        el,
        { y: -80 },
        { y: 0, duration: 0.5, ease: "power2.out" }
      );
    });
  }, [active]);

  useEffect(() => {
    const interval = setInterval(() => {
      const next = (active + 1) % testimonials.length;
      goTo(next);
    }, 10000);
    return () => clearInterval(interval);
  }, [active, goTo]);

  return (
    <div className="border-b border-slate-600 bg-slate-800">
      <Wrapper className="border-slate-600">
        {/* Mobile: stacked layout */}
        <div className="flex flex-col overflow-hidden md:hidden">
          <div ref={mobileQuoteRef}>
            <div>
              {isVideo && (
                <div className="relative aspect-video w-full border-b border-slate-600">
                  <VideoPanel testimonial={current as VideoTestimonial} />
                </div>
              )}
              <div className="relative h-[280px]">
                <QuoteSlide testimonial={current} />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center gap-2 border-t border-slate-600 py-4">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex h-4 w-4 cursor-pointer items-center justify-center"
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                    i === active
                      ? "bg-gradient-to-b from-[#E8824F] to-[#C70C5B]"
                      : "bg-slate-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>

        {/* Desktop: grid layout */}
        <div className="hidden md:grid md:grid-cols-[480px_1fr_32px]">
          {/* Left panel: grid lines always visible, content swaps */}
          <div className="relative h-[480px] overflow-hidden border-r border-slate-600">
            <GridLines />
            <div ref={desktopLeftRef} className="absolute inset-0">
              {isVideo ? (
                <VideoPanel testimonial={current as VideoTestimonial} />
              ) : (
                <LogoPlaceholder />
              )}
            </div>
          </div>

          {/* Quote content */}
          <div ref={desktopQuoteRef} className="relative overflow-hidden">
            <QuoteSlide testimonial={current} />
          </div>

          {/* Navigation dots */}
          <div className="flex flex-col items-center justify-center gap-1 border-l border-slate-600">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                className="flex h-4 w-4 cursor-pointer items-center justify-center"
              >
                <span
                  className={`block h-1.5 w-1.5 rounded-full transition-colors ${
                    i === active
                      ? "bg-gradient-to-b from-[#E8824F] to-[#C70C5B]"
                      : "bg-slate-600"
                  }`}
                />
              </button>
            ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
