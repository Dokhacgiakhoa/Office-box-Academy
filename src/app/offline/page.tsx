import type { Metadata } from "next";
import Link from "next/link";
import { WifiOff, RotateCcw } from "lucide-react";

export const metadata: Metadata = {
  title: "Đang ngoại tuyến",
  description: "Bạn đang mất kết nối mạng.",
};

/**
 * Trang dự phòng khi người dùng offline (Service Worker fallback).
 */
export default function OfflinePage() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-slate-50 px-6 text-center">
      <div className="flex h-20 w-20 items-center justify-center rounded-xl bg-navy text-white mb-6 shadow-xl">
        <WifiOff className="h-9 w-9" />
      </div>
      <h1 className="text-2xl md:text-3xl font-extrabold text-navy mb-3 tracking-tight">
        Bạn đang ngoại tuyến
      </h1>
      <p className="text-slate-600 max-w-md mb-8 leading-relaxed">
        Có vẻ như kết nối mạng đã bị gián đoạn. Vui lòng kiểm tra lại đường
        truyền và thử tải lại trang.
      </p>
      <Link
        href="/"
        className="h-12 px-8 rounded-lg bg-primary text-white font-bold text-base inline-flex items-center justify-center gap-2 hover:bg-primary/90 active:scale-95 transition-all duration-200"
      >
        <RotateCcw className="h-5 w-5" /> Thử lại Trang chủ
      </Link>
    </main>
  );
}
