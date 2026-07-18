"use client";

import { ShoppingCart, Zap } from "lucide-react";

interface PurchaseActionsProps {
  onBuy: () => void;
}

export const PurchaseActions = ({ onBuy }: PurchaseActionsProps) => {
  return (
    <div className="mt-6 rounded-[18px] border border-violet-500/20 bg-[#101845] p-5">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl font-bold text-white">₹499</h2>
        <span className="rounded-full bg-emerald-500/15 px-4 py-2 text-[12px] font-semibold text-emerald-400">
          Commercial License
        </span>
      </div>

      <div className="flex justify-between items-center gap-5">
        <button className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-[12px] border border-white/10 bg-white/[0.03] font-semibold text-white transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 text-sm cursor-pointer">
          <ShoppingCart size={20} />
          Add to Cart
        </button>

        <button
          onClick={onBuy}
          className="mt-4 flex h-12 w-full items-center justify-center gap-3 rounded-[12px] bg-violet-600 font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_20px_40px_rgba(124,58,237,.35)] text-sm cursor-pointer"
        >
          <Zap size={20} />
          Buy Now
        </button>
      </div>
    </div>
  );
};
