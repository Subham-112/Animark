"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MailCheck, X } from "lucide-react";

import { sellerVerifyEmail, userVerifyEmail } from "@/api/auth/api";
import { OTPInput } from "./OTPInput";
import { ResendTimer } from "./ResendTimer";

interface VerifyEmailModalProps {
  open: boolean;
  email: string;
  devOtp?: string;
  onClose: () => void;
  onVerified: () => void;
  isSellerVerify?: boolean;
}

export const VerifyEmailModal = ({
  open,
  email,
  devOtp,
  onClose,
  onVerified,
  isSellerVerify,
}: VerifyEmailModalProps) => {
  const router = useRouter();

  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [resendLoading, setResendLoading] = useState(false);

  if (!open) return null;

  const handleVerify = async () => {
    if (otp.length !== 6) return;

    try {
      setLoading(true);

      isSellerVerify
        ? await sellerVerifyEmail({ email, otp })
        : await userVerifyEmail({ email, otp });

      isSellerVerify ? onVerified() : router.replace("/login");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setResendLoading(true);

      // TODO:
      // await resendOtp({ email });
    } finally {
      setResendLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/70 px-6 backdrop-blur-sm">
      <div className="relative w-full max-w-md rounded-[28px] border border-white/10 bg-[#0B1228] p-8 shadow-2xl">
        <button
          onClick={onClose}
          className="absolute right-5 top-5 rounded-lg p-2 text-slate-500 transition hover:bg-white/5 hover:text-white"
        >
          <X size={20} />
        </button>

        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-violet-500/10">
          <MailCheck size={30} className="text-violet-300" />
        </div>

        <h2 className="mt-6 text-center text-3xl font-bold text-white">
          Verify Email
        </h2>

        <p className="mt-3 text-center leading-7 text-slate-400">
          Enter the 6-digit verification code sent to
        </p>

        <p className="mt-1 text-center font-medium text-violet-300">{email}</p>

        <div className="mt-8">
          <OTPInput value={otp} onChange={setOtp} />
        </div>

        {process.env.NEXT_PUBLIC_APP_ENV === "development" && devOtp && (
          <div className="mt-6 rounded-2xl border border-amber-400/20 bg-amber-500/10 p-4">
            <p className="text-center text-sm text-amber-300">
              Development OTP
            </p>

            <p className="mt-2 text-center text-2xl font-bold tracking-[0.4em] text-white">
              {devOtp}
            </p>
          </div>
        )}

        <div className="mt-6">
          <ResendTimer loading={resendLoading} onResend={handleResend} />
        </div>

        <button
          onClick={handleVerify}
          disabled={otp.length !== 6 || loading}
          className="mt-8 w-full rounded-xl bg-violet-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-violet-400 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Verifying..." : "Verify Email"}
        </button>
      </div>
    </div>
  );
};
