# KẾ HOẠCH TRIỂN KHAI (TASK BOARD) - PHASE 7: Tái cấu trúc 4 Trụ cột

Dưới đây là danh sách các hạng mục công việc dành cho Developer (Claude).
**Lưu ý từ PM (Gemini)**: Chúng ta sẽ tái cấu trúc hệ thống menu và các trang để phục vụ phễu B2B với 4 trụ cột: AIOffice, VibeCoding, Project, và Community.

## Giai đoạn 7.1: Cập nhật Header & AI Office (Trang chủ)
- [x] Cập nhật `site-header.tsx`: Đổi 4 Links thành `AIOffice` (`/`), `VibeCoding` (`/vibecoding`), `Project` (`/projects`), `Community` (`/community`).
- [x] Cập nhật `hero-section.tsx`: Điều chỉnh nội dung copywriter (Tiêu đề, mô tả) tập trung vào "AI Office - Miễn phí cho dân văn phòng".
- [x] Cập nhật `profession-grid.tsx` (hoặc tạo component mới nếu cần): Hiển thị tài liệu/khóa học miễn phí theo ngành nghề.

## Giai đoạn 7.2: VibeCoding Landing Page
- [x] Tạo file `src/app/vibecoding/page.tsx` (Trang Landing Page riêng).
- [x] Xây dựng `vibe-hero.tsx`: Header thu hút, tập trung chốt sale khóa học Vibe Coding.
- [x] Xây dựng `vibe-benefits.tsx`: Nêu bật giá trị "Không cần biết code vẫn tự làm được app".
- [x] Xây dựng `vibe-pricing.tsx`: Bảng giá khóa học thu phí.

## Giai đoạn 7.3: Project Portfolio
- [x] Tạo file `src/data/projects.ts`: Chứa mock data các dự án (Tên đối tác, Mô tả, Hình ảnh demo, Stack công nghệ).
- [x] Tạo file `src/app/projects/page.tsx`: Hiển thị lưới các dự án (Project Grid) dựa trên dữ liệu từ `projects.ts`.

## Giai đoạn 7.4: Community & Schedule
- [x] Tạo file `src/app/community/page.tsx`: Trang chủ cộng đồng.
- [x] Xây dựng `social-links.tsx`: Liên kết đến Fanpage Facebook, Group AI91, kênh YouTube.
- [x] Xây dựng `content-schedule.tsx`: Bảng lịch (Schedule/Calendar) dự kiến đăng bài trên các nền tảng mạng xã hội.

## Giai đoạn 7.5: Hoàn thiện Nội dung Trang Chủ (B2B CTA)
- [x] Xây dựng `b2b-cta-section.tsx` trong `src/components/home/`: Section thu thập Lead doanh nghiệp (ví dụ: "Bạn là Lãnh đạo / Chủ doanh nghiệp? Đăng ký Demo AI nội bộ miễn phí").
- [x] Bổ sung `B2bCtaSection` vào ngay trên `SiteFooter` trong `src/app/page.tsx`.
- [x] Rà soát lại copywriting của `AiEcosystemSection` để đảm bảo văn phong cực kỳ hấp dẫn.

## Giai đoạn 8: Progressive Web App (PWA) & Mobile UX
- [x] Cấu hình Web App Manifest (`public/manifest.json`), sử dụng file `Logo - Officebox Full.png` có sẵn để tạo Appầm App Icon, set theme-color thành Navy (`#0F172A`).
- [x] Thiết lập Service Worker **thủ công** (`public/sw.js`) lưu cache, tăng tốc độ tải và truy cập Offline.
- [x] Tối ưu hóa UI/UX đa nền tảng (Mobile, Tablet, PC).

## Giai đoạn 9: Tối ưu UX/UI & Content (Đã hoàn thành bởi BA/PM)
- [x] Rút ngắn padding các section trên trang chủ từ `py-32` xuống `py-16`.
- [x] Tối ưu Form Lead B2B: Bổ sung tùy chọn đăng ký cho cả "Doanh nghiệp" và "Cá nhân".
- [x] Tái cấu trúc lộ trình học (Curriculum) và gán 60 skills mới vào 3 Tiers (Office/Marketing/VibeCoding).

## Giai đoạn 10: Xử lý State & Logic phức tạp
- [x] Tối ưu hóa Component `TierToggle` (`src/components/home/tier-toggle.tsx`).
- [x] Rà soát mã nguồn UI hiển thị Course để đảm bảo an toàn.

## Giai đoạn 11: Thiết kế Frontend UI Trang Chủ (🔥 NEW 🔥)
*Yêu cầu BẮT BUỘC ĐỌC KỸ `CLAUDE.md` trước khi code để áp dụng chuẩn Huashu Design & Promax Animation.*

- [x] **Task 11.1:** Dựng Component `CourseCard.tsx` chuẩn Bento Box (`rounded-2xl`, bóng đổ nhạt, viền trong suốt). Dùng Framer Motion tạo hiệu ứng nảy (Hover Lift) và phản hồi xúc giác (`whileTap`) cho Mobile.
- [x] **Task 11.2:** Dựng `CourseShowcaseSection.tsx`, fetch dữ liệu từ `src/data/courses.ts` và render lưới 12 khóa học, có thể dùng dạng Tabs (Office / Marketing / VibeCoding) hoặc Scroll dọc.
- [x] **Task 11.3:** Tối ưu hóa `HeroSection.tsx`. Bổ sung hiệu ứng chữ bay lên bằng Framer Motion (Fade Up Spring).
- [x] **Task 11.4:** Thiết kế `AiEcosystemSection.tsx` thành dạng Marquee (băng chuyền logo chạy ngang vô tận) hiển thị các Icon/Text công cụ AI (Gemini, Deepseek, Grok...).
- [x] **Task 11.5:** Lắp ráp tất cả vào `src/app/page.tsx` và tinh chỉnh khoảng trắng (Taste Skill) cho đồng bộ.

## Giai đoạn 12: Đồng bộ Thiết kế UI/UX & Animation Toàn Hệ Thống
*Tiếp tục áp dụng chuẩn Huashu Design & Promax Animation cho các trang còn lại.*

- [x] **Task 12.1 (Trang Chi tiết):** Tái cấu trúc UI cho `/role/[id]/page.tsx` và `/course/[id]/page.tsx`. Thêm Framer Motion (Fade in, Slide up) cho danh sách bài học và layout nội dung.
- [x] **Task 12.2 (Trang VibeCoding):** Cập nhật Landing Page `/vibecoding/page.tsx`. Tối ưu Hero Section, Benefits, và Pricing table với giao diện Bento Box & hiệu ứng nảy (Hover Lift).
- [x] **Task 12.3 (Trang Projects & Community):** Đồng bộ thiết kế cho trang `/projects/page.tsx` và `/community/page.tsx`. Thêm Stagger Animation cho Project Grid và bảng Schedule.
- [x] **Task 12.4 (Micro-interactions):** Rà soát toàn bộ hệ thống để bổ sung `whileTap` cho các nút bấm (Buttons) và Links trên Mobile để tăng phản hồi xúc giác.
- [x] **Task 12.5 (Kiểm thử Hiệu suất):** Đảm bảo không làm giảm tốc độ load trang và có hỗ trợ `useReducedMotion()` trên mọi trang phụ.

## Giai đoạn 13: Đại tu UI/UX & Nội dung (Chuẩn Boxy, Logo, Community)
*Chuyển hướng UI sang dạng hình khối vuông vức (Boxy) phù hợp Logo mới. Bổ sung trang Learning độc lập, làm lại Footer và Community.*

- [x] **Task 13.1 (Boxy Design System):** Tìm và thay thế hàng loạt `rounded-full`, `rounded-3xl`, `rounded-2xl` thành `rounded-lg`, `rounded-xl` trên toàn hệ thống (bao gồm các nút bấm, thẻ Card, Toggle). Thêm shadow 3D và Animation Card Flip/Z-axis vào các thẻ khóa học để có chiều sâu hơn.
- [x] **Task 13.2 (Logo & Header Menu):** Tạo hoặc tải file `public/logo.png` (chữ Office Box dạng box) và thay thế vào thẻ `<img>` của Header. Đổi các item trên Menu thành: **Home** (`/`), **Learning** (`/learning`), **Project** (`/projects`), **Community** (`/community`).
- [x] **Task 13.3 (Tạo Trang Learning):** Khởi tạo trang độc lập `src/app/learning/page.tsx`. Xây dựng giao diện Danh sách Khóa học & Lộ trình học (Roadmap) dựa trên component cũ từ trang chủ.
- [x] **Task 13.4 (Tái cấu trúc Homepage):** Tại `profession-grid.tsx` ("Tài liệu theo ngành nghề"), xóa concept chia theo Sale/Marketing. Thay bằng 3 nhánh **AI Office**, **AI Marketing**, **VibeCoding** và dẫn link trực tiếp về trang Learning.
- [x] **Task 13.5 (B2B CTA & Footer):** Tại `b2b-cta-section.tsx`, sửa nội dung thành "Giới thiệu Cộng đồng AI91", thay Form đăng ký doanh nghiệp bằng nút "Tham gia Cộng đồng AI91". Thiết kế lại `site-footer.tsx` chỉn chu hơn, nhúng iframe Google Map chỉ đường địa chỉ "Yên Lãng, Đống Đa, Hà Nội".
- [x] **Task 13.6 (Cập nhật Community):** Tại trang `/community`:
  - Bổ sung mục "Ban Quản Trị AI91". Thêm Profile cho tác giả `@dokhacgiakhoa` với Title "Founder & AI Architect".
  - **Quan trọng:** Sửa lại phần "Lịch nội dung". Thay thế cái bảng tĩnh (trông như ảnh chụp) bằng một giao diện Lịch thực sự (ví dụ: nhúng Iframe Google Calendar, hoặc nút "Add to Calendar") để user có thể bấm "Theo dõi" lịch chia sẻ bài viết, live stream, đào tạo.
- [x] **Task 13.7 (Hình ảnh Khóa học & Fix Logo):**
  - **Logo Trang chủ:** Sửa file `src/data/tools.ts`. Sửa các logo bị lỗi (như GPT bị gỡ khỏi simpleicons) thành ảnh SVG từ nguồn khác (vd Wikimedia). Thêm logo mặc định cho các tool còn thiếu (Grok, Codex, Veo 3, v.v.). Đảm bảo Marquee trên trang chủ hiển thị đẹp, không có thẻ `<img>` bị lỗi (broken image).
  - **Thumbnail Khóa học:** Di chuyển 3 ảnh vừa được AI (Gemini) render ra (nằm trong thư mục `.gemini/antigravity-ide/brain/...` hoặc tải từ UI) vào mục `public/courses/`. Sửa lại trường `thumbnailUrl` của các khóa học trong file `courses.ts` để gán 3 ảnh mới này tương ứng với 3 nhánh: AI Office, AI Marketing, và VibeCoding. Đảm bảo ảnh phù hợp với nội dung từng nhánh.

## Giai đoạn 14: Đa dạng hóa 14 Ảnh Khóa học & Text Overlay (Tên Level)
*Hiển thị Tên Khóa Học trực tiếp lên ảnh bằng CSS Gradient Overlay để dễ đọc và 14 khóa học có 14 ảnh riêng biệt.*

- [x] **Task 14.1 (Gán 14 Thumbnail Độc Bản):** PM (Gemini) đã copy sẵn 14 tấm ảnh nền (background) cực đẹp vào thư mục `public/courses/` rồi. Claude CHỈ CẦN mở `src/data/courses.ts` và đổi giá trị `thumbnailUrl` tương ứng như sau:
  - **Nhánh AI Office (5 Level):** `/courses/office_level_1.png` đến `/courses/office_level_5.png`
  - **Nhánh AI Marketing (4 Level):** `/courses/marketing_level_1.png` đến `/courses/marketing_level_4.png`
  - **Nhánh VibeCoding (5 Level):** `/courses/vibecoding_level_1.png` đến `/courses/vibecoding_level_5.png`
- [x] **Task 14.2 (Text Overlay UI):** Mở `src/components/home/course-card.tsx`. 
  - Tạo một lớp phủ màu tối (Gradient Overlay `bg-gradient-to-t from-black/80 via-black/30 to-transparent`) đè lên thẻ `<img>`.
  - In chữ `course.title` (Ví dụ: "Level 1: Tư Duy AI & Nghệ Thuật Prompt...") nổi bần bật (màu trắng, font đậm) trên góc dưới cùng của khung ảnh.
  - Căn chỉnh text sao cho chuẩn Typography, dễ đọc, không bị che khuất bởi số bài học.

## Giai đoạn 15: Chuyển đổi Khóa Học sang List View (Chiều dọc)
*Sắp xếp lại giao diện Khóa học từ dạng lưới (Grid) sang danh sách (List). Hiển thị chi tiết nội dung bài học để tối ưu không gian hiển thị.*

- [x] **Task 15.1 (Course Showcase):** Mở `src/components/home/course-showcase-section.tsx`.
  - Sửa container chứa danh sách khóa học: Đổi từ lưới (`grid gap-6 md:grid-cols-2 lg:grid-cols-3`) sang dạng danh sách dọc (`flex flex-col gap-6`). Dữ liệu trong `courses.ts` đã được xếp từ thấp đến cao nên không cần viết code sắp xếp lại.
- [x] **Task 15.2 (Course Card UI Fix):** Mở `src/components/course/course-card.tsx`. Sửa lại cấu trúc thẻ theo hướng ngang:
  - Container chính (`MotionLink`): Sửa từ `flex-col` sang `flex-col md:flex-row`.
  - **Cột Trái (Thumbnail):** Đặt độ rộng cố định trên màn hình to (Ví dụ: `md:w-2/5` hoặc `md:w-[40%]`). **QUAN TRỌNG:** XÓA BỎ lớp phủ màu đen (Gradient Overlay) và XÓA thẻ `<h3>` hiển thị tiêu đề nằm đè trên ảnh. Ảnh bên trái chỉ để hiển thị cái ảnh trong vắt thôi.
  - **Cột Phải (Nội dung):** 
    - **CHUYỂN TIÊU ĐỀ SANG ĐÂY:** Bê nguyên cái tiêu đề `course.title` (Ví dụ: "Level 1: Tư Duy AI...") đặt lên trên cùng của cột phải, ngay trên dòng mô tả (description). Thiết kế Tiêu đề chữ to, in đậm (`text-lg md:text-xl font-extrabold text-navy`).
    - Render mô tả.
    - Duyệt vòng lặp `course.skills` để hiển thị 3-5 gạch đầu dòng các bài học chính của khóa đó (Ví dụ: `✓ Viết PRD... (30:00)`). Có thể dùng thẻ `<ul>`, `<li>` với icon Check, text nhỏ gọn màu xám.
    - Căn chỉnh các Badge Công Cụ và Nút "Vào Học / Xem chi tiết" đẩy xuống góc phải dưới cùng cho gọn gàng. Dùng `flex-1` để tự giãn đẩy các phần tử xuống.

## Giai đoạn 16: Đại tu Lịch Cộng Đồng (Timeline Tháng, Status & CTA)
*Chuyển đổi từ Lịch Grid tuần tĩnh sang Lịch Timeline tháng động. Tự động nhận diện thời gian thực để báo Trạng thái (Sắp tới/Đang Live/Đã xong) kèm theo Nút đăng ký tương ứng.*

- [x] **Task 16.1 (Data & Status Logic):** Mở `src/components/community/content-schedule.tsx`.
  - Thay đổi mảng `schedule` hiện tại thành cấu trúc mới. Mỗi `item` gồm: `id`, `date` (ISO string chuẩn như '2026-06-15T14:00:00+07:00'), `platform`, `eventType` (Video/Livestream/Course), `topic`, `actionLink` (Link đk form/sub kênh), và `imageUrl` (Đường dẫn ảnh banner).
  - Fake dữ liệu tháng 6/2026 với 8 sự kiện trải đều. **Yêu cầu bắt buộc về `imageUrl`**: Bốc chính xác các đường dẫn sau để gán vào `imageUrl` tùy theo nội dung sự kiện:
    - Sự kiện liên quan đến Office/Excel: Dùng `/courses/office_level_1.png` đến `/courses/office_level_5.png`.
    - Sự kiện liên quan đến Marketing/Content: Dùng `/courses/marketing_level_1.png` đến `/courses/marketing_level_4.png`.
    - Sự kiện Khai giảng khóa học: Dùng `/courses/vibecoding_level_1.png` v.v.
  - Viết 1 hàm nhỏ `getEventStatus(dateStr)` so sánh thời gian sự kiện với `new Date()` để trả về 1 trong 3 trạng thái: `PAST` (Đã diễn ra), `ONGOING` (Đang diễn ra/Sắp trong 1 giờ), `UPCOMING` (Sắp diễn ra).
- [x] **Task 16.2 (Timeline UI & Buttons):** Sửa cấu trúc UI trong `content-schedule.tsx`.
  - XÓA bỏ Grid Layout. Vẽ một **Vertical Timeline** (trục dọc) với một đường line bên trái. Render từng `item` thành một khối (Node) đính trên Timeline.
  - **Banner Ảnh (BẮT BUỘC):** Trên cùng của phần nội dung bên phải, bắt buộc phải có thẻ `<img src={item.imageUrl} alt={item.topic} />`. Bao bọc ảnh bằng thẻ `div` có class `w-full aspect-video md:aspect-[21/9] object-cover rounded-t-xl overflow-hidden`. Không được bỏ sót phần này.
  - Cụm **Header:** Ngày Giờ cụ thể (`Thứ 7, 15/06 - 14:00`) và Badge hiển thị Trạng Thái (Past thì mờ đi, Ongoing thì chớp nháy đỏ/Live, Upcoming thì nổi bật) phải được render nổi lên trên bề mặt của cái ảnh Banner (dùng `absolute bottom-3 left-4`).
  - **Body:** Hiển thị Platform Badge, Event Type và Tên Chủ Đề.
  - **Footer (Action Buttons):** Hiển thị 2 nút: "Thêm vào Google Lịch" (ẩn đi nếu event PAST), và nút "Call to Action" động ("Đăng ký kênh YouTube", "Điền form Khai giảng" v.v) trỏ đến `item.actionLink`.
  - Code chuẩn Boxy (Bo góc vuông vức `rounded-xl`), Animation Stagger rơi từ trên xuống mượt mà.

- [x] **Task 16.3 (Hero Banner Community Redesign):** Mở `src/app/community/page.tsx`.
  - **Yêu cầu UX/UI:** Đưa ảnh `/images/ai91-banner.jpg` làm hình nền (background) cho toàn bộ khối `Hero cộng đồng`.
  - **Lưu ý cực kỳ quan trọng cho Dev:** Trong ảnh có chữ "AI91" rất to ở giữa. Nếu để nguyên chữ HTML "Học AI vui hơn khi có đồng đội" đè lên sẽ bị lộn xộn, đọc không được (như một mớ bòng bong).
  - **Nhiệm vụ của Coder:** Cậu hãy suy nghĩ và dùng kỹ thuật CSS/Tailwind (Ví dụ: Gradient overlay cắt lớp, làm mờ một phần, đẩy chữ HTML lên trên cùng/xuống dưới, hoặc giấu luôn dòng chữ HTML đi nếu thấy ảnh đã đủ ý nghĩa). 
  - Tóm lại: Hãy thiết kế sao cho nó **Đẹp - Sang - Đọc được chữ**. Tớ chỉ ra ý tưởng thôi, cậu tự quyết định code CSS nhé!

## Giai đoạn 17: Thiết kế lại Khối Lộ trình thành 3 Nhóm Kỹ năng (Learning Categories)
*Khắc phục lỗi UX gây hiểu lầm đây là 3 bước tuần tự. Sửa lại thành 3 nhóm kỹ năng độc lập để học viên linh hoạt chọn lựa.*

- [x] **Task 17.1 (Copywriting & Layout Re-structure):** Mở `src/components/learning/learning-roadmap.tsx`.
  - **Đổi Text:** Sửa lại Title thành `3 Nhóm Kỹ Năng Cốt Lõi` và Description thành `Bắt đầu từ việc thành thạo công cụ, mở rộng sáng tạo nội dung, cho đến việc tự lập trình giải pháp AI chuyên biệt. Bạn có thể chọn học bất cứ nhóm nào tùy theo nhu cầu hiện tại.`
  - **Đổi Layout:** Sửa thẻ `<RevealGroup>` bao bọc bên ngoài các card. Bỏ `flex-col`, thay bằng `grid grid-cols-1 md:grid-cols-3 gap-6`.
- [x] **Task 17.2 (Card UI Redesign):** Chỉnh sửa thiết kế của từng Card (`RevealItem`).
  - **Xóa tính tuần tự:** XÓA khối hiển thị số thứ tự bước (`index + 1`). XÓA thẻ icon `<ArrowDown>` nối giữa các bước.
  - **Căn giữa:** Chỉnh lại Card thành dạng thẻ dọc `flex-col`, thiết lập `items-center text-center` toàn bộ nội dung trong card.
  - **Typography:** Đẩy Icon lên trên cùng (to lên chút, ví dụ `h-10 w-10`), phía dưới là Tiêu đề nhóm, Badge số lượng khóa học, và Mô tả.
  - **Thêm Button:** Bổ sung một nút "Khám phá ngay" ở cuối mỗi Card (Nút dạng Ghost/Outline, có icon mũi tên trỏ xuống) giúp người dùng click vào là tự động cuộn (scroll) xuống phần danh sách khóa học tương ứng bên dưới.

## Giai đoạn 18: Tái cấu trúc Toàn bộ Dữ liệu Khóa học (18 Level Micro-learning)
*Đập đi xây lại toàn bộ file Data để phản ánh sườn giáo trình mới, phân loại theo Công cụ và Hướng dẫn từng bước.*

- [x] **Task 18.1 (Cập nhật Tier & Tool):** 
  - Mở `src/data/tiers.ts`, đổi nhãn `MARKETING` thành `AI AGENT`. Sửa Tagline và Description cho phù hợp với định hướng Tự động hóa.
  - Mở `src/data/tools.ts`, thêm các tool mới: `flux`, `comfyui`, `freepik`, `veo3`, `kling`, `luma`.
- [x] **Task 18.2 (Cập nhật Courses):** Mở `src/data/courses.ts`. Đập bỏ mảng `courses` cũ. Viết lại mảng mới gồm 18 object tương ứng với 18 Level.
  - Đảm bảo `tier` mapping đúng: Level 1-7 (OFFICE), Level 8-13 (AI AGENT), Level 14-18 (EXPERT).
  - Tên khóa học chỉ giữ lại lợi ích (Ví dụ: "Level 1: Viết Email chuyên nghiệp và tự động phản hồi khách hàng").
  - Gán đúng `targetToolIds` theo mảng tag (VD: `['gemini', 'gpt']`).
  - Tái sử dụng hợp lý 14 ảnh trong `public/courses/` để lấp đầy 18 khóa học (Ví dụ lặp lại ảnh marketing_level_1 cho level 8 và 9).
  - Trong mỗi `course`, mảng `skills` phải tuân thủ chuẩn: `title` chứa tiền tố `[Tên Tool]`, nội dung dạng các bước thực hiện "Yêu cầu -> Prompt -> Ví dụ". Dùng Video ID ảo `dQw4w9WgXcQ` và duration `15:00` làm mặc định.

## Giai đoạn 19: Tối ưu Giao diện Khóa học (Grid 2 Cột) & Chuẩn PWA
*Leader đã duyệt Kế hoạch 19. PM (Gemini) ĐÃ tự tay code xong phần Data `courses.ts` (18 Level Thực chiến). Nhiệm vụ của Claude bây giờ là tối ưu Layout và UX.*

- [x] **Task 19.1 (Showcase 2 Cột PC):** Mở `src/components/home/course-showcase-section.tsx`.
  - Đổi container chứa khóa học từ danh sách dọc (`flex flex-col max-w-4xl`) sang dạng Lưới: `grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto`.
  - Mobile hiển thị 1 cột, PC/Laptop hiển thị 2 cột.
- [x] **Task 19.2 (CourseCard PWA UX):** Mở `src/components/course/course-card.tsx`.
  - Do hiển thị 2 cột trên PC, nếu dùng thẻ ngang (Thumbnail trái, text phải) sẽ bị chật. Claude cần tư duy Responsive linh hoạt (Ví dụ: Chuyển lại về thẻ dọc `flex-col` cho tất cả màn hình, HOẶC thiết kế khéo léo).
  - **Chuẩn PWA (Mobile):** Trên điện thoại (màn hình nhỏ), phải hiển thị cực kỳ dễ nhìn. Nút bấm, mảng chạm phải to (Touch target > 44px). Font chữ vừa phải, không bị vỡ bố cục.
- [x] **Task 19.3 (Kiểm thử Data mới):** Kiểm tra xem giao diện có render đúng và đẹp 18 Khóa học Thực chiến mà PM (Gemini) vừa đổ vào `courses.ts` không. Các Badge hiển thị Logo Tool (như `n8n`, `claude`, `stitch`) phải hiện lên rõ ràng ở phần thẻ.

## Giai đoạn 20: Polish & Đồng bộ Thẩm mỹ (Claude — Lead Design chủ động)
*Nâng các trang còn yếu/lệch tông lên cùng chuẩn sang–sạch–Boxy. Chỉ sửa UI, không đụng logic/data. (Đã được Leader duyệt plan.)*

- [x] **Task 20.1 (Redesign Projects):** Thay thẻ "gradient + chữ" bằng thẻ Boxy có header gradient navy + lưới mờ + icon ngành (`project-grid.tsx`); thêm dải số liệu ở hero (`projects/page.tsx`).
- [x] **Task 20.2 (VibeCoding Hero):** Bố cục 2 cột, thêm mockup "Prompt → App" phát sáng cam + trust badges (`vibe-hero.tsx`).
- [x] **Task 20.3 (Home Hero):** Thay thẻ nổi gradient bằng chip logo tool thật (Gemini/ChatGPT/Veo 3) (`hero-section.tsx`).
- [x] **Task 20.4 (Đồng bộ copy):** Cập nhật nhãn "AI Marketing" → "AI Agent" ở footer, trang Learning, comment (khớp `tiers.ts` mới).
- [x] **Task 20.5 (QA):** Build pass; screenshot Desktop & Mobile các trang; kiểm reduced-motion & touch target.

## Giai đoạn 21: Bổ sung theo chuẩn cộng đồng AI91 (đối chiếu learn.zord.io.vn)
*Claude đối chiếu web AI91 thật & bổ sung các khối còn thiếu. Khả thi với site tĩnh (không backend).*

- [x] **Task 21.1 (Cách tham gia):** `how-to-join.tsx` — stepper 4 bước (Đăng ký → Đóng góp → Xác nhận → Vào học) + CTA.
- [x] **Task 21.2 (Gây quỹ thiện nguyện):** `charity-fund.tsx` — "Học để cho đi": progress bar (14tr/50tr · 24 thành viên), tác động 500k, STK BV Nhi Đồng 1 & 2, nội dung CK.
- [x] **Task 21.3 (Báo chí):** `press-strip.tsx` — dải "Được báo chí nhắc đến" (Tuổi Trẻ, VnExpress…).
- [x] **Task 21.4 (Quà tặng Skills):** `skills-handbook.tsx` (trang Learning) — Cẩm nang 145+ Skills (ARC/Content/Media/Marketing/Engineer) + thẻ "mở khoá khi hoàn thành".
- [x] **Lắp ráp:** Community = Hero → Press → Social → Team → HowToJoin → Charity → Timeline; Learning thêm SkillsHandbook cuối trang.

> Ngoài phạm vi (cần backend, vi phạm CLAUDE.md no-DB/Auth): Đăng nhập/Đăng ký, Dashboard học viên, duyệt thành viên, Sepay/CRM/Telegram. Chưa làm.
