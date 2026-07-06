"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { userMenuItems } from "./data";

interface UserMenuMobileProps {
  open: boolean;
  onClose: () => void;
}

export default function UserMenuMobile({ open, onClose }: UserMenuMobileProps) {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm md:hidden"
          />

          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 28,
            }}
            className="fixed bottom-0 left-0 right-0 z-50 overflow-hidden rounded-t-[32px] border-t border-white/10 bg-[#0B1126] shadow-[0_-20px_80px_rgba(0,0,0,.45)] md:hidden"
          >
            <div className="flex justify-center pt-3">
              <div className="h-1.5 w-14 rounded-full bg-white/15" />
            </div>

            <div className="border-b border-white/10 px-6 py-5">
              <h3 className="text-xl font-semibold text-white">
                Welcome to Animark
              </h3>

              <p className="mt-1 text-sm text-white/55">
                Buy & sell premium digital assets.
              </p>
            </div>

            <div className="max-h-[70vh] overflow-y-auto py-3">
              {userMenuItems.map((item, index) => {
                if ("divider" in item && item.divider) {
                  return (
                    <div
                      key={`divider-${index}`}
                      className="my-2 border-t border-white/10"
                    />
                  );
                }

                const menuItem = item as Exclude<
                  typeof item,
                  { divider: true }
                >;
                const Icon = menuItem.icon;

                return (
                  <Link
                    key={menuItem.title}
                    href={menuItem.href}
                    onClick={onClose}
                    className="group mx-3 flex items-center gap-4 rounded-2xl px-4 py-3 transition-all duration-300 active:scale-[0.98] active:bg-violet-500/10"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5">
                      <Icon className="h-5 w-5 text-violet-300" />
                    </div>

                    <div>
                      <p className="font-medium text-white">{menuItem.title}</p>

                      {menuItem.description && (
                        <p className="text-xs text-white/45">
                          {menuItem.description}
                        </p>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>

            <div className="border-t border-white/10 px-6 py-5 text-center text-xs text-white/40">
              © 2026 Animark
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
