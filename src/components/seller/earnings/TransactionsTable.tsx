"use client";

import { transactions } from "@/data/seller/earnings";
import DataTable from "@/components/common/table/DataTable";
import TableHead from "@/components/common/table/TableHead";
import TableRow from "@/components/common/table/TableRow";
import TableCell from "@/components/common/table/TableCell";
import TableLoading from "@/components/common/table/TableLoading";
import TableEmpty from "@/components/common/table/TableEmpty";

interface TransactionsTableProps {
  loading?: boolean;
}

export default function TransactionsTable({
  loading = false,
}: TransactionsTableProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">
          Recent Transactions
        </h2>

        <p className="mt-1 text-sm text-slate-400">
          Every successful order that contributes to your earnings.
        </p>
      </div>

      <DataTable minWidth={1300}>
        <TableHead>
          <TableRow hover={false}>
            <TableCell header>Transaction ID</TableCell>

            <TableCell header>Order ID</TableCell>

            <TableCell header>Product</TableCell>

            <TableCell header align="right">
              Amount
            </TableCell>

            <TableCell header align="right">
              Platform Fee
            </TableCell>

            <TableCell header align="right">
              Net Earnings
            </TableCell>

            <TableCell header>Date</TableCell>
          </TableRow>
        </TableHead>

        {loading ? (
          <TableLoading rows={6} columns={7} />
        ) : transactions.length === 0 ? (
          <TableEmpty
            colSpan={7}
            title="No Transactions"
            description="Transactions will appear after customers purchase your products."
          />
        ) : (
          <tbody>
            {transactions.map((transaction) => (
              <TableRow key={transaction.id}>
                <TableCell>{transaction.id}</TableCell>

                <TableCell>{transaction.orderId}</TableCell>

                <TableCell>{transaction.product}</TableCell>

                <TableCell align="right">
                  ₹{transaction.amount.toLocaleString("en-IN")}
                </TableCell>

                <TableCell align="right" className="text-red-400">
                  ₹{transaction.platformFee.toLocaleString("en-IN")}
                </TableCell>

                <TableCell align="right" className="text-green-400">
                  ₹{transaction.netEarnings.toLocaleString("en-IN")}
                </TableCell>

                <TableCell>{transaction.date}</TableCell>
              </TableRow>
            ))}
          </tbody>
        )}
      </DataTable>
    </section>
  );
}
