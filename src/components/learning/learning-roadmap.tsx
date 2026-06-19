"use client";

import { Building2, Megaphone, Code2, ArrowDown } from "lucide-react";
import { tierMeta, tierOrder, type Tier } from "@/data/tiers";
import { courses } from "@/data/courses";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/** Icon đại diện cho từng nhóm kỹ năng. */
const tierIcon: Record<Tier, typeof Building2> = {
  OFFICE: Building2,
  MARKETING: Megaphone,
  EXPERT: Code2,
};

/** Đếm số khóa học theo từng nhóm. */
function countByTier(tier: Tier): number {
  return courses.filter((c) => c.tier === tier).length;
}

/**
 * 3 Nhóm Kỹ Năng Cốt Lõi — các nhóm độc lập (không tuần tự), học viên tự chọn.
 * Mỗi card có nút "Khám phá ngay" cuộn xuống đúng tab khóa học tương ứng.
 */
export function LearningRoadmap() {
  return (
    <section className="py-12 md:py-16 bg-white border-b border-border/40">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            3 Nhóm Kỹ Năng Cốt Lõi
          </h2>
          <p className="text-lg text-muted-foreground">
            Bắt đầu từ việc thành thạo công cụ, mở rộng sáng tạo nội dung, cho đến
            việc tự lập trình giải pháp AI chuyên biệt. Bạn có thể chọn học bất cứ
            nhóm nào tùy theo nhu cầu hiện tại.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 md:grid-cols-3 gap-6" stagger={0.1}>
          {tierOrder.map((tier) => {
            const meta = tierMeta[tier];
            const Icon = tierIcon[tier];
            const count = countByTier(tier);
            return (
              <RevealItem key={tier} className="h-full">
                <div className="group flex h-full flex-col items-center text-center rounded-xl border-2 border-border/40 bg-slate-50 p-6 sm:p-8 transition-colors duration-300 hover:border-primary/40 hover:bg-white hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.25)]">
                  {/* Icon trên cùng */}
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-primary/10 text-primary mb-5 transition-transform duration-300 group-hover:scale-110">
                    <Icon strokeWidth={1.5} className="h-10 w-10" />
                  </div>

                  <h3 className="text-xl font-extrabold tracking-tight text-navy mb-2">
                    {meta.label}
                  </h3>

                  <span className="rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4">
                    {count} khóa học
                  </span>

                  <p className="flex-1 text-sm leading-relaxed text-muted-foreground mb-6">
                    {meta.description}
                  </p>

                  {/* Nút khám phá: cuộn tới tab khóa học tương ứng */}
                  <a
                    href={`#${tier.toLowerCase()}`}
                    className="inline-flex items-center gap-1.5 rounded-xl border border-border/50 px-5 py-2.5 text-sm font-bold text-primary transition-colors hover:bg-primary/5 hover:border-primary/40 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                  >
                    Khám phá ngay
                    <ArrowDown strokeWidth={1.5} className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                  </a>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
