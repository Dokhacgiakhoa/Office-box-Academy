"use client";

import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";

const MotionLink = motion.create(Link);

/** Chip công cụ AI trôi quanh ảnh Hero — dùng logo thật (đồng bộ Marquee). */
const floatingTools = [
  { name: "Gemini", logo: "/logos/gemini.png", className: "top-[18%] left-3 sm:left-6 -rotate-6", delay: 0 },
  { name: "ChatGPT", logo: "/logos/chatgpt.png", className: "bottom-[20%] right-3 sm:right-6 rotate-6", delay: 0.6 },
  { name: "Veo 3", logo: "/logos/veo3.png", className: "top-[46%] -right-1 sm:right-4 -rotate-3", delay: 1.1 },
];

/**
 * Hero trang chủ: tiêu đề lớn, mô tả, CTA và minh họa hệ sinh thái AI.
 * Chữ bay lên Fade-Up Spring; chip công cụ (logo thật) trôi nhẹ quanh ảnh.
 */
export function HeroSection() {
  const reduceMotion = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduceMotion ? 0 : 0.12, delayChildren: 0.05 } },
  };

  const fadeUp: Variants = reduceMotion
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 28 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 26, mass: 0.6 } },
      };

  return (
    <section className="relative flex min-h-[30rem] items-center overflow-hidden bg-white pt-6 pb-20 md:pt-10 md:pb-28">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-2xl">
            <motion.div
              variants={fadeUp}
              className="mb-6 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              <CheckCircle2 strokeWidth={1.5} className="h-4 w-4" />
              <span>AI Office — 100% Miễn phí cho dân văn phòng</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl"
            >
              Văn phòng AI <br />
              <span className="text-primary">Miễn phí</span> trong tầm tay <br />
              dân công sở Việt.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mb-8 max-w-xl text-lg font-normal leading-relaxed text-muted-foreground"
            >
              Trọn bộ khóa học, công cụ và tài liệu AI ứng dụng cho công việc —
              hoàn toàn miễn phí. Chọn đúng ngành nghề của bạn và bắt đầu tiết
              kiệm 80% thời gian ngay hôm nay.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col gap-3 sm:flex-row">
              <MotionLink
                href="#professions"
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              >
                Nhận tài liệu miễn phí <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
              </MotionLink>
              <MotionLink
                href="#ecosystem"
                whileTap={reduceMotion ? undefined : { scale: 0.96 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border/60 bg-white px-8 text-base font-bold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Khám phá Công cụ
              </MotionLink>
            </motion.div>
          </motion.div>

          {/* Minh họa hệ sinh thái AI */}
          <motion.div
            initial={reduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", stiffness: 200, damping: 24, delay: 0.2 }}
            className="relative mx-auto w-full max-w-lg lg:max-w-none"
          >
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border/40 bg-slate-100 shadow-2xl shadow-slate-200/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero_banner.png"
                alt="AI Office — dân văn phòng làm việc cùng AI"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Chip công cụ với logo thật, glass trắng sạch */}
              {floatingTools.map((tool) => (
                <motion.div
                  key={tool.name}
                  animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: tool.delay }}
                  className={`absolute inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-3.5 py-2 shadow-xl shadow-navy/10 backdrop-blur-md ${tool.className}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.logo} alt={tool.name} className="h-5 w-5 object-contain" />
                  <span className="text-sm font-extrabold text-navy">{tool.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
