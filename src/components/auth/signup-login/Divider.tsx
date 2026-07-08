"use client";

interface DividerProps {
  text?: string;
}

export const Divider = ({ text = "or continue with" }: DividerProps) => {
  return (
    <div className="flex items-center gap-4">
      <div className="h-px flex-1 bg-white/10" />
      <span className="text-sm text-slate-500">{text}</span>
      <div className="h-px flex-1 bg-white/10" />
    </div>
  );
};
