"use client";

import Link from "next/link";
import { ArrowRight, Crown } from "lucide-react";

export const PremiumBanner = () => {
  return (
    <section className="mx-auto max-w-[1700px] px-6">
      <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-[#101845] to-cyan-500/10 p-12">
        <div className="absolute -right-24 -top-24 h-80 w-80 rounded-full bg-violet-500/20 blur-[140px]" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[140px]" />

        <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Crown size={22} className="text-yellow-400" />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-yellow-400">
                Premium Collection
              </span>
            </div>

            <h2 className="text-4xl font-bold leading-tight text-white">
              Need More Than
              <span className="text-gradient"> Free Assets?</span>
            </h2>

            <p className="mt-3 text-lg leading-8 text-slate-300">
              Unlock thousands of premium 2D characters, animation resources,
              backgrounds, props and exclusive creator collections with
              commercial usage rights.
            </p>
          </div>

          <Link
            href="/assets"
            className="flex items-center gap-3 rounded-lg bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_20px_40px_rgba(124,58,237,.4)]"
          >
            Explore Premium
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
