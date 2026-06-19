"use client";

import Link from "next/link";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import type { ComponentProps, ReactNode } from "react";

/** Spring chuẩn dự án — nảy nhẹ, không tuyến tính cứng nhắc. */
const SPRING = { type: "spring", stiffness: 300, damping: 28, mass: 0.6 } as const;
const TAP_SPRING = { type: "spring", stiffness: 400, damping: 25, mass: 0.5 } as const;

/**
 * Reveal: fade + slide-up khi cuộn vào viewport (chỉ chạy 1 lần).
 * Tôn trọng `prefers-reduced-motion` → chỉ fade, bỏ trượt.
 */
export function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? { opacity: 0 } : { opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={reduce ? { duration: 0.35 } : { ...SPRING, delay }}
    >
      {children}
    </motion.div>
  );
}

/**
 * RevealGroup: container stagger — các `RevealItem` con xuất hiện lệch nhau
 * khi cuộn vào viewport, tạo nhịp điệu cho lưới/danh sách.
 */
export function RevealGroup({
  children,
  className,
  stagger = 0.08,
}: {
  children: ReactNode;
  className?: string;
  stagger?: number;
}) {
  const reduce = useReducedMotion();
  const container: Variants = {
    hidden: {},
    show: { transition: { staggerChildren: reduce ? 0 : stagger } },
  };
  return (
    <motion.div
      className={className}
      variants={container}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

/** Phần tử con của RevealGroup — kế thừa trạng thái hidden/show từ container. */
export function RevealItem({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const reduce = useReducedMotion();
  const item: Variants = reduce
    ? { hidden: { opacity: 0 }, show: { opacity: 1 } }
    : {
        hidden: { opacity: 0, y: 24 },
        show: { opacity: 1, y: 0, transition: SPRING },
      };
  return (
    <motion.div className={className} variants={item}>
      {children}
    </motion.div>
  );
}

const MotionLink = motion.create(Link);

/**
 * TapLink: Next Link có phản hồi xúc giác `whileTap` cho Mobile,
 * tùy chọn Hover Lift trên PC. Tự tắt khi giảm chuyển động.
 */
export function TapLink({
  hoverLift = false,
  ...props
}: ComponentProps<typeof MotionLink> & { hoverLift?: boolean }) {
  const reduce = useReducedMotion();
  return (
    <MotionLink
      {...props}
      whileTap={reduce ? undefined : { scale: 0.96 }}
      whileHover={reduce || !hoverLift ? undefined : { y: -4 }}
      transition={TAP_SPRING}
    />
  );
}
