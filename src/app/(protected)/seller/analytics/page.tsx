import AnalyticsStats from "@/components/seller/analytics/AnalyticsStats";
import AnalyticsToolbar from "@/components/seller/analytics/AnalyticsToolbar";
import ConversionFunnel from "@/components/seller/analytics/ConversionFunnel";
import RevenueChart from "@/components/seller/analytics/RevenueChart";
import RevenueSources from "@/components/seller/analytics/RevenueSources";
import SalesChart from "@/components/seller/analytics/SalesChart";
import TopProducts from "@/components/seller/analytics/TopProducts";

export default function AnalyticsPage() {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Analytics</h1>
        <p className="mt-2 text-slate-400">
          Monitor your revenue, sales performance and product insights.
        </p>
      </div>

      <AnalyticsStats />
      <AnalyticsToolbar />
      <RevenueChart />

      <div className="grid gap-6 xl:grid-cols-2">
        <SalesChart />
        <TopProducts />
      </div>

      <div className="grid gap-6 xl:grid-cols-2">
        <RevenueSources />
        <ConversionFunnel />
      </div>
    </div>
  );
}
