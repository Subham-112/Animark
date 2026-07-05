"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { footerLinks } from "./data";
import { FooterColumn } from "./FooterColumn";
import { FooterSocials } from "./FooterSocials";
import { FooterBottom } from "./FooterBottom";
import { Container } from "@/components/common/Container";

export const Footer = () => {
  return (
    <footer className="relative overflow-hidden w-full border-t border-white/10 bg-[#04091B]">
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative mx-auto px-4 py-20 lg:px-2">
          {/* Top */}
          <div className="flex gap-10">
            {/* Brand */}
            <div>
              <Link href="/" className="inline-flex items-center gap-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-violet-600 text-lg font-bold text-white">
                  A
                </div>

                <span className="text-3xl font-bold text-white">Animark</span>
              </Link>

              <p className="mt-4 max-w-lg text-lg leading-8 text-slate-400">
                Buy premium 2D characters, learn animation, and sell your own
                digital creations on Animark.
              </p>

              {/* CTA */}

              <div className="mt-5 flex flex-wrap gap-4">
                <Link
                  href="/characters"
                  className="group inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_40px_rgba(124,58,237,.35)]"
                >
                  Browse Marketplace
                  <ArrowRight
                    size={18}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </Link>

                <Link
                  href="/seller"
                  className="rounded-xl border border-white/10 bg-white/[0.03] px-6 py-3 font-semibold text-white transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10"
                >
                  Become Seller
                </Link>
              </div>

              <div className="mt-5">
                <FooterSocials />
              </div>
            </div>

            {/* Links */}
            <div className="flex-1 grid grid-cols-2 gap-10 md:grid-cols-4 lg:gap-8">
              {footerLinks.map((section) => (
                <FooterColumn
                  key={section.title}
                  title={section.title}
                  links={section.links}
                />
              ))}
            </div>
          </div>

          <FooterBottom />
        </div>
      </Container>
    </footer>
  );
};
