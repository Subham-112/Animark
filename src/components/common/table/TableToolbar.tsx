import { ReactNode } from "react";
import { Search } from "lucide-react";

interface TableToolbarProps {
  title?: string;
  search?: boolean;
  searchPlaceholder?: string;
  searchValue?: string;
  onSearch?: (value: string) => void;
  filters?: ReactNode;
  actions?: ReactNode;
}

export default function TableToolbar({
  title,
  search = true,
  searchPlaceholder = "Search...",
  searchValue = "",
  onSearch,
  filters,
  actions,
}: TableToolbarProps) {
  return (
    <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="flex flex-1 flex-col gap-4 sm:flex-row sm:items-center">
        {title && <h2 className="text-xl font-semibold text-white">{title}</h2>}

        {search && (
          <div className="relative w-full sm:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400"
            />

            <input
              value={searchValue}
              placeholder={searchPlaceholder}
              onChange={(e) => onSearch?.(e.target.value)}
              className="h-11 w-full rounded-xl border border-white/10 bg-[#081223] pl-10 pr-4 text-white outline-none placeholder:text-slate-500 focus:border-violet-500"
            />
          </div>
        )}

        {filters && (
          <div className="flex flex-wrap items-center gap-3">{filters}</div>
        )}
      </div>

      {actions && <div className="flex items-center gap-3">{actions}</div>}
    </div>
  );
}
