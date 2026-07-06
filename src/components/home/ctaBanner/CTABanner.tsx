"use client";

import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { Container } from "@/components/common/Container";

export const CTA = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#04091B] py-20">
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-[36px] bg-gradient-to-br from-[#11182E] via-[#0C1224] to-[#11182E] px-8 py-14 text-center lg:px-20">
            {/* Decorative */}

            <div className="absolute -left-24 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-violet-500/10 blur-[100px]" />

            <div className="absolute -right-24 top-1/2 h-60 w-60 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-[100px]" />

            {/* Badge */}

            <div className="inline-flex items-center gap-2 rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 backdrop-blur-md">
              <Store size={18} className="text-violet-300" />

              <span className="text-sm font-medium tracking-wide text-violet-200">
                Join Animark Today
              </span>
            </div>

            {/* Heading */}

            <h2 className="mx-auto mt-8 max-w-4xl text-4xl font-black leading-tight text-white md:text-5xl">
              Create, Learn & Sell Without Limits
            </h2>

            {/* Description */}

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-400">
              Browse premium 2D characters, master animation through
              professional courses, or start selling your own creations to
              customers around the world.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/characters"
                className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-violet-400 hover:shadow-[0_20px_50px_rgba(124,58,237,.35)]"
              >
                Browse Marketplace
                <ArrowRight
                  size={18}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </Link>

              <Link
                href="/seller"
                className="rounded-xl border border-white/10 bg-white/[0.03] px-7 py-3 font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/30 hover:bg-violet-500/10"
              >
                Become a Seller
              </Link>
            </div>

            {/* Bottom Stats */}

            <div className="mt-14 flex flex-wrap items-center justify-center gap-8 border-t border-white/10 pt-8 text-sm text-slate-400">
              <div>
                <span className="font-semibold text-white">Premium</span> 2D
                Characters
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div>
                <span className="font-semibold text-white">Professional</span>{" "}
                Animation Courses
              </div>

              <div className="hidden h-5 w-px bg-white/10 sm:block" />

              <div>
                <span className="font-semibold text-white">Secure</span> Digital
                Delivery
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
