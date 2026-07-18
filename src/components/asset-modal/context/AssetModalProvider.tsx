"use client";

import { useState } from "react";

import { Asset, AssetModalContext } from "./AssetModalContext";
import { AssetModal } from "../AssetModal";

export const AssetModalProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [open, setOpen] = useState(false);
  const [asset, setAsset] = useState<Asset | null>(null);

  const openAsset = (asset: Asset) => {
    setAsset(asset);
    setOpen(true);
  };

  const closeAsset = () => {
    setOpen(false);

    setTimeout(() => {
      setAsset(null);
    }, 300);
  };

  return (
    <AssetModalContext.Provider
      value={{
        open,
        asset,
        openAsset,
        closeAsset,
      }}
    >
      {children}

      <AssetModal open={open} asset={asset} onClose={closeAsset} />
    </AssetModalContext.Provider>
  );
};
