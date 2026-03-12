"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const bannerRef = useRef<HTMLDivElement>(null);
  const hasAnimated = useRef(false);

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);

  useEffect(() => {
    if (visible && bannerRef.current && !hasAnimated.current) {
      hasAnimated.current = true;
      gsap.fromTo(
        bannerRef.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.5, ease: "power2.out", delay: 1 }
      );
    }
  }, [visible]);

  const dismiss = (value: string) => {
    localStorage.setItem("cookie-consent", value);
    gsap.to(bannerRef.current, {
      y: 100,
      opacity: 0,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => setVisible(false),
    });
  };

  if (!visible) return null;

  return (
    <div
      ref={bannerRef}
      className="fixed bottom-2 right-2 z-50 w-[320px] opacity-0"
    >
      <div className="flex flex-col gap-4 border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm font-normal leading-relaxed text-slate-600">
          We use cookies to ensure you get the best experience.
          By continuing, you agree to our{" "}
          <a
            href="/privacy"
            className="font-medium text-slate-900 underline hover:text-slate-700"
          >
            privacy policy
          </a>
          .
        </p>
        <div className="flex items-center gap-2">
          <button
            onClick={() => dismiss("declined")}
            className="flex-1 cursor-pointer rounded-full border border-slate-200 px-4 py-1.5 text-sm font-medium text-slate-600 transition-colors hover:border-slate-300 hover:text-slate-900"
          >
            Decline
          </button>
          <button
            onClick={() => dismiss("accepted")}
            className="flex-1 cursor-pointer rounded-full bg-slate-900 px-4 py-1.5 text-sm font-medium text-white transition-colors hover:bg-slate-800"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
