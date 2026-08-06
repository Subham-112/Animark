export const endpoints = {
  auth: {
    userRegister: "/api/users/register",
    userLogin: "/api/users/login",
    userVerifyEmail: "/api/users/verify-email",

    sellerRegister: "/api/sellers/register",
    sellerLogin: "/api/sellers/login",
    sellerVerifyEmail: "/api/sellers/verify-email",
    userLogout: "/api/users/logout",
  },

  seller: {
    currentUser: "/api/users/get-current",
    profile: "/api/sellers/profile",
  },

  user: {
    currentUser: "/api/users/get-current",
    profile: "/api/sellers/profile",
  },

  product: {
    list: "/api/products",
    uploadSignature: "/api/products/upload-signature",
  },
} as const;