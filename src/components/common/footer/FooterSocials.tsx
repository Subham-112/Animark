"use client";

import Link from "next/link";

const YoutubeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M23.5 6.2c-.3-1.2-1.2-2.1-2.4-2.4C19 3.2 12 3.2 12 3.2s-7 0-9.1.6C1.7 4.1.8 5 .5 6.2 0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.2 1.2 2.1 2.4 2.4 2.1.6 9.1.6 9.1.6s7 0 9.1-.6c1.2-.3 2.1-1.2 2.4-2.4.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8ZM9.7 15.7V8.3L16 12l-6.3 3.7Z" />
  </svg>
);

const InstagramIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M7 2C4.2 2 2 4.2 2 7v10c0 2.8 2.2 5 5 5h10c2.8 0 5-2.2 5-5V7c0-2.8-2.2-5-5-5H7Zm10 2c1.7 0 3 1.3 3 3v10c0 1.7-1.3 3-3 3H7c-1.7 0-3-1.3-3-3V7c0-1.7 1.3-3 3-3h10Zm-5 3.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm0 2A2.5 2.5 0 1 1 9.5 12 2.5 2.5 0 0 1 12 9.5Zm5-3a1 1 0 1 0 1 1 1 1 0 0 0-1-1Z" />
  </svg>
);

const LinkedinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path d="M4.98 3.5A1.98 1.98 0 1 0 5 7.46 1.98 1.98 0 0 0 4.98 3.5ZM3.5 8.5h3V20h-3V8.5Zm7 0h2.88v1.57h.04c.4-.76 1.38-1.57 2.84-1.57 3.04 0 3.6 2 3.6 4.59V20h-3v-5.1c0-1.22-.02-2.8-1.7-2.8-1.7 0-1.96 1.33-1.96 2.7V20h-3V8.5Z" />
  </svg>
);

const socials = [
  {
    name: "YouTube",
    href: "https://youtube.com/@dildosti07",
    Icon: YoutubeIcon,
  },
  {
    name: "Instagram",
    href: "#",
    Icon: InstagramIcon,
  },
  {
    name: "LinkedIn",
    href: "#",
    Icon: LinkedinIcon,
  },
];

export const FooterSocials = () => {
  return (
    <div className="flex items-center gap-4">
      {socials.map((social) => (
        <Link
          key={social.name}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={social.name}
          className="group flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.03] transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10"
        >
          <social.Icon className="h-5 w-5 text-slate-300 transition-colors duration-300 group-hover:text-violet-300" />
        </Link>
      ))}
    </div>
  );
};
