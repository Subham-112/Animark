"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface UseCharacterCarouselProps {
  totalSlides: number;
  duration?: number;
}

export function useCharacterCarousel({
  totalSlides,
  duration = 4000,
}: UseCharacterCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const paused = useRef(false);
  const animationRef = useRef<number | null>(null);
  const startedAt = useRef<number>(performance.now());

  const next = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
    startedAt.current = performance.now();
    setProgress(0);
  }, [totalSlides]);

  const previous = useCallback(() => {
    setCurrentIndex((prev) => (prev === 0 ? totalSlides - 1 : prev - 1));
    startedAt.current = performance.now();
    setProgress(0);
  }, [totalSlides]);

  const goTo = useCallback((index: number) => {
    setCurrentIndex(index);
    startedAt.current = performance.now();
    setProgress(0);
  }, []);

  const pause = useCallback(() => {
    paused.current = true;
  }, []);

  const resume = useCallback(() => {
    paused.current = false;

    startedAt.current = performance.now() - (progress / 100) * duration;
  }, [duration, progress]);

  useEffect(() => {
    const animate = (time: number) => {
      if (!paused.current) {
        const elapsed = time - startedAt.current;
        const percent = Math.min((elapsed / duration) * 100, 100);
        setProgress(percent);

        if (elapsed >= duration) {
          setCurrentIndex((prev) => (prev + 1) % totalSlides);
          startedAt.current = time;
          setProgress(0);
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [duration, totalSlides]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") previous();
      if (e.key === "ArrowRight") next();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [next, previous]);

  return { currentIndex, progress, next, previous, goTo, pause, resume };
}
