import type { Metadata } from "next";
import { Layers } from "lucide-react";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { projects } from "@/data/projects";
import { ProjectGrid } from "@/components/project/project-grid";
import { Reveal } from "@/components/motion/reveal";

export const metadata: Metadata = {
  title: "Project — Dự án AI thực chiến | Office Box Academy",
  description:
    "Tuyển tập các dự án ứng dụng AI Office Box đã triển khai cùng đối tác: chatbot, tự động hóa nội dung, dashboard tài chính và hơn thế nữa.",
};

/**
 * Trang Portfolio: hiển thị lưới các dự án từ dữ liệu tĩnh src/data/projects.ts.
 */
export default function ProjectsPage() {
  // Số liệu tổng quan cho dải stats ở hero.
  const projectCount = projects.length;
  const partnerCount = new Set(projects.map((p) => p.partner)).size;
  const categoryCount = new Set(projects.map((p) => p.category)).size;
  const stats = [
    { value: `${projectCount}+`, label: "Dự án thực chiến" },
    { value: `${partnerCount}`, label: "Đối tác đồng hành" },
    { value: `${categoryCount}`, label: "Lĩnh vực ngành" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        {/* Tiêu đề trang */}
        <section className="bg-navy text-white py-16 md:py-24">
          <Reveal className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/20 text-primary text-sm font-semibold mb-5 ring-1 ring-primary/30">
              <Layers strokeWidth={1.5} className="h-4 w-4" />
              <span>Dự án thực chiến cùng đối tác</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-5">
              Sản phẩm AI <span className="text-primary">đã ra đời</span>
            </h1>
            <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Những giải pháp AI Office Box đã đồng hành xây dựng cùng doanh
              nghiệp — từ ý tưởng đến sản phẩm chạy thật.
            </p>

            {/* Dải số liệu */}
            <div className="mt-10 grid grid-cols-3 gap-4 max-w-xl mx-auto">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="rounded-xl border border-white/10 bg-white/5 px-3 py-4 backdrop-blur-sm"
                >
                  <div className="text-2xl md:text-3xl font-extrabold text-primary">{s.value}</div>
                  <div className="mt-1 text-xs md:text-sm font-medium text-slate-300">{s.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </section>

        {/* Lưới dự án */}
        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <ProjectGrid projects={projects} />
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
