"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";

import { userMenuItems, logoutMenuItem } from "./data";

interface UserMenuMobileProps {
  open: boolean;
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout?: () => void;
}

export default function UserMenuMobile({ open, isLoggedIn, onClose, onLogout }: UserMenuMobileProps) {
  let itemsToRender: any[] = [];

  if (isLoggedIn) {
    // Show from "Become a Seller" onwards and add logout button
    const becomeSellerIndex = userMenuItems.findIndex(
      (item) => "title" in item && item.title === "Become a Seller"
    );
    const subItems = becomeSellerIndex !== -1 ? userMenuItems.slice(becomeSellerIndex) : userMenuItems;
    itemsToRender = [...subItems, { divider: true }, logoutMenuItem];
  } else {
    // Show all options except "Become a Seller" and logout
    itemsToRender = userMenuItems.filter(
      (item) => !("title" in item && item.title === "Become a Seller")
    );
  }

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
              {itemsToRender.map((item, index) => {
                if ("divider" in item && item.divider) {
                  return (
                    <div
                      key={`divider-${index}`}
                      className="my-2 border-t border-white/10"
                    />
                  );
                }

                const menuItem = item;
                const Icon = menuItem.icon;

                if (menuItem.isLogout) {
                  return (
                    <button
                      key={menuItem.title}
                      type="button"
                      onClick={() => {
                        onClose();
                        onLogout?.();
                      }}
                      className="group mx-3 flex w-[calc(100%-24px)] items-center gap-4 rounded-2xl px-4 py-3 text-red-400 transition-all duration-300 active:scale-[0.98] active:bg-red-500/10"
                    >
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-red-500/20 bg-red-500/10">
                        <Icon className="h-5 w-5 text-red-400" />
                      </div>

                      <div className="text-left">
                        <p className="font-medium text-red-400">{menuItem.title}</p>
                        {menuItem.description && (
                          <p className="text-xs text-red-400/60">
                            {menuItem.description}
                          </p>
                        )}
                      </div>
                    </button>
                  );
                }

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

