export const sk_1_1 = `
### 🎯 Mục tiêu bài học
Học cách sử dụng hai bộ công thức Prompt đỉnh cao nhất năm 2026: **RTF** (Chuyên dùng để viết lách) và **CREATE** (Chuyên dùng để vẽ ảnh). Không dùng lẫn lộn!

### 📝 1. Công thức RTF (Dành cho Văn bản)
RTF là viết tắt của Role - Task - Format. Dùng khi bạn muốn AI viết email, bài blog, kịch bản...
- **R (Role - Vai trò):** Cho AI một chức danh. *(VD: Hãy đóng vai Chuyên gia Copywriter)*
- **T (Task - Nhiệm vụ):** Yêu cầu cụ thể. *(VD: Viết một email báo giá dịch vụ dọn nhà)*
- **F (Format - Định dạng):** Kết quả trông thế nào. *(VD: Ngắn gọn dưới 100 chữ, dùng gạch đầu dòng, có lời chúc cuối thư)*

### 🎨 2. Công thức CREATE (Dành cho Hình ảnh)
Cấm không được dùng RTF để vẽ ảnh. Khi ra lệnh cho Midjourney hoặc Flux, hãy dùng công thức CREATE:
- **C (Concept):** Chủ thể là gì? *(VD: Một ly cà phê bốc khói)*
- **R (Resolution/Angle):** Góc máy ra sao? *(VD: Chụp cận cảnh macro)*
- **E (Environment):** Bối cảnh xung quanh? *(VD: Đặt trên bàn gỗ cạnh cửa sổ)*
- **A (Atmosphere/Lighting):** Ánh sáng? *(VD: Ánh nắng buổi sáng rọi vào)*
- **T (Tone):** Tông màu/Cảm xúc? *(VD: Màu ấm áp, vintage)*
- **E (Extra):** Yêu cầu thêm. *(VD: Siêu sắc nét 8K, cinematic)*
`;

export const sk_1_2 = `
### 🎯 Mục tiêu bài học
Làm chủ kỹ thuật ép AI phải "động não" (CoT) trước khi làm toán/code, và kỹ thuật Tối thượng: Dùng AI hỏi AI (Meta-Prompting).

### 🧠 3. Kỹ thuật CoT (Chain of Thought - Chuỗi tư duy)
Khi bạn quăng một bảng số liệu lộn xộn hoặc một bài toán logic, nếu AI trả lời ngay, nó rất dễ sai. Hãy thêm câu thần chú này vào cuối câu lệnh:
> *"Hãy suy nghĩ từng bước một trước khi đưa ra đáp án cuối cùng." (Think step by step)*

Khi đó, AI sẽ tự động in ra màn hình các bước phân tích (như giải toán nháp) rồi mới chốt kết quả. Tỷ lệ chính xác tăng lên 90%!

### 🔄 4. Bí kíp Tối thượng: Kỹ thuật Đảo ngược (Meta-Prompting)
Đây là lúc bạn "Vô chiêu thắng hữu chiêu". Khi bạn không biết phải dùng công thức nào, hay không biết phải cung cấp thông tin gì, hãy đưa quyền làm chủ cho AI.

**Câu thần chú vạn năng:**
> *"Tôi muốn [Viết một bức thư xin lỗi sếp]. Tôi không biết bạn cần những thông tin gì để viết tốt nhất. Hãy đóng vai một chuyên gia, và đặt câu hỏi cho tôi từng câu một cho đến khi bạn có đủ dữ kiện để hoàn thành việc này."*

Ngay lập tức, AI sẽ trở thành người phỏng vấn bạn. Bạn cứ trả lời từng câu, cuối cùng AI sẽ đẻ ra kết quả hoàn hảo!
`;

export const sk_2_1 = `
### 🎯 Mục tiêu bài học
Kết hợp công thức RTF và Meta-Prompting để giải quyết gọn gàng hòm thư email mỗi sáng.

### 📧 Giao tiếp Văn bản bằng Meta-Prompting
Hôm nay bạn cần gửi một email từ chối ứng viên phỏng vấn, nhưng bạn sợ mất lòng. Đừng cố tự viết, hãy chat với AI:

**Prompt:**
> *"Tôi cần viết email từ chối ứng viên trượt phỏng vấn nhưng vẫn giữ được hình ảnh chuyên nghiệp của công ty. Bạn hãy làm chuyên gia HR, hỏi tôi 3 câu hỏi để lấy thông tin, sau đó tự động áp dụng công thức RTF để viết thư cho tôi."*

Sau khi bạn trả lời 3 câu hỏi (Ví dụ: Tên ứng viên? Vị trí ứng tuyển? Điểm yếu của họ là gì?), AI sẽ dùng chính câu trả lời của bạn, đúc kết bằng RTF và nhả ra một email xuất sắc.
`;

export const sk_2_2 = `
### 🎯 Mục tiêu bài học
Dạy AI cách học lỏm giọng văn của bạn để người nhận email không thể phát hiện ra thư này do máy viết.

### 🎭 Ép AI nhại giọng (Few-shot Prompting)
Công thức RTF rất tốt, nhưng văn phong của AI vẫn có mùi "rô bốt". Khắc phục bằng cách ném bài mẫu vào:

**Prompt:**
> *"Dưới đây là 2 bài thông báo nội bộ tôi từng viết. Hãy đọc và phân tích xem tôi hay dùng từ ngữ gì, độ dài câu ra sao:
> [Bài 1...]
> [Bài 2...]
> 
> Dựa vào giọng điệu đó (Role), hãy viết giúp tôi một thông báo mới về việc công ty sẽ cắt điện bảo trì vào chủ nhật tuần này (Task). Định dạng là 1 bài đăng lên Zalo công ty (Format)."*
`;

export const sk_3_1 = `
### 🎯 Mục tiêu bài học
Dùng Perplexity AI làm "trợ lý tình báo", đào bới Internet và tổng hợp thông tin đối thủ.

### 🔍 Nghiên cứu Thị trường bằng AI
Thay vì Google 10 trang rồi tự ghi chép, hãy để AI làm thay.

**Prompt:**
> *"Tôi đang chuẩn bị mở quán cà phê cạnh tranh với The Coffee House. Hãy tự động tìm kiếm trên mạng các bài viết review về The Coffee House trong 6 tháng gần đây. Sau đó, lập bảng phân tích: 3 điểm mạnh nhất, 3 điểm khách hay chê nhất. Trích dẫn rõ nguồn link bài viết."*

Perplexity sẽ đọc hàng tá trang web (như một CoT thực thụ) và chắt lọc ra bảng báo cáo cho bạn.
`;

export const sk_3_2 = `
### 🎯 Mục tiêu bài học
"Nhét" 100 trang PDF vào não AI và ép nó tóm tắt lại trong vòng 3 gạch đầu dòng.

### 📚 Đọc tài liệu siêu tốc (Claude / NotebookLM)
Bạn nhận được một báo cáo thị trường ngành Bất động sản rất dài. Đừng hoảng!

1. Tải file PDF lên Claude.
2. **Áp dụng Meta-Prompting & CoT:**
> *"Dựa vào tài liệu đính kèm, tôi cần bạn tóm tắt những thông tin cốt lõi nhất. Bạn hãy suy nghĩ từng bước, quét toàn bộ tài liệu, và chỉ lọc ra những thông tin liên quan đến phân khúc Chung cư cao cấp. Trình bày dưới dạng bảng: Tên dự án, Giá dự kiến, Chủ đầu tư."*
`;
