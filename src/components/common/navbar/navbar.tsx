"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { PlaySquare } from "lucide-react";
import UserMenu from "./UserMenu";
import { navItems } from "./data";
import { NavItem } from "./NavItem";
import { useLogout } from "@/api/auth/hooks/useLogout";
import { toast } from "@/components/common/toast/toast";
import { useAuthStore } from "@/store/authStore";

export const Navbar = () => {
  const router = useRouter();
  const { userLogout } = useLogout();
  const logoutStore = useAuthStore((state) => state.logout);

  const handleLogout = async () => {
    try {
      const response = await userLogout();
      logoutStore();
      toast.success(response?.message || "Logout successfully");
      router.push("/login");
    } catch (error: any) {
      toast.error(error.message || "Failed to logout");
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/5 bg-[#04091b]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-[74px] max-w-[95%] items-center justify-between px-12">
        {/* Left */}
        <div className="flex items-center gap-14">
          {/* Logo */}
          <Link href="/dashboard" className="group flex items-center gap-3">
            <motion.div
              whileHover={{ rotate: -5, scale: 1.08 }}
              transition={{
                type: "spring",
                stiffness: 300,
              }}
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-600"
            >
              <PlaySquare size={22} className="text-white" />
            </motion.div>

            <span className="text-3xl font-bold tracking-tight text-white">
              Animark
            </span>
          </Link>

          {/* Navigation */}
          <nav className="flex items-center gap-10">
            {navItems.map((item) => (
              <NavItem key={item.href} item={item} />
            ))}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          {/* Avatar */}
          <UserMenu onLogout={handleLogout} />
        </div>
      </div>
    </header>
  );
};

