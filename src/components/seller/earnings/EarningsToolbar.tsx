"use client";

import { useState } from "react";
import { Download, Search } from "lucide-react";

export default function EarningsToolbar() {
  const [search, setSearch] = useState("");

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#081223] p-5 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-4 lg:flex-row">
        <div className="relative w-full lg:max-w-sm">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
          />

          <input
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search transaction..."
            className="h-11 w-full rounded-xl border border-white/10 bg-[#04091B] pl-10 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
          />
        </div>

        <select className="h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none">
          <option>All Status</option>
          <option>Completed</option>
          <option>Pending</option>
          <option>Processing</option>
        </select>

        <select className="h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none">
          <option>Last 7 Days</option>
          <option>Last 30 Days</option>
          <option>This Month</option>
          <option>This Year</option>
        </select>
      </div>

      <button className="flex h-11 items-center justify-center gap-2 rounded-xl bg-violet-600 px-5 font-medium text-white transition hover:bg-violet-700">
        <Download size={18} />
        Export Report
      </button>
    </div>
  );
}
