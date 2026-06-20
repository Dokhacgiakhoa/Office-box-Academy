export const sk_7_1 = `
### 🎯 Mục tiêu bài học
Quẳng hết mớ lý thuyết khô khan về "Tự động hóa", "Webhook", "API" đi. Không biết thì cứ đem tài liệu hỏi thẳng AI!

### ⚙️ Nhờ AI dạy cách bấm nút (n8n/Zapier)
Sếp yêu cầu bạn: "Làm sao để khi có khách điền Form, thông tin tự chạy vào Google Sheets?". Bạn chưa dùng n8n bao giờ. Thay vì lên mạng đọc hướng dẫn lằng nhằng, hãy mở ChatGPT lên.

**Prompt (Meta-prompting):**
> *"Tôi muốn tự động hóa việc lấy dữ liệu từ Google Form sang Google Sheets bằng nền tảng n8n. Tôi là dân văn phòng không biết lập trình, không hiểu API hay Webhook là gì.*
> *Đóng vai chuyên gia tự động hóa, hãy giải thích khái niệm cho tôi bằng ngôn ngữ bình dân (ví dụ như ống nước, bưu điện). Sau đó, hãy cầm tay chỉ việc, hướng dẫn tôi từng bước MỘT: bấm vào nút nào, chọn cái gì đầu tiên."*

AI sẽ tự động dịch các khái niệm phức tạp thành "ngôn ngữ con người" và chỉ cho bạn cách kéo thả từng bước một!
`;

export const sk_7_2 = `
### 🎯 Mục tiêu bài học
Gặp tài liệu kỹ thuật toàn mã code khó hiểu của các nền tảng (như Facebook API, Shopee API)? Cứ vứt hết vào não ChatGPT!

### 🌐 Dịch tài liệu Kỹ thuật bằng AI
Để 2 phần mềm nói chuyện được với nhau, chúng ta thường phải đọc "Tài liệu API" (API Documentation). Dân không chuyên nhìn vào là tẩu hỏa nhập ma ngay.

**Cách xử lý:**
1. Copy toàn bộ cái trang web Tài liệu API đó (Đầy những chữ ngoằn ngoèo).
2. Dán vào ChatGPT.
3. **Prompt (CoT):** *"Đây là tài liệu API của Facebook. Tôi muốn lấy danh sách bài viết. Đừng giải thích lằng nhằng, hãy SUY NGHĨ TỪNG BƯỚC, nhặt ra đúng cái Đường Link tôi cần nhập vào n8n, và chỉ cho tôi xem tôi cần copy cái Mã bảo mật (Token) ở đâu."*

Thế là xong! Bạn chẳng cần đi học một khóa lập trình nào cả.
`;

export const sk_8_1 = `
### 🎯 Mục tiêu bài học
Tự động gom thông tin khách hàng (Lead) về một chỗ bằng cách nhờ AI hướng dẫn setup luồng n8n.

### 📥 Kéo dữ liệu khách hàng vào Google Sheets
Bây giờ, bạn bắt đầu làm thực hành. Bạn đã mở n8n lên, kéo node Webhook và node Google Sheets ra. Nhưng đến phần điền thông tin (Mapping) thì bạn rối.

**Đừng tự mò mẫm, hãy nhờ AI:**
> *"Tôi đang ở trong n8n. Tôi có node Webhook nhận dữ liệu là {Tên, Số điện thoại}. Tôi muốn điền nó vào Node Google Sheets. Tôi phải bấm vào chỗ nào để nối dây chữ 'Tên' bên này sang cột 'Tên' bên kia? Hãy hướng dẫn tôi thao tác kéo thả bằng chuột."*

Làm theo đúng những gì AI chỉ, thông tin khách hàng sẽ lập tức chui tọt vào file Excel của bạn ngay khi họ bấm đăng ký!
`;

export const sk_8_2 = `
### 🎯 Mục tiêu bài học
Để AI tự viết thư cảm ơn cá nhân hóa và tự động gửi đi ngay khi khách hàng vừa đăng ký.

### 💌 AI Tự soạn và Gửi Email chăm sóc
Bạn nối thêm Node Gmail vào sau Node Google Sheets ở luồng trước. Thay vì gửi một cái email khô khan kiểu "Cảm ơn bạn đã đăng ký", hãy nhờ AI làm cho nó sinh động.

1. **Gắn thêm Node OpenAI** vào giữa Sheets và Gmail.
2. Dùng công thức **RTF (Role-Task-Format)** đã học ở Level 1 vào Node OpenAI:
> *"Role: Nhân viên CSKH ngọt ngào.*
> *Task: Viết thư cảm ơn khách tên là {{Tên khách hàng}} vừa đăng ký nhận bản tin.*
> *Format: Ngắn 50 chữ, xưng hô 'em' và 'anh/chị', thân thiện."*
3. Đẩy kết quả (Output) của Node AI đó vào Node Gmail để gửi đi.

Thế là mỗi khách hàng sẽ nhận được một bức thư có văn phong riêng biệt, không ai giống ai!
`;

export const sk_9_1 = `
### 🎯 Mục tiêu bài học
Dạy AI làm cổng gác cửa: Tự đọc hộp thư công ty và gắn nhãn phân loại (Thư rác, Thư hỏi giá, Thư khiếu nại).

### 🧠 Phân loại Email (Zero-shot Prompting)
Mỗi ngày hòm thư nhận hàng trăm lá thư thập cẩm. Hãy đẩy tất cả vào ChatGPT.

**Prompt trong Node OpenAI:**
> *"Bạn là hệ thống phân loại hộp thư tự động. Đọc nội dung thư này: {{Nội dung thư}}.*
> *Chỉ trả về ĐÚNG MỘT TỪ trong 3 từ sau: [KHIEU_NAI], [HOI_GIA], [RAC]. Không giải thích."*

Bạn ép AI chỉ trả về đúng cái mã lệnh đó (Zero-shot). Sau đó dùng Node \`Switch\` của n8n (hoặc Router của Make):
- Nhánh 1: Nếu AI trả chữ [KHIEU_NAI] -> Báo động cho sếp.
- Nhánh 2: Nếu AI trả chữ [RAC] -> Thẳng tay xóa.
`;

export const sk_9_2 = `
### 🎯 Mục tiêu bài học
Không chỉ phân loại, ép AI tự động soạn sẵn một bản nháp trả lời (Draft) trong hòm thư, bạn chỉ cần liếc mắt rồi bấm nút Gửi.

### ✍️ AI tự làm Thư ký Soạn nháp (Ứng dụng CoT)
Với nhánh thư [HOI_GIA], đừng để nó nằm im. Hãy dùng kỹ thuật Chuỗi tư duy (Chain of Thought).

**Prompt cho Node OpenAI thứ hai:**
> *"Đây là email hỏi giá của khách. Dưới đây là bảng giá công ty tôi [Dán bảng giá].*
> *Đừng viết trả lời ngay. HÃY SUY NGHĨ TỪNG BƯỚC: Phân tích xem khách đang hỏi mua gói nào -> Tra bảng giá xem giá bao nhiêu -> Cuối cùng mới viết một bức thư trả lời lịch sự, báo giá chính xác gói đó."*

Sau đó, cấu hình Node Gmail là \`Create Draft\` (Tạo bản nháp). Sáng ra mở mail lên, bạn sẽ thấy hàng chục cái email đã được AI soạn sẵn, phân tích giá rổ chuẩn xác từng đồng, chỉ chờ bạn bấm "Send"!
`;
