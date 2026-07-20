"use client";

import { Eye, EyeOff, Mail, User } from "lucide-react";
import { useState } from "react";
import { AuthInput } from "../auth/signup-login/AuthInput";
import { PasswordInput } from "../auth/signup-login/PasswordInput";

interface SignupProps {
  onSubmit: () => void;
  errors: any;
  formRegister: any;
}

export default function SellerSignupForm({
  onSubmit,
  errors,
  formRegister,
}: SignupProps) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <form className="mt-4 space-y-3" onSubmit={onSubmit}>
      <div className="grid gap-6 md:grid-cols-2">
        <AuthInput
          label="First Name"
          icon={<User size={20} />}
          placeholder="Enter your name"
          error={errors.firstName}
          {...formRegister("firstName")}
        />
        <AuthInput
          label="Last Name"
          icon={<User size={20} />}
          placeholder="Enter your name"
          error={errors.lastName}
          {...formRegister("lastName")}
        />
      </div>

      <AuthInput
        label="Email Address"
        type="email"
        placeholder="Enter your email"
        icon={<Mail size={20} />}
        error={errors.email}
        {...formRegister("email")}
      />

      <PasswordInput
        label="Password"
        placeholder="Password"
        error={errors.password}
        {...formRegister("password")}
      />
      <PasswordInput
        label="Confirm Password"
        placeholder="Confirm password"
        error={errors.confirmPassword}
        {...formRegister("confirmPassword")}
      />

      <label className="flex cursor-pointer items-center gap-3">
        <input type="checkbox" className="mt-1" {...formRegister("terms")} />

        <span className="text-sm leading-6 text-slate-400">
          I agree to the Seller Terms & Conditions and Privacy Policy.
        </span>
      </label>

      {errors.terms && (
        <p className="text-sm text-red-400">{errors.terms.message}</p>
      )}

      <button
        type="submit"
        className="h-12 w-full rounded-xl bg-violet-600 font-semibold text-white transition hover:bg-violet-700"
        onClick={onSubmit}
      >
        Create Seller Account
      </button>
    </form>
  );
}
