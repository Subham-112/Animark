"use client";

import Image from "next/image";
import Link from "next/link";
import { Star, BadgeCheck } from "lucide-react";
import { CreatorBadge } from "../cards/CreatorBadge";

const creators = [
  {
    badge: "Top Creator",
    name: "Salman Khan",
    role: "2D Character Artist",
    rating: 4.9,
    assets: 1245,
    followers: "12K",
    image: "/images/avatar-1.jpg",
  },
  {
    badge: "Featured Studio",
    name: "Pixel Forge",
    role: "Animation Studio",
    rating: 5.0,
    assets: 870,
    followers: "8K",
    image: "/images/avatar-2.jpg",
  },
  {
    badge: "Rising Star",
    name: "Animation Craft",
    role: "Background Designer",
    rating: 4.8,
    assets: 294,
    followers: "3K",
    image: "/images/avatar-3.jpg",
  },
];

export const FeaturedCreator = () => {
  return (
    <section className="mx-auto w-full mt-12 max-w-[1700px] px-6">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-bold text-white">
          Featured <span className="text-gradient">Creators</span>
        </h2>

        <p className="mx-auto mt-5 max-w-xl text-lg text-slate-400">
          Meet some of the most loved artists and studios building premium
          assets on Animark.
        </p>
      </div>

      <div className="mx-auto w-full max-w-5xl grid gap-8 lg:grid-cols-3">
        {creators.map((creator) => (
          <div
            key={creator.name}
            className="group overflow-hidden rounded-lg border border-white/10 bg-[#0B1228] transition-all duration-300 hover:-translate-y-2 hover:border-violet-400/30"
          >
            <div className="flex flex-col items-center p-8">
              <CreatorBadge text={creator.badge} />

              <div className="relative mt-7 h-28 w-28 overflow-hidden rounded-full border-4 border-violet-500/20">
                <Image
                  src={creator.image}
                  alt={creator.name}
                  fill
                  className="object-cover"
                />
              </div>

              <h3 className="mt-6 text-2xl font-bold text-white">
                {creator.name}
              </h3>

              <p className="mt-2 text-slate-400">{creator.role}</p>

              <div className="mt-4 flex items-center gap-2">
                <BadgeCheck size={18} className="text-cyan-400" />
                <span className="text-sm text-slate-300">Verified Creator</span>
              </div>

              <div className="mt-5 flex items-center gap-2">
                <Star size={18} className="fill-yellow-400 text-yellow-400" />
                <span className="font-semibold text-white">
                  {creator.rating}
                </span>
              </div>

              <div className="mt-8 flex w-full justify-between rounded-lg border border-white/10 bg-white/[0.03] p-4">
                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    {creator.assets}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">Assets</p>
                </div>

                <div className="text-center">
                  <p className="text-xl font-bold text-white">
                    {creator.followers}
                  </p>

                  <p className="mt-1 text-sm text-slate-400">Followers</p>
                </div>
              </div>

              <Link
                href="#"
                className="mt-8 w-full rounded-xl bg-violet-600 py-3 text-center font-semibold text-white transition-all duration-300 hover:bg-violet-500"
              >
                View Profile
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
