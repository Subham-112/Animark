import { storeProfile } from "@/data/seller/store-profile";

const stats = [
  {
    title: "Profile Completion",
    value: `${storeProfile.stats.profileCompletion}%`,
    description: "Complete your profile to build trust.",
    valueColor: "text-violet-400",
  },
  {
    title: "Followers",
    value: storeProfile.stats.followers.toLocaleString("en-IN"),
    description: "People following your store.",
    valueColor: "text-green-400",
  },
  {
    title: "Products",
    value: storeProfile.stats.products.toLocaleString("en-IN"),
    description: "Products currently published.",
    valueColor: "text-blue-400",
  },
  {
    title: "Store Rating",
    value: `${storeProfile.stats.rating} ★`,
    description: "Average customer rating.",
    valueColor: "text-yellow-400",
  },
];

export default function StoreStats() {
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
