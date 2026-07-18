import { ReactNode } from "react";

interface ChartHeaderProps {
  title: string;
  action?: ReactNode;
}

export default function ChartHeader({ title, action }: ChartHeaderProps) {
  return (
    <div className="mb-5 flex items-center justify-between">
      <h3 className="text-lg font-semibold text-white">{title}</h3>

      {action}
    </div>
  );
}
