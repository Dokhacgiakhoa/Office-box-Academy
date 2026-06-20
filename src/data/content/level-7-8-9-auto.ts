export const sk_7_1 = `
### 🎯 Mục tiêu bài học
Từ bỏ tư duy "Nối dây kéo thả" (Trigger - Action) nhàm chán của năm cũ. Chào mừng đến kỷ nguyên của **Nhân sự Ảo Tự trị (Autonomous Agents)** trên nền tảng Lindy.ai hoặc n8n Agent.

### ⚙️ Tạo Nhân sự Ảo thay vì tạo Webhook
Ngày xưa, để chuyển dữ liệu từ Facebook sang Google Sheets, bạn phải nối hàng tá node. Nếu cấu trúc thay đổi, luồng sẽ bị gãy (Break).

**Năm 2026 (Với Lindy.ai):**
1. Bạn tạo một Agent tên là "Nhân viên CSKH".
2. Cấp cho nó quyền (Tool) truy cập Facebook Fanpage và Google Sheets của công ty.
3. **Lệnh bằng Tiếng Việt (Prompt):** *"Nhiệm vụ của bạn là trực Facebook. Bất cứ khi nào có người nhắn tin hỏi mua hàng, hãy nói chuyện với họ, xin số điện thoại, và tự động ghi tên họ vào file Google Sheets này. Nếu họ chửi rủa, tự động block."*

Xong! Bạn không cần kéo một cái dây nào. AI sẽ tự động lắng nghe, suy nghĩ lúc nào thì cần xin số điện thoại, và lúc nào thì cần dùng quyền mở Google Sheets để ghi vào!
`;

export const sk_7_2 = `
### 🎯 Mục tiêu bài học
Cho AI đọc các Tài liệu Kỹ thuật (API Docs) bằng **Agentic n8n**. AI tự đọc, tự hiểu và tự lắp ráp bộ công cụ cho chính mình.

### 🌐 AI tự dạy AI làm việc
Nếu hệ thống công ty bạn dùng một phần mềm đặc thù (VD: Phần mềm Kế toán MISA) chưa có sẵn kết nối trong Lindy hay n8n.

**Cách xử lý 2026:**
1. Copy toàn bộ tài liệu API của MISA quăng vào node \`AI Tool Creator\`.
2. Ra lệnh: *"Đây là tài liệu API của MISA. Hãy tự động đọc, phân tích các điểm cuối (Endpoints) và TỰ SINH RA (Generate) một công cụ kết nối mới. Tôi muốn công cụ này có khả năng Tạo Hóa đơn."*

Chỉ 1 phút sau, AI sẽ tự động đẻ ra một Node tên là "Tạo Hóa đơn MISA". Bạn lôi nó ra xài luôn, không cần viết một dòng mã Code hay Token loằng ngoằng nào!
`;

export const sk_8_1 = `
### 🎯 Mục tiêu bài học
Chăm sóc khách hàng kiểu 2026: Agent không chỉ lấy tên, số điện thoại mà còn tự đánh giá mức độ tiềm năng (Scoring) dựa trên ngữ cảnh trò chuyện.

### 📥 Đặc vụ phân tích Lead (Khách hàng tiềm năng)
Khách hàng không bao giờ nhắn tin theo một form chuẩn. Họ sẽ chat: *"E ơi, a thấy áo bên e đẹp, mà đắt quá, có giảm giá ko, sđt a 0912..."*

**Quy trình của Agent:**
- Agent tự động lọc mớ văn bản lộn xộn.
- Dùng **CoT (Chain of Thought)** ngầm định: Suy nghĩ xem ông này đang phàn nàn giá hay thực sự muốn mua?
- Cập nhật vào Google Sheets:
  - Cột Tên: (Tự suy luận hoặc hỏi lại)
  - Cột Số điện thoại: 0912...
  - Cột Phân loại: Khách quan tâm nhưng nhạy cảm về giá (HOT LEAD).

Đó là cách AI tự động hóa dựa trên Suy luận (Reasoning) chứ không dựa trên quy tắc tĩnh!
`;

export const sk_8_2 = `
### 🎯 Mục tiêu bài học
Tạo đặc vụ tự động Soạn, Phê duyệt (Approval) và Gửi Email bằng cơ chế **Human-in-the-loop (Có con người kiểm duyệt)**.

### 💌 Email Agent (Vừa Tự trị vừa An toàn)
Bỏ AI tự chạy gửi thư cho khách thì rất rủi ro. n8n 2026 có cơ chế **Wait for Human Approval**.

1. Đặc vụ tự động soạn 1 email xin lỗi một khách hàng VIP vừa phàn nàn.
2. Thay vì gửi đi, nó tự động nhắn 1 tin nhắn vào ứng dụng Slack/Zalo của bạn: *"Sếp ơi, em đã soạn xong thư gửi anh X. Sếp có duyệt để gửi không?"* kèm theo nội dung.
3. Bạn ấn nút **"Approve" (Duyệt)** ngay trên điện thoại.
4. AI nhận được lệnh duyệt, lúc đó nó mới nhả thư đi vào Hòm thư khách.

Bạn hoàn toàn làm chủ AI, bắt AI làm lính phục vụ tận răng!
`;

export const sk_9_1 = `
### 🎯 Mục tiêu bài học
Sử dụng AI Memory (Bộ nhớ dài hạn) để phân loại email thông minh. AI nhớ được lịch sử giao dịch của khách hàng cách đây 3 tháng.

### 🧠 Bộ não của Hộp thư (Long-term Memory)
Đừng bắt AI đoán mò. Các Agent 2026 được tích hợp bộ nhớ Vector (Vector Database / RAG).

- Khách hàng email: *"Gửi tôi lại hóa đơn lần trước nhé."*
- Hệ thống Agent đọc thư. Nếu là hệ thống cũ (2024), nó sẽ không hiểu "lần trước" là lần nào.
- Trợ lý AI 2026 sẽ chui vào Bộ nhớ Vector, tự tìm kiếm lịch sử: *"À, khách hàng này tên Tèo, 3 tháng trước mua 1 cái Máy Lạnh. Hóa đơn mã #123."*
- Sau đó, nó tự động chui vào phần mềm xuất hóa đơn, xuất PDF và tự động gửi lại cho khách.

Không cần bạn đụng dù chỉ một ngón tay!
`;

export const sk_9_2 = `
### 🎯 Mục tiêu bài học
Xây dựng **Routing Agent** (Đặc vụ Phân luồng) - Ông trùm của các con AI khác. 

### 🔀 Ông trùm AI phân việc cho Đệ tử AI
Khi công ty lớn lên, bạn có rất nhiều phòng ban.
Trong n8n, bạn thiết lập 1 Agent đứng ở cổng chính (Hộp thư công ty).
- Khách gửi thư Khiếu nại kỹ thuật -> Routing Agent đọc và ra lệnh: *"Alo, Đặc vụ Kỹ Thuật (Tech Agent), ca này của chú, xử lý đi."* Tech Agent sẽ tự động kiểm tra server, tra cứu tài liệu code và trả lời khách.
- Khách hỏi mua sỉ -> Routing Agent gọi: *"Đặc vụ Sales (Sales Agent), có khách sộp. Mày lục bảng giá đại lý và làm việc với người ta nhé."*

Đây là kiến trúc của một Hệ sinh thái Công ty Nhân sự Ảo!
`;
