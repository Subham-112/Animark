"use client";
import { useState } from "react";
import Link from "next/link";
import { Mail, User } from "lucide-react";

import { VerifyEmailModal } from "../verify-email/VerifyEmailModal";
import { AuthInput } from "./AuthInput";
import { PasswordInput } from "./PasswordInput";
import { Divider } from "./Divider";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { registerSchema, RegisterFormData } from "@/api/auth/schema";
import { useRegister } from "@/api/auth/hooks/useRegister";
import { toast } from "@/components/common/toast/toast";

export const SignupForm = () => {
  const [showVerifyModal, setShowVerifyModal] = useState(false);
  const [registeredEmail, setRegisteredEmail] = useState("");
  const [devOtp, setDevOtp] = useState("");

  const { register, loading } = useRegister();

  const {
    register: formRegister,
    handleSubmit,
    getValues,
    formState: { errors },
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

  const onSubmit = async (data: RegisterFormData) => {
    try {
      const response = await register({
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit, onError)} className="space-y-6">
        <div className="flex gap-5">
          <AuthInput
            label="First Name"
            icon={<User size={20} />}
            placeholder="Enter your name"
            error={errors.firstName}
            {...formRegister("firstName")}
          />
          <AuthInput
            label="Last Name"
            icon={<User size={20} />}
            placeholder="Enter your name"
            error={errors.lastName}
            {...formRegister("lastName")}
          />
        </div>
        <AuthInput
          label="Email Address"
          type="email"
          placeholder="Enter your email"
          icon={<Mail size={20} />}
          error={errors.email}
          {...formRegister("email")}
        />

        <PasswordInput
          label="Password"
          placeholder="Password"
          error={errors.password}
          {...formRegister("password")}
        />
        <PasswordInput
          label="Confirm Password"
          placeholder="Confirm password"
          error={errors.confirmPassword}
          {...formRegister("confirmPassword")}
        />

        <label className="flex items-start gap-3">
          <input
            type="checkbox"
            {...formRegister("terms")}
            className="mt-1 h-4 w-4 rounded accent-violet-500"
          />

          <span className="text-sm leading-6 text-slate-400">
            I agree to the{" "}
            <Link
              href="/terms"
              className="text-violet-300 hover:text-violet-200"
            >
              Terms & Conditions
            </Link>{" "}
            and{" "}
            <Link
              href="/privacy"
              className="text-violet-300 hover:text-violet-200"
            >
              Privacy Policy
            </Link>
            .
          </span>
        </label>

        {errors.terms && (
          <p className="text-sm text-red-400">{errors.terms.message}</p>
        )}

        <button
          type="submit"
          className="w-full rounded-xl bg-violet-500 py-3.5 font-semibold text-white transition-all duration-300 hover:bg-violet-400 hover:shadow-[0_15px_40px_rgba(124,58,237,.35)] cursor-pointer"
        >
          {loading ? "Creating Account..." : "Create Account"}
        </button>

        <Divider />

        <button
          type="button"
          className="w-full rounded-xl border border-white/10 bg-white/[0.03] py-3.5 font-medium text-white transition-all duration-300 hover:border-violet-400/20 hover:bg-violet-500/10"
          disabled={loading}
        >
          Continue with Google
        </button>

        <p className="text-center text-slate-400">
          Already have an account?{" "}
          <Link
            href="/login"
            className="font-medium text-violet-300 hover:text-violet-200"
          >
            Sign In
          </Link>
        </p>
      </form>

      <VerifyEmailModal
        open={showVerifyModal}
        email={registeredEmail}
        devOtp={devOtp}
        onClose={() => setShowVerifyModal(false)}
        onVerified={() => setShowVerifyModal(false)}
      />
    </>
  );
};
