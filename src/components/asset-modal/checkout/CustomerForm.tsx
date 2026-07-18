"use client";

import { SearchInput } from "@/components/common/form/SearchInput";
import { CouponBox } from "./CouponBox";

export const CustomerForm = () => {
  return (
    <div className="rounded-lg border border-white/10 bg-white/[0.03] p-8 py-6">
      <h3 className="text-2xl font-bold text-white">Customer Details</h3>
      <p className="mt-1 text-slate-400">
        Fill in your purchase information.
      </p>

      <div className="mt-8 space-y-6">
        <div className="grid grid-cols-2 gap-5">
          <SearchInput
            label="First Name"
            placeholder="John"
            containerHeight={12}
            containerHRadius={12}
            inputText="base"
          />

          <SearchInput
            label="Last Name"
            placeholder="Doe"
            containerHeight={12}
            containerHRadius={12}
            inputText="base"
          />
        </div>

        <SearchInput
          label="YouTube Channel Name"
          placeholder="Animation Ki Duniya"
          containerHeight={12}
          containerHRadius={12}
          inputText="base"
        />

        <SearchInput
          label="Channel URL"
          placeholder="https://youtube.com/@animationkiduniya"
          containerHeight={12}
          containerHRadius={12}
          inputText="base"
        />

        <div className="grid grid-cols-[420px_1fr] gap-5">
          <SearchInput
            type="email"
            label="Email Address"
            placeholder="john@email.com"
            containerHeight={12}
            containerHRadius={12}
            inputText="base"
          />

          <CouponBox />
        </div>
      </div>
    </div>
  );
};
