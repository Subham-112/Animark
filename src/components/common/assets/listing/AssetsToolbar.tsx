"use client";

import { LayoutGrid, List, SlidersHorizontal } from "lucide-react";

export const AssetsToolbar = () => {
  return (
    <div className="flex flex-col gap-4 rounded-[16px] border border-white/10 bg-[#101845] p-4 py-3 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex items-center gap-3">
        <button className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet-500 text-white">
          <LayoutGrid size={20} />
        </button>

        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-violet-500/40 hover:text-white">
          <List size={20} />
        </button>

        <button className="flex h-11 items-center gap-2 rounded-2xl border border-white/10 bg-white/5 px-5 text-slate-300 transition-all duration-300 hover:border-violet-500/40 hover:text-white xl:hidden">
          <SlidersHorizontal size={18} />
          Filters
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        <select className="h-11 rounded-2xl border border-white/10 bg-[#0C1433] px-4 text-sm text-white outline-none">
          <option>Newest</option>
          <option>Popular</option>
          <option>Best Selling</option>
          <option>Price Low to High</option>
          <option>Price High to Low</option>
        </select>

        <select className="h-11 rounded-2xl border border-white/10 bg-[#0C1433] px-4 text-sm text-white outline-none">
          <option>12 Items</option>
          <option>24 Items</option>
          <option>36 Items</option>
          <option>48 Items</option>
        </select>
      </div>
    </div>
  );
};
