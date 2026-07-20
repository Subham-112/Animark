"use client";

import { useState } from "react";
import { registerSeller, registerUser } from "../api";
import { RegisterRequest } from "../types";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);

  const register = async (payload: RegisterRequest) => {
    try {
      setLoading(true);

      const response = await registerUser(payload);
      return response;
    } finally {
      setLoading(false);
    }
  };

  const sellerRegister = async (payload: RegisterRequest) => {
    try {
      setLoading(true);
      const response = await registerSeller(payload);
      return response;
    } finally {
      setLoading(false);
    }
  };

  return { register, loading, sellerRegister };
};
