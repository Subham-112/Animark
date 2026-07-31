"use client";

import { useState } from "react";
import { logoutUser } from "../api";

export const useLogout = () => {
  const [loading, setLoading] = useState(false);

  const userLogout = async () => {
    try {
      setLoading(true);
      return await logoutUser();
    } finally {
      setLoading(false);
    }
  };

  return { userLogout, loading };
};
