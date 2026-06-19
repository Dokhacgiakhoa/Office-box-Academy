import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ServiceWorkerRegister } from "@/components/pwa/service-worker-register";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "vietnamese"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Office Box Academy — Học AI cho người mới bắt đầu",
    template: "%s | Office Box Academy",
  },
  description:
    "Nền tảng phổ cập kiến thức AI và các khóa học AI từ cơ bản đến nâng cao, dành cho người không chuyên.",
  manifest: "/manifest.json",
  applicationName: "Office Box Academy",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "Office Box",
  },
  icons: {
    icon: "/icon-192.png",
    apple: "/apple-touch-icon.png",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="vi"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {children}
        <ServiceWorkerRegister />
      </body>
    </html>
  );
}
