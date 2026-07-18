"use client";

import Image from "next/image";

import { FreeBadge } from "./FreeBadge";
import { AssetMeta } from "./AssetMeta";
import { DownloadButton } from "./DownloadButton";

interface FreeAssetCardProps {
  asset: {
    title: string;
    creator: string;
    image: string;
    rating: number;
    downloads: string;
  };
}

export const FreeAssetCard = ({ asset }: FreeAssetCardProps) => {
  return (
    <div className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B1228] transition-all duration-300 hover:-translate-y-2 hover:border-emerald-500/40">
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={asset.image}
          alt={asset.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <FreeBadge />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04091B] via-transparent to-transparent" />
      </div>

      <div className="p-6">
        <h3 className="text-2xl font-bold text-white">{asset.title}</h3>

        <p className="mt-2 text-slate-400">by {asset.creator}</p>

        <AssetMeta rating={asset.rating} downloads={asset.downloads} />

        <DownloadButton />
      </div>
    </div>
  );
};
