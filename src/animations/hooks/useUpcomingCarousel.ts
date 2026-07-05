"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseUpcomingCarouselProps {
  totalSlides: number;
  duration?: number;
}

export function useUpcomingCarousel({
  totalSlides,
  duration = 5000,
}: UseUpcomingCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const pausedRef = useRef(false);
  const startTimeRef = useRef(0);
  const frameRef = useRef<number | null>(null);

  const goTo = useCallback(
    (index: number) => {
      const nextIndex = (index + totalSlides) % totalSlides;

      setCurrentIndex(nextIndex);
      setProgress(0);
      startTimeRef.current = performance.now();
    },
    [totalSlides],
  );

  const next = useCallback(() => {
    goTo(currentIndex + 1);
  }, [currentIndex, goTo]);

  const previous = useCallback(() => {
    goTo(currentIndex - 1);
  }, [currentIndex, goTo]);

  const pause = useCallback(() => {
    pausedRef.current = true;
  }, []);

  const resume = useCallback(() => {
    pausedRef.current = false;
    startTimeRef.current = performance.now();
  }, []);

  useEffect(() => {
    startTimeRef.current = performance.now();

    const animate = (time: number) => {
      if (!pausedRef.current) {
        const elapsed = time - startTimeRef.current;
        const percentage = Math.min((elapsed / duration) * 100, 100);
        setProgress(percentage);

        if (elapsed >= duration) {
          setCurrentIndex((prev) => (prev + 1) % totalSlides);
          startTimeRef.current = time;
          setProgress(0);
        }
      }

      frameRef.current = requestAnimationFrame(animate);
    };

    frameRef.current = requestAnimationFrame(animate);
    return () => {
      if (frameRef.current) {
        cancelAnimationFrame(frameRef.current);
      }
    };
  }, [duration, totalSlides]);

  return { currentIndex, progress, next, previous, goTo, pause, resume };
}