export const sk_18_1 = `
### 🎯 Mục tiêu bài học
Bóc tách linh hồn của mọi phần mềm quản lý: Cấu trúc CRUD (Thêm, Sửa, Xóa, Đọc) và hệ thống phân quyền cơ bản.

### 🔄 Luồng dữ liệu (CRUD) và User Flow
Phần mềm quản lý công việc (To-do App) nghe thì to tát, nhưng thực chất chỉ xoay quanh 4 chữ viết tắt là **CRUD**:
- **C - Create (Thêm):** Nhân viên tạo một công việc mới.
- **R - Read (Đọc):** Xem danh sách các công việc đã tạo.
- **U - Update (Sửa):** Đánh dấu công việc từ "Đang làm" sang "Hoàn thành".
- **D - Delete (Xóa):** Xóa bỏ một công việc bị hủy.

Ngoài ra, ứng dụng cần một cổng bảo vệ (Đăng nhập/Đăng ký) để biết ai đang vào xem. Khi làm việc với AI, hãy chia nhỏ luồng ra: *"Làm cho tôi màn hình Đăng nhập trước. Xong rồi mới tới màn hình thêm công việc"*.
`;

export const sk_18_2 = `
### 🎯 Mục tiêu bài học
Sử dụng Vibe Coding để đúc ra một giao diện bảng điều khiển (Dashboard) sang trọng, chuyên nghiệp không kém gì các phần mềm đắt tiền.

### 📊 Dựng Giao diện Dashboard Quản trị
Dashboard cần rõ ràng, dễ nhìn và tổng hợp thông tin tốt.

*Prompt gợi ý:*
*"Viết giao diện Dashboard quản lý công việc (SaaS) bằng React + TailwindCSS.
- Cột bên trái (Sidebar): Chứa logo công ty, menu (Trang chủ, Dự án, Báo cáo, Cài đặt).
- Phần chính giữa:
  - Trên cùng có 3 thẻ tóm tắt (Cards): Tổng số việc, Việc đã xong, Việc quá hạn.
  - Phía dưới là một Bảng (Table) danh sách công việc gồm các cột: Tên việc, Người phụ trách, Trạng thái (dùng badge màu sắc), Hạn chót.
  - Trang trí giao diện theo phong cách tối giản (Minimalism) với nền xám nhạt, bảng màu trắng viền mờ."*

AI sẽ lập tức phác thảo ra một giao diện đẹp mỹ mãn chỉ trong vài giây.
`;

export const sk_18_3 = `
### 🎯 Mục tiêu bài học
Gắn hệ thống bảo mật để dữ liệu không bị lộ: Sếp nhìn thấy mọi thứ, nhân viên chỉ nhìn thấy việc của mình.

### 🔒 Cấu hình Phân quyền (Row Level Security)
Đây là bước quyết định một phần mềm có dùng được cho doanh nghiệp hay không. Nếu dùng Supabase làm Database:

1. Thiết lập **Authentication:** Nối giao diện Đăng nhập của bạn với API Auth của Supabase để có chức năng cấp tài khoản.
2. Bật **Row Level Security (RLS)** trên bảng \`tasks\` (công việc).
3. Viết chính sách (Policy) - hoặc nhờ AI viết hộ mã SQL:
   - *"Nhân viên (Role = User) chỉ được quyền SELECT (xem) và UPDATE (sửa) những dòng dữ liệu mà cột \`assigned_to\` trùng với \`user_id\` của họ."*
   - *"Quản lý (Role = Admin) được quyền SELECT tất cả."*

Chúc mừng! Khóa học đã kết thúc. Bạn đã chính thức tiến hóa từ một người dùng văn phòng bình thường thành một Nhà sáng tạo phần mềm bằng trí tuệ nhân tạo (Vibe Coder)!
`;
