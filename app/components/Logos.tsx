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
        <div className="mt-6 grid grid-cols-5 border-t border-slate-200">
          {Array.from({ length: LOGO_COUNT }).map((_, i) => {
            const col = i % 5;
            const row = Math.floor(i / 5);

            return (
              <div
                key={i}
                className={`flex h-32 items-center justify-center border-slate-200 ${
                  col < 4 ? "border-r" : ""
                } ${row === 0 ? "border-b" : ""}`}
              >
                <img src={LOGO_SRC} alt="Logo" className="h-6 w-auto" />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
