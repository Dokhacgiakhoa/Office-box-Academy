export const sk_13_1 = `
### 🎯 Mục tiêu bài học
Hiểu cách tổ chức dữ liệu khách hàng (CRM) để máy móc và AI có thể dễ dàng phân tích và xử lý mà không bị lỗi.

### 🗂️ Cấu trúc dữ liệu chuẩn của Thẻ Khách Hàng
Khi một khách hàng đăng ký mua hàng, thông tin của họ cần được định dạng chuẩn xác trước khi ném vào bất kỳ hệ thống nào (Sheets, Hubspot, Lark...).

Một luồng dữ liệu (JSON) đi qua n8n lý tưởng nhất sẽ có dạng:
\`\`\`json
{
  "customer_id": "CUS_001",
  "full_name": "Nguyễn Văn A",
  "phone": "0901234567", // Không được chứa khoảng trắng hay dấu chấm
  "source": "Facebook Ads", // Nguồn khách từ đâu
  "order_value": 5000000, // Định dạng số (Number), không chứa chữ "VND"
  "status": "New Lead" // Trạng thái xử lý
}
\`\`\`

> **Lỗi thường gặp:** Mọi người hay gom họ và tên, số điện thoại vào chung 1 ô hoặc 1 cột. Điều này khiến AI hoặc các hàm Excel rất khó lọc dữ liệu sau này. Quy tắc vàng: **Mỗi loại thông tin phải nằm ở một cột/trường riêng biệt.**
`;

export const sk_13_2 = `
### 🎯 Mục tiêu bài học
Gom toàn bộ thông tin đăng ký (Leads) từ nhiều nguồn khác nhau (Website, Form, Ladipage) về chung một file Google Sheets duy nhất.

### 🌐 Hứng dữ liệu bằng Webhook
Khi có khách điền Form trên web, làm sao n8n biết?
Giải pháp là sử dụng **Webhook Trigger** - nó giống như một trạm bưu điện mở cửa 24/7 để chờ nhận thư.

1. Đặt node **Webhook** vào n8n. Copy cái đường link \`Test URL\` của nó.
2. Sang trang quản trị Website hoặc nền tảng tạo Form của bạn, dán link đó vào ô "Gửi dữ liệu qua Webhook".
3. Điền thử 1 Form nháp. Bùm! Dữ liệu của khách đã chui tọt vào n8n.
4. Thêm node **Google Sheets**. Chọn thao tác \`Append Row\` (Thêm dòng mới).
5. Nối các thông tin từ Webhook (Tên, SĐT, Email) khớp với từng cột tương ứng trong Sheet.

Từ giờ, không cần phải copy-paste thủ công mỗi khi có khách đăng ký nữa!
`;

export const sk_13_3 = `
### 🎯 Mục tiêu bài học
Thiết lập quy tắc chia việc (Routing) tự động: Khách xịn thì chia cho Sale cứng, khách thường thì chia xoay vòng đều cho các Sale.

### ⚖️ Chấm điểm (Lead Scoring) & Chia đơn (Round-Robin)
Đây là tính năng ăn tiền nhất của hệ thống CRM tự động.

1. **Chấm điểm khách hàng:** Thêm node **IF** kiểm tra \`order_value\`.
   - Nếu \`order_value > 20.000.000\`: Nhãn VIP.
2. **Luồng cho VIP:** Dùng node Telegram hoặc Slack, tag thẳng tên \`@truongphong_sale\` vào để chăm sóc 1-1 vì đây là "cá mập".
3. **Luồng cho khách thường:** Sử dụng thuật toán chia bài (Round-Robin).
   - Trong n8n, bạn có thể dùng một biến lưu trữ toàn cục (hoặc tham khảo số thứ tự dòng trên Sheets).
   - Ví dụ: \`Số thứ tự dòng % 3\`.
     - Dư 1: Gửi thông báo cho Nhân viên A.
     - Dư 2: Gửi thông báo cho Nhân viên B.
     - Dư 0: Gửi thông báo cho Nhân viên C.

Hệ thống sẽ chạy công bằng 100%, không lo Sale tị nạnh nhau chia đơn không đều!
`;
