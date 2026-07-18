import { Notification, NotificationStats } from "@/types/seller/notifications";

export const notificationStats: NotificationStats = {
  total: 248,
  unread: 12,
  orders: 89,
  system: 23,
};

export const notifications: Notification[] = [
  {
    id: "NOT-1001",
    title: "New Order Received",
    description: "Rahul Sharma purchased Anime Girl Pack.",
    category: "order",
    status: "unread",
    createdAt: "2 minutes ago",
  },
  {
    id: "NOT-1002",
    title: "New Review Received",
    description: "Emily Johnson left a 5-star review on Fantasy Warrior Pack.",
    category: "review",
    status: "unread",
    createdAt: "18 minutes ago",
  },
  {
    id: "NOT-1003",
    title: "Payout Completed",
    description:
      "₹12,450 has been transferred to your registered bank account.",
    category: "earning",
    status: "read",
    createdAt: "Yesterday",
  },
  {
    id: "NOT-1004",
    title: "Product Approved",
    description:
      "Your product 'Cute Character Bundle' has been approved and is now live.",
    category: "product",
    status: "read",
    createdAt: "2 days ago",
  },
  {
    id: "NOT-1005",
    title: "Storage Warning",
    description:
      "Your storage usage has reached 85%. Consider removing unused assets.",
    category: "system",
    status: "unread",
    createdAt: "3 days ago",
  },
  {
    id: "NOT-1006",
    title: "Flash Sale Started",
    description:
      "The weekend flash sale is now live. Your eligible products are participating.",
    category: "promotion",
    status: "read",
    createdAt: "5 days ago",
  },
  {
    id: "NOT-1007",
    title: "Store Profile Updated",
    description: "Your seller profile changes have been successfully saved.",
    category: "store",
    status: "read",
    createdAt: "1 week ago",
  },
  {
    id: "NOT-1008",
    title: "Order Refunded",
    description: "Order ORD-23145 has been refunded successfully.",
    category: "order",
    status: "unread",
    createdAt: "1 week ago",
  },
];
