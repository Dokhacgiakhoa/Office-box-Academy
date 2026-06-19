"use client";

import { ArrowRight, Sparkles, Code2, Rocket, ShieldCheck, Wand2 } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { TapLink } from "@/components/motion/reveal";

const trust = [
  { icon: Rocket, text: "500+ học viên ra sản phẩm" },
  { icon: ShieldCheck, text: "Hoàn phí trong 7 ngày" },
];

/**
 * Hero VibeCoding — bố cục 2 cột tông tối cinematic: nội dung chốt sale bên trái,
 * mockup "Prompt → App" phát sáng cam bên phải minh hoạ "trò chuyện ra sản phẩm".
 */
export function VibeHero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 } },
  };
  const fadeUp: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 26 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 26 } },
      };

  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_55%_45%_at_70%_0%,rgba(255,102,0,0.20),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_70%_at_50%_0%,#000_55%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-16 md:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-10">
          {/* CỘT TRÁI: nội dung */}
          <motion.div variants={container} initial="hidden" animate="show" className="max-w-xl">
            <motion.div
              variants={fadeUp}
              className="inline-flex items-center gap-2 rounded-lg bg-primary/15 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/30 mb-6"
            >
              <Sparkles strokeWidth={1.5} className="h-4 w-4" />
              <span>Khóa học Vibe Coding — Bứt phá cùng AI</span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl md:text-5xl lg:text-[3.4rem] font-extrabold leading-[1.05] tracking-tight mb-6"
            >
              Không cần biết code, <br />
              <span className="text-primary">vẫn tự làm được App.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-lg text-slate-300 mb-8 leading-relaxed"
            >
              Biến ý tưởng thành sản phẩm thật chỉ bằng cách &quot;trò chuyện&quot;
              với AI. Vibe Coding giúp bạn xây website, công cụ và ứng dụng nội bộ
              mà không cần nền tảng lập trình.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3">
              <TapLink
                href="#pricing"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-200"
              >
                Đăng ký khóa học ngay <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
              </TapLink>
              <TapLink
                href="#benefits"
                className="inline-flex h-14 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-8 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-all duration-200"
              >
                <Code2 strokeWidth={1.5} className="h-5 w-5" /> Xem bạn sẽ làm được gì
              </TapLink>
            </motion.div>

            {/* Trust badges */}
            <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-x-6 gap-y-3">
              {trust.map((t) => {
                const Icon = t.icon;
                return (
                  <span key={t.text} className="inline-flex items-center gap-2 text-sm text-slate-300">
                    <Icon strokeWidth={1.5} className="h-4 w-4 text-primary" />
                    {t.text}
                  </span>
                );
              })}
            </motion.div>
          </motion.div>

          {/* CỘT PHẢI: mockup Prompt → App */}
          <motion.div
            initial={reduce ? { opacity: 0 } : { opacity: 0, scale: 0.94, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 24, delay: 0.15 }}
            className="relative mx-auto w-full max-w-md lg:max-w-none"
          >
            {/* Glow nền */}
            <div className="absolute -inset-6 rounded-2xl bg-primary/20 blur-3xl" />

            <div className="relative rounded-2xl border border-white/10 bg-[#0d1426]/90 p-4 shadow-2xl shadow-black/50 backdrop-blur-md">
              {/* Thanh cửa sổ */}
              <div className="flex items-center gap-1.5 px-1 pb-3">
                <span className="h-3 w-3 rounded-full bg-red-400/80" />
                <span className="h-3 w-3 rounded-full bg-amber-400/80" />
                <span className="h-3 w-3 rounded-full bg-emerald-400/80" />
                <span className="ml-2 text-xs font-medium text-slate-400">vibe-studio · ai</span>
              </div>

              {/* Khung prompt */}
              <div className="rounded-xl border border-white/10 bg-white/5 p-4">
                <p className="text-xs font-semibold uppercase tracking-wide text-primary mb-1.5">
                  Bạn nói
                </p>
                <p className="text-sm text-slate-200 leading-relaxed">
                  &quot;Tạo cho tôi một landing page bán mỹ phẩm, có nút mua hàng và form
                  thu thập email
                  <span className="ml-0.5 inline-block h-4 w-[2px] -mb-0.5 bg-primary animate-pulse" />
                  &quot;
                </p>
              </div>

              {/* Mũi tên AI dựng */}
              <div className="my-3 flex items-center justify-center gap-2 text-xs font-semibold text-primary">
                <Wand2 strokeWidth={1.5} className="h-4 w-4" /> AI đang dựng app…
              </div>

              {/* App preview sinh ra */}
              <div className="overflow-hidden rounded-xl border border-white/10 bg-white">
                <div className="flex items-center justify-between bg-slate-50 px-3 py-2">
                  <div className="h-2.5 w-16 rounded bg-navy/80" />
                  <div className="h-2.5 w-10 rounded bg-primary" />
                </div>
                <div className="p-3">
                  <div className="mb-2 h-3 w-3/4 rounded bg-slate-300" />
                  <div className="mb-3 h-2 w-1/2 rounded bg-slate-200" />
                  <div className="aspect-[16/7] w-full rounded-lg bg-gradient-to-br from-primary/20 via-slate-100 to-sky-100" />
                  <div className="mt-3 flex gap-2">
                    <div className="h-6 w-20 rounded-lg bg-primary" />
                    <div className="h-6 w-16 rounded-lg border border-slate-200" />
                  </div>
                </div>
              </div>
            </div>

            {/* Thẻ nổi: kết quả */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 -bottom-4 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-navy/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-md"
            >
              <Rocket strokeWidth={1.5} className="h-4 w-4 text-primary" />
              <span className="text-sm font-bold text-white">Xuất bản trong 1 click</span>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
