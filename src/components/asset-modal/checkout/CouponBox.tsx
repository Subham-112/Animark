"use client";

import { SearchInput } from "@/components/common/form/SearchInput";

export const CouponBox = () => {
  return (
    <div className="flex items-end">
      <SearchInput
        label="Coupon Code"
        placeholder="Enter coupon code"
        containerClassName="w-[100%]"
        containerHeight={12}
        containerHRadius={12}
        inputText="base"
        button="Apply"
      />
    </div>
  );
};
