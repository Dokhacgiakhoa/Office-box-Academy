export const sk_7_1 = `
### 🎯 Mục tiêu bài học
Bước vào thế giới Video AI với Kling AI - một trong những công cụ tạo video từ văn bản và hình ảnh mượt mà, chân thực nhất hiện nay (đối thủ đáng gờm của Sora).

### ⚙️ Yêu cầu chuẩn bị
Bạn không cần máy tính cấu hình mạnh, mọi thứ đều xử lý trên đám mây.
1. Truy cập vào trang web: [klingai.com](https://klingai.com)
2. Đăng ký tài khoản miễn phí (Bạn sẽ được cấp một lượng "Credits" miễn phí mỗi ngày để tạo video).
3. Đảm bảo bạn đã có sẵn 1 bức ảnh (có thể tải trên mạng hoặc dùng ảnh do Flux tạo ra ở Level 6) để chuẩn bị cho bài thực hành biến ảnh thành video (Image-to-Video).
`;

export const sk_7_2 = `
### 🎯 Mục tiêu bài học
Viết Prompt cho Video khác với ảnh tĩnh. Bạn cần phải học cách ra lệnh cho Camera (Máy quay) và mô tả hành động (Motion).

### 🎥 Công thức điều khiển Camera và Vật thể
Trong giao diện Image-to-Video của Kling, sau khi tải ảnh tĩnh lên, bạn cần nhập Prompt mô tả cảnh vật sẽ chuyển động như thế nào.

**Công thức:**
**[Mô tả hành động của vật thể chính] + [Mô tả yếu tố môi trường (gió, nước, ánh sáng)] + [Cách Camera di chuyển]**

Hãy thử Prompt tiếng Anh này:
\`\`\`text
The woman turns her head slightly and smiles softly. 
Her hair is blowing gently in the cinematic wind. 
Camera zooms in slowly.
\`\`\`

*(Dịch: Người phụ nữ hơi quay đầu và mỉm cười nhẹ. Tóc cô ấy bay nhẹ trong gió. Máy quay từ từ phóng to).*

> **Giải thích thuật ngữ Camera:**
> - \`Zoom in / Zoom out\`: Phóng to / Thu nhỏ.
> - \`Pan left / Pan right\`: Máy quay lia sang trái / phải.
> - \`Tilt up / Tilt down\`: Máy quay ngước lên / cúi xuống.
`;

export const sk_7_3 = `
### 🎯 Mục tiêu bài học
Kết hợp mọi kỹ năng để tạo ra một đoạn video quảng cáo 5 giây từ một bức ảnh tĩnh nhàm chán.

### 🏢 Thực hành: Làm video quảng cáo Cafe
Giả sử bạn có một bức ảnh tĩnh chụp ly cafe đang đặt trên bàn gỗ. Bạn muốn làm video ly cafe đang bốc khói để đăng TikTok.

1. Tải bức ảnh ly cafe lên Kling AI.
2. Tại ô Prompt, dán câu lệnh sau:

\`\`\`text
Steam gently rising from the hot coffee cup. 
The background is slightly blurred with soft morning sunlight streaming through the window. 
Camera pans slowly to the right.
\`\`\`

3. Ở mục cài đặt, bạn có thể chỉnh độ dài video là 5 giây (5s).
4. Bấm **Generate** và chờ đợi phép màu xảy ra. Kling sẽ dùng AI phân tích bức ảnh tĩnh của bạn và nội suy ra các khung hình chuyển động siêu thực.

Cuối cùng, bạn chỉ cần tải video MP4 về và chèn thêm nhạc trending là có ngay một clip triệu view!
`;
