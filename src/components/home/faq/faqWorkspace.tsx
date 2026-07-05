"use client";

import Image from "next/image";
import faqAvatar from "@/assets/images/faq-avatar.png";
import faqMain from "@/assets/images/faq-main.png";
import { BadgeCheck, Download, Monitor, Wallet } from "lucide-react";

export const FAQWorkspace = () => {
  return (
    <div className="relative flex items-center justify-center">
      {/* Background Glow */}
      <div className="absolute h-[520px] w-[520px] rounded-full bg-violet-600/10 blur-[120px]" />

      {/* Main Workspace */}
      <div className="relative w-full max-w-[560px]">
        {/* Floating Character */}
        <div className="absolute -top-25 left-1/2 z-30 -translate-x-1/2 transition-transform duration-500 hover:-translate-y-2">
          <div className="relative h-40 w-40 rounded-full border border-violet-500/20 bg-[#0B1228] p-3 shadow-[0_20px_60px_rgba(124,58,237,.25)]">
            <Image
              src={faqAvatar}
              alt="Character"
              fill
              className="rounded-full object-cover"
            />
          </div>
        </div>

        {/* Monitor */}
        <div className="rounded-[22px] border border-white/10 bg-[#0B1228] p-5 shadow-[0_20px_80px_rgba(0,0,0,.35)]">
          <div className="overflow-hidden rounded-sm border border-white/10">
            <div className="flex items-center gap-2 border-b border-white/10 bg-[#121A33] px-5 py-3">
              <span className="h-3 w-3 rounded-full bg-red-400" />
              <span className="h-3 w-3 rounded-full bg-yellow-400" />
              <span className="h-3 w-3 rounded-full bg-green-400" />
            </div>

            <div className="relative h-[360px] bg-gradient-to-br from-[#141C36] via-[#11172B] to-[#0B1228]">
              <Image
                src={faqMain}
                alt="Workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>

        {/* Purchase Card */}
        <div className="absolute -left-28 top-18 w-52 rounded-2xl border border-white/10 bg-[#0B1228]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-violet-500/10">
              <BadgeCheck className="text-violet-300" size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-400">Purchase</p>

              <h4 className="font-semibold text-white">Successful</h4>
            </div>
          </div>
        </div>

        {/* Download Card */}
        <div className="absolute -right-12 -bottom-10 w-52 rounded-2xl border border-white/10 bg-[#0B1228]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-cyan-500/10">
              <Download className="text-cyan-300" size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-400">Instant</p>

              <h4 className="font-semibold text-white">Download</h4>
            </div>
          </div>
        </div>

        {/* Seller Card */}
        <div className="absolute -bottom-10 -left-20 w-56 rounded-2xl border border-white/10 bg-[#0B1228]/95 p-4 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1">
          <div className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-emerald-500/10">
              <Wallet className="text-emerald-300" size={22} />
            </div>

            <div>
              <p className="text-sm text-slate-400">Seller</p>

              <h4 className="font-semibold text-white">Secure Payout</h4>
            </div>
          </div>
        </div>

        {/* Floating Monitor Icon */}
        <div className="absolute -right-8 -top-8 flex h-18 w-18 items-center justify-center rounded-full border border-white/10 bg-violet-500/10 backdrop-blur-xl">
          <Monitor className="text-violet-300" size={32} />
        </div>
      </div>
    </div>
  );
};
