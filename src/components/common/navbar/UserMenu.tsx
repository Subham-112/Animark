"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { User } from "lucide-react";

import UserMenuDesktop from "./UserMenuDesktop";
import UserMenuMobile from "./UserMenuMobile";
import { COOKIE_NAMES } from "@/utils/cookies-names";
import { useAuthStore } from "@/store/authStore";

interface UserMenuProps {
  onLogout?: () => void;
}

export default function UserMenu({ onLogout }: UserMenuProps) {
  const [open, setOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const pathname = usePathname();
  const storeIsAuthenticated = useAuthStore((state) => state.isAuthenticated);

  const menuRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkAuth = () => {
      if (typeof document !== "undefined") {
        const hasToken = document.cookie
          .split("; ")
          .some((item) =>
            item.startsWith(`${COOKIE_NAMES.IS_AUTHENTICATED}=true`),
          );

        setIsLoggedIn(hasToken || storeIsAuthenticated);
      }
    };

    checkAuth();
  }, [pathname, storeIsAuthenticated]);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClick);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClick);
      document.removeEventListener("keydown", handleEscape);
    };
  }, []);

  return (
    <div ref={menuRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((prev) => !prev)}
        className="glass flex h-11 w-11 cursor-pointer items-center justify-center rounded-full border border-white/10 transition-all duration-300 hover:border-violet-400/40 hover:bg-violet-500/10"
      >
        <User className="h-5 w-5" />
      </button>

      <UserMenuDesktop
        open={open}
        isLoggedIn={isLoggedIn}
        onClose={() => setOpen(false)}
        onLogout={onLogout}
      />
      <UserMenuMobile
        open={open}
        isLoggedIn={isLoggedIn}
        onClose={() => setOpen(false)}
        onLogout={onLogout}
      />
    </div>
  );
}
