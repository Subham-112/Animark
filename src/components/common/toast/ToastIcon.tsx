"use client";

import {
  Bell,
  CheckCircle2,
  CircleAlert,
  CircleX,
  Info,
  Loader2,
} from "lucide-react";
import { ToastType } from "./types";

interface ToastIconProps {
  type: ToastType;
}

const iconStyles: Record<ToastType, string> = {
  default: "text-white",
  success: "text-emerald-400",
  error: "text-rose-400",
  warning: "text-amber-400",
  info: "text-cyan-400",
  loading: "text-violet-400",
};

export const ToastIcon = ({ type }: ToastIconProps) => {
  const className = `h-6 w-6 shrink-0 ${iconStyles[type]}`;

  switch (type) {
    case "default":
      return <Bell className={className} />;

    case "success":
      return <CheckCircle2 className={className} />;

    case "error":
      return <CircleX className={className} />;

    case "warning":
      return <CircleAlert className={className} />;

    case "info":
      return <Info className={className} />;

    case "loading":
      return <Loader2 className={`${className} animate-spin`} />;

    default:
      return null;
  }
};
