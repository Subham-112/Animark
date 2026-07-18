"use client";

import { useState } from "react";

import EarningsChart from "@/components/seller/earnings/EarningsChart";
import EarningsStats from "@/components/seller/earnings/EarningsStats";
import EarningsToolbar from "@/components/seller/earnings/EarningsToolbar";
import PayoutHistoryTable from "@/components/seller/earnings/PayoutHistoryTable";
import TransactionsTable from "@/components/seller/earnings/TransactionsTable";
import TablePagination from "@/components/common/table/TablePagination"; 

type ActiveTab = "transactions" | "payouts";

export default function EarningsPage() {
  const [activeTab, setActiveTab] = useState<ActiveTab>("transactions");

  return (
    <div className="space-y-6 p-8">
      {/* Page Header */}
      <div>
        <h1 className="text-3xl font-bold text-white">Earnings</h1>

        <p className="mt-2 text-slate-400">
          Track your earnings, payouts and financial performance.
        </p>
      </div>

      {/* Stats */}
      <EarningsStats />

      {/* Toolbar */}
      <EarningsToolbar />

      {/* Chart */}
      <EarningsChart />

      {/* Tabs */}
      <div className="rounded-2xl border border-white/10 bg-[#081223]">
        <div className="flex border-b border-white/10">
          <button
            onClick={() => setActiveTab("transactions")}
            className={`border-b-2 px-6 py-4 text-sm font-medium transition ${
              activeTab === "transactions"
                ? "border-violet-500 text-violet-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Transactions
          </button>

          <button
            onClick={() => setActiveTab("payouts")}
            className={`border-b-2 px-6 py-4 text-sm font-medium transition ${
              activeTab === "payouts"
                ? "border-violet-500 text-violet-400"
                : "border-transparent text-slate-400 hover:text-white"
            }`}
          >
            Payout History
          </button>
        </div>

        <div className="p-6">
          {activeTab === "transactions" ? (
            <>
              <TransactionsTable />

              <TablePagination
                page={1}
                totalPages={8}
                totalRecords={76}
                pageSize={10}
                onPageChange={() => {}}
              />
            </>
          ) : (
            <>
              <PayoutHistoryTable />

              <TablePagination
                page={1}
                totalPages={3}
                totalRecords={24}
                pageSize={10}
                onPageChange={() => {}}
              />
            </>
          )}
        </div>
      </div>
    </div>
  );
}
