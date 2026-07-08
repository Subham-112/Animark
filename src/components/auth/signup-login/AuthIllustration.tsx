"use client";

import Image from "next/image";
import authCharacter from "@/assets/images/auth-character.png";

export const AuthIllustration = () => {
  return (
    <div className="relative flex h-[520px] w-[460px] items-center justify-center overflow-hidden rounded-lg border border-white/10 bg-gradient-to-br from-[#11182E] via-[#0B1228] to-[#131D37]">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/15 blur-[140px]" />

      {/* Character */}
      <div style={{ height: 550, width: 460 }} className="overflow-hidden relative z-10 -translate-y-4 shrink-0">
        <Image
          src={authCharacter}
          alt="Animark Character"
          fill
          priority
          className="object-cover"
        />
      </div>
    </div>
  );
};
