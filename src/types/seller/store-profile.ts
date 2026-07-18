export interface StoreStats {
  profileCompletion: number;
  followers: number;
  products: number;
  totalSales: number;
  rating: number;
  storeStatus: "active" | "inactive" | "draft";
}

export interface SocialLinks {
  website: string;
  youtube: string;
  instagram: string;
  linkedin: string;
  x: string;
}

export interface BusinessInformation {
  businessEmail: string;
  supportEmail: string;
  phone: string;
  country: string;
  state: string;
  city: string;
  timezone: string;
}

export interface StoreSettings {
  visibility: "public" | "private";
  allowReviews: boolean;
  showFollowers: boolean;
  autoPublishProducts: boolean;
}

export interface StoreProfile {
  logo: string;
  banner: string;
  name: string;
  username: string;
  tagline: string;
  description: string;

  stats: StoreStats;
  socialLinks: SocialLinks;
  businessInformation: BusinessInformation;
  settings: StoreSettings;
}
