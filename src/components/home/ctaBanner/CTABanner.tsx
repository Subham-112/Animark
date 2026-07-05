"use client";

import Image from "next/image";
import Link from "next/link";
import ctaBanner from "@/assets/images/cta-banner.png";
import { Container } from "@/components/common/Container";

export const CTABanner = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#04091B] py-20">
      <Container>
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-8">
          <Link
            href="/characters"
            className="max-h-[550px] group relative block overflow-hidden rounded-[32px] border border-white/10 transition-all duration-500 hover:-translate-y-1 hover:border-violet-400/20 hover:shadow-[0_30px_80px_rgba(124,58,237,.25)]"
          >
            <Image
              src={ctaBanner}
              alt="Browse premium 2D characters and become a seller on Animark"
              width={1920}
              height={980}
              priority
              className="h-[550px] object-cover w-full transition-transform duration-700 group-hover:scale-[1.02]"
            />

            {/* Hover Overlay */}

            <div className="absolute inset-0 bg-gradient-to-t from-black/15 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          </Link>
        </div>
      </Container>
    </section>
  );
};
