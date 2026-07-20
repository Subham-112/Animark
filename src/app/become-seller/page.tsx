"use client";

import SellerAuthCard from "@/components/seller-auth/SellerAuthCard";
import SellerIllustration from "@/components/seller-auth/SellerIllustration";

export default function BecomeSellerPage() {
  return (
    <main className="min-h-screen bg-[#04091B]">
      <div className="mx-auto flex min-h-screen max-w-[1600px] items-center px-6 py-8 lg:px-10">
        <div className="grid w-full gap-8 lg:grid-cols-[1.4fr_0.9fr]">
          <SellerIllustration />
          <SellerAuthCard />
        </div>
      </div>
    </main>
  );
}