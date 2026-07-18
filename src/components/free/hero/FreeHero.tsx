"use client";

import { Gift, Download, Sparkles } from "lucide-react";
import { SearchFree } from "./SearchFree";

export const FreeHero = () => {
  return (
    <section className="relative overflow-hidden border-b border-white/5 bg-[#04091B]">
      <div className="absolute left-1/2 top-0 h-[520px] w-[720px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[150px]" />

      <div className="relative mx-auto flex max-w-[1700px] flex-col items-center px-6 py-12">
        <div className="flex items-center gap-3 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-5 py-2">
          <Gift size={18} className="text-emerald-400" />

          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-emerald-300">
            100% Free Downloads
          </span>
        </div>

        <h1 className="mt-4 max-w-5xl text-center text-5xl font-bold leading-tight text-white">
          Download Premium Assets
          <span className="text-gradient"> For Free</span>
        </h1>

        <p className="mt-3 max-w-3xl text-center text-xl leading-9 text-slate-400">
          Discover high-quality free characters, backgrounds, props, UI packs
          and animation resources released every week by our creators.
        </p>

        <SearchFree />

        <div className="mt-10 grid w-full max-w-5xl grid-cols-1 gap-6 md:grid-cols-3">
          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Download size={34} className="text-violet-400" />

            <h3 className="mt-6 text-3xl font-bold text-white">1,200+</h3>

            <p className="mt-2 text-slate-400">Free Assets</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Sparkles size={34} className="text-cyan-400" />

            <h3 className="mt-6 text-3xl font-bold text-white">Weekly</h3>

            <p className="mt-2 text-slate-400">New Free Drops</p>
          </div>

          <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 backdrop-blur-xl">
            <Gift size={34} className="text-emerald-400" />

            <h3 className="mt-6 text-3xl font-bold text-white">Commercial</h3>

            <p className="mt-2 text-slate-400">Friendly Assets</p>
          </div>
        </div>
      </div>
    </section>
  );
};
