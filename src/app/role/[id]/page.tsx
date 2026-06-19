import type { Metadata } from "next";
import { professions } from "@/data/professions";
import { courses } from "@/data/courses";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { RoleHero } from "@/components/role/role-hero";
import { RoleCourseTabs } from "@/components/role/role-course-tabs";
import { NotFoundState } from "@/components/common/not-found-state";

interface RolePageProps {
  params: Promise<{ id: string }>;
}

/** Prerender sẵn trang cho từng nghề nghiệp có trong dữ liệu tĩnh. */
export function generateStaticParams() {
  return professions.map((profession) => ({ id: profession.id }));
}

export async function generateMetadata({
  params,
}: RolePageProps): Promise<Metadata> {
  const { id } = await params;
  const profession = professions.find((p) => p.id === id);

  if (!profession) {
    return { title: "Không tìm thấy ngành nghề" };
  }

  return {
    title: profession.name,
    description: profession.description,
  };
}

export default async function RolePage({ params }: RolePageProps) {
  const { id } = await params;
  const profession = professions.find((p) => p.id === id) ?? null;

  // Giao diện NotFound thân thiện khi ID không tồn tại trong dữ liệu.
  if (!profession) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <SiteHeader />
        <NotFoundState
          title="Không tìm thấy ngành nghề này"
          message="Ngành nghề bạn tìm có thể đã thay đổi hoặc chưa được cập nhật. Hãy quay lại để chọn một lĩnh vực khác nhé."
          backHref="/#professions"
          backLabel="Về danh sách ngành nghề"
        />
        <SiteFooter />
      </div>
    );
  }

  // Lọc các khóa học phù hợp với nghề nghiệp hiện tại.
  const relatedCourses = courses.filter((course) =>
    course.targetRoleIds?.includes(profession.id)
  );

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />

      <main className="flex-1">
        <RoleHero profession={profession} />

        {/* COURSE GRID */}
        <section className="py-16 md:py-24">
          <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12">
            <div className="max-w-2xl mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-navy mb-3 tracking-tight">
                Khóa học AI dành cho {profession.name}
              </h2>
              <p className="text-slate-600">
                Chọn cấp độ phù hợp: ứng dụng ngay để tăng tốc công việc, hoặc
                đào sâu để tự xây dựng giải pháp AI.
              </p>
            </div>

            {relatedCourses.length > 0 ? (
              <RoleCourseTabs courses={relatedCourses} />
            ) : (
              <div className="rounded-xl border border-dashed border-slate-200 bg-slate-50 py-16 text-center text-slate-500">
                Các khóa học cho lĩnh vực này đang được cập nhật. Vui lòng quay
                lại sau nhé!
              </div>
            )}
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
