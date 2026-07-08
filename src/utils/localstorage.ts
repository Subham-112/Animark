export const TokenStorage = {
  setAuthToken(token: string): void {
    localStorage.setItem("token", token);
  },

  getAuthToken(): string | null {
    return localStorage.getItem("token");
  },

  removeAuthToken(): void {
    localStorage.removeItem("token");
  },

  clear(): void {
    localStorage.clear();
  },
};