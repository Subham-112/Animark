import { Navbar } from "@/components/common/navbar/navbar";
import { CTA } from "@/components/home/ctaBanner/CTABanner";
import { FAQ } from "@/components/home/faq/faq";
import { Footer } from "@/components/common/footer/Footer";
import { Hero } from "@/components/home/hero/Hero";
import { LearnAnimation } from "@/components/home/learnAnimation/LearnAnimation";
import { StartSelling } from "@/components/home/startSelling/StartSelling";
import { TrendingCharacters } from "@/components/home/tranding/TrendingCharacters";
import { Upcoming } from "@/components/home/upcoming/Upcoming";
import { WhyChoose } from "@/components/home/whyChoose/WhyChoose";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="flex flex-1 w-full flex-col items-center sm:items-start">
        <Navbar />
        <Hero />
        <TrendingCharacters />
        <Upcoming />
        <LearnAnimation />
        <WhyChoose />
        <StartSelling />
        <FAQ />
        <CTA />
        <Footer />
      </main>
    </div>
  );
}
