interface TableCheckboxProps {
  checked?: boolean;
  disabled?: boolean;
  onChange?: (checked: boolean) => void;
}

export default function TableCheckbox({
  checked = false,
  disabled = false,
  onChange,
}: TableCheckboxProps) {
  return (
    <input
      type="checkbox"
      checked={checked}
      disabled={disabled}
      onChange={(e) => onChange?.(e.target.checked)}
      className="h-4 w-4 cursor-pointer rounded border-white/20 bg-[#081223] text-violet-600 focus:ring-violet-500 disabled:cursor-not-allowed disabled:opacity-50"
    />
  );
}
