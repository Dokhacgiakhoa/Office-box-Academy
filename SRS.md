# SOFTWARE REQUIREMENTS SPECIFICATION (SRS)
*Dự án: Office Box Academy (AI E-Learning & B2B Lead Gen Portfolio)*

## 1. Giới thiệu (Introduction)
- **Mục đích**: Office Box Academy không chỉ là một nền tảng học AI miễn phí cho dân văn phòng, mà còn là một phễu Marketing (Funnel) và Portfolio chuyên nghiệp để chốt sale các dịch vụ B2B (tư vấn, triển khai hệ thống AI cho doanh nghiệp).
- **Kiến trúc dữ liệu tĩnh**: 100% dữ liệu (Khóa học, Sự kiện, Tool, Projects) được Hardcode trực tiếp bằng TypeScript Object (`src/data/`). Không sử dụng Backend hay Database (SQL/NoSQL) để đảm bảo tốc độ Load siêu tốc, bảo mật tuyệt đối và chi phí Hosting bằng 0 (triển khai tĩnh lên Vercel/Netlify).

## 2. Định vị 2 hướng người dùng (User Tiers)
Hệ thống loại bỏ hoàn toàn khái niệm "Chuyên viên / Chuyên gia" dễ gây nhầm lẫn, thay bằng 2 hướng tiếp cận thực tế:

1. **Hướng AIOffice (Ứng dụng ngay)**
   - **Mục tiêu**: Tối ưu hóa công việc văn phòng hằng ngày (Marketing, Kế toán, Nhân sự).
   - **Hành động**: Dùng trực tiếp các tool AI có sẵn (Gemini, ChatGPT, Canva AI, Bananaa, VEO 3...).
   - **Quyền lợi**: Học miễn phí 100% ngay trên website (xem video YouTube nhúng).

2. **Hướng VibeCoding (Đào sâu & Tự build)**
   - **Mục tiêu**: Xây dựng hệ thống tự động hóa, build web/app, thiết lập đội ngũ AI Agent.
   - **Hành động**: Sử dụng các công cụ Lập trình AI (Cursor, Stitch, Claude, Antigravity, Google AI Studio).
   - **Quyền lợi**: Website chỉ mang tính giới thiệu Syllabus (đề cương). Học viên phải đăng ký qua Form (trả phí hoặc đào tạo Offline/Zoom riêng).

## 3. Yêu cầu tính năng cốt lõi (Functional Requirements)

### 3.1. Phân hệ AIOffice (Học miễn phí)
- Giao diện dạng Lưới (Grid) các khóa học.
- Bấm vào sẽ vào trang chi tiết, có Sidebar danh sách bài học và Video Player (YouTube embed).
- Chuyển bài mượt mà không load lại trang.

### 3.2. Phân hệ VibeCoding (Phễu bán hàng)
- Hiển thị 3 lộ trình cốt lõi: 
  1. Khóa Antigravity
  2. Khóa Claude
  3. Khóa Ulti Agent
- Khi click vào chi tiết, Nút "Vào học" sẽ đổi thành "Đăng ký nhận tư vấn" hoặc "Mua khóa học". Không có video học miễn phí.

### 3.3. Phân hệ B2B Lead Generation
- Trang chủ (Homepage) và Trang dự án (Projects) phải có các Form thu thập thông tin Khách hàng Doanh nghiệp.
- Khi người dùng Submit Form:
  - Hiển thị màn hình Success/Thank You.
  - Tương lai sẽ tích hợp API bắn data về Google Sheets / Telegram / Zalo ZNS.

## 4. Yêu cầu Phi chức năng (Non-Functional Requirements)
- **Framework**: Next.js 14+ (App Router), React 18.
- **Styling**: Tailwind CSS + Shadcn UI (Radix UI primitives).
- **Icons**: `lucide-react`. Dùng SVG nguyên bản hoặc thẻ `<img>` gọi link ngoài đối với logo thương hiệu.
- **Responsive**: Mobile-First là bắt buộc. Mọi Component phải kiểm tra hiển thị trên màn hình nhỏ.
- **Cấm Inline Function ở Server Component**: Các Component chứa thẻ `<img>` lỗi hay cần xử lý event `onClick` bắt buộc phải đưa ra Client Component (`"use client"`) hoặc xử lý gọn gàng bằng CSS fallback để tránh Runtime Error (đã từng xảy ra).

## 5. Quy trình phối hợp AI (AI Agent Orchestration)
- **Claude (Developer)**: Chịu trách nhiệm viết code Logic, Routing, UI Components theo chuẩn Shadcn và Tailwind.
- **Gemini (PM/BA/QA/Image Designer)**: Chịu trách nhiệm thiết kế logic (file này), kiểm thử (Review code Claude), tìm lỗi chống sập trang (Anti-Crash), và vẽ ảnh Placeholder sinh động để cung cấp cho Claude nhúng vào source code. 

**Tuyệt đối tuân thủ**: Mọi task lập trình (Phase) phải được đưa vào `TASK_BOARD.md` và tuân theo luồng `WORKFLOW.md` để 2 AI không dẫm chân lên nhau.
