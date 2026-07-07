"use client";

import Link from "next/link";
import { Mail, User } from "lucide-react";

import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { Divider } from "./Divider";

export const SignupForm = () => {
  return (
    <form className="space-y-6">
      <div className="flex gap-5">
        <AuthInput
          label="First Name"
          type="text"
          placeholder="Enter your name"
          icon={<User size={20} />}
        />
        <AuthInput
          label="Last Name"
          type="text"
          placeholder="Enter your name"
          icon={<User size={20} />}
        />
      </div>
      <AuthInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        icon={<Mail size={20} />}
      />

      <PasswordInput label="Password" placeholder="Create password" />
      <PasswordInput label="Confirm Password" placeholder="Confirm password" />

      <label className="flex items-start gap-3">
        <input
          type="checkbox"
          className="mt-1 h-4 w-4 rounded accent-violet-500"
        />

        <span className="text-sm leading-6 text-slate-400">
          I agree to the{" "}
          <Link href="/terms" className="text-violet-300 hover:text-violet-200">
            Terms & Conditions
          </Link>{" "}
          and{" "}
          <Link
            href="/privacy"
            className="text-violet-300 hover:text-violet-200"
          >
            Privacy Policy
          </Link>
          .
        </span>
      </label>

      <button
        type="submit"
        className="w-full rounded-xl bg-violet-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_40px_rgba(124,58,237,.35)]"
      >
        Create Account
      </button>

      <Divider />

      <button
        type="button"
        className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 font-medium text-white transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10"
      >
        Continue with Google
      </button>

      <p className="text-center text-slate-400">
        Already have an account?{" "}
        <Link
          href="/login"
          className="font-medium text-violet-300 hover:text-violet-200"
        >
          Sign In
        </Link>
      </p>
    </form>
  );
};
