"use client";

import { settingsData } from "@/data/seller/settings";

const notificationSettings = [
  {
    key: "emailNotifications",
    title: "Email Notifications",
    description: "Receive important updates via email.",
  },
  {
    key: "pushNotifications",
    title: "Push Notifications",
    description: "Receive browser notifications.",
  },
  {
    key: "orderUpdates",
    title: "Order Updates",
    description: "Notify when new orders are received.",
  },
  {
    key: "reviewAlerts",
    title: "Review Alerts",
    description: "Notify when customers leave reviews.",
  },
  {
    key: "marketingEmails",
    title: "Marketing Emails",
    description: "Receive platform news and promotions.",
  },
  {
    key: "securityAlerts",
    title: "Security Alerts",
    description: "Important security notifications.",
  },
  {
    key: "payoutNotifications",
    title: "Payout Notifications",
    description: "Notify when payouts are processed.",
  },
];

export default function NotificationTab() {
  return (
    <div className="space-y-5">
      {notificationSettings.map((item) => (
        <div
          key={item.key}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#04091B] p-5"
        >
          <div>
            <h3 className="font-semibold text-white">{item.title}</h3>

            <p className="mt-1 text-sm text-slate-400">{item.description}</p>
          </div>

          <input
            type="checkbox"
            defaultChecked={
              settingsData.notifications[
                item.key as keyof typeof settingsData.notifications
              ]
            }
            className="h-5 w-5"
          />
        </div>
      ))}

      <div className="flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Notification Settings
        </button>
      </div>
    </div>
  );
}
