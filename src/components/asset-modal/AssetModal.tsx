"use client";

import { ArrowLeft, X } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

import { CheckoutPanel } from "./checkout/CheckoutPanel";
import { AssetModalOverlay } from "./AssetModalOverlay";
import { AssetGallery } from "./details/AssetGallery";
import { AssetInfo } from "./details/AssetInfo";
import { AssetTags } from "./details/AssetTags";
import { AssetSeller } from "./details/AssetSeller";
import { PurchaseActions } from "./details/PurchaseActions";
import { Asset } from "./context/AssetModalContext";

interface AssetModalProps {
  open: boolean;
  asset: Asset | null;
  onClose: () => void;
}

export const AssetModalStep = {
  DETAILS: "details",
  CHECKOUT: "checkout",
  SUCCESS: "success",
} as const;

export type AssetModalStep =
  (typeof AssetModalStep)[keyof typeof AssetModalStep];

export const AssetModal = ({ open, asset, onClose }: AssetModalProps) => {
  const [step, setStep] = useState<"details" | "checkout">(
    AssetModalStep.DETAILS,
  );

  if (!asset) return null;

  const isDetailStep = step === AssetModalStep.DETAILS;

  return (
    <AssetModalOverlay open={open} onClose={onClose}>
      <div className="flex h-full flex-col">
        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
          <div className={`flex ${!isDetailStep && "gap-5"} items-center`}>
            {!isDetailStep && (
              <button
                onClick={() => setStep(AssetModalStep.DETAILS)}
                className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/5 text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white cursor-pointer"
              >
                <ArrowLeft size={20} />
              </button>
            )}
            <h2 className="text-2xl font-bold text-white">
              {isDetailStep ? "Asset Details" : "Secure Checkout"}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="flex h-11 w-11 items-center justify-center rounded-[8px] bg-white/5 text-slate-400 transition-all duration-300 hover:bg-white/10 hover:text-white cursor-pointer"
          >
            <X size={26} />
          </button>
        </div>

        <div className="relative flex-1 overflow-hidden">
          <motion.div
            animate={{
              x: step === AssetModalStep.DETAILS ? "0%" : "-100%",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="flex h-full"
            style={{ width: "200%" }}
          >
            {/* DETAILS */}
            <div className="h-full min-w-full">
              <div className="grid h-full grid-cols-[460px_minmax(550px,750px)] gap-6 overflow-y-auto p-5 custom-scrollbar">
                <aside className="sticky top-0 self-start">
                  <AssetGallery />
                </aside>

                <div>
                  <AssetInfo />
                  <AssetTags />
                  <AssetSeller />
                  <PurchaseActions
                    onBuy={() => setStep(AssetModalStep.CHECKOUT)}
                  />
                </div>
              </div>
            </div>

            {/* CHECKOUT */}
            <div className="h-full min-w-7xl">
              <CheckoutPanel onBack={() => setStep(AssetModalStep.DETAILS)} />
            </div>
          </motion.div>
        </div>
      </div>
    </AssetModalOverlay>
  );
};
