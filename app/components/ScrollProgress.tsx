"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollProgress() {
  const barRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    if (!bar) return;

    ScrollTrigger.create({
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      onUpdate: (self) => {
        bar.style.width = `${self.progress * 100}%`;
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === document.documentElement) t.kill();
      });
    };
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-[60] h-[2px] bg-transparent">
      <div
        ref={barRef}
        className="h-full w-0"
        style={{
          background: "linear-gradient(to right, #E8824F, #C70C5B)",
        }}
      />
    </div>
  );
}
