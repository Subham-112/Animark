"use client";

import { Search } from "lucide-react";

export const SearchFree = () => {
  return (
    <div className="mx-auto mt-10 flex h-16 w-full max-w-lg items-center rounded-lg border border-white/10 bg-white/[0.03] px-5 backdrop-blur-xl transition-all duration-300 focus-within:border-violet-400/40 focus-within:bg-violet-500/[0.04]">
      <Search size={22} className="text-slate-400" />

      <input
        type="text"
        placeholder="Search free assets..."
        className="ml-4 h-full w-full bg-transparent text-lg text-white placeholder:text-slate-500 focus:outline-none"
      />
    </div>
  );
};