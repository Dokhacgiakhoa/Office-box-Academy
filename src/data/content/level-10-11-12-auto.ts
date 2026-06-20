export const sk_10_1 = `
### 🎯 Mục tiêu bài học
Nhờ AI tự động hóa việc lùng sục tin tức nóng (RSS) mang về n8n mà không cần bạn phải rành công nghệ.

### 📰 Cào tin tức (RSS) bằng Meta-Prompting
Để làm máy xào bài, bạn cần "hút" tin bài báo mạng về. Nhưng RSS là gì? Làm sao để tìm link RSS của báo VnExpress? Đừng lo!

**Hãy vào ChatGPT và nói (Meta-prompting):**
> *"Tôi đang dùng n8n và muốn hút tự động các bài báo mới nhất thuộc chuyên mục Kinh Doanh của trang vnexpress.net.*
> *Tôi chả biết RSS là cái gì. Bạn hãy vào trang web đó, tìm cho tôi cái link RSS, và chỉ tôi cách nhét cái link đó vào cái node nào trong n8n để chạy được."*

ChatGPT sẽ tự đi sục sạo trên mạng, lôi ra đường link \`https://vnexpress.net/rss/kinh-doanh.rss\` và hướng dẫn bạn kéo node \`RSS Read\` thả vào luồng một cách cực kỳ chi tiết!
`;

export const sk_10_2 = `
### 🎯 Mục tiêu bài học
Ép AI đọc bài báo khô khan, dùng công thức RTF viết lại thành một status câu view giật gân, rồi tự ấn nút "Đăng" lên Facebook.

### ✍️ Nhờ AI xào bài & Đăng tự động (RTF)
Sau khi hút bài báo về bằng RSS, bạn truyền nó vào Node \`OpenAI\`. Áp dụng ngay công thức **RTF** ở Level 1:

> *"Role: Một reviewer mặn mòi, thích cà khịa nhẹ nhàng trên Mạng xã hội.*
> *Task: Viết lại bài báo này thành 1 status câu tương tác. Không copy y nguyên.*
> *Format: Dưới 150 chữ, xuống dòng thoáng, có chứa 3 icon hài hước và hashtag #TinTuc. Đừng chào hỏi dông dài."*

Sau đó, kéo luồng nối thẳng vào Node \`Facebook Graph API\`. Nếu bạn không biết setup API của Facebook? Áp dụng bài học Level 7: **Copy toàn bộ tài liệu của Facebook quăng cho AI và bắt nó chỉ cách lấy Token!** Thế là cứ 8h sáng, Fanpage tự động xào bài và đăng mượt mà!
`;

export const sk_11_1 = `
### 🎯 Mục tiêu bài học
Chế tạo Robot soi bảng giá (Vàng, Chứng khoán, Crypto) từng phút một. Không cần biết code API, cứ để AI dọn cỗ.

### 📈 Tự động lấy số liệu (Hỏi AI cách gọi API)
Bạn muốn làm Bot báo giá Vàng, nhưng bạn không biết lấy số liệu ở đâu?

**Dùng Kỹ thuật Đảo ngược (Reverse Prompting):**
> *"Tôi muốn làm bot theo dõi giá Vàng SJC bằng n8n. Tôi cần lấy dữ liệu miễn phí trên mạng. Đóng vai chuyên gia lập trình, hãy cho tôi biết: Tôi nên dùng Node nào trong n8n? Lấy đường link API ở đâu? Điền vào như thế nào? Hãy chỉ từng bước cho người mù công nghệ."*

AI sẽ chỉ cho bạn cách kéo Node \`HTTP Request\`, chỉ luôn cho bạn đường link API của trang giá Vàng, và cách chích xuất đúng cái con số cần tìm. Bạn chỉ việc làm theo như 1 con vẹt!
`;

export const sk_11_2 = `
### 🎯 Mục tiêu bài học
Dạy Bot tự đặt điều kiện (IF) và bắn tin nhắn cảnh báo hú còi vào Telegram khi có "biến".

### 🚨 Rẽ nhánh Điều kiện & Bắn tin Telegram
Có con số giá Vàng rồi, làm sao để nó "hú còi"? Bạn kéo Node \`IF\` ra nhưng thấy một đống ô cấu hình loằng ngoằng.

**Đừng nản, lại gọi AI:**
> *"Tôi đã lấy được giá Vàng là 85000. Tôi muốn cấu hình Node IF trong n8n: Nếu giá > 88000 thì đi vào nhánh True. Tôi điền thế nào?"*

Sau khi làm xong IF, cắm Node \`Telegram\` vào nhánh True. Nhờ AI viết luôn cái thư cảnh báo (Áp dụng RTF): *"Role: Cảnh sát. Task: Cảnh báo giá Vàng bốc đầu. Format: Kèm theo icon xe cứu thương và số liệu cụ thể."* Mọi thứ sẽ vào guồng tự động hoàn toàn!
`;

export const sk_12_1 = `
### 🎯 Mục tiêu bài học
Khắc phục nhược điểm "ngu ngốc" khi bắt 1 con AI làm mọi việc. Lập nhóm 3 con AI (Multi-Agent) chuyên môn hóa sâu.

### 🤝 Xây dựng Đội nhóm AI siêu đẳng
Nếu bạn bắt ChatGPT vừa nghĩ kịch bản, vừa viết blog, vừa thiết kế ảnh... nó sẽ làm rất dở. Hãy chia quy trình thành 3 Node \`OpenAI\` nối tiếp nhau trong n8n.

- **AI số 1 (Giám đốc Sáng tạo):** Truyền chỉ thị: *"Mày chỉ tập trung nghĩ ra 3 cái ý tưởng điên rồ nhất về chủ đề này cho tao."*
- **AI số 2 (Biên tập viên):** Lấy kết quả của AI 1 làm đầu vào. Dùng **Công thức RTF**: *"Lấy ý tưởng tốt nhất trong 3 ý kia, đóng vai Blogger viết thành bài 500 chữ."*
- **AI số 3 (Nhà thiết kế):** Lấy kết quả của AI 2. Dùng **Công thức CREATE**: *"Đọc bài viết trên, tự thiết kế cho tao 1 câu Prompt vẽ ảnh chuẩn công thức CREATE bằng tiếng Anh."*

Bạn chỉ cần điền đúng 1 chữ đầu vào "Chủ đề Cà phê", hệ thống dây chuyền này sẽ tự động tuôn ra bài viết hoàn chỉnh và ảnh sắc nét đến rợn người!
`;
