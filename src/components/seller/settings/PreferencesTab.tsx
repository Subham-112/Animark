"use client";

import { settingsData } from "@/data/seller/settings";

export default function PreferencesTab() {
  return (
    <div className="grid gap-6 lg:grid-cols-2">
      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Theme
        </label>

        <select
          defaultValue={settingsData.preferences.theme}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        >
          <option value="dark">Dark</option>
          <option value="light">Light</option>
          <option value="system">System Default</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Language
        </label>

        <select
          defaultValue={settingsData.preferences.language}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        >
          <option>English</option>
          <option>Hindi</option>
          <option>Japanese</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Currency
        </label>

        <select
          defaultValue={settingsData.preferences.currency}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        >
          <option>INR</option>
          <option>USD</option>
          <option>EUR</option>
          <option>JPY</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Date Format
        </label>

        <select
          defaultValue={settingsData.preferences.dateFormat}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        >
          <option>DD/MM/YYYY</option>
          <option>MM/DD/YYYY</option>
          <option>YYYY-MM-DD</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-slate-300">
          Time Format
        </label>

        <select
          defaultValue={settingsData.preferences.timeFormat}
          className="h-12 w-full rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none transition focus:border-violet-500"
        >
          <option value="24h">24 Hours</option>
          <option value="12h">12 Hours</option>
        </select>
      </div>

      <div className="flex items-end justify-end lg:col-span-2">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Preferences
        </button>
      </div>
    </div>
  );
}
