import { BecomeCreatorBanner } from "./banner/BecomeCreatorBanner";
import { CreatorsHero } from "./hero/CreatorsHero";
import { FeaturedCreator } from "./hero/FeaturedCreator";
import { CreatorsGrid } from "./listing/CreatorsGrid";
import { Pagination } from "./listing/Pagination";

export const FeaturePage = () => {
  return (
    <>
      <CreatorsHero />

      <FeaturedCreator />

      <div className="mx-auto mt-16 w-full max-w-5xl px-6">
        <CreatorsGrid />

        <div className="mt-10 flex justify-center">
          <Pagination />
        </div>
      </div>

      <div className="mx-auto my-10 w-full max-w-7xl flex justify-center">
        <BecomeCreatorBanner />
      </div>
    </>
  );
};
