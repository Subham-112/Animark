export interface OrderStatsData {
  total: number;
  completed: number;
  pending: number;
  refunded: number;
}

export interface OrderStatsResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: OrderStatsData;
}

export interface GetOrdersParams {
  type?: string;
  page?: number;
  limit?: number;
  search?: string;
  status?: string;
}

export interface OrderPagination {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface OrderItem {
  id?: string;
  _id?: string;
  orderId?: string;
  customer?: string | { name?: string; email?: string; firstName?: string; lastName?: string };
  user?: { firstName?: string; lastName?: string; email?: string };
  product?: string | { name?: string; title?: string };
  items?: Array<{ product?: { name?: string; title?: string }; price?: number }>;
  amount?: number;
  totalAmount?: number;
  commission?: number;
  platformFee?: number;
  sellerEarning?: number;
  sellerEarnings?: number;
  earning?: number;
  status?: string;
  paymentMethod?: string;
  paymentType?: string;
  date?: string;
  createdAt?: string;
  [key: string]: any;
}

export interface GetOrdersResponse {
  statusCode: number;
  success: boolean;
  message: string;
  data: {
    orders: OrderItem[];
    pagination: OrderPagination;
  };
}
