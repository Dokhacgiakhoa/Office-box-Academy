import Link from "next/link";
import { ArrowLeft, SearchX } from "lucide-react";

interface NotFoundStateProps {
  title: string;
  message: string;
  backHref?: string;
  backLabel?: string;
}

/**
 * Khối giao diện NotFound thân thiện, tái sử dụng cho các trang chi tiết.
 * Đặt bên trong layout có sẵn Header/Footer.
 */
export function NotFoundState({
  title,
  message,
  backHref = "/",
  backLabel = "Về trang chủ",
}: NotFoundStateProps) {
  return (
    <main className="flex-1 flex items-center justify-center px-4 py-24">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 bg-primary/10 rounded-xl flex items-center justify-center text-primary mx-auto mb-6">
          <SearchX className="h-10 w-10" />
        </div>
        <h1 className="text-2xl md:text-3xl font-extrabold text-navy mb-3">
          {title}
        </h1>
        <p className="text-slate-600 mb-8">{message}</p>
        <Link
          href={backHref}
          className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-lg bg-primary text-white font-bold hover:bg-primary/90 transition-all active:scale-95 shadow-sm"
        >
          <ArrowLeft className="h-5 w-5" /> {backLabel}
        </Link>
      </div>
    </main>
  );
}
