import { ReactNode } from "react";

interface TableCellProps {
  children: ReactNode;
  header?: boolean;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function TableCell({
  children,
  header = false,
  align = "left",
  className = "",
}: TableCellProps) {
  const Component = header ? "th" : "td";

  const alignment = {
    left: "text-left",
    center: "text-center",
    right: "text-right",
  };

  return (
    <Component
      className={`whitespace-nowrap px-6 py-4 ${alignment[align]}
        ${header ? "font-semibold text-slate-300" : "text-white"}
        ${className}
      `}
    >
      {children}
    </Component>
  );
}
