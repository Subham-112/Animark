import ChartCard from "@/components/common/chart/ChartCard";

const revenueSources = [
  {
    title: "Characters",
    percentage: 62,
  },
  {
    title: "Courses",
    percentage: 28,
  },
  {
    title: "Bundles",
    percentage: 10,
  },
];

export default function RevenueSources() {
  return (
    <ChartCard title="Revenue Sources" subtitle="Revenue distribution">
      <div className="space-y-6">
        {revenueSources.map((item) => (
          <div key={item.title}>
            <div className="mb-2 flex items-center justify-between">
              <span className="text-white">{item.title}</span>

              <span className="text-sm text-slate-400">{item.percentage}%</span>
            </div>

            <div className="h-2 overflow-hidden rounded-full bg-white/10">
              <div
                style={{
                  width: `${item.percentage}%`,
                }}
                className="h-full rounded-full bg-violet-500"
              />
            </div>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
