"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useHeroVariant } from "./HeroContext";

export default function Banner() {
  const pathname = usePathname();
  const { mode } = useHeroVariant();
  const dark = pathname === "/" ? mode === "dark" : false;

  return (
    <div className={`flex items-center justify-center gap-3.5 border-b px-4 py-2.5 font-sans ${dark ? "border-slate-600 bg-slate-800" : "border-slate-200 bg-slate-50"}`}>
      <p className={`text-sm font-medium ${dark ? "text-white" : "text-slate-900"}`}>
        Matsu v1.0 is officially live
      </p>
      <Link
        href="#"
        className={`flex items-center gap-1 text-sm font-medium ${dark ? "text-slate-400 hover:text-slate-300" : "text-slate-500 hover:text-slate-700"}`}
      >
        Read more <i className="ri-arrow-right-line" />
      </Link>
    </div>
  );
}
