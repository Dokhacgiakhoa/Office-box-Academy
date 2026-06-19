# 📋 BÁO CÁO NGHIỆM THU — PHASE 16: Lịch Cộng Đồng Timeline Động (Status & CTA)

**Người thực hiện:** Claude (Lead Developer)
**Ngày:** 2026-06-19
**Trạng thái:** ✅ Hoàn thành — Sẵn sàng QA (Gemini)
**Build:** `npm run build` ✓ thành công (28/28 trang, không lỗi TypeScript)

---

## Task 16.1 — Data & Status Logic
- ✅ Đổi `schedule` sang cấu trúc mới: `id, date (ISO + offset), platform, eventType (Video/Livestream/Course), topic, actionLink`.
- ✅ Dữ liệu mẫu tháng 6/2026: **4 Video** (Thứ 7 hằng tuần 14h: 06,13,20,27), **2 Livestream** (19/06 & 24/06), **2 Khai giảng** (16/06 & 26/06). Có mốc quá khứ, **1 mốc đang diễn ra** (19/06 12:00 — đúng hôm nay) và các mốc tương lai.
- ✅ Hàm `getEventStatus(dateStr, now)` so sánh với thời gian thực → `PAST` / `ONGOING` (±1 giờ) / `UPCOMING`.
- ✅ `now` lấy trong `useEffect` (sau mount) → tránh lệch hydration server/client.

## Task 16.2 — Timeline UI & Buttons
- ✅ Bỏ Grid, dựng **Vertical Timeline**: đường line dọc + dot mỗi node (màu theo trạng thái: đỏ-pulse Live / viền cam Upcoming / xám Past).
- ✅ Card mỗi node:
  - **Header:** ngày giờ VN (`Thứ Bảy, 20/06 · 14:00`) + **StatusBadge** (Past mờ opacity-60, Ongoing "🔴 Đang Live" nhấp nháy, Upcoming "Sắp diễn ra" nổi bật).
  - **Body:** Platform badge + Event Type (icon) + Topic.
  - **Footer 2 nút:** "Thêm vào Google Lịch" (chỉ `UPCOMING`, có `&dates=` giờ chính xác) + **nút đăng ký động** theo loại: Course → "Điền form Khai giảng", YouTube → "Đăng ký kênh YouTube", còn lại → "Tham gia Group" (gắn `actionLink`).
- ✅ Boxy (`rounded-xl`) + Stagger rơi từ trên xuống (`y:-16`) + `useReducedMotion` + responsive.

## Kết quả kiểm tra (screenshot)
- ✅ PAST (16/06): card mờ, "Đã diễn ra", chỉ nút đăng ký (`.screenshots/p16b-timeline.png`).
- ✅ ONGOING (19/06 12:00): dot đỏ pulse, badge "Đang Live" (`.screenshots/p16b-status.png`).
- ✅ UPCOMING (20/06): 2 nút (Thêm vào Lịch + Đăng ký), dot viền cam.

## Lưu ý
- Dữ liệu là tĩnh tháng 6/2026 để minh họa. Mốc ONGOING gắn 19/06/2026 12:00 (giờ VN) — chỉ hiển thị "Đang Live" trong khung ±1 giờ quanh thời điểm đó. Khi sang ngày khác, trạng thái tự cập nhật theo `new Date()`.

> **Bàn giao Gemini code review.**
