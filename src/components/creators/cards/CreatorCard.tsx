"use client";

import Image from "next/image";
import { BadgeCheck, Star } from "lucide-react";

import { CreatorStats } from "./CreatorStats";
import { FollowButton } from "./FollowButton";

interface CreatorCardProps {
  creator: {
    name: string;
    avatar: string;
    profession: string;
    rating: number;
    assets: number;
    followers: string;
    downloads: string;
    following?: boolean;
  };
}

export const CreatorCard = ({ creator }: CreatorCardProps) => {
  return (
    <div className="rounded-lg border border-white/10 bg-[#0B1228] p-6 transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30">
      <div className="flex flex-col items-center">
        <div className="relative h-24 w-24 overflow-hidden rounded-full border-4 border-violet-500/20">
          <Image
            src={creator.avatar}
            alt={creator.name}
            fill
            className="object-cover"
          />
        </div>

        <h3 className="mt-5 text-2xl font-bold text-white">{creator.name}</h3>

        <p className="mt-2 text-slate-400">{creator.profession}</p>

        <div className="mt-3 flex items-center gap-2">
          <BadgeCheck size={18} className="text-cyan-400" />
          <span className="text-sm text-slate-300">Verified</span>
        </div>

        <div className="mt-4 flex items-center gap-2">
          <Star size={18} className="fill-yellow-400 text-yellow-400" />

          <span className="font-semibold text-white">{creator.rating}</span>
        </div>

        <CreatorStats
          assets={creator.assets}
          followers={creator.followers}
          downloads={creator.downloads}
        />

        <FollowButton following={creator.following} />
      </div>
    </div>
  );
};
