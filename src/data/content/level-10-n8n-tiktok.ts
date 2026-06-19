export const sk_10_1 = `
### 🎯 Mục tiêu bài học
Hiểu được luồng logic (Pipeline) phía sau một kênh TikTok dạng "Faceless" (không lộ mặt) và cách thức tự động hóa nó 100%.

### 🧠 Bóc tách luồng làm Video
Để tạo ra một video ngắn TikTok thông thường, bạn sẽ tốn 3-4 tiếng cho các công đoạn: Viết kịch bản -> Lên mạng tìm hình ảnh -> Cắm mic thu âm -> Mở Capcut lên cắt ghép.

Với n8n, chúng ta sẽ biến 4 công đoạn đó thành 4 node (nút) tự chạy:
1. **Node OpenAI:** Suy nghĩ và đẻ ra kịch bản truyện kể.
2. **Node ElevenLabs / FPT AI:** Chuyển văn bản thành giọng đọc (Text-to-Speech) chân thực.
3. **Node Replicate / Flux:** Vẽ hình ảnh minh họa dựa trên kịch bản.
4. **Node FFMPEG / EditFrame API:** Ghép nhạc, ảnh và giọng đọc lại thành file MP4 hoàn chỉnh.
`;

export const sk_10_2 = `
### 🎯 Mục tiêu bài học
Thực hành kết nối các AI đắt giá nhất thị trường vào chung một đường ống (Pipeline) thông qua n8n.

### 🔌 Kết nối Bộ não và Giọng nói
Trong n8n, hãy thiết lập luồng như sau:
1. Tạo một HTTP Request node để lấy chủ đề ngẫu nhiên từ Wikipedia hoặc lấy tin tức từ RSS.
2. Nối vào node OpenAI (ChatGPT). Viết Prompt: *"Hãy viết một đoạn kịch bản ngắn dưới 1 phút (tầm 150 chữ) về chủ đề bí ẩn vũ trụ, dùng văn phong ma mị, thu hút người xem."*
3. Nối tiếp vào node HTTP Request thứ 2. Lúc này ta gọi API của nền tảng **ElevenLabs** (nền tảng tạo giọng nói AI tốt nhất thế giới).
   - Truyền đoạn Text từ node OpenAI vào mục \`text\` của API.
   - Trả về là một file âm thanh \`.mp3\`.

Lúc này, hệ thống của bạn đã tự động biết nghĩ và biết nói!
`;

export const sk_10_3 = `
### 🎯 Mục tiêu bài học
Trình diễn chặng cuối của luồng: Ghép thành video MP4 và tự động ném lên kênh TikTok mỗi ngày 1 video.

### 🎬 Ghép Video & Đăng tự động
Đây là khâu kỹ thuật phức tạp nhất nhưng n8n có thể xử lý mượt mà.

1. **Sinh hình nền:** Gửi Prompt cho một API vẽ ảnh (ví dụ: Fal.ai sinh ảnh Flux) để tạo một tấm nền kỳ bí.
2. **Ghép nối (FFMPEG):** Nếu bạn dùng n8n bản Local, bạn có thể chạy một node **Execute Command** để gọi FFMPEG trên máy tính, lồng ghép file MP3 vào bức hình, tạo ra file Video 1 phút.
3. **Upload lên TikTok:** Thử sức với Node TikTok (hoặc gửi HTTP Request tới TikTok Graph API). Cần cấp quyền \`video.upload\` trên TikTok Developer Portal. 

*Tuyệt chiêu:* Để an toàn và dễ quản lý hơn trong giai đoạn đầu, thay vì tự động đăng thẳng, hãy thiết lập n8n tự động lưu video vào Google Drive và gửi tin nhắn báo cho bạn qua Zalo/Telegram để bạn kiểm duyệt trước khi bấm đăng!
`;
