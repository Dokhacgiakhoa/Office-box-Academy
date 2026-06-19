# UI/UX MASTER PLAN: OFFICE BOX ACADEMY
*(Kế hoạch Thiết kế Giao diện Chi tiết & Design System)*

Bản kế hoạch này đóng vai trò như một "Kim chỉ nam" (Design System) cho toàn bộ UI của Office Box Academy, đảm bảo sự đồng bộ, tính chuyên nghiệp và trải nghiệm người dùng (UX) đạt chuẩn SaaS/E-learning hiện đại.

## User Review Required

> [!WARNING]
> Đây là bản Master Plan chi tiết về Design System. Bạn hãy đọc kỹ các quy chuẩn về Màu sắc, Font chữ (sử dụng `rem`), và Bố cục các Section. Nếu bạn muốn điều chỉnh sắc độ màu hay thay đổi cấu trúc Section nào, hãy báo lại để tôi chốt tài liệu này trước khi code nhé!

---

## 1. Phong Cách Thiết Kế (Design Philosophy)
- **Minimalist & Content-First**: Tối giản hóa các chi tiết rườm rà. Lấy nội dung khóa học và video làm trung tâm. Sử dụng nhiều khoảng trắng (Negative Space/Whitespace) để mắt người dùng được nghỉ ngơi.
- **Glassmorphism nhẹ**: Sử dụng hiệu ứng mờ ảo (backdrop-blur) ở Header và các thẻ lơ lửng để tạo cảm giác hiện đại, có chiều sâu.
- **Modern Micro-interactions**: Mọi tương tác (hover, click) đều phản hồi mượt mà qua các animation ngắn (150ms - 300ms) như phóng to nhẹ thẻ, đổi màu nút, đổ bóng viền.

## 2. Hệ Thống Typography (Tuyệt đối sử dụng `rem`)
Chúng ta loại bỏ `px` để đảm bảo tính Trợ năng (Accessibility - a11y), giúp web tự scale text theo cấu hình trình duyệt của người dùng. `1rem = 16px` mặc định.

- **Font Family**: `Inter` (Google Fonts) - Rõ ràng, trung tính, đọc lâu không mỏi mắt.
- **Scale (Tỷ lệ)**:
  - `Display / H1`: `text-4xl` (2.25rem) đến `text-5xl` (3rem) - Font weight: 800 (Black) / 900.
  - `H2` (Tiêu đề Section): `text-3xl` (1.875rem) - Font weight: 700 (Bold).
  - `H3` (Tiêu đề Thẻ/Card): `text-xl` (1.25rem) - Font weight: 600 (SemiBold).
  - `Body Large` (Đoạn mô tả Hero): `text-lg` (1.125rem) - Font weight: 400 (Regular).
  - `Body Base` (Đoạn văn bản thường): `text-base` (1rem) - Font weight: 400.
  - `Caption / Small`: `text-sm` (0.875rem) - Dành cho badge, footer.

## 3. Bảng Màu (Color Palette)
Được trích xuất từ Logo gốc và mở rộng thành dải màu Tailwind.
- **Màu Chủ đạo (Primary - Orange)**: Màu nhận diện thương hiệu, khơi gợi sự sáng tạo và năng lượng.
  - Base: `oklch(0.68 0.19 47)` (Khoảng `#FF6600`).
  - Hover: `oklch(0.65 0.19 47)` (Tối hơn 1 chút).
  - Background sáng (dùng cho nền phụ): `oklch(0.95 0.05 47)`.
- **Màu Phụ trợ (Accent/Navy)**: Dành cho Tiêu đề chính (H1, H2) để tạo sự tương phản mạnh mẽ, trưởng thành.
  - Base: `oklch(0.20 0.05 250)` (Xanh Navy đậm, gần như đen tuyền).
- **Màu Nền & Văn bản (Neutrals)**:
  - Nền toàn trang: `bg-slate-50` (Trắng hơi ngả xám nhạt, chống chói).
  - Nền Card/Thẻ: `bg-white` (Trắng tinh khiết).
  - Chữ thường: `text-slate-600` đến `text-slate-700`.

## 4. Chi Tiết Các Component (UI Elements)

### 4.1. Nút Bấm (Buttons)
- **Primary Button**: Nền Cam, chữ Trắng, bo góc `rounded-full` (hoặc `rounded-xl`).
  - *Hover*: Đổ bóng cam nhạt `shadow-lg shadow-primary/20`, translateY lên trên `-0.125rem`.
  - *Active*: `scale-95`.
- **Secondary Button**: Nền Trắng, viền xám nhạt, chữ Xanh Navy. 
  - *Hover*: Nền xám nhạt `bg-slate-100`.

### 4.2. Thẻ Chứa (Cards - Khóa học & Nghề nghiệp)
- **Bố cục**: Góc bo `rounded-2xl` (1rem), viền cực mỏng `border border-slate-100/50`.
- **Hiệu ứng Hover**: Khi người dùng trỏ chuột, thẻ nảy lên nhẹ `hover:-translate-y-1` và đổ bóng toả ra `hover:shadow-xl hover:shadow-slate-200/50`.

---

## 5. Kiến Trúc Từng Khu Vực (Page Sections Breakdown)

### 5.1. Trang Chủ (Homepage)

**A. Top Banner & Header (`h-16` / 4rem)**
- **Event Banner**: Dải màu đen mỏng phía trên cùng `h-8` (2rem), chữ trắng nhỏ `0.875rem`, thông báo sự kiện khẩn cấp.
- **Header**: Thanh điều hướng `sticky top-0`. Chứa Logo (Image), Menu chính và Thanh Search `rounded-full`. Nền `bg-white/90 backdrop-blur-md` để nội dung cuộn bên dưới mờ ảo lộ qua.

**B. Hero Section (`min-h-[35rem]`)**
- Layout chia 2 cột.
- Cột trái: Heading khổng lồ (H1) màu Navy, nhấn mạnh các từ khóa như "AI", "Công Sở" bằng màu Cam. Đoạn giới thiệu (Body Large). 2 Nút CTA (Bắt đầu học / Xem khóa học).
- Cột phải: Khối hình ảnh nổi (Floating Image) hoặc minh họa 3D. Các thẻ Badge (Nhãn AI) bay lơ lửng xung quanh tạo độ động.

**C. Profession Grid (Nghề nghiệp)**
- Tiêu đề Section: Lớn, căn giữa. Subtitle giải thích: "Chọn đúng chuyên môn, học đúng trọng tâm".
- Lưới Grid: Mobile (1 cột), Tablet (2 cột), Desktop (3 cột).
- Mỗi thẻ: Chứa Icon Lucide to (`w-12 h-12`), Tên nghề (H3), Đoạn mô tả ngắn (Caption). 

**D. AI Ecosystem Section**
- Lưới Grid hiển thị logo/tên các công cụ AI chia theo tab hoặc nhóm (Core AI, Video, Design...).

### 5.2. Trang Chi Tiết Nghề Nghiệp (Role Page)
- **Hero Banner Nghề nghiệp**: Nền Gradient nhẹ. Hiển thị Icon lớn và dòng chữ "Lộ trình AI cho [Tên nghề]".
- **Danh sách Khóa học**: Hiển thị dưới dạng `grid` các thẻ `Course Card`. Ảnh Thumbnail chiếm tỷ lệ 16:9, phía dưới là Tiêu đề, Badge chỉ tên Tool (VD: ChatGPT), và nút "Vào học".

### 5.3. Trang Học Tập / Video (Course Page)
- **Bố cục siêu rộng (`max-w-[90rem]`)**, chia tỷ lệ 8:4.
- **Cột Trái (Video)**:
  - YouTube iframe tỷ lệ chuẩn `aspect-video`, viền bo tròn `rounded-2xl`, bóng mờ `shadow-lg`.
  - Bên dưới video: Tiêu đề H1, mô tả bài giảng, tài liệu đính kèm.
- **Cột Phải (Syllabus)**:
  - Cố định khi cuộn (`sticky`). 
  - Khối Accordion gập mở từng Chương. Bài học đang xem sẽ được tô background `bg-primary/5` và text màu cam để User biết mình đang ở đâu.

## 6. Verification Plan (Bước Kế Tiếp)
1. Tôi (Gemini) sẽ nộp bản Kế hoạch Design System này cho Leader xét duyệt.
2. Nếu Leader đồng ý, toàn bộ hệ thống CSS, biến màu Tailwind và class HTML hiện tại (nếu có chỗ nào chưa chuẩn) sẽ được viết lại hoàn toàn theo bộ quy tắc `rem` và màu sắc này.
