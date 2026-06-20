import type { Tier } from "./tiers";
import * as L1_3 from "./content/level-1-2-3-basic";
import * as L4_6 from "./content/level-4-5-6-basic";
import * as L7_9 from "./content/level-7-8-9-auto";
import * as L10_12 from "./content/level-10-11-12-auto";
import * as L13_15 from "./content/level-13-14-15-vibe";
import * as L16_18 from "./content/level-16-17-18-vibe";

export interface Skill {
  id: string;
  title: string;
  duration: string;
  /** Loại bài học (suy ra từ tiêu đề nếu không khai báo). */
  type?: "theory" | "practice" | "example";
  content?: string;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  thumbnailUrl: string;
  /** 1 video YouTube duy nhất cho cả khóa học. */
  youtubeVideoId?: string;
  targetRoleIds: string[];
  targetToolIds: string[];
  tier: Tier; 
  totalSessions?: number;
  skills: Skill[];
}

export const courses: Course[] = [
  // --- GIAI ĐOẠN 1: AI CHO DÂN VĂN PHÒNG (LEVEL 1-6) ---
  {
    id: "course-l1-intro",
    title: "Level 1: Nhập môn AI & Cách ra lệnh (Prompt) cho đúng ý",
    description: "Hiểu AI là gì, cách nó suy nghĩ và làm chủ công thức viết câu lệnh chuẩn xác để AI luôn trả lời đúng ý bạn.",
    thumbnailUrl: "/courses/office_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ", 
    targetRoleIds: ["r-marketing", "r-sales", "r-hr", "r-admin", "r-director"],
    targetToolIds: ["t-gemini", "t-chatgpt"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-1-1", title: "AI thực chất là gì và tại sao nó lại bịa chuyện?", duration: "5 phút đọc", type: "theory", content: L1_3.sk_1_1 },
      { id: "sk-1-2", title: "Công thức Prompt 4 phần (Công thức CPRF)", duration: "8 phút đọc", type: "practice", content: L1_3.sk_1_2 }
    ]
  },
  {
    id: "course-l2-writing",
    title: "Level 2: Dùng AI để soạn thảo văn bản, email và báo cáo",
    description: "Giải phóng bản thân khỏi việc ngồi gõ từng chữ. Nhờ AI viết hộ email, báo cáo và bắt chước đúng giọng văn của bạn.",
    thumbnailUrl: "/courses/office_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-admin", "r-hr", "r-marketing"],
    targetToolIds: ["t-gemini", "t-chatgpt", "t-claude"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-2-1", title: "Soạn Email xin lỗi, báo giá tự động trong 5 giây", duration: "5 phút đọc", type: "practice", content: L1_3.sk_2_1 },
      { id: "sk-2-2", title: "Dạy AI cách bắt chước chính xác giọng văn của sếp", duration: "10 phút đọc", type: "theory", content: L1_3.sk_2_2 }
    ]
  },
  {
    id: "course-l3-reading",
    title: "Level 3: Tìm kiếm, đọc hiểu và tóm tắt thông tin nhanh chóng",
    description: "Dùng AI làm thư ký chuyên đọc báo cáo dài hàng trăm trang và tìm kiếm thông tin đối thủ cạnh tranh trên Internet.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing", "r-sales"],
    targetToolIds: ["t-claude", "t-perplexity"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-3-1", title: "Tìm kiếm thông minh trên mạng bằng Perplexity AI", duration: "7 phút đọc", type: "practice", content: L1_3.sk_3_1 },
      { id: "sk-3-2", title: "Tóm tắt tài liệu PDF 100 trang trong 3 phút", duration: "8 phút đọc", type: "theory", content: L1_3.sk_3_2 }
    ]
  },
  {
    id: "course-l4-data",
    title: "Level 4: Xử lý số liệu và vẽ biểu đồ (Thay thế Excel)",
    description: "Bỏ qua các hàm VLOOKUP phức tạp. Chỉ cần dán số liệu lộn xộn vào, AI sẽ dọn dẹp, tính toán và vẽ biểu đồ cực chuẩn.",
    thumbnailUrl: "/courses/office_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales", "r-hr"],
    targetToolIds: ["t-deepseek", "t-chatgpt"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-4-1", title: "Làm sạch danh sách dữ liệu (Data Cleaning)", duration: "6 phút đọc", type: "practice", content: L4_6.sk_4_1 },
      { id: "sk-4-2", title: "Tự động phân tích nguyên nhân và vẽ biểu đồ", duration: "10 phút đọc", type: "practice", content: L4_6.sk_4_2 }
    ]
  },
  {
    id: "course-l5-image",
    title: "Level 5: Tự thiết kế hình ảnh minh họa cực đẹp",
    description: "Cách dùng ngôn từ để điều khiển các cỗ máy vẽ ảnh. Tạo ảnh quảng cáo sản phẩm sắc nét mà không cần thuê Studio.",
    thumbnailUrl: "/courses/office_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-midjourney", "t-flux"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-5-1", title: "Công thức ma thuật để AI vẽ ảnh chuẩn ý đồ", duration: "7 phút đọc", type: "theory", content: L4_6.sk_5_1 },
      { id: "sk-5-2", title: "Tự chụp Mockup quảng cáo sản phẩm bằng Midjourney", duration: "10 phút đọc", type: "practice", content: L4_6.sk_5_2 }
    ]
  },
  {
    id: "course-l6-video",
    title: "Level 6: Tạo kịch bản âm thanh và Video tự động",
    description: "Lồng tiếng bản tin bằng AI và biến hình ảnh tĩnh thành video quảng cáo chuyển động sống động y như thật.",
    thumbnailUrl: "/courses/office_level_6.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-director"],
    targetToolIds: ["t-elevenlabs", "t-kling"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-6-1", title: "Biến văn bản thành Podcast có người thật đọc", duration: "6 phút đọc", type: "practice", content: L4_6.sk_6_1 },
      { id: "sk-6-2", title: "Biến ảnh tĩnh thành cảnh quay mượt mà (Image-to-Video)", duration: "8 phút đọc", type: "practice", content: L4_6.sk_6_2 }
    ]
  },

  // --- GIAI ĐOẠN 2: TỰ ĐỘNG HÓA CÔNG VIỆC (LEVEL 7-12) ---
  {
    id: "course-l7-auto-intro",
    title: "Level 7: Tự động hóa là gì và cách các phần mềm nối với nhau",
    description: "Học tư duy làm việc của máy móc. Đập tan rào cản kỹ thuật để tạo ra những đường ống làm việc liên tục 24/7.",
    thumbnailUrl: "/courses/marketing_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin"],
    targetToolIds: ["t-n8n"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-7-1", title: "Thế nào là Trigger và Action trong hệ thống?", duration: "6 phút đọc", type: "theory", content: L7_9.sk_7_1 },
      { id: "sk-7-2", title: "API và Webhook: Ngôn ngữ giao tiếp của máy tính", duration: "8 phút đọc", type: "theory", content: L7_9.sk_7_2 }
    ]
  },
  {
    id: "course-l8-auto-lead",
    title: "Level 8: Tự động gom thông tin khách hàng (Lead) về một chỗ",
    description: "Khách điền Form là thông tin tự chui vào Google Sheets và hệ thống tự động gửi Email cảm ơn ngay trong 1 nốt nhạc.",
    thumbnailUrl: "/courses/marketing_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing"],
    targetToolIds: ["t-n8n", "t-sheets"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-8-1", title: "Hứng thông tin từ Landing Page vào Google Sheets", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_1 },
      { id: "sk-8-2", title: "Tự động gửi thư/tin nhắn cảm ơn ngay lập tức", duration: "8 phút đọc", type: "practice", content: L7_9.sk_8_2 }
    ]
  },
  {
    id: "course-l9-auto-email",
    title: "Level 9: Trợ lý ảo tự đọc và phân loại Email",
    description: "Nhúng bộ não AI vào hòm thư công ty để nó tự nhận biết thư nào là khiếu nại, thư nào là hỏi giá và soạn sẵn bản nháp.",
    thumbnailUrl: "/courses/marketing_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales"],
    targetToolIds: ["t-n8n", "t-openai", "t-gmail"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-9-1", title: "Nhờ AI đọc hiểu và chia loại email (Thư rác/Thư hỏi giá)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_9_1 },
      { id: "sk-9-2", title: "Tự động soạn sẵn Bản nháp chờ Sếp duyệt", duration: "12 phút đọc", type: "practice", content: L7_9.sk_9_2 }
    ]
  },
  {
    id: "course-l10-auto-social",
    title: "Level 10: Tự động tìm tin tức và đăng bài lên Fanpage",
    description: "Xây dựng cỗ máy sáng 8h tự đi cào tin nóng hổi, nhờ AI mông má lại văn phong và ấn nút đăng Facebook hoàn toàn tự động.",
    thumbnailUrl: "/courses/marketing_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing"],
    targetToolIds: ["t-n8n", "t-openai"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-10-1", title: "Cào tin tức (RSS) từ các trang báo mạng", duration: "8 phút đọc", type: "practice", content: L10_12.sk_10_1 },
      { id: "sk-10-2", title: "Bảo AI xào lại bài và hẹn giờ đăng lên Fanpage", duration: "15 phút đọc", type: "practice", content: L10_12.sk_10_2 }
    ]
  },
  {
    id: "course-l11-auto-alert",
    title: "Level 11: Tạo Bot theo dõi giá cả và nhắn tin cảnh báo",
    description: "Chế tạo Robot soi bảng giá Vàng/Chứng khoán/Tỷ giá liên tục. Nếu giá rớt mạnh thì lập tức bắn tin nhắn hú còi ầm ĩ vào Zalo/Telegram.",
    thumbnailUrl: "/courses/vibecoding_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-sales"],
    targetToolIds: ["t-n8n", "t-telegram"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-11-1", title: "Gọi API kiểm tra thông tin liên tục mỗi phút (Real-time)", duration: "8 phút đọc", type: "practice", content: L10_12.sk_11_1 },
      { id: "sk-11-2", title: "Chỉ nhắn tin cảnh báo khi thỏa mãn điều kiện (Hàm IF)", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_2 }
    ]
  },
  {
    id: "course-l12-auto-multi",
    title: "Level 12: Kết nối nhiều AI làm việc nhóm với nhau",
    description: "Chia việc cho 3 con AI phối hợp nhịp nhàng: Con số 1 viết ý tưởng -> Con số 2 viết thân bài -> Con số 3 vẽ ảnh.",
    thumbnailUrl: "/courses/vibecoding_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing"],
    targetToolIds: ["t-n8n", "t-openai"],
    tier: "MARKETING",
    totalSessions: 1,
    skills: [
      { id: "sk-12-1", title: "Dựng nhóm làm việc AI (Multi-Agent Workflow)", duration: "10 phút đọc", type: "practice", content: L10_12.sk_12_1 }
    ]
  },

  // --- GIAI ĐOẠN 3: LẬP TRÌNH BẰNG AI (LEVEL 13-18) ---
  {
    id: "course-l13-vibe-intro",
    title: "Level 13: Vibe Coding là gì? Cách nhờ AI lập trình thay bạn",
    description: "Thay vì gõ code, bạn chỉ việc gõ tiếng Việt mô tả. Trở thành Kỹ sư phần mềm chỉ sau 1 khóa học bằng sức mạnh Vibe Coding.",
    thumbnailUrl: "/courses/vibecoding_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-marketing"],
    targetToolIds: ["t-cursor", "t-v0"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-13-1", title: "Hiểu bản chất của Làm Web (Giao diện, Dữ liệu, Logic)", duration: "8 phút đọc", type: "theory", content: L13_15.sk_13_1 },
      { id: "sk-13-2", title: "Cài đặt môi trường lập trình v0.dev / Bolt.new trong 1 nút bấm", duration: "7 phút đọc", type: "practice", content: L13_15.sk_13_2 }
    ]
  },
  {
    id: "course-l14-vibe-landing",
    title: "Level 14: Tự thiết kế trang Landing Page bán hàng",
    description: "Nhờ AI làm một trang web bán hàng đẹp lung linh, đầy đủ Bảng giá, Slogan và đưa thẳng lên Internet cho người khác xem.",
    thumbnailUrl: "/courses/vibecoding_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-v0", "t-vercel"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-14-1", title: "Đẻ ra giao diện Landing Page cực mượt chỉ bằng Tiếng Việt", duration: "10 phút đọc", type: "practice", content: L13_15.sk_14_1 },
      { id: "sk-14-2", title: "Phát hành website lên mạng toàn cầu (Deploy lên Vercel)", duration: "8 phút đọc", type: "practice", content: L13_15.sk_14_2 }
    ]
  },
  {
    id: "course-l15-vibe-game",
    title: "Level 15: Tự làm trò chơi điện tử (Web Game) giải trí",
    description: "Viết ra các luật chơi chặt chẽ để AI code ra một game giải trí xả stress. Học cách chửi bới AI nếu nó code lỗi.",
    thumbnailUrl: "/courses/vibecoding_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-marketing"],
    targetToolIds: ["t-cursor"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-15-1", title: "Code game Rắn săn mồi kinh điển bằng lời nói", duration: "12 phút đọc", type: "practice", content: L13_15.sk_15_1 },
      { id: "sk-15-2", title: "Kỹ năng 'bắt bệnh' (Debugging) khi AI viết code hỏng", duration: "10 phút đọc", type: "practice", content: L13_15.sk_15_2 }
    ]
  },
  {
    id: "course-l16-vibe-ecom",
    title: "Level 16: Tự dựng cửa hàng trực tuyến mini (E-Commerce)",
    description: "Nâng cấp giao diện trang web. Tự động cộng trừ tiền trong Giỏ hàng và cất thông tin người mua hàng vào một Cơ sở dữ liệu an toàn.",
    thumbnailUrl: "/courses/office_level_1.png", // Re-use image
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing", "r-director"],
    targetToolIds: ["t-v0", "t-supabase"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-16-1", title: "Phép thuật của nút 'Thêm vào giỏ' và cộng trừ tiền", duration: "12 phút đọc", type: "practice", content: L16_18.sk_16_1 },
      { id: "sk-16-2", title: "Lưu trữ đơn hàng vào Database khổng lồ (Supabase)", duration: "15 phút đọc", type: "practice", content: L16_18.sk_16_2 }
    ]
  },
  {
    id: "course-l17-vibe-chatbot",
    title: "Level 17: Gắn Chatbot tư vấn thông minh vào website",
    description: "Nhét sức mạnh tư duy của ChatGPT vào website của riêng bạn và học cách bảo mật chìa khóa nhà (API Key) không cho người lạ xài chùa.",
    thumbnailUrl: "/courses/office_level_2.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-openai", "t-v0"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-17-1", title: "Cơ chế 'Nhét thư vào phong bì' gọi API của OpenAI", duration: "10 phút đọc", type: "theory", content: L16_18.sk_17_1 },
      { id: "sk-17-2", title: "Code khung chat và cách giấu nhẹm API Key", duration: "15 phút đọc", type: "practice", content: L16_18.sk_17_2 }
    ]
  },
  {
    id: "course-l18-vibe-saas",
    title: "Level 18: Tự làm phần mềm quản lý công việc (SaaS) cho đội nhóm",
    description: "Khóa học đồ án tốt nghiệp. Làm bảng điều khiển (Dashboard) chia việc cho nhân viên, tích hợp hệ thống Đăng nhập / Phân quyền bảo mật.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-hr"],
    targetToolIds: ["t-cursor", "t-supabase", "t-vercel"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-18-1", title: "Chìa khóa làm phần mềm: Bộ quy tắc CRUD (Thêm, Đọc, Sửa, Xóa)", duration: "10 phút đọc", type: "theory", content: L16_18.sk_18_1 },
      { id: "sk-18-2", title: "Làm hệ thống Mật khẩu (Login) và chia quyền cho Giám đốc/Nhân viên", duration: "20 phút đọc", type: "practice", content: L16_18.sk_18_2 }
    ]
  }
];
