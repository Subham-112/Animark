"use client"

import ReviewStats from "@/components/seller/reviews/ReviewStats";
import ReviewToolbar from "@/components/seller/reviews/ReviewToolbar";
import RatingDistribution from "@/components/seller/reviews/RatingDistribution";
import ReviewTable from "@/components/seller/reviews/ReviewTable";
import TablePagination from "@/components/common/table/TablePagination";

export default function ReviewsPage() {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Reviews</h1>

        <p className="mt-2 text-slate-400">
          Monitor customer feedback and improve your products.
        </p>
      </div>

      <ReviewStats />
      <RatingDistribution />
      <ReviewToolbar />
      <ReviewTable />

      <TablePagination
        page={1}
        pageSize={10}
        totalPages={12}
        totalRecords={120}
        onPageChange={() => {}}
      />
    </div>
  );
}
