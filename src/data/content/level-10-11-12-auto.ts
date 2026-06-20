export const sk_10_1 = `
### 🎯 Mục tiêu bài học
Xây dựng một "Cỗ máy xào bài" tự động: Cứ đến giờ là tự động đi lùng sục tin tức nóng hổi trên các trang báo điện tử mang về.

### 📰 Tự động đi cào tin tức (RSS)
Để giữ Fanpage luôn hoạt động, bạn không cần phải tự lên VnExpress hay CafeF để copy từng bài.

1. **Dùng RSS:** Hầu hết các báo điện tử đều có đường link RSS (Ví dụ: \`vnexpress.net/rss/kinh-doanh.rss\`). Đây là định dạng máy móc dễ đọc nhất.
2. Thêm node \`RSS Read\` vào n8n và dán đường link trên vào. Node này sẽ trả về ngay lập tức danh sách 10 bài báo mới nhất vừa được đăng.
3. Dùng node \`Item Lists\` của n8n để lọc ra: **"Tôi chỉ lấy bài báo mới nhất (dòng đầu tiên) để tránh đăng quá nhiều làm loãng Fanpage."**
`;

export const sk_10_2 = `
### 🎯 Mục tiêu bài học
Biến bài báo khô khan thành một status Facebook giật gân, bắt trend bằng cách dùng AI xào lại văn phong, sau đó tự động ấn nút "Đăng".

### ✍️ Nhờ AI xào bài & Đăng tự động
Lấy nội dung bài báo vừa tìm được ở bước trước truyền tiếp vào node \`OpenAI\`.

1. **Câu lệnh (Prompt):** *"Dựa vào tiêu đề và tóm tắt bài báo này, hãy viết một đoạn status Facebook thật hài hước, mỉa mai nhẹ nhàng để câu tương tác. Thêm hashtag #TienTe #KinhDoanh. Cấm copy y nguyên bài gốc."*
2. **Đăng bài Facebook:** Thêm node \`Facebook Graph API\`.
   - Lấy cái chuỗi chữ mà AI vừa đẻ ra, nhét vào ô \`Message\` (Nội dung bài viết).
   - Lấy cái đường link của bài báo gốc nhét vào ô \`Link\` (Để facebook hiện hình ảnh bài báo lên cho đẹp).
3. **Hẹn giờ chạy (Schedule):** Thay thế node đầu tiên bằng nút \`Schedule\`, đặt lịch cứ đúng **8:00 AM mỗi sáng** thì tự động kích hoạt luồng chạy. 

Vậy là trong lúc bạn đánh răng, Fanpage của bạn đã tự động cập nhật tin tức nóng hổi nhất trong ngày!
`;

export const sk_11_1 = `
### 🎯 Mục tiêu bài học
Chế tạo một con Bot tự động "hỏi giá" các trang tỷ giá Vàng, USD, hoặc Crypto liên tục từng phút một mà không biết mệt.

### 📈 Tự động lấy số liệu thời gian thực (Real-time)
Để làm điều này, chúng ta cần dùng node quyền lực nhất của n8n: **HTTP Request**.

1. Cài đặt nút \`Schedule\` chạy liên tục **1 phút / lần**.
2. Thêm node \`HTTP Request\` và chọn phương thức \`GET\`. Điền đường link API của một sàn giao dịch (Ví dụ: API lấy giá Bitcoin của sàn Binance).
3. Bấm chạy thử, kết quả trả về sẽ là một đoạn chữ (JSON) có chứa giá trị hiện tại, ví dụ: \`"price": "95000"\`.
4. Trích xuất đúng cái con số \`95000\` đó ra để dùng cho bước tiếp theo.
`;

export const sk_11_2 = `
### 🎯 Mục tiêu bài học
Dạy Bot biết suy nghĩ (Dùng điều kiện IF): Nếu giá cả êm đềm thì im lặng, nếu có "biến lớn" thì lập tức nhắn tin báo động.

### 🚨 Tạo luật cảnh báo & Bắn tin Telegram
Nếu 1 phút Bot lại nhắn tin một lần thì Group Zalo/Telegram của bạn sẽ thành đống rác. Ta cần thiết lập ngưỡng cảnh báo!

1. Thêm node \`IF\` (Rẽ nhánh điều kiện).
   - Cài đặt: Nếu Giá trị (Price) lớn hơn (>) 96.000 USD -> Nhánh True (Đúng).
   - Ngược lại -> Nhánh False (Sai).
2. Tại nhánh True, cắm node \`Telegram\` vào.
   - Nội dung tin nhắn: *"🚨 BÁO ĐỘNG: Giá BTC vừa phá vỡ mốc 96K! Giá hiện tại là {{Giá_hiện_tại}}."*
3. Nhánh False bạn để trống (bot sẽ tự ngắt luồng, không làm gì cả).

Thế là bạn đã sở hữu một trợ lý theo dõi thị trường tài chính chuyên nghiệp như các tay chơi phố Wall thực thụ!
`;

export const sk_12_1 = `
### 🎯 Mục tiêu bài học
Thoát khỏi cảnh dùng 1 con AI làm mọi việc. Biết cách chia việc cho nhiều con AI (Mỗi con đóng 1 vai trò chuyên môn) làm việc nối tiếp nhau trong cùng 1 luồng.

### 🤝 Xây dựng Đội nhóm AI (Multi-Agent)
Bạn không nên bắt 1 con ChatGPT vừa suy nghĩ ý tưởng, vừa viết bài, vừa dịch thuật vì nó sẽ làm rất dở. Hãy chia ra làm 3 node AI nối tiếp nhau.

- **AI số 1 (Giám đốc Sáng tạo):** Truyền chủ đề vào. Yêu cầu nó nghĩ ra 3 ý tưởng độc lạ nhất.
- **AI số 2 (Biên tập viên):** Lấy kết quả của AI số 1, chọn ra ý hay nhất và viết thành 1 bài blog dài 1000 chữ.
- **AI số 3 (Nhà thiết kế):** Lấy kết quả của AI số 2, đọc hiểu nó và tự động đẻ ra một câu lệnh (Prompt) bằng tiếng Anh miêu tả hình ảnh. Truyền câu lệnh đó sang một công cụ vẽ ảnh (như DALL-E hoặc Flux).

Kết quả cuối cùng: Bạn chỉ cần nhập đúng 1 chữ "Chủ đề: Cà phê", hệ thống tự động trả ra nguyên một bài báo dài kèm hình ảnh minh họa sắc nét do 3 con AI tự bàn bạc làm ra!
`;
