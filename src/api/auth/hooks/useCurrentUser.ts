"use client";

import { useCallback, useState } from "react";
import { getCurrentUser } from "../api";
import { useAuthStore } from "@/store/authStore";

export const useCurrentUser = () => {
  const [loading, setLoading] = useState(false);
  const setUser = useAuthStore((state) => state.setUser);

  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);
      const response = await getCurrentUser();
      if (response?.success && response?.data) {
        setUser(response.data);
      }
      return response;
    } finally {
      setLoading(false);
    }
  }, [setUser]);

  return {
    fetchCurrentUser,
    getCurrent: fetchCurrentUser,
    loading,
  };
};

