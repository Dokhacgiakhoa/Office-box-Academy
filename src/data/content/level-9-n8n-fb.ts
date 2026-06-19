export const sk_9_1 = `
### 🎯 Mục tiêu bài học
Học cách lấy "chìa khóa" (Token) để n8n có quyền đăng bài thay bạn lên Fanpage Facebook mà không bị khóa tài khoản.

### 🔑 Lấy Access Token từ Facebook Graph API
Để các hệ thống tự động hóa nói chuyện được với Facebook, bạn cần một chuỗi mã gọi là Page Access Token.

1. Truy cập vào **Facebook Developers** (developers.facebook.com) và tạo một ứng dụng mới (App).
2. Thêm sản phẩm **"Facebook Login for Business"**.
3. Đi tới công cụ **Graph API Explorer** (Nằm ở menu Công cụ).
4. Ở cột bên phải, phần **User or Page**, hãy nhấp chọn trang Fanpage bạn muốn quản lý.
5. Cấp quyền (Permissions): Cần chọn quyền \`pages_manage_posts\` và \`pages_read_engagement\`.
6. Nhấp vào **"Generate Access Token"**. 

> ⚠️ **Bảo mật:** Chuỗi mã hiện ra chính là chìa khóa vào nhà bạn. Tuyệt đối không gửi mã này cho người lạ. Hãy copy mã này và dán vào phần cài đặt (Credentials) của node Facebook trên n8n.
`;

export const sk_9_2 = `
### 🎯 Mục tiêu bài học
Xây dựng luồng (Workflow) hoàn chỉnh để lấy tin tức tự động và nhờ AI viết lại caption sao cho "mặn mòi" và hút tương tác.

### 🕸️ Thực hành: Cào tin và Xào bài
1. **Node 1 - RSS Feed:** Thêm node RSS Feed và dán đường link RSS của một trang báo mạng (ví dụ: VNExpress hoặc CafeF). Node này sẽ kéo về 10 bài báo mới nhất.
2. **Node 2 - Item Lists (Limit):** Lọc ra lấy đúng 1 bài báo hot nhất (Item đầu tiên) để tránh đăng quá nhiều làm loãng Fanpage.
3. **Node 3 - OpenAI (hoặc Gemini):** Thêm node AI và yêu cầu nó viết lại bài báo đó.
   - *Prompt:* "Dựa vào tiêu đề và nội dung bài báo sau, hãy viết một đoạn status Facebook thật hài hước, kích thích người đọc bình luận. Thêm hashtag liên quan."
4. **Node 4 - Facebook Graph API:** Tạo bài viết mới lên Fanpage, dán đoạn Text do AI vừa đẻ ra vào phần nội dung (Message), và đính kèm link bài báo gốc.
`;

export const sk_9_3 = `
### 🎯 Mục tiêu bài học
Đưa toàn bộ quy trình lên chế độ "Tự chạy" vào một khung giờ vàng cố định mỗi ngày mà không cần bạn phải mở máy tính.

### ⏰ Thiết lập Hẹn giờ (Schedule Trigger)
Bạn không thể lúc nào cũng ngồi canh để bấm nút "Chạy" cho Workflow.

1. Thay thế Node bắt đầu bằng **Schedule Trigger** (Nút màu xanh lá cây hình đồng hồ).
2. Trong phần cài đặt của nút Schedule, cấu hình quy tắc (Rule):
   - Chế độ: **Days of the week** (Các ngày trong tuần).
   - Chọn từ Thứ 2 đến Chủ nhật.
   - Giờ: **08:00 AM** (Khung giờ vàng lúc mọi người vừa tới văn phòng và lướt điện thoại).
3. Bật công tắc **"Active"** ở góc phải màn hình n8n.

Xong! Từ nay mỗi sáng thức dậy, trong lúc bạn đánh răng thì Fanpage của bạn đã tự động cập nhật những tin tức nóng hổi nhất.
`;
