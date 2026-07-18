"use client";

import { AssetsHeader } from "./header/AssetsHeader";
import { FilterSidebar } from "./filters/FilterSidebar";
import { AssetsGrid } from "../common/assets/listing/AssetsGrid";
import { Pagination } from "../common/assets/listing/Pagination";
import { FeaturesBanner } from "./banners/FeaturesBanner";

export const AssetsPage = () => {
  return (
    <section className="w-full  pb-10">
      <AssetsHeader />

      <div className="mx-auto mt-6 flex max-w-[1700px] gap-8 px-20">
        <aside
          className="sticky hidden shrink-0 xl:block py-4"
          style={{
            // top: "calc(var(--navbar-height) + 24px)",
            top: "var(--navbar-height)",
            height: "calc(100vh - var(--navbar-height))",
            width: "340px",
          }}
        >
          <FilterSidebar />
        </aside>

        <main className="min-w-0 flex-1">
          <AssetsGrid />

          <div className="mt-6 flex justify-center">
            <Pagination />
          </div>
        </main>
      </div>

      <div className="mt-6">
        <FeaturesBanner />
      </div>
    </section>
  );
};
