"use client";

import { useEffect } from "react";

import { HeroBackground } from "./HeroBackground";
import { CarouselProgress } from "../../common/CarouselProgress";
import { HeroSlide } from "./HeroSlide";
import { heroSlides } from "./hero-data";
import { useCharacterCarousel } from "@/animations/hooks/useCharacterCarousel";
import { CarouselControls } from "../../common/CarouselControls";

export const Hero = () => {
  const {
    currentIndex,
    progress,

    next,
    previous,
    goTo,

    pause,
    resume,
  } = useCharacterCarousel({
    totalSlides: heroSlides.length,
    duration: 4000,
  });

  /**
   * Keyboard Navigation
   */
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "ArrowLeft") {
        previous();
      }

      if (event.key === "ArrowRight") {
        next();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [next, previous]);

  return (
    <section
      className="relative overflow-hidden bg-[#04091B]"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <HeroBackground />

      {/* Slides */}
      <div
        className="relative flex transition-transform duration-700 ease-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {heroSlides.map((slide, index) => (
          <div key={slide.id} className="min-w-full">
            <HeroSlide slide={slide} active={index === currentIndex} />
          </div>
        ))}
      </div>

      {/* Progress */}
      <CarouselProgress
        total={heroSlides.length}
        current={currentIndex}
        progress={progress}
        onChange={goTo}
      />

      {/* Navigation */}
      <CarouselControls
        variant="absolute"
        onPrevious={previous}
        onNext={next}
      />
    </section>
  );
};
