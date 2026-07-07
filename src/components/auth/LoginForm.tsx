"use client";

import Link from "next/link";
import { Mail } from "lucide-react";

import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { Divider } from "./Divider";

export const LoginForm = () => {
  return (
    <form className="space-y-4">
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        icon={<Mail size={20} />}
      />

      <PasswordInput label="Password" placeholder="Enter your password" />

      <div className="flex items-center justify-between">
        <label className="flex cursor-pointer items-center gap-3">
          <input
            type="checkbox"
            className="h-4 w-4 rounded border-white/20 bg-transparent accent-violet-500"
          />

          <span className="text-sm text-slate-400">Remember me</span>
        </label>

        <Link
          href="/forgot-password"
          className="text-sm text-violet-300 transition-colors hover:text-violet-200"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full rounded-lg bg-violet-500 py-3 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_40px_rgba(124,58,237,.35)]"
      >
        Sign In
      </button>

      <Divider />

      <button
        type="button"
        className="flex w-full items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.03] py-3 font-medium text-white transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10"
      >
        {/* Google SVG */}
        <svg viewBox="0 0 48 48" className="h-5 w-5">
          <path
            fill="#FFC107"
            d="M43.6 20.5H42V20H24v8h11.3C33.6 32.7 29.2 36 24 36c-6.6 0-12-5.4-12-12S17.4 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20 20-8.9 20-20c0-1.3-.1-2.3-.4-3.5Z"
          />

          <path
            fill="#FF3D00"
            d="M6.3 14.7l6.6 4.8C14.7 15.1 18.9 12 24 12c3 0 5.8 1.1 7.9 3l5.7-5.7C34.1 6.1 29.3 4 24 4 16.3 4 9.7 8.3 6.3 14.7Z"
          />

          <path
            fill="#4CAF50"
            d="M24 44c5.2 0 10-2 13.5-5.2l-6.2-5.2c-2.1 1.6-4.7 2.4-7.3 2.4-5.2 0-9.6-3.3-11.1-7.9l-6.5 5C9.8 39.6 16.3 44 24 44Z"
          />

          <path
            fill="#1976D2"
            d="M43.6 20.5H42V20H24v8h11.3c-1.1 3-3.4 5.2-6.2 6.6l6.2 5.2C39.7 35.8 44 30.5 44 24c0-1.3-.1-2.3-.4-3.5Z"
          />
        </svg>
        Continue with Google
      </button>

      <p className="text-center text-slate-400">
        Don't have an account?{" "}
        <Link
          href="/signup"
          className="font-medium text-violet-300 hover:text-violet-200"
        >
          Create Account
        </Link>
      </p>
    </form>
  );
};
