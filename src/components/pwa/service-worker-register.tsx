"use client";

import { useEffect } from "react";

/**
 * Đăng ký Service Worker thủ công (tương thích Turbopack).
 * Chỉ chạy ở production để tránh cache gây phiền khi dev.
 */
export function ServiceWorkerRegister() {
  useEffect(() => {
    if (process.env.NODE_ENV !== "production") return;
    if (typeof window === "undefined") return;
    if (!("serviceWorker" in navigator)) return;

    const register = async () => {
      try {
        await navigator.serviceWorker.register("/sw.js", { scope: "/" });
      } catch (error) {
        // Không để lỗi đăng ký SW làm ảnh hưởng tới trải nghiệm.
        console.error("Service Worker registration failed:", error);
      }
    };

    // Đăng ký sau khi trang đã load để không cản trở first paint.
    if (document.readyState === "complete") {
      void register();
    } else {
      window.addEventListener("load", register, { once: true });
      return () => window.removeEventListener("load", register);
    }
  }, []);

  return null;
}
