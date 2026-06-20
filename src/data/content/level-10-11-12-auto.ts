export const sk_10_1 = `
### 🎯 Mục tiêu bài học
Giao cho hệ thống việc "Làm báo cáo hàng ngày". Sếp không cần hỏi "Hôm nay làm được gì", Flow sẽ tự động gửi bảng kết quả vào nhóm Chat.

### 📅 Báo cáo Tự động Định kỳ (Schedule)
Thay vì kích hoạt luồng bằng sự kiện, chúng ta kích hoạt bằng Thời gian.
1. **Trigger:** Chọn **Schedule (Hẹn giờ)** -> Cài đặt: Đúng 17h00 mỗi ngày.
2. **Action 1 (Lấy dữ liệu):** Nối vào Google Sheets, cấu hình lệnh "Lấy toàn bộ dữ liệu cột Doanh Thu ngày hôm nay".
3. **Action 2 (Tính toán):** Nối vào Gemini, yêu cầu "Tính tổng số tiền và đếm xem có bao nhiêu đơn hàng thành công trong đống dữ liệu này. Viết một đoạn báo cáo ngắn gọn."
4. **Action 3 (Gửi tin):** Nối vào Google Chat (hoặc Zalo/Telegram). Bắn thẳng báo cáo của Gemini vào nhóm. Cứ 5h chiều là ting ting báo cáo!
`;

export const sk_10_2 = `
### 🎯 Mục tiêu bài học
Biến các báo cáo khô khan thành những bức tranh sinh động bằng biểu đồ tự vẽ và đính kèm vào tin nhắn báo cáo.

### 📊 Đính kèm Biểu đồ vào Báo cáo tự động
Không chỉ dừng ở báo cáo chữ, chúng ta cần số liệu trực quan.
- Chèn thêm một Action **QuickChart** (Hoặc một công cụ vẽ biểu đồ API) trước bước Gửi tin.
- Đẩy dữ liệu tính toán từ Gemini vào QuickChart để nó tạo ra một đường Link hình ảnh Biểu đồ Cột.
- Truyền đường link đó vào Node Google Chat. Vậy là tin nhắn báo cáo hàng ngày của bạn không chỉ có lời giải thích sắc bén của AI, mà còn đính kèm nguyên một cái biểu đồ doanh thu rực rỡ!
`;

export const sk_11_1 = `
### 🎯 Mục tiêu bài học
Đập tan nỗi sợ "Tích hợp API". Hiểu cơ chế ống nước truyền tin và tự lấy dữ liệu từ các hệ thống phần mềm khác (như Shopee, Lazada, hoặc giá Vàng).

### 🔗 Nhập môn kết nối API cơ bản
Nếu hệ thống bạn cần không có sẵn nút bấm trong Flow Google Labs, bạn dùng API.
- Cứ dùng Meta-Prompting hỏi Gemini: *"Tôi muốn lấy giá Vàng từ một web bằng API. Hãy cho tôi một link API miễn phí, và dạy tôi cách kéo node HTTP Request trong Flow Google Labs để lấy nó."*
- **Thực hành:** Kéo node **HTTP Request**. Dán đường link API vào. Chọn phương thức "GET". Ấn chạy thử. Bạn sẽ thấy luồng dữ liệu (JSON) chảy về hệ thống của bạn như ma thuật!
`;

export const sk_11_2 = `
### 🎯 Mục tiêu bài học
Đọc mớ dữ liệu API rối rắm (JSON) và chắt lọc ra đúng con số bạn cần để làm bot cảnh báo (Alert Bot).

### 🚨 Bot Cảnh báo Tỷ giá / Chứng khoán
Dữ liệu API trả về thường là một đống mã code ngoằn ngoèo.
- Không cần tự căng mắt ra tìm. Hãy quăng thẳng đống dữ liệu đó vào Node **Gemini AI**.
- **Prompt:** *"Đây là dữ liệu API trả về từ bảng giá chứng khoán. Đừng giải thích lằng nhằng, hãy nhìn vào đống code này và lôi ra cho tôi đúng 1 con số: Giá hiện tại của mã cổ phiếu FPT là bao nhiêu?"*
- Có con số rồi, dùng tính năng **Điều kiện (Condition/IF)**: Nếu giá < 100.000đ thì bắn tin nhắn Telegram *"Múc ngay sếp ơi!"*.
`;

export const sk_12_1 = `
### 🎯 Mục tiêu bài học
Đẳng cấp tối thượng của Flow Google Labs: Đưa quyền quyết định cho AI. Xây dựng một **Nhân sự Ảo (AI Agent)** tự vận hành mọi quy trình văn phòng.

### 🧠 Xây dựng Agent (Nhân sự Ảo) trên Flow
Bình thường bạn kéo dây theo một đường thẳng cố định. Giờ đây, bạn gắn một con Agent vào giữa luồng và trao cho nó các "Công cụ" (Tools).
- Bạn đưa cho Agent 3 quyền: 1. Quyền đọc file Google Drive, 2. Quyền ghi Google Sheets, 3. Quyền gửi Email.
- **Nhiệm vụ:** *"Khi có người nhắn tin trên Facebook, hãy nói chuyện với họ. Tự bạn hãy phán đoán xem họ muốn gì. Nếu họ hỏi bảng giá, dùng quyền (1) để tìm báo giá. Nếu họ chốt mua, dùng quyền (2) để ghi đơn. Nếu họ muốn phàn nàn, dùng quyền (3) gửi mail cho sếp."*
`;

export const sk_12_2 = `
### 🎯 Mục tiêu bài học
Quản trị rủi ro. Đặt "vòng kim cô" (Guardrails) cho Nhân sự Ảo để nó không nói bậy hoặc gửi những hóa đơn sai sót.

### 🛡️ Guardrails và Quản lý Bầy đàn Agent
Khi trao quyền quá nhiều cho AI, nó có thể bị "ảo giác" (Hallucination).
- Chúng ta thiết kế một luồng Flow gồm 2 Agents.
- **Agent 1 (Nhân viên Sale):** Soạn báo giá cho khách hàng dựa trên yêu cầu của họ.
- Thay vì gửi ngay cho khách, kết quả của Agent 1 phải chạy qua **Agent 2 (Trưởng phòng Kiểm duyệt)**.
- **Luật của Agent 2:** *"Đọc kỹ báo giá của Agent 1. Nếu thấy nó giảm giá quá 10%, HỦY NGAY và báo cáo cho tôi. Chỉ khi nào giá chính xác mới được gọi Node Gmail để gửi đi."*
Đây là cấu trúc của một Công ty tự động hoàn chỉnh, nơi AI làm việc và tự giám sát lẫn nhau!
`;
