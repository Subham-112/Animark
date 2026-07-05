"use client";

import Image from "next/image";
import { Bell, CalendarDays, Eye, Users } from "lucide-react";

import { UpcomingCharacter } from "./types";

interface FeaturedUpcomingProps {
  character: UpcomingCharacter;
}

export default function FeaturedUpcoming({ character }: FeaturedUpcomingProps) {
  return (
    <div className="glass flex w-full max-w-[540px] h-full max-h-[620px] flex-col overflow-hidden rounded-[32px] border border-white/10">
      <div className="relative">
        <Image
          src={character.image}
          alt={character.title}
          width={540}
          height={240}
          priority
          className="h-[220px] w-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#04091B] via-[#04091B]/20 to-transparent" />

        {character.badge && (
          <span
            className="absolute left-6 top-6 rounded-full px-4 py-2 text-sm font-semibold text-white"
            style={{
              background: character.badge.color,
            }}
          >
            {character.badge.label}
          </span>
        )}
      </div>

      <div className="flex flex-1 flex-col p-5">
        <p className="text-sm uppercase tracking-[0.25em] text-secondary">
          {character.category}
        </p>

        <h2 className="mt-1 text-2xl font-bold">{character.title}</h2>

        <p className="mt-2 line-clamp-3 text-base leading-6 text-[color:var(--text-muted)]">
          {character.description}
        </p>

        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div className="glass rounded-lg px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-secondary">
              <CalendarDays className="h-5 w-5" />
              <span className="text-sm font-medium">Release Date</span>
            </div>

            <p className="font-semibold">{character.releaseDate}</p>
          </div>

          <div className="glass rounded-lg px-4 py-3">
            <div className="mb-2 flex items-center gap-2 text-secondary">
              <Users className="h-5 w-5" />
              <span className="text-sm font-medium">Interested</span>
            </div>

            <p className="font-semibold">
              {character.notifyCount.toLocaleString()} users
            </p>
          </div>
        </div>

        <div className="mt-4 flex items-center gap-4">
          <Image
            src={character.creator.avatar}
            alt={character.creator.name}
            width={54}
            height={54}
            className="rounded-full border border-white/10"
          />

          <div>
            <p className="text-sm text-[color:var(--text-muted)]">Created by</p>
            <h4 className="font-semibold">{character.creator.name}</h4>
          </div>
        </div>

        <div className="mt-auto flex flex-wrap gap-4 pt-3">
          <button className="btn-primary flex-1 flex items-center gap-2 rounded-full px-6 py-3">
            <Bell className="h-4 w-4" />
            Notify Me
          </button>

          <button className="btn-ghost flex-1 flex items-center gap-2 rounded-full px-6 py-3">
            <Eye className="h-4 w-4" />
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
