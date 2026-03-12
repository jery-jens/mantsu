import Image from "next/image";
import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

export default function Cta() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="relative flex h-[400px] items-center justify-center overflow-hidden px-4 md:h-[640px] md:px-0">
          <Image
            src="/cta-visual.svg"
            alt=""
            fill
            className="object-cover"
          />
          <div className="relative z-10 flex flex-col items-center text-center">
            <h2 className="max-w-[523px] font-serif text-[36px] leading-none tracking-[-1.08px] text-slate-900 md:text-[64px] md:tracking-[-1.92px]">
              Ready to modernize your factory?
            </h2>
            <p className="mt-4 max-w-[520px] text-sm font-normal leading-6 text-slate-500 md:mt-5 md:text-base">
              See how Mantsu can reduce downtime, improve quality and deliver
              measurable impact within months.
            </p>
            <div className="mt-6">
              <ButtonGradient href="/contact">
                Request a tailored demo <i className="ri-arrow-right-line" />
              </ButtonGradient>
            </div>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
