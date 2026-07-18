"use client";

import { CreditCard, Landmark, Smartphone } from "lucide-react";

export const PaymentMethods = () => {
  return (
    <div className="mt-8">
      <h3 className="text-xl font-semibold text-white">Payment Method</h3>

      <div className="mt-5 space-y-4">
        <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-violet-500 bg-violet-500/10 p-5">
          <input
            defaultChecked
            type="radio"
            name="payment"
            className="accent-violet-500"
          />

          <Smartphone className="text-violet-300" />

          <span className="text-white">UPI</span>
        </label>

        <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-violet-500/30">
          <input type="radio" name="payment" className="accent-violet-500" />

          <CreditCard className="text-slate-300" />

          <span className="text-white">Card</span>
        </label>

        <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-white/10 bg-white/[0.03] p-5 hover:border-violet-500/30">
          <input type="radio" name="payment" className="accent-violet-500" />

          <Landmark className="text-slate-300" />

          <span className="text-white">Net Banking</span>
        </label>
      </div>
    </div>
  );
};
