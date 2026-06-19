import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import { courses } from "@/data/courses";
import { SiteHeader } from "@/components/layout/site-header";
import { SiteFooter } from "@/components/layout/site-footer";
import { CoursePlayer } from "@/components/course/course-player";
import { NotFoundState } from "@/components/common/not-found-state";
import { TapLink } from "@/components/motion/reveal";

interface CoursePageProps {
  params: Promise<{ id: string }>;
}

/** Prerender sẵn trang cho từng khóa học có trong dữ liệu tĩnh. */
export function generateStaticParams() {
  return courses.map((course) => ({ id: course.id }));
}

export async function generateMetadata({
  params,
}: CoursePageProps): Promise<Metadata> {
  const { id } = await params;
  const course = courses.find((c) => c.id === id);

  if (!course) {
    return { title: "Không tìm thấy khóa học" };
  }

  return {
    title: course.title,
    description: course.description,
  };
}

export default async function CoursePage({ params }: CoursePageProps) {
  const { id } = await params;
  const course = courses.find((c) => c.id === id) ?? null;

  // Giao diện NotFound thân thiện khi ID khóa học không tồn tại.
  if (!course) {
    return (
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <SiteHeader />
        <NotFoundState
          title="Không tìm thấy khóa học này"
          message="Khóa học bạn tìm có thể đã thay đổi hoặc chưa được cập nhật. Hãy khám phá các khóa học khác nhé."
          backHref="/#professions"
          backLabel="Khám phá khóa học"
        />
        <SiteFooter />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      <SiteHeader />

      <main className="flex-1 py-10 md:py-14">
        <div className="mx-auto w-full max-w-6xl px-6 sm:px-8 lg:px-10">
          <TapLink
            href="/#professions"
            className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8"
          >
            <ArrowLeft strokeWidth={1.5} className="h-4 w-4" /> Quay lại
          </TapLink>

          <CoursePlayer course={course} />
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
