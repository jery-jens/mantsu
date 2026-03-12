import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Platform() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="px-4 pt-12 md:px-8 md:pt-20">
          <h2 className="text-center font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-900 md:text-[48px] md:tracking-[-1.44px]">
            Modernize production{" "}
            <br />
            in <span className="text-gradient">3 months</span>, <span className="text-slate-600">not 2 years.</span>
          </h2>
        </div>

        <div className="mt-10 border-t border-slate-200 md:mt-20">
          <div className="mx-auto max-w-[834px] overflow-hidden border-x border-slate-200 bg-white">
            <div className="flex items-center gap-1.5 border-b border-slate-200 px-3 py-2">
              <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
              <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
            </div>
            <div className="relative h-[180px] bg-slate-50 md:h-[300px]">
              <Image
                src="/location.png"
                alt="Platform interface"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-slate-200 md:grid-cols-2">
          <div className="flex flex-col gap-6 border-b border-slate-200 p-6 md:border-b-0 md:border-r md:p-12">
            <Image
              src="/icon-operational.svg"
              alt="Operational impact"
              width={40}
              height={40}
            />
            <div>
              <h3 className="font-serif text-[20px] leading-none tracking-[-0.6px] text-slate-900">
                Immediate operational impact
              </h3>
              <p className="mt-4 text-sm font-normal text-slate-500">
                Reduce downtime. Improve quality.
                <br />
                Give managers real-time visibility across production.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 md:p-12">
            <Image
              src="/icon-architecture.svg"
              alt="Future-proof architecture"
              width={40}
              height={40}
            />
            <div>
              <h3 className="font-serif text-[20px] leading-none tracking-[-0.6px] text-slate-900">
                Future-proof architecture
              </h3>
              <p className="mt-4 text-sm font-normal text-slate-500">
                Low-code foundation. Modular deployment.
                <br />
                Built to evolve as your factory evolves.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
