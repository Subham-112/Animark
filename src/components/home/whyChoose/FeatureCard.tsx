"use client";

import { Feature } from "./types";

interface FeatureCardProps {
  feature: Feature;
}

export const FeatureCard = ({ feature }: FeatureCardProps) => {
  const Icon = feature.icon;

  return (
    <div className="group rounded-xl border border-white/10 bg-[#0B1228] p-6 transition-all duration-300 hover:-translate-y-1 hover:border-violet-400/20 hover:bg-violet-500/5 hover:shadow-[0_20px_60px_rgba(124,58,237,.15)]">
      <div className="flex h-13 w-13 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 transition-transform duration-300 group-hover:scale-105">
        <Icon size={26} className="text-violet-300" />
      </div>

      <h3 className="mt-4 text-xl font-bold text-white">{feature.title}</h3>

      <p className="mt-2 text-base leading-7 text-slate-400">
        {feature.description}
      </p>
    </div>
  );
};
