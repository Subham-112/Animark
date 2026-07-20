export const endpoints = {
  auth: {
    userRegister: "/api/users/register",
    userLogin: "/api/users/login",
    userVerifyEmail: "/api/users/verify-email",

    sellerRegister: "/api/sellers/register",
    sellerLogin: "/api/sellers/login",
    sellerVerifyEmail: "/api/sellers/verify-email"
  },

  seller: {
    profile: "/api/seller/profile",
  },

  product: {
    list: "/api/products",
  },
} as const;