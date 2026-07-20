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

export const userVerifyEmail = (data: VerifyEmailRequest) => {
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

export const registerSeller = (data: RegisterRequest) => {
  return Post<RegisterResponse, RegisterRequest>(
    endpoints.auth.sellerRegister,
    data
  )
}

export const loginSeller = (data: LoginRequest) => {
  return Post<LoginResponse, LoginRequest>(
    endpoints.auth.sellerLogin,
    data,
  );
};

export const sellerVerifyEmail = (data: VerifyEmailRequest) => {
  return Post<VerifyEmailResponse, VerifyEmailRequest>(
    endpoints.auth.sellerVerifyEmail,
    data,
  );
};
