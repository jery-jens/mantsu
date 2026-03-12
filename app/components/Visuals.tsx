import Image from "next/image";
import Wrapper from "./Wrapper";

export default function Visuals() {
  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="flex flex-col gap-4 px-4 py-6 md:flex-row md:px-8 md:py-8">
          <div className="relative min-h-[180px] flex-[1.2] overflow-hidden md:min-h-[280px]">
            <Image
              src="/hero-image.jpg"
              alt="Factory production environment"
              fill
              className="object-cover"
            />
          </div>
          <div className="flex-1 overflow-x-auto border border-slate-200 bg-white">
            <div className="flex items-center justify-between border-b border-slate-200 px-3 py-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400" />
              </div>
              <div className="flex items-center gap-2">
                <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                  RECENT DOWNTIMES
                </span>
                <Image src="/mantsu-icon.svg" alt="Mantsu" width={16} height={16} />
              </div>
            </div>
            <table className="w-full min-w-[480px] text-left">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="px-4 py-2.5 text-xs font-normal text-slate-400">Plant</th>
                  <th className="px-4 py-2.5 text-xs font-normal text-slate-400">Equipment</th>
                  <th className="px-4 py-2.5 text-xs font-normal text-slate-400">Duration</th>
                  <th className="px-4 py-2.5 text-xs font-normal text-slate-400">Reason</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Gent</td>
                  <td className="px-4 py-2 text-xs text-slate-500">DryMixingLine1</td>
                  <td className="px-4 py-2 text-xs text-red-500">164h 48m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-normal text-red-600">Bearing failure</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Gent</td>
                  <td className="px-4 py-2 text-xs text-slate-500">DryMixingLine1</td>
                  <td className="px-4 py-2 text-xs text-slate-500">21h 26m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-normal text-green-600">Undeclared</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Antwerp</td>
                  <td className="px-4 py-2 text-xs text-slate-500">PackagingLine2</td>
                  <td className="px-4 py-2 text-xs text-red-500">9h 12m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-normal text-orange-600">Belt breakage</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Gent</td>
                  <td className="px-4 py-2 text-xs text-slate-500">WetMixingTank3</td>
                  <td className="px-4 py-2 text-xs text-red-500">1h 4m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-red-50 px-2.5 py-0.5 text-xs font-normal text-red-600">Temp out of range</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Antwerp</td>
                  <td className="px-4 py-2 text-xs text-slate-500">ExtrusionLine1</td>
                  <td className="px-4 py-2 text-xs text-slate-500">15h 57m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-normal text-green-600">Preventive maint.</span></td>
                </tr>
                <tr className="border-b border-slate-100">
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Brussels</td>
                  <td className="px-4 py-2 text-xs text-slate-500">ConveyorSystem5</td>
                  <td className="px-4 py-2 text-xs text-slate-500">9h 22m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-0.5 text-xs font-normal text-orange-600">Equip. cleaning</span></td>
                </tr>
                <tr>
                  <td className="px-4 py-2 text-sm font-normal text-slate-900">Gent</td>
                  <td className="px-4 py-2 text-xs text-slate-500">DryMixingLine1</td>
                  <td className="px-4 py-2 text-xs text-red-500">0h 9m</td>
                  <td className="px-4 py-2"><span className="inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-normal text-green-600">Undeclared</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </Wrapper>
    </div>
  );
}
