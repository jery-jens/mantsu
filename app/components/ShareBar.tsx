"use client";

interface ShareBarProps {
  url: string;
  title: string;
}

export default function ShareBar({ url, title }: ShareBarProps) {
  return (
    <div className="flex items-center gap-1">
      <a
        href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
        aria-label="Share on X"
      >
        <i className="ri-twitter-x-line text-base" />
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`}
        target="_blank"
        rel="noopener noreferrer"
        className="flex h-8 w-8 items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
        aria-label="Share on LinkedIn"
      >
        <i className="ri-linkedin-box-line text-base" />
      </a>
      <button
        onClick={() => navigator.clipboard.writeText(url)}
        className="flex h-8 w-8 cursor-pointer items-center justify-center rounded-full text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-900"
        aria-label="Copy link"
      >
        <i className="ri-link text-base" />
      </button>
    </div>
  );
}
