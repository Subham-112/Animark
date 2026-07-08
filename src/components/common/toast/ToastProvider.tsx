"use client";

import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState,
} from "react";

import { registerToastListener } from "./toast";
import { ToastContextType, Toast as ToastType } from "./types";
import { ToastViewport } from "./ToastViewport";

export const ToastContext = createContext<ToastContextType | null>(null);

interface ToastProviderProps {
  children: ReactNode;
}

export const ToastProvider = ({ children }: ToastProviderProps) => {
  const [toasts, setToasts] = useState<ToastType[]>([]);

  const remove = useCallback((id: string) => {
    if (id === "__ALL__") {
      setToasts([]);
      return;
    }

    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  }, []);

  const show = useCallback((toast: Omit<ToastType, "id">) => {
    const toastWithId: ToastType = {
      ...toast,
      id: `${Date.now()}-${Math.random().toString(36).slice(2, 9)}`,
    };

    setToasts((prev) => {
      const next = [...prev, toastWithId];

      if (next.length > 3) {
        next.shift();
      }

      return next;
    });
  }, []);

  const update = useCallback((toast: ToastType) => {
    setToasts((prev) =>
      prev.map((item) =>
        item.id === toast.id
          ? {
              ...item,
              ...toast,
            }
          : item,
      ),
    );
  }, []);

  useEffect(() => {
    registerToastListener(show, update, remove);
  }, [show, remove]);

  const value = useMemo(
    () => ({
      toasts,
      show,
      remove,
    }),
    [toasts, show, remove],
  );

  return (
    <ToastContext.Provider value={value}>
      {children}

      <ToastViewport />
    </ToastContext.Provider>
  );
};
