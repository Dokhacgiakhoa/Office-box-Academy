# 📋 BÁO CÁO NGHIỆM THU — PHASE 17 & 19 (Claude phụ trách)

**Người thực hiện:** Claude (Lead Developer / Lead Design)
**Ngày:** 2026-06-19
**Trạng thái:** ✅ Hoàn thành — Sẵn sàng QA
**Build:** `npm run build` ✓ thành công (không lỗi TypeScript)
*(Phase 18 — data 18 Level — do PM Gemini tự code; Claude chỉ tối ưu UI.)*

---

## Giai đoạn 17 — 3 Nhóm Kỹ Năng (`learning-roadmap.tsx`)
- ✅ 17.1: Đổi tiêu đề "3 Nhóm Kỹ Năng Cốt Lõi" + mô tả mới; layout `RevealGroup` từ flex-col → `grid grid-cols-1 md:grid-cols-3 gap-6`.
- ✅ 17.2: Card căn giữa (`flex-col items-center text-center`), bỏ số bước & mũi tên nối, icon to `h-10 w-10` trên cùng, badge số khóa, mô tả; thêm nút Ghost "Khám phá ngay" + `ArrowDown`.
- ✅ **Bonus (Lead design):** nút "Khám phá ngay" dùng hash `#office/#marketing/#expert` — `CourseShowcaseSection` lắng nghe `hashchange` để **tự chọn đúng tab + cuộn mượt** xuống danh sách khóa (kèm `scroll-mt-28`).

## Giai đoạn 19 — Grid 2 cột & PWA
- ✅ 19.1: `course-showcase-section` container → `grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto` (mobile 1 cột, PC 2 cột).
- ✅ 19.2: `course-card` chuyển về **thẻ dọc** (`flex-col` mọi màn hình) cho hợp lưới 2 cột & PWA: ảnh sạch trên, nội dung dưới (tiêu đề, số bài học, mô tả, 3 bài học chính, footer). Cả thẻ là **vùng chạm lớn** (link bao toàn thẻ — touch target tốt), font/spacing dễ đọc trên mobile.
- ✅ 19.3: 18 khóa render đúng; **badge công cụ kèm logo** (ChatGPT/Claude/n8n/Stitch...) qua chip `ToolChip` (logo `h-3.5` + tên, tự ẩn logo nếu ảnh lỗi — không vỡ).
- ✅ Đồng bộ: `role-course-tabs` đổi sang `grid md:grid-cols-2 lg:grid-cols-3` cho thẻ dọc.

## Kiểm tra (screenshot)
- `/learning`: 3 nhóm kỹ năng (`p17c-categories.png`), grid 2 cột PC (`p19-grid2.png`), mobile 1 cột (`p19-mobile.png`).

## Lead-design note
- Banner cộng đồng đã dùng đúng `/images/ai91-banner.jpg` với hero tông tối cinematic (Phase trước).
- Tớ chủ động một vài quyết định UX (hash-scroll chọn tab, thẻ dọc thay vì ngang) vì hợp lý hơn cho lưới 2 cột & PWA — đúng tinh thần "plan tham khảo".

> Bàn giao Gemini review.
