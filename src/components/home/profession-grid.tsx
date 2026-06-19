"use client";

import Link from "next/link";
import { ArrowRight, Building2, Megaphone, Code2, Gift } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { tierMeta, tierOrder, type Tier } from "@/data/tiers";
import { courses } from "@/data/courses";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const MotionLink = motion.create(Link);

/** Icon đại diện cho từng nhánh học. */
const tierIcon: Record<Tier, typeof Building2> = {
  OFFICE: Building2,
  MARKETING: Megaphone,
  EXPERT: Code2,
};

/** Đếm số khóa học mỗi nhánh để hiển thị trên thẻ. */
function countByTier(tier: Tier): number {
  return courses.filter((c) => c.tier === tier).length;
}

/**
 * Lưới 3 nhánh học chính (AI Office / AI Agent / VibeCoding).
 * Mỗi thẻ dẫn trực tiếp về trang Learning. Boxy design + Hover Lift / whileTap.
 */
export function ProfessionGrid() {
  const reduce = useReducedMotion();

  return (
    <section id="professions" className="py-12 md:py-16 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Gift strokeWidth={1.5} className="h-4 w-4" />
            <span>3 nhánh học — Khóa học &amp; tài liệu miễn phí</span>
          </div>
          <h2 className="text-3xl font-extrabold text-navy mb-4 tracking-tight md:text-4xl">
            Bạn muốn ứng dụng AI vào đâu?
          </h2>
          <p className="text-lg text-muted-foreground">
            Chọn nhánh phù hợp để vào ngay Trung tâm học tập với lộ trình, tài
            liệu và khóa học AI được thiết kế riêng cho bạn.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-3 gap-6">
          {tierOrder.map((tier) => {
            const meta = tierMeta[tier];
            const Icon = tierIcon[tier];
            const count = countByTier(tier);
            return (
              <RevealItem key={tier} className="h-full">
                <MotionLink
                  href="/learning"
                  whileHover={reduce ? undefined : { y: -6 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
                  className="group relative block h-full bg-white p-6 sm:p-8 rounded-xl border-2 border-border/40 hover:border-primary/40 shadow-[0_2px_0_0_rgba(15,23,42,0.06)] hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.3)] transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <span className="absolute top-6 right-6 inline-flex items-center gap-1 rounded-lg bg-green-100 px-2.5 py-1 text-xs font-bold text-green-700">
                    {count} khóa học
                  </span>
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-navy mb-1">
                    {meta.label}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mb-3">
                    {meta.tagline}
                  </p>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                    {meta.description}
                  </p>

                  <div className="flex items-center text-primary font-semibold text-sm group-hover:gap-2 transition-all">
                    Vào học ngay <ArrowRight strokeWidth={1.5} className="h-4 w-4 ml-1" />
                  </div>
                </MotionLink>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
