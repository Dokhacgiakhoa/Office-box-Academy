export const sk_16_1 = `
### 🎯 Mục tiêu bài học
Hiểu logic cốt lõi của một cái "Giỏ hàng" trực tuyến để dạy AI code giao diện mua bán chuẩn xác.

### 🛒 Cơ chế của Giỏ Hàng (Cart)
Làm thế nào mà khi bấm "Thêm vào giỏ", con số góc màn hình lại tự nhảy lên? Bí kíp nằm ở **Trạng thái (State)**.

- Bạn cần bảo AI tạo ra một cái "Rổ điện tử".
- Khi khách bấm chọn 1 Cốc trà sữa, hệ thống ném cái Cốc đó vào Rổ.
- AI sẽ tự động điếm số đồ trong Rổ và nhân với Giá tiền để in ra chữ "Tổng thanh toán: 50.000đ".

**Câu lệnh (Prompt) yêu cầu AI code:**
> "Tôi muốn làm web bán Trà sữa. Hãy dựng giao diện có 4 sản phẩm mẫu (có ảnh, giá tiền). Mỗi sản phẩm có nút 'Thêm vào giỏ'.
> Ở góc trên bên phải có Icon Giỏ hàng hiện số lượng. Khi bấm vào Icon đó, nó sẽ bật lên một bảng liệt kê các món đã chọn, tính tổng tiền, và có một nút 'Thanh toán ngay'. Giao diện màu trà sữa trân châu nhìn ngon mắt."
`;

export const sk_16_2 = `
### 🎯 Mục tiêu bài học
Kết nối cửa hàng với nơi cất giữ thông tin (Database) để bạn thực sự biết khách hàng là ai và họ đặt món gì.

### 💾 Lưu trữ Đơn hàng (Database)
Web đẹp đến đâu mà khách mua xong bạn không biết họ tên gì, ở đâu thì cũng vứt! Ta cần một Cơ sở dữ liệu (Ví dụ: Supabase, Firebase).

Hãy coi Database như một file Excel khổng lồ trên mạng không bao giờ bị mất dữ liệu.
1. Sau khi khách bấm "Thanh toán ngay" ở bước trên, hãy bảo AI: *"Hiển thị ra một cái Form bắt khách điền Tên, Số điện thoại và Địa chỉ giao hàng."*
2. Ra lệnh tiếp: *"Khi khách bấm Xác nhận, hãy viết code gửi các thông tin này (kèm danh sách món ăn) lưu thẳng vào bảng 'Orders' trên Supabase."*

Giờ đây, bạn chỉ cần mở trang quản trị Supabase ra là thấy đơn hàng nhảy tinh tinh liên tục. Chúc mừng "Chủ tịch" của một cửa hàng E-commerce thực thụ!
`;

export const sk_17_1 = `
### 🎯 Mục tiêu bài học
Hiểu cách một Website "nói chuyện" được với bộ não của ChatGPT thông qua một đường ống dẫn vô hình tên là API.

### 🧠 Nguyên lý hoạt động của Bot tư vấn
Khi khách hàng nhắn tin vào Khung chat trên web của bạn, đây là những gì diễn ra ở hậu trường:

1. **Khung Chat (Giao diện):** Nơi khách hàng gõ chữ "Tư vấn cho tôi đôi giày size 42".
2. **Ống dẫn (API):** Website sẽ lấy câu nói đó, nhét vào một cái phong bì, rồi gửi hỏa tốc thẳng đến máy chủ của OpenAI (Nơi chứa bộ não ChatGPT).
3. **Suy nghĩ & Trả lời:** ChatGPT mở phong bì ra đọc, suy nghĩ mất 2 giây, rồi viết câu trả lời: "Dạ bên em đang có mẫu giày X rất hợp với anh/chị". Nó nhét lại vào phong bì gửi về.
4. **Hiển thị:** Website nhận được thư và in ra dòng chữ đó cho khách xem.

Bằng cách này, website của bạn tuy nhỏ bé nhưng lại sở hữu trí tuệ của AI giỏi nhất thế giới!
`;

export const sk_17_2 = `
### 🎯 Mục tiêu bài học
Lấy chiếc "Chìa khóa" (API Key) từ OpenAI, lắp vào khung chat để nhúng Bot vào website thành công và an toàn.

### 🔑 Lắp ráp Chatbot và Giấu Chìa khóa
Để ChatGPT chịu trả lời thư của bạn (chứ không phải người lạ), bạn cần một thẻ VIP gọi là API Key.

1. **Lấy API Key:** Truy cập \`platform.openai.com\`, tạo một cái **Secret Key** (Ví dụ: \`sk-proj-xyz...\`).
2. **Nhờ AI Code Khung Chat:** Dùng Prompt: *"Viết cho tôi một khung Chatbot nhỏ ở góc phải dưới cùng màn hình. Khi gõ chữ bấm Gửi thì dùng Javascript gọi API đến OpenAI bằng cái Key này [Dán Key của bạn vào]."*
3. **Bảo mật Chìa khóa (Quan trọng):** ĐỪNG BAO GIỜ dán API Key thẳng vào đoạn code, vì người khác bấm F12 là ăn cắp được ngay. Kẻ gian có thể dùng thẻ VIP của bạn xài chùa khiến bạn bị trừ sạch tiền!
   - Hãy bảo AI: *"Hãy chỉ cho tôi cách cất giấu cái API Key này vào file biến môi trường \`.env\` và cách thiết lập trên Vercel để không bị lộ."*

Vậy là bạn đã có một nhân viên Sale 24/7 siêu việt, tư vấn không biết mệt!
`;

export const sk_18_1 = `
### 🎯 Mục tiêu bài học
Bóc tách 4 chữ cái quyền lực nhất giới lập trình: CRUD. Khái niệm cốt lõi để làm phần mềm quản trị (SaaS).

### 🔄 Luồng dữ liệu (CRUD)
Phần mềm quản lý công việc của đội nhóm (To-do App) nghe thì nguy hiểm, nhưng thực chất nó xoay quanh 4 thứ (gọi tắt là **CRUD**):

- **C - Create (Tạo mới):** Bạn phân công 1 việc mới cho nhân viên.
- **R - Read (Xem):** Nhân viên mở App lên nhìn thấy danh sách việc cần làm.
- **U - Update (Cập nhật):** Nhân viên bấm nút "Đã xong" để chuyển trạng thái công việc.
- **D - Delete (Xóa):** Sếp xóa bỏ một dự án bị hủy.

Khi ra lệnh cho AI code, hãy đi từ từ: *"Làm cho tôi cái danh sách hiển thị việc (Read) trước đã. Chạy ngon rồi thì làm thêm cái Nút Thêm Việc (Create) nhé."*
`;

export const sk_18_2 = `
### 🎯 Mục tiêu bài học
Nhờ AI dựng bảng điều khiển (Dashboard) sang trọng và làm tính năng "Ai làm việc nấy, không được dòm ngó nhau".

### 📊 Dựng Dashboard & Cấp Quyền Truy cập
Phần mềm nội bộ thì cần phải phân quyền rõ ràng, Sếp nhìn khác nhân viên nhìn.

1. **Dựng Giao diện (Prompt):**
> "Viết giao diện Dashboard quản lý công việc. Có Cột menu bên trái. Ở giữa có 3 ô tổng kết to: Tổng số việc, Việc đã xong, Việc trễ hạn. Ở dưới là một cái Bảng (Table) liệt kê các đầu việc. Làm giao diện màu Trắng - Xám nhạt nhìn sang trọng."
2. **Chức năng Đăng nhập:** Bảo AI gắn thêm màn hình Đăng nhập (Email/Mật khẩu). Không có tài khoản thì không được vào xem Bảng điều khiển.
3. **Phân Quyền:** Ra lệnh cho AI: *"Hãy lập trình chức năng kiểm tra: Nếu người đăng nhập là Nhân viên, chỉ hiển thị những Công việc được giao cho họ. Nếu là Giám đốc, hiển thị toàn bộ."*

Chúc mừng! Bạn đã hoàn thành khóa học Vibe Coding cuối cùng. Bạn chính thức có khả năng tự mình đẻ ra mọi phần mềm mình muốn mà không cần đi thuê kỹ sư IT nữa!
`;
