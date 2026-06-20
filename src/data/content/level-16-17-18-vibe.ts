export const sk_16_1 = `
### 🎯 Mục tiêu bài học
Nhường toán học và logic phức tạp cho **Claude Opus 4.8** tự suy nghĩ, tự code Hệ thống Thanh toán và Giỏ hàng thông minh.

### 🛒 Agentic E-Commerce (Code Giỏ hàng thông minh)
Hệ thống E-Commerce 2026 không chỉ cộng trừ tiền đơn thuần. Nó phải tự áp mã giảm giá, tính phí ship theo vị trí, quy đổi ngoại tệ.

**Giao nhiệm vụ cho Cursor Agent:**
> *"Xây dựng tính năng Giỏ hàng. Tôi muốn hệ thống có khả năng nhận diện mã giảm giá (Coupon).
> Hãy TỰ ĐỘNG chui vào Database (Supabase) tạo 1 cái bảng 'Coupons'. Viết hàm logic: Nếu khách nhập mã 'GIAM50', TỰ ĐỘNG quét xem mã đó có hợp lệ không, có bị hết hạn không, nếu hợp lệ thì trừ 50% tiền giỏ hàng.
> Làm ơn hãy code và test thử cho đến khi nào nhập mã GIAM50 nó báo xanh và trừ tiền đúng thì mới thôi."*
`;

export const sk_16_2 = `
### 🎯 Mục tiêu bài học
Quẳng tài liệu Supabase cho AI. Ép AI tự cấu hình Database, tự tạo bảng, tự viết API mà bạn không cần nhìn vào Database dù chỉ một lần.

### 💾 Đặc vụ Database (Database Agent)
Kết nối cơ sở dữ liệu từng là nỗi kinh hoàng. Năm 2026, AI tự làm điều đó thông qua AI Agent Node.

**Cách làm:**
1. Cung cấp chuỗi kết nối Supabase cho AI (Database Connection String).
2. **Ra lệnh (Prompt):** *"Nhiệm vụ của bạn là Quản trị viên Cơ sở dữ liệu (DBA). Đăng nhập vào Supabase bằng chuỗi này. Tự thiết kế một bảng 'DonHang' gồm các cột cần thiết nhất để bán Trà sữa. Tạo bảng xong thì báo tôi."*
AI sẽ chạy ngầm một tập lệnh SQL (Code thao tác dữ liệu), tự chui vào máy chủ Supabase của bạn đục đẽo, xây tường gạch, và quay ra báo cáo "Em xây xong rồi sếp".
`;

export const sk_17_1 = `
### 🎯 Mục tiêu bài học
Nhúng đặc vụ AI vào sản phẩm của bạn. Đừng gọi API thông thường, hãy gọi API tích hợp sẵn Agentic Workflow.

### 🧠 Tích hợp Agent vào phần mềm (SaaS)
Năm 2024, Chatbot chỉ biết trả lời bằng chữ. Năm 2026, Chatbot có thể TỰ BẤM NÚT giùm khách.

**Thiết kế chức năng (Agentic Tools):**
> *"Tôi muốn nhúng một con Chatbot Claude vào trang web bán hàng của tôi.
> Nhưng tôi không muốn nó chỉ biết nói chuyện. Hãy code cho tôi tính năng: Khi khách nhắn 'Hủy đơn hàng số 123 cho tôi', Chatbot của tôi sẽ HIỂU ý định, TỰ ĐỘNG chui vào cơ sở dữ liệu xóa đơn hàng 123, và báo lại 'Dạ em đã hủy xong'.
> Hãy cài đặt bộ công cụ (Function Calling / Tool Use) cho con Bot này."*
`;

export const sk_17_2 = `
### 🎯 Mục tiêu bài học
Giao tiếp bảo mật. Dùng Kỹ thuật CoT (Chuỗi tư duy) yêu cầu AI kiểm tra lỗ hổng bảo mật toàn hệ thống trước khi ra mắt.

### 🔑 Đặc vụ Bảo mật (Security Agent)
Một lỗ hổng bảo mật năm 2026 có thể làm sập cả hệ thống. Đừng tự giấu API Key bằng tay.

**Kích hoạt Kỹ sư Bảo mật ngầm:**
> *"Toàn bộ code dự án đã xong. Bây giờ, bật chế độ Đánh giá Bảo mật (Security Audit).
> HÃY SUY NGHĨ TỪNG BƯỚC: Quét hàng trăm file code của dự án. Tìm xem tôi có vô tình để lộ cái API Key OpenAI hay Supabase nào trong file không? Kiểm tra xem có lỗ hổng rò rỉ dữ liệu (Data leak) nào không? Nếu có, hãy XÓA ngay đoạn mã đó và tự động dời Key sang biến môi trường bí mật (.env). Chạy ngay đi!"*
`;

export const sk_18_1 = `
### 🎯 Mục tiêu bài học
AI vẽ sơ đồ toàn bộ hệ thống (Architecture) và tự động xây dựng một phần mềm quản lý doanh nghiệp (SaaS) khổng lồ chỉ từ 1 câu nhắc.

### 🔄 Kiến trúc sư AI đẻ ra phần mềm SaaS
Phần mềm SaaS (Quản lý kho, quản lý việc, chấm công) vô cùng phức tạp. 

**Tuyệt chiêu Tự động hóa Thiết kế 2026:**
> *"Tôi muốn làm một phần mềm Quản lý Dự án (SaaS) giống như Trello cho 500 nhân viên dùng. Đóng vai Tổng công trình sư (Chief Architect).
> Hãy đẻ ra một bản vẽ Thiết kế Hệ thống (System Architecture) chi tiết nhất. Viết rõ cần có bao nhiêu bảng Database (CRUD). Nếu tôi chốt bản thiết kế đó, hãy khởi động 3 Agent (Frontend, Backend, Tester) CÙNG NHAU CODE dự án này và hoàn thành trong vòng 3 tiếng."*
`;

export const sk_18_2 = `
### 🎯 Mục tiêu bài học
Bảo mật phân quyền cực cao (RLS) bằng AI. Hoàn tất quá trình xây dựng dự án. Trở thành Giám đốc công nghệ (CTO) thực thụ.

### 📊 Phân quyền cấp cao (RLS) bằng Agent
"Sếp vào thấy mọi việc, Lính vào chỉ thấy việc của mình". Đây là bài toán khó nhất.

**Dùng Cursor Agent giải quyết gọn gàng:**
> *"Hãy thiết lập chính sách Row Level Security (RLS) trên Supabase cho bảng Nhiệm vụ.
> Yêu cầu: Nếu là User có quyền 'Admin', được quyền XÓA mọi thứ. Nếu là quyền 'Employee', chỉ được quyền SỬA trạng thái công việc của chính mình, không được thấy việc của đứa khác.
> Tự động viết Rule SQL này và nạp thẳng vào Supabase cho tôi. Chạy một bài test đăng nhập thử 2 tài khoản xem quyền có đúng không rồi báo cáo."*

Chúc mừng! Ở năm 2026, bạn không còn là Thợ gõ code, bạn chính thức là một **Tổng Giám đốc Điều hành các Trí tuệ Nhân tạo** (AI Orchestrator)!
`;
