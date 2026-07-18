"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

import { storeProfile } from "@/data/seller/store-profile";

export default function BrandingTab() {
  return (
    <div className="space-y-8">
      {/* Banner */}
      <div>
        <label className="mb-3 block text-sm font-medium text-slate-300">
          Store Banner
        </label>

        <div className="relative h-64 overflow-hidden rounded-2xl border border-white/10">
          <Image
            src={storeProfile.banner}
            alt="Store Banner"
            fill
            className="object-cover"
          />

          <div className="absolute inset-0 bg-black/40" />

          <button className="absolute bottom-5 right-5 flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-white transition hover:bg-violet-700">
            <Camera size={18} />
            Change Banner
          </button>
        </div>
      </div>

      {/* Logo */}
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-3xl border border-white/10">
          <Image
            src={storeProfile.logo}
            alt="Store Logo"
            fill
            className="object-cover"
          />
        </div>

        <div className="space-y-3">
          <div>
            <h3 className="text-xl font-semibold text-white">Store Logo</h3>

            <p className="mt-1 text-sm text-slate-400">
              Recommended size: 512 × 512 px
            </p>
          </div>

          <button className="flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 text-white transition hover:bg-violet-700">
            <Camera size={18} />
            Change Logo
          </button>
        </div>
      </div>

      {/* Theme Color */}
      <div>
        <label className="mb-3 block text-sm font-medium text-slate-300">
          Theme Color
        </label>

        <div className="flex flex-wrap gap-4">
          {[
            "#7C3AED",
            "#2563EB",
            "#16A34A",
            "#DC2626",
            "#EA580C",
            "#0891B2",
          ].map((color) => (
            <button
              key={color}
              className="h-12 w-12 rounded-full border-2 border-white/10 transition hover:scale-110"
              style={{ backgroundColor: color }}
            />
          ))}
        </div>

        <p className="mt-3 text-sm text-slate-400">
          This color will be used for buttons, highlights and accents on your
          public store page.
        </p>
      </div>

      {/* Save */}
      <div className="flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Branding
        </button>
      </div>
    </div>
  );
}
