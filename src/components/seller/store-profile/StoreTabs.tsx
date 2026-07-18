"use client";

import { useState } from "react";

import GeneralTab from "./GeneralTab";
import BrandingTab from "./BrandingTab";
import BusinessTab from "./BusinessTab";
import SocialLinks from "./SocialLinks";
import StoreSettings from "./StoreSettings";

const tabs = [
  {
    id: "general",
    label: "General",
  },
  {
    id: "branding",
    label: "Branding",
  },
  {
    id: "business",
    label: "Business",
  },
  {
    id: "social",
    label: "Social Links",
  },
  {
    id: "settings",
    label: "Settings",
  },
];

export default function StoreTabs() {
  const [activeTab, setActiveTab] = useState("general");

  return (
    <section className="rounded-3xl border border-white/10 bg-[#081223]">
      <div className="flex overflow-x-auto border-b border-white/10 scrollbar-none">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`border-b-2 px-6 py-4 text-sm font-medium whitespace-nowrap transition ${
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
        {activeTab === "general" && <GeneralTab />}
        {activeTab === "branding" && <BrandingTab />}
        {activeTab === "business" && <BusinessTab />}
        {activeTab === "social" && <SocialLinks />}
        {activeTab === "settings" && <StoreSettings />}
      </div>
    </section>
  );
}
