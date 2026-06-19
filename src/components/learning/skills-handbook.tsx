"use client";

import { Bot, PenTool, Clapperboard, Megaphone, Wrench, Gift, Lock } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const categories = [
  { icon: Bot, count: 10, name: "ARC — AI Agent", desc: "Bộ agent đóng gói sẵn cho các tác vụ tự động." },
  { icon: PenTool, count: 6, name: "Content & Landing", desc: "Viết nội dung và dựng landing page chuyển đổi." },
  { icon: Clapperboard, count: 7, name: "Ảnh & Video AI", desc: "Tạo hình ảnh, video không cần camera." },
  { icon: Megaphone, count: 36, name: "ClaudeKit — Marketing", desc: "Phân tích đối thủ, lập kế hoạch, viết copy." },
  { icon: Wrench, count: 86, name: "ClaudeKit — Engineer", desc: "Kỹ thuật & AI Agent chuyên sâu cho dân build." },
];

const total = categories.reduce((sum, c) => sum + c.count, 0);

/**
 * Quà tặng: Cẩm nang 160+ Skills cho Claude Code — phần thưởng khi hoàn thành lộ trình.
 */
export function SkillsHandbook() {
  return (
    <section className="py-16 md:py-24 bg-navy text-white relative overflow-hidden border-t border-white/5">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_0%,rgba(255,102,0,0.15),transparent_70%)]" />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/15 text-primary text-sm font-semibold ring-1 ring-primary/30 mb-4">
            <Gift strokeWidth={1.5} className="h-4 w-4" />
            <span>Quà tặng đặc biệt</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-4">
            Cẩm nang <span className="text-primary">{total}+ Skills</span> cho Claude Code
          </h2>
          <p className="text-lg text-slate-300">
            Bộ công cụ đóng gói sẵn giúp bạn tăng tốc gấp nhiều lần — mở khoá khi
            hoàn thành trọn vẹn lộ trình học.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5" stagger={0.08}>
          {categories.map((c) => {
            const Icon = c.icon;
            return (
              <RevealItem key={c.name} className="h-full">
                <div className="group flex h-full flex-col rounded-xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-colors duration-300 hover:border-primary/40 hover:bg-white/10">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary transition-transform duration-300 group-hover:scale-110">
                      <Icon strokeWidth={1.5} className="h-6 w-6" />
                    </span>
                    <span className="text-3xl font-black text-primary/80">{c.count}</span>
                  </div>
                  <h3 className="mb-1.5 text-lg font-extrabold tracking-tight text-white">{c.name}</h3>
                  <p className="text-sm leading-relaxed text-slate-400">{c.desc}</p>
                </div>
              </RevealItem>
            );
          })}

          {/* Thẻ khoá — mở khi hoàn thành */}
          <RevealItem className="h-full">
            <div className="flex h-full flex-col items-center justify-center rounded-xl border-2 border-dashed border-white/15 bg-white/[0.03] p-6 text-center">
              <Lock strokeWidth={1.5} className="mb-3 h-8 w-8 text-primary" />
              <h3 className="mb-1 text-lg font-extrabold tracking-tight text-white">Mở khoá toàn bộ</h3>
              <p className="text-sm text-slate-400">Hoàn thành lộ trình để nhận trọn cẩm nang {total}+ Skills.</p>
            </div>
          </RevealItem>
        </RevealGroup>
      </div>
    </section>
  );
}
