export const sk_4_1 = `
### 🎯 Mục tiêu bài học
Giúp bạn làm quen với DeepSeek - công cụ AI cực kỳ xuất sắc trong mảng tính toán, lập trình và xử lý logic, rất phù hợp để giải quyết các bài toán Excel/Google Sheets.

### ⚙️ Yêu cầu chuẩn bị
DeepSeek hiện đang là một trong những AI "thông minh" nhất về mặt tư duy logic mà lại hoàn toàn miễn phí.
1. Truy cập vào trang web: [chat.deepseek.com](https://chat.deepseek.com)
2. Đăng ký một tài khoản bằng Email hoặc Google.
3. Khi sử dụng để giải toán Excel, hãy đảm bảo bạn bật chế độ **"Deep Think" (R1)** (nếu có) để AI suy nghĩ kỹ càng hơn trước khi viết hàm nhé.
`;

export const sk_4_2 = `
### 🎯 Mục tiêu bài học
Biết cách diễn đạt bài toán bằng lời nói thông thường để AI tự động đẻ ra các hàm Excel phức tạp (như VLOOKUP, INDEX MATCH, hay IF lồng nhau).

### 🏢 Tình huống thực tế
Bạn có một bảng tính thưởng Tết. Bạn cần viết một hàm để: *Nếu nhân viên làm trên 1 năm thì thưởng 1 tháng lương, nếu làm dưới 1 năm thì thưởng nửa tháng lương, còn thử việc thì không thưởng.*
Thay vì đau đầu nhớ ngoặc tròn ngoặc phẩy của hàm IF, hãy để DeepSeek làm thay bạn.

### 📝 Công thức Prompt chuẩn
Hãy dán câu lệnh sau vào DeepSeek:

\`\`\`text
Bạn là chuyên gia về Excel và Google Sheets.
Tôi có một bài toán cần viết hàm như sau:
- Cột A chứa "Số năm làm việc" (bắt đầu từ A2).
- Cột B chứa "Mức lương cơ bản" (bắt đầu từ B2).
- Tôi cần viết hàm ở cột C (bắt đầu từ C2) để tính "Thưởng Tết".

Quy tắc tính:
1. Nếu Số năm làm việc >= 1: Thưởng = Mức lương cơ bản * 1.
2. Nếu 0 < Số năm làm việc < 1: Thưởng = Mức lương cơ bản * 0.5.
3. Nếu Số năm làm việc = 0: Thưởng = 0.

Hãy viết cho tôi công thức Excel/Sheets chính xác và giải thích ngắn gọn cách nó hoạt động.
\`\`\`

DeepSeek sẽ trả về công thức chuẩn (ví dụ: \`=IF(A2>=1, B2*1, IF(A2>0, B2*0.5, 0))\`). Bạn chỉ việc copy và dán vào ô C2 là xong!
`;

export const sk_4_3 = `
### 🎯 Mục tiêu bài học
Xử lý nhanh các "đống rác" dữ liệu thô (thừa khoảng trắng, sai định dạng chữ hoa chữ thường) bằng sức mạnh của AI.

### 🏢 Tình huống thực tế
Bạn xuất danh sách Email khách hàng từ hệ thống cũ ra, nhưng than ôi, tên khách hàng bị viết dính liền, viết hoa lung tung, thừa quá nhiều dấu cách: \`   NGuyễN   VaN A   \`.

### ✨ Bí kíp dọn rác dữ liệu
Bạn không cần phải đi sửa từng dòng. Hãy nhờ DeepSeek viết hàm kết hợp dọn dẹp:

\`\`\`text
Tôi có cột A chứa tên khách hàng bị lỗi định dạng (thừa khoảng trắng ở hai đầu và ở giữa, viết hoa chữ cái lung tung).
Hãy viết cho tôi công thức Excel kết hợp để:
1. Xóa toàn bộ khoảng trắng thừa.
2. Viết hoa đúng chuẩn (Chữ cái đầu mỗi từ viết hoa, còn lại viết thường).

Ví dụ đầu vào: "   NGuyễN   VaN A   "
Kết quả mong muốn: "Nguyễn Văn A"
\`\`\`

DeepSeek ngay lập tức sẽ nhả cho bạn một công thức kết hợp hàm \`TRIM()\` và hàm \`PROPER()\`. Việc làm chủ dữ liệu chưa bao giờ dễ dàng đến thế!
`;
