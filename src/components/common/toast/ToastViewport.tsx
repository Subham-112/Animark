"use client";

import { useToast } from "./useToast";
import { ToastItem } from "./ToastItem";

export const ToastViewport = () => {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-6 left-1/2 z-[9999] flex w-full max-w-md -translate-x-1/2 flex-col-reverse gap-3 px-4">
      {toasts.map((toast) => (
        <ToastItem key={toast.id} toast={toast} />
      ))}
    </div>
  );
};