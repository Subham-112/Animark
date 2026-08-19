"use client";

import { useOrderStats } from "@/api/orders/hooks/useOrderStats";
import { OrderStatsData } from "@/api/orders/types";

interface OrderStatsProps {
  statsData?: OrderStatsData | null;
  loading?: boolean;
}

export default function OrderStats({ statsData: propStats, loading: propLoading }: OrderStatsProps = {}) {
  const { stats: fetchedStats, loading: fetchLoading } = useOrderStats();

  const statsData = propStats !== undefined ? propStats : fetchedStats;
  const loading = propLoading !== undefined ? propLoading : fetchLoading;

  const items = [
    {
      title: "Total Orders",
      value: loading ? "..." : (statsData?.total ?? 0).toString(),
      color: "text-white",
    },
    {
      title: "Completed",
      value: loading ? "..." : (statsData?.completed ?? 0).toString(),
      color: "text-green-400",
    },
    {
      title: "Pending",
      value: loading ? "..." : (statsData?.pending ?? 0).toString(),
      color: "text-yellow-400",
    },
    {
      title: "Refunded",
      value: loading ? "..." : (statsData?.refunded ?? 0).toString(),
      color: "text-red-400",
    },
  ];

  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-[18px] border border-white/10 bg-[#081223] p-6"
        >
          <p className="text-sm text-slate-400">{item.title}</p>

          <h2 className={`mt-3 text-3xl font-bold ${item.color}`}>
            {item.value}
          </h2>
        </div>
      ))}
    </section>
  );
}
