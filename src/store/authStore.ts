import { create } from "zustand";

import { CurrentUser } from "@/api/auth/types";

interface AuthState {
  user: CurrentUser | null;
  isLoading: boolean;
  isAuthenticated: boolean;

  setUser: (user: CurrentUser | null) => void;
  setLoading: (loading: boolean) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isLoading: true,
  isAuthenticated: false,

  setUser: (user) =>
    set({
      user,
      isAuthenticated: !!user,
    }),

  setLoading: (loading) =>
    set({
      isLoading: loading,
    }),

  logout: () =>
    set({
      user: null,
      isAuthenticated: false,
    }),
}));
