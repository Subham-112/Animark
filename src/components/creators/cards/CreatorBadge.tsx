"use client";

interface CreatorBadgeProps {
  text: string;
}

export const CreatorBadge = ({ text }: CreatorBadgeProps) => {
  return (
    <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-violet-300">
      {text}
    </span>
  );
};
