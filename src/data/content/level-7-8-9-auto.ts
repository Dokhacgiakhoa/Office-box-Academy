export const sk_7_1 = `
### 🎯 Mục tiêu bài học
Gạt bỏ tư duy nối dây rườm rà của n8n hay Zapier. Làm quen với **Flow Google Labs** - Nền tảng tự động hóa siêu tinh gọn, do chính sếp thiết kế, dành riêng cho hệ sinh thái Google.

### ⚙️ Nhập môn Flow Google Labs
Flow Google Labs là nơi mọi thứ được đơn giản hóa đến mức tối đa. Bạn không cần hiểu API hay Webhook là gì, chỉ cần biết Kéo và Thả.
- **Khái niệm cốt lõi:** Mỗi luồng (Flow) gồm 1 **Trigger (Cò súng - Kích hoạt)** và các **Actions (Hành động)**.
- Khi có một sự kiện xảy ra (Ví dụ: Có người điền Form đăng ký), "cò súng" sẽ nổ, và kích hoạt một loạt các "hành động" đằng sau (Ví dụ: Nhắn tin Zalo báo sếp, Gửi email cảm ơn).
- **Thực hành:** Đăng nhập vào Flow Google Labs, tạo một Flow mới, đặt tên và khám phá giao diện thân thiện 100% tiếng Việt.
`;

export const sk_7_2 = `
### 🎯 Mục tiêu bài học
Thay vì tự mò mẫm cách nối dây, hãy để AI dạy bạn cách làm. Dùng tư duy **Meta-Prompting** để AI hướng dẫn bạn dùng Flow Google Labs.

### 🌐 Dùng AI học Flow Google Labs
Dù giao diện có dễ đến đâu, khi mới dùng bạn vẫn sẽ bỡ ngỡ. Đừng lên mạng tìm video hướng dẫn!
- **Prompt cho Gemini:** *"Tôi đang sử dụng Flow Google Labs. Tôi muốn làm một luồng: Khi có người comment trên Facebook, nó tự động tải ảnh avatar của người đó về Google Drive. Tôi là người không biết công nghệ. Hãy đóng vai một chuyên gia, hướng dẫn tôi chọn Trigger nào, kéo Action nào trong hệ thống Flow Google Labs để làm được việc này."*
AI sẽ biến thành gia sư 1 kèm 1, cầm tay chỉ chuột cho bạn từng bước hoàn hảo.
`;

export const sk_8_1 = `
### 🎯 Mục tiêu bài học
Không còn cảnh copy thông tin khách hàng từ Form sang Excel bằng tay nữa. Xây dựng cỗ máy hút khách hàng tự động 24/7.

### 📥 Tự động gom Lead (Khách hàng tiềm năng)
Khách hàng điền thông tin đăng ký tư vấn qua Google Forms. Bạn muốn thông tin này tự động chảy về một bảng tính.
1. **Trong Flow Google Labs:** Chọn Trigger là **Google Forms** (Khi có phản hồi mới).
2. Nối dây sang Action là **Google Sheets** (Thêm hàng mới).
3. **Mapping (Ghép nối):** Bấm vào cột Tên trong Sheets, chọn giá trị "Câu trả lời: Họ và Tên" từ Form. Bấm vào cột Số điện thoại, chọn giá trị "Câu trả lời: Số ĐT".
4. Ấn **Lưu & Bật Luồng**. 
Từ nay, cứ có khách đăng ký, dữ liệu sẽ tự động nhảy vào bảng tính Excel của bạn chưa đến 1 giây!
`;

export const sk_8_2 = `
### 🎯 Mục tiêu bài học
Quản lý tiến độ chăm sóc khách hàng bằng cách kết nối bảng tính Sheets với hệ thống phân chia công việc tự động.

### 🧑‍💻 Tự động Phân chia Công việc (Giao task)
Gom khách hàng về Sheets rồi, làm sao để chia cho nhân viên Sale gọi điện?
- Nối thêm một Action phía sau luồng trên: **Google Chat** (Hoặc Telegram).
- **Thiết lập:** Mỗi khi có 1 hàng dữ liệu mới xuất hiện trong Sheets, luồng sẽ tự động gửi 1 tin nhắn vào nhóm chat của công ty: *"Sếp ơi, có khách tên {{Họ Tên}} vừa đăng ký khóa học! Số điện thoại: {{Số ĐT}}. Nhân viên Sale số 1 mau gọi tư vấn nhé!"*
Sales nhận được tin nhắn là gọi ngay lập tức, tỷ lệ chốt đơn tăng gấp 3 lần vì khách hàng vừa điền form xong đã được tư vấn!
`;

export const sk_9_1 = `
### 🎯 Mục tiêu bài học
Dạy Flow Google Labs cách đọc hiểu Email để tự động phân loại: Thư nào là hỏi giá, thư nào là khiếu nại, thư nào là rác.

### 🧠 Phân loại Email tự động (Flow + Gemini)
Mỗi ngày hòm thư nhận hàng trăm lá thư. Đừng tự đọc!
1. **Trigger:** Khi có Email mới đến hộp thư Gmail.
2. **Action 1 (Bộ não):** Nối vào Node **Gemini AI**.
3. **Prompt trong Flow:** *"Đọc nội dung email này: {{Nội dung thư}}. Hãy phân tích và trả về đúng MỘT TỪ trong 3 từ: [HOI_GIA], [KHIEU_NAI], [RAC]. Không giải thích thêm."*
4. **Action 2 (Bộ lọc Rẽ nhánh):** Nếu Gemini trả về [RAC], tự động đưa vào thùng rác. Nếu trả về [KHIEU_NAI], gắn cờ Đỏ (Quan trọng) để sếp xử lý.
`;

export const sk_9_2 = `
### 🎯 Mục tiêu bài học
Không chỉ phân loại, ép AI tự động soạn thư trả lời ngọt ngào và cá nhân hóa cho từng khách hàng, rồi ấn gửi đi.

### 💌 Tự động Gửi thư Cảm ơn (Cá nhân hóa)
Đối với luồng [HOI_GIA] (Hỏi báo giá), đừng để khách chờ lâu.
- Dùng tính năng Rẽ nhánh trong Flow Google Labs, kéo nhánh [HOI_GIA] xuống.
- Nối tiếp vào Node **Gemini AI** để tạo thư nháp (Dùng công thức RTF):
> *"Role: Nhân viên CSKH thân thiện.*
> *Task: Viết thư báo giá các gói Dịch vụ Vệ sinh cho khách tên là {{Tên người gửi}}.*
> *Format: Ngắn gọn, có lời chúc cuối tuần vui vẻ."*
- Nối kết quả của AI vào Node **Gmail (Gửi thư)**. Khách hàng sẽ nhận được một bức thư chuyên nghiệp, báo giá chính xác, và vô cùng thân thiện ngay lập tức!
`;
