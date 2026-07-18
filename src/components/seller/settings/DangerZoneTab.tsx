"use client";

export default function DangerZoneTab() {
  return (
    <div className="space-y-6">
      <div className="rounded-2xl border border-red-500/20 bg-red-500/5 p-6">
        <h2 className="text-xl font-semibold text-red-400">Danger Zone</h2>

        <p className="mt-2 text-sm text-slate-400">
          These actions are permanent and cannot be undone.
        </p>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#04091B] p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Download Your Data
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Download all your products, orders and account data.
            </p>
          </div>

          <button className="rounded-xl border border-white/10 px-5 py-2 font-medium text-white transition hover:border-violet-500">
            Download
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-white/10 bg-[#04091B] p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Deactivate Account
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Temporarily disable your seller account. You can reactivate it
              later.
            </p>
          </div>

          <button className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-5 py-2 font-medium text-yellow-400 transition hover:bg-yellow-500/20">
            Deactivate
          </button>
        </div>
      </div>

      <div className="rounded-2xl border border-red-500/20 bg-[#04091B] p-6">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h3 className="text-lg font-semibold text-white">
              Delete Seller Account
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Permanently delete your seller account and all associated data.
              This action cannot be undone.
            </p>
          </div>

          <button className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700">
            Delete Account
          </button>
        </div>
      </div>
    </div>
  );
}
