"use client";

import { storeProfile } from "@/data/seller/store-profile";

export default function GeneralTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Store Name
        </label>

        <input
          defaultValue={storeProfile.name}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Username
        </label>

        <input
          defaultValue={storeProfile.username}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="lg:col-span-2">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Tagline
        </label>

        <input
          defaultValue={storeProfile.tagline}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="lg:col-span-2">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Description
        </label>

        <textarea
          rows={6}
          defaultValue={storeProfile.description}
          className="w-full rounded-xl border border-white/10 bg-[#04091B] p-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="lg:col-span-2 flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save General Information
        </button>
      </div>
    </div>
  );
}
