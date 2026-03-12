import ButtonGradient from "./ButtonGradient";
import Wrapper from "./Wrapper";

const steps = [
  { label: "Production planning", icon: "ri-file-list-3-line" },
  { label: "Start order", icon: "ri-play-line" },
  { label: "Quality check", icon: "ri-shield-check-line" },
  { label: "Assembly", icon: "ri-tools-line" },
  { label: "Packaging", icon: "ri-box-3-line" },
  { label: "Order completion", icon: "ri-check-double-line" },
];

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
            <div className="overflow-x-auto px-6 py-10 md:px-10 md:py-14">
              <div className="min-w-[540px]">
                {/* Flow */}
                <div className="relative flex items-center justify-between">
                  {/* Connecting line */}
                  <div className="absolute inset-x-0 top-1/2 h-[1px] -translate-y-1/2 border-t border-dashed border-slate-600" />

                  {steps.map((step, i) => (
                    <div key={i} className="relative z-10 flex flex-col items-center gap-2.5">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-none ${
                        i === 0 || i === steps.length - 1
                          ? "border border-slate-500 bg-slate-700 text-slate-300"
                          : "border border-slate-600 bg-slate-800 text-slate-400"
                      }`}>
                        <i className={`${step.icon} text-lg`} />
                      </div>
                      <span className="max-w-[72px] text-center text-[10px] leading-tight text-slate-500">{step.label}</span>
                    </div>
                  ))}
                </div>

                {/* Mantsu bar */}
                <div className="mt-6 flex items-center justify-center gap-2">
                  <div className="h-[1px] w-6 bg-gradient-to-r from-transparent to-[#E8824F]" />
                  <span className="flex items-center gap-1.5 text-[10px] font-normal uppercase tracking-widest text-slate-400">Connected by <img src="/mantsu-icon.svg" alt="" className="inline h-3 w-3" /> Mantsu</span>
                  <div className="h-[1px] w-6 bg-gradient-to-r from-[#C70C5B] to-transparent" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-b border-solid border-slate-600" />
        </div>
        <div className="h-16" />
      </Wrapper>
    </div>
  );
}
