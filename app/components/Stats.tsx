"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useHeroVariant } from "./HeroContext";
import Wrapper from "./Wrapper";

gsap.registerPlugin(ScrollTrigger);

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

interface StatsProps {
  variant?: "light" | "dark";
}

export default function Stats({ variant = "light" }: StatsProps) {
  const { mode } = useHeroVariant();
  const isLight = variant === "dark" ? mode === "light" : variant === "light";

  return (
    <div className={`border-b ${isLight ? "border-slate-200 bg-slate-50" : "border-slate-600 bg-slate-800"}`}>
      <Wrapper className={isLight ? "" : "border-slate-600"}>
        <div className={`grid grid-cols-2 md:grid-cols-4`}>
          {stats.map((stat, i) => (
            <div
              key={i}
              className={`px-6 py-6 md:px-8 md:py-8 ${
                i < 3 ? `md:border-r ${isLight ? "md:border-slate-200" : "md:border-slate-600"}` : ""
              } ${i % 2 === 0 ? `border-r ${isLight ? "border-slate-200" : "border-slate-600"}` : ""} ${
                i < 2 ? `border-b ${isLight ? "border-slate-200" : "border-slate-600"} md:border-b-0` : ""
              }`}
            >
              <p className={`font-serif text-[24px] leading-none tracking-[-0.72px] md:text-[32px] md:tracking-[-0.96px] ${
                isLight ? "text-slate-900" : "text-slate-50"
              }`}>
                <CountUp num={stat.num} prefix={stat.prefix} suffix={stat.suffix} />
              </p>
              <p className={`mt-3 text-xs font-normal md:text-sm ${isLight ? "text-slate-500" : "text-slate-400"}`}>
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
