"use client";

import DataTable from "@/components/common/table/DataTable";
import StatusBadge from "@/components/common/table/StatusBadge";
import TableAction from "@/components/common/table/TableAction";
import TableCell from "@/components/common/table/TableCell";
import TableEmpty from "@/components/common/table/TableEmpty";
import TableHead from "@/components/common/table/TableHead";
import TableLoading from "@/components/common/table/TableLoading";
import TableRow from "@/components/common/table/TableRow";
import { payouts } from "@/data/seller/earnings";
import { Eye } from "lucide-react";

interface PayoutHistoryTableProps {
  loading?: boolean;
}

export default function PayoutHistoryTable({
  loading = false,
}: PayoutHistoryTableProps) {
  return (
    <section className="space-y-4">
      <div>
        <h2 className="text-xl font-semibold text-white">Payout History</h2>

        <p className="mt-1 text-sm text-slate-400">
          Track every payout transferred to your bank account.
        </p>
      </div>

      <DataTable minWidth={1200}>
        <TableHead>
          <TableRow hover={false}>
            <TableCell header>Payout ID</TableCell>

            <TableCell header align="right">
              Amount
            </TableCell>

            <TableCell header>Status</TableCell>

            <TableCell header>Transfer Date</TableCell>

            <TableCell header>Reference</TableCell>

            <TableCell header align="center">
              Action
            </TableCell>
          </TableRow>
        </TableHead>

        {loading ? (
          <TableLoading rows={6} columns={6} />
        ) : payouts.length === 0 ? (
          <TableEmpty
            colSpan={6}
            title="No Payouts"
            description="Your completed payouts will appear here."
          />
        ) : (
          <tbody>
            {payouts.map((payout) => (
              <TableRow key={payout.id}>
                <TableCell>{payout.id}</TableCell>

                <TableCell align="right" className="font-medium text-green-400">
                  ₹{payout.amount.toLocaleString("en-IN")}
                </TableCell>

                <TableCell>
                  <StatusBadge status={payout.status}>
                    {payout.status.charAt(0).toUpperCase() +
                      payout.status.slice(1)}
                  </StatusBadge>
                </TableCell>

                <TableCell>{payout.transferDate}</TableCell>

                <TableCell>{payout.reference}</TableCell>

                <TableCell align="center">
                  <TableAction>
                    <button
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-[#04091B] text-slate-300 transition hover:border-violet-500 hover:text-violet-400"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                  </TableAction>
                </TableCell>
              </TableRow>
            ))}
          </tbody>
        )}
      </DataTable>
    </section>
  );
}
