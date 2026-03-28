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

        <div className="mt-6 border-t border-slate-200 md:mt-10">
          <div className="mx-4 overflow-hidden border-x border-slate-200 bg-white md:mx-8">
            <div className="relative h-[280px] bg-slate-50 md:h-[560px]">
              <Image
                src="/location.png"
                alt="Platform interface"
                fill
                className="object-cover object-top"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 border-t border-slate-200 sm:grid-cols-3">
          <div className="flex flex-col gap-6 border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-8">
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
                Reduce downtime. Improve quality. Give managers real-time visibility across production.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 border-b border-slate-200 p-6 sm:border-b-0 sm:border-r sm:p-8">
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
                Low-code foundation. Modular deployment. Built to evolve as your factory evolves.
              </p>
            </div>
          </div>
          <div className="flex flex-col gap-6 p-6 sm:p-8">
            <Image
              src="/icon-operational.svg"
              alt="Seamless integration"
              width={40}
              height={40}
            />
            <div>
              <h3 className="font-serif text-[20px] leading-none tracking-[-0.6px] text-slate-900">
                Seamless integration
              </h3>
              <p className="mt-4 text-sm font-normal text-slate-500">
                Connect with ERP, PLC, and SCADA systems. No rip-and-replace needed.
              </p>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
