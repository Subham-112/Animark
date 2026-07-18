import { ReactNode } from "react";

interface TableRowProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export default function TableRow({
  children,
  className = "",
  hover = true,
}: TableRowProps) {
  return (
    <tr
      className={`
        border-b border-white/10
        ${hover ? "transition-colors hover:bg-white/5" : ""}
        ${className}
      `}
    >
      {children}
    </tr>
  );
}
