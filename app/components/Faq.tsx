"use client";

import { useCallback, useRef } from "react";
import gsap from "gsap";
import Wrapper from "./Wrapper";

const faqs = [
  {
    question: "How is Mantsu different from a traditional MES?",
    answer:
      "Unlike monolithic MES platforms that take years to implement, Mantsu is modular and cloud-native. You can start with a single workflow and scale at your own pace — without ripping and replacing existing systems.",
  },
  {
    question: "How long does implementation take?",
    answer:
      "Most customers go live with their first production app within 3 months. Because Mantsu is modular, you don't need to digitize everything at once.",
  },
  {
    question: "Do we need to replace our existing ERP or MES?",
    answer:
      "No. Mantsu is designed to work alongside your existing systems. Our communication layer integrates with ERP, PLC, SCADA and other platforms — so you can extend rather than replace.",
  },
  {
    question: "Is Mantsu suitable for complex or unique production processes?",
    answer:
      "Absolutely. Mantsu was built for manufacturers where standard off-the-shelf solutions don't fit. Our platform adapts to your workflows, not the other way around.",
  },
  {
    question: "How does Mantsu handle machine connectivity?",
    answer:
      "Mantsu connects to your machines through a secure communication layer supporting common industrial protocols. Data flows in real time from the shop floor to your dashboards.",
  },
  {
    question: "What about security and data control?",
    answer:
      "Mantsu is built on enterprise-grade cloud infrastructure with role-based access control, encrypted data in transit and at rest, and SOC compliance. Your data stays yours.",
  },
  {
    question: "Can we start small and expand later?",
    answer:
      "That's exactly how Mantsu is designed to work. Start with one line, one workflow, or one plant — and scale as you see results.",
  },
];

function FaqItem({ question, answer, first = false }: { question: string; answer: string; first?: boolean }) {
  const contentRef = useRef<HTMLDivElement>(null);
  const iconRef = useRef<HTMLElement>(null);
  const isOpen = useRef(false);

  const toggle = useCallback(() => {
    const content = contentRef.current;
    const icon = iconRef.current;
    if (!content || !icon) return;

    if (!isOpen.current) {
      isOpen.current = true;
      gsap.set(content, { height: "auto" });
      const h = content.offsetHeight;
      gsap.fromTo(content, { height: 0, opacity: 0 }, { height: h, opacity: 1, duration: 0.4, ease: "power2.out" });
      gsap.to(icon, { rotation: 45, duration: 0.3, ease: "power2.out" });
    } else {
      isOpen.current = false;
      gsap.to(content, { height: 0, opacity: 0, duration: 0.3, ease: "power2.in" });
      gsap.to(icon, { rotation: 0, duration: 0.3, ease: "power2.in" });
    }
  }, []);

  return (
    <div className={first ? "" : "border-t border-dashed border-slate-300"}>
      <button
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between px-4 py-4 text-left md:px-6 md:py-5"
      >
        <span className="text-sm font-medium text-slate-900 md:text-base">{question}</span>
        <i
          ref={iconRef}
          className="ri-add-line shrink-0 text-lg text-slate-400"
        />
      </button>
      <div ref={contentRef} className="h-0 overflow-hidden opacity-0">
        <p className="px-4 pb-4 text-sm font-normal leading-relaxed text-slate-500 md:px-6 md:pb-5">
          {answer}
        </p>
      </div>
    </div>
  );
}

export default function Faq() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="px-6 pt-12 text-center md:px-12 md:pt-20">
          <span className="font-mono text-[10px] uppercase text-slate-400">
            //&nbsp;&nbsp;FAQ
          </span>
          <h2 className="mx-auto mt-6 font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
            Frequently asked <span className="text-gradient">questions</span>
          </h2>
        </div>

        <div className="mt-10 border-t border-slate-200 md:mt-16">
          <div className="mx-auto max-w-[720px] md:border-x md:border-dashed md:border-slate-300">
            {faqs.map((faq, i) => (
              <FaqItem key={i} question={faq.question} answer={faq.answer} first={i === 0} />
            ))}
          </div>
          <div className="border-t border-slate-200" />
        </div>
        <div className="h-12 md:h-20" />
      </Wrapper>
    </div>
  );
}
