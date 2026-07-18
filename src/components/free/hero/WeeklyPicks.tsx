"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Clock, Star } from "lucide-react";

import { FreeBadge } from "../cards/FreeBadge";

const weeklyAssets = [
  {
    title: "Anime Character Pack",
    image: "/images/free/free-1.jpg",
    rating: 4.9,
    expires: "2 Days Left",
  },
  {
    title: "UI Kit Collection",
    image: "/images/free/free-2.jpg",
    rating: 4.8,
    expires: "NEW",
  },
  {
    title: "Fantasy Background",
    image: "/images/free/free-3.jpg",
    rating: 5.0,
    expires: "5 Days Left",
  },
];

export const WeeklyPicks = () => {
  return (
    <section className="mx-auto mt-24 max-w-[1700px] px-6">
      <div className="mb-14 text-center">
        <h2 className="text-5xl font-bold text-white">
          Weekly <span className="text-gradient">Free Drops</span>
        </h2>

        <p className="mx-auto mt-5 max-w-2xl text-lg text-slate-400">
          Every week we release premium assets for free. Download them before
          they're replaced with the next collection.
        </p>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        {weeklyAssets.map((asset) => (
          <div
            key={asset.title}
            className="group overflow-hidden rounded-3xl border border-white/10 bg-[#0B1228] transition-all duration-300 hover:-translate-y-2 hover:border-violet-500/30"
          >
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={asset.image}
                alt={asset.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />

              <FreeBadge />

              <div className="absolute inset-0 bg-gradient-to-t from-[#04091B] via-transparent to-transparent" />
            </div>

            <div className="space-y-5 p-6">
              <h3 className="text-2xl font-bold text-white">{asset.title}</h3>

              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Star size={18} className="fill-yellow-400 text-yellow-400" />

                  <span className="text-white">{asset.rating}</span>
                </div>

                <div className="flex items-center gap-2 text-emerald-400">
                  <Clock size={17} />

                  <span className="text-sm font-medium">{asset.expires}</span>
                </div>
              </div>

              <Link
                href="#"
                className="flex items-center justify-center gap-2 rounded-xl bg-emerald-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-emerald-400"
              >
                Download Free
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
