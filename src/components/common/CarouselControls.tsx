"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { memo } from "react";

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;

  /**
   * absolute => Hero
   * relative => Trending
   */
  variant?: "absolute" | "relative";
  className?: string;
}

export const CarouselControls = memo(({
  onPrevious,
  onNext,
  variant = "relative",
  className = "",
}: CarouselControlsProps) => {
  const buttonClass = `
    group
    flex
    h-12
    w-12
    cursor-pointer
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white/5
    text-white
    backdrop-blur-md
    transition-all
    duration-300
    hover:scale-105
    hover:border-violet-400/40
    hover:bg-violet-500/10
    hover:shadow-[0_10px_30px_rgba(124,58,237,.25)]
    active:scale-95
  `;

  if (variant === "absolute") {
    return (
      <>
        <button
          type="button"
          aria-label="Previous Slide"
          onClick={onPrevious}
          className={`absolute left-2 lg:left-8 top-1/2 z-30 -translate-y-1/2 ${buttonClass} ${className}`}
        >
          <ChevronLeft
            size={22}
            className="transition-transform duration-300 group-hover:-translate-x-1"
          />
        </button>

        <button
          type="button"
          aria-label="Next Slide"
          onClick={onNext}
          className={`absolute right-2 lg:right-8 top-1/2 z-30 -translate-y-1/2 ${buttonClass} ${className}`}
        >
          <ChevronRight
            size={22}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </button>
      </>
    );
  }

  return (
    <div className={`flex items-center gap-4 ${className}`}>
      <button
        type="button"
        aria-label="Previous Slide"
        onClick={onPrevious}
        className={buttonClass}
      >
        <ChevronLeft
          size={22}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      </button>

      <button
        type="button"
        aria-label="Next Slide"
        onClick={onNext}
        className={buttonClass}
      >
        <ChevronRight
          size={22}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
});
