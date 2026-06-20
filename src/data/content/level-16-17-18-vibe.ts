export const sk_16_1 = `
### 🎯 Mục tiêu bài học
Giao trọng trách Kiến trúc sư Phần mềm cho Claude trong Antigravity. Ép AI tự nghĩ ra thuật toán cộng trừ tiền, áp mã giảm giá cho hệ thống Giỏ hàng.

### 🛒 E-Commerce Mini: Code Logic Giỏ Hàng
Hệ thống bán hàng yêu cầu những đoạn code toán học rắc rối (Tính VAT, Phí ship, Giảm giá).
- **Prompt:** *"Tôi đang làm tính năng Giỏ hàng. Tôi muốn hệ thống có khả năng nhận diện mã giảm giá (Ví dụ: BLACKFRIDAY). Bạn hãy tự thiết kế thuật toán: Nếu khách nhập mã đúng, kiểm tra xem đơn có trên 500k không, nếu có thì trừ 50k. Hãy tự động viết mã Javascript/TypeScript cho Logic này và tích hợp thẳng vào giao diện trang web hiện tại."*
Claude sẽ đóng vai Kỹ sư Backend, tự động viết các thuật toán tính tiền chuẩn xác đến từng đồng.
`;

export const sk_16_2 = `
### 🎯 Mục tiêu bài học
Cơ sở dữ liệu (Database) không còn là nỗi sợ. Quẳng thông tin kết nối (Supabase/Firebase) cho Antigravity Agent, nó sẽ tự động cấu hình từ A đến Z.

### 💾 Đặc vụ Database Tự xây nhà
Dữ liệu đơn hàng mua xong phải được lưu lại.
- **Thực hành:** Tạo một tài khoản Supabase, lấy chuỗi kết nối (Connection String).
- **Prompt:** *"Tôi muốn lưu thông tin khách mua hàng (Tên, SDT, Tổng tiền) vào Database. Đây là mã kết nối Supabase của tôi: [Dán mã vào]. Đóng vai Quản trị viên CSDL (DBA), bạn hãy TỰ ĐỘNG chui vào Terminal cài đặt thư viện kết nối, tự viết code tạo bảng 'DonHang', và code tính năng: Khách ấn nút Thanh Toán thì dữ liệu bay thẳng vào Database."*
Claude sẽ thao tác ngầm, lập trình chức năng kết nối máy chủ mà bạn không cần phải nhìn thấy một dòng lệnh SQL nào.
`;

export const sk_17_1 = `
### 🎯 Mục tiêu bài học
Học tuyệt kỹ "Đánh vật với Bug" (Auto-Healing) của Antigravity. Khi code lỗi, tuyệt đối không tự sửa, bắt AI tự gánh hậu quả do nó gây ra!

### 🐛 Auto-Debugging: Kỹ năng Đọc và Vứt Lỗi
Đang chạy trang web, tự nhiên màn hình đen xì và hiện ra một đống chữ đỏ loằng ngoằng.
- Đừng hoảng! Quét copy toàn bộ mớ chữ đỏ đó.
- Ném lại vào ô Chat của Antigravity.
- **Prompt (Áp dụng CoT):** *"Mã nguồn bạn vừa viết gây ra lỗi sập web. Đây là chi tiết lỗi báo trên màn hình: [Dán lỗi vào]. HÃY SUY NGHĨ TỪNG BƯỚC: Tự đọc lỗi, tự tìm xem dòng code nào bị sai, phân tích nguyên nhân vì sao sai. Sau đó, HÃY TỰ ĐỘNG CHUI VÀO file đó sửa lại cho đúng. Chạy kiểm tra lại, nếu vẫn lỗi thì tự sửa tiếp cho đến khi web chạy được thì thôi."*
`;

export const sk_17_2 = `
### 🎯 Mục tiêu bài học
Nâng cấp Kỹ thuật Auto-Debugging thành Kỹ năng Quản lý Phiên bản (Git). Lưu lại "điểm lưu game" trước khi nhờ AI sửa lỗi.

### 🔄 Quản lý Rủi ro với Điểm lưu game (Git)
Khi AI sửa lỗi, đôi khi nó làm hỏng cả những thứ đang chạy tốt (Lỗi hồi quy).
- Trước khi ra lệnh AI làm một chức năng lớn, hãy yêu cầu: *"Hãy tự động chạy lệnh 'git commit' để lưu lại toàn bộ mã nguồn hiện tại với tên 'Trước khi làm giỏ hàng'."*
- Lỡ Claude code hỏng bét và không thể sửa được, bạn chỉ cần ra lệnh: *"Bạn làm hỏng hệ thống rồi, không cần sửa nữa. Hãy chạy lệnh 'git quy hồi' (git revert / git reset) để đưa toàn bộ mã nguồn quay ngược lại thời điểm 'Trước khi làm giỏ hàng'."*
Đây là bài học bắt buộc để bảo vệ công sức hàng giờ của bạn!
`;

export const sk_18_1 = `
### 🎯 Mục tiêu bài học
Xây dựng một phần mềm Hệ thống nội bộ (SaaS) quy mô lớn bằng cách bắt AI vẽ sơ đồ CRUD trước khi gõ phím.

### 🔄 Bắt AI làm Kiến trúc sư (Thiết kế CRUD)
Làm phần mềm quản lý công việc (To-do List) cho 100 nhân viên.
- **Prompt:** *"Tôi muốn làm phần mềm To-do List bằng React và Supabase. Trước khi code, đóng vai Kiến trúc sư Phần mềm (Chief Architect), hãy thiết kế cho tôi 4 chức năng CRUD (Create, Read, Update, Delete) cho bảng 'CongViec'. Cột nào chứa dữ liệu gì? Giao diện thao tác ra sao? Hãy lập bảng phân tích. Nếu tôi đồng ý, bạn mới được bắt đầu lập trình."*
Bạn trao quyền suy nghĩ kiến trúc hệ thống cho AI, chỉ làm Sếp kiểm duyệt.
`;

export const sk_18_2 = `
### 🎯 Mục tiêu bài học
Giải quyết bài toán phân quyền phức tạp (Sếp thấy mọi việc, lính chỉ thấy việc của lính) bằng RLS, và tự động tung phần mềm lên mạng.

### 📊 Phân quyền RLS & Đưa dự án lên mạng (Deploy)
Phân quyền là thứ khó nhất trong làm SaaS.
- **Prompt Phân quyền:** *"Thiết lập chính sách bảo mật (Row Level Security) trên Supabase cho tôi. Rule 1: Thằng nhân viên chỉ đọc/sửa được Task do nó tạo. Rule 2: Giám đốc được quyền sửa và xóa mọi thứ. Hãy tự động viết mã SQL để thực thi lệnh này."*
- **Prompt Tung lên mạng:** *"Mọi thứ đã hoàn tất. Đóng vai Kỹ sư DevOps, hãy TỰ ĐỘNG mở Terminal, cài đặt công cụ Vercel CLI, và tự gõ lệnh để đẩy toàn bộ trang web này lên mạng Internet. Cung cấp cho tôi đường link cuối cùng để tôi gửi sếp xem."*
Chúc mừng! Bạn đã hoàn thành hành trình từ người mù công nghệ trở thành một Tổng Giám đốc AI thực thụ!
`;
