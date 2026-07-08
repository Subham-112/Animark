"use client";

import { useEffect, useMemo, useRef } from "react";
import { X } from "lucide-react";

import { ToastIcon } from "./ToastIcon";
import { Toast } from "./types";
import { useToast } from "./useToast";

interface ToastItemProps {
  toast: Toast;
}

const accentStyles = {
  default: {
    border: "border-l-4 border-l-white/30",
    progress: "bg-white/40",
  },
  success: {
    border: "border-l-4 border-l-emerald-400",
    progress: "bg-emerald-400",
  },
  error: {
    border: "border-l-4 border-l-rose-400",
    progress: "bg-rose-400",
  },
  warning: {
    border: "border-l-4 border-l-amber-400",
    progress: "bg-amber-400",
  },
  info: {
    border: "border-l-4 border-l-cyan-400",
    progress: "bg-cyan-400",
  },
  loading: {
    border: "border-l-4 border-l-violet-400",
    progress: "bg-violet-400",
  },
};

export const ToastItem = ({ toast }: ToastItemProps) => {
  const { remove } = useToast();

  const timer = useRef<NodeJS.Timeout | null>(null);
  const remaining = useRef(toast.duration ?? 4000);
  const startedAt = useRef(0);

  const styles = useMemo(() => accentStyles[toast.type], [toast.type]);

  const startTimer = () => {
    startedAt.current = Date.now();

    timer.current = setTimeout(() => {
      remove(toast.id);
    }, remaining.current);
  };

  const pauseTimer = () => {
    if (!timer.current) return;
    clearTimeout(timer.current);
    remaining.current -= Date.now() - startedAt.current;
  };

  useEffect(() => {
    if (toast.type !== "loading") {
      startTimer();
    }

    return () => {
      if (timer.current) {
        clearTimeout(timer.current);
      }
    };
  }, []);

  return (
    <div
      onMouseEnter={pauseTimer}
      onMouseLeave={startTimer}
      className={`animate-fade-up relative overflow-hidden rounded-lg border border-white/10 bg-[#0B1228]/95 shadow-2xl backdrop-blur-xl`}
    >
      <div className="flex items-center gap-4 p-5">
        <ToastIcon type={toast.type} />

        <div className="flex-1">
          <h4 className="font-semibold text-white">{toast.title}</h4>

          {toast.description && (
            <p className="mt-1 text-sm leading-6 text-slate-400">
              {toast.description}
            </p>
          )}
        </div>

        <button
          onClick={() => remove(toast.id)}
          className="rounded-lg p-1 text-slate-500 transition-colors duration-300 hover:bg-white/5 hover:text-white"
        >
          <X size={18} />
        </button>
      </div>

      {toast.type !== "loading" && (
        <div className="h-1 w-full bg-white/5">
          <div
            className={`h-full origin-left ${styles.progress}`}
            style={{
              animation: `toast-progress ${toast.duration ?? 4000}ms linear forwards`,
            }}
          />
        </div>
      )}
    </div>
  );
};
