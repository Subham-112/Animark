import { ReactNode } from "react";

interface DataTableProps {
  children: ReactNode;
  minWidth?: number;        // e.g. 1200 || 1400 || 1600
  loading?: boolean;        // Loading State
  empty?: boolean;          // Empty State
  emptyMessage?: string;    // Empty message
  className?: string;       // Extra wrapper classes
}

export default function DataTable({
  children,
  minWidth = 1200,
  loading = false,
  empty = false,
  emptyMessage = "No records found.",
  className = "",
}: DataTableProps) {
  if (loading) {
    return (
      <div
        className={`rounded-2xl border border-white/10 bg-[#081223] ${className}`}
      >
        <div className="flex h-72 items-center justify-center text-slate-400">
          Loading...
        </div>
      </div>
    );
  }

  if (empty) {
    return (
      <div
        className={`rounded-2xl border border-white/10 bg-[#081223] ${className}`}
      >
        <div className="flex h-72 items-center justify-center text-slate-400">
          {emptyMessage}
        </div>
      </div>
    );
  }

  return (
    <div
      className={`overflow-hidden rounded-2xl border border-white/10 bg-[#081223] ${className}`}
    >
      {/* Horizontal Scroll */}
      <div className="overflow-x-auto scrollbar-none">
        <table
          className="w-full border-collapse"
          style={{
            minWidth: `${minWidth}px`,
          }}
        >
          {children}
        </table>
      </div>
    </div>
  );
}
