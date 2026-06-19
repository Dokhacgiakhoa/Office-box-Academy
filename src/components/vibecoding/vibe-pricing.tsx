"use client";

import { Check, Sparkles } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, RevealGroup, RevealItem, TapLink } from "@/components/motion/reveal";

interface PricingPlan {
  id: string;
  name: string;
  tagline: string;
  price: string;
  priceNote: string;
  features: string[];
  highlighted: boolean;
  ctaLabel: string;
}

const plans: PricingPlan[] = [
  {
    id: "starter",
    name: "Khởi động",
    tagline: "Cho người mới bắt đầu",
    price: "1.990.000đ",
    priceNote: "Học trọn đời",
    features: [
      "20+ bài học video Vibe Coding nền tảng",
      "Dựng landing page đầu tiên bằng AI",
      "Bộ prompt mẫu chuẩn",
      "Hỗ trợ qua cộng đồng AI91",
    ],
    highlighted: false,
    ctaLabel: "Chọn gói Khởi động",
  },
  {
    id: "pro",
    name: "Chuyên sâu",
    tagline: "Lựa chọn phổ biến nhất",
    price: "3.990.000đ",
    priceNote: "Học trọn đời + cập nhật",
    features: [
      "Toàn bộ gói Khởi động",
      "Dựng app full-stack & deploy lên Internet",
      "Tích hợp database và AI vào sản phẩm",
      "4 buổi coaching nhóm trực tiếp",
      "Review sản phẩm cá nhân 1-1",
    ],
    highlighted: true,
    ctaLabel: "Đăng ký gói Chuyên sâu",
  },
  {
    id: "business",
    name: "Doanh nghiệp",
    tagline: "Đào tạo cho cả team",
    price: "Liên hệ",
    priceNote: "Báo giá theo quy mô",
    features: [
      "Toàn bộ gói Chuyên sâu",
      "Đào tạo on-site / online cho team",
      "Lộ trình tùy chỉnh theo nghiệp vụ",
      "Tư vấn triển khai sản phẩm thực tế",
    ],
    highlighted: false,
    ctaLabel: "Nhận tư vấn doanh nghiệp",
  },
];

/**
 * Bảng giá khóa học Vibe Coding (khóa thu phí).
 */
export function VibePricing() {
  const reduce = useReducedMotion();
  return (
    <section id="pricing" className="py-20 md:py-32 bg-slate-50">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            Đầu tư một lần, dùng kỹ năng trọn đời
          </h2>
          <p className="text-lg text-muted-foreground">
            Chọn gói học phù hợp với mục tiêu của bạn. Cam kết hoàn phí trong 7
            ngày nếu không hài lòng.
          </p>
        </Reveal>

        <RevealGroup className="grid md:grid-cols-3 gap-6 items-stretch" stagger={0.12}>
          {plans?.map((plan) => (
            <RevealItem key={plan.id} className="h-full">
            <motion.div
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
              className={`relative flex h-full flex-col rounded-xl p-6 sm:p-8 transition-colors duration-300 ${
                plan.highlighted
                  ? "bg-navy text-white shadow-2xl shadow-navy/30 md:-translate-y-3 ring-2 ring-primary"
                  : "bg-white border border-border/40 shadow-sm hover:shadow-xl hover:shadow-primary/10"
              }`}
            >
              {plan.highlighted && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1 rounded-lg bg-primary px-4 py-1 text-xs font-bold text-white whitespace-nowrap">
                  <Sparkles strokeWidth={1.5} className="h-3 w-3" /> Phổ biến nhất
                </span>
              )}

              <h3
                className={`text-xl font-bold mb-1 ${
                  plan.highlighted ? "text-white" : "text-navy"
                }`}
              >
                {plan.name}
              </h3>
              <p
                className={`text-sm mb-6 ${
                  plan.highlighted ? "text-slate-300" : "text-slate-500"
                }`}
              >
                {plan.tagline}
              </p>

              <div className="mb-6">
                <div
                  className={`text-3xl font-extrabold ${
                    plan.highlighted ? "text-primary" : "text-navy"
                  }`}
                >
                  {plan.price}
                </div>
                <div
                  className={`text-xs mt-1 ${
                    plan.highlighted ? "text-slate-400" : "text-slate-400"
                  }`}
                >
                  {plan.priceNote}
                </div>
              </div>

              <ul className="space-y-3 mb-8 flex-1">
                {plan.features?.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <Check
                      strokeWidth={1.5}
                      className={`h-5 w-5 shrink-0 ${
                        plan.highlighted ? "text-primary" : "text-green-600"
                      }`}
                    />
                    <span
                      className={
                        plan.highlighted ? "text-slate-200" : "text-slate-600"
                      }
                    >
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <TapLink
                href="https://www.facebook.com/groups/ai91.vn"
                target="_blank"
                className={`h-12 px-6 rounded-lg font-bold text-sm flex items-center justify-center transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 ${
                  plan.highlighted
                    ? "bg-primary text-white hover:bg-primary/90 shadow-lg shadow-primary/20"
                    : "bg-navy text-white hover:bg-navy/90"
                }`}
              >
                {plan.ctaLabel}
              </TapLink>
            </motion.div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
