"use client";

import { forwardRef, InputHTMLAttributes, useState } from "react";
import { Eye, EyeOff, Lock } from "lucide-react";
import { FieldError } from "react-hook-form";

interface PasswordInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: FieldError | string;
}

export const PasswordInput = forwardRef<HTMLInputElement, PasswordInputProps>(
  ({ label, error, className = "", ...props }, ref) => {
    const [showPassword, setShowPassword] = useState(false);

    return (
      <div className="w-full">
        <label className="mb-3 block text-sm font-medium text-slate-300">
          {label}
        </label>

        <div
          className="group flex h-14 items-center gap-3 border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 hover:border-white/20 focus-within:border-violet-400/40 focus-within:bg-violet-500/[0.03]"
          style={{ borderRadius: 16 }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="mt-1 h-6 w-6 text-slate-500 transition-colors duration-300 group-focus-within:text-violet-300"
          >
            <path d="M21 16V8a2 2 0 0 0-2-2h-1V4a4 4 0 1 0-8 0v2H9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2Z" />
            <path d="M12 11v4" />
          </svg>

          <input
            ref={ref}
            {...props}
            type={showPassword ? "text" : "password"}
            className={`h-full w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none ${className}`}
          />

          <button
            type="button"
            onClick={() => setShowPassword((prev) => !prev)}
            className="text-slate-500 transition-colors duration-300 hover:text-violet-300 cursor-pointer"
          >
            {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
          </button>
        </div>

        {error && (
          <p className="mt-2 text-sm text-red-400">
            {typeof error === "string" ? error : error.message}
          </p>
        )}
      </div>
    );
  },
);

PasswordInput.displayName = "PasswordInput";
