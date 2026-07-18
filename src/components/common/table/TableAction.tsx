import { ReactNode } from "react";

interface TableActionProps {
  children: ReactNode;
  className?: string;
}

export default function TableAction({
  children,
  className = "",
}: TableActionProps) {
  return (
    <div
      className={`flex items-center justify-end gap-2 whitespace-nowrap ${className}`}
    >
      {children}
    </div>
  );
}
