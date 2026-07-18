import { ratingDistribution, reviewStats } from "@/data/seller/review";

export default function RatingDistribution() {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#081223] p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-white">
            Rating Distribution
          </h2>

          <p className="mt-1 text-sm text-slate-400">
            Breakdown of customer ratings
          </p>
        </div>

        <div className="text-right">
          <h2 className="text-4xl font-bold text-yellow-400">
            {reviewStats.averageRating}
          </h2>

          <p className="mt-1 text-sm text-slate-400">Average Rating</p>
        </div>
      </div>

      <div className="space-y-5">
        {ratingDistribution.map((item) => (
          <div key={item.rating} className="flex items-center gap-4">
            <div className="flex w-20 items-center gap-1">
              <span className="font-medium text-white">{item.rating}</span>

              <span className="text-yellow-400">★</span>
            </div>

            <div className="h-3 flex-1 overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-yellow-400 transition-all duration-500"
                style={{
                  width: `${item.percentage}%`,
                }}
              />
            </div>

            <div className="w-16 text-right">
              <span className="text-sm font-medium text-white">
                {item.percentage}%
              </span>
            </div>

            <div className="w-16 text-right">
              <span className="text-sm text-slate-400">({item.count})</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
