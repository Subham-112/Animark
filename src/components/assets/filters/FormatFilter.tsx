"use client";

import { CheckboxFilter } from "./CheckboxFilter";
import { FilterSection } from "./FilterSection";

const formats = [
  {
    id: "full-body",
    label: "Full Body",
    count: 328,
  },
  {
    id: "half-body",
    label: "Half Body",
    count: 204,
  },
  {
    id: "portrait",
    label: "Portrait",
    count: 186,
  },
  {
    id: "sprite-sheet",
    label: "Sprite Sheet",
    count: 92,
  },
  {
    id: "chibi",
    label: "Chibi",
    count: 61,
  },
];

export const FormatFilter = () => {
  return (
    <FilterSection title="Character Format">
      <CheckboxFilter options={formats} />
    </FilterSection>
  );
};
