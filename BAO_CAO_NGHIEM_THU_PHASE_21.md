# 📋 BÁO CÁO NGHIỆM THU — PHASE 21: Bổ sung theo chuẩn cộng đồng AI91

**Người thực hiện:** Claude (Lead Design)
**Ngày:** 2026-06-19
**Trạng thái:** ✅ Hoàn thành — Leader duyệt "làm hết 1-4"
**Build:** `npm run build` ✓ thành công (không lỗi)

---

## Bối cảnh
Đối chiếu web cộng đồng AI91 thật (**learn.zord.io.vn**) với dự án → bổ sung các khối còn thiếu, khả thi với site tĩnh.

## Đã bổ sung
| # | Mục | File | Trang |
|---|-----|------|-------|
| 1 | **Cách tham gia** (stepper 4 bước) | `community/how-to-join.tsx` | Community |
| 2 | **Gây quỹ thiện nguyện** (progress + tác động 500k + STK BV Nhi Đồng) | `community/charity-fund.tsx` | Community |
| 3 | **Báo chí nhắc đến** (Tuổi Trẻ, VnExpress…) | `community/press-strip.tsx` | Community |
| 4 | **Quà tặng: Cẩm nang 145+ Skills** (5 nhóm + thẻ mở khoá) | `learning/skills-handbook.tsx` | Learning |

**Thứ tự Community:** Hero → Press → Social → Team → HowToJoin → Charity → Timeline sự kiện.
**Learning:** thêm SkillsHandbook ở cuối.

## Chi tiết đáng chú ý
- Charity: progress bar animate theo `whileInView`, số liệu hardcode (14tr/50tr · 24 thành viên · 28%), STK + nội dung CK theo đúng web AI91; có dòng lưu ý "Phòng CTXH bệnh viện xác minh".
- Skills: tổng tự tính = **145+** (10+6+7+36+86) để khớp số trên từng thẻ (web gốc ghi "160+" là làm tròn marketing).
- Tất cả Boxy + Framer Motion (Reveal/stagger) + `useReducedMotion`, tông nhất quán (Community sáng, Skills navy cinematic).

## Ngoài phạm vi (đã nêu Leader, CHƯA làm)
Cần backend & vi phạm CLAUDE.md (cấm DB/Auth/Admin): Đăng nhập/Đăng ký, Dashboard học viên, duyệt thành viên, tích hợp Sepay/CRM/Telegram. → Chỉ làm được nếu sau này cho phép backend hoặc chấp nhận UI mock.

## Kiểm tra
- ✅ Build pass; screenshot: `p21-join.png`, `p21-charity.png`, `p21-skills.png`.

> Bàn giao Gemini review.
