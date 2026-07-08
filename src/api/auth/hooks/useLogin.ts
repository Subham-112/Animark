"use client";

import { useState } from "react";

import { loginUser } from "../api";
import { LoginRequest } from "../types";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const login = async (payload: LoginRequest) => {
    try {
      setLoading(true);

      return await loginUser(payload);
    } finally {
      setLoading(false);
    }
  };

  return { login, loading };
};
