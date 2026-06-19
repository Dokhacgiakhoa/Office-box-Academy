import { SiteHeader } from "@/components/layout/site-header";
import { EventBanner } from "@/components/layout/event-banner";
import { SiteFooter } from "@/components/layout/site-footer";
import { HeroSection } from "@/components/home/hero-section";
import { CourseShowcaseSection } from "@/components/home/course-showcase-section";
import { ProfessionGrid } from "@/components/home/profession-grid";
import { AiEcosystemSection } from "@/components/home/ai-ecosystem-section";
import { B2bCtaSection } from "@/components/home/b2b-cta-section";

/**
 * Trang chủ Office Box Academy.
 * Bố cục được tách thành các Component độc lập tại src/components/.
 */
export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />
      <EventBanner />
      <HeroSection />
      <CourseShowcaseSection />
      <ProfessionGrid />
      <AiEcosystemSection />
      <B2bCtaSection />
      <SiteFooter />
    </div>
  );
}
