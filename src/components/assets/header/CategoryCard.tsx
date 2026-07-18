"use client";

import Image from "next/image";
import Link from "next/link";

interface CategoryCardProps {
  title: string;
  image: string;
  href: string;
  active?: boolean;
}

export const CategoryCard = ({
  title,
  image,
  href,
  active = false,
}: CategoryCardProps) => {
  return (
    <Link
      href={href}
      className={`group relative block h-36 overflow-hidden rounded-[20px] border transition-all duration-300 ${
        active
          ? "border-violet-500 shadow-[0_0_20px_rgba(139,92,246,.25)]"
          : "border-white/10 hover:border-violet-500/50"
      }`}
    >
      <Image
        src={image}
        alt={title}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />

      <div className="absolute inset-0 bg-gradient-to-t from-[#04091B] via-[#04091B]/35 to-transparent" />

      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between p-5">
        <h3 className="text-lg font-bold uppercase tracking-wide text-white">
          {title}
        </h3>

        <div
          className={`h-2.5 w-2.5 rounded-full transition-all duration-300 ${
            active
              ? "bg-violet-400 shadow-[0_0_18px_rgb(167_139_250)]"
              : "bg-white/30 group-hover:bg-violet-400"
          }`}
        />
      </div>
    </Link>
  );
};
