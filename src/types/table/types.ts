import { ReactNode } from "react";

export type StatusVariant =
  | "completed"
  | "active"
  | "published"
  | "approved"
  | "pending"
  | "processing"
  | "review"
  | "rejected"
  | "failed"
  | "cancelled"
  | "draft"
  | "archived"
  | "refunded";

export interface TableActionItem {
  label: string;
  icon?: ReactNode;
  onClick?: () => void;
  danger?: boolean;
}
