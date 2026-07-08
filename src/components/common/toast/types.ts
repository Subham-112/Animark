export type ToastType =
  | "default"
  | "success"
  | "error"
  | "warning"
  | "info"
  | "loading";

export interface Toast {
  id: string;
  title: string;
  description?: string;
  type: ToastType;
  duration?: number;
  persistent?: boolean;
}

export interface ToastContextType {
  toasts: Toast[];
  show: (toast: Omit<Toast, "id">) => void;
  remove: (id: string) => void;
}
