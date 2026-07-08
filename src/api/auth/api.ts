import { Post } from "@/utils/apiUtils";
import { endpoints } from "@/utils/endpoints";
import {
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  VerifyEmailRequest,
  VerifyEmailResponse,
} from "./types";

export const registerUser = (data: RegisterRequest) => {
  return Post<RegisterResponse, RegisterRequest>(
    endpoints.auth.userRegister,
    data,
  );
};

export const verifyEmail = (data: VerifyEmailRequest) => {
  return Post<VerifyEmailResponse, VerifyEmailRequest>(
    endpoints.auth.userVerifyEmail,
    data,
  );
};

export const loginUser = (data: LoginRequest) => {
  return Post<LoginResponse, LoginRequest>(
    endpoints.auth.userLogin,
    data,
  );
};
