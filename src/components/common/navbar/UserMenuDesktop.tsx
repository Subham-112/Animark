"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { userMenuItems } from "./data";

interface UserMenuDesktopProps {
  open: boolean;
  onClose: () => void;
}

export default function UserMenuDesktop({
  open,
  onClose,
}: UserMenuDesktopProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
            y: 10,
            scale: 0.96,
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
          }}
          exit={{
            opacity: 0,
            y: 10,
            scale: 0.96,
          }}
          transition={{
            duration: 0.2,
          }}
          className="absolute z-[100] hidden overflow-hidden rounded-lg border border-white/10 backdrop-blur-6xl md:block"
          style={{ width: 300, backgroundColor: "#0B1126", right: 0, top: 55 }}
        >
          <div className="border-b border-white/10 px-5 py-4 w-full">
            <h3 className="text-lg font-semibold text-white">Welcome 👋</h3>

            <p className="mt-1 text-sm text-white/55">Continue with Animark</p>
          </div>

          <div className="p-2">
            {userMenuItems.map((item, index) => {
              if ("divider" in item && item.divider) {
                return (
                  <div key={index} className="my-2 border-t border-white/10" />
                );
              }

              const menuItem = item as Exclude<typeof item, { divider: true }>;
              const Icon = menuItem.icon;

              return (
                <Link
                  key={menuItem.title}
                  href={menuItem.href}
                  onClick={onClose}
                  className="group flex w-full items-center justify-between rounded-sm px-4 py-3 transition-all duration-200 hover:bg-violet-500/10"
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5 text-violet-300" />

                    <span className="text-sm font-medium text-white">
                      {menuItem.title}
                    </span>
                  </div>

                  <ChevronRight className="h-4 w-4 text-white/30 transition-transform duration-200 group-hover:translate-x-1 group-hover:text-violet-300" />
                </Link>
              );
            })}
          </div>

          <div className="border-t border-white/10 px-5 py-3">
            <div className="flex items-center justify-center gap-3 text-xs text-white/45">
              <Link
                href="/privacy-policy"
                className="transition-colors hover:text-violet-300"
              >
                Privacy
              </Link>

              <span>•</span>

              <Link
                href="/terms-and-conditions"
                className="transition-colors hover:text-violet-300"
              >
                Terms
              </Link>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
