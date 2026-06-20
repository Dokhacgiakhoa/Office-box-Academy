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
  // --- GIAI ĐOẠN 1: KỸ THUẬT ĐIỀU KHIỂN AI TỪ A-Z ---
  {
    id: "course-l1-intro",
    title: "Level 1: Bộ sưu tập Công thức Prompt vạn năng (Cập nhật 2024)",
    description: "Làm chủ các công thức thiết kế lệnh chuẩn quốc tế (RTF, CREATE, CoT) và kỹ thuật đỉnh cao Đảo ngược (Meta-prompting).",
    thumbnailUrl: "/courses/office_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ", 
    targetRoleIds: ["r-marketing", "r-sales", "r-hr", "r-admin", "r-director"],
    targetToolIds: ["t-gemini", "t-chatgpt"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-1-1", title: "Công thức RTF (Viết lách) & CREATE (Hình ảnh)", duration: "8 phút đọc", type: "theory", content: L1_3.sk_1_1 },
      { id: "sk-1-2", title: "Kỹ thuật CoT (Logic) & Đảo ngược (Meta-Prompting)", duration: "10 phút đọc", type: "practice", content: L1_3.sk_1_2 }
    ]
  },
  {
    id: "course-l2-writing",
    title: "Level 2: Dùng AI viết lách & Giao tiếp (Ứng dụng RTF & Meta-Prompting)",
    description: "Nhờ AI đặt câu hỏi để lấy thông tin và tự động áp dụng công thức viết email, báo cáo mượt mà như người thật.",
    thumbnailUrl: "/courses/office_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-admin", "r-hr", "r-marketing"],
    targetToolIds: ["t-gemini", "t-chatgpt", "t-claude"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-2-1", title: "Giao tiếp Văn bản bằng Meta-Prompting", duration: "7 phút đọc", type: "practice", content: L1_3.sk_2_1 },
      { id: "sk-2-2", title: "Ép AI nhại giọng (Few-shot Prompting)", duration: "10 phút đọc", type: "theory", content: L1_3.sk_2_2 }
    ]
  },
  {
    id: "course-l3-reading",
    title: "Level 3: Thư ký AI tổng hợp & phân tích tài liệu",
    description: "Dùng kỹ thuật Chuỗi tư duy (CoT) bắt AI đọc file PDF 100 trang và xuất ra bảng tóm tắt sắc bén chỉ trong 3 phút.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing", "r-sales"],
    targetToolIds: ["t-claude", "t-perplexity"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-3-1", title: "Nghiên cứu Thị trường & Đối thủ cạnh tranh bằng AI", duration: "7 phút đọc", type: "practice", content: L1_3.sk_3_1 },
      { id: "sk-3-2", title: "Đọc tài liệu PDF siêu tốc (Ứng dụng CoT)", duration: "8 phút đọc", type: "practice", content: L1_3.sk_3_2 }
    ]
  },
  {
    id: "course-l4-data",
    title: "Level 4: Xử lý số liệu Excel bằng AI (Ứng dụng Chain of Thought)",
    description: "Ép AI suy nghĩ từng bước để làm sạch dữ liệu, tìm nguyên nhân giảm doanh thu và tự quyết định loại biểu đồ phù hợp.",
    thumbnailUrl: "/courses/office_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales", "r-hr"],
    targetToolIds: ["t-deepseek", "t-chatgpt"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-4-1", title: "Làm sạch Dữ liệu lộn xộn (Ứng dụng CoT)", duration: "8 phút đọc", type: "practice", content: L4_6.sk_4_1 },
      { id: "sk-4-2", title: "Nhờ AI tự chọn và Vẽ Biểu đồ (Meta-Prompting)", duration: "10 phút đọc", type: "practice", content: L4_6.sk_4_2 }
    ]
  },
  {
    id: "course-l5-image",
    title: "Level 5: Giám đốc Nghệ thuật AI (Ứng dụng CREATE)",
    description: "Bí ý tưởng? Không rành tiếng Anh? Hãy nhờ ChatGPT dùng công thức CREATE tự viết lệnh rồi nhét vào Midjourney vẽ ảnh siêu thực.",
    thumbnailUrl: "/courses/office_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-midjourney", "t-flux"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-5-1", title: "Vẽ ảnh Mockup sản phẩm bằng công thức CREATE", duration: "8 phút đọc", type: "theory", content: L4_6.sk_5_1 },
      { id: "sk-5-2", title: "Meta-Prompting: Ép ChatGPT tự viết lệnh vẽ ảnh", duration: "10 phút đọc", type: "practice", content: L4_6.sk_5_2 }
    ]
  },
  {
    id: "course-l6-video",
    title: "Level 6: Phù thủy Âm thanh & Video AI",
    description: "Dùng NotebookLM biến tài liệu nội quy công ty thành một chương trình Radio giải trí có 2 người dẫn chuyện.",
    thumbnailUrl: "/courses/office_level_6.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-director"],
    targetToolIds: ["t-elevenlabs", "t-kling"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-6-1", title: "Tự động sinh Podcast trò chuyện từ file PDF", duration: "7 phút đọc", type: "practice", content: L4_6.sk_6_1 },
      { id: "sk-6-2", title: "Đạo diễn Video AI: Ép ảnh tĩnh chuyển động", duration: "8 phút đọc", type: "practice", content: L4_6.sk_6_2 }
    ]
  },

  // --- GIAI ĐOẠN 2: TỰ ĐỘNG HÓA DOANH NGHIỆP ---
  {
    id: "course-l7-auto-intro",
    title: "Level 7: Hiểu về Tự động hóa và cách máy móc nói chuyện",
    description: "Quẳng mớ lý thuyết khô khan. Gặp tài liệu API dài ngoằng? Hãy nhờ AI đọc và cầm tay chỉ việc bạn từng nút bấm.",
    thumbnailUrl: "/courses/marketing_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin"],
    targetToolIds: ["t-n8n"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-7-1", title: "Nhờ AI dạy cách bấm nút thiết lập Tự động hóa", duration: "8 phút đọc", type: "practice", content: L7_9.sk_7_1 },
      { id: "sk-7-2", title: "Dịch tài liệu Kỹ thuật khó hiểu bằng AI (CoT)", duration: "8 phút đọc", type: "theory", content: L7_9.sk_7_2 }
    ]
  },
  {
    id: "course-l8-auto-lead",
    title: "Level 8: Tự động gom thông tin khách hàng (Lead)",
    description: "Nhờ AI hướng dẫn cách tạo Webhook kéo thông tin khách đăng ký vào Google Sheets và tự động gửi Email cảm ơn siêu cá nhân hóa.",
    thumbnailUrl: "/courses/marketing_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing"],
    targetToolIds: ["t-n8n", "t-sheets"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-8-1", title: "Kéo dữ liệu khách hàng vào Google Sheets", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_1 },
      { id: "sk-8-2", title: "AI Tự soạn và Gửi Email chăm sóc (Ứng dụng RTF)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_2 }
    ]
  },
  {
    id: "course-l9-auto-email",
    title: "Level 9: Trợ lý ảo tự đọc và phân loại Email",
    description: "Biến AI thành cổng gác cửa: Tự gắn nhãn thư rác, khiếu nại và ứng dụng CoT để tính toán bảng giá, tự soạn sẵn thư nháp chờ sếp duyệt.",
    thumbnailUrl: "/courses/marketing_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales"],
    targetToolIds: ["t-n8n", "t-openai", "t-gmail"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-9-1", title: "Phân loại Email bằng Zero-shot Prompting", duration: "10 phút đọc", type: "practice", content: L7_9.sk_9_1 },
      { id: "sk-9-2", title: "AI tự làm Thư ký Soạn nháp (Ứng dụng CoT)", duration: "12 phút đọc", type: "practice", content: L7_9.sk_9_2 }
    ]
  },
  {
    id: "course-l10-auto-social",
    title: "Level 10: Dây chuyền tự động đăng bài Mạng xã hội",
    description: "Xây cỗ máy sáng 8h cào tin nóng (RSS) mang về n8n, dùng AI mông má lại văn phong và ấn nút đăng Facebook hoàn toàn tự động.",
    thumbnailUrl: "/courses/marketing_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing"],
    targetToolIds: ["t-n8n", "t-openai"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-10-1", title: "Cào tin tức báo mạng (RSS) bằng Meta-Prompting", duration: "8 phút đọc", type: "practice", content: L10_12.sk_10_1 },
      { id: "sk-10-2", title: "Nhờ AI xào bài và tự ấn nút Đăng lên Fanpage", duration: "12 phút đọc", type: "practice", content: L10_12.sk_10_2 }
    ]
  },
  {
    id: "course-l11-auto-alert",
    title: "Level 11: Bot cảnh báo thị trường (Tỷ giá/Chứng khoán)",
    description: "Dùng Kỹ thuật đảo ngược nhờ AI viết cấu hình gọi API lấy giá Vàng. Nếu giá rớt thì hú còi bắn tin nhắn vào Telegram.",
    thumbnailUrl: "/courses/vibecoding_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-sales"],
    targetToolIds: ["t-n8n", "t-telegram"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-11-1", title: "Tự động gọi API lấy số liệu Vàng (Hỏi AI cách làm)", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_1 },
      { id: "sk-11-2", title: "Tạo luật Cảnh báo (IF) và bắn tin nhắn Telegram", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_2 }
    ]
  },
  {
    id: "course-l12-auto-multi",
    title: "Level 12: Đa tác nhân AI (Multi-Agent Working)",
    description: "Chia việc cho 3 con AI chuyên môn sâu phối hợp nhịp nhàng: AI ý tưởng nghĩ xong quăng cho AI viết bài, rồi đẩy cho AI vẽ ảnh.",
    thumbnailUrl: "/courses/vibecoding_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing"],
    targetToolIds: ["t-n8n", "t-openai"],
    tier: "MARKETING",
    totalSessions: 1,
    skills: [
      { id: "sk-12-1", title: "Xây dựng Đội nhóm AI siêu đẳng (Multi-Agent)", duration: "12 phút đọc", type: "practice", content: L10_12.sk_12_1 }
    ]
  },

  // --- GIAI ĐOẠN 3: VIBE CODING (LÀM PHẦN MỀM) ---
  {
    id: "course-l13-vibe-intro",
    title: "Level 13: Vibe Coding là gì? (Ứng dụng Meta-Prompting)",
    description: "Thay vì gõ code, hãy nhồi vào não AI để nó tự cài đặt môi trường. Nếu lỗi Code đỏ lòm? Copy nguyên mớ đó quăng lại bắt AI tự sửa.",
    thumbnailUrl: "/courses/vibecoding_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-marketing"],
    targetToolIds: ["t-cursor", "t-v0"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-13-1", title: "Vibe Coding & Triết lý 'Không biết thì hỏi'", duration: "8 phút đọc", type: "theory", content: L13_15.sk_13_1 },
      { id: "sk-13-2", title: "Nhờ AI cài đặt Môi trường Web trong 1 nút bấm", duration: "8 phút đọc", type: "practice", content: L13_15.sk_13_2 }
    ]
  },
  {
    id: "course-l14-vibe-landing",
    title: "Level 14: Tự thiết kế Landing Page bán hàng",
    description: "Không nhớ cấu trúc 1 Landing Page? Hãy nhờ AI đóng vai Giám đốc Marketing, đề xuất cấu trúc trang và tự code giao diện.",
    thumbnailUrl: "/courses/vibecoding_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-v0", "t-vercel"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-14-1", title: "Dùng Meta-Prompting nặn ra giao diện Landing Page", duration: "10 phút đọc", type: "practice", content: L13_15.sk_14_1 },
      { id: "sk-14-2", title: "Ép AI dạy bạn cách tung Website lên Internet (Deploy)", duration: "8 phút đọc", type: "practice", content: L13_15.sk_14_2 }
    ]
  },
  {
    id: "course-l15-vibe-game",
    title: "Level 15: Tự làm Web Game giải trí",
    description: "Bảo AI tự nghĩ luật chơi và viết code Game Rắn săn mồi. Tuyệt kỹ sống còn: Ép AI tự đọc lỗi và gỡ lỗi (Debugging) thay bạn.",
    thumbnailUrl: "/courses/vibecoding_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-marketing"],
    targetToolIds: ["t-cursor"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-15-1", title: "Ép AI tự chốt Luật chơi và code Game Rắn săn mồi", duration: "10 phút đọc", type: "practice", content: L13_15.sk_15_1 },
      { id: "sk-15-2", title: "Kỹ năng Đọc Lỗi (Debugging kiểu lười) với CoT", duration: "12 phút đọc", type: "practice", content: L13_15.sk_15_2 }
    ]
  },
  {
    id: "course-l16-vibe-ecom",
    title: "Level 16: Tự dựng E-Commerce Mini (Có giỏ hàng)",
    description: "Nhường phần suy nghĩ logic cho AI để nó tự cộng trừ tiền giỏ hàng, và ép AI hướng dẫn cấu hình Database Supabase.",
    thumbnailUrl: "/courses/office_level_1.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing", "r-director"],
    targetToolIds: ["t-v0", "t-supabase"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-16-1", title: "Cơ chế Giỏ hàng (Nhờ AI tính tiền)", duration: "10 phút đọc", type: "practice", content: L16_18.sk_16_1 },
      { id: "sk-16-2", title: "Kết nối Database Supabase bằng Meta-Prompting", duration: "15 phút đọc", type: "practice", content: L16_18.sk_16_2 }
    ]
  },
  {
    id: "course-l17-vibe-chatbot",
    title: "Level 17: Gắn Chatbot AI thông minh vào Website",
    description: "Khảo vấn AI xem API là gì và nhét ống API của OpenAI vào web. Ép chuyên gia bảo mật AI chỉ cách giấu API Key an toàn.",
    thumbnailUrl: "/courses/office_level_2.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-openai", "t-v0"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-17-1", title: "Tra khảo AI để tự cắm ống API ChatGPT vào Web", duration: "10 phút đọc", type: "theory", content: L16_18.sk_17_1 },
      { id: "sk-17-2", title: "Bắt bệnh bảo mật (CoT) - Giấu Chìa khóa an toàn", duration: "12 phút đọc", type: "practice", content: L16_18.sk_17_2 }
    ]
  },
  {
    id: "course-l18-vibe-saas",
    title: "Level 18: Tự làm Phần mềm nội bộ (SaaS)",
    description: "Yêu cầu Kiến trúc sư AI phân tích 4 chữ CRUD, và ép nó phải dạy bạn cách phân quyền bảo mật cấp cao (Row Level Security).",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-hr"],
    targetToolIds: ["t-cursor", "t-supabase", "t-vercel"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-18-1", title: "Bắt AI làm Kiến trúc sư, thiết kế sơ đồ CRUD", duration: "10 phút đọc", type: "theory", content: L16_18.sk_18_1 },
      { id: "sk-18-2", title: "Lệnh cho AI làm Hệ thống Đăng nhập & Phân quyền", duration: "20 phút đọc", type: "practice", content: L16_18.sk_18_2 }
    ]
  }
];
