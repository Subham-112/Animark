"use client";

import { useCallback, useState } from "react";
import { getCurrentUser } from "../api";

export const useCurrentUser = () => {
  const [loading, setLoading] = useState(false);

  const fetchCurrentUser = useCallback(async () => {
    try {
      setLoading(true);
      return await getCurrentUser();
    } finally {
      setLoading(false);
    }
  }, []);

  return {
    fetchCurrentUser,
    loading,
  };
};
