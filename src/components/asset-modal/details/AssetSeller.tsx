"use client";

import Image from "next/image";
import { BadgeCheck, ChevronRight } from "lucide-react";

export const AssetSeller = () => {
  return (
    <div className="mt-6 rounded-[18px] border border-white/10 bg-white/[0.03] p-5 py-4">
      <p className="mb-3 text-lg font-semibold text-white">Creator</p>

      <button className="flex w-full items-center justify-between cursor-pointer">
        <div className="flex items-center gap-4">
          <div className="relative h-13 w-13 overflow-hidden rounded-full">
            <Image
              src="/images/avatar-1.jpg"
              alt=""
              fill
              className="object-cover"
            />
          </div>

          <div className="text-left">
            <h4 className="font-semibold text-white">Salman Khan</h4>

            <div className="mt-1 flex items-center gap-2">
              <BadgeCheck size={16} className="text-cyan-400" />

              <span className="text-sm text-slate-400">Verified Creator</span>
            </div>
          </div>
        </div>

        <ChevronRight size={20} className="text-slate-500" />
      </button>
    </div>
  );
};
