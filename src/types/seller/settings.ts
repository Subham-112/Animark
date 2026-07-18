export interface AccountSettings {
  profileImage: string;
  fullName: string;
  username: string;
  email: string;
  phone: string;
  language: string;
  timezone: string;
}

export interface NotificationSettings {
  emailNotifications: boolean;
  pushNotifications: boolean;
  orderUpdates: boolean;
  reviewAlerts: boolean;
  marketingEmails: boolean;
  securityAlerts: boolean;
  payoutNotifications: boolean;
}

export interface PreferenceSettings {
  theme: "dark" | "light" | "system";
  language: string;
  currency: string;
  dateFormat: string;
  timeFormat: "12h" | "24h";
}

export interface ConnectedAccount {
  id: string;
  provider: "Google" | "GitHub" | "Facebook" | "X";
  connected: boolean;
}

export interface SecuritySettings {
  twoFactorEnabled: boolean;
  activeSessions: number;
}

export interface SettingsData {
  account: AccountSettings;
  security: SecuritySettings;
  notifications: NotificationSettings;
  preferences: PreferenceSettings;
  connectedAccounts: ConnectedAccount[];
}