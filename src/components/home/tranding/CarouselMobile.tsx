"use client";

import { useEffect, useRef, useState } from "react";
import { CharacterCard } from "./CharacterCard";
import { trendingCharacters } from "./character-data";
import { CarouselProgress } from "@/components/common/CarouselProgress";

export default function CharacterCarouselMobile() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [progress, setProgress] = useState(0);

  const pausedRef = useRef(false);
  const startTimeRef = useRef(performance.now());
  const animationRef = useRef<number | null>(null);

  const duration = 4000;
  const total = trendingCharacters.length;

  const scrollToIndex = (index: number, smooth = true) => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const card = container.children[index] as HTMLElement;
    if (!card) return;

    card.scrollIntoView({
      behavior: smooth ? "smooth" : "instant",
      inline: "center",
      block: "nearest",
    });

    setCurrentIndex(index);
    startTimeRef.current = performance.now();
    setProgress(0);
  };

  useEffect(() => {
    const animate = (time: number) => {
      if (!pausedRef.current) {
        const elapsed = time - startTimeRef.current;
        const percent = Math.min((elapsed / duration) * 100, 100);
        setProgress(percent);
        if (elapsed >= duration) {
          const next = (currentIndex + 1) % total;
          scrollToIndex(next);
          startTimeRef.current = time;
        }
      }

      animationRef.current = requestAnimationFrame(animate);
    };

    animationRef.current = requestAnimationFrame(animate);
    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [currentIndex]);

  const handleScroll = () => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const center = container.scrollLeft + container.offsetWidth / 2;

    let nearest = 0;
    let distance = Infinity;

    Array.from(container.children).forEach((child, index) => {
      const element = child as HTMLElement;
      const elementCenter = element.offsetLeft + element.offsetWidth / 2;
      const diff = Math.abs(center - elementCenter);

      if (diff < distance) {
        distance = diff;
        nearest = index;
      }
    });

    if (nearest !== currentIndex) {
      setCurrentIndex(nearest);
      startTimeRef.current = performance.now();
      setProgress(0);
    }
  };

  return (
    <div className="mt-10">
      <div
        ref={containerRef}
        onScroll={handleScroll}
        onTouchStart={() => (pausedRef.current = true)}
        onTouchEnd={() => {
          pausedRef.current = false;
          startTimeRef.current = performance.now();
        }}
        className="flex snap-x snap-mandatory gap-5 overflow-x-auto px-[8%] pb-5 scrollbar-hide scroll-smooth"
      >
        {trendingCharacters.map((character) => (
          <div
            key={character.id}
            className="
              w-[84%]
              shrink-0
              snap-center
            "
          >
            <CharacterCard character={character} active />
          </div>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <CarouselProgress
          total={total}
          current={currentIndex}
          progress={progress}
          onChange={(index) => scrollToIndex(index)}
        />
      </div>
    </div>
  );
}
