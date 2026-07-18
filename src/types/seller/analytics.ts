export interface AnalyticsStats {
  revenue: {
    value: number;
    growth: number;
  };

  downloads: {
    value: number;
    growth: number;
  };

  views: {
    value: number;
    growth: number;
  };

  conversion: {
    value: number;
    growth: number;
  };
}

export interface RevenueData {
  label: string;
  revenue: number;
}

export interface SalesData {
  label: string;
  sales: number;
}

export interface TopProduct {
  id: string;
  name: string;
  sales: number;
  revenue: number;
}

export interface CountryAnalytics {
  country: string;
  sales: number;
  revenue: number;
}

export interface ConversionAnalytics {
  visitors: number;
  downloads: number;
  purchases: number;
  conversionRate: number;
}
