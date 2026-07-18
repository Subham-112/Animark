"use client";

import { AssetCard } from "../AssetCard";
import { assets } from "@/components/assets/data";

export const AssetsGrid = () => {
  return (
    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4">
      {assets.map((asset) => (
        <AssetCard key={asset.id} {...asset} />
      ))}
    </div>
  );
};
