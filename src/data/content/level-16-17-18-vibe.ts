export const sk_16_1 = `
### 🎯 Mục tiêu bài học
Nhờ AI tự xây dựng luồng "Giỏ hàng" (Cart) phức tạp mà bạn không cần phải tính toán bất kỳ một con số nào.

### 🛒 Cơ chế Giỏ hàng (Nhờ AI tính tiền)
Web có giỏ hàng (E-commerce) phức tạp hơn Web thường ở chỗ nó phải tự cộng trừ tiền khi khách thêm món.

**Prompt (Meta-prompting):**
> *"Tôi muốn làm tính năng Giỏ hàng cho web bán Trà sữa. Tôi không rành về thuật toán cộng trừ tiền hay tính tổng phụ phí.*
> *Đóng vai Kỹ sư trưởng, bạn hãy thiết kế cho tôi cơ chế Giỏ hàng: Cần hiển thị những con số gì (Tạm tính, Phí ship, Tổng thanh toán)? Khi khách ấn 'Dấu cộng' thì tiền nhảy như thế nào? Sau khi tôi duyệt phương án của bạn, hãy code nó ra giao diện bằng React."*

Bạn đẩy phần "suy nghĩ logic" cho AI. Nó sẽ tự lập bảng tính toán và tự code ra một giỏ hàng chính xác đến từng đồng.
`;

export const sk_16_2 = `
### 🎯 Mục tiêu bài học
Gặp khái niệm hóc búa "Cơ sở dữ liệu" (Database / Supabase), hãy ép AI phải cầm tay chỉ việc hướng dẫn bạn cách cất đơn hàng.

### 💾 Kết nối Database bằng Meta-Prompting
Mua hàng xong thì đơn đi đâu? Phải chui vào Database (như Supabase).

**Prompt (Kỹ thuật CoT):**
> *"Khách bấm Thanh toán xong, tôi muốn lưu Tên khách và Món đồ họ mua vào Cơ sở dữ liệu Supabase. Nhưng tôi chưa dùng Supabase bao giờ.*
> *HÃY SUY NGHĨ TỪNG BƯỚC:* 
> *1. Hướng dẫn tôi vào trang web Supabase bấm tạo bảng tên là gì, có các cột gì?*
> *2. Chỉ tôi chỗ lấy link kết nối (API URL).*
> *3. Code đoạn Javascript để khi bấm nút Thanh toán, nó tự động lấy dữ liệu trên web bắn thẳng vào Supabase."*

Thay vì tự lên mạng tìm hiểu xem Database là gì, bạn biến AI thành ông thầy giáo IT tận tụy nhất thế giới!
`;

export const sk_17_1 = `
### 🎯 Mục tiêu bài học
Nhúng bộ não của ChatGPT vào website của bạn. Không biết API hoạt động ra sao? Hãy gọi AI ra tra khảo!

### 🧠 Tự cắm ống API ChatGPT vào Web
Bạn muốn website của mình có một nút Chat ở góc phải, khách nhắn vào thì có AI trả lời ngay.

**Prompt (Dùng AI hỏi AI):**
> *"Tôi muốn tự nhúng ChatGPT vào trang web của mình. Tôi biết tôi cần lấy một cái gọi là API Key từ OpenAI, nhưng tôi không biết cơ chế hoạt động của nó thế nào.*
> *Hãy giải thích thật dễ hiểu cho một người không biết code: API Key là gì? Khung chat trên web của tôi làm sao 'nói chuyện' được với máy chủ của OpenAI? Sau khi tôi hiểu, hãy hướng dẫn tôi code chức năng này."*

AI sẽ tự động giải thích API như cái ống nước truyền tin nhắn, và giúp bạn lắp ráp ống nước đó từ web của bạn sang máy chủ của nó!
`;

export const sk_17_2 = `
### 🎯 Mục tiêu bài học
Mất cảnh giác với API Key có thể khiến bạn mất hàng triệu đồng. Hãy nhờ AI chỉ cách "giấu nhẹm" mật mã này.

### 🔑 Giấu Chìa khóa (API Key) an toàn
API Key giống như thẻ ATM của bạn. Nếu bạn ném nó tơ hơ trên trang web, người khác ấn F12 sẽ ăn cắp được và dùng ChatGPT bằng tiền của bạn.

**Prompt (CoT - Bắt bệnh bảo mật):**
> *"Bạn vừa code cho tôi khung Chatbot gọi API OpenAI. Nhưng tôi sợ nếu tôi nhét API Key thẳng vào đoạn code này, hacker sẽ ăn cắp được.*
> *HÃY SUY NGHĨ TỪNG BƯỚC: Chỉ cho tôi cách tạo file biến môi trường (\`.env\`) để giấu Key ở dưới máy (Local), và cách giấu Key khi tôi tung web này lên Vercel (Production) để an toàn tuyệt đối 100%."*

Và thế là chuyên gia bảo mật AI sẽ hướng dẫn bạn cất kỹ chiếc thẻ ATM của mình một cách hoàn hảo!
`;

export const sk_18_1 = `
### 🎯 Mục tiêu bài học
Nắm thóp mọi phần mềm quản lý doanh nghiệp (SaaS) nhờ việc yêu cầu AI phân tích 4 chữ cái CRUD.

### 🔄 Dùng AI lập sơ đồ CRUD
Phần mềm quản lý công việc, quản lý kho, quản lý nhân sự... tất cả đều là **CRUD** (Tạo mới - Xem - Cập nhật - Xóa). Đừng vội nhào vào code ngay!

**Prompt (Thiết kế hệ thống):**
> *"Tôi muốn làm phần mềm To-do List (Quản lý công việc) cho nhân viên công ty. Trước khi code, hãy đóng vai Kiến trúc sư Phần mềm (Software Architect).*
> *Hãy kẻ cho tôi một cái bảng phân tích 4 chức năng CRUD (Create, Read, Update, Delete) của ứng dụng này. Tính năng 'Update' nên là Đổi trạng thái hay là Sửa nội dung? Hãy đề xuất cho tôi thiết kế hợp lý nhất."*

Một lần nữa, "Vô chiêu thắng hữu chiêu". Bạn nhường phần suy nghĩ kiến trúc cho AI. Nó nghĩ xong, bạn gật đầu thì nó mới được quyền code!
`;

export const sk_18_2 = `
### 🎯 Mục tiêu bài học
Tự làm hệ thống Đăng nhập (Login) và Phân quyền (Nhân viên / Giám đốc). Không biết code? AI sẽ lo!

### 📊 Phân quyền cực khó? Cứ để AI lo!
Trong phần mềm nội bộ, nhân viên nào chỉ được thấy việc của người đó. Khái niệm này gọi là RLS (Row Level Security). Nghe là thấy nhức đầu.

**Prompt (Meta-prompting Đỉnh cao):**
> *"Giao diện web đã xong. Bây giờ tôi cần tính năng Đăng nhập. Nhưng tôi muốn có Phân quyền: Đứa nhân viên A đăng nhập vào thì CHỈ THẤY công việc của A. Giám đốc đăng nhập vào thì THẤY TẤT CẢ.*
> *Tôi sử dụng cơ sở dữ liệu Supabase. Tôi hoàn toàn mù mờ về bảo mật. Bạn hãy chỉ tôi RÕ RÀNG: Tôi phải gõ cái lệnh quỷ quái gì vào Supabase để thiết lập được quyền bảo mật này? Hãy hướng dẫn như đang dạy trẻ con lớp 5."*

Chúc mừng! Bạn đã tốt nghiệp Lớp Vibe Coding xuất sắc nhất. Chẳng cần thuộc một dòng code nào, bạn vẫn thiết kế được những hệ thống trị giá hàng chục nghìn đô la chỉ bằng cách TỰ TIN RA LỆNH cho máy móc!
`;
