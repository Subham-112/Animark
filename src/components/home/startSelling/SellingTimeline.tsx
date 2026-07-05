"use client";

import { sellingSteps } from "./data";
import { SellingStep } from "./SellingStep";

export const SellingTimeline = () => {
  return (
    <div className="mt-14 grid gap-10 lg:grid-cols-4">
      {sellingSteps.map((step, index) => (
        <SellingStep
          key={step.id}
          step={step}
          isLast={index === sellingSteps.length - 1}
        />
      ))}
    </div>
  );
};
