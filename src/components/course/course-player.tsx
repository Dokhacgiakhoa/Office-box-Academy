"use client";

import { useState } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { PlayCircle, Clock, CheckCircle2 } from "lucide-react";
import type { Course } from "@/data/courses";
import ReactMarkdown from "react-markdown";

/**
 * Trình xem khóa học: bố cục 2 cột (video player + syllabus).
 * Bấm vào một kỹ năng sẽ cập nhật video bên cột trái (state phía client).
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

  // Stagger cho danh sách bài học (Slide up nhẹ từng dòng).
  const listContainer: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.05, delayChildren: 0.1 } },
  };
  const listItem: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 28 } },
      };

  return (
    <div className="grid lg:grid-cols-12 gap-8">
      {/* CỘT TRÁI: Video Player & Info (8/12) */}
      <motion.div
        initial={reduce ? { opacity: 0 } : { opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: "spring", stiffness: 280, damping: 26 }}
        className="lg:col-span-8"
      >
        <div className="aspect-video w-full rounded-xl overflow-hidden bg-slate-900 shadow-lg">
          {activeSkill?.youtubeVideoId ? (
            <iframe
              key={activeSkill.id}
              className="w-full h-full"
              src={`https://www.youtube.com/embed/${activeSkill.youtubeVideoId}`}
              title={activeSkill.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-slate-400 gap-3">
              <PlayCircle className="h-12 w-12" />
              <span className="text-sm font-medium">
                Video đang được cập nhật.
              </span>
            </div>
          )}
        </div>

        {activeSkill && (
          <p className="mt-4 text-sm font-semibold text-primary">
            Đang học: {activeSkill.title}
          </p>
        )}

        <h1 className="mt-4 text-2xl md:text-3xl font-extrabold text-navy tracking-tight">
          {course.title}
        </h1>
        <p className="mt-4 text-slate-600 leading-relaxed">
          {course.description}
        </p>

        {activeSkill?.content && (
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            key={activeSkill.id + "-content"}
            className="mt-10 pt-10 border-t border-slate-200"
          >
            <div className="prose prose-slate max-w-none prose-headings:text-navy prose-a:text-primary hover:prose-a:text-primary/80 prose-strong:text-navy prose-code:text-primary prose-code:bg-primary/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded-md prose-pre:bg-slate-900 prose-pre:text-slate-50">
              <ReactMarkdown>{activeSkill.content}</ReactMarkdown>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* CỘT PHẢI: Syllabus (4/12) */}
      <aside className="lg:col-span-4">
        <div className="lg:sticky lg:top-24">
          <h2 className="text-lg font-bold text-navy mb-4">
            Nội dung khóa học
          </h2>

          {allSkills.length ? (
            <div className="bg-white rounded-xl border border-border/50 overflow-hidden">
              <motion.ul
                className="divide-y divide-slate-100"
                variants={listContainer}
                initial="hidden"
                animate="show"
              >
                {allSkills.map((skill) => {
                  const isActive = skill.id === activeSkill?.id;
                  return (
                    <motion.li key={skill.id} variants={listItem}>
                      <button
                        type="button"
                        onClick={() => setActiveSkillId(skill.id)}
                        className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                          isActive
                            ? "bg-primary/5"
                            : "hover:bg-slate-50"
                        }`}
                      >
                        {isActive ? (
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                        ) : (
                          <PlayCircle className="h-5 w-5 shrink-0 text-slate-400" />
                        )}
                        <span
                          className={`flex-1 text-sm font-medium ${
                            isActive ? "text-primary" : "text-slate-700"
                          }`}
                        >
                          {skill.title}
                        </span>
                        <span className="flex items-center gap-1 text-xs text-slate-400 shrink-0">
                          <Clock className="h-3 w-3" />
                          {skill.duration}
                        </span>
                      </button>
                    </motion.li>
                  );
                })}
              </motion.ul>
            </div>
          ) : (
            <p className="text-sm text-slate-500">
              Nội dung khóa học đang được cập nhật.
            </p>
          )}
        </div>
      </aside>
    </div>
  );
}
