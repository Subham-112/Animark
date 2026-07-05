"use client";

import { useMemo } from "react";

import { SectionHeader } from "@/components/common/SectionHeader";
import FeaturedUpcoming from "./FeaturedUpcoming";
import UpcomingGrid from "./UpcomingGrid";
import UpcomingQueue from "./UpcomingQueue";

import { upcomingCharacters } from "./upcoming-data";
import { useUpcomingCarousel } from "@/animations/hooks/useUpcomingCarousel";
import CarouselNavigation from "@/components/common/CarouselNavigation";
import { CalendarClock } from "lucide-react";
import { Container } from "@/components/common/Container";

export function Upcoming() {
  const { currentIndex, progress, next, previous, goTo, pause, resume } =
    useUpcomingCarousel({
      totalSlides: upcomingCharacters.length,
      duration: 5000,
    });

  const activeCharacter = useMemo(
    () => upcomingCharacters[currentIndex],
    [currentIndex],
  );

  return (
    <section
      id="upcoming"
      className="relative mx-auto w-full px-4 py-20"
      onMouseEnter={pause}
      onMouseLeave={resume}
    >
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative mx-auto w-full max-w-7xl px-8 lg:px-16">
          <SectionHeader
            badge="Upcoming"
            badgeIcon={<CalendarClock size={18} />}
            title="Characters Releasing Soon"
            description="Discover premium characters that are currently in production and be the first to know when they launch."
          />

          {/* Desktop */}
          <div className="hidden gap-4 lg:grid lg:grid-cols-[420px_1fr]">
            {/* Featured */}
            <div className="h-[620px]">
              <div key={activeCharacter.id} className="h-full animate-fade-up">
                <FeaturedUpcoming character={activeCharacter} />
              </div>
            </div>

            {/* Queue */}
            <div className="flex h-full max-h-[620px] flex-col">
              {/* 90% */}
              <div className="flex-1 overflow-hidden">
                <UpcomingGrid
                  characters={upcomingCharacters}
                  activeIndex={currentIndex}
                  onSelect={goTo}
                />
              </div>

              {/* 10% Navigation */}
              <div className="mt-2">
                <CarouselNavigation
                  total={upcomingCharacters.length}
                  current={currentIndex}
                  progress={progress}
                  onPrevious={previous}
                  onNext={next}
                  onChange={goTo}
                />
              </div>
            </div>
          </div>

          {/* Mobile */}
          <div className="mt-10 lg:hidden">
            <FeaturedUpcoming character={activeCharacter} />

            <div className="mt-8">
              <UpcomingQueue
                characters={upcomingCharacters}
                activeIndex={currentIndex}
                onSelect={goTo}
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
