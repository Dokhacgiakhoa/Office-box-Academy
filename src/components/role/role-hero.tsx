import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import type { Profession } from "@/data/professions";
import { getProfessionIcon } from "@/lib/profession-icons";
import { Reveal } from "@/components/motion/reveal";

/**
 * Hero section cho trang chi tiết nghề nghiệp: Icon, tên nghề và đoạn giới thiệu.
 */
export function RoleHero({ profession }: { profession: Profession }) {
  const Icon = getProfessionIcon(profession.iconName);

  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-white to-accent/40 border-b border-slate-100 pt-12 md:pt-16 pb-16 md:pb-20">

      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 relative z-10">
        <Link
          href="/#professions"
          className="inline-flex items-center gap-2 text-sm font-medium text-slate-500 hover:text-primary transition-colors mb-8"
        >
          <ArrowLeft strokeWidth={1.5} className="h-4 w-4" /> Tất cả ngành nghề
        </Link>

        <Reveal className="flex flex-col md:flex-row md:items-center gap-6 max-w-3xl">
          <div className="w-20 h-20 shrink-0 bg-primary/10 rounded-xl flex items-center justify-center text-primary">
            <Icon strokeWidth={1.5} className="h-10 w-10" />
          </div>
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-primary/10 text-primary text-xs font-semibold mb-3">
              Lộ trình học theo ngành
            </div>
            <h1 className="text-3xl md:text-4xl font-extrabold text-navy tracking-tight mb-3">
              Lộ trình AI cho{" "}
              <span className="text-primary">{profession.name}</span>
            </h1>
            <p className="text-lg text-slate-600 leading-relaxed">
              {profession.description}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
