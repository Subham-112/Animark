import { RatingDistribution, Review, ReviewStats } from "@/types/seller/review";

export const reviewStats: ReviewStats = {
  totalReviews: 1254,
  averageRating: 4.8,
  positiveReviews: 93,
  pendingReplies: 12,
};

export const ratingDistribution: RatingDistribution[] = [
  {
    rating: 5,
    count: 903,
    percentage: 72,
  },
  {
    rating: 4,
    count: 226,
    percentage: 18,
  },
  {
    rating: 3,
    count: 75,
    percentage: 6,
  },
  {
    rating: 2,
    count: 38,
    percentage: 3,
  },
  {
    rating: 1,
    count: 12,
    percentage: 1,
  },
];

export const reviews: Review[] = [
  {
    id: "REV-1001",
    customerName: "Rahul Sharma",
    customerAvatar: "https://i.pravatar.cc/150?img=1",
    productName: "Anime Girl Pack",
    rating: 5,
    review:
      "Amazing artwork! The quality is excellent and the files are well organized.",
    reviewDate: "12 Jul 2026",
    status: "replied",
  },
  {
    id: "REV-1002",
    customerName: "Emily Johnson",
    customerAvatar: "https://i.pravatar.cc/150?img=5",
    productName: "Fantasy Warrior Pack",
    rating: 4,
    review:
      "Very good asset pack. Would love to see more character variations.",
    reviewDate: "11 Jul 2026",
    status: "pending",
  },
  {
    id: "REV-1003",
    customerName: "Alex Brown",
    customerAvatar: "https://i.pravatar.cc/150?img=7",
    productName: "Cute Character Bundle",
    rating: 5,
    review: "Perfect for my animation project. Highly recommended!",
    reviewDate: "10 Jul 2026",
    status: "replied",
  },
  {
    id: "REV-1004",
    customerName: "Sophia Wilson",
    customerAvatar: "https://i.pravatar.cc/150?img=9",
    productName: "Samurai Collection",
    rating: 3,
    review: "Good illustrations, but I expected more customization options.",
    reviewDate: "09 Jul 2026",
    status: "pending",
  },
  {
    id: "REV-1005",
    customerName: "David Miller",
    customerAvatar: "https://i.pravatar.cc/150?img=11",
    productName: "Magic Character Pack",
    rating: 5,
    review: "Absolutely loved it! Great value for the price.",
    reviewDate: "08 Jul 2026",
    status: "replied",
  },
];
