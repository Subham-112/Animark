"use client";

interface DiscountBadgeProps {
  discount: number;
}

export const DiscountBadge = ({ discount }: DiscountBadgeProps) => {
  if (discount <= 0) return null;

  return (
    <div className="absolute left-4 top-4 rounded-xl bg-gradient-to-r from-pink-500 to-violet-500 px-3 py-1 text-xs font-bold text-white shadow-lg">
      -{discount}%
    </div>
  );
};
