"use client";

import { ShoppingBag } from "lucide-react";

export const OrderSummary = () => {
  return (
    <div className="rounded-lg border border-white/10 bg-[#121A43] px-6 py-5">
      {/* Header */}
      <div className="flex items-center gap-3">
        <div className="flex h-11 w-11 items-center justify-center rounded-[10px] bg-violet-500/20">
          <ShoppingBag size={20} className="text-violet-300" />
        </div>

        <div>
          <h3 className="text-xl font-bold text-white">Order Summary</h3>

          <p className="text-sm text-slate-400">Review before payment</p>
        </div>
      </div>

      {/* Product */}
      <div className="mt-4 rounded-[12px] border border-white/10 bg-white/[0.03] p-3 px-4">
        <div className="flex justify-between items-center gap-5">
          <div>
            <h4 className="text-base font-semibold text-white">
              Anime Girl Character Pack
            </h4>
            <p className="mt-1 text-sm text-slate-400">Commercial License</p>
          </div>

          <span className="text-2xl font-bold text-violet-300">₹499</span>
        </div>
      </div>

      {/* Breakdown */}
      <div className="mt-4 space-y-3">
        <div className="flex justify-between text-slate-300">
          <span>Asset Price</span>
          <span>₹499</span>
        </div>

        <div className="flex justify-between">
          <span className="text-slate-300">Discount</span>

          <span className="font-medium text-emerald-400">-₹50</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>GST (18%)</span>
          <span>₹81</span>
        </div>

        <div className="flex justify-between text-slate-300">
          <span>Platform Fee</span>
          <span>₹0</span>
        </div>
      </div>

      {/* Divider */}
      <div className="my-4 border-t border-white/10" />

      {/* Total */}
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-slate-400">Total Amount</p>
          <p className="mt-1 text-2xl font-bold text-white">₹530</p>
        </div>

        <div className="rounded-[10px] bg-violet-500/15 px-4 py-1.5">
          <span className="text-sm font-semibold text-violet-300">
            Secure Payment
          </span>
        </div>
      </div>
    </div>
  );
};
