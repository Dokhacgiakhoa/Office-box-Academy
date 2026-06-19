export const sk_12_1 = `
### 🎯 Mục tiêu bài học
Vượt qua nỗi sợ lập trình bằng cách làm quen với khái niệm API và HTTP Request - chìa khóa để mọi phần mềm trên thế giới nói chuyện với nhau.

### 🌐 Hiểu về API và HTTP Request
Tưởng tượng n8n là bạn, còn API là một người bồi bàn.
Bạn không thể đi thẳng vào bếp xem có món gì, bạn phải gọi bồi bàn (API) và yêu cầu: *"Cho tôi xin thông tin giá Bitcoin hiện tại"*. Việc bạn gọi món chính là hành động **HTTP Request**.

- **URL (Địa chỉ):** Nơi bồi bàn đứng đợi lệnh (ví dụ: \`api.binance.com\`).
- **Method (Phương thức):** 
  - \`GET\`: Xin dữ liệu (Lấy giá Vàng, xem thời tiết).
  - \`POST\`: Gửi dữ liệu đi (Đăng bài, nhắn tin).

> Trong n8n, Node **HTTP Request** là node quyền lực nhất. Nếu bạn biết dùng nó, bạn có thể kết nối với 99% các phần mềm trên thế giới kể cả khi n8n chưa hỗ trợ chính thức phần mềm đó.
`;

export const sk_12_2 = `
### 🎯 Mục tiêu bài học
Cấu hình n8n tự động "hỏi giá" các sàn giao dịch một cách liên tục mà không bao giờ biết mệt.

### 📈 Lấy dữ liệu Thời gian thực (Real-time)
Để lấy giá Bitcoin (BTC), chúng ta sẽ dùng API miễn phí của sàn Binance.

1. Đặt node đầu tiên là **Schedule Trigger** (Hẹn giờ). Cài đặt cho nó chạy \`Every 1 Minute\` (Mỗi 1 phút 1 lần).
2. Thêm node **HTTP Request**.
   - Method: Chọn \`GET\`.
   - URL: Nhập \`https://api.binance.com/api/v3/ticker/price?symbol=BTCUSDT\`
3. Bấm **Test Step**, bạn sẽ thấy nó trả về một chuỗi JSON có chứa tham số \`price\`, ví dụ: \`"95000.50"\`.

Bây giờ, cứ mỗi 60 giây, n8n của bạn sẽ lấy được cập nhật giá mới nhất từ sàn. Bạn có thể làm tương tự với API của các trang web tỷ giá Vàng hoặc Chứng khoán.
`;

export const sk_12_3 = `
### 🎯 Mục tiêu bài học
Biết cách dùng toán tử rẽ nhánh (IF) để đưa ra quyết định: Chỉ báo động khi có biến lớn, nếu thị trường êm đềm thì im lặng.

### 🔔 Cấu hình Bot Báo động Telegram
Nếu cứ 1 phút lại nhắn tin báo giá thì Group Telegram của bạn sẽ thành đống rác Spam. Ta cần thiết lập ngưỡng cảnh báo (Alert Threshold).

1. Sau node HTTP (lấy giá), thêm node **IF** (Rẽ nhánh).
   - Ở nhánh \`True\`, đặt điều kiện (Condition): Number -> Value 1: Kéo thả cái giá \`price\` ở node trước vào -> Operator: \`Larger\` (Lớn hơn) -> Value 2: \`96000\`.
   - Nghĩa là: Nếu giá BTC vượt mốc 96.000$, luồng sẽ chạy tiếp. Nếu không, nó sẽ dừng lại.
2. Tại nhánh \`True\` (Thỏa điều kiện), thêm node **Telegram**.
   - Cần tạo 1 con Bot qua \`BotFather\` trên ứng dụng Telegram để lấy Token.
   - Thêm Bot vào nhóm Chat của bạn và lấy \`Chat ID\`.
   - Thiết lập n8n gửi tin nhắn (Send Message): *"🚨 BÁO ĐỘNG: Giá BTC vừa vượt mốc 96K! Giá hiện tại là {{ $json.price }} USDT"*.

Chỉ với 3 node đơn giản, bạn đã tự tạo được một con Bot theo dõi thị trường tài chính chuyên nghiệp không kém gì các tay chơi phố Wall!
`;
