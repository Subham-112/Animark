"use client";

import { settingsData } from "@/data/seller/settings";

export default function ConnectedAccountsTab() {
  return (
    <div className="space-y-5">
      {settingsData.connectedAccounts.map((account) => (
        <div
          key={account.id}
          className="flex items-center justify-between rounded-2xl border border-white/10 bg-[#04091B] p-5"
        >
          <div>
            <h3 className="text-lg font-semibold text-white">
              {account.provider}
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              {account.connected
                ? "Your account is connected."
                : "No account connected."}
            </p>
          </div>

          {account.connected ? (
            <button className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-2 font-medium text-red-400 transition hover:bg-red-500/20">
              Disconnect
            </button>
          ) : (
            <button className="rounded-xl bg-violet-600 px-5 py-2 font-medium text-white transition hover:bg-violet-700">
              Connect
            </button>
          )}
        </div>
      ))}
    </div>
  );
}
