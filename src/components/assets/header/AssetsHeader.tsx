"use client";

import { Breadcrumb } from "./Breadcrumb";
import { CategorySlider } from "./CategorySlider";
import { AssetsToolbar } from "@/components/common/assets/listing/AssetsToolbar";

export const AssetsHeader = () => {
  return (
    <header className="border-b border-white/5 bg-[#081128] px-16">
      <div className="mx-auto max-w-[1700px] px-5 py-3">
        <div className="flex items-center justify-between">
          <Breadcrumb />

          <p className="mt-2 hidden text-sm text-slate-400 lg:block">
            Showing <span className="font-semibold text-white">1–12</span> of{" "}
            <span className="font-semibold text-white">804</span> assets
          </p>
        </div>

        <div className="">
          <CategorySlider />
        </div>

        <div className="mt-4">
          <AssetsToolbar />
        </div>
      </div>
    </header>
  );
};
