export type ReviewStatus = "replied" | "pending";

export interface Review {
  id: string;
  customerName: string;
  customerAvatar: string;
  productName: string;
  rating: 1 | 2 | 3 | 4 | 5;
  review: string;
  reviewDate: string;
  status: ReviewStatus;
}

export interface ReviewStats {
  totalReviews: number;
  averageRating: number;
  positiveReviews: number;
  pendingReplies: number;
}

export interface RatingDistribution {
  rating: 5 | 4 | 3 | 2 | 1;
  count: number;
  percentage: number;
}