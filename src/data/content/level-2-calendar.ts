export const sk_2_1 = `
### 🎯 Mục tiêu bài học
Giúp bạn làm quen với hệ sinh thái Google Workspace và kích hoạt trợ lý Gemini để sẵn sàng xử lý các tác vụ quản lý lịch trình và biên bản họp.

### 🏢 Tình huống thực tế
Bạn là một trợ lý giám đốc (hoặc quản lý dự án). Mỗi ngày bạn phải sắp xếp hàng chục lịch hẹn và ghi chép biên bản cho 3-4 cuộc họp kéo dài hàng giờ đồng hồ. Nếu làm thủ công, bạn sẽ mất đến nửa ngày chỉ để "gõ lại" những gì người khác nói.

### ⚙️ Yêu cầu chuẩn bị
Để sử dụng tính năng này, bạn cần:
1. Có tài khoản **Google Workspace** (Gói Doanh nghiệp) hoặc **Google One AI Premium**.
2. Sử dụng trình duyệt Google Chrome.
3. Bật tính năng Gemini trong Google Docs và Google Calendar.

> **Mẹo nhỏ:** Nhìn sang góc phải màn hình Google Docs/Calendar của bạn, nếu thấy biểu tượng hình ngôi sao lấp lánh (✨), xin chúc mừng, trợ lý Gemini của bạn đã sẵn sàng!
`;

export const sk_2_2 = `
### 🎯 Mục tiêu bài học
Nắm vững công thức Prompt (Câu lệnh) để yêu cầu AI đọc và tóm tắt một đoạn hội thoại dài ngoằng thành các gạch đầu dòng súc tích.

### 📝 Công thức Prompt chuẩn
Khi bạn có một đoạn văn bản thô (ghi âm chuyển thành chữ, hoặc đoạn chat nhóm dài), hãy copy toàn bộ và dán vào Gemini kèm theo câu lệnh sau:

\`\`\`text
Đóng vai một thư ký chuyên nghiệp. Hãy đọc đoạn hội thoại dưới đây và tóm tắt lại theo cấu trúc sau:
1. Quyết định chính đã được chốt (Danh sách).
2. Các công việc cần làm (Kẻ bảng gồm: Tên công việc | Người phụ trách | Deadline).
3. Những vấn đề còn tồn đọng cần thảo luận thêm.

[Dán đoạn hội thoại của bạn vào đây]
\`\`\`

### 💡 Lưu ý khi viết Prompt
- Luôn **"Đóng vai"** (Role-play) để AI biết nó phải dùng văn phong gì (Thư ký, Quản lý, Kế toán...).
- Càng chỉ định cấu trúc đầu ra rõ ràng (Kẻ bảng, gạch đầu dòng), kết quả càng dễ đọc.
`;

export const sk_2_3 = `
### 🎯 Mục tiêu bài học
Xem cách Gemini xử lý một đoạn biên bản họp lộn xộn thành một báo cáo công việc sắc nét.

### 🏢 Tình huống thực tế (Ví dụ)
Đây là đoạn chat lộn xộn trong nhóm Zalo của team Marketing:
> "Sếp: Tuần sau chạy Campaign hè nhé. Mai em thiết kế xong banner. Còn Long liên hệ đội KOL nha, nhớ chốt trước thứ 5. Mai: Dạ banner thứ 4 em giao. Sếp: OK, ngân sách 50 củ nhé. À mà vụ địa điểm offline để tính sau."

### ✨ Kết quả khi áp dụng Prompt
Khi đưa đoạn chat trên vào Gemini cùng Prompt ở bài trước, bạn sẽ nhận được:

**1. Quyết định chính:**
- Chạy Campaign mùa Hè.
- Ngân sách: 50.000.000 VNĐ.
- Địa điểm offline: Chưa chốt.

**2. Các công việc cần làm:**
| Tên công việc | Người phụ trách | Deadline |
| :--- | :--- | :--- |
| Thiết kế Banner | Mai | Thứ 4 |
| Liên hệ đội KOL | Long | Trước Thứ 5 |

Thật kỳ diệu phải không? Bạn không cần phải căng mắt ra tự lọc thông tin nữa!
`;

export const sk_2_4 = `
### 🎯 Mục tiêu bài học
Biết cách dùng câu lệnh tự nhiên để Gemini tự động điền lịch hẹn vào Google Calendar mà không cần thao tác click chuột thủ công.

### 📅 Mẹo lên lịch nhanh với Gemini
Thay vì mở Calendar -> Chọn ngày -> Nhập giờ -> Gõ tên cuộc họp, bạn chỉ cần mở khung chat Gemini (✨) bên phải màn hình Gmail/Docs và gõ:

\`\`\`text
Hãy tạo một lịch họp vào 14:00 chiều Thứ 6 tuần này.
Tiêu đề: Review Campaign Hè.
Khách mời: mai@congty.com, long@congty.com.
Nội dung: Báo cáo tiến độ thiết kế và book KOL.
Thêm link Google Meet.
\`\`\`

Gemini sẽ tự động phân tích câu lệnh của bạn và tạo ra một sự kiện (Event) hoàn chỉnh trên Lịch. Bạn chỉ cần bấm **"Lưu"** là xong.

> **Thực hành ngay:** Hãy thử tạo một lịch hẹn đi uống cafe với bạn bè vào cuối tuần này bằng cách gõ lệnh cho Gemini nhé!
`;
