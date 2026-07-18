"use client";

import { useState } from "react";

import AccountTab from "./AccountTab";
import ConnectedAccountsTab from "./ConnectedAccountsTab";
import DangerZoneTab from "./DangerZoneTab";
import NotificationTab from "./NotificationTab";
import PreferencesTab from "./PreferencesTab";
import SecurityTab from "./SecurityTab";

const tabs = [
  {
    id: "account",
    label: "Account",
  },
  {
    id: "security",
    label: "Security",
  },
  {
    id: "notifications",
    label: "Notifications",
  },
  {
    id: "preferences",
    label: "Preferences",
  },
  {
    id: "connected",
    label: "Connected Accounts",
  },
  {
    id: "danger",
    label: "Danger Zone",
  },
];

export default function SettingsTabs() {
  const [activeTab, setActiveTab] = useState("account");

  return (
    <section className="overflow-hidden rounded-3xl border border-white/10 bg-[#081223]">
      <div className="flex overflow-x-auto border-b border-white/10 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`whitespace-nowrap border-b-2 px-6 py-4 text-sm font-medium transition ${
              activeTab === tab.id
                ? "border-violet-500 text-violet-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="p-8">
        {activeTab === "account" && <AccountTab />}
        {activeTab === "security" && <SecurityTab />}
        {activeTab === "notifications" && <NotificationTab />}
        {activeTab === "preferences" && <PreferencesTab />}
        {activeTab === "connected" && <ConnectedAccountsTab />}
        {activeTab === "danger" && <DangerZoneTab />}
      </div>
    </section>
  );
}
