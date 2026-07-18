"use client";

import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import ChartCard from "@/components/common/chart/ChartCard";
import { salesData } from "@/data/seller/analytics";

export default function SalesChart() {
  return (
    <ChartCard title="Sales" subtitle="Weekly sales overview">
      <div className="h-[350px]">
        <ResponsiveContainer>
          <BarChart data={salesData}>
            <CartesianGrid stroke="#334155" strokeDasharray="4 4" />

            <XAxis dataKey="label" stroke="#94a3b8" />

            <YAxis stroke="#94a3b8" />

            <Tooltip />

            <Bar dataKey="sales" radius={[6, 6, 0, 0]} fill="#8b5cf6" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </ChartCard>
  );
}
