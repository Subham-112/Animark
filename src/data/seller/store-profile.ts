import { StoreProfile } from "@/types/seller/store-profile";

export const storeProfile: StoreProfile = {
  logo: "https://images.unsplash.com/photo-1545239351-1141bd82e8a6?w=200&q=80",

  banner:
    "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=1600&q=80",

  name: "ANIMARK Studio",

  username: "@animark",

  tagline: "Premium 2D Characters & Animation Courses",

  description:
    "We create high-quality 2D character assets, animation resources and professional courses for creators around the world.",

  stats: {
    profileCompletion: 92,
    followers: 2543,
    products: 48,
    totalSales: 1824,
    rating: 4.8,
    storeStatus: "active",
  },

  socialLinks: {
    website: "https://animark.com",
    youtube: "https://youtube.com/@animark",
    instagram: "https://instagram.com/animark",
    linkedin: "https://linkedin.com/company/animark",
    x: "https://x.com/animark",
  },

  businessInformation: {
    businessEmail: "business@animark.com",
    supportEmail: "support@animark.com",
    phone: "+91 9876543210",
    country: "India",
    state: "Odisha",
    city: "Bhubaneswar",
    timezone: "Asia/Kolkata",
  },

  settings: {
    visibility: "public",
    allowReviews: true,
    showFollowers: true,
    autoPublishProducts: false,
  },
};
