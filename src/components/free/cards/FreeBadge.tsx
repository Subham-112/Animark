"use client";

import { Gift } from "lucide-react";

export const FreeBadge = () => {
  return (
    <div className="absolute left-4 top-4 flex items-center gap-2 rounded-full bg-emerald-500 px-3 py-1.5 text-xs font-semibold text-white shadow-lg">
      <Gift size={14} />
      FREE
    </div>
  );
};
