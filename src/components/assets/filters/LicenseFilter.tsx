"use client";

import { CheckboxFilter } from "./CheckboxFilter";
import { FilterSection } from "./FilterSection";

const licenses = [
  {
    id: "personal",
    label: "Personal Use",
    count: 512,
  },
  {
    id: "commercial",
    label: "Commercial Use",
    count: 328,
  },
  {
    id: "exclusive",
    label: "Exclusive License",
    count: 67,
  },
  {
    id: "extended",
    label: "Extended License",
    count: 94,
  },
];

export const LicenseFilter = () => {
  return (
    <FilterSection title="License">
      <CheckboxFilter options={licenses} />
    </FilterSection>
  );
};
