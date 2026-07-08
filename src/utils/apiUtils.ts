import axios, { AxiosRequestConfig, AxiosResponse } from "axios";
import { TokenStorage } from "./localstorage";

// Define API base URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Default timeout in milliseconds
  withCredentials: true,
});

// Axios request interceptor for Authorization
api.interceptors.request.use(
  (config) => {
    const token =
      typeof window !== "undefined" ? TokenStorage.getAuthToken() : null;

    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => Promise.reject(error),
);

let isRedirecting = false;

api.interceptors.response.use(
  (response) => response,

  async (error) => {
    const status = error.response?.status;
    if (status === 401) {
      if (typeof window !== "undefined" && !isRedirecting) {
        isRedirecting = true;

        setTimeout(() => {
          window.location.href = "/login";
        }, 800);
      }
    }

    return Promise.reject(error);
  },
);

// Helper function to make Axios requests
export const request = async <T>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<T>> => {
  const controller = new AbortController();
  const timeout = config.timeout || 10000;
  const timeoutId = setTimeout(() => controller.abort(), timeout);

  try {
    // Handle multipart form data
    if (config.data instanceof FormData) {
      config.headers = {
        ...config.headers,
        "Content-Type": "multipart/form-data",
      };
    }

    const response = await api.request({
      ...config,
      signal: controller.signal,
    });

    clearTimeout(timeoutId);
    return response;
  } catch (error: any) {
    clearTimeout(timeoutId);

    // Handle AbortError (timeout)
    if (error.name === "AbortError") {
      throw new Error(`⏱️ Request timed out after ${timeout / 1000}s`);
    }

    // Handle Axios error
    if (error.response) {
      const responseData = error.response.data;

      const message =
        responseData?.message ??
        responseData?.error?.message ??
        responseData?.error ??
        "Something went wrong.";

      throw new Error(message);
    }

    // Handle no response (network issues, CORS)
    if (error.request) {
      throw new Error("📡 No response from server. Please check your network.");
    }

    // Fallback for unknown error
    throw new Error(`⚠️ Unexpected error: ${error.message || "Unknown error"}`);
  }
};

// Fetch utility function
export const Fetch = async <T>(
  url: string,
  params?: Record<string, unknown>,
  timeout?: number,
): Promise<T> => {
  const response = await request<T>({
    method: "GET",
    url,
    params,
    timeout,
  });
  return response.data;
};

// Post utility function
export const Post = async <TResponse, TRequest>(
  url: string,
  data: TRequest | FormData,
  timeout?: number,
): Promise<TResponse> => {
  const response = await request<TResponse>({
    method: "POST",
    url,
    data,
    timeout,
  });
  return response.data;
};

// Put utility function
export const Put = async <T>(
  url: string,
  data: Record<string, unknown> | FormData,
  timeout?: number,
): Promise<T> => {
  const response = await request<T>({
    method: "PUT",
    url,
    data,
    timeout,
  });
  return response.data;
};

// Delete utility function
export const Delete = async <T>(
  url: string,
  data?: Record<string, unknown>,
  params?: Record<string, unknown>,
  timeout?: number,
): Promise<T> => {
  const response = await request<T>({
    method: "DELETE",
    url,
    data,
    params,
    timeout,
  });
  return response.data;
};

// Patch utility function
export const Patch = async <T>(
  url: string,
  data: Record<string, unknown> | FormData,
  timeout?: number,
): Promise<T> => {
  const response = await request<T>({
    method: "PATCH",
    url,
    data,
    timeout,
  });
  return response.data;
};
