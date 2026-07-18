"use client";

import { createContext } from "react";

export interface Asset {
  id: string;
  title: string;
  thumbnail: string;
  price: number;
}

export interface AssetModalContextType {
  open: boolean;
  asset: Asset | null;

  openAsset: (asset: Asset) => void;
  closeAsset: () => void;
}

export const AssetModalContext = createContext<AssetModalContextType | null>(
  null,
);
