import Wrapper from "./Wrapper";

const LOGO_COUNT = 10;
const LOGO_SRC = "/claude.svg";

export default function Logos() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <p className="pt-6 text-center text-xs font-medium text-slate-500">
          Trusted by many companies around the world
        </p>
        <div className="mt-6 grid grid-cols-2 border-t border-slate-200 sm:grid-cols-3 md:grid-cols-5">
          {Array.from({ length: LOGO_COUNT }).map((_, i) => (
              <div
                key={i}
                className="flex h-24 items-center justify-center border-b border-r border-slate-200 md:h-32"
              >
                <img src={LOGO_SRC} alt="Logo" className="h-5 w-auto md:h-6" />
              </div>
            ))}
        </div>
      </Wrapper>
    </div>
  );
}
