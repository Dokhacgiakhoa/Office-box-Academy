export const sk_4_1 = `
### 🎯 Mục tiêu bài học
Vứt bỏ các hàm VLOOKUP, IF rối rắm. Dùng kỹ thuật CoT (Chain of Thought) để ép AI làm sạch bảng dữ liệu Excel rác.

### 🧹 Làm sạch Dữ liệu (Ứng dụng CoT)
Dữ liệu khách hàng tải về thường dính khoảng trắng, sai ngày tháng. Đừng tự sửa, hãy nhờ ChatGPT (Advanced Data Analysis) hoặc DeepSeek.

1. Tải file Excel lên AI.
2. **Prompt:**
> *"Đây là file thông tin khách hàng đang bị lỗi định dạng từ hệ thống cũ. Hãy ĐÓNG VAI chuyên gia Data. Bạn hãy SUY NGHĨ TỪNG BƯỚC: Đầu tiên kiểm tra lỗi khoảng trắng, sau đó kiểm tra lỗi ngày tháng, cuối cùng tách cột Họ Tên. Cứ xử lý xong 1 bước thì báo cáo cho tôi, không được làm gộp. Cuối cùng xuất lại file Excel sạch cho tôi."*

Bằng cách bắt AI "suy nghĩ từng bước", bạn sẽ tránh được việc AI tự xóa nhầm cột dữ liệu quan trọng của bạn.
`;

export const sk_4_2 = `
### 🎯 Mục tiêu bài học
Nhờ AI phân tích số liệu kinh doanh và tự động vẽ biểu đồ mà không cần học Pivot Table.

### 📊 Vẽ Biểu đồ bằng Meta-Prompting
Sếp giao cho bạn 1 bảng doanh thu 12 tháng và bắt bạn phân tích nguyên nhân tháng 6 giảm. Bạn chả biết nên vẽ biểu đồ cột hay biểu đồ tròn. Đừng lo!

**Prompt (Meta-prompting):**
> *"Tôi tải lên file doanh thu 12 tháng. Tôi muốn tìm nguyên nhân vì sao tháng 6 giảm sút, nhưng tôi dốt toán và không biết nên vẽ biểu đồ gì cho trực quan. Bạn hãy làm chuyên gia, tự quyết định loại biểu đồ phù hợp nhất, tự vẽ nó ra, và giải thích cho tôi nguyên nhân bằng ngôn ngữ đơn giản nhất."*

AI sẽ tự động chọn biểu đồ đường (Line chart) hoặc cột (Bar chart), chạy code vẽ ra hình và viết lời giải thích dễ hiểu như đang nói chuyện với bạn.
`;

export const sk_5_1 = `
### 🎯 Mục tiêu bài học
Áp dụng công thức CREATE từ Level 1 để vẽ ra những bức ảnh Mockup sản phẩm đẹp như Studio.

### 🎨 Giám đốc Nghệ thuật AI (Midjourney/Flux)
Khi muốn vẽ ảnh sản phẩm (Ví dụ: Một lọ nước hoa), hãy bám sát sườn CREATE:

- **C (Concept):** Lọ nước hoa thủy tinh cao cấp.
- **R (Resolution):** Chụp cận cảnh (Close-up).
- **E (Environment):** Đặt trên tảng đá rêu phong cạnh thác nước.
- **A (Atmosphere):** Ánh sáng hắt từ phía sau (Backlight) làm lấp lánh nước.
- **T (Tone):** Tông màu xanh lá mát mẻ, kỳ bí.
- **E (Extra):** 8K, cinematic lighting, photorealistic.

Ghép lại bằng tiếng Anh (hoặc nhờ ChatGPT dịch), bạn dán vào Midjourney và sẽ nhận được một tác phẩm triệu đô!
`;

export const sk_5_2 = `
### 🎯 Mục tiêu bài học
Bạn bí ý tưởng? Không biết tiếng Anh? Không thuộc công thức CREATE? Hãy dùng AI để trị AI!

### 💡 Meta-Prompting trong Vẽ Ảnh
Thay vì cố nặn chữ để mô tả ảnh, bạn hãy mở ChatGPT lên và ra lệnh:

**Prompt:**
> *"Tôi đang làm banner quảng cáo cho quán Trà sữa mùa hè. Tôi muốn vẽ một tấm ảnh thật tươi mát nhưng không biết cách mô tả bằng công thức CREATE. Hãy đóng vai giám đốc sáng tạo, đặt cho tôi 3 câu hỏi về quán trà sữa của tôi. Sau khi tôi trả lời, hãy tự động ráp thành 1 câu lệnh (Prompt) tiếng Anh siêu đỉnh để tôi đem đi dán vào Midjourney."*

ChatGPT sẽ tự động lo phần thiết kế ý tưởng, dịch tiếng Anh và canh chuẩn công thức CREATE cho bạn. Bạn chỉ việc copy đi xài!
`;

export const sk_6_1 = `
### 🎯 Mục tiêu bài học
Biến các tài liệu dài ngoằng thành một buổi nói chuyện Radio (Podcast) 2 người để nhân viên công ty dễ nghe, dễ thấm.

### 🎙️ Phù thủy Âm thanh (NotebookLM)
Thật nhàm chán khi ép nhân viên đọc Nội quy công ty dài 10 trang. Thay vì thế:

1. Quăng file PDF Nội quy đó vào **NotebookLM** của Google.
2. Bấm nút **"Audio Overview"** (Tạo tổng quan âm thanh).
3. Đợi 2 phút. AI sẽ tự động đọc hiểu, và tự phân vai 1 Nam 1 Nữ dẫn chương trình trò chuyện rôm rả về cái "Nội quy" đó như một show radio giải trí.
4. Tải file mp3 về và gửi vào nhóm Zalo công ty!
`;

export const sk_6_2 = `
### 🎯 Mục tiêu bài học
Biến tấm ảnh tĩnh thành video quảng cáo chuyển động mượt mà.

### 🎬 Đạo diễn Video AI (Kling / Runway)
Bạn vừa nhờ ChatGPT viết prompt, rồi mang qua Midjourney vẽ được 1 bức ảnh đĩa Cơm tấm bốc khói tuyệt đẹp. Giờ làm sao để nó chuyển động?

1. Tải bức ảnh lên Kling AI.
2. **Dùng công thức điều khiển Camera:** Bạn không cần công thức phức tạp, chỉ cần nói rõ hướng đi của máy quay.
> *"Khói bay lên nghi ngút từ miếng sườn nướng. Máy quay (Camera) zoom in (tiến lại gần) thật chậm và mượt mà."*

Bấm nút, và bạn sẽ có 5 giây Footage (cảnh quay) chất lượng điện ảnh để ghép vào Tiktok ngay lập tức!
`;
