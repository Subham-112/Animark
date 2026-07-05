"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { Search, PlaySquare } from "lucide-react";

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
          {/* Search */}

          <motion.div whileFocus={{ scale: 1.01 }} className="relative">
            <Search
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white/45"
              size={20}
            />

            <input
              placeholder="Search assets..."
              className="h-12 w-[330px] rounded-xl border border-white/5 bg-white/5 pl-5 pr-12 text-white placeholder:text-white/40 outline-none transition-all duration-300 focus:border-violet-400/40 focus:bg-white/10 focus:ring-4 focus:ring-violet-500/10"
            />
          </motion.div>

          {/* Button */}
          <motion.button
            whileHover={{
              scale: 1.03,
              y: -1,
            }}
            whileTap={{
              scale: 0.97,
            }}
            transition={{
              type: "spring",
              stiffness: 350,
            }}
            className="rounded-xl bg-violet-200 px-8 py-3 text-lg font-semibold text-violet-900 shadow-lg shadow-violet-700/10 transition-shadow hover:shadow-violet-500/20 cursor-pointer"
          >
            Sell Assets
          </motion.button>

          {/* Avatar */}
          <motion.img
            whileHover={{
              scale: 1.08,
            }}
            transition={{
              type: "spring",
            }}
            src="https://i.pravatar.cc/150"
            alt=""
            className="h-12 w-12 cursor-pointer rounded-full border border-white/10 object-cover"
          />
        </div>
      </div>
    </header>
  );
};
