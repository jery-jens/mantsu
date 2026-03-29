"use client";

import { createContext, useContext, useState } from "react";

type HeroVariant = 1 | 2 | 3;
type HeroMode = "dark" | "light";

interface HeroContextType {
  variant: HeroVariant;
  setVariant: (v: HeroVariant) => void;
  mode: HeroMode;
  setMode: (m: HeroMode) => void;
}

const HeroContext = createContext<HeroContextType>({
  variant: 1,
  setVariant: () => {},
  mode: "dark",
  setMode: () => {},
});

export function HeroProvider({ children }: { children: React.ReactNode }) {
  const [variant, setVariant] = useState<HeroVariant>(1);
  const [mode, setMode] = useState<HeroMode>("dark");
  return (
    <HeroContext.Provider value={{ variant, setVariant, mode, setMode }}>
      {children}
    </HeroContext.Provider>
  );
}

export function useHeroVariant() {
  return useContext(HeroContext);
}
