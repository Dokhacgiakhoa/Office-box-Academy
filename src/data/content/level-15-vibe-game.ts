export const sk_15_1 = `
### 🎯 Mục tiêu bài học
Hiểu qua về "Sân khấu" nơi diễn ra các trò chơi điện tử nền web để dễ dàng ra lệnh cho AI vẽ nhân vật đúng chỗ.

### 🎮 Khái niệm Canvas và Tọa độ
Trong lập trình Web Game đơn giản, người ta thường dùng một thẻ HTML gọi là \`<canvas>\`. Hãy tưởng tượng nó là một bảng vẽ caro khổng lồ.

- **Trục X:** Chiều ngang (Đi từ trái sang phải). X tăng thì nhân vật đi sang phải.
- **Trục Y:** Chiều dọc (Đi từ trên xuống dưới). Y tăng thì nhân vật đi xuống dưới.
- **FPS (Khung hình/giây):** Trò chơi thực chất là một chuỗi các bức ảnh tĩnh được vẽ lại liên tục. Ví dụ game Rắn săn mồi thường chạy ở tốc độ 10-15 hình/giây để tạo cảm giác con rắn đang bò.

Khi nhờ AI code game, bạn chỉ cần nhớ: "Bảo nó vẽ cái Canvas kích thước 400x400 là đẹp nhất cho điện thoại".
`;

export const sk_15_2 = `
### 🎯 Mục tiêu bài học
Mô tả chính xác luật chơi (Game Logic) để AI có thể đẻ ra dòng code tạo nên trò chơi giải trí kinh điển.

### 🐍 Thực hành: Nhờ AI code Game Rắn săn mồi
Hãy copy đoạn Prompt cực kỳ chi tiết này và ném vào công cụ Claude (với tính năng Artifacts bật sẵn để chơi ngay trên màn hình):

*"Tôi muốn tạo một trò chơi Rắn săn mồi (Snake) cổ điển bằng HTML5 Canvas và Javascript.
Giao diện:
- Bảng game kích thước 400x400, nền màu đen.
- Con rắn có màu xanh lá mạ (neon), mỗi đốt dài 20px. Con mồi là một quả táo màu đỏ.
- Có bảng ghi điểm (Score) ở góc trên cùng.
Luật chơi:
- Rắn di chuyển liên tục, dùng các phím Mũi tên (hoặc nút bấm trên màn hình điện thoại) để điều hướng.
- Rắn ăn táo thì dài ra 1 đốt, điểm cộng thêm 10.
- Nếu rắn đụng mép tường hoặc tự cắn vào đuôi mình -> Game Over.
- Thêm nút 'Chơi lại' khi kết thúc game.
Viết code toàn bộ trong 1 file duy nhất để tôi chạy thử luôn."*
`;

export const sk_15_3 = `
### 🎯 Mục tiêu bài học
Nắm vững nghệ thuật "Bắt bệnh qua màn hình". Dù không biết code, bạn vẫn có thể sửa được lỗi khi game chạy sai.

### 🐛 Kỹ năng Gỡ rối (Debugging)
Không phải lúc nào AI cũng code hoàn hảo ngay từ lần đầu tiên. Chuyện con Rắn đang chạy bỗng đâm xuyên tường đi mất tích là rất bình thường!

Khi gặp lỗi, bạn **đừng cố tự sửa code**. Hãy dùng mưu kế sau:
1. **Mô tả lại hiện tượng bằng tiếng Việt:** 
   - *"Này AI, tôi thấy con rắn ăn quả táo rồi mà điểm vẫn là 0. Nó cũng không dài ra. Sửa lại ngay!"*
2. **Cung cấp Log lỗi:**
   - Nhấn chuột phải vào màn hình Game đang chơi -> Chọn **Inspect (Kiểm tra)** -> Bấm sang tab **Console**.
   - Nếu thấy dòng chữ màu đỏ báo lỗi (Ví dụ: \`Uncaught TypeError: updateScore is not a function\`), hãy COPY y nguyên dòng đỏ đó và ném cho AI.
   
AI đọc lỗi log đỏ sẽ ngay lập tức "À tôi hiểu rồi" và viết lại đoạn code mới cho bạn copy đè vào. Thế là Game lại mượt mà!
`;
