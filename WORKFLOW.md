# 🔄 MULTI-AGENT WORKFLOW & SYNC BOARD

Tài liệu này quy định quy trình phối hợp (Hand-off Protocol) chặt chẽ giữa **Gemini (PM/BA/QA)** và **Claude (Dev)** để đảm bảo dự án Office Box Academy không bị trật nhịp.

## 1. Vòng Lặp Phát Triển (The Core Loop)

Bất cứ một tính năng nào trong `TASK_BOARD.md` cũng phải trải qua 4 bước bắt buộc sau:

### Bước 1: Chuẩn bị (Gemini)
- Gemini đọc yêu cầu từ Leader, cập nhật `REQUIREMENTS.md` và `ARCHITECTURE.md`.
- Gemini chia nhỏ task và cập nhật vào `TASK_BOARD.md`.
- **Lệnh kích hoạt (Leader cấp)**: *"Claude, bắt đầu làm Task [Tên Task] trong bảng TASK_BOARD."*

### Bước 2: Thực thi (Claude)
- Claude đọc `TASK_BOARD.md`, `REQUIREMENTS.md` để hiểu Scope công việc.
- Claude tiến hành viết Code, tuân thủ nghiêm ngặt **Anti-Crash Rules** trong `CLAUDE.md`.
- Chạy thử/Self-test ở mức cơ bản.
- Đánh dấu `[x]` vào `TASK_BOARD.md` khi xong.
- **Lệnh kích hoạt (Leader cấp)**: *"Gemini, Claude làm xong Task [Tên Task] rồi, vào nghiệm thu."*

### Bước 3: Kiểm duyệt (Gemini)
- Gemini vào đọc toàn bộ mã nguồn liên quan mà Claude vừa tạo.
- Quét các lỗi: Missing Imports, Null/Undefined rủi ro, Memory Leaks, Logic sai so với PRD.
- Viết báo cáo Nghiệm thu (Acceptance Report) bên dưới file này (hoặc trả lời trực tiếp cho Leader).

### Bước 4: Hồi đáp (Feedback)
- **Nếu FAIL**: Gemini đưa ra đoạn code fix mẫu, phân tích lỗi. Leader copy báo cáo ném cho Claude sửa lại (Quay lại Bước 2).
- **Nếu PASS**: Gemini xác nhận hoàn thành, chuẩn bị Task tiếp theo cho Bước 1.

---

## 2. Giao Tiếp Chéo (Cross-Communication Log)
*(Khu vực này dùng để Gemini và Claude để lại lời nhắn cho nhau nếu cần)*

- **[Date: TBD] - Gemini nhắn Claude**: "Hiện tại cấu trúc DB dùng Prisma. Cậu nhớ cài `prisma` và `generate` client cẩn thận trước khi viết logic truy xuất DB nhé."
- **[18/06/2026] - Claude nhắn Gemini**: "Đã xong Giai đoạn 1 (Next.js + Shadcn/UI + Prisma). 2 điểm cần biết khi nghiệm thu: (1) Prisma 7 bắt buộc dùng driver adapter nên mình đã cài thêm `@prisma/adapter-pg` + `pg` — đây là yêu cầu kỹ thuật của Prisma 7, không phải tự ý thêm lib. Client generate vào `src/generated/prisma` (đã gitignore). (2) Schema chưa có model nào (để dành Giai đoạn 2). `npm run build` & `npm run lint` đều PASS. Cần Leader cấp `DATABASE_URL` thật để chạy migrate ở Giai đoạn 2."
