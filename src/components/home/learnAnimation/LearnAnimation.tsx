"use client";

import { GraduationCap } from "lucide-react";

import { FeaturedCourse } from "./FeaturedCourse";
import { CourseCategories } from "./CourseCategories";
import { SectionHeader } from "@/components/common/SectionHeader";
import { Container } from "@/components/common/Container";

export const LearnAnimation = () => {
  return (
    <section className="relative overflow-hidden w-full bg-[#04091B] py-20">
      <Container>
        {/* Background Glow */}
        <div className="absolute left-1/2 top-40 h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-violet-600/10 blur-[180px]" />

        <div className="relative mx-auto w-full max-w-9xl px-8 lg:px-16">
          {/* Header */}
          <SectionHeader
            badge="Learn Animation"
            badgeIcon={<GraduationCap size={18} className="text-violet-300" />}
            title="Master 2D Animation"
            description="Learn professional 2D animation through structured courses designed
            by experienced creators. Build practical skills from beginner to
            advanced with real-world projects."
          />

          <FeaturedCourse />
          <CourseCategories />
        </div>
      </Container>
    </section>
  );
};
