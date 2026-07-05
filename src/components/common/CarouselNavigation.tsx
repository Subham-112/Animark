"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";

interface CarouselNavigationProps {
  total: number;
  current: number;
  progress: number;
  onPrevious: () => void;
  onNext: () => void;
  onChange: (index: number) => void;
}

export default function CarouselNavigation({
  total,
  current,
  progress,
  onPrevious,
  onNext,
  onChange,
}: CarouselNavigationProps) {
  return (
    <div className="flex h-18 w-full items-center justify-center rounded-3xl border border-white/10 bg-white/5 px-8">
      <button
        type="button"
        aria-label="Previous"
        onClick={onPrevious}
        className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-500/10 hover:shadow-[0_10px_30px_rgba(124,58,237,.25)] active:scale-95"
      >
        <ChevronLeft
          size={22}
          className="transition-transform duration-300 group-hover:-translate-x-1"
        />
      </button>

      <div className="mx-8 flex flex-1 items-center justify-center gap-3">
        {Array.from({ length: total }).map((_, index) => {
          const isActive = current === index;

          return (
            <button
              key={index}
              type="button"
              aria-label={`Go to slide ${index + 1}`}
              onClick={() => onChange(index)}
              className={`group relative h-[6px] cursor-pointer overflow-hidden rounded-full transition-all duration-300 ${
                isActive
                  ? "w-20 bg-white/15"
                  : "w-10 bg-white/10 hover:bg-white/20"
              }`}
            >
              <span
                className={`absolute left-0 top-0 h-full rounded-full bg-violet-400 ${
                  isActive ? "opacity-100" : "opacity-0"
                }`}
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

      <button
        type="button"
        aria-label="Next"
        onClick={onNext}
        className="group flex h-12 w-12 cursor-pointer items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:scale-105 hover:border-violet-400/40 hover:bg-violet-500/10 hover:shadow-[0_10px_30px_rgba(124,58,237,.25)] active:scale-95"
      >
        <ChevronRight
          size={22}
          className="transition-transform duration-300 group-hover:translate-x-1"
        />
      </button>
    </div>
  );
}
