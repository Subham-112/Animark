"use client";

import { memo } from "react";

interface CarouselProgressProps {
  total: number;
  current: number;
  progress: number;
  onChange: (index: number) => void;
}

export const CarouselProgress = memo(({
  total,
  current,
  progress,
  onChange,
}: CarouselProgressProps) => {
  return (
    <div className="absolute bottom-5 left-1/2 z-30 flex -translate-x-1/2 items-center gap-3">
      {Array.from({ length: total }).map((_, index) => {
        const isActive = current === index;

        return (
          <button
            key={index}
            type="button"
            onClick={() => onChange(index)}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                onChange(index);
              }
            }}
            aria-label={`Go to slide ${index + 1}`}
            className={`group relative h-[6px] overflow-hidden rounded-full transition-[width,opacity] duration-300 cursor-pointer ${
              isActive
                ? "w-20 bg-white/15"
                : "w-10 bg-white/10 hover:bg-white/20"
            }`}
          >
            <span
              className={`
                absolute left-0 top-0 h-full rounded-full bg-violet-400 transition-[width,opacity]
                ${isActive ? "opacity-100" : "opacity-0"}
              `}
              style={{
                width: isActive ? `${progress * 100}%` : "0%",
              }}
            />

            {!isActive && (
              <span className="absolute inset-0 rounded-full border border-white/10" />
            )}
          </button>
        );
      })}
    </div>
  );
});
