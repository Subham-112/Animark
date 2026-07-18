"use client";

interface CreatorStatsProps {
  assets: number;
  followers: string;
  downloads: string;
}

export const CreatorStats = ({
  assets,
  followers,
  downloads,
}: CreatorStatsProps) => {
  return (
    <div className="w-[100%] mt-6 grid grid-cols-3 rounded-lg border border-white/10 bg-white/[0.03]">
      <div className="border-r border-white/10 py-4 text-center">
        <p className="text-lg font-bold text-white">{assets}</p>
        <p className="mt-1 text-xs text-slate-400">Assets</p>
      </div>

      <div className="border-r border-white/10 py-4 text-center">
        <p className="text-lg font-bold text-white">{followers}</p>
        <p className="mt-1 text-xs text-slate-400">Followers</p>
      </div>

      <div className="py-4 text-center">
        <p className="text-lg font-bold text-white">{downloads}</p>
        <p className="mt-1 text-xs text-slate-400">Downloads</p>
      </div>
    </div>
  );
};
