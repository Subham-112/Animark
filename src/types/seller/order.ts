export interface Order {
  id: string;
  customer: string;
  product: string;
  amount: number;
  commission: number;
  sellerEarning: number;
  status: "Completed" | "Pending" | "Refunded";
  paymentMethod: string;
  date: string;
}
