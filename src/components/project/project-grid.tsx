"use client";

import Link from "next/link";
import {
  ArrowUpRight,
  Headset,
  Megaphone,
  BarChart3,
  Users,
  ShoppingBag,
  Workflow,
  Cpu,
} from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { RevealGroup, RevealItem } from "@/components/motion/reveal";
import type { Project } from "@/data/projects";

/** Icon đại diện theo lĩnh vực dự án (dùng cho header thẻ thay ảnh placeholder). */
function categoryIcon(category: string): typeof Cpu {
  if (category.includes("CSKH") || category.includes("Sale")) return Headset;
  if (category.includes("Marketing")) return Megaphone;
  if (category.includes("Tài chính") || category.includes("Kế toán")) return BarChart3;
  if (category.includes("Nhân sự")) return Users;
  if (category.includes("Thương mại")) return ShoppingBag;
  if (category.includes("Vận hành") || category.includes("nội bộ")) return Workflow;
  return Cpu;
}

/**
 * Lưới dự án (client) — thẻ Boxy với header gradient + icon ngành (thay placeholder
 * "gradient + chữ" cũ), Stagger khi cuộn và Hover Lift. Tách khỏi page (server)
 * để page giữ được `metadata`.
 */
export function ProjectGrid({ projects }: { projects: Project[] }) {
  const reduce = useReducedMotion();

  return (
    <RevealGroup className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {projects?.map((project) => {
        const Icon = categoryIcon(project.category ?? "");
        return (
          <RevealItem key={project.id} className="h-full">
            <motion.article
              whileHover={reduce ? undefined : { y: -6 }}
              transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}
              className="group flex h-full flex-col overflow-hidden rounded-xl border-2 border-border/40 bg-white shadow-[0_2px_0_0_rgba(15,23,42,0.06)] transition-colors duration-300 hover:border-primary/40 hover:shadow-[0_16px_40px_-14px_rgba(15,23,42,0.3)]"
            >
              {/* Header visual: gradient navy + lưới mờ + icon ngành */}
              <div className="relative aspect-video overflow-hidden bg-gradient-to-br from-navy via-navy to-[#1b2a4a]">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:1.75rem_1.75rem]" />
                <div className="absolute -bottom-6 -right-4 h-40 w-40 rounded-full bg-primary/20 blur-2xl" />
                {/* Icon ngành lớn, mờ */}
                <Icon
                  strokeWidth={1.25}
                  className="absolute right-4 bottom-3 h-24 w-24 text-white/10"
                />
                {/* Icon ngành nổi (khối cam) */}
                <div className="absolute left-4 top-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/15 text-primary ring-1 ring-primary/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110">
                  <Icon strokeWidth={1.5} className="h-6 w-6" />
                </div>
                <span className="absolute right-3 top-3 rounded-lg bg-white/90 px-3 py-1 text-xs font-bold text-navy">
                  {project.category ?? "Dự án"}
                </span>
              </div>

              {/* Nội dung */}
              <div className="flex flex-1 flex-col p-6">
                <p className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary">
                  {project.partner ?? "Đối tác ẩn danh"}
                </p>
                <h2 className="mb-2 text-lg font-extrabold leading-snug tracking-tight text-navy">
                  {project.name}
                </h2>
                <p className="mb-5 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>

                {/* Stack công nghệ */}
                <div className="mb-5 flex flex-wrap gap-2">
                  {project.techStack?.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <Link
                  href={project.demoLink ?? "#"}
                  target={project.demoLink && project.demoLink !== "#" ? "_blank" : undefined}
                  className="inline-flex items-center gap-1 text-sm font-bold text-primary transition-all group-hover:gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 rounded"
                >
                  Xem chi tiết dự án
                  <ArrowUpRight strokeWidth={1.5} className="h-4 w-4" />
                </Link>
              </div>
            </motion.article>
          </RevealItem>
        );
      })}
    </RevealGroup>
  );
}
