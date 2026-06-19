export const sk_17_1 = `
### 🎯 Mục tiêu bài học
Hiểu cách 1 phần mềm chat (Zalo, Messenger) giao tiếp với "bộ não" của AI thông qua sợi dây cáp vô hình mang tên API.

### 🧠 Nguyên lý Giao tiếp của Chatbot
Khi bạn nhắn tin cho một Chatbot trên website, điều gì thực sự xảy ra?

1. **Khung Chat (Giao diện):** Website của bạn chỉ là cái "vỏ" bên ngoài. Khi khách gõ chữ "Xin chào" và bấm gửi, dòng chữ đó được đóng gói lại.
2. **Đường truyền API:** Gói hàng chứa chữ "Xin chào" được Website ném qua một con đường gọi là API để bay thẳng tới máy chủ của OpenAI (chủ của ChatGPT).
3. **Phản hồi:** ChatGPT nhận được thư, suy nghĩ mất 2 giây, rồi viết câu trả lời "Chào bạn, tôi giúp gì được cho bạn?". Gói hàng lại được ném ngược về Website.
4. **Hiển thị:** Website nhận được câu trả lời và in ra màn hình bong bóng chat.

Nhiệm vụ của bạn là yêu cầu AI viết code để xây cái "vỏ" và thiết lập con đường kết nối đó.
`;

export const sk_17_2 = `
### 🎯 Mục tiêu bài học
Nhúng bộ não thiên tài của AI vào trang web của bạn bằng mã khóa API (Secret Key).

### 🔑 Lấy Khóa và Lắp Ráp Chatbot
Để ChatGPT chịu trả lời tin nhắn từ website của bạn (chứ không phải người khác), bạn phải có một cái thẻ VIP.

1. **Lấy API Key:** Truy cập \`platform.openai.com\`, đăng nhập và tạo một cái **Secret API Key**. Copy chuỗi mã loằng ngoằng đó lại (VD: \`sk-proj-1234abcd...\`).
2. **Dựng Giao diện Chat:** Dùng Prompt: *"Viết cho tôi một khung Chatbot nhỏ ở góc phải màn hình bằng React. Có chỗ nhập tin nhắn và nút gửi."*
3. **Ghép nối:** 
   - Bảo AI viết hàm gọi API: *"Khi người dùng bấm Gửi, hãy dùng đoạn text đó gọi tới API của OpenAI (dùng fetch hoặc thư viện openai) bằng cái Key này [Dán Key của bạn vào]. Sau đó lấy câu trả lời in ra màn hình."*

*Lưu ý: Bạn có thể cài cắm System Prompt để Chatbot luôn đóng vai là "Nhân viên chăm sóc khách hàng của công ty Office Box, lịch sự và chốt sale giỏi."*
`;

export const sk_17_3 = `
### 🎯 Mục tiêu bài học
Giấu kín chiếc "Chìa khóa két sắt" API Key trước khi tung mã nguồn lên mạng Internet để tránh bị trộm tiền.

### 🛡️ Bảo mật API Key bằng Biến Môi Trường (.env)
Nếu bạn để lộ API Key của OpenAI trên mã nguồn công khai (như GitHub), kẻ gian có thể lấy nó đi xài chùa và tài khoản của bạn sẽ bị trừ tiền liên tục!

**Nguyên tắc vàng:** Không bao giờ dán thẳng API Key vào trong file code!

1. Tạo một file có tên là \`.env.local\` trong dự án của bạn.
2. Viết vào đó: \`OPENAI_API_KEY=sk-proj-1234abcd...\`
3. Trong code, thay vì dán trực tiếp, hãy bảo AI đọc từ biến môi trường: \`process.env.OPENAI_API_KEY\`.
4. Khi đẩy Web lên **Vercel**, tìm mục **Environment Variables** (Biến môi trường) trong phần cài đặt (Settings) của dự án. Nhập tên và Giá trị của API Key vào đó.

Bằng cách này, mã khóa của bạn sẽ được giấu an toàn trên máy chủ của Vercel, không một ai có thể nhìn trộm được!
`;
