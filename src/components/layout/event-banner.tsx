"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, CalendarClock } from "lucide-react";
import { getFeaturedEvent, getEventStatus } from "@/data/events";

/** Khoảng cách thời gian dạng người đọc: "sau 30 phút", "sau 2 giờ", "sau 3 ngày". */
function relativeTime(dateStr: string, nowMs: number): string {
  const diffMs = new Date(dateStr).getTime() - nowMs;
  if (diffMs <= 0) return "đang diễn ra";
  const mins = Math.round(diffMs / 60000);
  if (mins < 60) return `sau ${mins} phút`;
  const hours = Math.round(mins / 60);
  if (hours < 24) return `sau ${hours} giờ`;
  const days = Math.round(hours / 24);
  return `sau ${days} ngày`;
}

/**
 * Thanh sự kiện dưới menu — cập nhật theo THỜI GIAN THỰC từ lịch sự kiện (events.ts).
 * Tự chọn sự kiện đang diễn ra (ONGOING) hoặc sắp tới gần nhất; tự ẩn nếu không có.
 * Tính `now` sau khi mount + cập nhật mỗi phút (tránh lệch hydration).
 */
export function EventBanner() {
  const [now, setNow] = useState<number | null>(null);

  useEffect(() => {
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 60000);
    return () => clearInterval(interval);
  }, []);

  if (now === null) return null;

  const event = getFeaturedEvent(now);
  if (!event) return null;

  const status = getEventStatus(event.date, now);
  const isLive = status === "ONGOING";

  return (
    <div className="sticky top-16 z-40 border-b border-white/5 bg-navy text-white">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center justify-center gap-2 px-6 py-2.5 text-sm sm:flex-row sm:gap-3 sm:px-8 lg:px-12">
        {/* Trạng thái real-time */}
        <span
          className={`inline-flex shrink-0 items-center gap-2 rounded-lg px-3 py-1 text-xs font-bold ${
            isLive ? "bg-red-500/15 text-red-300" : "bg-white/10 text-white/90"
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span
              className={`absolute inline-flex h-full w-full rounded-full opacity-75 ${
                isLive ? "animate-ping bg-red-400" : "bg-primary"
              }`}
            />
            <span className={`relative inline-flex h-2 w-2 rounded-full ${isLive ? "bg-red-500" : "bg-primary"}`} />
          </span>
          {isLive ? "Đang diễn ra" : "Sắp diễn ra"}
        </span>

        {/* Nội dung sự kiện + thời gian tương đối */}
        <span className="flex items-center gap-2 text-center font-medium">
          <CalendarClock strokeWidth={1.5} className="hidden h-4 w-4 shrink-0 text-primary sm:inline" />
          <span className="line-clamp-1">{event.topic}</span>
          {!isLive && (
            <span className="hidden shrink-0 font-semibold text-slate-300 md:inline">· {relativeTime(event.date, now)}</span>
          )}
        </span>

        {/* CTA */}
        <Link
          href={event.actionLink || "#"}
          target={event.actionLink?.startsWith("http") ? "_blank" : undefined}
          rel="noopener noreferrer"
          className="inline-flex shrink-0 items-center gap-1 font-bold text-primary underline decoration-primary/50 underline-offset-4 transition-colors hover:text-primary/80"
        >
          {isLive ? "Vào xem ngay" : "Đăng ký tham gia"}
          <ArrowRight strokeWidth={1.5} className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  );
}
