import { Order } from "@/types/seller/order";

export const orders: Order[] = [
  {
    id: "ORD-1001",
    customer: "Rahul Sharma",
    product: "Anime Girl Pack",
    amount: 599,
    commission: 180,
    sellerEarning: 419,
    status: "Completed",
    paymentMethod: "UPI",
    date: "10 Jul 2026",
  },
  {
    id: "ORD-1002",
    customer: "John Smith",
    product: "Samurai Collection",
    amount: 799,
    commission: 240,
    sellerEarning: 559,
    status: "Pending",
    paymentMethod: "Card",
    date: "11 Jul 2026",
  },
  {
    id: "ORD-1003",
    customer: "Alex Johnson",
    product: "Cute Character Bundle",
    amount: 399,
    commission: 120,
    sellerEarning: 279,
    status: "Completed",
    paymentMethod: "Net Banking",
    date: "12 Jul 2026",
  },
];
