import ChartCard from "@/components/common/chart/ChartCard";
import { topProducts } from "@/data/seller/analytics";

export default function TopProducts() {
  return (
    <ChartCard title="Top Products" subtitle="Best performing products">
      <div className="space-y-4">
        {topProducts.map((product, index) => (
          <div
            key={product.id}
            className="flex items-center justify-between rounded-xl border border-white/10 bg-[#04091B] p-4"
          >
            <div>
              <p className="font-medium text-white">
                {index + 1}. {product.name}
              </p>

              <p className="mt-1 text-sm text-slate-400">
                {product.sales} Sales
              </p>
            </div>

            <h3 className="font-semibold text-green-400">
              ₹{product.revenue.toLocaleString("en-IN")}
            </h3>
          </div>
        ))}
      </div>
    </ChartCard>
  );
}
