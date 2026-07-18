import { earningsStats } from "@/data/seller/earnings";

const stats = [
  {
    title: "Available Balance",
    value: earningsStats.availableBalance,
    description: "Ready for withdrawal",
    valueColor: "text-green-400",
  },
  {
    title: "Pending Balance",
    value: earningsStats.pendingBalance,
    description: "Available after settlement",
    valueColor: "text-yellow-400",
  },
  {
    title: "Lifetime Earnings",
    value: earningsStats.totalEarnings,
    description: "Total earnings till date",
    valueColor: "text-white",
  },
  {
    title: "Next Payout",
    value: earningsStats.nextPayout.amount,
    description: earningsStats.nextPayout.date,
    valueColor: "text-violet-400",
  },
];

export default function EarningsStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="rounded-2xl border border-white/10 bg-[#081223] p-6"
        >
          <p className="text-sm text-slate-400">{stat.title}</p>

          <h2 className={`mt-3 text-3xl font-bold ${stat.valueColor}`}>
            ₹{stat.value.toLocaleString("en-IN")}
          </h2>

          <p className="mt-2 text-sm text-slate-500">{stat.description}</p>
        </div>
      ))}
    </section>
  );
}
