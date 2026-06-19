"use client";

import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { courses } from "@/data/courses";
import { tierMeta, tierOrder, type Tier } from "@/data/tiers";
import { CourseCard } from "@/components/course/course-card";

/**
 * CourseShowcaseSection: trình diễn 12 khóa học chia theo 3 nhánh (Tabs).
 * - Tabs Office / Marketing / VibeCoding lọc lưới khóa học theo `tier`.
 * - Chuyển tab: AnimatePresence + stagger fade-up (Spring) cho từng thẻ.
 * - Tôn trọng `prefers-reduced-motion`: chỉ fade, bỏ trượt.
 */
export function CourseShowcaseSection() {
  const reduceMotion = useReducedMotion();
  const [tier, setTier] = useState<Tier>("OFFICE");
  const sectionRef = useRef<HTMLElement>(null);

  // Đồng bộ với hash trên URL (#office / #marketing / #expert) — dùng cho nút
  // "Khám phá ngay" ở khối Lộ trình: chọn đúng tab + cuộn xuống mượt.
  useEffect(() => {
    const applyHash = () => {
      const h = window.location.hash.replace("#", "").toUpperCase();
      if ((tierOrder as string[]).includes(h)) {
        setTier(h as Tier);
        sectionRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    applyHash();
    window.addEventListener("hashchange", applyHash);
    return () => window.removeEventListener("hashchange", applyHash);
  }, []);

  const filteredCourses = courses.filter((course) => course.tier === tier);
  const meta = tierMeta[tier];

  // Stagger container: từng thẻ con xuất hiện lệch nhau tạo nhịp điệu.
  const container = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduceMotion ? 0 : 0.07 },
    },
  };

  const item = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring" as const, stiffness: 300, damping: 28, mass: 0.6 },
        },
      };

  return (
    <section ref={sectionRef} id="courses" className="scroll-mt-28 border-t border-border/40 bg-slate-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="mx-auto mb-8 max-w-2xl text-center">
          <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
            Bạn muốn học theo hướng nào?
          </h2>
          <p className="text-lg font-normal text-muted-foreground">
            Chọn hướng đi phù hợp để xem lộ trình khóa học được thiết kế riêng.
          </p>
        </div>

        {/* Tabs 3 nhánh */}
        <div className="mb-4 flex justify-center px-4 sm:px-0">
          <div
            role="tablist"
            aria-label="Chọn hướng đi"
            className="relative flex w-full flex-col sm:w-auto sm:flex-row gap-1 sm:gap-0 rounded-[1.5rem] sm:rounded-lg border border-border/40 bg-white p-1.5 shadow-sm"
          >
            {tierOrder.map((t) => {
              const isActive = t === tier;
              return (
                <button
                  key={t}
                  type="button"
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setTier(t)}
                  className={`relative flex flex-col items-center justify-center rounded-xl sm:rounded-lg px-4 py-3 transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 active:scale-95 sm:px-8 ${
                    isActive ? "text-white" : "text-slate-600 hover:text-navy"
                  }`}
                >
                  {/* Pill nền trượt mượt giữa các tab (shared layout) */}
                  {isActive && (
                    <motion.span
                      layoutId="tier-pill"
                      className="absolute inset-0 rounded-xl sm:rounded-lg bg-primary shadow-sm"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  <span className="relative z-10 flex flex-col items-center gap-0.5">
                    <span className="text-base font-bold leading-tight sm:text-lg">
                      {tierMeta[t].label}
                    </span>
                    <span
                      className={`text-xs font-medium sm:text-sm ${
                        isActive ? "text-white/80" : "text-slate-500"
                      }`}
                    >
                      {tierMeta[t].tagline}
                    </span>
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        <p className="mx-auto mb-10 max-w-xl text-center font-normal text-muted-foreground">
          {meta?.description}
        </p>

        {/* Lưới khóa học — đổi key theo tier để replay stagger khi chuyển tab */}
        <AnimatePresence mode="wait">
          {filteredCourses.length > 0 ? (
            <motion.div
              key={tier}
              variants={container}
              initial="hidden"
              animate="show"
              exit={{ opacity: 0 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto"
            >
              {filteredCourses.map((course) => (
                <motion.div key={course.id} variants={item}>
                  <CourseCard course={course} />
                </motion.div>
              ))}
            </motion.div>
          ) : (
            <p key="empty" className="text-center text-muted-foreground">
              Khóa học cho hướng đi này đang được cập nhật.
            </p>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
