"use client";

import { InputHTMLAttributes, ReactNode } from "react";

interface SearchInputProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  icon?: ReactNode;

  button?: ReactNode;
  onButtonClick?: () => void;

  containerClassName?: string;
  inputClassName?: string;
  labelClassName?: string;

  containerHeight?: number;
  containerHRadius?: number;
  inputText?: string;
}

export const SearchInput = ({
  label,
  icon,

  button,
  onButtonClick,

  containerClassName = "",
  containerHeight = 16,
  containerHRadius = 18,
  inputText = "lg",
  inputClassName = "",
  labelClassName = "",
  ...props
}: SearchInputProps) => {
  return (
    <div className="w-full">
      {label && (
        <label
          className={`mb-2 block text-sm font-medium text-slate-300 ${labelClassName}`}
        >
          {label}
        </label>
      )}

      <div
        className={`flex h-${containerHeight} items-center rounded-[${containerHRadius}px] border border-white/10 bg-white/[0.03] px-5 backdrop-blur-xl transition-all duration-300 focus-within:border-violet-400/40 focus-within:bg-violet-500/[0.04] ${containerClassName}`}
      >
        {icon && <div className="text-slate-400">{icon}</div>}

        <input
          {...props}
          className={`h-full w-full bg-transparent text-${inputText} text-white placeholder:text-slate-500 focus:outline-none ${
            icon ? "ml-4" : ""
          } ${inputClassName}`}
        />

        {button && (
          <button
            type="button"
            onClick={onButtonClick}
            className="ml-4 shrink-0 pl-4 cursor-pointer border-l"
          >
            {button}
          </button>
        )}
      </div>
    </div>
  );
};
