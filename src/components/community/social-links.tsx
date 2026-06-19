"use client";

import Link from "next/link";
import { ThumbsUp, Users, PlaySquare, ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

const MotionLink = motion.create(Link);

interface SocialChannel {
  id: string;
  name: string;
  description: string;
  href: string;
  icon: typeof Users;
  /** Lớp màu nền cho khối icon. */
  accent: string;
  cta: string;
}

const channels: SocialChannel[] = [
  {
    id: "fanpage",
    name: "Fanpage Facebook",
    description:
      "Cập nhật tin tức AI mới nhất, mẹo ứng dụng nhanh và lịch sự kiện sắp diễn ra.",
    href: "https://facebook.com/dokhacgiakhoa",
    icon: ThumbsUp,
    accent: "bg-blue-600",
    cta: "Theo dõi Fanpage",
  },
  {
    id: "group-ai91",
    name: "Group Cộng đồng AI91",
    description:
      "Nơi hơn hàng nghìn dân văn phòng giao lưu, hỏi đáp và chia sẻ kinh nghiệm dùng AI.",
    href: "https://www.facebook.com/groups/ai91.vn",
    icon: Users,
    accent: "bg-primary",
    cta: "Tham gia Group",
  },
  {
    id: "youtube",
    name: "Kênh YouTube",
    description:
      "Video hướng dẫn chi tiết, case study thực tế và các buổi livestream chuyên sâu.",
    href: "https://youtube.com/@dokhacgiakhoa",
    icon: PlaySquare,
    accent: "bg-red-600",
    cta: "Đăng ký kênh",
  },
];

/**
 * Khối liên kết tới các kênh cộng đồng: Fanpage, Group AI91, YouTube.
 */
export function SocialLinks() {
  const reduce = useReducedMotion();
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            Kết nối với cộng đồng
          </h2>
          <p className="text-lg text-muted-foreground">
            Chọn kênh bạn yêu thích để đồng hành cùng Office Box trên hành trình
            làm chủ AI.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-3 gap-6">
          {channels?.map((channel) => {
            const Icon = channel.icon;
            return (
              <RevealItem key={channel.id} className="h-full">
                <MotionLink
                  href={channel.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={reduce ? undefined : { y: -6 }}
                  whileTap={reduce ? undefined : { scale: 0.98 }}
                  transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
                  className="group flex h-full flex-col bg-slate-50 p-6 sm:p-8 rounded-xl border border-border/40 hover:border-primary/40 hover:bg-white hover:shadow-xl hover:shadow-primary/10 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <div
                    className={`w-14 h-14 ${channel.accent} rounded-xl flex items-center justify-center text-white mb-6 transition-transform duration-300 group-hover:scale-110`}
                  >
                    <Icon strokeWidth={1.5} className="h-7 w-7" />
                  </div>
                  <h3 className="text-xl font-extrabold tracking-tight text-navy mb-3">
                    {channel.name}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-6 flex-1">
                    {channel.description}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-primary group-hover:gap-2 transition-all">
                    {channel.cta}
                    <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
                  </span>
                </MotionLink>
              </RevealItem>
            );
          })}
        </RevealGroup>
      </div>
    </section>
  );
}
