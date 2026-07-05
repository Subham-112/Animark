"use client";

import CharacterCarouselDesktop from "./CarouselDesktop";
import CharacterCarouselMobile from "./CarouselMobile";

export default function CharacterCarousel() {
  return (
    <>
      <div className="hidden md:block">
        <CharacterCarouselDesktop />
      </div>

      <div className="md:hidden">
        <CharacterCarouselMobile />
      </div>
    </>
  );
}