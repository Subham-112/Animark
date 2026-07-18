"use client";

import { BrandFilter } from "./BrandFilter";
import { FileTypeFilter } from "./FileTypeFilter";
import { FormatFilter } from "./FormatFilter";
import { LicenseFilter } from "./LicenseFilter";
import { PriceFilter } from "./PriceFilter";

export const FilterSidebar = () => {
  return (
    <aside className="h-full overflow-hidden rounded-[16px] border border-white/10 bg-[#101845]">
      <div className="custom-scrollbar h-full overflow-y-auto p-4">
        <PriceFilter />
        <BrandFilter />
        <FileTypeFilter />
        <FormatFilter />
        <LicenseFilter />
      </div>
    </aside>
  );
};
