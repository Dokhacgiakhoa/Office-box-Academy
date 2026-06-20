export const sk_7_1 = `
### 🎯 Mục tiêu bài học
Hiểu rõ bản chất "Tự động hóa" (Automation) là gì. Thoát khỏi tư duy làm tay, chuyển sang tư duy xây dựng hệ thống tự chạy 24/7.

### ⚙️ Thế nào là Tự động hóa?
Bình thường, khi có sếp nhắn tin "Lập báo cáo đi", bạn sẽ phải tự mở Excel, điền số, rồi gửi lại sếp. Việc này tốn sức người.
Tự động hóa là việc bạn thiết lập sẵn một cái bẫy. Khi "bẫy" sập, máy móc sẽ tự làm phần việc còn lại.

Nó luôn bao gồm 2 thành phần:
1. **Trigger (Cò súng/Điều kiện kích hoạt):** "KHI CÓ điều gì đó xảy ra..." (Ví dụ: Khi đồng hồ điểm 8h sáng, Khi có Email mới đến).
2. **Action (Hành động):** "...THÌ LÀM việc này." (Ví dụ: Thì nhắn tin lên nhóm Zalo, Thì lưu vào file Excel).

Các công cụ như n8n, Zapier hay Make sinh ra chính là để giúp bạn kéo thả các Trigger và Action này nối vào nhau mà không cần biết lập trình!
`;

export const sk_7_2 = `
### 🎯 Mục tiêu bài học
Hiểu cách các phần mềm "nói chuyện" với nhau trên mạng Internet thông qua Webhook và API.

### 🌐 Ngôn ngữ của Máy móc (API & Webhook)
Để hiểu vì sao n8n có thể tự lấy thông tin từ Facebook rồi đẩy sang Google Sheets, bạn cần biết 2 khái niệm:

- **API (Người bồi bàn):** Bạn muốn lấy dữ liệu từ phần mềm khác, bạn gọi API. (Ví dụ: Hỏi API của Shopee "Giá áo này bao nhiêu?", Shopee trả lời "100k"). Việc này là bạn TỰ ĐỘNG đi hỏi (gọi là Polling/Request).
- **Webhook (Người đưa thư):** Bạn không thèm đi hỏi, bạn đứng ở nhà. Bạn cung cấp cho người ta một địa chỉ (Webhook URL). Khi nào có chuyện gì mới, người ta sẽ tự động ném thư vào địa chỉ nhà bạn. (Ví dụ: Khi có người điền Form khảo sát, nền tảng Form sẽ lập tức bắn thẳng dữ liệu sang Webhook của n8n).

> **Nhớ nhanh:** API là bạn phải đi LẤY, còn Webhook là người ta TỰ GỬI đến cho bạn.
`;

export const sk_8_1 = `
### 🎯 Mục tiêu bài học
Thiết lập đường ống tự động hứng thông tin khách hàng (Họ tên, SĐT) từ Website và ném gọn gàng vào một file Google Sheets.

### 📥 Hứng dữ liệu khách hàng (Webhook -> Sheets)
Giả sử bạn đang chạy quảng cáo trên Ladipage hoặc Google Form. 

1. **Khởi tạo Webhook:** Mở n8n lên, tạo node đầu tiên là \`Webhook\`. Nó sẽ sinh ra một đường link (URL).
2. **Gắn link vào Form:** Dán đường link Webhook đó vào mục cấu hình của trang Ladipage/Google Form.
3. **Thêm node Google Sheets:** 
   - Đăng nhập tài khoản Google của bạn vào n8n.
   - Chọn hành động là \`Append Row\` (Thêm một dòng mới xuống dưới cùng).
4. **Ghép nối:** Cầm con chuột, kéo chữ "Họ Tên" từ Webhook thả vào ô "Họ Tên" của Sheets, kéo chữ "SĐT" thả vào ô "SĐT" của Sheets.

Từ giây phút này trở đi, bất kỳ khách nào bấm nút đăng ký, tên của họ sẽ xuất hiện trong Excel của bạn chỉ sau 1 giây!
`;

export const sk_8_2 = `
### 🎯 Mục tiêu bài học
Gây ấn tượng mạnh với khách hàng bằng cách gửi Email hoặc tin nhắn cảm ơn NGAY LẬP TỨC ngay khi họ vừa đăng ký xong.

### 💌 Tự động Gửi Email chăm sóc
Nối tiếp luồng dữ liệu ở bài trước, sau khi thông tin đã chui vào Google Sheets, ta sẽ làm thêm 1 bước nữa.

1. Nối thêm node \`Gmail\` (hoặc Outlook) vào đằng sau node Google Sheets.
2. Đăng nhập tài khoản Gmail của công ty bạn.
3. **Cấu hình thư:**
   - Mục **To (Người nhận):** Kéo thả trường thông tin "Email" của khách hàng vào đây.
   - Mục **Subject (Tiêu đề):** *"Xác nhận đăng ký thành công khóa học Office Box!"*
   - Mục **Body (Nội dung):** *"Chào {{Tên Khách Hàng}}, cảm ơn bạn đã quan tâm. Chúng tôi sẽ gọi lại cho bạn qua số điện thoại {{Số Điện Thoại}} trong vòng 5 phút nữa nhé."*

Khách hàng vừa bấm đăng ký trên web xong, điện thoại ting ting báo có Email cảm ơn ngay tắp lự. Độ chuyên nghiệp tăng lên 100 lần!
`;

export const sk_9_1 = `
### 🎯 Mục tiêu bài học
Dạy AI đọc nội dung Email khách hàng gửi tới và tự động gắn nhãn phân loại (Ví dụ: Thư rác, Thư hỏi giá, Thư khiếu nại).

### 🧠 Dạy AI Phân loại Email
Hàng ngày hòm thư công ty nhận hàng trăm thư, lẫn lộn đủ thứ. Hãy để AI làm "thư ký lọc thư".

1. **Trigger:** Đặt node \`Gmail Trigger\` ở chế độ "Khi có thư mới chuyển đến" (chỉ lấy các thư Chưa đọc).
2. **AI phân loại:** Lấy nội dung thư vừa nhận, truyền vào node \`OpenAI\` (ChatGPT).
   - *Câu lệnh (Prompt):* "Bạn là thư ký đọc email. Hãy đọc bức thư này và phân loại nó vào đúng 1 trong 3 nhóm sau: [KHIẾU NẠI], [HỎI GIÁ], [RÁC]. Chỉ in ra tên nhóm, không giải thích gì thêm."
3. **Rẽ nhánh (Switch):** Thêm node \`Switch\` của n8n.
   - Nếu ChatGPT trả về chữ [KHIẾU NẠI] -> Chuyển luồng sang nhánh Báo động khẩn cấp cho sếp.
   - Nếu trả về [HỎI GIÁ] -> Chuyển luồng sang nhánh Tự động báo giá.
   - Nếu trả về [RÁC] -> Gắn nhãn Spam và xóa luôn khỏi hòm thư!
`;

export const sk_9_2 = `
### 🎯 Mục tiêu bài học
Không chỉ phân loại, AI còn tự động đóng vai nhân viên CSKH để soạn sẵn một bản nháp trả lời (Draft) lưu trong hòm thư chờ bạn duyệt.

### ✍️ AI tự động soạn Bản nháp trả lời
Đối với những email được phân loại là [HỎI GIÁ]:

1. Nối tiếp nhánh [HỎI GIÁ] vào một node \`OpenAI\` thứ hai.
2. *Câu lệnh (Prompt):* "Đóng vai nhân viên CSKH. Khách hàng vừa gửi email hỏi về sản phẩm công ty. Hãy soạn một email trả lời thật lịch sự, báo giá sơ bộ và mời họ gọi vào số Hotline 090xxxxxxx. Viết dưới 100 chữ."
3. Thêm node \`Gmail Action\`.
   - Lựa chọn hành động: \`Create Draft\` (Tạo bản nháp) thay vì \`Send Email\` (Gửi đi luôn).
   - Điền email người nhận và Nội dung mà AI vừa viết.

Mỗi sáng đến công ty, bạn chỉ cần mở mục Bản Nháp ra, xem AI đã viết sẵn hàng chục cái email trả lời. Bạn chỉ cần đọc lướt qua, thấy ổn thì bấm nút "Gửi". Tiết kiệm 90% thời gian gõ phím!
`;
