"use client";

import { forwardRef, InputHTMLAttributes, ReactNode } from "react";
import { FieldError } from "react-hook-form";

interface AuthInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon: ReactNode;
  error?: FieldError | string;
}

export const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, icon, error, className = "", ...props }, ref) => {
    return (
      <div className="w-full">
        <label className="mb-3 block text-sm font-medium text-slate-300">
          {label}
        </label>

        <div
          className="group flex h-14 items-center gap-3 border border-white/10 bg-white/[0.03] px-4 transition-all duration-300 focus-within:border-violet-400/40 focus-within:bg-violet-500/[0.03] hover:border-white/20"
          style={{ borderRadius: 16 }}
        >
          <div className="text-slate-500 transition-colors duration-300 group-focus-within:text-violet-300">
            {icon}
          </div>

          <input
            ref={ref}
            {...props}
            className={`h-full w-full bg-transparent text-white placeholder:text-slate-500 focus:outline-none ${className}`}
          />
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
