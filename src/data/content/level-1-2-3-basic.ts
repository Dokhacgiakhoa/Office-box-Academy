export const sk_1_1 = `
### 🎯 Mục tiêu bài học
Hiểu rõ bản chất AI (Trí tuệ nhân tạo) là gì, nó suy nghĩ như thế nào và tại sao đôi lúc nó lại trả lời ngô nghê hoặc "bịa chuyện".

### 🤖 AI thực chất là gì?
AI (đặc biệt là các mô hình ngôn ngữ lớn như ChatGPT, Gemini, Claude) không phải là Google. Nó không "tìm kiếm" câu trả lời trên mạng rồi copy cho bạn.
- Nó hoạt động dựa trên cơ chế **Đoán chữ tiếp theo**. Dựa vào dữ liệu nó đã học, nó đoán xem từ nào hợp lý nhất để viết ra.
- **Ảo giác (Hallucination):** Vì tính năng "đoán chữ" này, nếu bạn hỏi một thứ nó không biết, nó sẽ có xu hướng "bịa" ra một câu trả lời nghe rất thuyết phục.

**Quy tắc vàng:** Luôn cung cấp đủ "ngữ cảnh" (thông tin nền) để ép AI đi đúng hướng và không cho nó cơ hội bịa chuyện.
`;

export const sk_1_2 = `
### 🎯 Mục tiêu bài học
Nắm vững công thức viết câu lệnh (Prompt) chuẩn mực giúp AI hiểu chính xác 100% ý muốn của bạn ngay từ lần thử đầu tiên.

### 📝 Công thức Prompt 4 phần (Công thức CPRF)
Để ra lệnh cho AI hiệu quả, đừng chỉ hỏi một câu cộc lốc. Hãy áp dụng công thức sau:

1. **C - Context (Bối cảnh):** Cung cấp thông tin nền. 
   *(VD: "Công ty chúng ta bán phần mềm kế toán. Khách hàng đang chê giá đắt.")*
2. **P - Persona (Vai trò):** Gắn cho AI một chức danh.
   *(VD: "Hãy đóng vai một chuyên gia sale B2B với 10 năm kinh nghiệm.")*
3. **R - Request (Yêu cầu chính):** Bạn muốn nó làm gì?
   *(VD: "Hãy viết một email phản hồi khách hàng để thuyết phục họ về giá trị sản phẩm.")*
4. **F - Format (Định dạng):** Kết quả trả về trông như thế nào.
   *(VD: "Email dài dưới 150 chữ, chia làm 3 đoạn nhỏ, giọng điệu chuyên nghiệp, lịch sự.")*

**Ghép lại:** Bạn sẽ có một câu lệnh hoàn hảo khiến AI làm việc như một nhân sự cao cấp thực thụ!
`;

export const sk_2_1 = `
### 🎯 Mục tiêu bài học
Nhờ AI viết hộ email (xin lỗi, chào hàng, báo giá) chỉ trong 5 giây thay vì ngồi cắn bút 30 phút.

### 📧 Soạn Email Tự Động
Hãy dùng công thức đã học ở Level 1 để áp dụng vào viết Email.

**Mẫu câu lệnh (Prompt):**
> "Đóng vai là nhân viên Chăm sóc khách hàng. Hãy viết một email xin lỗi khách hàng vì giao hàng trễ 2 ngày do lỗi kho bãi.
> 
> Bối cảnh: Đơn hàng là một bộ bàn ghế văn phòng. Khách đang rất tức giận.
> Giải pháp đền bù: Tặng voucher giảm 20% cho lần mua sau.
> Giọng điệu: Vô cùng thành khẩn, thấu hiểu, không đổ lỗi vòng vo.
> Định dạng: Ghi rõ tiêu đề thư. Ký tên: Phòng CSKH Office Box."

Chỉ cần copy và sửa lại thông tin, AI sẽ cho bạn một bức thư hoàn hảo để xoa dịu mọi khách hàng khó tính.
`;

export const sk_2_2 = `
### 🎯 Mục tiêu bài học
Dạy AI cách bắt chước chính xác giọng văn của bạn (hoặc của sếp) để người nhận không nhận ra là máy viết.

### 🎭 Kỹ thuật Bắt chước Giọng văn (Few-Shot Prompting)
AI ban đầu sẽ viết rất "máy móc". Để nó viết giống con người, bạn phải đưa cho nó "ví dụ mẫu".

**Mẫu câu lệnh (Prompt):**
> "Dưới đây là 2 bài viết mẫu mà tôi từng viết trên Facebook cá nhân. Hãy phân tích giọng điệu, cách tôi dùng từ ngữ, cách đặt câu:
> [Dán Bài mẫu 1 vào đây]
> [Dán Bài mẫu 2 vào đây]
> 
> Bây giờ, hãy đóng vai tôi, sử dụng ĐÚNG GIỌNG ĐIỆU đó, để viết một bài thông báo công ty sắp đi du lịch Nha Trang. Yêu cầu hài hước, năng động."

Việc đưa ra ví dụ (Few-shot) sẽ giúp AI thoát khỏi văn phong rô bốt nhàm chán.
`;

export const sk_3_1 = `
### 🎯 Mục tiêu bài học
Dùng AI làm trợ lý tìm kiếm thông tin trên mạng, tự động tổng hợp báo cáo thay vì phải tự bấm vào 10 trang web khác nhau.

### 🔍 Tìm kiếm thông minh bằng Perplexity AI / ChatGPT Search
Thay vì dùng Google rồi tự đọc từng link, hãy dùng Perplexity AI.

**Mẫu câu lệnh (Prompt):**
> "Hãy tìm kiếm trên mạng và lập cho tôi một bảng so sánh 3 phần mềm quản lý công việc phổ biến nhất hiện nay (Trello, Asana, Jira) tại thị trường Việt Nam.
> 
> Bảng cần có các cột: Tên phần mềm, Giá tiền, Ưu điểm chính, Nhược điểm chính.
> Hãy trích dẫn rõ nguồn link bài viết."

AI sẽ tự động đọc hàng chục bài viết trên mạng, chắt lọc thông tin và kẻ sẵn bảng cho bạn trong tích tắc.
`;

export const sk_3_2 = `
### 🎯 Mục tiêu bài học
Ép AI đọc hộ file tài liệu dài 100 trang (hoặc file ghi âm cuộc họp) và tóm tắt lại những ý quan trọng nhất trong 3 phút.

### 📚 Đọc tài liệu siêu tốc bằng NotebookLM / Claude
Nếu sếp quẳng cho bạn một cuốn báo cáo ngành dài 120 trang file PDF, đừng hoảng hốt.

1. Tải file PDF đó lên hệ thống AI (Claude hoặc NotebookLM).
2. **Ra lệnh (Prompt):**
> "Dựa CHỈ VÀO TÀI LIỆU được đính kèm, không tự bịa thông tin. Hãy:
> 1. Tóm tắt 5 ý chính quan trọng nhất của tài liệu này (mỗi ý 2 câu).
> 2. Liệt kê 3 rủi ro lớn nhất mà tài liệu đề cập.
> 3. Trích xuất tất cả các con số, số liệu thống kê liên quan đến Doanh thu năm 2023."

Vậy là bạn đã có bản báo cáo để trình sếp mà không cần đọc hết 120 trang giấy!
`;
