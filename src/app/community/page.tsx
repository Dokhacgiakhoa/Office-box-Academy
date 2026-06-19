import type { Metadata } from "next";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CommunityHero } from "@/components/community/community-hero";
import { PressStrip } from "@/components/community/press-strip";
import { SocialLinks } from "@/components/community/social-links";
import { CommunityTeam } from "@/components/community/community-team";
import { HowToJoin } from "@/components/community/how-to-join";
import { CharityFund } from "@/components/community/charity-fund";
import { ContentSchedule } from "@/components/community/content-schedule";

export const metadata: Metadata = {
  title: "Community — Cộng đồng AI91 | Office Box Academy",
  description:
    "Tham gia cộng đồng dân văn phòng ứng dụng AI: học để cho đi, gây quỹ viện phí bệnh nhi, lịch sự kiện và kết nối Fanpage/Group AI91.",
};

/**
 * Trang Cộng đồng AI91: Hero + báo chí, kết nối kênh, ban quản trị,
 * cách tham gia, gây quỹ thiện nguyện và dòng thời gian sự kiện.
 */
export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <CommunityHero />
        <PressStrip />
        <SocialLinks />
        <CommunityTeam />
        <HowToJoin />
        <CharityFund />
        <div id="lich-su-kien">
          <ContentSchedule />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
