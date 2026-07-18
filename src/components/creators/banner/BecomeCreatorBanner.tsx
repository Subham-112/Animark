"use client";

import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

export const BecomeCreatorBanner = () => {
  return (
    <section className="mx-auto w-full px-6">
      <div className="relative overflow-hidden rounded-[26px] border border-white/10 bg-gradient-to-br from-violet-600/20 via-[#101845] to-cyan-500/10 p-12">
        <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-violet-500/20 blur-[120px]" />
        <div className="absolute -bottom-24 left-0 h-80 w-80 rounded-full bg-cyan-500/10 blur-[120px]" />

        <div className="relative flex flex-col items-center justify-between gap-10 lg:flex-row">
          <div className="max-w-2xl">
            <div className="mb-5 flex items-center gap-3">
              <Sparkles className="text-violet-300" size={22} />

              <span className="text-sm font-semibold uppercase tracking-[0.2em] text-violet-300">
                Join Animark
              </span>
            </div>

            <h2 className="text-5xl font-bold leading-tight text-white">
              Turn Your Creativity Into
              <span className="text-gradient"> Income.</span>
            </h2>

            <p className="mt-6 text-lg leading-8 text-slate-300">
              Sell premium 2D characters, illustrations and digital assets to
              thousands of customers worldwide. Build your audience and grow
              your business with Animark.
            </p>
          </div>

          <Link
            href="/seller/register"
            className="flex items-center gap-3 rounded-2xl bg-violet-600 px-8 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-500 hover:shadow-[0_20px_40px_rgba(124,58,237,.4)]"
          >
            Become a Seller
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>
    </section>
  );
};
