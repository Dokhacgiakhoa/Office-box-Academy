# PRODUCT REQUIREMENTS DOCUMENT (PRD)
**Project**: Office Box Academy
**Purpose**: Phổ cập kiến thức AI và cung cấp khóa học AI cho người mới bắt đầu.

## 1. Mục Tiêu Dự Án (Project Goals)
Xây dựng một nền tảng giáo dục trực tuyến (E-learning platform) thân thiện, dễ tiếp cận, hướng tới tệp người dùng không có nền tảng kỹ thuật/AI.
Nền tảng này đóng vai trò:
- Kênh truyền thông, phổ cập kiến thức AI cơ bản (Blog/Articles).
- Hệ thống cung cấp các khóa học AI từ cơ bản đến nâng cao (Courses).

## 2. Đối Tượng Người Dùng (Target Audience)
Dân văn phòng được chia làm 2 hướng đi rõ rệt để có lộ trình học tập phù hợp:
- **AIOffice (Ứng dụng ngay)**: Những người không có nền tảng kỹ thuật sâu. Họ chỉ cần biết cách sử dụng các ứng dụng/phần mềm AI có sẵn (như ChatGPT, Claude, Canva AI) để phục vụ ngay cho công việc hàng ngày (viết mail, làm slide, báo cáo). Lộ trình học ngắn gọn, thực chiến trong 2 giờ.
- **VibeCoding (Đào sâu / Tự build)**: Những người muốn hiểu bản chất và tự tay thiết kế/build các hệ thống ứng dụng, tự động hóa luồng công việc phức tạp thông qua AI (Ví dụ: Cursor, AI Agents, Antigravity). Lộ trình học cũng tuân thủ nguyên tắc thực chiến, không lý thuyết rườm rà.

## 3. Tính Năng Cốt Lõi (Core Features - MVP)
Dựa trên mục tiêu phổ cập kiến thức, hệ thống cần các phân hệ sau:

### 3.1. Phân hệ Khách (Guest / Unauthenticated)
- **Landing Page**: Giới thiệu về Office Box Academy, tại sao nên học AI, các khóa học nổi bật.
- **Blog/Kiến thức**: Nơi đọc các bài viết, tin tức, hướng dẫn cơ bản về AI hoàn toàn miễn phí (Tốt cho SEO).
- **Danh mục khóa học**: Xem danh sách khóa học, nội dung chi tiết (Syllabus), giảng viên, và học phí.

### 3.2. Phân hệ Học viên (Learner/Visitor)
- **Truy cập mở (Open Access)**: Khách truy cập KHÔNG CẦN đăng nhập. Website hoạt động như một thư viện kiến thức cộng đồng.
- **Khám phá Đa chiều**: Hệ thống phân loại nội dung theo 2 chiều chính:
  - **Theo Chức vụ / Nghề nghiệp**: Các khóa học được phân bổ theo đặc thù công việc thực tế (CEO, Kế toán, Marketing, Sale, Thiết kế, Hành chính nhân sự). Những khóa học nền tảng (ví dụ: Kỹ năng Prompt) sẽ được gán tag tự động cho tất cả các chức vụ để người học dễ dàng tiếp cận mà không bị rối.
  - **Theo Hệ sinh thái AI**: Lọc và xem khóa học chuyên biệt về các công cụ dẫn đầu xu hướng. Phân loại chi tiết gồm: Mô hình lõi (ChatGPT, Claude, Gemini, Grok, Deepseek), Hình ảnh/Video (Bananaa, VEO 3, CapCut, Canva AI), và Lập trình/Dữ liệu (Cursor, Google AI Studio, Stitch). Mỗi công cụ sẽ có trang đích riêng biệt hỗ trợ SEO.
- **Định vị Nền tảng (Marketing Funnel & Directory)**: Khẳng định rõ: Đây **KHÔNG PHẢI** là hệ thống E-learning phức tạp. Đây là một trang Web Giới Thiệu (Landing Page / Directory) kết hợp thư viện video.
  - **Tầng AIOffice (Miễn phí)**: Nhúng trực tiếp các bài học / video hướng dẫn từ YouTube để cộng đồng xem miễn phí ngay trên web.
  - **Tầng VibeCoding (Trả phí)**: **KHÔNG DẠY TRÊN WEB NÀY**. Các khóa học chuyên sâu (Build Web App, Cursor) sẽ được đào tạo trực tiếp (Offline) hoặc qua Zoom/Google Meet. Website chỉ đóng vai trò giới thiệu Syllabus (đề cương khóa học ngắn gọn) và nút Đăng Ký (dẫn link ra form) để thu thập Lead.
  - Tích hợp tính năng So sánh AI giúp người dùng dễ dàng lựa chọn công cụ phù hợp.
- **Lịch Sự Kiện & Đào Tạo**: Xem danh sách các sự kiện (Online qua Zoom hoặc Offline). Khi click vào sự kiện sẽ được chuyển hướng sang Landing Page đăng ký riêng biệt.

### 3.3. Phân hệ Quản trị & Kiến trúc Hệ thống
- **Kiến trúc Tĩnh (Static Data)**: Website KHÔNG SỬ DỤNG Cơ sở dữ liệu (Database) hay Backend phức tạp. 
- **Không có Admin Panel**: Mọi nội dung (Khóa học, Sự kiện, Bài viết) được quản lý và hardcode trực tiếp vào mã nguồn dưới dạng cấu trúc dữ liệu tĩnh (TypeScript objects/JSON).
- **Cập nhật nội dung**: Khi có sự kiện hay khóa học mới, Lập trình viên (hoặc AI) sẽ trực tiếp sửa đổi source code và deploy lại. Điều này giúp hệ thống đạt tốc độ tải trang cực nhanh, tối ưu SEO tuyệt đối và loại bỏ chi phí/rủi ro vận hành Database.

## 4. Yêu Cầu Giao Diện (UI/UX)
- Thiết kế theo phong cách hiện đại, sử dụng nhiều khoảng trắng (whitespace) để người dùng không bị ngợp thông tin.
- Nếu đồng bộ với thương hiệu mẹ "Office Box", sử dụng tông màu chủ đạo từ logo (Cam/Xanh).
- Mobile-first (Tối ưu hóa hiển thị trên điện thoại di động vì người dùng phổ thông thường xuyên dùng mobile).

## 5. Cấu Trúc Dữ Liệu & Video (Data & Media)
- **Video Khóa học**: Toàn bộ video sẽ được nhúng (embed) trực tiếp từ YouTube theo yêu cầu. Điều này giúp tiết kiệm 100% chi phí lưu trữ/băng thông và tận dụng tốc độ tải của YouTube. Database chỉ cần lưu ID của video.
- **Bảo mật nội dung**: Cân nhắc đặt video YouTube ở chế độ "Không công khai" (Unlisted). Do tính chất video nhúng có thể bị chia sẻ link, nền tảng sẽ tập trung bán "trải nghiệm học tập" (Quiz, tiến độ, cấp bằng, hỏi đáp) thay vì chỉ bán video.

## 6. Lộ Trình Nâng Cấp Kỹ Thuật (Future Scaling & Agent Skills)
*Ghi chú dành cho AI (Claude/Gemini):* 
Khi dự án vượt ra khỏi phạm vi Landing Page và bước vào giai đoạn xây dựng Web App (có Logic, Database, Auth), bắt buộc **phải nạp thêm các Agent Skills** sau qua hệ thống NPM (`npx skills add` hoặc `npx mdskills install`) để tránh mất ngữ cảnh thiết kế:

1. **Xây dựng Cổng thanh toán / Bán khóa học (Billing/Checkout):** 
   👉 Sử dụng các kỹ năng chuẩn của `Stripe` (tìm trong `VoltAgent/awesome-agent-skills`) để đảm bảo form thanh toán mượt mà, tỷ lệ chuyển đổi cao.
2. **Xây dựng Hệ thống Quản trị Học tập (Admin / Student Dashboard):** 
   👉 Cài đặt `Dammyjay93/interface-design` để chuẩn hóa giao diện Dashboard theo đúng chuẩn phần mềm dạng dịch vụ (SaaS).
3. **Phục vụ tệp Khách hàng Doanh Nghiệp B2B (Enterprise Compliance):** 
   👉 Cài đặt `sickn33/radix-ui-design-system` để AI tự động code chuẩn Accessibility (ARIA labels, hỗ trợ máy đọc màn hình, điều hướng bằng phím Tab), giúp hệ thống vượt qua các vòng kiểm định chất lượng (Audit) khắt khe của doanh nghiệp lớn.
