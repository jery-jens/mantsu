import ButtonOutline from "./ButtonOutline";
import Wrapper from "./Wrapper";

const testimonials = [
  {
    quote:
      "\u201CWe were looking at a two-year MES project. With Mantsu, we had our first production apps live in under three months \u2014 and we saw downtime drop almost immediately.\u201D",
    name: "Marc De Smet",
    role: "COO, European Packaging Group",
  },
  {
    quote:
      "\u201CMantsu gave us the flexibility to start small and scale. We digitized one line in weeks, and now we\u2019re rolling out across three plants.\u201D",
    name: "Sophie Janssen",
    role: "VP Operations, NordSteel Industries",
  },
  {
    quote:
      "\u201CThe modular approach meant we didn\u2019t have to rip and replace. We layered Mantsu on top of our existing systems and saw ROI in the first quarter.\u201D",
    name: "Thomas Müller",
    role: "CTO, Precision Manufacturing AG",
  },
];

function LogoPanel({ side }: { side: "left" | "right" }) {
  return (
    <div
      className={`relative hidden h-full min-h-[400px] items-center justify-center bg-slate-800 md:flex ${
        side === "left" ? "border-r border-slate-600" : "border-l border-slate-600"
      }`}
    >
      <div className="absolute left-[88px] top-0 h-full border-l border-dashed border-slate-600" />
      <div className="absolute right-[88px] top-0 h-full border-l border-dashed border-slate-600" />
      <div className="absolute left-0 top-[88px] w-full border-t border-dashed border-slate-600" />
      <div className="absolute left-0 bottom-[88px] w-full border-t border-dashed border-slate-600" />
      <div className="h-8 w-[153px] rounded bg-slate-600" />
    </div>
  );
}

export default function Testimonials() {
  return (
    <div className="border-b border-slate-600 bg-slate-800">
      <Wrapper className="border-slate-600">
        {testimonials.map((t, i) => {
          const logoRight = i % 2 !== 0;

          return (
            <div
              key={i}
              className={`grid grid-cols-1 ${
                logoRight ? "md:grid-cols-[1fr_480px]" : "md:grid-cols-[480px_1fr]"
              } ${i < testimonials.length - 1 ? "border-b border-slate-600" : ""}`}
            >
              {!logoRight && <LogoPanel side="left" />}

              <div className="flex flex-col justify-between bg-slate-800 p-6 md:p-8">
                <p className="max-w-[480px] font-serif text-[18px] leading-[1.4] tracking-[-0.54px] text-slate-50 md:text-[24px] md:tracking-[-0.72px]">
                  {t.quote}
                </p>
                <div className="mt-8">
                  <div className="flex items-center gap-4">
                    <div className="h-10 w-10 shrink-0 rounded-full bg-slate-600" />
                    <div>
                      <p className="text-sm font-medium text-slate-50">{t.name}</p>
                      <p className="text-sm font-normal text-slate-400">{t.role}</p>
                    </div>
                  </div>
                  <div className="mt-6">
                    <ButtonOutline href="/insights" variant="dark">
                      Read case study <i className="ri-arrow-right-line" />
                    </ButtonOutline>
                  </div>
                </div>
              </div>

              {logoRight && <LogoPanel side="right" />}
            </div>
          );
        })}
      </Wrapper>
    </div>
  );
}
