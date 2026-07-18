"use client";

import Image from "next/image";
import { Camera } from "lucide-react";

import { settingsData } from "@/data/seller/settings";

export default function AccountTab() {
  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-6 md:flex-row md:items-center">
        <div className="relative h-32 w-32 overflow-hidden rounded-full border-4 border-white/10">
          <Image
            src={settingsData.account.profileImage}
            alt={settingsData.account.fullName}
            fill
            className="object-cover"
          />
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-white">
            {settingsData.account.fullName}
          </h2>

          <p className="mt-1 text-slate-400">{settingsData.account.email}</p>

          <button className="mt-4 flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-700">
            <Camera size={18} />
            Change Photo
          </button>
        </div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Full Name
          </label>

          <input
            defaultValue={settingsData.account.fullName}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Username
          </label>

          <input
            defaultValue={settingsData.account.username}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Email Address
          </label>

          <input
            type="email"
            defaultValue={settingsData.account.email}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Phone Number
          </label>

          <input
            defaultValue={settingsData.account.phone}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Language
          </label>

          <select
            defaultValue={settingsData.account.language}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          >
            <option>English</option>
            <option>Hindi</option>
            <option>Japanese</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-slate-300">
            Timezone
          </label>

          <select
            defaultValue={settingsData.account.timezone}
            className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
          >
            <option>Asia/Kolkata</option>
            <option>UTC</option>
            <option>America/New_York</option>
            <option>Europe/London</option>
          </select>
        </div>
      </div>

      <div className="flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Changes
        </button>
      </div>
    </div>
  );
}
