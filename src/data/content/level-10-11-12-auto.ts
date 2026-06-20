export const sk_10_1 = `
### 🎯 Mục tiêu bài học
Giao cho **Social Media Agent** (Đặc vụ Mạng Xã hội) nhiệm vụ tự động "ngửi" tin tức nóng hổi trên mạng (RSS / X / Tiktok) bằng sức mạnh của **Grok 4.3** hoặc các mô hình Real-time.

### 📰 Đặc vụ Săn Tin Tự Trị
Năm 2026, các bài báo rác ngập tràn. Bạn không thể chỉ dùng bộ lọc RSS đơn thuần.

**Cách Agent hoạt động:**
- Agent liên tục quét các trang tin (Dùng Perplexity hoặc tính năng Real-time).
- Cài đặt "Lõi tư duy" (Core Prompt): *"Chỉ lọc ra những bài báo nói về 'Khởi nghiệp Công nghệ' mà có mang sắc thái tích cực. Nếu là bài bóc phốt, hãy bỏ qua."*
- Agent tự động đọc hiểu (Reasoning) từng bài báo, tự chấm điểm xem bài này có đúng gu của sếp không, nếu đạt điểm 8/10 mới bốc mang về.
`;

export const sk_10_2 = `
### 🎯 Mục tiêu bài học
Biến bài báo thành 1 bài Post Tiktok / Facebook / X viral cực đỉnh bằng công thức RTF + Multimodal AI. Tự động tìm cả ảnh minh họa.

### ✍️ Content Creator Agent (Trọn gói chữ + hình)
Đặc vụ này nhận bài báo được chấm điểm cao từ Đặc vụ Săn tin.

**Cấu hình luồng:**
1. **Claude Opus 4.8** viết lại bài báo đó thành một Kịch bản Tiktok dài 1 phút (Gây cấn, có nút thắt).
2. Claude tự động suy nghĩ (CoT) ra một câu lệnh (Prompt) mô tả hình ảnh làm Thumbnail (Ảnh bìa).
3. Nó tự động gọi sang cho Midjourney v7 để vẽ cái ảnh đó.
4. Cuối cùng, ghép kịch bản chữ + Ảnh bìa lại và tự động ấn nút Đăng (Publish) lên tất cả các nền tảng mạng xã hội. Toàn bộ quy trình diễn ra trong 2 phút!
`;

export const sk_11_1 = `
### 🎯 Mục tiêu bài học
Thiết kế một Đặc vụ Giao dịch (Trading/Alert Agent) biết đọc Biểu đồ nến chứng khoán/vàng thay vì chỉ đọc con số.

### 📈 Bot đọc Biểu đồ bằng Vision AI
Năm 2026, AI nhìn được biểu đồ. Bạn không cần kết nối API bằng code lằng nhằng nữa!

**Luồng hoạt động:**
1. Hướng camera/screen capture của Agent vào trang web bảng giá chứng khoán (VD: TradingView).
2. Dùng sức mạnh Đa phương thức (Multimodal Vision) của **Gemini 3.5 Pro**.
3. **Prompt:** *"Hãy liên tục theo dõi cái biểu đồ này (Mỗi 5 phút một lần). Khi nào bạn nhìn thấy mô hình 'Vai Đầu Vai' đảo chiều xuất hiện, hãy báo tôi ngay lập tức."*
Agent đóng vai một ông chuyên gia phân tích kỹ thuật ngồi nhìn chằm chằm màn hình thay bạn!
`;

export const sk_11_2 = `
### 🎯 Mục tiêu bài học
Cài đặt "Tuyến phòng thủ cuối cùng" (Guardrails) để Agent không bắn tin nhắn rác hoặc báo động giả mạo.

### 🚨 Cảnh báo Tự động với Guardrails
Khi làm Bot cảnh báo vào Telegram/Zalo, nhược điểm lớn nhất là AI đôi khi bị "Ảo giác" (Hallucination), nó báo láo!

**Năm 2026, chúng ta cài Guardrails (Thanh chắn an toàn):**
- Khi Agent phân tích thấy biểu đồ có biến, trước khi nó nhắn tin hú còi, nó BẮT BUỘC phải chuyển qua một Agent thứ hai (Verification Agent).
- Verification Agent sẽ double-check (kiểm tra chéo) dữ liệu từ một nguồn khác (Ví dụ: Tra API của Yahoo Finance). Nếu 2 bên khớp nhau, nó mới duyệt cho phép bắn tin nhắn cảnh báo hú còi vào Telegram của sếp. Chắc chắn và chuẩn xác tuyệt đối!
`;

export const sk_12_1 = `
### 🎯 Mục tiêu bài học
Tuyệt kỹ tối thượng của kỷ nguyên Tự động hóa: **Multi-Agent Swarms** (Bầy đàn Đặc vụ AI). Cả một công ty ảo chạy bên trong n8n.

### 🤝 Quản trị Công ty "Bầy Đàn AI"
Bạn là Giám đốc (CEO), ngồi trên đỉnh. Bên dưới bạn là Swarms (Bầy đàn) gồm:
- **Agent Trưởng phòng Marketing:** Chuyên nghĩ chiến dịch, giao task.
- **Agent Copywriter:** Viết content.
- **Agent Designer:** Làm hình ảnh.
- **Agent Reviewer:** Kiểm duyệt, đóng vai khách hàng khó tính để chê bài.

**Vận hành:**
Bạn chỉ gõ 1 câu duy nhất: *"Khởi động chiến dịch Valentine bán Socola."*
Bầy đàn AI này sẽ tự động họp với nhau (AI nói chuyện với AI). Trưởng phòng sẽ đẻ ra task. Designer vẽ ảnh, Copywriter viết bài. Nếu ảnh xấu, Reviewer sẽ chửi và bắt Designer vẽ lại. Chúng nó tự tranh cãi, tự sửa lỗi cho đến khi ra một chiến dịch hoàn hảo thì mới in ra màn hình báo cáo cho CEO là bạn. Bạn chỉ việc ngồi rung đùi và gật đầu!
`;
