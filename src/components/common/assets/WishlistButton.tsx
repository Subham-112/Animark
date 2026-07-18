"use client";

import { Heart } from "lucide-react";

interface WishlistButtonProps {
  active?: boolean;
  onClick?: () => void;
}

export const WishlistButton = ({
  active = false,
  onClick,
}: WishlistButtonProps) => {
  return (
    <button
      type="button"
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick?.();
      }}
      className={`absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full border backdrop-blur-xl transition-all duration-300 ${
        active
          ? "border-pink-500 bg-pink-500 text-white"
          : "border-white/10 bg-black/30 text-white hover:border-violet-500 hover:bg-violet-500"
      }`}
    >
      <Heart size={18} className={active ? "fill-current" : ""} />
    </button>
  );
};
