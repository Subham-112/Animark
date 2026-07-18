import { SettingsData } from "@/types/seller/settings";

export const settingsData: SettingsData = {
  account: {
    profileImage:
      "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=300&q=80",
    fullName: "Subham Sahu",
    username: "@animark",
    email: "subham@animark.com",
    phone: "+91 9876543210",
    language: "English",
    timezone: "Asia/Kolkata",
  },

  security: {
    twoFactorEnabled: false,
    activeSessions: 3,
  },

  notifications: {
    emailNotifications: true,
    pushNotifications: true,
    orderUpdates: true,
    reviewAlerts: true,
    marketingEmails: false,
    securityAlerts: true,
    payoutNotifications: true,
  },

  preferences: {
    theme: "dark",
    language: "English",
    currency: "INR",
    dateFormat: "DD/MM/YYYY",
    timeFormat: "24h",
  },

  connectedAccounts: [
    {
      id: "1",
      provider: "Google",
      connected: true,
    },
    {
      id: "2",
      provider: "GitHub",
      connected: false,
    },
    {
      id: "3",
      provider: "Facebook",
      connected: true,
    },
    {
      id: "4",
      provider: "X",
      connected: false,
    },
  ],
};
