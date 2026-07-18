"use client";

import { orders } from "@/data/seller/orders";
import DataTable from "@/components/common/table/DataTable";
import StatusBadge from "@/components/common/table/StatusBadge";
import TableCell from "@/components/common/table/TableCell";
import TableHead from "@/components/common/table/TableHead";
import TableLoading from "@/components/common/table/TableLoading";
import TableEmpty from "@/components/common/table/TableEmpty";
import TableRow from "@/components/common/table/TableRow";

interface OrderTableProps {
  loading?: boolean;
}

export default function OrderTable({ loading = false }: OrderTableProps) {
  return (
    <DataTable minWidth={1400}>
      <TableHead>
        <TableRow hover={false}>
          <TableCell header>Order ID</TableCell>

          <TableCell header>Customer</TableCell>

          <TableCell header>Product</TableCell>

          <TableCell header align="right">
            Amount
          </TableCell>

          <TableCell header align="right">
            Commission
          </TableCell>

          <TableCell header align="right">
            Your Earnings
          </TableCell>

          <TableCell header>Payment</TableCell>

          <TableCell header>Status</TableCell>

          <TableCell header>Date</TableCell>
        </TableRow>
      </TableHead>

      {loading ? (
        <TableLoading rows={8} columns={9} />
      ) : orders.length === 0 ? (
        <TableEmpty
          colSpan={9}
          title="No Orders Found"
          description="Orders will appear here after customers purchase your products."
        />
      ) : (
        <tbody>
          {orders.map((order) => (
            <TableRow key={order.id}>
              <TableCell>{order.id}</TableCell>

              <TableCell>{order.customer}</TableCell>

              <TableCell>{order.product}</TableCell>

              <TableCell align="right">₹{order.amount}</TableCell>

              <TableCell align="right" className="text-red-400">
                ₹{order.commission}
              </TableCell>

              <TableCell align="right" className="text-green-400">
                ₹{order.sellerEarning}
              </TableCell>

              <TableCell>{order.paymentMethod}</TableCell>

              <TableCell>
                <StatusBadge status={order.status.toLowerCase() as any}>
                  {order.status}
                </StatusBadge>
              </TableCell>

              <TableCell>{order.date}</TableCell>
            </TableRow>
          ))}
        </tbody>
      )}
    </DataTable>
  );
}
