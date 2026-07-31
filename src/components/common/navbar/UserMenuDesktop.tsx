"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";

import { userMenuItems, logoutMenuItem } from "./data";

interface UserMenuDesktopProps {
  open: boolean;
  isLoggedIn: boolean;
  onClose: () => void;
  onLogout?: () => void;
}

export default function UserMenuDesktop({
  open,
  isLoggedIn,
  onClose,
  onLogout,
}: UserMenuDesktopProps) {
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
            {itemsToRender.map((item, index) => {
              if ("divider" in item && item.divider) {
                return (
                  <div key={index} className="my-2 border-t border-white/10" />
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
                    className="group flex w-full items-center justify-between rounded-sm px-4 py-3 text-red-400 transition-all duration-200 hover:bg-red-500/10"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="h-5 w-5 text-red-400" />
                      <span className="text-sm font-medium text-red-400">
                        {menuItem.title}
                      </span>
                    </div>
                    <ChevronRight className="h-4 w-4 text-red-400/50 transition-transform duration-200 group-hover:translate-x-1" />
                  </button>
                );
              }

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

