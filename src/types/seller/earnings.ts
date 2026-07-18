export interface EarningsStats {
  availableBalance: number;
  pendingBalance: number;
  totalEarnings: number;

  nextPayout: {
    amount: number;
    date: string;
  };
}

export interface EarningsChartData {
  label: string;
  earnings: number;
}

export interface Transaction {
  id: string;
  orderId: string;
  product: string;
  amount: number;
  platformFee: number;
  netEarnings: number;
  date: string;
}

export interface Payout {
  id: string;
  amount: number;
  status: "completed" | "pending" | "processing";
  transferDate: string;
  reference: string;
}