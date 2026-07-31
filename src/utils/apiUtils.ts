import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

// Define API base URL
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const api = axios.create({
  baseURL: BASE_URL,
  timeout: 10000, // Default 10s timeout managed natively by Axios
  withCredentials: true,
});

// Axios request interceptor
api.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

let isRedirecting = false;

const publicPaths = [
  "/login",
  "/signup",
  "/register",
  "/forgot-password",
  "/reset-password",
  "/privacy-policy",
  "/terms-and-conditions",
  "/contact",
];

const shouldSkipRedirect = () => {
  if (typeof window === "undefined") return true;
  const pathname = window.location.pathname;
  return publicPaths.includes(pathname) || pathname.startsWith("/api/");
};

// Response Interceptor for Global 401 Handling
api.interceptors.response.use(
  (response) => response,
  (error: AxiosError) => {
    const status = error.response?.status;

    if (status === 401 && !shouldSkipRedirect()) {
      if (typeof window !== "undefined" && !isRedirecting) {
        isRedirecting = true;
        
        // Clear auth indicator if needed
        document.cookie = "is_authenticated=; Max-Age=0; path=/;";

        window.location.href = "/login";
      }
    }

    return Promise.reject(error);
  }
);

/**
  * Central Request Handler
  */
export const request = async <T>(
  config: AxiosRequestConfig
): Promise<AxiosResponse<T>> => {
  try {
    // Note: Do NOT set "Content-Type" manually for FormData. 
    // Axios handles multipart/form-data boundaries automatically.

    return await api.request<T>({
      withCredentials: true,
      ...config,
    });
  } catch (error: any) {
    // 1. Handle Axios Timeout
    if (error.code === "ECONNABORTED" || error.name === "CanceledError") {
      throw new Error(`⏱️ Request timed out after ${(config.timeout || 10000) / 1000}s`);
    }

    // 2. Handle API Response Error (4xx, 5xx)
    if (error.response) {
      const responseData = error.response.data;

      const message =
        responseData?.message ??
        responseData?.error?.message ??
        responseData?.error ??
        "Something went wrong.";

      throw new Error(message);
    }

    // 3. Handle Network Errors / CORS Issues
    if (error.request) {
      throw new Error("📡 No response from server. Please check your network connection.");
    }

    // 4. Fallback Error
    throw new Error(`⚠️ Unexpected error: ${error.message || "Unknown error"}`);
  }
};

/* --- HTTP Method Helpers --- */

export const Fetch = async <T>(
  url: string,
  params?: Record<string, unknown>,
  timeout?: number
): Promise<T> => {
  const response = await request<T>({ method: "GET", url, params, timeout });
  return response.data;
};

export const Post = async <TResponse, TRequest = unknown>(
  url: string,
  data?: TRequest | FormData,
  timeout?: number
): Promise<TResponse> => {
  const response = await request<TResponse>({ method: "POST", url, data, timeout });
  return response.data;
};

export const Put = async <TResponse, TRequest = unknown>(
  url: string,
  data?: TRequest | FormData,
  timeout?: number
): Promise<TResponse> => {
  const response = await request<TResponse>({ method: "PUT", url, data, timeout });
  return response.data;
};

export const Patch = async <TResponse, TRequest = unknown>(
  url: string,
  data?: TRequest | FormData,
  timeout?: number
): Promise<TResponse> => {
  const response = await request<TResponse>({ method: "PATCH", url, data, timeout });
  return response.data;
};

export const Delete = async <T>(
  url: string,
  data?: Record<string, unknown>,
  params?: Record<string, unknown>,
  timeout?: number
): Promise<T> => {
  const response = await request<T>({ method: "DELETE", url, data, params, timeout });
  return response.data;
};