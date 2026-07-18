"use client";

import { useState } from "react";

export default function AnalyticsToolbar() {
  const [period, setPeriod] = useState("month");

  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#081223] p-5 md:flex-row md:items-center md:justify-between">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Performance Analytics
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Track your revenue, downloads and overall performance.
        </p>
      </div>

      <select
        value={period}
        onChange={(e) => setPeriod(e.target.value)}
        className="h-11 rounded-xl border border-white/10 bg-[#04091B] px-4 text-white outline-none"
      >
        <option value="today">Today</option>
        <option value="week">Last 7 Days</option>
        <option value="month">Last 30 Days</option>
        <option value="year">This Year</option>
      </select>
    </div>
  );
}
