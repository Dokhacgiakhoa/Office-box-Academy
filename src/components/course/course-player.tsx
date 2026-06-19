"use client";

import { useMemo, useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import {
  PlayCircle,
  Clock,
  CheckCircle2,
  BookOpen,
  Lightbulb,
  Wrench,
  ArrowLeft,
  ArrowRight,
  GraduationCap,
  Layers,
} from "lucide-react";
import type { Course, Skill } from "@/data/courses";
import { tools } from "@/data/tools";
import { tierMeta } from "@/data/tiers";
import { ToolLogo } from "@/components/home/tool-logo";
import ReactMarkdown from "react-markdown";

/** Phân loại bài học để gắn nhãn màu (suy ra từ field type hoặc tiêu đề). */
type LessonKey = "theory" | "practice" | "example" | "guide";

const LESSON_META: Record<
  LessonKey,
  { label: string; chip: string; dot: string; Icon: typeof BookOpen }
> = {
  theory: {
    label: "Lý thuyết",
    chip: "bg-sky-50 text-sky-700 ring-1 ring-sky-200",
    dot: "bg-sky-500",
    Icon: BookOpen,
  },
  practice: {
    label: "Thực hành",
    chip: "bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200",
    dot: "bg-emerald-500",
    Icon: Wrench,
  },
  example: {
    label: "Ví dụ minh họa",
    chip: "bg-amber-50 text-amber-700 ring-1 ring-amber-200",
    dot: "bg-amber-500",
    Icon: Lightbulb,
  },
  guide: {
    label: "Hướng dẫn",
    chip: "bg-slate-100 text-slate-600 ring-1 ring-slate-200",
    dot: "bg-slate-400",
    Icon: GraduationCap,
  },
};

function lessonKey(skill: Skill): LessonKey {
  if (skill.type) return skill.type;
  const t = skill.title.toLowerCase();
  if (t.includes("lý thuyết")) return "theory";
  if (t.includes("thực hành")) return "practice";
  if (t.includes("ví dụ")) return "example";
  return "guide";
}

/**
 * Trình xem khóa học: 1 video YouTube duy nhất cho cả khóa + giáo trình
 * (lý thuyết / thực hành / ví dụ minh họa). Bấm một bài để đọc nội dung.
 */
export function CoursePlayer({ course }: { course: Course }) {
  const reduce = useReducedMotion();
  const allSkills = course.skills ?? [];
  const [activeSkillId, setActiveSkillId] = useState<string | null>(
    allSkills[0]?.id ?? null
  );

  const activeSkill =
    allSkills.find((skill) => skill.id === activeSkillId) ??
    allSkills[0] ??
    null;

  // 1 video duy nhất cho cả khóa học.
  const courseVideoId = course.youtubeVideoId;

  const currentIndex = allSkills.findIndex((s) => s.id === activeSkill?.id);
  const prevSkill = currentIndex > 0 ? allSkills[currentIndex - 1] : null;
  const nextSkill =
    currentIndex >= 0 && currentIndex < allSkills.length - 1
      ? allSkills[currentIndex + 1]
      : null;

  // Tier + công cụ liên quan (phòng thủ dữ liệu với optional chaining).
  const tier = tierMeta[course.tier];
  const courseTools = useMemo(
    () =>
      (course.targetToolIds ?? [])
        .map((id) => tools.find((tool) => tool.id === id))
        .filter((t): t is (typeof tools)[number] => Boolean(t)),
    [course.targetToolIds]
  );

  const listContainer: Variants = {
    hidden: {},
    show: {
      transition: { staggerChildren: reduce ? 0 : 0.04, delayChildren: 0.05 },
    },
  };
  const listItem: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 10 },
        show: {
          opacity: 1,
          y: 0,
          transition: { type: "spring", stiffness: 320, damping: 28 },
        },
      };

  const activeMeta = activeSkill ? LESSON_META[lessonKey(activeSkill)] : null;

  return (
    <div className="space-y-8">
      {/* ===== HERO: thông tin khóa học ===== */}
      <motion.header
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="relative overflow-hidden rounded-2xl border border-white/10 bg-navy p-7 sm:p-10 text-white shadow-xl"
      >
        {/* Lưới mờ trang trí */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-primary/90 px-3 py-1 text-xs font-bold tracking-wide">
              <Layers strokeWidth={1.5} className="h-3.5 w-3.5" />
              {tier?.label ?? "Khóa học"}
            </span>
            <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/10 px-3 py-1 text-xs font-medium text-zinc-200">
              <BookOpen strokeWidth={1.5} className="h-3.5 w-3.5" />
              {allSkills.length} bài học
            </span>
          </div>

          <h1 className="mt-5 text-2xl font-extrabold tracking-tight sm:text-3xl md:text-4xl">
            {course.title}
          </h1>
          <p className="mt-3 max-w-3xl text-base leading-relaxed text-zinc-300">
            {course.description}
          </p>

          {courseTools.length > 0 && (
            <div className="mt-6 flex flex-wrap items-center gap-2">
              <span className="text-xs font-medium uppercase tracking-wide text-zinc-400">
                Công cụ:
              </span>
              {courseTools.map((tool) => (
                <span
                  key={tool.id}
                  className="inline-flex items-center gap-2 rounded-lg bg-white/10 py-1 pl-1 pr-3 text-sm font-medium text-zinc-100 ring-1 ring-white/10"
                >
                  <ToolLogo name={tool.name} logoUrl={tool.logoUrl} />
                  {tool.name}
                </span>
              ))}
            </div>
          )}
        </div>
      </motion.header>

      {/* ===== VIDEO: 1 video duy nhất cho cả khóa ===== */}
      <motion.section
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 26, delay: 0.05 }}
      >
        <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-700">
          <PlayCircle strokeWidth={1.5} className="h-4 w-4 text-primary" />
          Video bài giảng
        </div>
        <div className="aspect-video w-full overflow-hidden rounded-2xl bg-slate-900 shadow-xl ring-1 ring-black/5">
          {courseVideoId ? (
            <iframe
              key={course.id}
              className="h-full w-full"
              src={`https://www.youtube.com/embed/${courseVideoId}`}
              title={course.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="flex h-full w-full flex-col items-center justify-center gap-3 text-slate-400">
              <PlayCircle className="h-12 w-12" />
              <span className="text-sm font-medium">Video đang được cập nhật.</span>
            </div>
          )}
        </div>
      </motion.section>

      {/* ===== NỘI DUNG: bài học + giáo trình ===== */}
      <div className="grid gap-8 lg:grid-cols-12">
        {/* CỘT TRÁI: nội dung bài học đang chọn */}
        <div className="lg:col-span-8">
          {activeSkill ? (
            <article className="rounded-2xl border border-slate-200/80 bg-white p-6 shadow-sm sm:p-8">
              <div className="flex flex-wrap items-center gap-3">
                {activeMeta && (
                  <span
                    className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1 text-xs font-semibold ${activeMeta.chip}`}
                  >
                    <activeMeta.Icon strokeWidth={1.5} className="h-3.5 w-3.5" />
                    {activeMeta.label}
                  </span>
                )}
                <span className="inline-flex items-center gap-1 text-xs font-medium text-slate-400">
                  <Clock strokeWidth={1.5} className="h-3.5 w-3.5" />
                  {activeSkill.duration}
                </span>
                <span className="text-xs font-medium text-slate-400">
                  Bài {currentIndex + 1}/{allSkills.length}
                </span>
              </div>

              <h2 className="mt-4 text-xl font-extrabold tracking-tight text-navy sm:text-2xl">
                {activeSkill.title}
              </h2>

              <motion.div
                key={activeSkill.id + "-content"}
                initial={reduce ? false : { opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.25 }}
                className="mt-6"
              >
                {activeSkill.content ? (
                  <div className="prose prose-slate max-w-none prose-headings:text-navy prose-headings:font-bold prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-navy prose-code:rounded-md prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:text-primary prose-code:before:content-[''] prose-code:after:content-[''] prose-pre:bg-slate-900 prose-pre:text-slate-50">
                    <ReactMarkdown>{activeSkill.content}</ReactMarkdown>
                  </div>
                ) : (
                  <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50/60 p-8 text-center">
                    <BookOpen
                      strokeWidth={1.5}
                      className="mx-auto h-8 w-8 text-slate-300"
                    />
                    <p className="mt-3 text-sm font-medium text-slate-500">
                      Nội dung chi tiết của bài học này đang được biên soạn.
                    </p>
                    <p className="mt-1 text-xs text-slate-400">
                      Bạn có thể xem trước qua video bài giảng phía trên.
                    </p>
                  </div>
                )}
              </motion.div>

              {/* Điều hướng bài trước / bài sau */}
              <div className="mt-10 flex items-center justify-between gap-4 border-t border-slate-100 pt-6">
                {prevSkill ? (
                  <button
                    type="button"
                    onClick={() => setActiveSkillId(prevSkill.id)}
                    className="group flex max-w-[45%] items-center gap-2 rounded-lg px-3 py-2 text-left text-slate-500 transition-colors hover:bg-slate-50 hover:text-primary"
                  >
                    <ArrowLeft className="h-4 w-4 shrink-0" />
                    <span className="truncate text-sm font-medium">
                      <span className="hidden sm:inline">Bài trước</span>
                    </span>
                  </button>
                ) : (
                  <div />
                )}

                {nextSkill && (
                  <button
                    type="button"
                    onClick={() => setActiveSkillId(nextSkill.id)}
                    className="flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-white shadow-sm transition-all hover:bg-primary/90 active:scale-[0.98]"
                  >
                    <span className="text-sm font-semibold">Bài tiếp theo</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}
              </div>
            </article>
          ) : (
            <p className="text-sm text-slate-500">
              Nội dung khóa học đang được cập nhật.
            </p>
          )}
        </div>

        {/* CỘT PHẢI: giáo trình */}
        <aside className="lg:col-span-4">
          <div className="lg:sticky lg:top-24">
            <div className="overflow-hidden rounded-2xl border border-slate-200/80 bg-white shadow-sm">
              <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
                <h2 className="text-base font-bold text-navy">Giáo trình</h2>
                <span className="rounded-lg bg-slate-100 px-2 py-0.5 text-xs font-semibold text-slate-500">
                  {allSkills.length} bài
                </span>
              </div>

              {allSkills.length ? (
                <motion.ul
                  className="max-h-[70vh] divide-y divide-slate-100 overflow-y-auto"
                  variants={listContainer}
                  initial="hidden"
                  animate="show"
                >
                  {allSkills.map((skill, idx) => {
                    const isActive = skill.id === activeSkill?.id;
                    const meta = LESSON_META[lessonKey(skill)];
                    return (
                      <motion.li key={skill.id} variants={listItem}>
                        <button
                          type="button"
                          onClick={() => setActiveSkillId(skill.id)}
                          className={`flex w-full items-start gap-3 px-4 py-3.5 text-left transition-colors ${
                            isActive ? "bg-primary/5" : "hover:bg-slate-50"
                          }`}
                        >
                          {/* Số thứ tự / trạng thái */}
                          <span
                            className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md text-xs font-bold ${
                              isActive
                                ? "bg-primary text-white"
                                : "bg-slate-100 text-slate-500"
                            }`}
                          >
                            {isActive ? (
                              <CheckCircle2 className="h-4 w-4" />
                            ) : (
                              idx + 1
                            )}
                          </span>

                          <span className="min-w-0 flex-1">
                            <span className="mb-1 flex items-center gap-1.5">
                              <span className={`h-1.5 w-1.5 rounded-full ${meta.dot}`} />
                              <span className="text-[11px] font-semibold uppercase tracking-wide text-slate-400">
                                {meta.label}
                              </span>
                            </span>
                            <span
                              className={`block text-sm font-medium leading-snug ${
                                isActive ? "text-primary" : "text-slate-700"
                              }`}
                            >
                              {skill.title}
                            </span>
                            <span className="mt-1 inline-flex items-center gap-1 text-xs text-slate-400">
                              <Clock className="h-3 w-3" />
                              {skill.duration}
                            </span>
                          </span>
                        </button>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              ) : (
                <p className="px-5 py-6 text-sm text-slate-500">
                  Nội dung khóa học đang được cập nhật.
                </p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
