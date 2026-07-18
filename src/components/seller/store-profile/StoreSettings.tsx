"use client";

import { storeProfile } from "@/data/seller/store-profile";

export default function SettingsTab() {
  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#04091B] p-5">
        <div>
          <h3 className="font-semibold text-white">Public Store</h3>

          <p className="mt-1 text-sm text-slate-400">
            Allow customers to visit your store.
          </p>
        </div>

        <input
          type="checkbox"
          defaultChecked={storeProfile.settings.visibility === "public"}
          className="h-5 w-5"
        />
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#04091B] p-5">
        <div>
          <h3 className="font-semibold text-white">Allow Reviews</h3>

          <p className="mt-1 text-sm text-slate-400">
            Customers can review your products.
          </p>
        </div>

        <input
          type="checkbox"
          defaultChecked={storeProfile.settings.allowReviews}
          className="h-5 w-5"
        />
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#04091B] p-5">
        <div>
          <h3 className="font-semibold text-white">Show Followers</h3>

          <p className="mt-1 text-sm text-slate-400">
            Display follower count publicly.
          </p>
        </div>

        <input
          type="checkbox"
          defaultChecked={storeProfile.settings.showFollowers}
          className="h-5 w-5"
        />
      </div>

      <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#04091B] p-5">
        <div>
          <h3 className="font-semibold text-white">Auto Publish Products</h3>

          <p className="mt-1 text-sm text-slate-400">
            Automatically publish approved products.
          </p>
        </div>

        <input
          type="checkbox"
          defaultChecked={storeProfile.settings.autoPublishProducts}
          className="h-5 w-5"
        />
      </div>

      <div className="flex justify-end">
        <button className="rounded-xl bg-violet-600 px-6 py-3 font-medium text-white transition hover:bg-violet-700">
          Save Settings
        </button>
      </div>
    </div>
  );
}
