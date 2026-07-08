"use client";

import { ChangeEvent, KeyboardEvent, useEffect, useRef } from "react";

interface OTPInputProps {
  value: string;
  length?: number;
  onChange: (value: string) => void;
}

export const OTPInput = ({ value, length = 6, onChange }: OTPInputProps) => {
  const inputsRef = useRef<(HTMLInputElement | null)[]>([]);

  useEffect(() => {
    const firstEmpty = value.length;

    if (firstEmpty < length) {
      inputsRef.current[firstEmpty]?.focus();
    }
  }, []);

  const handleChange = (
    index: number,
    event: ChangeEvent<HTMLInputElement>,
  ) => {
    const digit = event.target.value.replace(/\D/g, "");
    if (!digit) return;

    const values = value.split("");
    values[index] = digit;

    const otp = values.join("").slice(0, length);
    onChange(otp);

    if (index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleKeyDown = (
    index: number,
    event: KeyboardEvent<HTMLInputElement>,
  ) => {
    if (event.key === "Backspace") {
      event.preventDefault();

      const values = value.split("");
      if (values[index]) {
        values[index] = "";
        onChange(values.join(""));
        return;
      }

      if (index > 0) {
        inputsRef.current[index - 1]?.focus();
        values[index - 1] = "";
        onChange(values.join(""));
      }
    }

    if (event.key === "ArrowLeft" && index > 0) {
      inputsRef.current[index - 1]?.focus();
    }

    if (event.key === "ArrowRight" && index < length - 1) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handlePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    const pasted = event.clipboardData
      .getData("text")
      .replace(/\D/g, "")
      .slice(0, length);

    if (pasted.length) {
      onChange(pasted);

      const next = Math.min(pasted.length, length - 1);

      inputsRef.current[next]?.focus();
    }
  };

  return (
    <div className="flex justify-center gap-3">
      {Array.from({ length }).map((_, index) => (
        <input
          key={index}
          ref={(el) => {
            inputsRef.current[index] = el;
          }}
          type="text"
          inputMode="numeric"
          maxLength={1}
          autoComplete="one-time-code"
          value={value[index] ?? ""}
          onChange={(e) => handleChange(index, e)}
          onKeyDown={(e) => handleKeyDown(index, e)}
          onPaste={handlePaste}
          className="h-14 w-14 rounded-2xl border border-white/10 bg-white/[0.03] text-center text-xl font-bold text-white outline-none transition-all duration-300 focus:border-violet-400 focus:bg-violet-500/[0.05]"
        />
      ))}
    </div>
  );
};
