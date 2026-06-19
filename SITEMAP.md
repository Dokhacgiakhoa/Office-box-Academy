# SITE MAP DỰ ÁN OFFICE BOX ACADEMY
*Tài liệu này dùng để quy hoạch cấu trúc các trang (Pages/Routes) trong dự án Next.js.*

## 1. Hệ thống Navigation chính
- **Trang chủ (`/`)**: AIOffice (Dành cho người ứng dụng)
- **VibeCoding (`/vibecoding`)**: Dành cho người muốn tự build app/system
- **Dự án thực tế (`/projects`)**: Case study & Portfolio B2B
- **Cộng đồng (`/community`)**: Redirect ra group Facebook/Zalo

---

## 2. Cấu trúc chi tiết từng Route

### 2.1. `/` (Trang chủ / Landing Page AIOffice)
Trang chủ tập trung vào tệp người dùng phổ thông (dân văn phòng).
- **Header**: Logo, Menu 4 trụ cột, Thanh tìm kiếm, Nút CTA.
- **Event Banner**: Sticky bar thông báo sự kiện/webinar.
- **Hero Section**: Slogan, 2 nút CTA, ảnh minh họa tích hợp logo 3 công cụ (Gemini, Bananaa, VEO 3).
- **Tier Toggle**: Công tắc chuyển đổi hiển thị định vị (AIOffice vs VibeCoding). 
- **Profession Grid**: Danh sách khóa học được chia theo chuyên môn (Marketing, Kế toán, Nhân sự...).
- **AI Ecosystem**: Lưới hiển thị các logo AI tools thực tế chia theo danh mục.
- **B2B CTA**: Khối thu thập thông tin Lãnh đạo/Doanh nghiệp muốn tư vấn.
- **Footer**: Thông tin liên hệ, bản quyền.

### 2.2. `/vibecoding` (Trang chuyên sâu)
Trang dành riêng cho định vị "Tự build AI/App không cần code truyền thống".
- **Hero Section**: Mang hơi hướng công nghệ ma trận, AI Agents.
- **Khóa học trọng tâm**:
  - Khóa làm chủ Antigravity
  - Khóa triển khai dự án siêu tốc với Claude
  - Khóa xây dựng hệ thống Ulti Agent
- **CTA**: Các khóa này không dạy miễn phí trên web, nút CTA sẽ trỏ ra Landing page bán hàng riêng hoặc Form đăng ký.

### 2.3. `/projects` (Trang Portfolio B2B)
- Lưới hiển thị 6 dự án mẫu (Chatbot CSKH, Dashboard tài chính, Landing page bán hàng...).
- Mỗi project card gồm: Tên dự án, Đối tác, Thumbnail, Stack công nghệ (Tech Stack).
- Nút CTA: Trải nghiệm Demo hoặc Đăng ký triển khai cho doanh nghiệp tương tự.

### 2.4. `/courses` (Danh mục khóa học tổng hợp)
- Trang liệt kê toàn bộ khóa học hiện có trong thư mục `src/data/courses.ts`.
- Có bộ lọc (Filter) theo: Đối tượng (Role), Công cụ (Tool), Hướng đi (Tier).

### 2.5. `/courses/[id]` (Trang chi tiết & Học tập)
- Hiển thị thông tin tổng quan của khóa học.
- **Video Player**: Nhúng trực tiếp iframe từ YouTube.
- **Syllabus**: Danh sách các chương (Chapter) và bài học (Lesson) có thể bấm vào để chuyển video.

### 2.6. `/community` (Cộng đồng)
- Trước mắt có thể là một trang trung gian (Landing page nhỏ) giới thiệu về lợi ích tham gia group, sau đó bấm nút chuyển hướng sang link Group Facebook/Zalo.

---

## 3. Quy ước phát triển (Routing)
- Sử dụng chuẩn `App Router` của Next.js (`src/app/page.tsx`, `src/app/vibecoding/page.tsx`...).
- Toàn bộ dữ liệu hiển thị trên các route này được lấy từ thư mục `src/data/` (Không query database).
