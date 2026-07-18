"use client";

import {
  Bell,
  Box,
  CircleDollarSign,
  Megaphone,
  MessageSquare,
  ShoppingCart,
  Store,
  TriangleAlert,
} from "lucide-react";

import { notifications } from "@/data/seller/notifications";

function getNotificationIcon(category: string) {
  switch (category) {
    case "order":
      return <ShoppingCart size={20} className="text-green-400" />;

    case "review":
      return <MessageSquare size={20} className="text-yellow-400" />;

    case "earning":
      return <CircleDollarSign size={20} className="text-emerald-400" />;

    case "product":
      return <Box size={20} className="text-blue-400" />;

    case "store":
      return <Store size={20} className="text-violet-400" />;

    case "promotion":
      return <Megaphone size={20} className="text-pink-400" />;

    case "system":
      return <TriangleAlert size={20} className="text-orange-400" />;

    default:
      return <Bell size={20} className="text-slate-400" />;
  }
}

export default function NotificationList() {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Recent Notifications
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Stay updated with important activities on your store.
        </p>
      </div>

      <div className="space-y-4">
        {notifications.map((notification) => (
          <div
            key={notification.id}
            className={`rounded-2xl border p-5 transition-all hover:border-violet-500 ${
              notification.status === "unread"
                ? "border-violet-500/30 bg-violet-500/5"
                : "border-white/10 bg-[#081223]"
            }`}
          >
            <div className="flex items-start gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#04091B]">
                {getNotificationIcon(notification.category)}
              </div>

              <div className="flex-1">
                <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between">
                  <div>
                    <h3 className="font-semibold text-white">
                      {notification.title}
                    </h3>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {notification.description}
                    </p>
                  </div>

                  <div className="flex flex-col items-start gap-2 lg:items-end">
                    <span className="text-xs text-slate-500">
                      {notification.createdAt}
                    </span>

                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        notification.status === "unread"
                          ? "bg-red-500/20 text-red-400"
                          : "bg-green-500/20 text-green-400"
                      }`}
                    >
                      {notification.status === "unread" ? "Unread" : "Read"}
                    </span>
                  </div>
                </div>

                <div className="mt-5 flex flex-wrap gap-3">
                  <button className="rounded-lg border border-white/10 bg-[#04091B] px-4 py-2 text-sm text-white transition hover:border-violet-500">
                    View Details
                  </button>

                  {notification.status === "unread" && (
                    <button className="rounded-lg border border-white/10 bg-[#04091B] px-4 py-2 text-sm text-white transition hover:border-violet-500">
                      Mark as Read
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
