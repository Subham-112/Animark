import { Fetch } from "@/utils/apiUtils";
import { endpoints } from "@/utils/endpoints";
import { GetOrdersParams, GetOrdersResponse, OrderStatsResponse } from "./types";

export const getOrderStats = () => {
  return Fetch<OrderStatsResponse>(endpoints.orders.stats);
};

export const getOrders = (params?: GetOrdersParams) => {
  return Fetch<GetOrdersResponse>(endpoints.orders.list, params as Record<string, unknown>);
};
