"use client";

import { CheckboxFilter } from "./CheckboxFilter";
import { FilterSection } from "./FilterSection";

const fileTypes = [
  {
    id: "png",
    label: "PNG",
    count: 368,
  },
  {
    id: "psd",
    label: "PSD",
    count: 214,
  },
  {
    id: "ai",
    label: "Adobe Illustrator",
    count: 171,
  },
  {
    id: "clip",
    label: "Clip Studio",
    count: 81,
  },
  {
    id: "svg",
    label: "SVG",
    count: 147,
  },
];

export const FileTypeFilter = () => {
  return (
    <FilterSection title="File Type">
      <CheckboxFilter options={fileTypes} />
    </FilterSection>
  );
};
