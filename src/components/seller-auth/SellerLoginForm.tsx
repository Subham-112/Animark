"use client";

import { Mail } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { PasswordInput } from "../auth/signup-login/PasswordInput";
import { AuthInput } from "../auth/signup-login/AuthInput";

interface LoginProps {
  onSubmit: () => void;
  errors: any,
  register: any,
}

export default function SellerLoginForm({ onSubmit, errors, register }: LoginProps) {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <form onSubmit={onSubmit} className="mt-6 space-y-4">
      <AuthInput
        label="Email Address"
        placeholder="Email"
        icon={<Mail size={20} />}
        error={errors.email}
        {...register("email")}
      />

      <PasswordInput
        label="Password"
        placeholder="Password"
        error={errors.password}
        {...register("password")}
      />

      <div className="flex justify-end">
        <Link
          href="/become-seller/forgot-password"
          className="text-sm text-violet-400 hover:text-violet-300"
        >
          Forgot Password?
        </Link>
      </div>

      <button
        type="submit"
        className="h-12 w-full rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-700"
      >
        Login
      </button>
    </form>
  );
}
