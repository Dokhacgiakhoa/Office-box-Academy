export const sk_8_1 = `
### 🎯 Mục tiêu bài học
Hiểu được "trái tim" của mọi hệ thống tự động hóa: Cơ chế Trigger (Cò súng) và Action (Hành động).

### ⚙️ Nguyên lý cốt lõi của n8n
Bất kỳ một kịch bản (Workflow) nào trong n8n cũng bắt đầu bằng một **Trigger** và được nối tiếp bởi nhiều **Action**.
- **Trigger (Điều kiện kích hoạt):** Là sự kiện châm ngòi. Ví dụ: *Khi có email mới gửi đến*, *Mỗi ngày vào lúc 8h sáng*, hoặc *Khi có người điền form đăng ký*.
- **Action (Hành động):** Là việc hệ thống sẽ làm ngay sau đó. Ví dụ: *Gửi tin nhắn Telegram*, *Lưu data vào Google Sheets*, hoặc *Bắn dữ liệu sang ChatGPT để dịch*.

> **Bí kíp:** Để thiết kế một quy trình tự động, bạn chỉ cần trả lời 2 câu hỏi: "KHI NÀO thì bắt đầu?" và "LÀM NHỮNG GÌ tiếp theo?".
`;

export const sk_8_2 = `
### 🎯 Mục tiêu bài học
Biết cách thiết lập tài khoản n8n Cloud cực kỳ nhanh chóng để có thể làm quen ngay với giao diện mà không cần biết code hay cài đặt máy chủ.

### ☁️ Cài đặt bản Cloud (Phù hợp cho người mới)
Bản Cloud là bản do chính công ty n8n hosting, bạn chỉ cần đăng ký là xài ngay.

**Các bước thực hiện:**
1. Truy cập trang web: [n8n.io/cloud](https://n8n.io/cloud)
2. Bấm nút **"Start for free"** (Bắt đầu miễn phí).
3. Đăng ký bằng Email hoặc tài khoản Google của bạn.
4. Chọn tên miền (Workspace URL) cho không gian làm việc của bạn (VD: \`tencongty.app.n8n.cloud\`).

*Lưu ý: Bản Cloud có giới hạn số lượng công việc (Executions) chạy mỗi tháng trong gói Free. Khi thực hành xong bạn có thể cân nhắc chuyển sang bản Local ở bài tiếp theo để dùng vĩnh viễn không giới hạn nhé.*
`;

export const sk_8_3 = `
### 🎯 Mục tiêu bài học
Cài đặt n8n vĩnh viễn trên máy tính cá nhân bằng Node.js hoặc Docker. Bạn có thể chạy bao nhiêu luồng tự động tùy thích mà không mất một đồng phí nào!

### 💻 Hướng dẫn chạy n8n trên máy tính (Bản Local)
Cách dễ nhất là sử dụng Node.js (Yêu cầu máy tính đã cài đặt sẵn Node.js).

1. Mở Terminal (trên Mac) hoặc Command Prompt / PowerShell (trên Windows).
2. Gõ câu lệnh sau và nhấn Enter:
\`\`\`bash
npx n8n
\`\`\`
3. Đợi khoảng 1-2 phút để máy tính tải thư viện về.
4. Khi thấy dòng chữ hiển thị địa chỉ IP cục bộ, hãy mở trình duyệt web và truy cập vào:
**\`http://localhost:5678\`**

Tuyệt vời! Bạn đã sở hữu một máy chủ tự động hóa của riêng mình. Tất cả dữ liệu đều nằm an toàn trên máy tính của bạn.
`;
