"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { FAQ } from "./types";

interface FAQItemProps {
  faq: FAQ;
}

export const FAQItem = ({ faq }: FAQItemProps) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10 bg-[#0B1228] transition-all duration-300 hover:border-violet-400/20">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className="flex w-full cursor-pointer items-center justify-between px-6 py-5 text-left"
      >
        <h3 className="pr-6 text-lg font-semibold text-white">
          {faq.question}
        </h3>

        <ChevronDown
          size={22}
          className={`text-slate-400 transition-transform duration-300 ${
            open ? "rotate-180 text-violet-300" : ""
          }`}
        />
      </button>

      <div
        className={`grid transition-all duration-300 ${
          open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <div className="border-t border-white/10 px-6 py-5">
            <p className="leading-7 text-slate-400">{faq.answer}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
