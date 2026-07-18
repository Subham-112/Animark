"use client";

import { SearchInput } from "@/components/common/form/SearchInput";
import { Search } from "lucide-react";

export const CreatorSearch = () => {
  return (
    <div className="w-full">
      <SearchInput
        icon={<Search size={22} />}
        placeholder="Search creators, studios or artists..."
        containerClassName="mx-auto mt-7 w-[30%] max-w-2xl"
      />
    </div>
  );
};
