"use client";

import Link from "next/link";
import { ArrowRight, Store } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { SellingTimeline } from "./SellingTimeline";
import { Container } from "@/components/common/Container";

export const StartSelling = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#04091B] py-20">
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[550px] w-[550px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16">
          {/* Header */}
          <SectionHeader
            badge="For Creators"
            badgeIcon={<Store size={18} className="text-violet-300" />}
            title="Start Selling on Animark"
            description="Whether you're creating premium 2D characters or professional animation courses, Animark provides a simple and transparent way to reach customers and grow your digital business."
          />

          <SellingTimeline />

          {/* Bottom CTA */}

          <div className="mt-16 flex flex-col items-center justify-center rounded-3xl border border-white/10 bg-gradient-to-r from-violet-500/5 via-white/[0.02] to-cyan-500/5 px-8 py-10 text-center">
            <h3 className="text-2xl font-bold text-white">
              Ready to Start Selling?
            </h3>

            <p className="mt-3 max-w-2xl text-slate-400">
              Join Animark and publish your premium 2D characters and animation
              courses. We handle the marketplace while you focus on creating.
            </p>

            <Link
              href="/seller"
              className="group mt-8 inline-flex items-center gap-3 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_40px_rgba(124,58,237,.35)]"
            >
              Become a Seller
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};
