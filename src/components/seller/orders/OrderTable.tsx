"use client";

import DataTable from "@/components/common/table/DataTable";
import StatusBadge from "@/components/common/table/StatusBadge";
import TableCell from "@/components/common/table/TableCell";
import TableHead from "@/components/common/table/TableHead";
import TableLoading from "@/components/common/table/TableLoading";
import TableEmpty from "@/components/common/table/TableEmpty";
import TableRow from "@/components/common/table/TableRow";
import { OrderItem } from "@/api/orders/types";

interface OrderTableProps {
  orders?: OrderItem[];
  loading?: boolean;
}

export default function OrderTable({ orders = [], loading = false }: OrderTableProps) {
  const formatOrder = (order: OrderItem) => {
    const id = order.id || order._id || order.orderId || "N/A";

    let customerName = "N/A";
    if (typeof order.customer === "string") {
      customerName = order.customer;
    } else if (order.customer && typeof order.customer === "object") {
      customerName =
        order.customer.name ||
        `${order.customer.firstName || ""} ${order.customer.lastName || ""}`.trim() ||
        order.customer.email ||
        "N/A";
    } else if (order.user) {
      customerName =
        `${order.user.firstName || ""} ${order.user.lastName || ""}`.trim() ||
        order.user.email ||
        "N/A";
    }

    let productName = "N/A";
    if (typeof order.product === "string") {
      productName = order.product;
    } else if (order.product && typeof order.product === "object") {
      productName = order.product.name || order.product.title || "N/A";
    } else if (Array.isArray(order.items) && order.items.length > 0) {
      const firstItem = order.items[0];
      if (typeof firstItem.product === "string") {
        productName = firstItem.product;
      } else if (firstItem.product && typeof firstItem.product === "object") {
        productName = firstItem.product.name || firstItem.product.title || "N/A";
      }
      if (order.items.length > 1) {
        productName += ` (+${order.items.length - 1} more)`;
      }
    }

    const amount = order.amount ?? order.totalAmount ?? 0;
    const commission = order.commission ?? order.platformFee ?? 0;
    const sellerEarning =
      order.sellerEarning ??
      order.sellerEarnings ??
      order.earning ??
      Math.max(0, amount - commission);
    const paymentMethod = order.paymentMethod || order.paymentType || "N/A";
    const rawStatus = order.status || "Pending";

    let dateStr = "N/A";
    if (order.date) {
      dateStr = order.date;
    } else if (order.createdAt) {
      try {
        dateStr = new Date(order.createdAt).toLocaleDateString("en-GB", {
          day: "2-digit",
          month: "short",
          year: "numeric",
        });
      } catch {
        dateStr = order.createdAt;
      }
    }

    return {
      id,
      customerName,
      productName,
      amount,
      commission,
      sellerEarning,
      paymentMethod,
      status: rawStatus,
      dateStr,
    };
  };

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
          {orders.map((item, idx) => {
            const formatted = formatOrder(item);
            return (
              <TableRow key={formatted.id !== "N/A" ? formatted.id : `order-${idx}`}>
                <TableCell>{formatted.id}</TableCell>

                <TableCell>{formatted.customerName}</TableCell>

                <TableCell>{formatted.productName}</TableCell>

                <TableCell align="right">₹{formatted.amount}</TableCell>

                <TableCell align="right" className="text-red-400">
                  ₹{formatted.commission}
                </TableCell>

                <TableCell align="right" className="text-green-400">
                  ₹{formatted.sellerEarning}
                </TableCell>

                <TableCell>{formatted.paymentMethod}</TableCell>

                <TableCell>
                  <StatusBadge status={formatted.status.toLowerCase() as any}>
                    {formatted.status}
                  </StatusBadge>
                </TableCell>

                <TableCell>{formatted.dateStr}</TableCell>
              </TableRow>
            );
          })}
        </tbody>
      )}
    </DataTable>
  );
}
