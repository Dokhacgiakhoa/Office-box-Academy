# 📋 BÁO CÁO NGHIỆM THU — PHASE 13 (bổ sung): Task 13.6 & 13.7

**Người thực hiện:** Claude (Lead Developer)
**Ngày:** 2026-06-19
**Trạng thái:** ✅ Hoàn thành — Sẵn sàng QA (Gemini)
**Build:** `npm run build` ✓ thành công (28/28 trang, không lỗi TypeScript)

---

## Task 13.6 — Community
- ✅ Mục **"Ban Quản Trị AI91"** + profile `@dokhacgiakhoa` (Founder & AI Architect + bio) — `community-team.tsx` (đã làm ở vòng trước).
- ✅ **Lịch nội dung dạng Calendar thật** thay cho bảng tĩnh — `content-schedule.tsx`:
  - Lưới thẻ theo ngày (calendar tuần), Boxy + stagger.
  - Mỗi mục có nút **"Thêm vào Lịch"** → link Google Calendar `action=TEMPLATE` (recurring hằng tuần, không cần Calendar ID).
  - Nút **"Theo dõi lịch chia sẻ"** ở đầu mục.

## Task 13.7 — Logo & Thumbnail
- ✅ **Fix logo Marquee** (`src/data/tools.ts`): chuyển sang logo cục bộ `/public/logos/*.png` cho GPT (sửa lỗi OpenAI bị gỡ khỏi simpleicons), Claude, Gemini, DeepSeek, Grok, Veo 3, Google AI Studio. Tool không có logo đúng thương hiệu (NotebookLM, Codex, Banana, Antigravity, Stitch) để **chữ-cái fallback** (ToolLogo có `onError` → không bao giờ hiển thị ảnh vỡ).
- ✅ **Thumbnail khóa học**: tạo 3 ảnh nhánh tên ngữ nghĩa trong `public/courses/` và gán `thumbnailUrl` theo tier (13 khóa):
  - AI Office → `/courses/ai-office.png`
  - AI Marketing → `/courses/ai-marketing.png`
  - VibeCoding → `/courses/vibecoding.png`

## ⚠️ Điểm cần Leader/Gemini biết
- **3 ảnh Gemini render KHÔNG có trên đĩa**: thư mục `.gemini/...` không chứa ảnh nào; ảnh `.jpg` ở thư mục gốc chỉ là **screenshot website officebox.vn khác**, không phải thumbnail khóa học.
  - → Tớ đã tạo tạm 3 file `ai-office.png` / `ai-marketing.png` / `vibecoding.png` (copy từ ảnh sẵn có: clevel / video_marketing / chatbot) để không vỡ ảnh và build chạy.
  - 👉 **Anh chỉ cần ghi đè 3 file này** trong `public/courses/` bằng ảnh Gemini thật là tự động cập nhật, KHÔNG phải sửa code.
- `lucide-react@1.20.0` thiếu icon thương hiệu (Facebook/Youtube/Linkedin/Twitter) — đã dùng icon thay thế ở các phần liên quan.

## Đề nghị QA kiểm tra
1. Trang chủ mục "hệ sinh thái" → Marquee logo không còn ảnh vỡ.
2. `/community` → lịch calendar bấm "Thêm vào Lịch" mở Google Calendar đúng nội dung.
3. `/learning` & trang chủ → thumbnail khóa học hiển thị theo nhánh.

> **Bàn giao Gemini code review.**
