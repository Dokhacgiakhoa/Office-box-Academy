"use client";

import { UserPlus, HeartHandshake, MessageSquare, GraduationCap, ArrowRight } from "lucide-react";
import { Reveal, RevealGroup, RevealItem, TapLink } from "@/components/motion/reveal";

const steps = [
  {
    icon: UserPlus,
    title: "Đăng ký tài khoản",
    desc: "Tạo tài khoản tại cộng đồng AI91 và chờ được duyệt.",
  },
  {
    icon: HeartHandshake,
    title: "Đóng góp gây quỹ",
    desc: "Chuyển khoản tối thiểu 500.000đ vào quỹ viện phí bệnh nhi.",
  },
  {
    icon: MessageSquare,
    title: "Gửi xác nhận",
    desc: "Inbox Facebook kèm ảnh chuyển khoản và email đăng ký.",
  },
  {
    icon: GraduationCap,
    title: "Vào học ngay",
    desc: "Được duyệt trong 24h, truy cập trọn bộ lộ trình thực chiến.",
  },
];

/**
 * "Cách tham gia" — 4 bước trực quan để gia nhập cộng đồng AI91.
 */
export function HowToJoin() {
  return (
    <section id="cach-tham-gia" className="scroll-mt-28 py-16 md:py-24 bg-white border-t border-border/40">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HeartHandshake strokeWidth={1.5} className="h-4 w-4" />
            <span>Cách tham gia</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            4 bước để gia nhập AI91
          </h2>
          <p className="text-lg text-muted-foreground">
            Không học phí — chỉ cần một tấm lòng. Đóng góp của bạn vừa giúp bạn học,
            vừa giúp các bệnh nhi có thêm chi phí điều trị.
          </p>
        </Reveal>

        <RevealGroup className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6" stagger={0.1}>
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <RevealItem key={step.title} className="h-full">
                <div className="group relative flex h-full flex-col rounded-xl border-2 border-border/40 bg-slate-50 p-6 transition-colors duration-300 hover:border-primary/40 hover:bg-white hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.25)]">
                  {/* Số bước */}
                  <span className="absolute right-4 top-4 text-4xl font-black text-primary/10">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                    <Icon strokeWidth={1.5} className="h-6 w-6" />
                  </div>
                  <h3 className="mb-2 text-lg font-extrabold tracking-tight text-navy">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
                </div>
              </RevealItem>
            );
          })}
        </RevealGroup>

        <Reveal className="mt-10 flex justify-center">
          <TapLink
            href="https://www.facebook.com/groups/ai91.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-200"
          >
            Bắt đầu tham gia ngay <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
          </TapLink>
        </Reveal>
      </div>
    </section>
  );
}
