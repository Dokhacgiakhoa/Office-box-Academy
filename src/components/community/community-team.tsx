"use client";

import { motion, useReducedMotion } from "framer-motion";
import { ThumbsUp, PlaySquare, Globe, Sparkles } from "lucide-react";
import { Reveal } from "@/components/motion/reveal";

interface Admin {
  name: string;
  handle: string;
  title: string;
  bio: string;
  initials: string;
  socials: { icon: typeof ThumbsUp; href: string; label: string }[];
}

const admins: Admin[] = [
  {
    name: "Đỗ Khắc Gia Khoa",
    handle: "@dokhacgiakhoa",
    title: "Founder & AI Architect",
    bio: "Người sáng lập Office Box & cộng đồng AI91 với tâm huyết phổ cập AI cho mọi dân văn phòng Việt. Tin rằng ai cũng có thể biến AI thành trợ lý đắc lực — không cần nền tảng kỹ thuật, chỉ cần đúng phương pháp.",
    initials: "GK",
    socials: [
      { icon: ThumbsUp, href: "https://facebook.com/dokhacgiakhoa", label: "Facebook" },
      { icon: PlaySquare, href: "https://youtube.com/@dokhacgiakhoa", label: "YouTube" },
      { icon: Globe, href: "https://linkedin.com/in/dokhacgiakhoa", label: "LinkedIn" },
    ],
  },
];

/**
 * Ban Quản Trị AI91: profile các thành viên điều hành cộng đồng.
 */
export function CommunityTeam() {
  const reduce = useReducedMotion();

  return (
    <section className="py-16 md:py-24 bg-slate-50 border-t border-border/40">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            <Sparkles strokeWidth={1.5} className="h-4 w-4" />
            <span>Ban Quản Trị AI91</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            Những người dẫn dắt cộng đồng
          </h2>
          <p className="text-lg text-muted-foreground">
            Đội ngũ tâm huyết đứng sau hành trình phổ cập AI cho dân văn phòng Việt.
          </p>
        </Reveal>

        <div className="mx-auto max-w-2xl">
          {admins.map((admin) => (
            <Reveal key={admin.handle}>
              <motion.div
                whileHover={reduce ? undefined : { y: -6 }}
                transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
                className="flex flex-col sm:flex-row items-center sm:items-start gap-6 rounded-xl border-2 border-border/40 bg-white p-6 sm:p-8 shadow-[0_2px_0_0_rgba(15,23,42,0.06)] hover:border-primary/40 hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.3)] transition-colors duration-300"
              >
                {/* Avatar boxy với initials */}
                <div className="flex h-24 w-24 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-primary to-orange-400 text-3xl font-black text-white shadow-lg shadow-primary/30">
                  {admin.initials}
                </div>

                <div className="flex-1 text-center sm:text-left">
                  <h3 className="text-xl font-extrabold tracking-tight text-navy">
                    {admin.name}
                  </h3>
                  <p className="text-sm font-medium text-slate-400 mb-2">
                    {admin.handle}
                  </p>
                  <span className="inline-flex rounded-lg bg-primary/10 px-3 py-1 text-xs font-bold text-primary mb-4">
                    {admin.title}
                  </span>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-5">
                    {admin.bio}
                  </p>

                  <div className="flex items-center justify-center sm:justify-start gap-2">
                    {admin.socials.map((social) => {
                      const Icon = social.icon;
                      return (
                        <a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={social.label}
                          className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-slate-500 hover:border-primary/40 hover:text-primary hover:bg-primary/5 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                        >
                          <Icon strokeWidth={1.5} className="h-5 w-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
