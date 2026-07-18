"use client";

import { Search } from "lucide-react";

export const CreatorsToolbar = () => {
  return (
    <div className="mb-10 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
      <div>
        <h2 className="text-4xl font-bold text-white">Browse Creators</h2>

        <p className="mt-2 text-slate-400">Showing 120 creators</p>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <div className="flex h-12 items-center rounded-lg border border-white/10 bg-white/[0.03] px-4">
          <Search size={18} className="text-slate-400" />

          <input
            placeholder="Search creator..."
            className="ml-3 bg-transparent text-white placeholder:text-slate-500 focus:outline-none"
          />
        </div>

        <select className="h-12 rounded-lg border border-white/10 bg-[#101845] px-5 text-white outline-none">
          <option>Most Popular</option>
          <option>Highest Rated</option>
          <option>Newest</option>
          <option>Most Assets</option>
        </select>
      </div>
    </div>
  );
};
