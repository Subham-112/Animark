"use client";

interface AssetPriceProps {
  price: number;
  originalPrice?: number;
}

export const AssetPrice = ({ price, originalPrice }: AssetPriceProps) => {
  return (
    <div className="flex items-end gap-2">
      <span className="text-xl font-bold text-white">
        ₹{price.toLocaleString()}
      </span>

      {originalPrice && originalPrice > price && (
        <span className="pb-0.5 text-sm text-slate-500 line-through">
          ₹{originalPrice.toLocaleString()}
        </span>
      )}
    </div>
  );
};
