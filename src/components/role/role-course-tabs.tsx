"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import type { Course } from "@/data/courses";
import { tierMeta, tierOrder, type Tier } from "@/data/tiers";
import { CourseCard } from "@/components/course/course-card";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";

/**
 * Tabs phân loại khóa học của một nghề theo cấp độ:
 * - SPECIALIST: "Ứng dụng ngay"
 * - EXPERT: "Đào sâu & Tự build"
 * Đổi tab -> grid re-render + filter theo tier kèm animation.
 */
export function RoleCourseTabs({ courses }: { courses: Course[] }) {
  // Mặc định chọn tier đầu tiên (theo thứ tự) mà có khóa học.
  const initialTier =
    tierOrder.find((t) => courses.some((c) => c.tier === t)) ?? tierOrder[0];
  const [tier, setTier] = useState<Tier>(initialTier);

  const filtered = courses.filter((course) => course.tier === tier);

  return (
    <div>
      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Phân loại khóa học theo cấp độ"
        className="flex flex-wrap gap-2 border-b border-slate-200 mb-10"
      >
        {tierOrder.map((t) => {
          const isActive = t === tier;
          const count = courses.filter((c) => c.tier === t).length;
          return (
            <button
              key={t}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => setTier(t)}
              className={`relative -mb-px px-4 sm:px-6 py-3 text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 active:scale-95 ${
                isActive ? "text-primary" : "text-slate-500 hover:text-navy"
              }`}
            >
              {/* Gạch chân trượt mượt giữa các tab */}
              {isActive && (
                <motion.span
                  layoutId="role-tab-underline"
                  className="absolute inset-x-0 -bottom-px h-0.5 rounded-lg bg-primary"
                  transition={{ type: "spring", stiffness: 400, damping: 32 }}
                />
              )}
              {tierMeta[t].label}
              <span className="ml-2 hidden sm:inline font-medium text-slate-400">
                · {tierMeta[t].tagline}
              </span>
              <span
                className={`ml-2 inline-flex items-center justify-center text-xs rounded-lg px-2 py-0.5 ${
                  isActive
                    ? "bg-primary/10 text-primary"
                    : "bg-slate-100 text-slate-500"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Mô tả ngắn cấp độ đang chọn */}
      <p className="text-slate-600 mb-8 max-w-2xl">{tierMeta[tier].description}</p>

      {/* Grid khóa học theo tier — stagger replay khi đổi tab */}
      {filtered.length > 0 ? (
        <AnimatePresence mode="wait">
          <RevealGroup
            key={tier}
            className="grid gap-6 lg:grid-cols-2"
          >
            {filtered.map((course) => (
              <RevealItem key={course.id}>
                <CourseCard course={course} />
              </RevealItem>
            ))}
          </RevealGroup>
        </AnimatePresence>
      ) : (
        <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center text-slate-500">
          Chưa có khóa học <strong>{tierMeta[tier].label}</strong> cho ngành này.
          Vui lòng quay lại sau nhé!
        </div>
      )}
    </div>
  );
}
