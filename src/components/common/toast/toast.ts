import { Toast } from "./types";

type ToastListener = (toast: Toast) => void;
type RemoveListener = (id: string) => void;
type UpdateListener = (toast: Toast) => void;

let updateListener: UpdateListener | null = null;
let toastListener: ToastListener | null = null;
let removeListener: RemoveListener | null = null;

export const registerToastListener = (
  show: ToastListener,
  update: UpdateListener,
  remove: RemoveListener,
) => {
  toastListener = show;
  updateListener = update;
  removeListener = remove;
};

const createToast = (
  title: string,
  type: Toast["type"],
  description?: string,
  duration = 4000,
) => {
  toastListener?.({
    id: crypto.randomUUID(),
    title,
    description,
    type,
    duration,
  });
};

export const toast = {
  default: (title: string, description?: string, duration?: number) =>
    createToast(title, "default", description, duration),

  success: (title: string, description?: string, duration?: number) =>
    createToast(title, "success", description, duration),

  error: (title: string, description?: string, duration?: number) =>
    createToast(title, "error", description, duration),

  warning: (title: string, description?: string, duration?: number) =>
    createToast(title, "warning", description, duration),

  info: (title: string, description?: string, duration?: number) =>
    createToast(title, "info", description, duration),

  remove: (id: string) => removeListener?.(id),

  loading: (title: string, description?: string) => {
    const id = crypto.randomUUID();

    toastListener?.({
      id,
      title,
      description,
      type: "loading",
      duration: Infinity,
    });

    return id;
  },

  update: (id: string, toast: Partial<Omit<Toast, "id">>) => {
    updateListener?.({
      id,
      title: toast.title ?? "",
      description: toast.description,
      type: toast.type ?? "default",
      duration: toast.duration,
    });
  },

  dismiss: (id: string) => {
    removeListener?.(id);
  },

  dismissAll: () => {
    removeListener?.("__ALL__");
  },
};
