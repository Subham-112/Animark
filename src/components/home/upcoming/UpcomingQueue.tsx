"use client";

import UpcomingCard from "./UpcomingCard";
import { UpcomingCharacter } from "./types";

interface UpcomingQueueProps {
  characters: UpcomingCharacter[];
  activeIndex: number;
  onSelect: (index: number) => void;
}

export default function UpcomingQueue({
  characters,
  activeIndex,
  onSelect,
}: UpcomingQueueProps) {
  return (
    <div className="space-y-5 lg:hidden">
      {characters.map((character, index) => (
        <UpcomingCard
          key={character.id}
          character={character}
          active={index === activeIndex}
          onClick={() => onSelect(index)}
        />
      ))}
    </div>
  );
}
