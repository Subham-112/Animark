import ChartCard from "@/components/common/chart/ChartCard";
import { conversionAnalytics } from "@/data/seller/analytics";

export default function ConversionFunnel() {
  const { visitors, downloads, purchases, conversionRate } =
    conversionAnalytics;

  return (
    <ChartCard title="Conversion Funnel" subtitle="Visitor to purchase journey">
      <div className="space-y-6">
        <div className="rounded-xl bg-[#04091B] p-5">
          <p className="text-sm text-slate-400">Visitors</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {visitors.toLocaleString("en-IN")}
          </h3>
        </div>

        <div className="rounded-xl bg-[#04091B] p-5">
          <p className="text-sm text-slate-400">Downloads</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {downloads.toLocaleString("en-IN")}
          </h3>
        </div>

        <div className="rounded-xl bg-[#04091B] p-5">
          <p className="text-sm text-slate-400">Purchases</p>

          <h3 className="mt-2 text-3xl font-bold text-white">
            {purchases.toLocaleString("en-IN")}
          </h3>
        </div>

        <div className="rounded-xl border border-violet-500/20 bg-violet-500/10 p-5">
          <p className="text-sm text-slate-300">Conversion Rate</p>

          <h3 className="mt-2 text-3xl font-bold text-violet-400">
            {conversionRate}%
          </h3>
        </div>
      </div>
    </ChartCard>
  );
}
