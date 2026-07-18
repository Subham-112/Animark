"use client";

import Link from "next/link";
import { Users } from "lucide-react";

export const EmptyState = () => {
  return (
    <div className="flex flex-col items-center justify-center rounded-[32px] border border-dashed border-white/10 bg-[#101845] px-8 py-24">
      <div className="flex h-24 w-24 items-center justify-center rounded-full bg-violet-500/10">
        <Users size={42} className="text-violet-300" />
      </div>

      <h2 className="mt-8 text-4xl font-bold text-white">No Creators Found</h2>

      <p className="mt-5 max-w-xl text-center text-lg leading-8 text-slate-400">
        We couldn't find any creators matching your search. Try another keyword
        or explore all creators.
      </p>

      <Link
        href="/creators"
        className="mt-10 rounded-2xl bg-violet-600 px-7 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-violet-500"
      >
        Explore All Creators
      </Link>
    </div>
  );
};
