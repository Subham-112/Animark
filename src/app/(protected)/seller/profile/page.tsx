"use client";

import StoreBanner from "@/components/seller/store-profile/StoreBanner";
import StoreStats from "@/components/seller/store-profile/StoreStats";
import StoreTabs from "@/components/seller/store-profile/StoreTabs";

export default function StorePage() {
  return (
    <div className="space-y-6 p-8">
      <div>
        <h1 className="text-3xl font-bold text-white">Store</h1>
        <p className="mt-2 text-slate-400">
          Manage your public storefront, branding and business information.
        </p>
      </div>

      <StoreStats />
      <StoreBanner />
      <StoreTabs />
    </div>
  );
}
