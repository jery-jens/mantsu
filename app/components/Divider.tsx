interface DividerProps {
  variant?: "light" | "dark";
}

export default function Divider({ variant = "light" }: DividerProps) {
  const isLight = variant === "light";

  return (
    <div
      className={`h-6 border-b ${
        isLight
          ? "border-slate-200 bg-slate-100"
          : "border-slate-600 bg-slate-700"
      }`}
      style={{
        backgroundImage: `radial-gradient(circle, ${
          isLight ? "#cbd5e1" : "#475569"
        } 0.5px, transparent 0.5px)`,
        backgroundSize: "12px 12px",
      }}
    />
  );
}
