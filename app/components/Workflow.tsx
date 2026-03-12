import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

export default function Workflow() {
  return (
    <div className="border-b border-slate-600 bg-slate-800">
      <Wrapper className="border-slate-600">
        <div className="px-4 pt-12 text-center md:px-8 md:pt-20">
          <h2 className="font-serif text-[32px] leading-none tracking-[-0.96px] text-slate-50 md:text-[48px] md:tracking-[-1.44px]">
            Start with one workflow.
            <br />
            <span className="text-gradient">Scale</span> from there.
          </h2>
          <p className="mx-auto mt-5 max-w-[520px] text-sm font-normal text-slate-400 md:mt-7 md:text-base">
            Deploy individual production apps in weeks. Expand step by step —
            without risky, all-at-once rollouts.
          </p>
          <div className="mt-6 flex justify-center">
            <ButtonGradient href="/product">
              See modules <i className="ri-arrow-right-line" />
            </ButtonGradient>
          </div>
        </div>

        <div className="mt-10 border-t border-dashed border-slate-600 md:mt-16">
          <div className="mx-4 border-x border-dashed border-slate-600 md:mx-12">
            <div className="h-[280px] bg-slate-700 md:h-[560px]" />
          </div>
          <div className="border-b border-solid border-slate-600" />
        </div>
        <div className="h-16" />
      </Wrapper>
    </div>
  );
}
