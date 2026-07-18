"use client";

import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";

export const Pagination = () => {
  return (
    <nav className="flex items-center justify-center gap-3">
      <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#101845] text-slate-400 transition-all duration-300 hover:border-emerald-500/40 hover:text-white">
        <ChevronLeft size={18} />
      </button>

      {[1, 2, 3, 4, 5].map((page) => (
        <Link
          key={page}
          href="#"
          className={`flex h-11 w-11 items-center justify-center rounded-2xl text-sm font-semibold transition-all duration-300 ${
            page === 1
              ? "bg-emerald-500 text-white shadow-[0_12px_30px_rgba(16,185,129,.35)]"
              : "border border-white/10 bg-[#101845] text-slate-300 hover:border-emerald-500/40 hover:text-white"
          }`}
        >
          {page}
        </Link>
      ))}

      <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-[#101845] text-slate-400 transition-all duration-300 hover:border-emerald-500/40 hover:text-white">
        <ChevronRight size={18} />
      </button>
    </nav>
  );
};
