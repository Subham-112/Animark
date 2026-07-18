import { reviewStats } from "@/data/seller/review";

const stats = [
  {
    title: "Total Reviews",
    value: reviewStats.totalReviews.toLocaleString("en-IN"),
    description: "Received from all products",
    valueColor: "text-white",
  },
  {
    title: "Average Rating",
    value: `${reviewStats.averageRating} ★`,
    description: "Overall customer rating",
    valueColor: "text-yellow-400",
  },
  {
    title: "Positive Reviews",
    value: `${reviewStats.positiveReviews}%`,
    description: "4★ and 5★ reviews",
    valueColor: "text-green-400",
  },
  {
    title: "Pending Replies",
    value: reviewStats.pendingReplies.toString(),
    description: "Need your response",
    valueColor: "text-red-400",
  },
];

export default function ReviewStats() {
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
