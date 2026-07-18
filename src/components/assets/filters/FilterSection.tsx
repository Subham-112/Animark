"use client";

import { ReactNode } from "react";
import { ChevronDown } from "lucide-react";

interface FilterSectionProps {
  title: string;
  children: ReactNode;
  defaultOpen?: boolean;
}

export const FilterSection = ({
  title,
  children,
  defaultOpen = true,
}: FilterSectionProps) => {
  return (
    <section className="border-b border-white/10 last:border-none pb-4">
      <button
        type="button"
        className="flex w-full items-center justify-between py-4"
      >
        <h3 className="text-lg font-semibold text-white">{title}</h3>

        <ChevronDown
          size={18}
          className={`text-slate-400 transition-transform ${
            defaultOpen ? "rotate-0" : "-rotate-90"
          }`}
        />
      </button>

      {defaultOpen && <div>{children}</div>}
    </section>
  );
};
