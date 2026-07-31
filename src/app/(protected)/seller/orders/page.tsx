"use client";

import OrderStats from "@/components/seller/orders/OrderStats";
import OrderTable from "@/components/seller/orders/OrderTable";
import OrderToolbar from "@/components/seller/orders/OrderToolbar";
import TablePagination from "@/components/common/table/TablePagination";

export default function OrdersPage() {
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

      <OrderToolbar />

      <OrderTable />

      <TablePagination
        page={1}
        pageSize={10}
        totalPages={8}
        totalRecords={80}
        onPageChange={() => {}}
      />
    </div>
  );
}