import Image from "next/image";
import Wrapper from "./Wrapper";

const columns = [
  {
    image: "/forwho-1.png",
    title: "MES extension & modernization",
    description:
      "For companies with an existing MES that needs to evolve.",
  },
  {
    image: "/forwho-2.png",
    title: "Custom MES requirements",
    description:
      "For manufacturers where standard off-the-shelf MES solutions don't fit due to unique production processes.",
  },
  {
    image: "/forwho-3.png",
    title: "Start small. Grow steadily.",
    description:
      "For manufacturers who want to begin with a focused solution.",
  },
  {
    image: "/forwho-4.png",
    title: "Scalable digital foundations",
    description:
      "For growing businesses building or evolving their MES to support expansion, acquisitions, or new production lines.",
  },
];

export default function ForWho() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="px-6 pt-12 pb-4 text-center md:px-12 md:pt-20">
          <span className="font-mono text-[10px] uppercase text-slate-400">
            //&nbsp;&nbsp;FOR WHO
          </span>
          <h2 className="mx-auto mt-6 max-w-[500px] font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:mt-10 md:text-[48px] md:tracking-[-1.44px]">
            Who Mantsu is <span className="text-gradient">built</span> for.
          </h2>
        </div>

        <div className="mt-10 grid grid-cols-1 border-t border-slate-200 sm:grid-cols-2 md:mt-16 md:grid-cols-4">
          {columns.map((col, i) => (
            <div
              key={i}
              className={`flex flex-col border-slate-200 ${
                i < 3 ? "md:border-r" : ""
              } ${i < 2 ? "sm:border-r" : ""} ${
                i < columns.length - 1 ? "border-b sm:border-b-0" : ""
              } ${i >= 2 ? "sm:border-t md:border-t-0" : ""}`}
            >
              <div className="relative h-[200px] w-full sm:h-[240px] md:h-[320px]">
                <Image
                  src={col.image}
                  alt={col.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="border-t border-slate-200 p-6">
                <h3 className="font-serif text-[20px] leading-tight tracking-[-0.6px] text-slate-900">
                  {col.title}
                </h3>
                <p className="mt-2 text-xs font-normal leading-relaxed text-slate-500">
                  {col.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
}
