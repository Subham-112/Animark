"use client";

import { useEffect, useState, useCallback } from "react";
import { getOrderStats } from "../api";
import { OrderStatsData } from "../types";

export const useOrderStats = () => {
  const [stats, setStats] = useState<OrderStatsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchStats = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await getOrderStats();
      if (res?.success && res?.data) {
        setStats(res.data);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to fetch order stats");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchStats();
  }, [fetchStats]);

  return { stats, loading, error, refetch: fetchStats };
};
