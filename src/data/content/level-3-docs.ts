export const sk_3_1 = `
### 🎯 Mục tiêu bài học
Chuẩn bị sẵn sàng công cụ AI để bắt đầu quy trình sáng tạo và soạn thảo văn bản nhanh chóng.

### ⚙️ Yêu cầu chuẩn bị
Trong khóa này chúng ta sẽ sử dụng song kiếm hợp bích 2 công cụ AI mạnh nhất hiện nay về xử lý ngôn ngữ tự nhiên:
1. **ChatGPT** (Dùng để lên ý tưởng, lập dàn ý vì nó rất sáng tạo). Bạn chỉ cần tài khoản bản Free (GPT-3.5 hoặc GPT-4o) là đủ dùng. Truy cập tại: [chatgpt.com](https://chatgpt.com)
2. **Claude AI** (Dùng để gọt giũa văn phong, viết hợp đồng, tài liệu dài vì nó cực kỳ logic và văn phong rất tự nhiên, giống người thật). Truy cập tại: [claude.ai](https://claude.ai)

> **Mẹo:** Hãy mở sẵn 2 tab trình duyệt cho 2 công cụ này để chúng ta dễ dàng copy/paste nội dung qua lại trong các bài học tiếp theo nhé!
`;

export const sk_3_2 = `
### 🎯 Mục tiêu bài học
Sử dụng ChatGPT để "động não" (Brainstorming) và tạo ra một cấu trúc bài thuyết trình hoặc tài liệu cực kỳ logic chỉ trong tích tắc.

### 🏢 Tình huống thực tế
Sếp yêu cầu bạn chiều mai phải có bài thuyết trình giới thiệu sản phẩm mới. Bạn ngồi nhìn màn hình trắng bóc 30 phút mà chưa biết bắt đầu từ đâu.

### 📝 Công thức Prompt chuẩn (Dùng trên ChatGPT)
Hãy copy câu lệnh này và dán vào ChatGPT:

\`\`\`text
Bạn là một chuyên gia thuyết trình TED Talk. 
Tôi đang cần chuẩn bị một bài thuyết trình khoảng 15 phút về chủ đề: [Nhập chủ đề của bạn vào đây, ví dụ: Ra mắt phần mềm quản lý kho].
Khán giả của tôi là: [Ví dụ: Giám đốc và các trưởng phòng].

Hãy lập cho tôi một dàn ý chi tiết theo cấu trúc 3 phần kinh điển:
1. Hook (Mở bài thu hút sự chú ý).
2. Body (3 điểm nhấn chính giải quyết nỗi đau của khách hàng).
3. Call to Action (Kêu gọi hành động rõ ràng).
\`\`\`

ChatGPT sẽ trả về cho bạn một sườn bài cực kỳ sắc bén. Việc của bạn chỉ là điền "thịt" vào cái "xương" đó!
`;

export const sk_3_3 = `
### 🎯 Mục tiêu bài học
Sử dụng Claude để rà soát lỗi logic, sai chính tả và gọt giũa lại văn phong cho mượt mà, chuyên nghiệp.

### 📝 Công thức Prompt chuẩn (Dùng trên Claude)
Claude có khả năng đọc hiểu tài liệu rất dài và cực kỳ nhạy cảm với ngữ cảnh. Sau khi bạn đã viết thô xong tài liệu (hoặc lấy dàn ý từ ChatGPT tự viết ra), hãy dán vào Claude cùng câu lệnh sau:

\`\`\`text
Bạn là một Biên tập viên cấp cao (Senior Editor) với 10 năm kinh nghiệm.
Dưới đây là tài liệu nội bộ tôi vừa soạn thảo. Hãy thực hiện 3 việc:
1. Tìm và sửa toàn bộ lỗi chính tả, lỗi đánh máy.
2. Kiểm tra xem luồng logic có bị lủng củng ở đoạn nào không, nếu có hãy gợi ý cách viết lại.
3. Chỉnh lại văn phong sao cho trang trọng, chuyên nghiệp nhưng không quá cứng nhắc.

[Dán tài liệu của bạn vào đây]
\`\`\`

Claude sẽ trả về một bản thảo hoàn hảo, sẵn sàng để gửi cho Sếp hoặc Đối tác.
`;

export const sk_3_4 = `
### 🎯 Mục tiêu bài học
Áp dụng Claude vào một tác vụ cực kỳ "khó nhằn": Soạn thảo Hợp đồng pháp lý chuẩn chỉnh.

### 🏢 Tình huống thực tế
Công ty chuẩn bị ký hợp đồng thuê Agency chạy Quảng cáo. Sếp bảo bạn soạn nhanh cái Hợp đồng Dịch vụ cơ bản. Bạn không học Luật thì phải làm sao?

### ✨ Bí kíp nhờ Claude soạn Hợp đồng
Hãy mở Claude và dùng Prompt này:

\`\`\`text
Bạn là một Luật sư chuyên về Luật Doanh nghiệp tại Việt Nam.
Tôi cần soạn một bản "Hợp đồng Cung cấp Dịch vụ Marketing".
Bên A là Công ty TNHH XYZ (Thuê dịch vụ).
Bên B là Công ty Cổ phần ABC (Cung cấp dịch vụ).
Giá trị hợp đồng: 100.000.000 VNĐ.
Thời gian thực hiện: 3 tháng (Từ 1/1/2024 đến 31/3/2024).

Hãy soạn cho tôi bản thảo hợp đồng đầy đủ các điều khoản cơ bản nhất (Nghĩa vụ 2 bên, Thanh toán, Bảo mật, Phạt vi phạm). Sử dụng ngôn ngữ pháp lý chuẩn xác của Việt Nam.
\`\`\`

**Lưu ý:** Bản thảo do AI tạo ra chỉ mang tính chất tham khảo cơ bản. Bạn vẫn nên nhờ bộ phận Pháp chế (Legal) xem xét lại trước khi đóng dấu nhé!
`;
