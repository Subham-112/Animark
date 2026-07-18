"use client";

interface CheckboxOption {
  id: string;
  label: string;
  count?: number;
  checked?: boolean;
}

interface CheckboxFilterProps {
  options: CheckboxOption[];
  onChange?: (id: string) => void;
}

export const CheckboxFilter = ({ options, onChange }: CheckboxFilterProps) => {
  return (
    <div className="space-y-4">
      {options.map((item) => (
        <label
          key={item.id}
          className="group flex cursor-pointer items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => onChange?.(item.id)}
              className="h-5 w-5 rounded border border-white/15 bg-transparent accent-violet-500"
            />

            <span className="text-[15px] text-slate-300 transition-colors group-hover:text-white">
              {item.label}
            </span>
          </div>

          {typeof item.count === "number" && (
            <span className="rounded-full border border-white/10 px-2.5 py-0.5 text-xs text-slate-400">
              {item.count}
            </span>
          )}
        </label>
      ))}
    </div>
  );
};
