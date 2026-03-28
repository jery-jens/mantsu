"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

interface ButtonOutlineProps {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
  size?: "default" | "lg";
}

export default function ButtonOutline({ href, children, variant = "light", size = "default" }: ButtonOutlineProps) {
  const bgRef = useRef<HTMLSpanElement>(null);

  const handleEnter = () => {
    gsap.to(bgRef.current, {
      scale: 0.95,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleLeave = () => {
    gsap.to(bgRef.current, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  return (
    <Link
      href={href}
      className={`relative inline-flex items-center font-medium ${
        size === "lg" ? "h-11 px-6 text-base" : "h-8 px-4 text-sm"
      } ${
        variant === "dark" ? "text-slate-200" : "text-neutral-950"
      }`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        ref={bgRef}
        className={`pointer-events-none absolute inset-0 rounded-full border ${
          variant === "dark" ? "border-slate-600" : "border-neutral-200"
        }`}
      />
      <span className="relative z-10 inline-flex items-center">
        {children}
      </span>
    </Link>
  );
}
