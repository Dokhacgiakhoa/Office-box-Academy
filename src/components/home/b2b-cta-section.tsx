import { ArrowRight, Users, Sparkles, HeartHandshake, MessagesSquare } from "lucide-react";
import { Reveal, TapLink } from "@/components/motion/reveal";

/** Lý do nên tham gia cộng đồng AI91. */
const perks = [
  { icon: MessagesSquare, text: "Hỏi đáp & giải bài toán AI thực tế cùng hàng nghìn thành viên" },
  { icon: Sparkles, text: "Cập nhật công cụ, mẹo và case study AI mới nhất mỗi ngày" },
  { icon: HeartHandshake, text: "Miễn phí 100% — học hỏi, chia sẻ và kết nối cùng đồng đội" },
];

/**
 * Section giới thiệu Cộng đồng AI91 (thay cho form Lead B2B cũ).
 * Đặt ngay trước Footer, mời người dùng tham gia Group AI91.
 */
export function B2bCtaSection() {
  return (
    <section id="community-cta" className="bg-slate-50 py-12 md:py-16">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
        <Reveal className="relative overflow-hidden rounded-xl bg-navy px-6 py-12 sm:px-12 md:py-16 shadow-2xl shadow-navy/20">
          {/* Hiệu ứng nền */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:3rem_3rem] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_50%,transparent_100%)]"></div>
          <div className="absolute -top-20 -right-10 h-72 w-72 rounded-lg bg-primary/30 blur-[120px]"></div>

          <div className="relative z-10 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* Cột nội dung */}
            <div className="text-white">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm font-semibold mb-5 ring-1 ring-primary/30">
                <Users strokeWidth={1.5} className="h-4 w-4" />
                <span>Cộng đồng AI91</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-extrabold leading-tight mb-4 tracking-tight">
                Tham gia <span className="text-primary">Cộng đồng AI91</span>
              </h2>
              <p className="text-slate-300 text-lg leading-relaxed mb-8 max-w-xl">
                Nơi hàng nghìn dân văn phòng Việt cùng nhau học hỏi, ứng dụng AI
                vào công việc và chia sẻ kinh nghiệm mỗi ngày. Tham gia để không
                bao giờ lạc hậu trong kỷ nguyên AI.
              </p>

              <ul className="space-y-3">
                {perks?.map((perk) => {
                  const Icon = perk.icon;
                  return (
                    <li key={perk.text} className="flex items-center gap-3">
                      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-primary/15 text-primary">
                        <Icon strokeWidth={1.5} className="h-4 w-4" />
                      </span>
                      <span className="text-slate-200 text-sm">{perk.text}</span>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Cột CTA */}
            <div className="rounded-xl bg-white/5 border border-white/10 p-6 sm:p-8 backdrop-blur-sm text-center">
              <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-lg bg-primary/15 text-primary">
                <Users strokeWidth={1.5} className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-extrabold text-white mb-2">
                Hơn 9.000+ thành viên đang chờ bạn
              </h3>
              <p className="text-slate-300 text-sm mb-6 max-w-sm mx-auto">
                Group hoàn toàn miễn phí trên Facebook. Tham gia ngay hôm nay để
                bắt đầu hành trình làm chủ AI cùng cộng đồng.
              </p>
              <TapLink
                href="https://www.facebook.com/groups/ai91.vn"
                target="_blank"
                rel="noopener noreferrer"
                className="h-12 w-full rounded-lg bg-primary text-white font-bold text-base flex items-center justify-center gap-2 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-primary/20 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 transition-all duration-200"
              >
                Tham gia Cộng đồng AI91 <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
              </TapLink>
              <p className="text-xs text-slate-400 mt-4">
                Tham gia miễn phí · Không spam · Hủy bất cứ lúc nào
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
