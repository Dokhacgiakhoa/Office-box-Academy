"use client";

import { ArrowRight, Heart, Users, CalendarDays } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { TapLink } from "@/components/motion/reveal";

/**
 * Hero trang Cộng đồng — tông tối cinematic, ăn nhập banner thương hiệu AI91
 * (nền đen, chữ AI91 cháy cam). Banner là tâm điểm, có vầng sáng cam + glow,
 * kèm chữ bay lên và 2 thẻ kính nổi. Tôn trọng prefers-reduced-motion.
 */
export function CommunityHero() {
  const reduce = useReducedMotion();

  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : 0.12, delayChildren: 0.05 } },
  };
  const fadeUp: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 320, damping: 26 } },
      };

  return (
    <section className="relative overflow-hidden bg-navy">
      {/* Nền tối + vầng sáng cam tạo chiều sâu cinematic */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,102,0,0.18),transparent_70%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_70%_60%_at_50%_0%,#000_50%,transparent_100%)]" />
      <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-72 w-[40rem] rounded-full bg-primary/20 blur-[140px]" />

      <div className="relative z-10 mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12 py-16 md:py-20 text-center">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-lg bg-primary/15 px-3 py-1 text-sm font-semibold text-primary ring-1 ring-primary/30 mb-7"
          >
            <Heart strokeWidth={1.5} className="h-4 w-4" />
            <span>Cộng đồng AI91</span>
          </motion.div>

          {/* Banner thương hiệu AI91 — tâm điểm */}
          <motion.div
            variants={fadeUp}
            className="relative mx-auto mb-9 w-full max-w-4xl"
          >
            <div className="relative overflow-hidden rounded-xl ring-1 ring-primary/20 shadow-[0_24px_70px_-20px_rgba(255,102,0,0.45)]">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/ai91-banner.jpg"
                alt="Cộng đồng AI91 — Kết nối · Học hỏi · Chia sẻ · Ứng dụng"
                className="w-full h-auto object-cover"
              />
            </div>

            {/* Thẻ kính nổi: thành viên */}
            <motion.div
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-3 -bottom-5 sm:-left-6 hidden sm:flex items-center gap-3 rounded-xl border border-white/10 bg-navy/80 px-4 py-3 shadow-xl shadow-black/40 backdrop-blur-md"
            >
              <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Users strokeWidth={1.5} className="h-5 w-5" />
              </span>
              <div className="text-left">
                <p className="text-sm font-extrabold leading-tight text-white">9.000+ thành viên</p>
                <p className="text-xs text-slate-400">Cùng học AI mỗi ngày</p>
              </div>
            </motion.div>

            {/* Thẻ kính nổi: sự kiện */}
            <motion.div
              animate={reduce ? undefined : { y: [0, 8, 0] }}
              transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              className="absolute -right-2 -top-4 sm:-right-5 hidden sm:flex items-center gap-2 rounded-xl border border-white/10 bg-navy/80 px-3.5 py-2.5 shadow-xl shadow-black/40 backdrop-blur-md"
            >
              <span className="relative flex h-2.5 w-2.5 items-center justify-center">
                <span className="absolute h-2.5 w-2.5 rounded-full bg-red-500/50 animate-ping" />
                <span className="h-2.5 w-2.5 rounded-full bg-red-500" />
              </span>
              <span className="text-sm font-bold text-white">Sự kiện hằng tuần</span>
            </motion.div>
          </motion.div>

          <motion.h1
            variants={fadeUp}
            className="text-3xl md:text-5xl font-extrabold leading-[1.1] tracking-tight text-white mb-5"
          >
            Học AI vui hơn <span className="text-primary">khi có đồng đội</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-300 mb-9"
          >
            Tham gia cộng đồng hàng nghìn dân văn phòng Việt cùng nhau học hỏi,
            chia sẻ và ứng dụng AI vào công việc mỗi ngày — hoàn toàn miễn phí.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 justify-center">
            <TapLink
              href="https://www.facebook.com/groups/ai91.vn"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-7 text-base font-bold text-white shadow-lg shadow-primary/30 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-200"
            >
              Tham gia ngay <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
            </TapLink>
            <TapLink
              href="#lich-su-kien"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-7 text-base font-bold text-white backdrop-blur-sm hover:bg-white/10 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/40 transition-all duration-200"
            >
              <CalendarDays strokeWidth={1.5} className="h-5 w-5" /> Xem lịch sự kiện
            </TapLink>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
