"use client";

import { useState } from "react";

import { loginSeller, loginUser } from "../api";
import { LoginRequest } from "../types";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);

  const userLogin = async (payload: LoginRequest) => {
    try {
      setLoading(true);

      return await loginUser(payload);
    } finally {
      setLoading(false);
    }
  };
  
  const sellerLogin = async (payload: LoginRequest) => {
    try {
      setLoading(true)
      // const response = await loginSeller(payload);
      // return response;
      return await loginSeller(payload);
    } finally {
      setLoading(false);
    }
  }

  return { userLogin, loading, sellerLogin };
};
