"use client";

import { CreatorSearch } from "./CreatorSearch";

export const CreatorsHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04091B]">
      <div className="absolute left-1/2 top-0 h-[500px] w-[700px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[140px]" />

      <div className="relative mx-auto flex max-w-[1700px] flex-col items-center px-6 py-12">
        <span className="rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium tracking-wide text-violet-300">
          Discover Premium Artists
        </span>

        <h1 className="mt-3 max-w-4xl text-center text-6xl font-bold leading-tight text-white">
          Meet The Creators Behind
          <span className="text-gradient"> Amazing Assets</span>
        </h1>

        <p className="mt-4 max-w-3xl text-center text-xl leading-9 text-slate-400">
          Explore talented artists, animation studios and professional creators
          building high-quality 2D characters, backgrounds, props and more for
          your next project.
        </p>

        <CreatorSearch />

        <div className="mt-12 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white">8K+</h3>
            <p className="mt-3 text-slate-400">Verified Creators</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white">120K+</h3>
            <p className="mt-3 text-slate-400">Premium Assets</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-5 text-center backdrop-blur-xl">
            <h3 className="text-4xl font-bold text-white">2M+</h3>
            <p className="mt-3 text-slate-400">Downloads</p>
          </div>
        </div>
      </div>
    </section>
  );
};
