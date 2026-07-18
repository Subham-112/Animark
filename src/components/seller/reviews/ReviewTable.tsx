"use client";

import { Eye, MessageSquare } from "lucide-react";

import { reviews } from "@/data/seller/review";
import DataTable from "@/components/common/table/DataTable";
import TableHead from "@/components/common/table/TableHead";
import TableRow from "@/components/common/table/TableRow";
import TableCell from "@/components/common/table/TableCell";
import TableLoading from "@/components/common/table/TableLoading";
import TableEmpty from "@/components/common/table/TableEmpty";
import StatusBadge from "@/components/common/table/StatusBadge";
import TableAction from "@/components/common/table/TableAction";

interface ReviewTableProps {
  loading?: boolean;
}

export default function ReviewTable({ loading = false }: ReviewTableProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Customer Reviews</h2>

        <p className="mt-1 text-sm text-slate-400">
          Manage customer feedback and respond to reviews.
        </p>
      </div>

      <DataTable minWidth={1500}>
        <TableHead>
          <TableRow hover={false}>
            <TableCell header>Customer</TableCell>

            <TableCell header>Product</TableCell>

            <TableCell header>Rating</TableCell>

            <TableCell header>Review</TableCell>

            <TableCell header>Date</TableCell>

            <TableCell header>Status</TableCell>

            <TableCell header align="center">
              Actions
            </TableCell>
          </TableRow>
        </TableHead>

        {loading ? (
          <TableLoading rows={6} columns={7} />
        ) : reviews.length === 0 ? (
          <TableEmpty
            colSpan={7}
            title="No Reviews"
            description="Customer reviews will appear here."
          />
        ) : (
          <tbody>
            {reviews.map((review) => (
              <TableRow key={review.id}>
                <TableCell>
                  <div className="flex items-center gap-3">
                    <img
                      src={review.customerAvatar}
                      alt={review.customerName}
                      className="h-10 w-10 rounded-full object-cover"
                    />

                    <div>
                      <p className="font-medium text-white">
                        {review.customerName}
                      </p>

                      <p className="text-xs text-slate-400">{review.id}</p>
                    </div>
                  </div>
                </TableCell>

                <TableCell>{review.productName}</TableCell>

                <TableCell>
                  <div className="flex items-center gap-1">
                    {Array.from({
                      length: review.rating,
                    }).map((_, index) => (
                      <span key={index} className="text-yellow-400">
                        ★
                      </span>
                    ))}

                    <span className="ml-2 text-sm text-slate-400">
                      ({review.rating}.0)
                    </span>
                  </div>
                </TableCell>

                <TableCell>
                  <p className="max-w-sm truncate text-slate-300">
                    {review.review}
                  </p>
                </TableCell>

                <TableCell>{review.reviewDate}</TableCell>

                <TableCell>
                  <StatusBadge status={review.status}>
                    {review.status === "replied" ? "Replied" : "Pending"}
                  </StatusBadge>
                </TableCell>

                <TableCell align="center">
                  <TableAction>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#04091B] text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                      title="View Review"
                    >
                      <Eye size={18} />
                    </button>

                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#04091B] text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                      title="Reply"
                    >
                      <MessageSquare size={18} />
                    </button>
                  </TableAction>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        )}
      </DataTable>
    </section>
  );
}
