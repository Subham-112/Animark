"use client";

import { useState } from "react";

import SellerAuthHeader from "./SellerAuthHeader";
import SellerLoginForm from "./SellerLoginForm";
import SellerSignupForm from "./SellerSignupForm";
import SellerAuthFooter from "./SellerAuthFooter";
import { VerifyEmailModal } from "../auth/verify-email/VerifyEmailModal";
import { useRegister } from "@/api/auth/hooks/useRegister";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/api/auth/schema";
import { toast } from "@/components/common/toast/toast";
import { useLogin } from "@/api/auth/hooks/useLogin";
import { LoginFormData, loginSchema } from "@/api/auth/schema";
import { useRouter } from "next/navigation";

export default function SellerAuthCard() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [devOtp, setDevOtp] = useState("");

  const { sellerRegister, loading } = useRegister();
  const { sellerLogin } = useLogin();

  const {
    register: formRegister,
    handleSubmit: handleSignupSubmit,
    getValues,
    formState: { errors: signupErrors },
  } = useForm<RegisterFormData>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
      terms: false,
    },
  });

  const onSignupSubmit = async (data: RegisterFormData) => {
    try {
      const response = await sellerRegister({
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        password: data.password,
      });

      toast.success(response.message);
      setRegisteredEmail(response.data.email);

      if (
        process.env.NEXT_PUBLIC_APP_ENV === "development" &&
        response.data.otp
      ) {
        setDevOtp(response.data.otp);
      }

      setShowVerifyModal(true);
    } catch (error) {
      toast.dismissAll();
      toast.error((error as Error).message, "", 50000);
    }
  };

  const onError = (errors: any) => {
    console.log("Validation Errors", errors);
    console.log("All values", getValues());
  };

  const {
    register: formLogin,
    handleSubmit: handleLoginSubmit,
    formState: { errors: LoginError },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onLoginSubmit = async (data: LoginFormData) => {
    try {
      const response = await sellerLogin({
        email: data.email,
        password: data.password,
      });

      toast.success(response.message);
      router.replace("/seller");
    } catch (error) {
      toast.error((error as Error).message);
    }
  };

  return (
    <section className="flex h-full items-center">
      <div className="w-full rounded-[24px] border border-white/10 bg-[#0B1224] p-6 shadow-2xl">
        <SellerAuthHeader isLogin={isLogin} />

        {isLogin ? (
          <SellerLoginForm
            onSubmit={handleLoginSubmit(onLoginSubmit, onError)}
            errors={LoginError}
            register={formLogin}
          />
        ) : (
          <SellerSignupForm
            onSubmit={handleSignupSubmit(onSignupSubmit, onError)}
            errors={signupErrors}
            formRegister={formRegister}
          />
        )}
        <SellerAuthFooter
          isLogin={isLogin}
          onToggle={() => setIsLogin((prev) => !prev)}
        />

        {/*
          TODO:
          Import and render your existing OTP verification modal here.

          Example:

          <OtpVerificationModal
            open={openOtpModal}
            onClose={() => setOpenOtpModal(false)}
            onSuccess={() => router.push("/seller")}
          />
        */}

        <VerifyEmailModal
          open={showVerifyModal}
          email={registeredEmail}
          devOtp={devOtp}
          onClose={() => setShowVerifyModal(false)}
          onVerified={() => {
            setShowVerifyModal(false);
            setIsLogin(true);
          }}
          isSellerVerify={showVerifyModal}
        />
      </div>
    </section>
  );
}
