"use client";

import SellerAuthHeader from "./SellerAuthHeader";
import SellerApplyForm from "./SellerApplyForm";
import SellerAuthFooter from "./SellerAuthFooter";

export default function SellerAuthCard() {
  return (
    <section className="flex h-full items-center">
      <div className="w-full rounded-[24px] border border-white/10 bg-[#0B1224] p-6 shadow-2xl">
        <SellerAuthHeader />
        <SellerApplyForm />
        <SellerAuthFooter />
      </div>
    </section>
  );
}

