"use client";

import { ShieldCheck } from "lucide-react";

import { SectionHeader } from "@/components/common/SectionHeader";
import { FeaturesGrid } from "./FeaturesGrid";
import { Container } from "@/components/common/Container";

export const WhyChoose = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#04091B] py-20">
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative w-full max-w-7xl mx-auto px-8 lg:px-16">
          <SectionHeader
            badge="Why Choose Animark"
            badgeIcon={<ShieldCheck size={18} className="text-violet-300" />}
            title={"Why Choose Animark"}
            description="Animark is built to provide a secure, reliable and premium experience for both creators and customers. Every feature is designed to make discovering, purchasing and selling digital content simple."
          />

          <FeaturesGrid />
        </div>
      </Container>
    </section>
  );
};
