const stats = [
  {
    title: "Total Orders",
    value: "154",
    color: "text-white",
  },
  {
    title: "Completed",
    value: "132",
    color: "text-green-400",
  },
  {
    title: "Pending",
    value: "18",
    color: "text-yellow-400",
  },
  {
    title: "Refunded",
    value: "4",
    color: "text-red-400",
  },
];

export default function OrderStats() {
  return (
    <section className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
      {stats.map((item) => (
        <div
          key={item.title}
          className="rounded-2xl border border-white/10 bg-[#081223] p-6"
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
