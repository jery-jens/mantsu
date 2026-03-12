import Image from "next/image";
import Wrapper from "./Wrapper";

const items = [
  {
    number: "01",
    title: "Built for the factory floor",
    description:
      "From downtime tracking to quality control, every template solves a daily operational challenge where it matters most: on the floor.",
  },
  {
    number: "02",
    title: "Modular by design",
    description:
      "Each module works independently or together — allowing you to modernize step by step without risky, all-at-once rollouts.",
  },
  {
    number: "03",
    title: "Delivered in months",
    description:
      "With proven manufacturing templates, you go live fast and start generating measurable impact early.",
  },
];

export default function Product() {
  return (
    <div className="border-b border-slate-600 bg-slate-800">
      <Wrapper className="border-slate-600">
        <div className="px-6 pt-12 pb-0 md:px-12 md:pt-20">
          <div className="mb-6">
            <span className="font-mono text-[10px] uppercase text-slate-400">
              //&nbsp;&nbsp;OUR PRODUCT
            </span>
          </div>
          <h2 className="max-w-[640px] font-serif text-[24px] leading-[1.29] tracking-[-0.72px] md:text-[32px] md:tracking-[-0.96px]">
            <span className="text-slate-50">
              A new standard for factory software.{" "}
            </span>
            <span className="text-slate-400">
              Modular at its core. Delivered in months, not years. Mantsu
              redefines how factories digitize and scale.
            </span>
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t border-slate-600 md:mt-16 md:grid-cols-3">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative flex flex-col ${
                i < 2 ? "border-b border-slate-600 md:border-b-0 md:border-r" : ""
              }`}
            >
              <span className="absolute left-4 top-4 font-mono text-[10px] text-slate-500">
                {item.number}
              </span>
              <div className="relative min-h-[160px] flex-1 overflow-hidden md:min-h-[207px]">
                <Image
                  src={`/visual-${i + 1}.png`}
                  alt=""
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-slate-800 to-transparent" />
              </div>
              <div className="px-6 pt-12 pb-6 md:px-8 md:pt-[73px] md:pb-8">
                <h3 className="font-serif text-[20px] leading-none tracking-[-0.6px] text-slate-50">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm font-normal text-slate-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
