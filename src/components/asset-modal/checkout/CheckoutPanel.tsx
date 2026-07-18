"use client";

import { CheckoutFooter } from "./CheckoutFooter";
import { CustomerForm } from "./CustomerForm";
import { OrderSummary } from "./OrderSummery";

interface CheckoutPanelProps {
  onBack: () => void;
}

export const CheckoutPanel = ({ onBack }: CheckoutPanelProps) => {
  return (
    <div className="flex h-full flex-col">
      <div className="flex-1 p-4 overflow-x-auto ">
        <div className="mx-auto grid h-full max-w-[1240px] grid-cols-[1fr_420px] gap-6">
          {/* Left */}
          <CustomerForm />

          {/* Right */}
          <div className="relative flex-col">
            <OrderSummary />
            <CheckoutFooter />
          </div>
        </div>
      </div>
    </div>
  );
};
