"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Search, PlaySquare, User } from "lucide-react";
import UserMenu from "./UserMenu";

const navItems = [
  {
    title: "2D Assets",
    href: "/products",
  },
  {
    title: "Animation",
    href: "/animation",
  },
  {
    title: "Courses",
    href: "/courses",
  },
];

export const Navbar = () => {
  const pathname = usePathname();

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
            {navItems.map((item) => {
              const active = pathname.startsWith(item.href);

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative py-7"
                >
                  <motion.span
                    whileHover={{
                      y: -1,
                    }}
                    className={`relative text-lg font-medium transition-colors duration-300 ${
                      active
                        ? "text-violet-300"
                        : "text-white/75 hover:text-white"
                    }`}
                  >
                    {item.title}
                  </motion.span>

                  {active && (
                    <motion.div
                      layoutId="navbar-indicator"
                      transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 30,
                      }}
                      className="absolute bottom-0 left-0 h-[3px] w-full rounded-full bg-violet-300"
                    />
                  )}
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Right */}
        <div className="flex items-center gap-8">
          {/* Avatar */}
          <UserMenu />
        </div>
      </div>
    </header>
  );
};
