"use client"

import NotificationList from "@/components/seller/notifications/NotificationList";
import NotificationStats from "@/components/seller/notifications/NotificationStats";
import NotificationToolbar from "@/components/seller/notifications/NotificationToolbar";
import TablePagination from "@/components/common/table/TablePagination";

export default function NotificationsPage() {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Notifications
        </h1>

        <p className="mt-2 text-slate-400">
          Stay updated with everything happening in your store.
        </p>
      </div>

      <NotificationStats />
      <NotificationToolbar />
      <NotificationList />

      <TablePagination
        page={1}
        pageSize={10}
        totalPages={8}
        totalRecords={80}
        onPageChange={() => {}}
      />
    </div>
  );
}