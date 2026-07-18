"use client";

import SettingsTabs from "@/components/seller/settings/SettingsTabs";

export default function SettingsPage() {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Settings</h1>

        <p className="mt-2 text-slate-400">
          Manage your account, security, notifications, preferences and
          connected accounts.
        </p>
      </div>

      <SettingsTabs />
    </div>
  );
}
