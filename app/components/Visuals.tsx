import Wrapper from "./Wrapper";

export default function Visuals() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:px-8 md:py-8">
          <div className="h-[180px] flex-[2] bg-slate-200 md:h-[280px]" />
          <div className="h-[180px] flex-1 bg-slate-200 md:h-[280px]" />
        </div>
      </Wrapper>
    </div>
  );
}
