"use client";

import { useState } from "react";
import OrderStats from "@/components/seller/orders/OrderStats";
import OrderTable from "@/components/seller/orders/OrderTable";
import OrderToolbar from "@/components/seller/orders/OrderToolbar";
import TablePagination from "@/components/common/table/TablePagination";
import { useSellerOrders } from "@/api/orders/hooks/useSellerOrders";

export default function OrdersPage() {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(10);
  const [search, setSearch] = useState("");
  const [status, setStatus] = useState("");

  const { orders, pagination, loading } = useSellerOrders({
    type: "seller",
    page,
    limit,
    search: search || undefined,
    status: status || undefined,
  });

  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">
          Orders
        </h1>

        <p className="mt-2 text-slate-400">
          View and manage all customer orders.
        </p>
      </div>

      <OrderStats />

      <OrderToolbar
        search={search}
        onSearchChange={(val) => {
          setSearch(val);
          setPage(1);
        }}
        status={status}
        onStatusChange={(val) => {
          setStatus(val);
          setPage(1);
        }}
      />

      <OrderTable orders={orders} loading={loading} />

      <TablePagination
        page={pagination.page || page}
        pageSize={pagination.limit || limit}
        totalPages={pagination.totalPages || 1}
        totalRecords={pagination.total || 0}
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newLimit) => {
          setLimit(newLimit);
          setPage(1);
        }}
      />
    </div>
  );
}