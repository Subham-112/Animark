"use client";

import Link from "next/link";

interface FooterColumnProps {
  title: string;
  links: {
    label: string;
    href: string;
  }[];
}

export const FooterColumn = ({
  title,
  links,
}: FooterColumnProps) => {
  return (
    <div>
      <h3 className="mb-6 text-lg font-semibold text-white">
        {title}
      </h3>

      <div className="flex flex-col gap-4">
        {links.map((link) => (
          <Link
            key={link.label}
            href={link.href}
            className="text-slate-400 transition-colors duration-300 hover:text-violet-300"
          >
            {link.label}
          </Link>
        ))}
      </div>
    </div>
  );
};