"use client";

import { Flame } from "lucide-react";
import CharacterCarousel from "./CharacterCarousel";
import { SectionHeader } from "@/components/common/SectionHeader";

export const TrendingCharacters = () => {
  return (
    <section className="w-full relative overflow-hidden bg-[#04091B] py-28">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative w-full px-8 lg:px-16">
        {/* Header */}
        <SectionHeader
          badge="Trending This Week"
          badgeIcon={<Flame size={18} className="text-violet-300" />}
          title="Discover Trending Characters"
          description="Explore the most downloaded and highly rated characters created by
            talented artists around the world."
        />

        {/* Carousel */}
        <CharacterCarousel />
      </div>
    </section>
  );
};
