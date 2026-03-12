"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

interface ButtonOutlineProps {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark";
}

export default function ButtonOutline({ href, children, variant = "light" }: ButtonOutlineProps) {
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
      className={`relative inline-flex h-8 items-center px-4 text-sm font-medium ${
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
