"use client";

import { useState } from "react";
import { createProduct, CreateProductPayload } from "../api";

export const useCreateProduct = () => {
  const [loading, setLoading] = useState(false);

  const addProduct = async (payload: CreateProductPayload) => {
    try {
      setLoading(true);
      return await createProduct(payload);
    } finally {
      setLoading(false);
    }
  };

  return { addProduct, loading };
};
