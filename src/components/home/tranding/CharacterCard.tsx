"use client";

import Image from "next/image";
import { ArrowRight, Star, Heart } from "lucide-react";
import { TrendingCharacter } from "./types";

interface CharacterCardProps {
  character: TrendingCharacter;
  active?: boolean;
}

export function CharacterCard({
  character,
  active = false,
}: CharacterCardProps) {
  return (
    <article
      className={`group glass overflow-hidden rounded-xl md:rounded-3xl border border-white/10 transition-all duration-500 flex flex-col h-[550px] w-full
        ${active ? "shadow-[0_30px_80px_rgba(0,0,0,.45)]" : "opacity-90"}
      `}
    >
      <div className="relative bg-black overflow-hidden flex-shrink-0 h-[270px]">
        <Image
          src={character.image}
          alt={character.title}
          width={350}
          height={330}
          priority={active}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute inset-x-0 top-0 flex items-center justify-between p-4">
          <span className="glass rounded-full px-3 py-1 text-xs font-medium backdrop-blur-md">
            {character.category}
          </span>

          <button className="glass grid h-10 w-10 place-items-center rounded-full transition hover:scale-110">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      <div className="relative bg-[#04091B] space-y-2 p-4 h-[180px] flex flex-col justify-between">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="text-2xl font-semibold">{character.title}</h3>

            <p className="mt-1 text-sm text-[color:var(--text-muted)]">
              by {character.author.name}
            </p>
          </div>

          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
            <span className="text-sm">{character.rating}</span>
          </div>
        </div>

        <p className="line-clamp-2 text-sm leading-6 text-[color:var(--text-muted)]">
          {character.slug}
        </p>

        <div className="flex items-center justify-between pt-2">
          <div>
            <p className="text-xs text-[color:var(--text-muted)]">
              Starting From
            </p>

            <h4 className="mt-1 text-2xl font-bold">₹{character.price}</h4>
          </div>

          <button className="btn-primary flex items-center gap-2 rounded-full px-5 py-3 text-sm">
            View
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </article>
  );
}
