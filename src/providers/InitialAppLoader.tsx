"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AnimatePresence } from "framer-motion";
import { COOKIE_NAMES } from "@/utils/cookies-names";
import { getCurrentUser } from "@/api/auth/api";
import { useAuthStore } from "@/store/authStore";
import InitialLoadingScreen from "@/components/common/loader/InitialLoadingScreen";

const TOTAL_LOAD_TIME_MS = 2500; // Total display duration (2.5 seconds)

export default function InitialAppLoader({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const setUser = useAuthStore((state) => state.setUser);

  useEffect(() => {
    const checkInitialAuthAndSeller = async () => {
      const startTime = Date.now();
      let targetRoute: string | null = null;

      try {
        if (typeof document !== "undefined") {
          const hasAuthCookie = document.cookie
            .split("; ")
            .some((item) => item.startsWith(`${COOKIE_NAMES.IS_AUTHENTICATED}=true`));

          if (hasAuthCookie) {
            const res = await getCurrentUser();

            if (res?.success && res?.data) {
              setUser(res.data);
            }

            const userData = res?.data as any;
            const isSellerRole =
              res?.success &&
              (userData?.isSeller === true || res?.data?.isSeller === true) &&
              (userData?.seller || res?.data?.seller);

            if (isSellerRole) {
              targetRoute = "/seller";
            }
          }
        }
      } catch (error) {
        console.error("Initial auth check error:", error);
      } finally {
        const elapsedTime = Date.now() - startTime;
        const remainingTime = Math.max(0, TOTAL_LOAD_TIME_MS - elapsedTime);

        setTimeout(() => {
          if (targetRoute) {
            router.replace(targetRoute);
          }
          setLoading(false);
        }, remainingTime);
      }
    };

    checkInitialAuthAndSeller();
  }, [router, setUser]);

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && <InitialLoadingScreen duration={TOTAL_LOAD_TIME_MS / 1000} key="initial-loader" />}
      </AnimatePresence>
      {children}
    </>
  );
}
