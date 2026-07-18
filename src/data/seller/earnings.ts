import {
  EarningsChartData,
  EarningsStats,
  Payout,
  Transaction,
} from "@/types/seller/earnings";

export const earningsStats: EarningsStats = {
  availableBalance: 18420,

  pendingBalance: 8240,

  totalEarnings: 284520,

  nextPayout: {
    amount: 8240,
    date: "18 Jul 2026",
  },
};

export const earningsChartData: EarningsChartData[] = [
  {
    label: "Jan",
    earnings: 12000,
  },
  {
    label: "Feb",
    earnings: 14500,
  },
  {
    label: "Mar",
    earnings: 18200,
  },
  {
    label: "Apr",
    earnings: 17100,
  },
  {
    label: "May",
    earnings: 22400,
  },
  {
    label: "Jun",
    earnings: 26800,
  },
  {
    label: "Jul",
    earnings: 31400,
  },
];

export const transactions: Transaction[] = [
  {
    id: "TRX-1001",
    orderId: "ORD-1201",
    product: "Anime Girl Pack",
    amount: 599,
    platformFee: 180,
    netEarnings: 419,
    date: "12 Jul 2026",
  },
  {
    id: "TRX-1002",
    orderId: "ORD-1202",
    product: "Samurai Collection",
    amount: 799,
    platformFee: 240,
    netEarnings: 559,
    date: "11 Jul 2026",
  },
  {
    id: "TRX-1003",
    orderId: "ORD-1203",
    product: "Cute Character Bundle",
    amount: 399,
    platformFee: 120,
    netEarnings: 279,
    date: "10 Jul 2026",
  },
  {
    id: "TRX-1004",
    orderId: "ORD-1204",
    product: "Fantasy Warrior Pack",
    amount: 999,
    platformFee: 300,
    netEarnings: 699,
    date: "09 Jul 2026",
  },
];

export const payouts: Payout[] = [
  {
    id: "PAY-1001",
    amount: 12450,
    status: "completed",
    transferDate: "10 Jul 2026",
    reference: "RPX29488",
  },
  {
    id: "PAY-1002",
    amount: 8560,
    status: "completed",
    transferDate: "03 Jul 2026",
    reference: "RPX29481",
  },
  {
    id: "PAY-1003",
    amount: 8240,
    status: "pending",
    transferDate: "18 Jul 2026",
    reference: "Awaiting Transfer",
  },
];
