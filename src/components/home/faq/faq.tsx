"use client";

import { HelpCircle } from "lucide-react";
import { SectionHeader } from "@/components/common/SectionHeader";
import { FAQWorkspace } from "./faqWorkspace";
import { FAQAccordion } from "./faqAccordion";
import { Container } from "@/components/common/Container";

export const FAQ = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#04091B] py-20">
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-1/2 h-[650px] w-[650px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative mx-auto w-full max-w-7xl px-6 lg:px-8">
          <SectionHeader
            badge="Help Center"
            badgeIcon={<HelpCircle size={18} className="text-violet-300" />}
            title="Frequently Asked Questions"
            description="Everything you need to know about purchasing premium 2D characters, learning animation, selling your creations and receiving payouts."
          />

          <div className="grid items-center gap-16 lg:grid-cols-[0.95fr_1.05fr]">
            {/* Left */}
            <FAQWorkspace />

            {/* Right */}
            <FAQAccordion />
          </div>
        </div>
      </Container>
    </section>
  );
};
