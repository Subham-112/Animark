"use client";

import { Search } from "lucide-react";

interface OrderToolbarProps {
  search?: string;
  onSearchChange?: (value: string) => void;
  status?: string;
  onStatusChange?: (value: string) => void;
}

export default function OrderToolbar({
  search = "",
  onSearchChange,
  status = "",
  onStatusChange,
}: OrderToolbarProps) {
  return (
    <div className="flex flex-col gap-4 rounded-[18px] border border-white/10 bg-[#081223] p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-4 lg:flex-row">
        <div className="relative w-full lg:max-w-sm">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => onSearchChange?.(e.target.value)}
            placeholder="Search order..."
            className="h-11 w-full rounded-xl border border-white/10 bg-[#04091B] pl-10 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
          />
        </div>

        <select
          value={status}
          onChange={(e) => onStatusChange?.(e.target.value)}
          className="h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none"
        >
          <option value="">All Status</option>
          <option value="Completed">Completed</option>
          <option value="Pending">Pending</option>
          <option value="Refunded">Refunded</option>
        </select>

        <select className="h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none">
          <option value="newest">Newest</option>
          <option value="oldest">Oldest</option>
        </select>
      </div>
    </div>
  );
}
