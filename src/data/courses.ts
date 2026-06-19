import type { Tier } from "./tiers";

export interface Skill {
  id: string;
  title: string;
  duration: string;
  youtubeVideoId: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  targetRoleIds: string[];
  targetToolIds: string[];
  tier: Tier; 
  totalSessions?: number;
  skills: Skill[];
}

export const courses: Course[] = [
  // --- NHÁNH 1: AI OFFICE (LEVEL 1-7) ---
  {
    id: "course-email-gemini",
    title: "Level 1: Viết Email chuyên nghiệp và tự động phản hồi khách hàng",
    description: "Dọn dẹp hòm thư và tự động phản hồi những email thường gặp bằng sức mạnh của trí tuệ nhân tạo.",
    thumbnailUrl: "/courses/office_level_1.png",
    targetRoleIds: ["c-level", "marketing", "sales", "hr", "finance", "design"],
    targetToolIds: ["gemini", "gpt"],
    tier: "OFFICE",
    skills: [
      { id: "sk-1-1", title: "[Gemini] Yêu cầu chuẩn bị: Đăng ký và sử dụng tài khoản miễn phí", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-1-2", title: "[Gemini] Công thức Prompt: Thiết lập vai trò và văn phong doanh nghiệp", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-1-3", title: "[Gemini] Ví dụ minh họa: Soạn Email báo giá và xin lỗi khách hàng", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-1-4", title: "[ChatGPT] Công thức Prompt: Xây dựng chuỗi Email chăm sóc khách hàng", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-1-5", title: "[ChatGPT] Ví dụ minh họa: Lên kịch bản phản hồi tự động", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-calendar-gemini",
    title: "Level 2: Tự động lên lịch Google Calendar và tóm tắt cuộc họp",
    description: "Không còn cảnh cặm cụi ghi chép biên bản họp. Hãy để AI làm thư ký đắc lực cho bạn.",
    thumbnailUrl: "/courses/office_level_2.png",
    targetRoleIds: ["c-level", "hr", "sales", "finance"],
    targetToolIds: ["gemini"],
    tier: "OFFICE",
    skills: [
      { id: "sk-2-1", title: "[Gemini] Yêu cầu chuẩn bị: Sử dụng ứng dụng trên Google Workspace", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-2-2", title: "[Gemini] Công thức Prompt: Trích xuất ý chính từ đoạn hội thoại dài", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-2-3", title: "[Gemini] Ví dụ minh họa: Tóm tắt biên bản cuộc họp nội bộ", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-2-4", title: "[Google Calendar] Mẹo: Dùng câu lệnh để AI tự động lên lịch hẹn", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-docs-claude",
    title: "Level 3: Soạn thảo hợp đồng và dàn ý văn bản siêu tốc",
    description: "Phác thảo cấu trúc bài viết, tài liệu hoặc hợp đồng pháp lý chặt chẽ chỉ trong vài giây.",
    thumbnailUrl: "/courses/office_level_3.png",
    targetRoleIds: ["c-level", "hr", "finance", "marketing"],
    targetToolIds: ["gpt", "claude"],
    tier: "OFFICE",
    skills: [
      { id: "sk-3-1", title: "[ChatGPT] Yêu cầu chuẩn bị: Tài khoản ChatGPT Free hoặc Plus", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-3-2", title: "[ChatGPT] Công thức Prompt: Lập dàn ý bài thuyết trình cấu trúc 3 phần", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-3-3", title: "[Claude] Công thức Prompt: Căn chỉnh lỗi logic và kiểm tra chính tả", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-3-4", title: "[Claude] Ví dụ minh họa: Soạn thảo mẫu hợp đồng dịch vụ chuẩn pháp lý", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-excel-deepseek",
    title: "Level 4: Làm sạch dữ liệu và tự viết hàm Excel phức tạp",
    description: "Giải quyết các bảng tính rối rắm và tự động tính toán số liệu mà không cần rành về hàm Excel.",
    thumbnailUrl: "/courses/office_level_4.png",
    targetRoleIds: ["finance", "hr", "c-level", "sales"],
    targetToolIds: ["deepseek"],
    tier: "OFFICE",
    skills: [
      { id: "sk-4-1", title: "[DeepSeek] Yêu cầu chuẩn bị: Đăng ký tài khoản DeepSeek miễn phí", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-4-2", title: "[DeepSeek] Công thức Prompt: Yêu cầu AI viết hàm VLOOKUP, IF lồng nhau", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-4-3", title: "[DeepSeek] Ví dụ minh họa: Dọn dẹp khoảng trắng và gộp cột dữ liệu thô", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-podcast-notebooklm",
    title: "Level 5: Đút file PDF vào để tạo ra bản tin Podcast 2 người trò chuyện",
    description: "Biến các báo cáo khô khan thành những đoạn hội thoại Audio hấp dẫn để nghe lúc lái xe hoặc tập thể dục.",
    thumbnailUrl: "/courses/office_level_5.png",
    targetRoleIds: ["c-level", "marketing", "hr", "sales"],
    targetToolIds: ["notebooklm"],
    tier: "OFFICE",
    skills: [
      { id: "sk-5-1", title: "[NotebookLM] Yêu cầu chuẩn bị: Đăng nhập bằng tài khoản Google", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-5-2", title: "[NotebookLM] Nguồn dữ liệu: Cách tải file PDF, Google Docs lên hệ thống an toàn", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-5-3", title: "[NotebookLM] Ví dụ minh họa: Sinh bản tin Audio 2 người trò chuyện từ báo cáo", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-image-flux",
    title: "Level 6: Tạo ảnh minh họa bài viết siêu tốc",
    description: "Tự tay thiết kế những bức ảnh quảng cáo đẹp mắt, siêu thực mà không cần kỹ năng Photoshop.",
    thumbnailUrl: "/courses/office_level_1.png",
    targetRoleIds: ["marketing", "design", "c-level"],
    targetToolIds: ["freepik", "flux"],
    tier: "OFFICE",
    skills: [
      { id: "sk-6-1", title: "[Freepik AI] Công thức Prompt: Tả nhân vật, bối cảnh và tỷ lệ khung hình", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-6-2", title: "[Freepik AI] Ví dụ minh họa: Tạo ảnh banner quảng cáo sản phẩm", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-6-3", title: "[Flux] Công thức Prompt: Tạo hình ảnh siêu thực với chi tiết phức tạp", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-6-4", title: "[Flux] Ví dụ minh họa: Sinh ảnh nhân vật đồng nhất", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-video-kling",
    title: "Level 7: Biến một bức ảnh tĩnh thành video ngắn sinh động",
    description: "Thổi hồn vào các bức ảnh tĩnh và tạo ra những đoạn video chuyển động mượt mà để đăng mạng xã hội.",
    thumbnailUrl: "/courses/office_level_2.png",
    targetRoleIds: ["marketing", "design"],
    targetToolIds: ["kling", "luma", "veo3"],
    tier: "OFFICE",
    skills: [
      { id: "sk-7-1", title: "[Veo 3] Công thức Prompt: Điều khiển góc máy quay (Phóng to, lia máy)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-7-2", title: "[Veo 3] Ví dụ minh họa: Tạo video giới thiệu cảnh quan văn phòng", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-7-3", title: "[Kling] Công thức Prompt: Tạo chuyển động cho nhân vật từ ảnh tĩnh", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-7-4", title: "[Luma] Ví dụ minh họa: Biến bản vẽ phác thảo thành video 3D", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },

  // --- NHÁNH 2: AI AGENT (LEVEL 8-13) (PROJECT-BASED) ---
  {
    id: "course-n8n-intro",
    title: "Level 8: Nhập môn n8n: Hướng dẫn cài đặt và làm quen giao diện kéo thả",
    description: "Bước chân vào thế giới tự động hóa bằng cách cài đặt công cụ n8n và hiểu cách các nút hoạt động.",
    thumbnailUrl: "/courses/marketing_level_1.png",
    targetRoleIds: ["marketing", "sales", "c-level"],
    targetToolIds: ["n8n"],
    tier: "MARKETING",
    skills: [
      { id: "sk-8-1", title: "[n8n] 30% Lý thuyết: Hiểu nguyên lý cốt lõi của một luồng tự động (Trigger & Action)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-8-2", title: "[n8n] 70% Thực hành: Cài đặt n8n phiên bản Cloud (Đám mây) nhanh chóng", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-8-3", title: "[n8n] 70% Thực hành: Cài đặt n8n phiên bản Local (Máy cá nhân vĩnh viễn)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-n8n-facebook",
    title: "Level 9: Thực chiến: Xây dựng luồng tự động hóa đăng bài Fanpage Facebook",
    description: "Luôn giữ cho Fanpage của bạn bận rộn với các bài viết tin tức được xào nấu tự động mỗi ngày.",
    thumbnailUrl: "/courses/marketing_level_2.png",
    targetRoleIds: ["marketing", "sales"],
    targetToolIds: ["n8n", "gpt"],
    tier: "MARKETING",
    skills: [
      { id: "sk-9-1", title: "[n8n] 30% Lý thuyết: Hướng dẫn cách lấy mã khóa liên kết (Token) từ tài khoản Facebook", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-9-2", title: "[n8n] 70% Thực hành: Viết luồng cào tin tức báo chí, đưa cho AI xào nấu lại văn phong", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-9-3", title: "[n8n] 70% Thực hành: Thiết lập hẹn giờ (Schedule) tự động đăng bài lúc 8h sáng mỗi ngày", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-n8n-tiktok",
    title: "Level 10: Thực chiến: Tạo kênh TikTok hoàn toàn tự động bằng AI",
    description: "Nhờ hệ thống n8n tự động nghĩ kịch bản, đọc giọng nói, ghép video và upload lên TikTok.",
    thumbnailUrl: "/courses/marketing_level_3.png",
    targetRoleIds: ["marketing", "design"],
    targetToolIds: ["n8n", "veo3"],
    tier: "MARKETING",
    skills: [
      { id: "sk-10-1", title: "[n8n] 30% Lý thuyết: Bóc tách luồng làm video ngắn (Kịch bản -> Giọng đọc -> Hình ảnh)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-10-2", title: "[n8n] 70% Thực hành: Dùng n8n kết nối API sinh kịch bản và đọc giọng nói nhân tạo", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-10-3", title: "[n8n] 70% Thực hành: Ghép hình ảnh/âm thanh và tự động đẩy file video lên kênh TikTok", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-n8n-email",
    title: "Level 11: Thực chiến: Trợ lý ảo tự động trả lời Email và lọc thư rác",
    description: "Gắn AI vào hòm thư công ty để tự động đọc nội dung và soạn sẵn bản nháp trả lời hoàn hảo.",
    thumbnailUrl: "/courses/marketing_level_4.png",
    targetRoleIds: ["c-level", "sales", "hr"],
    targetToolIds: ["n8n", "gemini"],
    tier: "MARKETING",
    skills: [
      { id: "sk-11-1", title: "[n8n] 30% Lý thuyết: Cách kết nối n8n với hòm thư Gmail/Outlook bảo mật", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-11-2", title: "[n8n] 70% Thực hành: Lên sơ đồ bắt AI đọc nội dung Email và phân loại mức độ khẩn cấp", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-11-3", title: "[n8n] 70% Thực hành: Dạy AI tự động soạn trước bản nháp phản hồi và lưu vào thư mục Draft", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-n8n-telegram",
    title: "Level 12: Thực chiến: Bot theo dõi tỷ giá (Vàng, Crypto) báo động qua Telegram",
    description: "Làm một con Bot tự động bắn tin nhắn báo giá vào nhóm chat mỗi khi thị trường biến động.",
    thumbnailUrl: "/courses/marketing_level_1.png",
    targetRoleIds: ["finance", "c-level"],
    targetToolIds: ["n8n"],
    tier: "MARKETING",
    skills: [
      { id: "sk-12-1", title: "[n8n] 30% Lý thuyết: Khái niệm về HTTP Request và cách gọi API lấy dữ liệu", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-12-2", title: "[n8n] 70% Thực hành: Cấu hình lấy dữ liệu giá Vàng/Coin theo mốc thời gian thực 1 phút/lần", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-12-3", title: "[n8n] 70% Thực hành: Rẽ nhánh - Nếu giá biến động > 5%, tự động bắn tin nhắn vào nhóm", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-n8n-crm",
    title: "Level 13: Thực chiến: Xây dựng hệ thống quản lý Khách hàng (CRM)",
    description: "Tự động thu thập Lead từ mọi nguồn, chấm điểm khách VIP và tự động chia đơn cho đội Sale.",
    thumbnailUrl: "/courses/marketing_level_2.png",
    targetRoleIds: ["sales", "c-level"],
    targetToolIds: ["n8n"],
    tier: "MARKETING",
    skills: [
      { id: "sk-13-1", title: "[n8n] 30% Lý thuyết: Cấu trúc dữ liệu chuẩn của một thẻ khách hàng (Lead, Deal)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-13-2", title: "[n8n] 70% Thực hành: Tự động gom đơn hàng từ Website đẩy gọn gàng sang Google Sheets", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-13-3", title: "[n8n] 70% Thực hành: Chấm điểm khách VIP và tự động chia luân phiên cho nhân viên Sale", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },

  // --- NHÁNH 3: VIBECODING (LEVEL 14-18) (PROJECT-BASED) ---
  {
    id: "course-vibe-landing",
    title: "Level 14: Thực chiến: Xây dựng trang Landing Page giới thiệu bản thân / sản phẩm",
    description: "Nhờ trí tuệ nhân tạo gõ code và dựng nên một website bán hàng tuyệt đẹp chỉ trong 10 phút.",
    thumbnailUrl: "/courses/vibecoding_level_1.png",
    targetRoleIds: ["c-level", "marketing"],
    targetToolIds: ["claude", "stitch", "vercel"],
    tier: "EXPERT",
    skills: [
      { id: "sk-14-1", title: "[Claude] 30% Lý thuyết: Cấu trúc chuẩn SEO của một trang Landing Page (Hero, Tính năng...)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-14-2", title: "[Stitch] 70% Thực hành: Ra lệnh cho AI tự động dựng bố cục giao diện siêu tốc", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-14-3", title: "[Vercel] 70% Thực hành: Tải mã nguồn về và đưa trang web lên Internet với một cú click", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-vibe-game",
    title: "Level 15: Thực chiến: Lập trình Web Game giải trí (Rắn săn mồi, Flappy Bird)",
    description: "Giải trí và tư duy logic thông qua việc yêu cầu AI code các trò chơi điện tử quen thuộc.",
    thumbnailUrl: "/courses/vibecoding_level_2.png",
    targetRoleIds: ["c-level"],
    targetToolIds: ["claude"],
    tier: "EXPERT",
    skills: [
      { id: "sk-15-1", title: "[Claude] 30% Lý thuyết: Hiểu quy luật tọa độ và khung hình (Canvas) trong lập trình Game", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-15-2", title: "[Claude] 70% Thực hành: Viết Prompt mô tả luật chơi và yêu cầu AI tự sinh mã nguồn", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-15-3", title: "[Claude] 70% Thực hành: Kỹ năng gỡ rối: Chơi thử game, copy lỗi ném cho AI để nhờ vá lỗi", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-vibe-ecommerce",
    title: "Level 16: Thực chiến: Xây dựng Website Bán hàng (E-commerce Mini)",
    description: "Tự tay làm trang thương mại điện tử nhỏ gọn có danh sách sản phẩm và giỏ hàng thanh toán.",
    thumbnailUrl: "/courses/vibecoding_level_3.png",
    targetRoleIds: ["sales", "c-level"],
    targetToolIds: ["claude", "stitch", "antigravity"],
    tier: "EXPERT",
    skills: [
      { id: "sk-16-1", title: "[Claude] 30% Lý thuyết: Cấu trúc và luồng dữ liệu của một trang Giỏ hàng trực tuyến", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-16-2", title: "[Stitch] 70% Thực hành: Nhờ AI dựng giao diện trang danh sách sản phẩm và thẻ Card", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-16-3", title: "[Antigravity] 70% Thực hành: Tạo bảng cơ sở dữ liệu để lưu trữ đơn hàng thực tế của khách", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-vibe-chatbot",
    title: "Level 17: Thực chiến: Phát triển Chatbot AI tích hợp trực tiếp lên Website",
    description: "Nhúng một con Bot tư vấn siêu thông minh vào trang chủ website công ty bạn.",
    thumbnailUrl: "/courses/vibecoding_level_4.png",
    targetRoleIds: ["c-level", "marketing"],
    targetToolIds: ["claude", "vercel"],
    tier: "EXPERT",
    skills: [
      { id: "sk-17-1", title: "[Claude] 30% Lý thuyết: Nguyên lý Website trò chuyện với bộ não ChatGPT qua API", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-17-2", title: "[Claude] 70% Thực hành: Lấy mã khóa API (Secret Key) và ghép thành công vào giao diện chat", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-17-3", title: "[Vercel] 70% Thực hành: Cấu hình ẩn mã khóa (Bảo mật biến môi trường) trước khi tung lên mạng", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  },
  {
    id: "course-vibe-saas",
    title: "Level 18: Thực chiến: Xây dựng Phần mềm Quản lý công việc (SaaS To-do App)",
    description: "Xây dựng ứng dụng quản trị nội bộ để giao việc, nhắc lịch và theo dõi tiến độ nhân sự.",
    thumbnailUrl: "/courses/vibecoding_level_5.png",
    targetRoleIds: ["c-level", "hr"],
    targetToolIds: ["claude", "stitch", "antigravity"],
    tier: "EXPERT",
    skills: [
      { id: "sk-18-1", title: "[Claude] 30% Lý thuyết: Luồng người dùng (Đăng ký, Đăng nhập, Thêm, Sửa, Xóa dữ liệu)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-18-2", title: "[Stitch] 70% Thực hành: Thiết kế Bảng điều khiển (Dashboard) trực quan, có biểu đồ", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" },
      { id: "sk-18-3", title: "[Antigravity] 70% Thực hành: Cấu hình phân quyền dữ liệu (Nhân viên chỉ được thấy việc của họ)", duration: "15:00", youtubeVideoId: "dQw4w9WgXcQ" }
    ]
  }
];