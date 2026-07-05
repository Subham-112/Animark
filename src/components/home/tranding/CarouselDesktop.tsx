"use client";

import { CharacterCard } from "./CharacterCard";
import { trendingCharacters } from "./character-data";
import { CarouselControls } from "@/components/common/CarouselControls";
import { CarouselProgress } from "@/components/common/CarouselProgress";
import { useCharacterCarousel } from "@/animations/hooks/useCharacterCarousel";

export default function CharacterCarouselDesktop() {
  const { currentIndex, progress, next, previous, goTo, pause, resume } =
    useCharacterCarousel({
      totalSlides: trendingCharacters.length,
      duration: 4000,
    });

  const getOffset = (index: number) => {
    const total = trendingCharacters.length;
    let offset = index - currentIndex;

    if (offset > total / 2) offset -= total;
    if (offset < -total / 2) offset += total;

    return offset;
  };

  return (
    <div className="relative mt-8" onMouseEnter={pause} onMouseLeave={resume}>
      <CarouselControls onPrevious={previous} onNext={next} variant="absolute" />
      <div
        className="relative mx-auto h-[520px] max-w-9xl overflow-visible"
        style={{
          perspective: "1800px",
        }}
      >
        {trendingCharacters.map((character, index) => {
          const offset = getOffset(index);
          const visible = Math.abs(offset) <= 2;
          const translateX = offset * 280;
          const scale = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.82 : 0.65;
          const rotateY = offset === 0 ? 0 : offset > 0 ? -18 : 18;
          const opacity =
            offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.25;

          return (
            <div
              key={character.id}
              className="absolute left-1/2 top-1/2"
              style={{
                transform: `
                  translate(-50%,-50%)
                  translateX(${translateX}px)
                  scale(${scale})
                  rotateY(${rotateY}deg)
                `,
                opacity: visible ? opacity : 0,
                zIndex: 20 - Math.abs(offset),
                transition:
                  "transform 700ms cubic-bezier(.22,1,.36,1),opacity 700ms",
                pointerEvents: offset === 0 ? "auto" : "none",
              }}
            >
              <CharacterCard character={character} active={offset === 0} />
            </div>
          );
        })}
      </div>

      <div className="mt-18 flex justify-center">
        <CarouselProgress
          total={trendingCharacters.length}
          current={currentIndex}
          progress={progress}
          onChange={goTo}
        />
      </div>
    </div>
  );
}
