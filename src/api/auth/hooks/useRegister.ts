"use client";

import { useState } from "react";
import { registerUser } from "../api";
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

  return { register, loading };
};
