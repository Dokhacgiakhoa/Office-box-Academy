"use client";

import { useEffect, useState } from "react";
import { CalendarDays, CalendarPlus, Clock, PlaySquare, Users, Link as LinkIcon, Edit3 } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { Reveal } from "@/components/motion/reveal";
import { events, getEventStatus } from "@/data/events";

/** Lớp màu badge theo nền tảng. */
function platformBadgeClass(platform: string): string {
  switch (platform) {
    case "Facebook":
      return "bg-blue-100 text-blue-700";
    case "YouTube":
      return "bg-red-100 text-red-700";
    case "TikTok":
      return "bg-slate-200 text-slate-800";
    case "Group AI91":
      return "bg-primary/10 text-primary";
    case "Office Box":
      return "bg-amber-100 text-amber-700";
    default:
      return "bg-slate-100 text-slate-600";
  }
}

/**
 * Format ngày tháng. Ví dụ: "Thứ 7, 20/06 - 14:00"
 */
function formatEventDate(dateStr: string): string {
  const d = new Date(dateStr);
  const days = ["CN", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];
  const dayName = days[d.getDay()];
  const dateNum = d.getDate().toString().padStart(2, "0");
  const monthNum = (d.getMonth() + 1).toString().padStart(2, "0");
  const hours = d.getHours().toString().padStart(2, "0");
  const mins = d.getMinutes().toString().padStart(2, "0");
  
  return `${dayName}, ${dateNum}/${monthNum} - ${hours}:${mins}`;
}

/** Grender Nút Đăng ký động dựa trên thể loại */
function renderActionIcon(platform: string, eventType: string) {
  if (platform.includes("YouTube")) return <PlaySquare className="w-4 h-4 mr-1.5" />;
  if (platform.includes("Facebook") || platform.includes("Group")) return <Users className="w-4 h-4 mr-1.5" />;
  if (eventType.includes("Khai giảng")) return <Edit3 className="w-4 h-4 mr-1.5" />;
  return <LinkIcon className="w-4 h-4 mr-1.5" />;
}

function getActionLabel(platform: string, eventType: string) {
  if (platform.includes("YouTube")) return "Đăng ký Kênh";
  if (platform.includes("Group")) return "Tham gia Group";
  if (eventType.includes("Khai giảng")) return "Điền Form Đăng Ký";
  return "Tham gia ngay";
}

/**
 * Lịch nội dung dạng Timeline tháng.
 */
export function ContentSchedule() {
  const reduce = useReducedMotion();
  const [mounted, setMounted] = useState(false);
  const [now, setNow] = useState<number>(Date.now());

  // Tránh hydration mismatch do dùng new Date()
  useEffect(() => {
    setMounted(true);
    setNow(Date.now());
    const interval = setInterval(() => setNow(Date.now()), 60000); // Update mỗi phút
    return () => clearInterval(interval);
  }, []);

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.1 } },
  };
  const nodeVariants: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, x: -20 },
        show: { opacity: 1, x: 0, transition: { type: "spring", stiffness: 300, damping: 24 } },
      };

  return (
    <section className="py-16 md:py-24 bg-slate-50 relative overflow-hidden">
      <div className="mx-auto w-full max-w-4xl px-6 sm:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            <CalendarDays strokeWidth={1.5} className="h-4 w-4" />
            <span>Lịch cộng đồng — Tháng 6/2026</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            Dòng thời gian sự kiện AI91
          </h2>
          <p className="text-lg text-muted-foreground">
            Video, livestream và lịch khai giảng — tự cập nhật trạng thái theo thời gian thực. Đăng ký ngay để không bỏ lỡ.
          </p>
        </Reveal>

        {mounted && (
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-100px" }}
            className="relative border-l-2 border-slate-200 ml-4 md:ml-8 pl-8 md:pl-12 pb-8"
          >
            {events.map((item) => {
              const status = getEventStatus(item.date, now);
              const isPast = status === "PAST";
              const isOngoing = status === "ONGOING";
              
              return (
                <motion.div
                  key={item.id}
                  variants={nodeVariants}
                  className={`relative mb-12 last:mb-0 transition-opacity duration-300 ${isPast ? "opacity-60 grayscale-[0.3]" : "opacity-100"}`}
                >
                  {/* Timeline Dot */}
                  <div className={`absolute -left-[41px] md:-left-[57px] top-6 w-4 h-4 rounded-full border-4 border-white shadow-sm
                    ${isPast ? "bg-slate-300" : isOngoing ? "bg-red-500 animate-pulse" : "bg-primary"}`} 
                  />

                  {/* Card Content */}
                  <div className="group bg-white rounded-2xl border-2 border-border/40 overflow-hidden shadow-sm hover:shadow-md hover:border-primary/30 transition-all duration-300">
                    
                    {/* Banner Image */}
                    {item.imageUrl && (
                      <div className="w-full aspect-[21/9] sm:aspect-[4/1] overflow-hidden relative bg-slate-100">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img 
                          src={item.imageUrl} 
                          alt={item.topic} 
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                        
                        {/* Cụm ngày giờ & Status nổi trên ảnh */}
                        <div className="absolute bottom-3 left-4 right-4 flex justify-between items-end">
                          <span className="inline-flex items-center gap-1.5 text-sm font-bold text-white drop-shadow-md">
                            <Clock strokeWidth={2} className="h-4 w-4" />
                            {formatEventDate(item.date)}
                          </span>
                          
                          {/* Status Badge */}
                          {isPast && (
                            <span className="px-2 py-1 rounded bg-slate-800/80 text-white text-xs font-bold uppercase backdrop-blur-sm">
                              Đã diễn ra
                            </span>
                          )}
                          {isOngoing && (
                            <span className="px-2 py-1 rounded bg-red-600 text-white text-xs font-bold uppercase shadow-[0_0_10px_rgba(220,38,38,0.8)] animate-pulse">
                              Đang Live
                            </span>
                          )}
                          {status === "UPCOMING" && (
                            <span className="px-2 py-1 rounded bg-primary text-white text-xs font-bold uppercase shadow-sm">
                              Sắp tới
                            </span>
                          )}
                        </div>
                      </div>
                    )}

                    <div className="p-5 sm:p-6">
                      {/* Thẻ Category */}
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className={`inline-block rounded-lg px-2.5 py-1 text-xs font-semibold ${platformBadgeClass(item.platform)}`}>
                          {item.platform}
                        </span>
                        <span className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600 border border-slate-200/60">
                          {item.eventType}
                        </span>
                      </div>

                      <h3 className="text-xl font-extrabold text-navy tracking-tight mb-6">
                        {item.topic}
                      </h3>

                      {/* Nút bấm CTA */}
                      <div className="flex flex-wrap items-center gap-3">
                        <a
                          href={item.actionLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-bold transition-all
                            ${isPast 
                              ? "bg-slate-100 text-slate-600 hover:bg-slate-200" 
                              : "bg-navy text-white hover:bg-navy/90 hover:-translate-y-0.5 hover:shadow-lg"
                            }`}
                        >
                          {renderActionIcon(item.platform, item.eventType)}
                          {getActionLabel(item.platform, item.eventType)}
                        </a>

                        {/* Chỉ hiện nút Thêm Lịch khi chưa diễn ra */}
                        {!isPast && (
                          <a
                            href={`https://calendar.google.com/calendar/render?action=TEMPLATE&text=${encodeURIComponent(item.topic)}&dates=${item.date.replace(/[-:]/g, '').split('+')[0]}Z/${item.date.replace(/[-:]/g, '').split('+')[0]}Z&details=${encodeURIComponent(item.eventType)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center rounded-lg border-2 border-border/60 bg-transparent px-4 py-2 text-sm font-bold text-slate-600 hover:border-primary/50 hover:bg-primary/5 hover:text-primary transition-colors"
                          >
                            <CalendarPlus strokeWidth={2} className="w-4 h-4 mr-1.5" />
                            Thêm vào Lịch
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        )}

      </div>
    </section>
  );
}
