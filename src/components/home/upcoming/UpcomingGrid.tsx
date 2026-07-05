"use client";

import UpcomingCard from "./UpcomingCard";
import { UpcomingCharacter } from "./types";

interface UpcomingGridProps {
  characters: UpcomingCharacter[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function UpcomingGrid({
  characters,
  activeIndex,
  onSelect,
}: UpcomingGridProps) {
  return (
    <div
      className="h-full overflow-y-auto p-2 scrollbar-hide"
      style={{
        scrollbarWidth: "none",
        msOverflowStyle: "none",
      }}
    >
      <div className="grid grid-cols-2 gap-3">
        {characters.map((character, index) => (
          <UpcomingCard
            key={character.id}
            character={character}
            active={index === activeIndex}
            onClick={() => onSelect(index)}
          />
        ))}
      </div>
    </div>
  );
}