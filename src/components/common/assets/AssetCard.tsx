"use client";

import Image from "next/image";
import Link from "next/link";
import { Heart, Star } from "lucide-react";

import { DiscountBadge } from "./DiscountBadge";
import { AssetPrice } from "./AssetPrice";
import { WishlistButton } from "./WishlistButton";
import { useAssetModal } from "@/components/asset-modal/context/useAssetModal";

interface AssetCardProps {
  id: string;
  title: string;
  image: string;
  creator: string;
  price: number;
  originalPrice?: number;
  discount?: number;
  rating: number;
  totalReviews: number;
}

export const AssetCard = ({
  id,
  title,
  image,
  creator,
  price,
  originalPrice,
  discount = 0,
  rating,
  totalReviews,
}: AssetCardProps) => {
  const { openAsset } = useAssetModal();

  return (
    <div
      onClick={() =>
        openAsset({
          id,
          title,
          thumbnail: image,
          price,
        })
      }
      className="h-[320px] group overflow-hidden rounded-[16px] border border-white/10 bg-[#0D1533] transition-all duration-300 hover:-translate-y-1 hover:border-violet-500/40 hover:shadow-[0_25px_60px_rgba(124,58,237,.18)] cursor-pointer"
    >
      <div className="relative h-[65%] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04091B] via-transparent to-transparent" />

        <DiscountBadge discount={discount} />
        <WishlistButton />
      </div>

      <div className="space-y-2 p-3 h-[35%]">
        <div>
          <h3 className="line-clamp-1 text-[16px] font-bold text-white">
            {title}
          </h3>

          <p className="mt-1 text-sm text-slate-400">by {creator}</p>
        </div>

        <div className="flex justify-between items center">
          <AssetPrice price={price} originalPrice={originalPrice} />

          <div className="flex items-center gap-2">
            <Star size={16} className="fill-yellow-400 text-yellow-400" />

            <span className="font-medium text-white">{rating.toFixed(1)}</span>

            <span className="text-sm text-slate-500">({totalReviews})</span>
          </div>
        </div>
      </div>
    </div>
  );
};
