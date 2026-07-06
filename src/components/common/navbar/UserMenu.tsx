"use client";

import { useEffect, useRef, useState } from "react";
import { Menu, User } from "lucide-react";

import UserMenuDesktop from "./UserMenuDesktop";
import UserMenuMobile from "./UserMenuMobile";

export default function UserMenu() {
  const [open, setOpen] = useState(false);

  const menuRef = useRef<HTMLDivElement>(null);

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

      <UserMenuDesktop open={open} onClose={() => setOpen(false)} />
      <UserMenuMobile open={open} onClose={() => setOpen(false)} />
    </div>
  );
}
