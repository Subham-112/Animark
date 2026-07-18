"use client";

import { FreeHero } from "./hero/FreeHero";
import { WeeklyPicks } from "./hero/WeeklyPicks";
import { FreeGrid } from "./listing/FreeGrid";
import { Pagination } from "./listing/Pagination";
import { PremiumBanner } from "./banner/PremiumBanner";

export const FreePage = () => {
  return (
    <section className="bg-[#04091B] pb-20">
      <FreeHero />

      <WeeklyPicks />

      <div className="mx-auto mt-20 max-w-[1700px] px-6">
        <FreeGrid />

        <div className="mt-14 flex justify-center">
          <Pagination />
        </div>
      </div>

      <div className="mt-20">
        <PremiumBanner />
      </div>
    </section>
  );
};
