"use client";

import { Download, Heart, Star } from "lucide-react";
import { AssetSeller } from "./AssetSeller";
import { AssetTags } from "./AssetTags";

export const AssetInfo = () => {
  return (
    <div>
      <div className="flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-bold text-white">
            Anime Girl Character Pack
          </h1>

          <p className="mt-1 text-lg text-slate-400">by Salman Khan</p>
        </div>

        <button className="flex h-12 w-12 items-center justify-center rounded-[12px] border border-white/10 bg-white/5 text-slate-400 transition-all duration-300 hover:border-pink-500 hover:text-pink-400">
          <Heart size={20} />
        </button>
      </div>

      <div className="mt-4 flex flex-wrap gap-8">
        <div className="flex items-center gap-2">
          <Star size={20} className="fill-yellow-400 text-yellow-400" />

          <span className="text-lg font-semibold text-white">4.9</span>

          <span className="text-slate-400">(324 Reviews)</span>
        </div>

        <div className="flex items-center gap-2">
          <Download size={20} className="text-violet-400" />

          <span className="text-slate-300">12.4K Downloads</span>
        </div>
      </div>

      <p className="mt-4 text-lg leading-8 text-slate-400">
        A premium hand-crafted anime character pack suitable for games,
        animations, websites and commercial projects. Includes layered source
        files and PNG exports with transparent backgrounds.
      </p>
    </div>
  );
};
