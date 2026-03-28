"use client";

import Link from "next/link";
import { useRef } from "react";
import gsap from "gsap";

interface ButtonGradientProps {
  href: string;
  children: React.ReactNode;
  size?: "default" | "lg";
}

export default function ButtonGradient({ href, children, size = "default" }: ButtonGradientProps) {
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
      className={`relative inline-flex items-center gap-1 font-medium text-white ${
        size === "lg" ? "h-11 px-6 text-base" : "h-8 px-4 text-sm"
      }`}
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      <span
        ref={bgRef}
        className="pointer-events-none absolute inset-0 rounded-full bg-gradient-to-b from-[#E8824F] to-[#C70C5B] shadow-sm"
      />
      <span className="relative z-10 inline-flex items-center gap-1">
        {children}
      </span>
    </Link>
  );
}
