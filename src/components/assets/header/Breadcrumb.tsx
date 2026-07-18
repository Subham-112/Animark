"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";

export const Breadcrumb = () => {
  return (
    <nav className="flex items-center gap-2 text-sm">
      <Link
        href="/"
        className="text-slate-400 transition-colors duration-300 hover:text-white"
      >
        Home
      </Link>

      <ChevronRight size={16} className="text-slate-500" />

      <span className="font-semibold text-white">2D Assets</span>
    </nav>
  );
};
