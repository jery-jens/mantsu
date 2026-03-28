"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";

const reasonStyles = {
  red: "bg-red-50 text-red-600",
  green: "bg-green-50 text-green-600",
  orange: "bg-orange-50 text-orange-600",
};

type ReasonColor = "red" | "green" | "orange";

interface TableConfig {
  title: string;
  headers: string[];
  rows: { cells: string[]; badge?: { text: string; color: ReasonColor }; highlight?: number }[];
}

const tables: Record<string, TableConfig> = {
  "control-room": {
    title: "RECENT DOWNTIMES",
    headers: ["Plant", "Equipment", "Duration", "Reason"],
    rows: [
      { cells: ["Gent", "DryMixingLine1", "164h 48m"], badge: { text: "Bearing failure", color: "red" }, highlight: 2 },
      { cells: ["Gent", "DryMixingLine1", "21h 26m"], badge: { text: "Undeclared", color: "green" } },
      { cells: ["Antwerp", "PackagingLine2", "9h 12m"], badge: { text: "Belt breakage", color: "orange" }, highlight: 2 },
      { cells: ["Gent", "WetMixingTank3", "1h 4m"], badge: { text: "Temp out of range", color: "red" }, highlight: 2 },
      { cells: ["Antwerp", "ExtrusionLine1", "15h 57m"], badge: { text: "Preventive maint.", color: "green" } },
      { cells: ["Brussels", "ConveyorSystem5", "9h 22m"], badge: { text: "Equip. cleaning", color: "orange" } },
    ],
  },
  quality: {
    title: "QUALITY CHECKS",
    headers: ["Batch", "Product", "Result", "Status"],
    rows: [
      { cells: ["B-2024-881", "DryCast Mix A", "Pass"], badge: { text: "Approved", color: "green" } },
      { cells: ["B-2024-882", "WetCoat Layer", "Fail"], badge: { text: "Rejected", color: "red" }, highlight: 2 },
      { cells: ["B-2024-883", "PackSeal Unit", "Pass"], badge: { text: "Approved", color: "green" } },
      { cells: ["B-2024-884", "ExtruForm Rod", "Review"], badge: { text: "Pending", color: "orange" } },
      { cells: ["B-2024-885", "DryCast Mix B", "Pass"], badge: { text: "Approved", color: "green" } },
      { cells: ["B-2024-886", "ThermoPress X", "Fail"], badge: { text: "On hold", color: "red" }, highlight: 2 },
    ],
  },
  connectivity: {
    title: "MACHINE STATUS",
    headers: ["Machine", "Line", "Uptime", "Status"],
    rows: [
      { cells: ["PLC-GNT-01", "DryMixingLine1", "99.2%"], badge: { text: "Online", color: "green" } },
      { cells: ["PLC-ANT-03", "PackagingLine2", "87.4%"], badge: { text: "Degraded", color: "orange" } },
      { cells: ["PLC-GNT-02", "WetMixingTank3", "0%"], badge: { text: "Offline", color: "red" }, highlight: 2 },
      { cells: ["PLC-ANT-01", "ExtrusionLine1", "98.7%"], badge: { text: "Online", color: "green" } },
      { cells: ["PLC-BRU-05", "ConveyorSystem5", "94.1%"], badge: { text: "Online", color: "green" } },
      { cells: ["PLC-GNT-04", "ThermoPress2", "76.3%"], badge: { text: "Degraded", color: "orange" } },
    ],
  },
};

const statusSwaps: { text: string; color: ReasonColor }[] = [
  { text: "Resolved", color: "green" },
  { text: "Under review", color: "orange" },
  { text: "Flagged", color: "red" },
  { text: "Cleared", color: "green" },
  { text: "Pending", color: "orange" },
  { text: "Online", color: "green" },
];

interface HeroWidgetProps {
  variant?: string;
}

export default function HeroWidget({ variant = "control-room" }: HeroWidgetProps) {
  const config = tables[variant] || tables["control-room"];
  const [badges, setBadges] = useState(config.rows.map((r) => r.badge!));
  const [flashIdx, setFlashIdx] = useState<number | null>(null);
  const stepRef = useRef(0);
  // Live status swaps
  useEffect(() => {
    const interval = setInterval(() => {
      const step = stepRef.current;
      const rowIdx = step % config.rows.length;
      const swap = statusSwaps[step % statusSwaps.length];

      setFlashIdx(rowIdx);
      setBadges((prev) => {
        const next = [...prev];
        next[rowIdx] = { text: swap.text, color: swap.color };
        return next;
      });

      setTimeout(() => setFlashIdx(null), 600);
      stepRef.current++;
    }, 2500);

    return () => clearInterval(interval);
  }, [config.rows.length]);

  return (
    <div className="relative w-full overflow-hidden border border-slate-200 bg-white shadow-sm">
      <div className="flex items-center gap-2 border-b border-slate-200 px-3 py-2">
        <Image src="/mantsu-icon.svg" alt="Mantsu" width={12} height={12} />
        <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
          {config.title}
        </span>
      </div>

      <table className="w-full min-w-[480px] text-left">
        <thead>
          <tr className="border-b border-slate-200">
            {config.headers.map((h) => (
              <th key={h} className="px-4 py-2.5 text-xs font-normal text-slate-400">{h}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {config.rows.map((row, i) => (
            <tr
              key={i}
              className={`transition-colors duration-500 ${
                i < config.rows.length - 1 ? "border-b border-slate-100" : ""
              } ${flashIdx === i ? "bg-slate-50" : ""}`}
            >
              {row.cells.map((cell, j) => (
                <td
                  key={j}
                  className={`px-4 py-2 ${
                    j === 0 ? "text-sm font-normal text-slate-900" : "text-xs text-slate-500"
                  } ${row.highlight === j ? "text-red-500" : ""}`}
                >
                  {cell}
                </td>
              ))}
              <td className="px-4 py-2">
                <span
                  className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-normal transition-all duration-500 ${reasonStyles[badges[i].color]}`}
                >
                  {badges[i].text}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
