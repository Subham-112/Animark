"use client";

import { Download } from "lucide-react";

export const DownloadCard = () => {
  return (
    <div className="rounded-3xl border border-white/10 bg-[#101845] p-6">
      <h3 className="text-2xl font-semibold text-white">
        Anime Girl Character Pack
      </h3>

      <div className="mt-6 space-y-4">
        <div className="flex justify-between">
          <span className="text-slate-400">License</span>

          <span className="text-white">Commercial</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Size</span>

          <span className="text-white">82 MB</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-400">Version</span>

          <span className="text-white">v1.0</span>
        </div>
      </div>

      <button className="mt-8 flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-emerald-500 font-semibold text-white transition-all hover:bg-emerald-400">
        <Download size={20} />
        Download Asset
      </button>
    </div>
  );
};
