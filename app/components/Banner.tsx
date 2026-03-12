import Link from "next/link";

export default function Banner() {
  return (
    <div className="flex items-center justify-center gap-3.5 bg-slate-800 border-b border-slate-200 px-4 py-2.5 font-sans">
      <p className="text-sm font-medium text-white">
        Matsu v1.0 is officially live
      </p>
      <Link
        href="#"
        className="flex items-center gap-1 text-sm font-medium text-slate-400 hover:underline"
      >
        Read more <i className="ri-arrow-right-line" />
      </Link>
    </div>
  );
}
