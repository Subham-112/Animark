"use client";

import { CheckCircle2 } from "lucide-react";

import { DownloadCard } from "./DownloadCard";
import { OrderInfo } from "./OrderInfo";
import { ActionButtons } from "./ActionButtons";

export const SuccessPanel = () => {
  return (
    <div className="custom-scrollbar h-full overflow-y-auto px-8 py-10">
      <div className="flex flex-col items-center">
        <CheckCircle2 size={72} className="text-emerald-400" />

        <h2 className="mt-6 text-5xl font-bold text-white">
          Payment Successful
        </h2>

        <p className="mt-4 text-lg text-slate-400">
          Thank you for your purchase.
        </p>
      </div>

      <div className="mx-auto mt-14 max-w-2xl">
        <DownloadCard />

        <OrderInfo />

        <ActionButtons />
      </div>
    </div>
  );
};
