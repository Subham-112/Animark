"use client";

import Image from "next/image";
import { Camera, CheckCircle2 } from "lucide-react";

import { storeProfile } from "@/data/seller/store-profile";

export default function StoreBanner() {
  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#081223]">
      <div className="relative h-72 w-full">
        <Image
          src={storeProfile.banner}
          alt={storeProfile.name}
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#081223] via-[#081223]/40 to-transparent" />

        <button className="absolute right-6 top-6 flex items-center gap-2 rounded-xl border border-white/20 bg-black/40 px-4 py-2 text-sm font-medium text-white backdrop-blur-md transition hover:bg-black/60">
          <Camera size={18} />
          Change Banner
        </button>
      </div>

      <div className="relative px-8 pb-8">
        <div className="-mt-16 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div className="flex flex-col gap-5 sm:flex-row sm:items-end">
            <div className="relative h-32 w-32 overflow-hidden rounded-3xl border-4 border-[#081223] bg-[#04091B] shadow-xl">
              <Image
                src={storeProfile.logo}
                alt={storeProfile.name}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="mb-3 flex flex-wrap items-center gap-3">
                <h2 className="text-3xl font-bold text-white">
                  {storeProfile.name}
                </h2>

                <span className="inline-flex items-center gap-2 rounded-full bg-green-500/20 px-3 py-1 text-sm font-medium text-green-400">
                  <CheckCircle2 size={16} />
                  Active Store
                </span>
              </div>

              <p className="text-slate-400">{storeProfile.username}</p>

              <p className="mt-2 max-w-2xl text-slate-300">
                {storeProfile.tagline}
              </p>
            </div>
          </div>

          <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 font-medium text-white transition hover:bg-violet-700">
            <Camera size={18} />
            Change Logo
          </button>
        </div>

        <div className="mt-8 grid gap-5 rounded-2xl border border-white/10 bg-[#04091B] p-6 sm:grid-cols-3">
          <div>
            <p className="text-sm text-slate-400">Followers</p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {storeProfile.stats.followers.toLocaleString("en-IN")}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Products</p>

            <h3 className="mt-2 text-2xl font-bold text-white">
              {storeProfile.stats.products}
            </h3>
          </div>

          <div>
            <p className="text-sm text-slate-400">Store Rating</p>

            <h3 className="mt-2 text-2xl font-bold text-yellow-400">
              {storeProfile.stats.rating} ★
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}
