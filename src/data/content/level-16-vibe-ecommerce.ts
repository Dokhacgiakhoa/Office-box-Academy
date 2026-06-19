export const sk_16_1 = `
### 🎯 Mục tiêu bài học
Bóc tách cơ chế hoạt động của một chiếc "Giỏ hàng điện tử" để bạn biết cách mô tả logic cho AI hiểu và lập trình.

### 🛒 Cơ chế của một Giỏ Hàng (Cart)
Khi lướt Shopee hay Tiki, bạn bấm "Thêm vào giỏ", một con số nhỏ nhỏ góc phải màn hình sẽ nhảy lên +1. Sự kỳ diệu đó dựa trên một khái niệm gọi là **Trạng thái (State)**.

- **Dữ liệu Sản phẩm (Data):** Là một danh sách (Array) chứa tên, giá, và link ảnh của đôi giày hoặc cái áo bạn định bán.
- **Biến Giỏ hàng (Cart State):** Là cái rổ điện tử để chứa đồ. Mỗi khi bấm nút "Thêm", hệ thống sẽ đẩy sản phẩm đó vào rổ.
- **Tính tổng tiền:** Code sẽ tự động lặp qua cái rổ, lấy (Giá x Số lượng) rồi cộng dồn lại để in ra cho khách hàng xem.

Hiểu được 3 ý này, bạn sẽ tự tin yêu cầu AI: *"Hãy tạo cho tôi một State để lưu trữ giỏ hàng, và tính tổng tiền khi có sản phẩm mới."*
`;

export const sk_16_2 = `
### 🎯 Mục tiêu bài học
Dùng Vibe Coding để phác thảo toàn bộ giao diện cửa hàng trực tuyến chỉ bằng vài dòng văn bản bằng tiếng Việt.

### 🛍️ Thực hành: Dựng Shop Bán Đồ Ăn Vặt
Vào v0.dev hoặc Claude và gửi chiếc Prompt sau:

*"Đóng vai là Lập trình viên Fullstack. Viết cho tôi giao diện một cửa hàng bán Đồ ăn vặt văn phòng bằng React.
1. Có một danh sách 4 sản phẩm mẫu (Khô gà lá chanh, Rong biển cháy tỏi, Bánh tráng trộn, Trà sữa) kèm giá tiền và ảnh minh họa giả lập.
2. Mỗi sản phẩm hiển thị dạng Thẻ (Card) có nút 'Thêm vào giỏ'.
3. Góc trên bên phải màn hình có một icon Giỏ hàng nhỏ hiển thị số lượng đồ đã chọn.
4. Khi bấm vào icon Giỏ hàng, sẽ hiện ra một cái bảng (Modal) liệt kê các món đã mua, tính tổng tiền (VND), và có một nút 'Thanh toán ngay'.
Hãy làm cho giao diện trông thật ngon miệng, tông màu cam vàng tươi sáng."*

Bạn sẽ ngạc nhiên khi thấy một shop online mọc lên chỉ trong nháy mắt!
`;

export const sk_16_3 = `
### 🎯 Mục tiêu bài học
Biết cách lưu trữ thông tin của người mua hàng (Tên, SĐT, Địa chỉ) vào một cơ sở dữ liệu thật để bạn có thể lên đơn giao hàng.

### 💾 Chạm tay vào Cơ sở Dữ liệu (Database)
Web đẹp đến mấy mà khách đặt xong bạn không biết họ là ai thì cũng vứt! Ta cần một nơi để chứa data.

1. **Sử dụng Supabase / Firebase:** Hãy coi đây là một cái file Excel khổng lồ trên mạng, dùng để lưu đơn hàng.
2. **Yêu cầu AI nối API:** 
   - *Prompt tiếp theo:* "Giao diện rất đẹp! Bây giờ, khi khách hàng bấm nút 'Thanh toán ngay', hãy hiện ra một cái Form yêu cầu điền Họ tên và SĐT. Sau khi điền xong, hãy viết code Javascript gọi API đẩy dữ liệu đơn hàng này lên Supabase (Bảng có tên là 'orders')."
3. **Theo dõi đơn:** Mở trang quản trị Supabase ra, bạn sẽ thấy thông tin của khách hàng nhảy vào liên tục y như có phép thuật. Bạn đã trở thành chủ của một hệ thống E-commerce thực thụ!
`;
