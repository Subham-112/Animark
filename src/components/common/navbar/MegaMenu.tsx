"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface MegaMenuProps {
  open: boolean;
  sections: {
    title: string;
    items: {
      label: string;
      href: string;
    }[];
  }[];
}

export const MegaMenu = ({ open, sections }: MegaMenuProps) => {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 12 }}
          transition={{ duration: 0.18 }}
          className="absolute left-1/2 top-full mt-3 w-[320px] -translate-x-1/2 overflow-hidden rounded-2xl border border-white/10 bg-[#0B1228]/95 p-6 shadow-[0_20px_50px_rgba(0,0,0,.35)] backdrop-blur-xl"
        >
          <div className="grid grid-cols-2 gap-6">
            {sections.map((section) => (
              <div key={section.title}>
                <h4 className="mb-2 text-sm font-semibold uppercase tracking-wider text-violet-300">
                  {section.title}
                </h4>

                <div className="space-y-2">
                  {section.items.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="group flex items-center rounded-xl text-slate-300 transition-all duration-200 hover:text-white hover:font-bold"
                    >
                      <span>{item.label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
