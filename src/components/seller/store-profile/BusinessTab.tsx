"use client";

import { storeProfile } from "@/data/seller/store-profile";

export default function BusinessTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Business Email
        </label>

        <input
          defaultValue={storeProfile.businessInformation.businessEmail}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Support Email
        </label>

        <input
          defaultValue={storeProfile.businessInformation.supportEmail}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Phone Number
        </label>

        <input
          defaultValue={storeProfile.businessInformation.phone}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Country
        </label>

        <input
          defaultValue={storeProfile.businessInformation.country}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          State
        </label>

        <input
          defaultValue={storeProfile.businessInformation.state}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          City
        </label>

        <input
          defaultValue={storeProfile.businessInformation.city}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="lg:col-span-2">
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Timezone
        </label>

        <input
          defaultValue={storeProfile.businessInformation.timezone}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        />
      </div>

      <div className="flex justify-end lg:col-span-2">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Business Information
        </button>
      </div>
    </div>
  );
}
