"use client";

import { useRef } from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

/** Chip công cụ AI trôi quanh ảnh Hero — dùng logo thật (đồng bộ Marquee). */
const floatingTools = [
  { name: "Gemini", logo: "/logos/gemini.png", className: "top-[18%] left-3 sm:left-6 -rotate-6", yOffset: -15, delay: 0 },
  { name: "ChatGPT", logo: "/logos/chatgpt.png", className: "bottom-[20%] right-3 sm:right-6 rotate-6", yOffset: 10, delay: 0.6 },
  { name: "Veo 3", logo: "/logos/veo3.png", className: "top-[46%] -right-1 sm:right-4 -rotate-3", yOffset: -12, delay: 1.1 },
];

/**
 * Hero trang chủ: tiêu đề lớn, mô tả, CTA và minh họa hệ sinh thái AI.
 * Sử dụng GSAP thay vì Framer Motion để tối ưu hiệu năng và tạo hiệu ứng mượt mà.
 */
export function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    // 1. Hiệu ứng Fade-up Spring cho nội dung chữ bên trái
    gsap.from(".hero-text-element", {
      y: 30,
      opacity: 0,
      duration: 1,
      stagger: 0.15,
      ease: "back.out(1.2)",
      delay: 0.1,
    });

    // 2. Hiệu ứng Scale-in cho khối hình ảnh bên phải
    gsap.from(".hero-image-container", {
      scale: 0.9,
      opacity: 0,
      duration: 1.2,
      ease: "power3.out",
      delay: 0.3,
    });

    // 3. Hiệu ứng trôi nổi (Floating) cho các chip công cụ
    const chips = gsap.utils.toArray<HTMLDivElement>(".hero-floating-chip");
    chips.forEach((chip, i) => {
      // Hiện ra dần
      gsap.from(chip, {
        opacity: 0,
        scale: 0.5,
        duration: 0.8,
        ease: "back.out(1.5)",
        delay: 0.6 + floatingTools[i].delay,
      });

      // Trôi lên xuống liên tục
      gsap.to(chip, {
        y: floatingTools[i].yOffset,
        duration: 2.5 + Math.random(),
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: 0.6 + floatingTools[i].delay,
      });
    });
  }, { scope: containerRef });

  return (
    <section 
      ref={containerRef}
      className="relative flex min-h-[30rem] items-center overflow-hidden bg-white pt-6 pb-20 md:pt-10 md:pb-28"
    >
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#f1f5f9_1px,transparent_1px),linear-gradient(to_bottom,#f1f5f9_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40 [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
          <div className="max-w-2xl">
            <div
              className="hero-text-element mb-6 inline-flex items-center gap-2 rounded-lg bg-primary/10 px-3 py-1 text-sm font-semibold text-primary"
            >
              <CheckCircle2 strokeWidth={1.5} className="h-4 w-4" />
              <span>AI Office — 100% Miễn phí cho dân văn phòng</span>
            </div>

            <h1
              className="hero-text-element mb-6 text-4xl font-extrabold leading-[1.1] tracking-tight text-navy md:text-5xl"
            >
              Văn phòng AI <br />
              <span className="text-primary">Miễn phí</span> trong tầm tay <br />
              dân công sở Việt.
            </h1>

            <p
              className="hero-text-element mb-8 max-w-xl text-lg font-normal leading-relaxed text-muted-foreground"
            >
              Trọn bộ khóa học, công cụ và tài liệu AI ứng dụng cho công việc —
              hoàn toàn miễn phí. Chọn đúng ngành nghề của bạn và bắt đầu tiết
              kiệm 80% thời gian ngay hôm nay.
            </p>

            <div className="hero-text-element flex flex-col gap-3 sm:flex-row">
              <Link
                href="#professions"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 transition-all duration-200 hover:-translate-y-0.5 hover:bg-primary/90 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
              >
                Nhận tài liệu miễn phí <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
              </Link>
              <Link
                href="#ecosystem"
                className="flex h-12 items-center justify-center gap-2 rounded-xl border border-border/60 bg-white px-8 text-base font-bold text-navy shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
              >
                Khám phá Công cụ
              </Link>
            </div>
          </div>

          {/* Minh họa hệ sinh thái AI */}
          <div className="relative mx-auto w-full max-w-lg lg:max-w-none hero-image-container">
            <div className="relative flex aspect-square items-center justify-center overflow-hidden rounded-2xl border border-border/40 bg-slate-100 shadow-2xl shadow-slate-200/60">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/images/hero_banner.png"
                alt="AI Office — dân văn phòng làm việc cùng AI"
                className="absolute inset-0 h-full w-full object-cover"
              />

              {/* Chip công cụ với logo thật, glass trắng sạch */}
              {floatingTools.map((tool) => (
                <div
                  key={tool.name}
                  className={`hero-floating-chip absolute inline-flex items-center gap-2 rounded-xl border border-white/60 bg-white/90 px-3.5 py-2 shadow-xl shadow-navy/10 backdrop-blur-md ${tool.className}`}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={tool.logo} alt={tool.name} className="h-5 w-5 object-contain" />
                  <span className="text-sm font-extrabold text-navy">{tool.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
