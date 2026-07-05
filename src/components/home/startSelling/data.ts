import { Upload, ShieldCheck, Store, Wallet } from "lucide-react";
import { SellingStep } from "./types";

export const sellingSteps: SellingStep[] = [
  {
    id: 1,
    title: "Upload Your Product",
    description:
      "Submit your premium 2D character or animation course through the creator dashboard.",
    icon: Upload,
  },
  {
    id: 2,
    title: "Quality Review",
    description:
      "Our team reviews every submission to maintain a high-quality marketplace.",
    icon: ShieldCheck,
  },
  {
    id: 3,
    title: "Go Live",
    description:
      "Approved products become available for customers to purchase instantly.",
    icon: Store,
  },
  {
    id: 4,
    title: "Receive Payout",
    description:
      "After the review period, your earnings are automatically transferred after platform commission.",
    icon: Wallet,
  },
];
