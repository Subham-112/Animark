import { ChevronLeft, ChevronRight } from "lucide-react";

interface TablePaginationProps {
  page: number;
  totalPages: number;
  totalRecords: number;
  pageSize: number;
  onPageChange: (page: number) => void;
  onPageSizeChange?: (pageSize: number) => void;
}

export default function TablePagination({
  page,
  totalPages,
  totalRecords,
  pageSize,
  onPageChange,
  onPageSizeChange,
}: TablePaginationProps) {
  const start = totalRecords === 0 ? 0 : (page - 1) * pageSize + 1;
  const end = Math.min(page * pageSize, totalRecords);

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  return (
    <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-white/10 bg-[#081223] p-4 lg:flex-row lg:items-center lg:justify-between">
      <div className="text-sm text-slate-400">
        Showing <span className="font-medium text-white">{start}</span> to{" "}
        <span className="font-medium text-white">{end}</span> of{" "}
        <span className="font-medium text-white">{totalRecords}</span> entries
      </div>

      <div className="flex items-center gap-4">
        <select
          value={pageSize}
          onChange={(e) => onPageSizeChange?.(Number(e.target.value))}
          className="h-10 rounded-lg border border-white/10 bg-[#04091B] px-3 text-sm text-white outline-none"
        >
          <option value={10}>10 / page</option>
          <option value={25}>25 / page</option>
          <option value={50}>50 / page</option>
          <option value={100}>100 / page</option>
        </select>

        <div className="flex items-center gap-2">
          <button
            disabled={page === 1}
            onClick={() => onPageChange(page - 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#04091B] text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronLeft size={18} />
          </button>

          {pages.map((pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => onPageChange(pageNumber)}
              className={`flex h-10 w-10 items-center justify-center rounded-lg border transition ${
                page === pageNumber
                  ? "border-violet-600 bg-violet-600 text-white"
                  : "border-white/10 bg-[#04091B] text-slate-300 hover:bg-white/5"
              }`}
            >
              {pageNumber}
            </button>
          ))}

          <button
            disabled={page === totalPages}
            onClick={() => onPageChange(page + 1)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-[#04091B] text-white transition hover:bg-white/5 disabled:cursor-not-allowed disabled:opacity-50"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </div>
  );
}
