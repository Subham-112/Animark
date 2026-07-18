export type NotificationCategory =
  | "order"
  | "review"
  | "earning"
  | "product"
  | "store"
  | "system"
  | "promotion";

export type NotificationStatus = "read" | "unread";

export interface Notification {
  id: string;
  title: string;
  description: string;
  category: NotificationCategory;
  status: NotificationStatus;
  createdAt: string;
}

export interface NotificationStats {
  total: number;
  unread: number;
  orders: number;
  system: number;
}
