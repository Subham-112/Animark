import {
  AnalyticsStats,
  ConversionAnalytics,
  CountryAnalytics,
  RevenueData,
  SalesData,
  TopProduct,
} from "@/types/seller/analytics";

export const analyticsStats: AnalyticsStats = {
  revenue: {
    value: 128420,
    growth: 12.4,
  },

  downloads: {
    value: 9321,
    growth: 8.6,
  },

  views: {
    value: 21583,
    growth: 18.3,
  },

  conversion: {
    value: 5.6,
    growth: 0.8,
  },
};

export const revenueData: RevenueData[] = [
  {
    label: "Jan",
    revenue: 12000,
  },
  {
    label: "Feb",
    revenue: 15000,
  },
  {
    label: "Mar",
    revenue: 18000,
  },
  {
    label: "Apr",
    revenue: 16500,
  },
  {
    label: "May",
    revenue: 22000,
  },
  {
    label: "Jun",
    revenue: 28000,
  },
  {
    label: "Jul",
    revenue: 32000,
  },
];

export const salesData: SalesData[] = [
  {
    label: "Mon",
    sales: 18,
  },
  {
    label: "Tue",
    sales: 24,
  },
  {
    label: "Wed",
    sales: 30,
  },
  {
    label: "Thu",
    sales: 20,
  },
  {
    label: "Fri",
    sales: 36,
  },
  {
    label: "Sat",
    sales: 42,
  },
  {
    label: "Sun",
    sales: 28,
  },
];

export const topProducts: TopProduct[] = [
  {
    id: "1",
    name: "Anime Girl Pack",
    sales: 145,
    revenue: 86855,
  },
  {
    id: "2",
    name: "Samurai Collection",
    sales: 98,
    revenue: 78302,
  },
  {
    id: "3",
    name: "Cute Character Bundle",
    sales: 74,
    revenue: 29526,
  },
  {
    id: "4",
    name: "Fantasy Warrior Pack",
    sales: 52,
    revenue: 31148,
  },
];

export const topCountries: CountryAnalytics[] = [
  {
    country: "India",
    sales: 142,
    revenue: 84580,
  },
  {
    country: "United States",
    sales: 84,
    revenue: 67320,
  },
  {
    country: "Japan",
    sales: 61,
    revenue: 41280,
  },
  {
    country: "Germany",
    sales: 36,
    revenue: 22800,
  },
  {
    country: "Canada",
    sales: 24,
    revenue: 15640,
  },
];

export const conversionAnalytics: ConversionAnalytics = {
  visitors: 21583,
  downloads: 9321,
  purchases: 1204,
  conversionRate: 5.6,
};
