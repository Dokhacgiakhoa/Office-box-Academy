"use client";

import Link from "next/link";
import { PlayCircle, ArrowRight, BookOpen } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import type { Course } from "@/data/courses";
import { tools, type AiTool } from "@/data/tools";

/** motion-wrapped Next Link để áp dụng hover lift / tap feedback chuẩn Framer Motion. */
const MotionLink = motion.create(Link);

/** Tra cứu nhanh Tool theo id (lấy tên + logo cho Badge công cụ). */
const toolById = new Map<string, AiTool>(tools.map((t) => [t.id, t]));

/** Đếm tổng số kỹ năng (bài học) trong khóa. */
function countLessons(course: Course): number {
  return course.skills?.length ?? 0;
}

/** Chip công cụ AI: logo nhỏ + tên (ẩn logo nếu ảnh lỗi, vẫn giữ tên). */
function ToolChip({ tool }: { tool: AiTool }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-lg bg-primary/10 px-2 py-0.5 text-xs font-semibold text-primary">
      {tool.logoUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={tool.logoUrl}
          alt={tool.name}
          className="h-3 w-3 object-contain"
          onError={(e) => {
            e.currentTarget.style.display = "none";
          }}
        />
      )}
      {tool.name}
    </span>
  );
}

/**
 * Thẻ khóa học GỌN (ngang): ảnh vuông bên trái + nội dung bên phải.
 * Tối ưu cho lưới 2 cột, chiều cao thấp. Hover Lift Spring + whileTap (PWA),
 * tôn trọng reduced-motion.
 */
export function CourseCard({ course }: { course: Course }) {
  const reduceMotion = useReducedMotion();
  const lessonCount = countLessons(course);

  const toolChips = (course.targetToolIds ?? [])
    .map((id) => toolById.get(id))
    .filter((t): t is AiTool => Boolean(t))
    .slice(0, 2);

  return (
    <MotionLink
      href={`/course/${course.id}`}
      initial={false}
      whileHover={reduceMotion ? undefined : { y: -4 }}
      whileTap={reduceMotion ? undefined : { scale: 0.98 }}
      transition={{ type: "spring", stiffness: 400, damping: 24, mass: 0.5 }}
      className="group flex items-stretch overflow-hidden rounded-xl border-2 border-border/40 bg-white shadow-[0_2px_0_0_rgba(15,23,42,0.06)] hover:border-primary/50 hover:shadow-[0_14px_36px_-14px_rgba(15,23,42,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
    >
      {/* Ảnh vuông bên trái */}
      <div className="relative aspect-square w-28 shrink-0 overflow-hidden bg-slate-100 sm:w-36 md:w-40">
        {course.thumbnailUrl && course.thumbnailUrl !== "/placeholder-course.jpg" ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={course.thumbnailUrl}
            alt={course.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/15 via-slate-100 to-accent">
            <PlayCircle strokeWidth={1.5} className="h-10 w-10 text-primary/70" />
          </div>
        )}
      </div>

      {/* Nội dung bên phải */}
      <div className="flex min-w-0 flex-1 flex-col p-4 sm:p-5">
        <h3 className="mb-1.5 text-base font-extrabold leading-snug tracking-tight text-navy line-clamp-2 sm:text-lg">
          {course.title}
        </h3>

        {(course.totalSessions || lessonCount > 0) && (
          <p className="mb-2 inline-flex items-center gap-1.5 text-xs font-semibold text-slate-500">
            <BookOpen strokeWidth={1.5} className="h-3.5 w-3.5" />
            {course.totalSessions ? `${course.totalSessions} buổi học` : `${lessonCount} bài học`}
          </p>
        )}

        <p className="mb-3 hidden text-sm leading-relaxed text-muted-foreground line-clamp-2 sm:block">
          {course.description}
        </p>

        {/* Footer: badge công cụ + CTA */}
        <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
          {toolChips.length > 0 && (
            <div className="flex flex-wrap gap-1.5">
              {toolChips.map((tool) => (
                <ToolChip key={tool.id} tool={tool} />
              ))}
            </div>
          )}
          <span className="inline-flex items-center text-sm font-bold text-primary transition-all group-hover:gap-1">
            {course.tier === "EXPERT" ? "Xem" : "Vào Học"}
            <ArrowRight strokeWidth={1.5} className="ml-1 h-4 w-4" />
          </span>
        </div>
      </div>
    </MotionLink>
  );
}
