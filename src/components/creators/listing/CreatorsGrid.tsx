"use client";

import { CreatorCard } from "../cards/CreatorCard";
import { creators } from "../data";
import { CreatorsToolbar } from "./CreatorsToolbar";

export const CreatorsGrid = () => {
  return (
    <>
      <CreatorsToolbar />

      <div className="grid gap-8 sm:grid-cols-2 xl:grid-cols-3">
        {creators.map((creator) => (
          <CreatorCard key={creator.id} creator={creator} />
        ))}
      </div>
    </>
  );
};
