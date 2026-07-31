"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

import { useCurrentUser } from "@/api/auth/hooks/useCurrentUser";
import { useAuthStore } from "@/store/authStore";
import FullScreenLoader from "@/components/common/loader/FullScreenLoader";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { fetchCurrentUser } = useCurrentUser();
  const { user, setUser, setLoading, logout } = useAuthStore();

  useEffect(() => {
    let isActive = true;

    if (pathname?.startsWith("/login") || pathname?.startsWith("/signup")) {
      setLoading(false);
      return;
    }

    if (user) {
      setLoading(false);
      return;
    }

    const init = async () => {
      setLoading(true);

      try {
        const response = await fetchCurrentUser();

        if (isActive && response.success) {
          setUser(response.data);
        } else if (isActive) {
          logout();
        }
      } catch {
        if (isActive) {
          logout();
        }
      } finally {
        if (isActive) {
          setLoading(false);
        }
      }
    };

    init();

    return () => {
      isActive = false;
    };
  }, [pathname, user, fetchCurrentUser, setUser, setLoading, logout]);

  const isLoading = useAuthStore((state) => state.isLoading);

  if (isLoading) {
    return <FullScreenLoader />;
  }

  return children;
}
