"use client";

import { Download, Star } from "lucide-react";

interface AssetMetaProps {
  rating: number;
  downloads: string;
}

export const AssetMeta = ({ rating, downloads }: AssetMetaProps) => {
  return (
    <div className="mt-5 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Star size={18} className="fill-yellow-400 text-yellow-400" />

        <span className="font-medium text-white">{rating}</span>
      </div>

      <div className="flex items-center gap-2 text-slate-400">
        <Download size={17} />

        <span>{downloads}</span>
      </div>
    </div>
  );
};
