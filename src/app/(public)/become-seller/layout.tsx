import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Seller | Animark",
  description:
    "Join Animark and start selling digital characters, animation assets and professional courses.",
};

interface BecomeSellerLayoutProps {
  children: React.ReactNode;
}

export default function BecomeSellerLayout({
  children,
}: BecomeSellerLayoutProps) {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#04091B] text-white">
      {/* Background Glow */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        <div className="absolute -left-40 -top-40 h-[420px] w-[420px] rounded-full bg-violet-600/10 blur-[160px]" />

        <div className="absolute right-0 top-1/3 h-[380px] w-[380px] rounded-full bg-cyan-500/10 blur-[160px]" />

        <div className="absolute bottom-0 left-1/2 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-indigo-500/10 blur-[140px]" />
      </div>

      {children}
    </div>
  );
}
