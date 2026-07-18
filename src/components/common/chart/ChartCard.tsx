import { ReactNode } from "react";

interface ChartCardProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function ChartCard({
  title,
  subtitle,
  children,
}: ChartCardProps) {
  return (
    <section className="rounded-2xl border border-white/10 bg-[#081223] p-6">
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">{title}</h2>

        {subtitle && <p className="mt-1 text-sm text-slate-400">{subtitle}</p>}
      </div>

      {children}
    </section>
  );
}
