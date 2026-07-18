import { ReactNode } from "react";

interface TableHeadProps {
  children: ReactNode;
  className?: string;
}

export default function TableHead({
  children,
  className = "",
}: TableHeadProps) {
  return (
    <thead
      className={`sticky top-0 z-10 border-b border-white/10 bg-[#081223] ${className}`}
    >
      {children}
    </thead>
  );
}
