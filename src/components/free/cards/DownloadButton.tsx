"use client";

import { Download } from "lucide-react";

export const DownloadButton = () => {
  return (
    <button className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-emerald-400 hover:shadow-[0_12px_30px_rgba(16,185,129,.35)]">
      <Download size={18} />
      Download Free
    </button>
  );
};
