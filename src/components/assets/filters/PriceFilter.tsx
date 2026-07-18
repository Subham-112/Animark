"use client";

import { useState } from "react";
import { FilterSection } from "./FilterSection";

export const PriceFilter = () => {
  const [price, setPrice] = useState(16500);

  return (
    <FilterSection title="Price">
      <div className="space-y-4">
        <input
          type="range"
          min={0}
          max={16500}
          step={100}
          value={price}
          onChange={(e) => setPrice(Number(e.target.value))}
          className="h-2 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-violet-500"
        />

        <div className="flex items-center justify-between gap-4">
          <p className="text-sm text-slate-300">
            Price :
            <span className="ml-2 font-semibold text-white">
              ₹0 — ₹{price.toLocaleString()}
            </span>
          </p>

          <button className="rounded-[10px] bg-violet-500 px-5 py-1 text-sm font-semibold text-white transition-all duration-300 hover:bg-violet-400">
            Filter
          </button>
        </div>
      </div>
    </FilterSection>
  );
};
