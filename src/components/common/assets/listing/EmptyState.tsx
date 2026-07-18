"use client";

import Link from "next/link";
import { SearchX } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-white/10 bg-[#101845] px-8 py-24 text-center">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10 text-violet-300">
        <SearchX size={46} />
      </div>

      <h2 className="mt-8 text-3xl font-bold text-white">No Assets Found</h2>

      <p className="mt-4 max-w-lg text-slate-400">
        We couldn't find any assets matching your selected filters. Try removing
        some filters or browse all available assets.
      </p>

      <Link
        href="/assets"
        className="mt-8 rounded-2xl bg-violet-500 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_40px_rgba(124,58,237,.35)]"
      >
        Browse All Assets
      </Link>
    </div>
  );
};
