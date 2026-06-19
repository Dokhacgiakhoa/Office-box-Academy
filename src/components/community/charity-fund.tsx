"use client";

import { HandCoins, HeartPulse, Landmark, BadgeCheck, Hospital, ArrowRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { Reveal, TapLink } from "@/components/motion/reveal";

/** Số liệu quỹ (dữ liệu tĩnh — cập nhật thủ công). */
const fund = {
  members: 24,
  raised: 14_000_000,
  goal: 50_000_000,
};

const impacts = [
  "2–3 ngày thuốc kháng sinh cho một bệnh nhi",
  "Một đêm nằm viện điều trị",
  "Một phần viện phí khẩn cấp",
  "Bữa ăn dinh dưỡng cho cha mẹ chăm con",
];

const banks = [
  { name: "Vietinbank — BV Nhi Đồng 1", stk: "113000008065" },
  { name: "Vietinbank — BV Nhi Đồng 2", stk: "119000176596" },
];

const NOTE = "DONG VIEN PHI CHO BENH NHAN NGHEO";

function formatVnd(n: number): string {
  return n.toLocaleString("vi-VN") + "đ";
}

/**
 * Section Gây quỹ thiện nguyện — đặc trưng AI91: "Học để cho đi".
 * Đóng góp tối thiểu 500k vào quỹ viện phí bệnh nhi, kèm tiến độ & tác động.
 */
export function CharityFund() {
  const reduce = useReducedMotion();
  const percent = Math.min(100, Math.round((fund.raised / fund.goal) * 100));

  return (
    <section id="gay-quy" className="scroll-mt-28 py-16 md:py-24 bg-slate-50 border-t border-border/40">
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-8 lg:px-12">
        <Reveal className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-sm font-semibold mb-4">
            <HeartPulse strokeWidth={1.5} className="h-4 w-4" />
            <span>Học để cho đi</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-navy mb-4 tracking-tight">
            Đóng góp gây quỹ viện phí bệnh nhi
          </h2>
          <p className="text-lg text-muted-foreground">
            AI91 không thu học phí. Khoản đóng góp tối thiểu <strong className="text-navy">500.000đ</strong> của
            bạn được chuyển trực tiếp vào quỹ viện phí cho bệnh nhân nghèo tại Bệnh viện Nhi Đồng.
          </p>
        </Reveal>

        {/* Thẻ tiến độ quỹ */}
        <Reveal className="rounded-2xl border-2 border-border/40 bg-white p-6 sm:p-8 shadow-[0_2px_0_0_rgba(15,23,42,0.06)] mb-8">
          <div className="flex flex-wrap items-end justify-between gap-2 mb-3">
            <div>
              <div className="text-3xl font-extrabold text-primary">{formatVnd(fund.raised)}</div>
              <div className="text-sm text-muted-foreground">đã quyên góp · mục tiêu {formatVnd(fund.goal)}</div>
            </div>
            <div className="text-right">
              <div className="text-2xl font-extrabold text-navy">{fund.members}</div>
              <div className="text-sm text-muted-foreground">thành viên đóng góp</div>
            </div>
          </div>

          {/* Progress bar */}
          <div className="h-3 w-full overflow-hidden rounded-lg bg-slate-100">
            <motion.div
              className="h-full rounded-lg bg-gradient-to-r from-primary to-orange-400"
              initial={reduce ? false : { width: 0 }}
              whileInView={{ width: `${percent}%` }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 60, damping: 18 }}
              style={reduce ? { width: `${percent}%` } : undefined}
            />
          </div>
          <p className="mt-2 text-xs font-semibold text-slate-500">{percent}% chặng đường gây quỹ</p>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* 500k làm được gì */}
          <Reveal className="rounded-xl border-2 border-border/40 bg-white p-6 sm:p-7">
            <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-navy">
              <HandCoins strokeWidth={1.5} className="h-5 w-5 text-primary" /> 500.000đ làm được gì?
            </h3>
            <ul className="space-y-3">
              {impacts.map((it) => (
                <li key={it} className="flex items-start gap-2.5 text-sm text-slate-600">
                  <BadgeCheck strokeWidth={1.5} className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  <span>{it}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* Thông tin chuyển khoản */}
          <Reveal className="rounded-xl border-2 border-border/40 bg-white p-6 sm:p-7">
            <h3 className="mb-4 inline-flex items-center gap-2 text-lg font-extrabold tracking-tight text-navy">
              <Landmark strokeWidth={1.5} className="h-5 w-5 text-primary" /> Thông tin chuyển khoản
            </h3>
            <div className="space-y-3">
              {banks.map((b) => (
                <div key={b.stk} className="rounded-lg border border-border/50 bg-slate-50 p-3">
                  <p className="inline-flex items-center gap-1.5 text-sm font-semibold text-navy">
                    <Hospital strokeWidth={1.5} className="h-4 w-4 text-primary" /> {b.name}
                  </p>
                  <p className="mt-1 font-mono text-base font-bold tracking-wide text-primary">{b.stk}</p>
                </div>
              ))}
              <div className="rounded-lg bg-primary/5 px-3 py-2 text-sm">
                <span className="text-slate-500">Nội dung CK: </span>
                <span className="font-bold text-navy">{NOTE}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal className="mt-10 flex justify-center">
          <TapLink
            href="https://www.facebook.com/groups/ai91.vn"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-primary px-8 text-base font-bold text-white shadow-lg shadow-primary/25 hover:bg-primary/90 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-primary/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 transition-all duration-200"
          >
            Tôi muốn đóng góp &amp; tham gia <ArrowRight strokeWidth={1.5} className="h-5 w-5" />
          </TapLink>
        </Reveal>

        <p className="mt-4 text-center text-xs text-slate-400">
          * Mọi đóng góp được Phòng Công tác xã hội Bệnh viện tiếp nhận &amp; xác minh theo từng trường hợp.
        </p>
      </div>
    </section>
  );
}
