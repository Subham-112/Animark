import {
  LayoutDashboard,
  Package,
  ShoppingCart,
  Users,
  BarChart3,
  Wallet,
  Star,
  Bell,
  Store,
  Settings,
} from "lucide-react";

export const sidebarItems = [
  {
    title: "Dashboard",
    href: "/seller",
    icon: LayoutDashboard,
  },
  {
    title: "Products",
    href: "/seller/products",
    icon: Package,
  },
  {
    title: "Orders",
    href: "/seller/orders",
    icon: ShoppingCart,
  },
  {
    title: "Analytics",
    href: "/seller/analytics",
    icon: BarChart3,
  },
  {
    title: "Earnings",
    href: "/seller/earnings",
    icon: Wallet,
  },
  {
    title: "Reviews",
    href: "/seller/reviews",
    icon: Star,
  },
  {
    title: "Notifications",
    href: "/seller/notifications",
    icon: Bell,
  },
  {
    title: "Store Profile",
    href: "/seller/profile",
    icon: Store,
  },
  {
    title: "Settings",
    href: "/seller/settings",
    icon: Settings,
  },
];
