export interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
}

export interface RegisterResponse {
  status: boolean;
  message: string;
  data: {
    email: string;
    otp?: string;
  };
}

export interface VerifyEmailRequest {
  email: string;
  otp: string;
}

export interface VerifyEmailResponse {
  status: boolean;
  message: string;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  status: boolean;
  message: string;
  data: {
    token: string;
    user: {
      id: string;
      firstName: string;
      lastName: string;
      email: string;
      isVerified: boolean;
    };
  };
}
