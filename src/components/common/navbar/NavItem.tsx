"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { MegaMenu } from "./MegaMenu";

interface NavItemProps {
  item: {
    title: string;
    href: string;
    menu?: {
      title: string;
      items: {
        label: string;
        href: string;
      }[];
    }[];
  };
}

export const NavItem = ({ item }: NavItemProps) => {
  const pathname = usePathname();

  const active =
    item.href === "/" ? pathname === "/" : pathname.startsWith(item.href);

  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link href={item.href} className="relative flex items-center gap-1 py-7">
        <motion.span
          whileHover={{ y: -1 }}
          className={`text-lg font-medium transition-colors duration-300 ${
            active ? "text-violet-300" : "text-white/75 hover:text-white"
          }`}
        >
          {item.title}
        </motion.span>

        {item.menu && (
          <ChevronDown
            size={16}
            className={`transition-transform duration-300 ${
              open ? "rotate-180 text-violet-300" : "text-white/60"
            }`}
          />
        )}

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

      {item.menu && <MegaMenu open={open} sections={item.menu} />}
    </div>
  );
};
