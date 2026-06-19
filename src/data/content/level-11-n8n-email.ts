export const sk_11_1 = `
### 🎯 Mục tiêu bài học
Học cách cấp quyền an toàn để n8n có thể "đọc" được hộp thư đến của bạn mỗi khi có người gửi thư tới.

### 📧 Kết nối n8n với Gmail / Outlook
Đối với bài toán này, Trigger (Cò súng) của chúng ta sẽ là: **Khi có email mới chuyển đến.**

1. Thêm node **Gmail Trigger** (hoặc Outlook Trigger) vào vùng làm việc của n8n.
2. Trong node này, bạn cần thiết lập kết nối (Credentials) theo chuẩn **OAuth2**.
   - Truy cập vào Google Cloud Console -> Tạo Credentials -> OAuth client ID.
   - Nhập Client ID và Client Secret vào n8n.
   - Bấm **Sign in with Google** và cấp quyền cho n8n đọc email.
3. Cài đặt điều kiện lọc: Ví dụ chỉ đọc các email chưa đọc (Unread) hoặc chỉ đọc thư gửi vào hòm thư hỗ trợ khách hàng (\`support@congty.com\`).
`;

export const sk_11_2 = `
### 🎯 Mục tiêu bài học
Gắn não nhân tạo vào hệ thống phân loại Email, giúp tách thư quảng cáo (Spam) ra khỏi những yêu cầu khiếu nại khẩn cấp của khách hàng.

### 🧠 Dạy AI phân loại sắc thái Email (Sentiment Analysis)
Hàng ngày công ty nhận hàng trăm thư, làm sao biết thư nào cần xử lý gấp?

1. Lấy nội dung thư từ Node Gmail, nối vào node **OpenAI**.
2. Thiết lập System Prompt (Hướng dẫn AI):
   *"Bạn là hệ thống lọc Email tự động. Hãy đọc nội dung email của khách hàng sau đó phân loại nó vào 1 trong 3 nhóm: [SPAM], [BÌNH THƯỜNG], [KHẨN CẤP/KHIẾU NẠI]. Chỉ trả về đúng tên nhãn, không nói thêm gì khác."*
3. Tiếp theo, dùng node **Switch** (ngã ba đường) của n8n:
   - Nếu AI trả về \`[SPAM]\`: Nối vào node Gmail Action và đánh dấu là Đã đọc hoặc Xóa.
   - Nếu \`[KHẨN CẤP]\`: Nối vào node gửi tin nhắn Telegram báo động ngay cho Quản lý.
   - Nếu \`[BÌNH THƯỜNG]\`: Chuyển sang bước soạn thư tự động ở bài tiếp theo.
`;

export const sk_11_3 = `
### 🎯 Mục tiêu bài học
Tiết kiệm 90% thời gian gõ bàn phím bằng cách để AI tự tìm hiểu thông tin và viết sẵn nháp trả lời (Draft).

### ✍️ Tự động soạn Bản nháp (Drafting)
Với các thư được gán nhãn \`[BÌNH THƯỜNG]\` (hỏi đáp sản phẩm, báo giá):

1. **RAG (Tùy chọn):** Nối n8n vào database sản phẩm hoặc dùng node HTTP gọi đến kho tài liệu công ty để AI biết thông tin giá cả.
2. **Node OpenAI (Viết thư):**
   - *Prompt:* "Dựa vào câu hỏi của khách hàng, hãy viết một email trả lời thật lịch sự, chuyên nghiệp. Xưng hô là 'Kính gửi Quý khách'. Chào mời họ gọi số Hotline để tư vấn thêm."
3. **Node Gmail (Action):** Thay vì chọn Send Email (Gửi đi luôn hơi rủi ro), hãy chọn **Create Draft** (Tạo bản nháp).
   - Truyền nội dung AI vừa viết vào phần Body.
   - Truyền email của khách hàng vào phần To.

Xong! Giờ đây mỗi sáng tới công ty, bạn chỉ cần mở mục Bản nháp (Draft) ra, đọc lướt lại các thư AI đã viết sẵn và bấm "Gửi". Cực kỳ nhàn nhã!
`;
