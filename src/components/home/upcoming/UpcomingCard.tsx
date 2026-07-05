"use client";

import Image from "next/image";
import { CalendarDays } from "lucide-react";
import { UpcomingCharacter } from "./types";

interface UpcomingCardProps {
  character: UpcomingCharacter;
  active?: boolean;
  onClick?: () => void;
}

export default function UpcomingCard({
  character,
  active = false,
  onClick,
}: UpcomingCardProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`glass group w-full cursor-pointer overflow-hidden rounded-xl border text-left transition-all duration-300 ${
        active
          ? "border-violet-500 shadow-[0_20px_60px_rgba(124,58,237,.25)]"
          : "border-white/10 hover:-translate-y-1 hover:border-violet-500/40"
      }`}
    >
      <div className="relative">
        <Image
          src={character.image}
          alt={character.title}
          width={300}
          height={180}
          className="h-[170px] w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {character.badge && (
          <span
            className="absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-medium text-white"
            style={{
              background: character.badge.color,
            }}
          >
            {character.badge.label}
          </span>
        )}
      </div>

      <div className="space-y-3 p-4">
        <p className="text-xs uppercase tracking-widest text-secondary">
          {character.category}
        </p>

        <h3 className="line-clamp-1 text-lg font-semibold">
          {character.title}
        </h3>

        <div className="flex items-center gap-2 text-sm text-[color:var(--text-muted)]">
          <CalendarDays className="h-4 w-4" />

          <span>{character.releaseDate}</span>
        </div>
      </div>
    </button>
  );
}
