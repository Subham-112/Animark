"use client";

import { useContext } from "react";

import { AssetModalContext } from "./AssetModalContext";

export const useAssetModal = () => {
  const context = useContext(AssetModalContext);

  if (!context) {
    throw new Error("useAssetModal must be used inside AssetModalProvider");
  }

  return context;
};
