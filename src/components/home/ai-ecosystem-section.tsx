"use client";

import { motion, useReducedMotion } from "framer-motion";
import { tools, type AiTool } from "@/data/tools";
import { ToolLogo } from "@/components/home/tool-logo";

/** Một viên thuốc (pill) hiển thị 1 công cụ AI trong băng chuyền. */
function ToolPill({ tool }: { tool: AiTool }) {
  return (
    <div className="flex shrink-0 items-center gap-3 rounded-xl border border-border/40 bg-white px-6 py-4 shadow-sm">
      <ToolLogo name={tool.name} logoUrl={tool.logoUrl} />
      <div>
        <div className="text-sm font-bold text-navy">{tool.name}</div>
        <div className="text-xs font-medium text-muted-foreground">{tool.category}</div>
      </div>
    </div>
  );
}

/**
 * Một hàng băng chuyền vô tận: nhân đôi danh sách rồi chạy x từ 0 → -50%
 * (vì track gồm 2 bản giống nhau) tạo vòng lặp liền mạch. Dừng khi hover.
 */
function MarqueeRow({
  items,
  reverse = false,
  duration = 32,
  reduceMotion,
}: {
  items: AiTool[];
  reverse?: boolean;
  duration?: number;
  reduceMotion: boolean | null;
}) {
  // Nhân đôi để khi cuộn hết bản 1 thì bản 2 lấp vào không bị hụt.
  const loop = [...items, ...items];

  if (reduceMotion) {
    // Giảm chuyển động: hiển thị tĩnh, cho cuộn ngang thủ công.
    return (
      <div className="flex gap-4 overflow-x-auto pb-2">
        {items.map((tool) => (
          <ToolPill key={tool.id} tool={tool} />
        ))}
      </div>
    );
  }

  return (
    <div className="group relative overflow-hidden">
      <motion.div
        className="flex w-max gap-4 group-hover:[animation-play-state:paused]"
        animate={{ x: reverse ? ["-50%", "0%"] : ["0%", "-50%"] }}
        transition={{ duration, ease: "linear", repeat: Infinity }}
      >
        {loop.map((tool, index) => (
          <ToolPill key={`${tool.id}-${index}`} tool={tool} />
        ))}
      </motion.div>
    </div>
  );
}

/**
 * Hệ sinh thái công cụ AI: trình bày dạng Marquee (băng chuyền vô tận).
 * Hàng trên chạy trái, hàng dưới chạy phải — tạo chiều sâu thị giác.
 */
export function AiEcosystemSection() {
  const reduceMotion = useReducedMotion();
  const list = tools ?? [];
  const mid = Math.ceil(list.length / 2);
  const rowTop = list.slice(0, mid);
  const rowBottom = list.slice(mid);

  return (
    <section id="ecosystem" className="border-t border-border/40 bg-white py-12 md:py-16">
      <div className="mx-auto mb-12 w-full max-w-2xl px-6 text-center sm:px-8">
        <h2 className="mb-4 text-3xl font-extrabold tracking-tight text-navy md:text-4xl">
          Một hệ sinh thái — Mọi công cụ AI bạn cần
        </h2>
        <p className="text-lg font-normal text-muted-foreground">
          Quên đi lý thuyết suông. Chúng tôi cầm tay chỉ việc để bạn làm chủ
          những công cụ AI &quot;đỉnh&quot; nhất thế giới và biến chúng thành
          trợ lý đắc lực ngay trong công việc hằng ngày.
        </p>
      </div>

      {/* Băng chuyền — fade mờ 2 mép trái/phải cho mượt mắt */}
      <div className="relative space-y-4 [mask-image:linear-gradient(to_right,transparent,#000_8%,#000_92%,transparent)]">
        <MarqueeRow items={rowTop} duration={34} reduceMotion={reduceMotion} />
        <MarqueeRow items={rowBottom} reverse duration={40} reduceMotion={reduceMotion} />
      </div>
    </section>
  );
}
