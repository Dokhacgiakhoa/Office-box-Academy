import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { VibeHero } from "@/components/vibecoding/vibe-hero";
import { VibeBenefits } from "@/components/vibecoding/vibe-benefits";
import { VibePricing } from "@/components/vibecoding/vibe-pricing";

export const metadata: Metadata = {
  title: "VibeCoding — Không cần biết code vẫn tự làm được app | Office Box",
  description:
    "Khóa học Vibe Coding giúp dân văn phòng biến ý tưởng thành sản phẩm thật bằng AI, không cần nền tảng lập trình.",
};

/**
 * Landing Page khóa học VibeCoding (trụ cột thu phí).
 */
export default function VibeCodingPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        <VibeHero />
        <VibeBenefits />
        <VibePricing />
      </main>
      <SiteFooter />
    </div>
  );
}
