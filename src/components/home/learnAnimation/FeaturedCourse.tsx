"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight, BookOpen } from "lucide-react";

import { featuredCourse } from "./data";
import { LearningPath } from "./LearningPath";

export const FeaturedCourse = () => {
  return (
    <div className="grid items-center gap-16 lg:grid-cols-2">
      {/* Left */}

      <div>
        <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2">
          <BookOpen size={18} className="text-violet-300" />

          <span className="text-sm font-medium text-violet-200">
            Featured Course
          </span>
        </div>

        <h2 className="mt-2 text-4xl font-black leading-tight text-white">
          {featuredCourse.title}
        </h2>

        <p className="mt-3 text-lg leading-7 text-slate-400">
          {featuredCourse.description}
        </p>

        <div className="mt-5 flex items-center gap-8">
          <div>
            <p className="text-sm text-slate-500">Level</p>

            <p className="mt-2 font-semibold text-white">
              {featuredCourse.level}
            </p>
          </div>

          <div>
            <p className="text-sm text-slate-500">Duration</p>

            <p className="mt-2 font-semibold text-white">
              {featuredCourse.duration}
            </p>
          </div>
        </div>

        <LearningPath lessons={featuredCourse.lessons} />

        <Link
          href={featuredCourse.buttonLink}
          className="group mt-6 inline-flex items-center gap-3 rounded-xl bg-violet-500 px-7 py-4 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_45px_rgba(124,58,237,.35)]"
        >
          {featuredCourse.buttonLabel}

          <ArrowRight
            size={18}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Link>
      </div>

      {/* Right */}

      <div className="relative flex justify-center">
        <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-600/10 blur-[120px]" />

        <div className="relative h-[620px] w-full max-w-[520px]">
          <Image
            src={featuredCourse.image}
            alt={featuredCourse.title}
            fill
            priority
            className="object-contain transition-transform duration-500 hover:scale-[1.02]"
          />

          <div className="absolute left-0 top-12 rounded-2xl border border-white/10 bg-[#0B1228]/80 px-5 py-4 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Lessons</p>

            <p className="mt-2 text-2xl font-bold text-white">
              {featuredCourse.lessons.length}
            </p>
          </div>

          <div className="absolute bottom-12 right-0 rounded-2xl border border-white/10 bg-[#0B1228]/80 px-5 py-4 backdrop-blur-xl">
            <p className="text-sm text-slate-400">Learning Path</p>

            <p className="mt-2 text-2xl font-bold text-white">Structured</p>
          </div>
        </div>
      </div>
    </div>
  );
};
