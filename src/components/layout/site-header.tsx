"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Search, Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/learning", label: "Learning" },
  { href: "/projects", label: "Project" },
  { href: "/community", label: "Community" },
];

/**
 * Header chính: Logo, menu điều hướng (desktop + mobile drawer) và tìm kiếm.
 */
export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-100 bg-white/90 backdrop-blur-md">
      <div className="mx-auto w-full max-w-7xl px-6 sm:px-8 lg:px-12 h-16 flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Image
              src="/logo.png"
              alt="Office Box Academy Logo"
              width={160}
              height={40}
              className="object-contain"
              priority
            />
          </Link>
          <nav className="hidden md:flex gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate-600 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <div className="hidden lg:flex relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm khóa học, công cụ..."
              className="h-10 w-64 rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
            />
          </div>
          <Link
            href="/#professions"
            className="hidden sm:flex h-10 px-6 rounded-lg bg-primary text-white font-medium text-sm items-center justify-center hover:bg-primary/90 transition-all active:scale-95 shadow-sm"
          >
            Bắt đầu học ngay
          </Link>

          {/* Nút mở menu trên mobile (touch target 44x44) */}
          <button
            type="button"
            aria-label={menuOpen ? "Đóng menu" : "Mở menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
            className="md:hidden flex h-11 w-11 items-center justify-center rounded-xl text-navy hover:bg-slate-100 active:scale-95 transition-all"
          >
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Drawer điều hướng mobile */}
      {menuOpen && (
        <div className="md:hidden border-t border-slate-100 bg-white animate-in fade-in slide-in-from-top-2 duration-200">
          <nav className="mx-auto w-full max-w-7xl px-6 py-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-xl px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}

            <div className="relative mt-2">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
              <input
                type="text"
                placeholder="Tìm khóa học, công cụ..."
                className="h-11 w-full rounded-lg border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
              />
            </div>

            <Link
              href="/#professions"
              onClick={() => setMenuOpen(false)}
              className="mt-3 h-12 rounded-lg bg-primary text-white font-bold text-base flex items-center justify-center hover:bg-primary/90 active:scale-95 transition-all shadow-sm"
            >
              Bắt đầu học ngay
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
