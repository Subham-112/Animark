"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Play } from "lucide-react";
import { HeroSlideData } from "./types";

interface HeroSlideProps {
  slide: HeroSlideData;
  active: boolean;
}

export const HeroSlide = ({ slide, active }: HeroSlideProps) => {
  return (
    <div className="relative flex min-h-[calc(99vh-74px)] items-center overflow-hidden px-8">
      <div className="grid w-full grid-cols-1 items-center gap-16 mx-auto lg:grid-cols-2 lg:max-w-[90%]">
        {/* ================= LEFT ================= */}

        <div
          className={`max-w-2xl transition-all duration-700 ${
            active ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
          }`}
        >
          {/* Badge */}

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-violet-400" />
            <span className="text-sm font-medium tracking-wide text-violet-200">
              {slide.badge}
            </span>
          </div>

          {/* Heading */}

          <h1 className="text-5xl font-black leading-tight text-white md:text-6xl xl:text-5xl">
            {slide.title}

            <span className="block bg-gradient-to-r from-violet-300 via-fuchsia-300 to-cyan-300 bg-clip-text text-transparent">
              {slide.highlight}
            </span>
          </h1>

          {/* Description */}

          <p className="mt-8 max-w-xl text-lg leading-8 text-slate-300">
            {slide.description}
          </p>

          {/* Buttons */}

          <div className="mt-12 flex flex-wrap items-center gap-5">
            <Link
              href={slide.primaryButton.href}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                bg-violet-400
                px-7
                py-4
                text-base
                font-semibold
                text-slate-900
                transition-all
                duration-300
                hover:-translate-y-1
                hover:bg-violet-300
                hover:shadow-[0_15px_40px_rgba(167,139,250,0.35)]
              "
            >
              {slide.primaryButton.label}

              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>

            <Link
              href={slide.secondaryButton.href}
              className="
                group
                inline-flex
                items-center
                gap-3
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-7
                py-4
                text-base
                font-semibold
                text-white
                backdrop-blur-md
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-violet-400/30
                hover:bg-violet-500/10
              "
            >
              <Play
                size={18}
                className="transition-transform duration-300 group-hover:scale-110"
              />

              {slide.secondaryButton.label}
            </Link>
          </div>

          {/* Stats */}

          <div className="mt-16 grid grid-cols-3 gap-6">
            {slide.stats.map((stat) => (
              <div
                key={stat.label}
                className="
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.03]
                  p-6
                  backdrop-blur-md
                  transition-all
                  duration-300
                  hover:border-violet-400/20
                  hover:bg-white/[0.05]
                "
              >
                <h3 className="text-3xl font-bold text-white">{stat.value}</h3>

                <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="relative flex items-center justify-center">
          {/* Background Circle */}

          <div
            className="
              absolute
              h-[520px]
              w-[520px]
              rounded-full
              bg-violet-500/10
              blur-[90px]
            "
          />

          {/* Image Container */}

          <div
            className={`
              relative
              h-[620px]
              w-full
              max-w-[560px]
              transition-all
              duration-700
              ${
                active ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }
            `}
          ></div>
          {/* Decorative Ring */}

          <div
            className="
                absolute
                left-1/2
                top-1/2
                h-[460px]
                w-[460px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                border
                border-white/10
              "
          />

          {/* Glow */}

          <div
            className="
                absolute
                left-1/2
                top-1/2
                h-[420px]
                w-[420px]
                -translate-x-1/2
                -translate-y-1/2
                rounded-full
                bg-violet-500/10
                blur-[120px]
              "
          />

          {/* Character Image */}

          <div
            className="
                relative
                z-20
                h-full
                w-full
                animate-float
              "
          >
            <Image
              src={slide.image}
              alt={slide.highlight}
              fill
              priority={active}
              loading={active ? "eager" : "lazy"}
              className="object-contain select-none"
            />
          </div>

          {/* Top Left Card */}

          <div
            className="
                absolute
                left-0
                top-20
                z-30
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
                shadow-2xl
              "
          >
            <p className="text-xs uppercase tracking-[3px] text-slate-400">
              Downloads
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">30K+</h3>
          </div>

          {/* Bottom Right Card */}

          <div
            className="
                absolute
                bottom-16
                right-0
                z-30
                rounded-2xl
                border
                border-white/10
                bg-white/5
                px-5
                py-4
                backdrop-blur-xl
                shadow-2xl
              "
          >
            <p className="text-xs uppercase tracking-[3px] text-slate-400">
              Verified
            </p>

            <h3 className="mt-2 text-2xl font-bold text-white">Artists</h3>
          </div>

          {/* Small Floating Circle */}

          <div
            className="
                absolute
                right-10
                top-14
                h-5
                w-5
                rounded-full
                bg-violet-400
                shadow-[0_0_30px_rgba(167,139,250,.8)]
              "
          />

          {/* Small Glow */}

          <div className="absolute bottom-12 left-10 h-4 w-4 rounded-full bg-cyan-400 shadow-[0_0_25px_rgba(34,211,238,.8)]" />
        </div>
      </div>
    </div>
  );
};
