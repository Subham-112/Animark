"use client";

import { CheckboxFilter } from "./CheckboxFilter";
import { FilterSection } from "./FilterSection";

const brands = [
  {
    id: "animark",
    label: "Animark Studio",
    count: 186,
  },
  {
    id: "pixel",
    label: "Pixel Forge",
    count: 142,
  },
  {
    id: "anime",
    label: "Anime Craft",
    count: 96,
  },
  {
    id: "creative",
    label: "Creative Box",
    count: 63,
  },
  {
    id: "others",
    label: "Others",
    count: 417,
  },
];

export const BrandFilter = () => {
  return (
    <FilterSection title="Brand">
      <CheckboxFilter options={brands} />
    </FilterSection>
  );
};
