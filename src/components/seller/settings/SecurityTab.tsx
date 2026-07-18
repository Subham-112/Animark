"use client";

import { settingsData } from "@/data/seller/settings";

export default function SecurityTab() {
  return (
    <div className="space-y-8">
      {/* Change Password */}
      <section className="rounded-2xl border border-white/10 bg-[#04091B] p-6">
        <h2 className="text-xl font-semibold text-white">Change Password</h2>

        <p className="mt-1 text-sm text-slate-400">
          Update your account password regularly to keep your account secure.
        </p>

        <div className="mt-6 grid gap-6">
          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Current Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#081223] px-4 text-white outline-none transition focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              New Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#081223] px-4 text-white outline-none transition focus:border-violet-500"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium text-slate-300">
              Confirm Password
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="h-12 w-full rounded-xl border border-white/10 bg-[#081223] px-4 text-white outline-none transition focus:border-violet-500"
            />
          </div>

          <div className="flex justify-end">
            <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
              Update Password
            </button>
          </div>
        </div>
      </section>

      {/* Two Factor Authentication */}
      <section className="rounded-2xl border border-white/10 bg-[#04091B] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Two-Factor Authentication
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Add an extra layer of security to your account.
            </p>
          </div>

          <input
            type="checkbox"
            defaultChecked={settingsData.security.twoFactorEnabled}
            className="h-5 w-5"
          />
        </div>
      </section>

      {/* Active Sessions */}
      <section className="rounded-2xl border border-white/10 bg-[#04091B] p-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl font-semibold text-white">
              Active Sessions
            </h2>

            <p className="mt-1 text-sm text-slate-400">
              Devices currently signed in to your account.
            </p>
          </div>

          <span className="rounded-full bg-violet-500/20 px-3 py-1 text-sm font-medium text-violet-400">
            {settingsData.security.activeSessions} Active
          </span>
        </div>

        <div className="mt-6 space-y-4">
          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#081223] p-4">
            <div>
              <h3 className="font-medium text-white">Chrome • Windows</h3>

              <p className="mt-1 text-sm text-slate-400">
                Bhubaneswar, India • Current Device
              </p>
            </div>

            <span className="rounded-full bg-green-500/20 px-3 py-1 text-xs font-medium text-green-400">
              Active
            </span>
          </div>

          <div className="flex items-center justify-between rounded-xl border border-white/10 bg-[#081223] p-4">
            <div>
              <h3 className="font-medium text-white">Chrome • Android</h3>

              <p className="mt-1 text-sm text-slate-400">Bhubaneswar, India</p>
            </div>

            <button className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-2 text-sm text-red-400 transition hover:bg-red-500/20">
              Logout
            </button>
          </div>

          <div className="flex justify-end">
            <button className="rounded-xl border border-red-500/30 bg-red-500/10 px-6 py-3 font-medium text-red-400 transition hover:bg-red-500/20">
              Logout All Other Devices
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
