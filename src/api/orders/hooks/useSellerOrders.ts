"use client";

import { useEffect, useState, useCallback } from "react";
import { getOrders } from "../api";
import { GetOrdersParams, GetOrdersResponse } from "../types";

export const useSellerOrders = (initialParams: GetOrdersParams = { type: "seller", page: 1, limit: 10 }) => {
  const [data, setData] = useState<GetOrdersResponse["data"] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchOrders = useCallback(async (queryParams: GetOrdersParams) => {
    try {
      setLoading(true);
      setError(null);
      // Filter out undefined values
      const cleanParams = Object.fromEntries(
        Object.entries(queryParams).filter(([_, v]) => v !== undefined && v !== "")
      );
      const res = await getOrders(cleanParams);
      if (res?.success && res?.data) {
        setData(res.data);
      }
    } catch (err: any) {
      setError(err?.message || "Failed to fetch orders");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchOrders(initialParams);
  }, [
    initialParams.type,
    initialParams.page,
    initialParams.limit,
    initialParams.search,
    initialParams.status,
    fetchOrders,
  ]);

  return {
    orders: data?.orders || [],
    pagination: data?.pagination || { total: 0, page: 1, limit: 10, totalPages: 0 },
    loading,
    error,
    refetch: () => fetchOrders(initialParams),
  };
};
