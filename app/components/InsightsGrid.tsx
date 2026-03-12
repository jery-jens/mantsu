"use client";

import { useState } from "react";
import Link from "next/link";
import Wrapper from "./Wrapper";

interface Insight {
  slug: string;
  category: string;
  date: string;
  title: string;
  excerpt: string;
}

const PER_PAGE = 9;

export default function InsightsGrid({ insights }: { insights: Insight[] }) {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(insights.length / PER_PAGE);
  const paged = insights.slice((page - 1) * PER_PAGE, page * PER_PAGE);

  return (
    <div className="border-b border-slate-200 bg-slate-50">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {paged.map((insight, i) => {
            return (
              <Link
                key={insight.slug}
                href={`/insights/${insight.slug}`}
                className="group flex flex-col border-b border-slate-200 p-4 transition-colors hover:bg-slate-100 sm:border-r sm:p-6 sm:[&:nth-child(2n)]:border-r-0 md:[&:nth-child(2n)]:border-r md:[&:nth-child(3n)]:border-r-0"
              >
                <div className="aspect-[16/9] w-full bg-slate-200" />
                <div className="mt-4 flex items-center gap-3">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-slate-400">
                    {insight.category}
                  </span>
                  <span className="text-xs text-slate-300">·</span>
                  <span className="text-xs text-slate-400">{insight.date}</span>
                </div>
                <h2 className="mt-3 font-serif text-[20px] leading-tight tracking-[-0.6px] text-slate-900 group-hover:text-slate-700">
                  {insight.title}
                </h2>
                <p className="mt-2 text-sm font-normal leading-relaxed text-slate-500">
                  {insight.excerpt}
                </p>
              </Link>
            );
          })}
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-center gap-1 border-t border-slate-200 py-6">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={page === 1}
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm text-slate-400 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <i className="ri-arrow-left-s-line" />
            </button>
            {Array.from({ length: totalPages }).map((_, i) => (
              <button
                key={i}
                onClick={() => setPage(i + 1)}
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-medium ${
                  page === i + 1
                    ? "bg-slate-900 text-white"
                    : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                }`}
              >
                {i + 1}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={page === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-full text-sm text-slate-400 hover:bg-slate-100 hover:text-slate-900 disabled:opacity-30 disabled:hover:bg-transparent"
            >
              <i className="ri-arrow-right-s-line" />
            </button>
          </div>
        )}
      </Wrapper>
    </div>
  );
}
