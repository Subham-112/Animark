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
  | "refunded"
  | "replied"
  | "pending";

interface StatusBadgeProps {
  status: StatusVariant;
  children?: ReactNode;
  className?: string;
}

const statusStyles: Record<StatusVariant, string> = {
  completed: "border-green-500/20 bg-green-500/10 text-green-400",
  active: "border-green-500/20 bg-green-500/10 text-green-400",
  published: "border-green-500/20 bg-green-500/10 text-green-400",
  approved: "border-green-500/20 bg-green-500/10 text-green-400",
  
  pending: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  processing: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  review: "border-yellow-500/20 bg-yellow-500/10 text-yellow-400",
  
  rejected: "border-red-500/20 bg-red-500/10 text-red-400",
  failed: "border-red-500/20 bg-red-500/10 text-red-400",
  cancelled: "border-red-500/20 bg-red-500/10 text-red-400",

  draft: "border-blue-500/20 bg-blue-500/10 text-blue-400",
  archived: "border-slate-500/20 bg-slate-500/10 text-slate-300",
  refunded: "border-orange-500/20 bg-orange-500/10 text-orange-400",
  
  replied: "border-green-500/20 bg-green-500/10 text-green-400",
  
};

export default function StatusBadge({
  status,
  children,
  className = "",
}: StatusBadgeProps) {
  return (
    <span
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[status]} ${className}`}
    >
      {children ?? status}
    </span>
  );
}
