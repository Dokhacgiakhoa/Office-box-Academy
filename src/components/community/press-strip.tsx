"use client";

import { Newspaper } from "lucide-react";
import { Reveal, RevealGroup, RevealItem } from "@/components/motion/reveal";

/** Các đầu báo đã nhắc đến trào lưu / cộng đồng (social proof). */
const press = ["Tuổi Trẻ", "VnExpress", "Báo Thanh Niên", "Khoa học Phổ thông", "Tuổi Trẻ Media"];

/**
 * Dải "Được nhắc đến trên báo" — tăng uy tín cho cộng đồng AI91.
 */
export function PressStrip() {
  return (
    <section className="border-y border-border/40 bg-white py-10">
      <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-12">
        <Reveal className="mb-6 flex items-center justify-center gap-2 text-center">
          <Newspaper strokeWidth={1.5} className="h-4 w-4 text-primary" />
          <span className="text-sm font-semibold uppercase tracking-widest text-slate-400">
            Được báo chí &amp; truyền thông nhắc đến
          </span>
        </Reveal>

        <RevealGroup className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 sm:gap-x-12" stagger={0.06}>
          {press.map((name) => (
            <RevealItem key={name}>
              <span className="text-lg font-extrabold tracking-tight text-slate-400 grayscale transition-all duration-300 hover:text-navy hover:grayscale-0 sm:text-xl">
                {name}
              </span>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}
