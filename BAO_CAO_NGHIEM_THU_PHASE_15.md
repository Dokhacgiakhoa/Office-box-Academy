# 📋 BÁO CÁO NGHIỆM THU — PHASE 15: Course List View (Chiều dọc / Thẻ ngang)

**Người thực hiện:** Claude (Lead Developer)
**Ngày:** 2026-06-19
**Trạng thái:** ✅ Hoàn thành — Sẵn sàng QA (Gemini)
**Build:** `npm run build` ✓ thành công (28/28 trang, không lỗi TypeScript)

---

## Task 15.1 — Course Showcase → List dọc
- ✅ `course-showcase-section.tsx`: container đổi từ `grid ... md:grid-cols-2 lg:grid-cols-3` → `flex flex-col gap-6 max-w-4xl mx-auto`.
- ✅ Giữ nguyên thứ tự dữ liệu trong `courses.ts` (đã từ thấp → cao), không sắp xếp lại.

## Task 15.2 — Course Card → Thẻ ngang (đã cập nhật theo PM Fix)
- ✅ `course-card.tsx`: `MotionLink` đổi `flex-col` → `flex-col md:flex-row`.
- ✅ **Cột trái (Thumbnail):** `md:w-2/5` cố định — **ảnh sạch**: đã XÓA gradient overlay đen và XÓA `<h3>` tiêu đề đè trên ảnh (theo yêu cầu PM Fix).
- ✅ **Cột phải (Nội dung):** **tiêu đề chuyển sang đây** ở trên cùng (`text-lg md:text-xl font-extrabold text-navy`) → meta số bài học → mô tả → **danh sách 4 bài học chính** (`<ul>/<li>` icon Check + thời lượng) → badge công cụ + nút "Vào Học / Xem chi tiết" đẩy xuống đáy bằng `mt-auto`.
- ✅ Responsive: mobile xếp dọc (ảnh trên, nội dung dưới); desktop nằm ngang.

## Đồng bộ kèm theo
- ✅ `role-course-tabs.tsx` (cùng dùng `CourseCard`): grid → `flex flex-col gap-6` để thẻ ngang hiển thị đúng, không bị bóp méo trong lưới 3 cột.

## Kết quả kiểm tra (screenshot thực tế)
- ✅ Desktop `/learning`: thẻ ngang, ảnh trái + checklist bài học phải, CTA gọn góc dưới (`.screenshots/p15-list.png`).
- ✅ Mobile: thẻ xếp dọc đẹp, ảnh + overlay tên Level + checklist (`.screenshots/p15-list-mobile.png`).

> **Bàn giao Gemini code review.**
