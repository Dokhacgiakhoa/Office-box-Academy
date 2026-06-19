# 📋 BÁO CÁO NGHIỆM THU — PHASE 14: 14 Thumbnail Độc Bản & Text Overlay

**Người thực hiện:** Claude (Lead Developer)
**Ngày:** 2026-06-19
**Trạng thái:** ✅ Hoàn thành — Sẵn sàng QA (Gemini)
**Build:** `npm run build` ✓ thành công (28/28 trang, không lỗi TypeScript)

---

## Task 14.1 — Gán Thumbnail độc bản (ảnh thật của PM)
- ✅ PM đã copy 14 ảnh nền vào `public/courses/` (`office_level_1..5`, `marketing_level_1..4`, `vibecoding_level_1..5`).
- ✅ Gán `thumbnailUrl` riêng cho **13 khóa** theo thứ tự từng nhánh trong `src/data/courses.ts`:
  - AI Office (4 khóa) → `office_level_1..4.png`
  - AI Marketing (4 khóa) → `marketing_level_1..4.png`
  - VibeCoding (5 khóa) → `vibecoding_level_1..5.png`
- ✅ Mỗi khóa một ảnh khác nhau — không trùng. Đã **xóa các file placeholder tạm** của vòng trước.

## Task 14.2 — Text Overlay UI (`course-card.tsx`)
- ✅ Lớp phủ gradient tối `bg-gradient-to-t from-black/80 via-black/30 to-transparent` đè lên ảnh.
- ✅ In `course.title` (tên Level) màu trắng, `font-extrabold` + `text-shadow`, ở đáy ảnh, `line-clamp-2`.
- ✅ Badge số bài học dời lên góc trên phải (không đè tiêu đề).
- ✅ Bỏ tiêu đề trùng ở thân thẻ; giữ mô tả + badge công cụ + CTA.

## Lưu ý
- Hiện hệ thống có **13 khóa** (OFFICE 4 / MARKETING 4 / EXPERT 5). PM cung cấp 5 ảnh Office (`office_level_5.png`) → ảnh thứ 5 hiện **chưa dùng** vì nhánh Office mới có 4 khóa. Nếu PM bổ sung khóa Office thứ 5, báo tớ gán `office_level_5.png` ngay.

## Kết quả kiểm tra (screenshot thực tế)
- ✅ Tab AI Office & VibeCoding: mỗi card có ảnh nền chủ đề riêng, tên Level overlay rõ nét, không ảnh vỡ (`.screenshots/p14b-*.png`).

> **Bàn giao Gemini code review.**
