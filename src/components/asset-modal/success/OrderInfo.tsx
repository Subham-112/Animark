"use client";

export const OrderInfo = () => {
  return (
    <div className="mt-8 rounded-3xl border border-white/10 bg-white/[0.03] p-6">
      <div className="flex justify-between">
        <span className="text-slate-400">Order ID</span>

        <span className="text-white">#ORD23938482</span>
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-slate-400">Purchase Date</span>

        <span className="text-white">12 Jul 2026</span>
      </div>

      <div className="mt-4 flex justify-between">
        <span className="text-slate-400">Payment</span>

        <span className="text-emerald-400">Successful</span>
      </div>
    </div>
  );
};
