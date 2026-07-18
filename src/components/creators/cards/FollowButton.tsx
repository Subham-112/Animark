"use client";

interface FollowButtonProps {
  following?: boolean;
}

export const FollowButton = ({ following = false }: FollowButtonProps) => {
  return (
    <button
      className={`mt-6 w-full rounded-xl py-3 font-semibold transition-all duration-300 ${
        following
          ? "border border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/20"
          : "bg-violet-600 text-white hover:bg-violet-500"
      }`}
    >
      {following ? "Following" : "Follow"}
    </button>
  );
};
