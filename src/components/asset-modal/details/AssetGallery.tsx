"use client";

import Image from "next/image";
import { useState } from "react";

const images = [
  "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=1200&q=80",
  "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=1200&q=80",
  "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=1200&q=80",
  "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=1200&q=80",
];

export const AssetGallery = () => {
  const [active, setActive] = useState(images[0]);

  return (
    <div className="space-y-5">
      <div className="relative h-[400px] w-[450px] overflow-hidden rounded-xl border border-white/10 bg-[#101845]">
        <Image src={active} alt="" fill className="object-cover" />
      </div>

      <div className="grid grid-cols-4 gap-1">
        {images.map((image) => (
          <button
            key={image}
            onClick={() => setActive(image)}
            className={`relative h-[100px] w-[100px] overflow-hidden rounded-lg border transition-all duration-300 cursor-pointer ${
              active === image ? "border-violet-500" : "border-white/10"
            }`}
          >
            <Image src={image} alt="" fill className="object-cover" />
          </button>
        ))}
      </div>
    </div>
  );
};
