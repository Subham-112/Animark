import { notificationStats } from "@/data/seller/notifications";

const stats = [
  {
    title: "Total Notifications",
    value: notificationStats.total.toLocaleString("en-IN"),
    description: "All notifications",
    valueColor: "text-white",
  },
  {
    title: "Unread",
    value: notificationStats.unread.toString(),
    description: "Require your attention",
    valueColor: "text-red-400",
  },
  {
    title: "Orders",
    value: notificationStats.orders.toString(),
    description: "Order related notifications",
    valueColor: "text-green-400",
  },
  {
    title: "System",
    value: notificationStats.system.toString(),
    description: "Platform & account updates",
    valueColor: "text-violet-400",
  },
];

export default function NotificationStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-white/10 bg-[#081223] p-6"
        >
          <p className="text-sm text-slate-400">{stat.title}</p>

          <h2 className={`mt-3 text-3xl font-bold ${stat.valueColor}`}>
            {stat.value}
          </h2>

          <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
        </div>
      ))}
    </section>
  );
}
