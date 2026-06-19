import Link from "next/link";
import { MapPin, Mail } from "lucide-react";

/** Cột điều hướng nhanh. */
const navCols = [
  {
    title: "Khám phá",
    links: [
      { label: "Trang chủ", href: "/" },
      { label: "Learning", href: "/learning" },
      { label: "Project", href: "/projects" },
      { label: "Community", href: "/community" },
    ],
  },
  {
    title: "Khóa học",
    links: [
      { label: "AI Office", href: "/learning" },
      { label: "AI Agent", href: "/learning" },
      { label: "VibeCoding", href: "/vibecoding" },
    ],
  },
];

const socials = [
  { name: "Facebook", href: "https://facebook.com/dokhacgiakhoa" },
  { name: "TikTok", href: "https://tiktok.com/@dokhacgiakhoa" },
  { name: "YouTube", href: "https://youtube.com/@dokhacgiakhoa" },
  { name: "Group AI91", href: "https://www.facebook.com/groups/ai91.vn" },
];

/**
 * Footer chỉn chu: thương hiệu, điều hướng, liên hệ và bản đồ chỉ đường
 * (Yên Lãng, Đống Đa, Hà Nội).
 */
export function SiteFooter() {
  return (
    <footer className="bg-navy mt-auto">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-14">
        <div className="grid gap-10 lg:grid-cols-12">
          {/* Thương hiệu */}
          <div className="lg:col-span-4">
            <div className="text-2xl font-black tracking-tight text-white mb-4">
              <span className="text-primary">OFFICE</span> BOX
            </div>
            <p className="text-slate-400 text-sm leading-relaxed mb-5 max-w-xs">
              One Box, All Solutions — Phổ cập AI cho dân văn phòng Việt. Học,
              ứng dụng và bứt phá cùng cộng đồng AI91.
            </p>
            <div className="space-y-2 text-sm text-slate-400">
              <p className="flex items-start gap-2">
                <MapPin strokeWidth={1.5} className="h-4 w-4 shrink-0 mt-0.5 text-primary" />
                Yên Lãng, Đống Đa, Hà Nội
              </p>
              <p className="flex items-center gap-2">
                <Mail strokeWidth={1.5} className="h-4 w-4 shrink-0 text-primary" />
                dokhacgiakhoa666@gmail.com
              </p>
            </div>
          </div>

          {/* Cột điều hướng */}
          {navCols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
                {col.title}
              </h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Bản đồ chỉ đường */}
          <div className="lg:col-span-4">
            <h3 className="text-sm font-bold uppercase tracking-wider text-white mb-4">
              Tìm chúng tôi
            </h3>
            <div className="overflow-hidden rounded-xl border border-white/10">
              <iframe
                title="Bản đồ Office Box — Yên Lãng, Đống Đa, Hà Nội"
                src="https://www.google.com/maps?q=Y%C3%AAn%20L%C3%A3ng,%20%C4%90%E1%BB%91ng%20%C4%90a,%20H%C3%A0%20N%E1%BB%99i&output=embed"
                width="100%"
                height="180"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="block w-full grayscale-[0.2]"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Thanh dưới: social + copyright */}
      <div className="border-t border-white/10">
        <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-slate-500 text-sm order-2 sm:order-1">
            © 2026 Office Box Academy. All rights reserved.
          </p>
          <div className="flex items-center gap-5 order-1 sm:order-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-primary transition-colors text-sm font-medium"
              >
                {social.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
