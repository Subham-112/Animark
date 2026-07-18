"use client";

import { Lock } from "lucide-react";

export const CheckoutFooter = () => {
  return (
    <div className="absolute w-full bottom-0">
      <button className="flex h-14 w-full items-center justify-center gap-3 rounded-2xl bg-violet-600 text-lg font-semibold text-white transition-all duration-300 hover:bg-violet-500 hover:shadow-[0_20px_40px_rgba(124,58,237,.35)]">
        <Lock size={20} />
        Continue to Payment
      </button>

      <p className="mt-2 text-center text-sm text-slate-500">
        Payments are securely processed through Razorpay.
      </p>
    </div>
  );
};
