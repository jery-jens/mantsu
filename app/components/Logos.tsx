"use client";

import { useHeroVariant } from "./HeroContext";
import Wrapper from "./Wrapper";

const LOGO_COUNT = 10;
const LOGO_SRC = "/claude.svg";

export default function Logos() {
  const { mode } = useHeroVariant();
  const dark = mode === "dark";

  return (
    <div className={`border-b ${dark ? "border-slate-600 bg-slate-800" : "border-slate-200 bg-slate-50"}`}>
      <Wrapper className={dark ? "border-slate-600" : ""}>
        <p className="pt-6 text-center text-xs font-medium text-slate-500">
          Trusted by many companies around the world
        </p>
        <div className={`mt-6 grid grid-cols-2 border-t sm:grid-cols-3 md:grid-cols-5 ${dark ? "border-slate-600" : "border-slate-200"}`}>
          {Array.from({ length: LOGO_COUNT }).map((_, i) => {
            const lastRowMd = i >= LOGO_COUNT - (LOGO_COUNT % 5 || 5);
            const lastRowSm = i >= LOGO_COUNT - (LOGO_COUNT % 3 || 3);
            const lastRowXs = i >= LOGO_COUNT - (LOGO_COUNT % 2 || 2);

            return (
              <div
                key={i}
                className={`flex h-24 items-center justify-center border-r md:h-32 ${dark ? "border-slate-600" : "border-slate-200"} ${
                  lastRowXs ? "" : "border-b"
                } ${!lastRowSm ? "sm:border-b" : "sm:border-b-0"} ${!lastRowMd ? "md:border-b" : "md:border-b-0"}`}
              >
                <img src={LOGO_SRC} alt="Logo" className={`h-5 w-auto md:h-6 ${dark ? "brightness-0 invert" : "brightness-0 opacity-70"}`} />
              </div>
            );
          })}
        </div>
      </Wrapper>
    </div>
  );
}
