"use client";

import { ReactNode } from "react";
import { AuthIllustration } from "./AuthIllustration";

interface AuthLayoutProps {
  title: ReactNode;
  subtitle: string;
  children: ReactNode;
  isLogin?: boolean
}

export const AuthLayout = ({ title, subtitle, children, isLogin }: AuthLayoutProps) => {
  return (
    <section className={`min-h-screen w-full bg-[#04091B] ${!isLogin ? 'py-20' : ''}`}>
      <div className="mx-auto flex min-h-screen w-full items-center px-6 lg:px-8" style={{ maxWidth: "75%" }}>
        <div className="grid w-full items-center grid-cols-1 md:grid-cols-2" style={{gap: 50}}>
          <AuthIllustration />

          <div className="w-full">
            <h1 className="text-xl md:text-2xl text-center font-black text-white lg:text-4xl">
              {title}
            </h1>

            <p className="mt-2 text-lg text-center leading-7 text-slate-400">{subtitle}</p>

            <div className="mt-10">{children}</div>
          </div>
        </div>
      </div>
    </section>
  );
};
