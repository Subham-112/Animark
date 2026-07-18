"use client";

import Image from "next/image";
import { X } from "lucide-react";

import { Review } from "@/types/seller/review";

interface ReviewDetailsModalProps {
  open: boolean;
  review: Review | null;
  onClose: () => void;
}

export default function ReviewDetailsModal({
  open,
  review,
  onClose,
}: ReviewDetailsModalProps) {
  if (!open || !review) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-6 backdrop-blur-sm">
      <div className="w-full max-w-2xl rounded-2xl border border-white/10 bg-[#081223]">
        <div className="flex items-center justify-between border-b border-white/10 p-6">
          <h2 className="text-xl font-semibold text-white">Review Details</h2>

          <button
            onClick={onClose}
            className="rounded-lg p-2 text-slate-400 transition hover:bg-white/5 hover:text-white"
          >
            <X size={20} />
          </button>
        </div>

        <div className="space-y-6 p-6">
          <div className="flex items-center gap-4">
            <Image
              src={review.customerAvatar}
              alt={review.customerName}
              width={56}
              height={56}
              className="rounded-full"
            />

            <div>
              <h3 className="font-semibold text-white">
                {review.customerName}
              </h3>

              <p className="text-sm text-slate-400">{review.reviewDate}</p>
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm text-slate-400">Product</p>

            <h3 className="font-medium text-white">{review.productName}</h3>
          </div>

          <div>
            <p className="mb-2 text-sm text-slate-400">Rating</p>

            <div className="flex items-center gap-1">
              {Array.from({
                length: review.rating,
              }).map((_, index) => (
                <span key={index} className="text-xl text-yellow-400">
                  ★
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-2 text-sm text-slate-400">Customer Review</p>

            <p className="leading-7 text-slate-300">{review.review}</p>
          </div>

          <div className="flex justify-end">
            <button className="rounded-xl bg-violet-600 px-5 py-2.5 font-medium text-white transition hover:bg-violet-700">
              Reply to Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
