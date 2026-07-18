"use client";

export const ActionButtons = () => {
  return (
    <div className="mt-10 space-y-4">
      <button className="h-14 w-full rounded-2xl bg-violet-600 font-semibold text-white transition-all hover:bg-violet-500">
        View Order
      </button>

      <button className="h-14 w-full rounded-2xl border border-white/10 bg-white/[0.03] font-semibold text-white transition-all hover:border-violet-500/30">
        Continue Shopping
      </button>
    </div>
  );
};
