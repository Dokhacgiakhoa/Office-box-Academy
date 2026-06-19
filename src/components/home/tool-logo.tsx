"use client";

import { useState } from "react";

/**
 * Avatar logo công cụ AI với fallback chống vỡ:
 * nếu ảnh thiếu/404 (onError) thì tự hiển thị chữ cái đầu của tên.
 */
export function ToolLogo({
  name,
  logoUrl,
}: {
  name: string;
  logoUrl?: string;
}) {
  const [failed, setFailed] = useState(false);
  const showImage = Boolean(logoUrl) && !failed;

  return (
    <div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-lg font-black text-slate-800 border border-slate-100 overflow-hidden shrink-0">
      {showImage ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={logoUrl}
          alt={name}
          className="w-full h-full object-contain p-1.5"
          onError={() => setFailed(true)}
        />
      ) : (
        <span>{name?.charAt(0) ?? "?"}</span>
      )}
    </div>
  );
}
