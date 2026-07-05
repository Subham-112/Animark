"use client";

import { memo } from "react";

export const HeroBackground = memo(() => {
  return (
    <>
      {/* Left Glow */}
      <div
        className="pointer-events-none absolute -left-52 top-1/2 h-[500px] w-[500px] -translate-y-1/2 rounded-full bg-violet-600/20 blur-[150px] animate-pulse"
      />

      {/* Right Glow */}
      <div
        className="pointer-events-none absolute -right-52 top-1/2 h-[450px] w-[450px] -translate-y-1/2 rounded-full bg-blue-600/15 blur-[150px] animate-pulse [animation-delay:1s]"
      />

      {/* Top Gradient */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-violet-600/5 via-transparent to-transparent"
      />

      {/* Grid Pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: `
            linear-gradient(
              rgba(255,255,255,.2) 1px,
              transparent 1px
            ),
            linear-gradient(
              90deg,
              rgba(255,255,255,.2) 1px,
              transparent 1px
            )
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Noise Texture */}
      <div
        className="
          pointer-events-none
          absolute
          inset-0
          opacity-[0.025]
          mix-blend-soft-light
        "
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(255,255,255,.5) 1px, transparent 1px)",
          backgroundSize: "14px 14px",
        }}
      />
    </>
  );
});

HeroBackground.displayName = "HeroBackground";