"use client";

import { ReactNode } from "react";

interface SectionHeaderProps {
  badge?: string;
  badgeIcon?: ReactNode;
  title: ReactNode;
  description?: string;
  className?: string;
}

export const SectionHeader = ({
  badge,
  badgeIcon,
  title,
  description,
  className = "",
}: SectionHeaderProps) => {
  return (
    <div
      className={`mx-auto mb-20 flex max-w-5xl flex-col items-center text-center ${className}`}
    >
      {badge && (
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 backdrop-blur-md">
          {badgeIcon}

          <span className="text-sm font-medium tracking-[0.12em] text-violet-200">
            {badge}
          </span>
        </div>
      )}

      <h2 className="mt-3 text-4xl sm:text-3xl lg:text-5xl font-black leading-tight tracking-tight text-white text-gradient">
        {title}
      </h2>

      {description && (
        <p className="mt-2 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
          {description}
        </p>
      )}
    </div>
  );
};
