import { analyticsStats } from "@/data/seller/analytics";

export default function AnalyticsStats() {
  const stats = [
    {
      title: "Revenue",
      value: `₹${analyticsStats.revenue.value.toLocaleString("en-IN")}`,
      growth: analyticsStats.revenue.growth,
    },
    {
      title: "Downloads",
      value: analyticsStats.downloads.value.toLocaleString("en-IN"),
      growth: analyticsStats.downloads.growth,
    },
    {
      title: "Views",
      value: analyticsStats.views.value.toLocaleString("en-IN"),
      growth: analyticsStats.views.growth,
    },
    {
      title: "Conversion",
      value: `${analyticsStats.conversion.value}%`,
      growth: analyticsStats.conversion.growth,
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-white/10 bg-[#081223] p-6"
        >
          <p className="text-sm text-slate-400">{stat.title}</p>

          <h2 className="mt-3 text-3xl font-bold text-white">{stat.value}</h2>

          <p className="mt-2 text-sm text-green-400">
            +{stat.growth}% this month
          </p>
        </div>
      ))}
    </section>
  );
}
