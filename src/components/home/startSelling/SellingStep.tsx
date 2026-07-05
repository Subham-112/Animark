"use client";

import { SellingStep as SellingStepType } from "./types";

interface SellingStepProps {
  step: SellingStepType;
  isLast: boolean;
}

export const SellingStep = ({ step, isLast }: SellingStepProps) => {
  const Icon = step.icon;

  return (
    <div className="relative flex flex-1 flex-col items-center text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-violet-500/20 bg-violet-500/10 transition-all duration-300 hover:scale-105 hover:border-violet-400/30">
        <Icon size={28} className="text-violet-300" />
      </div>

      {!isLast && (
        <div className="absolute left-[calc(50%+32px)] top-8 hidden h-px w-[calc(100%-64px)] bg-gradient-to-r from-violet-500/50 to-transparent lg:block" />
      )}

      <h3 className="mt-6 text-xl font-semibold text-white">{step.title}</h3>
      <p className="mt-3 max-w-[220px] text-sm leading-6 text-slate-400">
        {step.description}
      </p>
    </div>
  );
};
