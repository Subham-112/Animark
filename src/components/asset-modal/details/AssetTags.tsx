"use client";

const tags = ["Anime", "2D", "PSD", "PNG", "Commercial", "Character"];

export const AssetTags = () => {
  return (
    <div className="mt-4">
      <h3 className="mb-4 text-lg font-semibold text-white">Tags</h3>

      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 text-sm text-slate-300 transition-all duration-300 hover:border-violet-500/30 hover:bg-violet-500/10 hover:text-white"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};
