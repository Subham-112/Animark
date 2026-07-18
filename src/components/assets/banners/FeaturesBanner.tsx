"use client";

import { ShieldCheck, Download, BadgeCheck, Headphones } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Secure Payment",
    description: "100% protected checkout",
  },
  {
    icon: Download,
    title: "Instant Download",
    description: "Access assets immediately",
  },
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    description: "Curated by professionals",
  },
  {
    icon: Headphones,
    title: "24/7 Support",
    description: "We're always here",
  },
];

export const FeaturesBanner = () => {
  return (
    <section className="mx-auto max-w-[1700px] px-6">
      <div className="grid gap-5 rounded-[18px] border border-white/10 bg-[#101845] p-4 md:grid-cols-2 xl:grid-cols-4">
        {features.map((feature) => {
          const Icon = feature.icon;

          return (
            <div
              key={feature.title}
              className="flex items-center gap-5 rounded-[20px] border border-white/5 bg-white/[0.02] p-5 py-4 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/5"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-500/10 text-violet-300">
                <Icon size={28} />
              </div>

              <div>
                <h4 className="font-semibold text-white">{feature.title}</h4>

                <p className="mt-1 text-sm text-slate-400">
                  {feature.description}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
