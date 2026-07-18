"use client";

import { storeProfile } from "@/data/seller/store-profile";

export default function SocialLinksTab() {
  return (
    <div className="space-y-6">
      {[
        {
          label: "Website",
          value: storeProfile.socialLinks.website,
        },
        {
          label: "YouTube",
          value: storeProfile.socialLinks.youtube,
        },
        {
          label: "Instagram",
          value: storeProfile.socialLinks.instagram,
        },
        {
          label: "LinkedIn",
          value: storeProfile.socialLinks.linkedin,
        },
        {
          label: "X (Twitter)",
          value: storeProfile.socialLinks.x,
        },
      ].map((item) => (
        <div key={item.label}>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            {item.label}
          </label>

          <input
            defaultValue={item.value}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>
      ))}

      <div className="flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Social Links
        </button>
      </div>
    </div>
  );
}
