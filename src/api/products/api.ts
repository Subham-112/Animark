import axios from "axios";
import { Fetch, Post } from "@/utils/apiUtils";
import { endpoints } from "@/utils/endpoints";

export interface UploadSignatureResponse {
  statusCode: number;
  data: {
    timestamp: number;
    signature: string;
    apiKey: string;
    cloudName: string;
    folder: string;
  };
}

export interface CloudinaryUploadResponse {
  secure_url: string;
  public_id: string;
}

export interface CreateProductPayload {
  name: string;
  category: string;
  price: number;
  description?: string;
  tags?: string[];
  metadata?: Record<string, any>;
  thumbnail?: {
    url: string;
    publicId: string;
  };
}

export const getUploadSignature = (folder: string = "products") => {
  return Fetch<UploadSignatureResponse>(endpoints.product.uploadSignature, { folder });
};

export const uploadToCloudinary = async (
  file: File,
  signatureData: UploadSignatureResponse["data"],
  onProgress?: (progress: number) => void
): Promise<CloudinaryUploadResponse> => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("api_key", signatureData.apiKey);
  formData.append("timestamp", String(signatureData.timestamp));
  formData.append("signature", signatureData.signature);
  formData.append("folder", signatureData.folder);

  const url = `https://api.cloudinary.com/v1_1/${signatureData.cloudName}/image/upload`;

  const response = await axios.post<CloudinaryUploadResponse>(url, formData, {
    onUploadProgress: (progressEvent) => {
      if (progressEvent.total) {
        const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
        onProgress?.(percent);
      }
    },
  });

  return response.data;
};

export const createProduct = (data: CreateProductPayload) => {
  return Post<{ success: boolean; message: string; data: any }, CreateProductPayload>(
    endpoints.product.list,
    data,
    20000
  );
};

