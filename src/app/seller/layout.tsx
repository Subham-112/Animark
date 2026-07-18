import { ReactNode } from "react";
import DashboardLayout from "@/components/seller/layout/DashboardLayout";

interface Props {
  children: ReactNode;
}

export default function SellerLayout({ children }: Props) {
  return <DashboardLayout>{children}</DashboardLayout>;
}
