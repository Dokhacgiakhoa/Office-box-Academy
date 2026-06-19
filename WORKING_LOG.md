# 📝 BIÊN BẢN LÀM VIỆC (WORKING LOG & MINUTES)

Tài liệu này đóng vai trò như một "nhật ký công trường", dùng để lưu trữ các quyết định quan trọng của Leader, ghi nhận lịch sử thay đổi kiến trúc (Changelog), và đặc biệt là lưu trữ các **Biên bản nghiệm thu** (Acceptance Records) giữa Gemini (QA) và Claude (Dev).

---

## 📅 [18/06/2026] - Biên bản Khởi tạo & Chốt Kiến trúc
* **Thành phần**: Leader (Project Sponsor), Gemini (PM/BA/QA/Tester).
* **Quyết định cốt lõi**:
  1. **Mục tiêu**: Xây dựng web phổ cập kiến thức và khóa học AI cho đối tượng không chuyên (Beginners).
  2. **Vận hành**: Dự án dành cho cá nhân quản lý (Solo Admin), loại bỏ các yêu cầu phân quyền phức tạp.
  3. **Lưu trữ Media**: 100% video khóa học sử dụng YouTube Embed (chế độ Unlisted) để tối ưu chi phí và tốc độ tải.
  4. **Kiến trúc (Tech Stack)**: Chốt sử dụng cấu trúc Monolithic Full-stack với **Next.js (App Router)**, **PostgreSQL**, **Prisma** và **Tailwind CSS**.
* **Hồ sơ tài liệu ban hành**: Đã chốt và khóa sổ các tài liệu `REQUIREMENTS.md`, `ARCHITECTURE.md`, `TASK_BOARD.md`, `CLAUDE.md`, `GEMINI.md`, `WORKFLOW.md`.
* **Action Item**: Chờ Claude khởi tạo Codebase theo TASK_BOARD (Giai đoạn 1).

---

## 📅 [18/06/2026] - Biên bản Nghiệm thu Giai đoạn 1
* **Bên bàn giao (Dev)**: Claude
* **Bên kiểm duyệt (QA)**: Gemini
* **Hạng mục kiểm tra**: Cấu trúc thư mục Next.js, Kết nối Database Prisma, Cấu hình UI Library (Tailwind/Shadcn).
* **Nhận xét của QA**: Codebase sạch sẽ, cấu trúc file đúng chuẩn ARCHITECTURE.md. Đã cài đặt đúng Prisma 7 và `@prisma/adapter-pg`. Singleton `prisma.ts` viết rất tốt (có phòng thủ rò rỉ bộ nhớ bằng `globalThis` và bắt lỗi `undefined`).
* **Lỗi phát hiện (Bugs/Crash risk)**: Không có lỗi.
* **KẾT LUẬN**: `[ PASS ]` - Đủ điều kiện sang Giai đoạn 2.

### Đã hoàn thành
1. **Next.js**: Khởi tạo Next.js 16.2.9 (App Router) + TypeScript + Tailwind CSS v4, cấu trúc `/src`, import alias `@/*`.
2. **Cấu trúc thư mục** (theo `ARCHITECTURE.md`): `src/app/(public)`, `src/app/(admin)`, `src/components/ui`, `src/lib`, `src/lib/auth`, `src/actions`. Các thư mục chưa dùng có `.gitkeep` kèm ghi chú giai đoạn triển khai.
3. **Shadcn/UI**: Init preset `base-nova` (dùng `@base-ui/react`), baseColor `neutral`. Đã thêm component: `button, card, input, label, badge, separator`. Tùy biến brand Office Box: `--primary` = Cam, `--accent` = Xanh (cả light & dark mode) trong `globals.css`.
4. **Prisma + PostgreSQL**: Prisma 7.8.0, generator `prisma-client` (output `src/generated/prisma`), provider `postgresql`. **Lưu ý quan trọng**: Prisma 7 bắt buộc dùng *driver adapter* → đã cài `@prisma/adapter-pg` + `pg`. Singleton tại `src/lib/prisma.ts` (cache globalThis chống cạn connection pool khi hot-reload).
5. **Cấu hình**: `prisma.config.ts` (đọc `.env` qua dotenv), `.env` (placeholder), `.env.example` (tài liệu), npm scripts `db:generate/db:push/db:migrate/db:studio`, `postinstall: prisma generate`.

### Tự kiểm thử (Self-test)
* `npm run build` → ✅ PASS (compiled + TypeScript type-check OK, prerender 4 trang).
* `npm run lint` → ✅ PASS (0 lỗi).
* Schema Prisma hiện **chưa có model** (Admin/Course/Chapter/Lesson thuộc Giai đoạn 2) — đúng phạm vi Giai đoạn 1.

### Cần Leader/Gemini lưu ý
* **Chưa có DB thật**: `DATABASE_URL` mới là placeholder. Cần cấp 1 PostgreSQL (Supabase/Neon/Vercel) rồi điền vào `.env` trước khi chạy `db:migrate` ở Giai đoạn 2.
* Prisma 7 dùng driver adapter `@prisma/adapter-pg` (ngoài 2 lib này là yêu cầu kỹ thuật bắt buộc của Prisma 7, không phát sinh lib core khác).

---

## 📅 [18/06/2026] - BIÊN BẢN PIVOT KIẾN TRÚC (QUAN TRỌNG)
* **Thành phần**: Leader, Gemini (PM/BA/QA)
* **Quyết định cốt lõi**: HỦY BỎ KIẾN TRÚC DATABASE (Prisma/PostgreSQL). Chuyển sang sử dụng **Hardcoded/Static Data** tại thư mục `src/data/`. Việc cập nhật bài học sẽ được thực hiện trực tiếp thông qua việc sửa file code.
* **Hành động đã thực thi**: 
  - Đã xóa sạch thư mục `prisma` và gỡ bỏ toàn bộ thư viện liên quan (`@prisma/client`, `next-auth`).
  - Đã đập đi xây lại `ARCHITECTURE.md` và `TASK_BOARD.md` theo cấu trúc Static Data.
* **Kết luận đối với Báo cáo Nghiệm thu Giai đoạn 1 cũ**: Bản báo cáo `NGHIEM_THU_GIAI_DOAN_1.md` hiện tại đã **LỖI THỜI (DEPRECATED)** vì nó dựa trên kiến trúc cũ. Claude cần nhận nhiệm vụ mới theo `TASK_BOARD.md` hiện tại.

---

## 📅 [18/06/2026] - BIÊN BẢN NGHIỆM THU GIAI ĐOẠN 2
* **Bên bàn giao (Dev)**: Claude
* **Bên kiểm duyệt (QA)**: Gemini
* **Hạng mục kiểm tra**: UI Trang chủ (Homepage) và tái cấu trúc Component.
* **Nhận xét của QA**: 
  - Đã xuất sắc tái cấu trúc `page.tsx` nháp thành 6 Server Components chuyên biệt (`site-header.tsx`, `hero-section.tsx`, v.v.).
  - Tuân thủ tuyệt đối quy định chống Crash (Dùng `??` và `?.` cẩn thận).
  - Đã dọn dẹp sạch sẽ các tàn dư của Prisma/PostgreSQL cũ để ngăn chặn lỗi build.
* **KẾT LUẬN**: `[ PASS ]` - Đủ điều kiện sang Giai đoạn 3.

---

## 📅 [18/06/2026] - BIÊN BẢN NGHIỆM THU GIAI ĐOẠN 3
* **Bên bàn giao (Dev)**: Claude
* **Bên kiểm duyệt (QA)**: Gemini
* **Hạng mục kiểm tra**: Dynamic Route Trang Chi Tiết Nghề Nghiệp (`/role/[id]`).
* **Nhận xét của QA**: 
  - Đã xuất sắc xử lý `await params` theo đúng chuẩn Next.js 16.
  - Tư duy Component hóa tốt (Tách `getProfessionIcon` và tái sử dụng `course-card.tsx`).
  - Điểm cộng tuyệt đối cho việc xử lý UX ở các trường hợp biên: Hiển thị trang NotFound thân thiện khi sai URL, hoặc hiển thị "Đang cập nhật" nếu nghề nghiệp chưa có khóa học.
* **KẾT LUẬN**: `[ PASS ]` - Đủ điều kiện sang Giai đoạn 4.

---

## 📅 [18/06/2026] - BIÊN BẢN NGHIỆM THU GIAI ĐOẠN 4 & CHỐT MVP
* **Bên bàn giao (Dev)**: Claude
* **Bên kiểm duyệt (QA)**: Gemini
* **Hạng mục kiểm tra**: Dynamic Route Trang Xem Khóa Học (`/course/[id]`) và Chốt toàn bộ hệ thống MVP.
* **Nhận xét của QA**: 
  - Kỹ thuật phân tách Client Component / Server Component ở phần Video Player rất xuất sắc, đem lại UX chuyển bài học siêu mượt (không bị reload trang).
  - Tái sử dụng được `NotFoundState` cho cả 2 trang, giúp code gọn hơn.
  - Xử lý tốt giao diện 2 cột (Video bên trái, Syllabus bên phải), có tính Responsive cao (trên mobile tự động đổi thành layout 1 cột dọc).
* **KẾT LUẬN CUỐI CÙNG**: `[ PASS ALL ]` - Cấu trúc Static Data, UI, Routing của MVP "Office Box Academy" đã hoàn thiện 100% theo đúng `TASK_BOARD`. Dự án sẵn sàng đưa vào sử dụng thực tế (Chỉ cần Leader thay ID Video thật vào `courses.ts`).
# 📋 BÁO CÁO NGHIỆM THU — GIAI ĐOẠN 5: Tinh chỉnh UI (bám sát UI_MASTER_PLAN.md)

- **Người thực hiện**: Claude (Lead Developer)
- **Người nghiệm thu**: Gemini (QA / Tester)
- **Ngày báo cáo**: 2026-06-18
- **Trạng thái**: ✅ Hoàn thành — Đã căn chỉnh 100% theo Design System của Gemini

---

## 1. Phạm vi

Thực thi Giai đoạn 5 **bám sát file `UI_MASTER_PLAN.md`** (Design System Gemini vừa bổ sung). Đây là bản căn chỉnh lại so với lần làm trước (vốn dựa trên cảm nhận / màu HEX tự lấy).

## 2. Đối chiếu & Căn chỉnh theo Master Plan

| Mục Plan | Yêu cầu | Đã áp dụng |
|----------|---------|-----------|
| §3 Màu Primary | `oklch(0.68 0.19 47)` | ✅ `globals.css` (build convert → `#f16a00`) |
| §3 Màu Navy | `oklch(0.20 0.05 250)` (đậm gần đen) | ✅ (→ `#03172c`), dùng cho H1/H2 |
| §3 Accent | nền cam sáng `oklch(0.95 0.05 47)` | ✅ |
| §2 Typography H1 | `text-4xl`→`5xl`, weight 800 | ✅ Hero/Role/Course H1 = `text-5xl font-extrabold` (bỏ `6xl`/`font-black`) |
| §2 Typography H2 | `text-3xl`, weight 700 | ✅ Section H2 = `text-3xl font-bold` |
| §2 Typography H3 | `text-xl`, weight 600 | ✅ Card H3 = `text-xl font-semibold` |
| §4.1 Primary Button | hover `-translate-y` + `shadow-primary/20`, active `scale-95` | ✅ |
| §4.1 Secondary Button | chữ Navy, hover `bg-slate-100` | ✅ |
| §4.2 Cards | `rounded-2xl`, `border-slate-100/50`, hover `-translate-y-1` + `shadow-slate-200/50` | ✅ Profession + Course Card |
| §5.1 Header | `bg-white/90 backdrop-blur-md` | ✅ (đã dùng logo ảnh `/logo.png`) |
| §5.1 Hero | `min-h-[35rem]`, 2 cột, thẻ AI bay | ✅ |
| §5.2 Role Hero | nền Gradient nhẹ + "Lộ trình AI cho [nghề]" | ✅ |
| §5.2 Course Card | Thumbnail 16:9 + **Badge tên Tool** | ✅ (badge ChatGPT/Claude… từ `targetToolIds`) |
| §5.3 Course Page | bố cục siêu rộng `max-w-[90rem]`, 8:4, syllabus sticky, bài đang xem `bg-primary/5` + cam | ✅ |

## 3. File đã thay đổi
- `src/app/globals.css` — màu primary/navy/accent theo oklch của plan.
- `src/components/home/hero-section.tsx` — H1 cap 5xl, button spec, `min-h-[35rem]`.
- `src/components/home/profession-grid.tsx` — H2/H3 weight, card spec.
- `src/components/home/ai-ecosystem-section.tsx` — H2 weight.
- `src/components/course/course-card.tsx` — card spec + **Badge Tool** (lookup từ `tools.ts`).
- `src/components/role/role-hero.tsx` — gradient + tiêu đề "Lộ trình AI cho […]".
- `src/app/course/[id]/page.tsx` — `max-w-[90rem]`.
- `src/components/layout/site-header.tsx` — header `bg-white/90 backdrop-blur-md`.
- `not-found-state.tsx`, `course-player.tsx`, `role/[id]/page.tsx` — đồng bộ weight heading.

## 4. Kiểm thử (KHÔNG xóa `.next` để tránh làm hỏng dev server đang chạy)
```
npx tsc --noEmit        →  0 lỗi
HTTP / , /role/* , /course/*  →  200 OK
CSS phục vụ: --primary=#f16a00 (=oklch 0.68 0.19 47), --navy=#03172c (=oklch 0.2 0.05 250),
             font-inter, max-width:90rem, rounded-2xl, shadow-slate-200 — đều có mặt.
```

## 5. Lưu ý cho QA (Gemini)
- Màu hiển thị dạng `oklch` trong source nhưng trình build (Lightning CSS) tự sinh fallback `hex/lab` → trình duyệt cũ vẫn đúng màu.
- Navy theo plan rất đậm (gần đen) — đúng mô tả "gần như đen tuyền"; nếu muốn nhạt hơn xin chỉnh `--navy` ở `globals.css`.
- Đề nghị mở `localhost:3000` (Ctrl+Shift+R) đối chiếu trực quan với Master Plan.

---
> **Toàn bộ Giai đoạn 5 đã bám sát UI_MASTER_PLAN.md.** Sẵn sàng để Gemini review.
# 📋 BÁO CÁO NGHIỆM THU — GIAI ĐOẠN 6: Hệ thống 2-Tier (Chuyên viên vs Chuyên gia)

- **Người thực hiện**: Claude (Lead Developer)
- **Người nghiệm thu**: Gemini (QA / Tester)
- **Ngày báo cáo**: 2026-06-18
- **Trạng thái**: ✅ Hoàn thành — Sẵn sàng Code Review

---

## 1. Phạm vi

Bổ sung phân hạng người dùng 2-Tier và tính năng Toggle/Tabs lọc nội dung theo cấp độ.

## 2. Hạng mục đã hoàn thành (Theo TASK_BOARD)

| # | Hạng mục | Trạng thái |
|---|----------|------------|
| 1 | Data Model: thêm `tier` + cập nhật mock data | ✅ |
| 2 | UI Trang Chủ: Client Component `TierToggle` dưới Hero | ✅ |
| 3 | UI Trang Nghề: 2 Tabs (Ứng dụng ngay / Đào sâu & Tự build) | ✅ |
| 4 | Luồng kết nối: toggle → grid re-render + filter + animation | ✅ |

## 3. Định nghĩa Tier

Tạo file dùng chung `src/data/tiers.ts`:
- `type Tier = "SPECIALIST" | "EXPERT"`
- **SPECIALIST** = "Chuyên viên · Ứng dụng ngay" — dùng AI có sẵn để tăng tốc công việc.
- **EXPERT** = "Chuyên gia · Đào sâu & Tự build" — tự xây dựng giải pháp AI.
- `tierMeta` (label/tagline/description) + `tierOrder` → dùng chung cho Toggle & Tabs (DRY).

## 4. Thay đổi Data Model

- `src/data/courses.ts`: thêm `tier: Tier` vào interface `Course`.
  - 2 khóa cũ → `SPECIALIST`.
  - **Bổ sung 2 khóa `EXPERT`** để cả 2 chế độ đều có dữ liệu:
    - `tu-build-chatbot-noi-bo` (c-level, sales)
    - `tu-dong-hoa-workflow-ai` (marketing, c-level)
- `src/data/tools.ts`: thêm `tier: Tier` vào `AiTool`; gán builder tools (Cursor, Google AI Studio, Stitch, Deepseek) → `EXPERT`, còn lại → `SPECIALIST`.

## 5. UI Components mới

| File | Loại | Vai trò |
|------|------|---------|
| `src/data/tiers.ts` | data | Type + metadata tier |
| `src/components/home/tier-toggle.tsx` | `"use client"` | Toggle 2 cấp độ dưới Hero, lọc lưới khóa học |
| `src/components/role/role-course-tabs.tsx` | `"use client"` | Tabs lọc khóa học của nghề theo tier |

- **TierToggle** (trang chủ): pill toggle `Chuyên viên / Chuyên gia`, đặt ngay dưới Hero (`page.tsx`). Đổi state → lưới `CourseCard` filter theo `course.tier`.
- **RoleCourseTabs** (trang nghề): tab gạch chân kèm **badge đếm số khóa** mỗi tier; tự chọn tab đầu tiên có dữ liệu; có empty-state riêng cho mỗi tab.
- Cả 2 tái sử dụng `CourseCard` (đã có Badge Tool từ GĐ5).

## 6. Animation (Luồng kết nối)

- Khi đổi tier, container lưới đổi `key={tier}` → React remount → **replay animation** `animate-in fade-in slide-in-from-bottom-3 duration-500` (từ `tw-animate-css`).
- Nút toggle/tab có `transition` + `active:scale-95` cho phản hồi tức thì.

## 7. Kiểm thử (KHÔNG xóa `.next` để không phá dev server đang chạy)

```
npx tsc --noEmit  →  0 lỗi
HTTP 200: / , /role/c-level , /course/tu-build-chatbot-noi-bo , /course/tu-dong-hoa-workflow-ai
Trang chủ render "Bạn muốn học theo hướng nào?" + "Chuyên viên" / "Chuyên gia"
CSS có: animate-in, fade-in, slide-in-from-bottom  → animation hoạt động
2 khóa EXPERT mới tự prerender (generateStaticParams đọc từ courses)
```

## 8. Đề xuất cho QA (Gemini)

- Trang chủ: bấm toggle Chuyên viên ↔ Chuyên gia → lưới đổi 2 khóa SPECIALIST ↔ 2 khóa EXPERT, có hiệu ứng fade/slide.
- Trang nghề `/role/c-level`: 2 tab, mỗi tab có badge số khóa; chuyển tab mượt.
- Trang nghề có thể có tab rỗng tùy nghề → kiểm tra empty-state.
- Lưu ý: `tier` trên `tools.ts` đã có trong data, hiện chưa filter trực quan ở mục Hệ sinh thái (để dành mở rộng); nếu QA muốn lọc luôn cả tools, báo lại tôi bổ sung.

---
> **Giai đoạn 6 hoàn tất.** Yêu cầu Gemini Code Review.
# 📋 BÁO CÁO NGHIỆM THU — PHASE 7: Tái cấu trúc 4 Trụ cột

- **Người thực hiện**: Claude (Lead Developer)
- **Ngày**: 2026-06-18
- **Chuyển giao cho**: Gemini (QA/Tester) — đề nghị Code Review trước khi sang Giai đoạn 8.
- **Trạng thái build**: ✅ `npx tsc --noEmit` sạch lỗi · ✅ `next build` thành công (17/17 trang prerender).

---

## 1. Tổng quan
Đã tái cấu trúc hệ thống menu và bổ sung 3 trang mới phục vụ phễu B2B với 4 trụ cột:
**AIOffice (`/`)**, **VibeCoding (`/vibecoding`)**, **Project (`/projects`)**, **Community (`/community`)**.

Tất cả tuân thủ Tech Stack (Next.js App Router, TypeScript, Tailwind, dữ liệu tĩnh `src/data`), không thêm thư viện cốt lõi, áp dụng phòng thủ dữ liệu (`?.`, `??`).

## 2. Hạng mục đã hoàn thành

### Giai đoạn 7.1 — Header & AI Office (Trang chủ)
- ✅ `src/components/layout/site-header.tsx`: 4 links mới (AIOffice / VibeCoding / Project / Community); CTA trỏ `/#professions`.
- ✅ `src/components/home/hero-section.tsx`: copywriter xoay quanh "AI Office — Miễn phí cho dân văn phòng".
- ✅ `src/components/home/profession-grid.tsx`: badge "Miễn phí" trên mỗi thẻ, nhấn mạnh tài liệu/khóa học miễn phí theo ngành.

### Giai đoạn 7.2 — VibeCoding Landing Page
- ✅ `src/app/vibecoding/page.tsx` (có `metadata` SEO).
- ✅ `src/components/vibecoding/vibe-hero.tsx`: hero chốt sale "Không cần biết code vẫn tự làm được app".
- ✅ `src/components/vibecoding/vibe-benefits.tsx`: 6 giá trị cốt lõi.
- ✅ `src/components/vibecoding/vibe-pricing.tsx`: 3 gói giá (Khởi động / Chuyên sâu / Doanh nghiệp).

### Giai đoạn 7.3 — Project Portfolio
- ✅ `src/data/projects.ts`: 6 dự án mock (đối tác, mô tả, ảnh demo, category, tech stack, demoLink).
- ✅ `src/app/projects/page.tsx`: Project Grid responsive lấy dữ liệu từ `projects.ts`.

### Giai đoạn 7.4 — Community & Schedule
- ✅ `src/app/community/page.tsx`.
- ✅ `src/components/community/social-links.tsx`: Fanpage, Group AI91, YouTube.
- ✅ `src/components/community/content-schedule.tsx`: bảng lịch nội dung tuần (responsive, cuộn ngang trên mobile).

## 3. Lưu ý kỹ thuật
- **Lucide v1.20.0 không còn icon brand** (`Facebook`, `Youtube`). Đã thay bằng icon hệ thống: Fanpage → `ThumbsUp`, YouTube → `PlaySquare`, Group → `Users`.
- **Ảnh dự án**: dùng gradient placeholder thay vì phụ thuộc file ảnh thật trong `/public/projects` → không vỡ giao diện khi thiếu ảnh. Trường `imageUrl` đã có sẵn trong data để gắn ảnh thật sau.

## 4. Đề xuất kiểm thử cho QA
1. Điều hướng 4 links header trên cả desktop & mobile.
2. Trang `/vibecoding`: kiểm tra anchor `#benefits`, `#pricing` và CTA.
3. Trang `/projects`: hiển thị đủ 6 thẻ, tech stack, responsive grid.
4. Trang `/community`: link mạng xã hội mở tab mới, bảng lịch cuộn ngang OK trên mobile.
5. Kiểm tra trạng thái rỗng (defensive) khi data trống.

> Sau khi QA pass, sẵn sàng bước sang **Giai đoạn 8: PWA & Mobile UX**.
# 📋 BÁO CÁO NGHIỆM THU — PHASE 7.5: Hoàn thiện Nội dung Trang Chủ (B2B CTA)

- **Người thực hiện**: Claude (Lead Developer)
- **Ngày**: 2026-06-18
- **Chuyển giao cho**: Gemini (QA/Tester) — đề nghị Code Review.
- **Trạng thái build**: ✅ `npx tsc --noEmit` sạch lỗi · ✅ `next build` thành công (17/17 trang).

---

## 1. Hạng mục đã hoàn thành
- ✅ `src/components/home/b2b-cta-section.tsx`: section thu thập Lead doanh nghiệp ("Đăng ký Demo AI nội bộ miễn phí"), gồm:
  - Cột nội dung: tiêu đề, mô tả nhắm Lãnh đạo/Chủ DN + 3 quyền lợi (tư vấn lộ trình, demo bảo mật, miễn phí).
  - Cột form: Họ tên (bắt buộc), Tên doanh nghiệp, SĐT/Email (bắt buộc), nút "Đăng ký Demo miễn phí".
  - Là **Client Component** (`"use client"`): sau khi submit hiển thị màn hình cảm ơn (mock, vì dự án dùng dữ liệu tĩnh — chưa có backend).
- ✅ `src/app/page.tsx`: chèn `<B2bCtaSection />` ngay trên `<SiteFooter />`.
- ✅ `src/components/home/ai-ecosystem-section.tsx`: nâng cấp copywriting tiêu đề/mô tả cho hấp dẫn hơn ("Một hệ sinh thái — Mọi công cụ AI bạn cần").

## 2. Lưu ý kỹ thuật
- Form **không gửi đi đâu** (đúng ràng buộc Tech Stack: không backend/DB). Hành vi: `preventDefault` → set state `submitted` → hiện thông báo cảm ơn. Khi có backend, chỉ cần nối API vào `handleSubmit`.
- Giữ phong cách input native styled đồng bộ với hero/header (không dùng shadcn input nhỏ h-8) để CTA nổi bật.
- Phòng thủ dữ liệu: dùng `?.` khi map danh sách quyền lợi.

## 3. Đề xuất kiểm thử cho QA
1. Trang chủ `/`: section B2B xuất hiện đúng vị trí (trên footer).
2. Submit form với trường bắt buộc trống → trình duyệt chặn (HTML `required`).
3. Submit hợp lệ → hiển thị màn hình "Đã nhận thông tin của bạn!".
4. Responsive: layout 2 cột (lg) gộp 1 cột trên mobile, form không vỡ.
5. Đọc lại copy `AiEcosystemSection` xem văn phong đã ưng ý chưa.

> Sau khi QA pass, sẵn sàng bước sang **Giai đoạn 8: PWA & Mobile UX**.
# 📋 BÁO CÁO NGHIỆM THU — PHASE 8: PWA & Mobile UX

- **Người thực hiện**: Claude (Lead Developer)
- **Ngày**: 2026-06-18
- **Chuyển giao cho**: Gemini (QA/Tester) — đề nghị Code Review.
- **Trạng thái build**: ✅ `npx tsc --noEmit` sạch lỗi · ✅ `next build` thành công (18/18 trang, thêm `/offline`).

---

## 1. Quyết định kỹ thuật quan trọng (đã được Leader duyệt)
- Yêu cầu gốc là cài `next-pwa`. Tuy nhiên dự án chạy **Next.js 16 + Turbopack**, trong khi `next-pwa` (và fork) hoạt động qua **webpack plugin** → Service Worker **không được sinh ra** khi build bằng Turbopack; bản gốc còn không hỗ trợ Next 16.
- **Leader đã chọn**: thiết lập **Service Worker thủ công** → tương thích 100% Turbopack, giữ build nhanh, không cài thư viện webpack-only. PWA cài đặt + offline chạy thật.

## 2. Hạng mục đã hoàn thành

### 8.1 — Web App Manifest + Icons + theme-color
- ✅ `public/manifest.json`: name, short_name, `display: standalone`, `start_url: /`, `theme_color: #0F172A` (Navy), `background_color: #ffffff`, categories.
- ✅ Icon từ logo: tạo `public/icon-192.png`, `public/icon-512.png` (purpose any + maskable), `public/apple-touch-icon.png`.
- ✅ `src/app/layout.tsx`: thêm `metadata.manifest`, `appleWebApp`, `icons`; thêm `export const viewport` với `themeColor`, `viewportFit: cover`.

### 8.2 — Service Worker (cache + offline)
- ✅ `public/sw.js`: precache tài nguyên cốt lõi; **Network-first** cho điều hướng (fallback cache → `/offline`); **Stale-While-Revalidate** cho tài nguyên tĩnh same-origin; bỏ qua non-GET & cross-origin; dọn cache cũ khi `activate`.
- ✅ `src/components/pwa/service-worker-register.tsx`: client component đăng ký SW, **chỉ chạy production**, bọc `try/catch`, đăng ký sau `load` để không cản first paint.
- ✅ `src/app/offline/page.tsx`: trang dự phòng khi mất mạng.

### 8.3 — Tối ưu UI/UX đa nền tảng
- ✅ `src/components/layout/site-header.tsx`: chuyển sang Client Component, **bổ sung menu hamburger + drawer mobile** (trước đây nav bị `hidden` trên mobile, không điều hướng được). Nút menu touch target 44×44, có `aria-label`/`aria-expanded`.
- ✅ `src/app/globals.css`: `scroll-behavior: smooth` + `scroll-padding-top: 4rem` (anchor không bị header sticky che), `overscroll-behavior-y: none`, tắt `-webkit-tap-highlight-color` → cảm giác native.

## 3. Lưu ý kiểm thử cho QA
1. **Cài đặt PWA**: build production (`npm run build` → `npm start`), mở Chrome → DevTools > Application > Manifest hợp lệ, nút "Install". (SW **không** chạy ở `npm run dev` theo thiết kế.)
2. **Offline**: sau khi truy cập trang chủ, bật Offline trong DevTools rồi reload → hiện trang `/offline`.
3. **Mobile menu**: thu nhỏ < 768px → hamburger hiện, mở/đóng drawer, click link tự đóng.
4. **Anchor**: bấm "Bắt đầu học ngay" (`/#professions`) → cuộn mượt, không bị header che tiêu đề.
5. **Icon**: lưu ý `icon-192/512.png` đang copy nguyên từ logo (chưa crop vuông chuẩn). Nếu cần icon maskable đẹp hơn, đề xuất thiết kế bộ icon vuông riêng ở bước sau.

> Toàn bộ Phase 8 hoàn tất. Đề nghị Gemini Code Review. Board hiện đã hết hạng mục Phase 8.
