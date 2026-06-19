"use client";

import {
  MessageSquare,
  Rocket,
  Wallet,
  Layers,
  Bot,
  TrendingUp,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

interface Benefit {
  icon: typeof MessageSquare;
  title: string;
  description: string;
}

const benefits: Benefit[] = [
  {
    icon: MessageSquare,
    title: "Code bằng ngôn ngữ tự nhiên",
    description:
      "Chỉ cần mô tả ý tưởng bằng tiếng Việt, AI sẽ viết code và dựng sản phẩm cho bạn.",
  },
  {
    icon: Rocket,
    title: "Ra mắt sản phẩm thần tốc",
    description:
      "Rút ngắn thời gian từ ý tưởng đến sản phẩm thật từ vài tháng xuống còn vài ngày.",
  },
  {
    icon: Wallet,
    title: "Tiết kiệm chi phí thuê dev",
    description:
      "Tự tay làm landing page, công cụ nội bộ mà không cần ngân sách thuê đội kỹ thuật.",
  },
  {
    icon: Layers,
    title: "Quy trình bài bản A-Z",
    description:
      "Học theo lộ trình từ ý tưởng, thiết kế, dựng app đến triển khai lên Internet.",
  },
  {
    icon: Bot,
    title: "Làm chủ công cụ AI Builder",
    description:
      "Thành thạo Cursor, các AI Builder và prompt chuẩn để AI hiểu đúng ý bạn.",
  },
  {
    icon: TrendingUp,
    title: "Mở khóa cơ hội thu nhập",
    description:
      "Nhận dự án freelance hoặc xây sản phẩm riêng để tạo nguồn thu nhập mới.",
  },
];

/**
 * Khối giá trị của khóa Vibe Coding: nêu bật lợi ích cốt lõi.
 */
export function VibeBenefits() {
  const reduce = useReducedMotion();
  return (
    <section id="benefits" className="py-20 md:py-32 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            &quot;Không cần biết code vẫn tự làm được app&quot;
          </h2>
          <p className="text-lg text-muted-foreground">
            Vibe Coding trao cho dân văn phòng siêu năng lực biến mọi ý tưởng
            thành sản phẩm số — không rào cản kỹ thuật.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits?.map((benefit) => {
            const Icon = benefit.icon;
            return (
              <RevealItem key={benefit.title} className="h-full">
                <motion.div
                  whileHover={reduce ? undefined : { y: -6 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
                  className="group h-full bg-slate-50 p-6 sm:p-8 rounded-xl border border-border/40 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-primary/10 transition-colors duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6 transition-transform duration-300 group-hover:scale-110">
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-navy mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
