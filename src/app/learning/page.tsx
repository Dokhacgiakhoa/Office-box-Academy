import type { Metadata } from "next";
import { GraduationCap } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CourseShowcaseSection } from "@/components/home/course-showcase-section";
import { LearningRoadmap } from "@/components/learning/learning-roadmap";
import { SkillsHandbook } from "@/components/learning/skills-handbook";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Learning — Khóa học & Lộ trình AI | Office Box Academy",
  description:
    "Tất cả khóa học AI Office, AI Agent và VibeCoding cùng lộ trình học bài bản, từ nền tảng đến chuyên sâu.",
};

/**
 * Trang Learning độc lập: tổng hợp toàn bộ khóa học (CourseShowcaseSection)
 * và lộ trình học (Roadmap) theo 3 nhánh.
 */
export default function LearningPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Hero */}
        <section className="relative overflow-hidden bg-navy text-white py-16 md:py-24">
          <div className="absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-72 rounded-lg bg-primary/25 blur-[120px]" />
          <Reveal className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm font-semibold mb-5 ring-1 ring-primary/30">
              <GraduationCap strokeWidth={1.5} className="h-4 w-4" />
              <span>Trung tâm học tập</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Học AI bài bản theo <span className="text-primary">lộ trình</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Chọn nhánh phù hợp — AI Office, AI Agent hoặc VibeCoding — và đi
              từ nền tảng đến chuyên sâu với hệ thống khóa học được thiết kế riêng.
            </p>
          </Reveal>
        </section>

        {/* Lộ trình học */}
        <LearningRoadmap />

        {/* Toàn bộ khóa học theo nhánh */}
        <CourseShowcaseSection />

        {/* Quà tặng: Cẩm nang Skills */}
        <SkillsHandbook />
      </main>

      <SiteFooter />
    </div>
  );
}
