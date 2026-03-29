"use client";

import { useRef, useState, useEffect } from "react";
import { useHeroVariant } from "./HeroContext";
import { usePathname } from "next/navigation";

const heroes = [
  { id: 1 as const, label: "Split with widget" },
  { id: 2 as const, label: "Centered with gradient" },
  { id: 3 as const, label: "Centered with visual" },
];

export default function HeroSelector() {
  const { variant, setVariant, mode, setMode } = useHeroVariant();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Only show on homepage
  if (pathname !== "/") return null;

  const current = heroes.find((h) => h.id === variant)!;

  return (
    <div className="flex items-center justify-center gap-3 border-b border-slate-600 bg-slate-800 px-4 py-2">
      <span className="text-xs font-medium text-slate-400">Hero variant:</span>
      <div ref={ref} className="relative">
        <button
          onClick={() => setOpen(!open)}
          className="flex items-center gap-2 rounded-full border border-slate-600 bg-slate-800 px-3 py-1 text-xs font-medium text-white transition-colors hover:border-slate-500 cursor-pointer"
        >
          {current.label}
          <i className={`ri-arrow-down-s-line text-slate-400 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute left-0 top-full z-[100] mt-1 w-56 overflow-hidden rounded-lg border border-slate-600 bg-slate-800 shadow-xl">
            {heroes.map((hero) => (
              <button
                key={hero.id}
                onClick={() => {
                  setVariant(hero.id);
                  setOpen(false);
                }}
                className={`flex w-full items-center gap-2.5 px-3 py-2.5 text-left text-xs transition-colors cursor-pointer ${
                  hero.id === variant
                    ? "bg-slate-700 text-white"
                    : "text-slate-300 hover:bg-slate-700/50 hover:text-white"
                }`}
              >
                {hero.label}
                {hero.id === variant && (
                  <i className="ri-check-line ml-auto text-sm text-green-400" />
                )}
              </button>
            ))}
          </div>
        )}
      </div>
      {/* Dark / Light toggle */}
      <div className="flex items-center gap-2">
        <span className="text-xs text-slate-400">
          {mode === "dark" ? <i className="ri-moon-line" /> : <i className="ri-sun-line" />}
        </span>
        <button
          onClick={() => setMode(mode === "dark" ? "light" : "dark")}
          className="relative h-5 w-9 cursor-pointer rounded-full border border-slate-600 bg-slate-700 transition-colors"
        >
          <span
            className="absolute top-0.5 left-0.5 h-3.5 w-3.5 rounded-full bg-white transition-transform duration-200"
            style={{
              transform: mode === "light" ? "translateX(16px)" : "translateX(0)",
            }}
          />
        </button>
      </div>
    </div>
  );
}
