"use client";

import { useEffect, useState } from "react";

interface ResendTimerProps {
  seconds?: number;
  loading?: boolean;
  onResend: () => Promise<void> | void;
}

export const ResendTimer = ({
  seconds = 60,
  loading = false,
  onResend,
}: ResendTimerProps) => {
  const [timeLeft, setTimeLeft] = useState(seconds);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const timer = setTimeout(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearTimeout(timer);
  }, [timeLeft]);

  const handleResend = async () => {
    await onResend();
    setTimeLeft(seconds);
  };

  const minutes = Math.floor(timeLeft / 60);
  const secs = timeLeft % 60;

  return (
    <div className="flex items-center justify-center gap-2 text-sm">
      {timeLeft > 0 ? (
        <>
          <span className="text-slate-400">Resend OTP in</span>

          <span className="font-semibold text-violet-300">
            {minutes}:{secs.toString().padStart(2, "0")}
          </span>
        </>
      ) : (
        <button
          type="button"
          disabled={loading}
          onClick={handleResend}
          className="font-medium text-violet-300 transition hover:text-violet-200 disabled:cursor-not-allowed disabled:opacity-50"
        >
          {loading ? "Sending..." : "Resend OTP"}
        </button>
      )}
    </div>
  );
};
