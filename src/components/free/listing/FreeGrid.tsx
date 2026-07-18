"use client";

import { FreeToolbar } from "./FreeToolbar";
import { FreeAssetCard } from "../cards/FreeAssetCard";
import { freeAssets } from "../data";

export const FreeGrid = () => {
  return (
    <>
      <FreeToolbar />

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {freeAssets.map((asset) => (
          <FreeAssetCard key={asset.id} asset={asset} />
        ))}
      </div>
    </>
  );
};
