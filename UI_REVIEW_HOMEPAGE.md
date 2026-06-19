# TRANG CHỦ (HOMEPAGE) - UI/UX SPECIFICATION & REVIEW
*Tài liệu này được tạo bởi Gemini (QA/BA) để Claude dùng làm tham chiếu (Cross-check) khi kiểm tra hồi quy hoặc chỉnh sửa giao diện.*

## 1. Cấu trúc tổng thể (Layout Structure)
Trang chủ (`src/app/page.tsx`) hiện tại đang bao gồm các Section chính theo thứ tự từ trên xuống dưới:
1. `SiteHeader` (Thanh điều hướng)
2. `EventBanner` (Banner sự kiện dính phía trên)
3. `HeroSection` (Khu vực Banner chính)
4. `ProfessionGrid` (Danh sách 4 khóa học theo lộ trình)
5. `AiEcosystemSection` (Hệ sinh thái công cụ AI)
6. `B2bCtaSection` (Khu vực chốt Sale & Form Đăng ký B2B)
7. `SiteFooter` (Chân trang)

---

## 2. Mô tả chi tiết từng Component (Dành cho Claude rà soát)

### 2.1. SiteHeader & EventBanner
- **EventBanner**: Nằm sát mép trên cùng, nền xanh navy đậm (`bg-navy`), có badge "Sắp diễn ra" màu đỏ/cam, text thông báo sự kiện (ví dụ Webinar) và link đăng ký màu cam.
- **SiteHeader**: Header dính (`sticky`), nền trắng. 
  - Bên trái: Logo Office Box Academy.
  - Ở giữa: Menu 4 trụ cột (AIOffice, VibeCoding, Project, Community).
  - Bên phải: Thanh Search bar (tìm kiếm khóa học) và Nút CTA chính "Bắt đầu học ngay" (nền cam primary, bo tròn, hiệu ứng hover).

### 2.2. HeroSection
- **Layout**: 2 cột trên màn hình lớn.
- **Nội dung trái**: 
  - Badge: "AI Office — 100% Miễn phí cho dân văn phòng".
  - Tiêu đề H1: "Văn phòng AI **Miễn phí** trong tầm tay dân công sở Việt." (Chữ "Miễn phí" màu cam).
  - Cụm 2 nút: "Nhận tài liệu miễn phí" (Nền cam) và "Khám phá Công cụ" (Nền trắng viền xám).
- **Hình ảnh phải**: 
  - Ảnh minh họa nhân viên văn phòng (`/images/hero_banner.png`) bo góc 3xl (`rounded-3xl`).
  - 3 Thẻ tag bay lơ lửng xung quanh bằng hiệu ứng `animate-bounce`:
    - **✨ Gemini**: Phủ gradient xanh dương-tím (`from-blue-600 to-violet-600`), shadow màu xanh.
    - **🍌 Bananaa**: Phủ gradient vàng-cam (`from-amber-400 to-orange-500`), shadow màu cam.
    - **🎬 VEO 3**: Phủ gradient hồng-đỏ (`from-rose-500 to-pink-600`), shadow màu hồng.

### 2.3. ProfessionGrid (Khóa học lộ trình)
- Khu vực chia nghề nghiệp. Mỗi thẻ đại diện cho một mảng (Marketing, Kế toán, Nhân sự, Vận hành nội bộ).
- Giao diện: Component `CourseCard` có chứa ảnh thumbnail (tỷ lệ 16:9, có hiệu ứng zoom khi hover), logo phần mềm, tag trình độ, title và progress. Đặc biệt có tích hợp Dark Mode/Light Mode tùy ngữ cảnh, border sắc nét.

### 2.4. AiEcosystemSection (Hệ sinh thái công cụ)
- Hiển thị danh sách các công cụ AI (ChatGPT, Claude, Gemini, Canva AI, v.v.).
- Nhóm theo các Category (Core AI, Image/Video, Design, Code/Data).
- Các Tool Card hiển thị logo chính hãng (`logoUrl`), bo tròn (`rounded-full`), có shadow và border nhẹ. Nếu ảnh lỗi sẽ tự động fallback sang chữ cái đầu tiên của tên Tool. Khung the công cụ bo góc `rounded-2xl` nền xám nhạt `bg-slate-50`.

### 2.5. B2bCtaSection
- Khối CTA ở ngay trên Footer, hướng đến đối tượng Lãnh đạo/Chủ doanh nghiệp.
- **Form đăng ký**: Có các trường input cho Họ tên, Công ty, SĐT/Email. 
- Sau khi bấm Submit, khu vực form đổi thành màn hình "Cảm ơn" (Success Message).

### 2.6. SiteFooter
- Chân trang chuẩn mực với Logo, mô tả ngắn, Links (Điều khoản, Chính sách bảo mật) và Copyright.

---

## 3. Quy tắc đối chiếu (Dành cho Claude)
- **Tuyệt đối KHÔNG LÀM HỎNG**: Các hiệu ứng hover, gradient, và ảnh banner đã được Gemini căn chỉnh chuẩn xác. Đặc biệt chú ý 3 thẻ Tag bay lơ lửng trong `HeroSection`.
- **Cảnh báo Server Component**: Các Component như `AiEcosystemSection` mặc định là Server Component, không được chèn các Inline Function như `onError` hay `onClick` vào thẻ HTML thông thường nếu chưa biến file đó thành Client Component (`"use client"`).
- Mọi sự điều chỉnh lớn về mặt UI phải đối chiếu lại với file này để đảm bảo không bị sai lệch so với bản chốt nghiệm thu.
