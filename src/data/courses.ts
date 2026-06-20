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
  // --- GIAI ĐOẠN 1: AI OFFICE (HỆ SINH THÁI GEMINI GOOGLE WORKSPACE) ---
  {
    id: "course-l1-intro",
    title: "Level 1: Soạn thảo Thực chiến với Gemini in Google Docs",
    description: "Nhúng sức mạnh của Gemini trực tiếp vào Google Docs để tự động lên dàn ý, viết lách và sửa lỗi văn bản mượt mà.",
    thumbnailUrl: "/courses/office_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ", 
    targetRoleIds: ["r-marketing", "r-sales", "r-hr", "r-admin", "r-director"],
    targetToolIds: ["t-gemini", "t-docs"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-1-1", title: "Soạn thảo Thực chiến với Gemini Docs", duration: "8 phút đọc", type: "theory", content: L1_3.sk_1_1 },
      { id: "sk-1-2", title: "Sửa lỗi và Làm bóng Văn bản (Refine)", duration: "10 phút đọc", type: "practice", content: L1_3.sk_1_2 }
    ]
  },
  {
    id: "course-l2-writing",
    title: "Level 2: Thư ký Hộp thư Gmail với Gemini",
    description: "Để Gemini tự động đọc, tóm tắt hàng tá email chưa đọc và tự động soạn sẵn các mẫu thư nháp trả lời chuyên nghiệp.",
    thumbnailUrl: "/courses/office_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-admin", "r-hr", "r-marketing"],
    targetToolIds: ["t-gemini", "t-gmail"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-2-1", title: "Đọc siêu tốc hàng tá Email (Tóm tắt)", duration: "7 phút đọc", type: "practice", content: L1_3.sk_2_1 },
      { id: "sk-2-2", title: "Tự động soạn Thư nháp thông minh", duration: "10 phút đọc", type: "practice", content: L1_3.sk_2_2 }
    ]
  },
  {
    id: "course-l3-reading",
    title: "Level 3: Dọn rác & Phân tích số liệu với Gemini in Sheets",
    description: "Vứt bỏ hàm VLOOKUP. Dùng ngôn ngữ tự nhiên để hỏi số liệu, bắt AI vẽ biểu đồ và dọn rác dữ liệu ngay trong Google Sheets.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing", "r-sales"],
    targetToolIds: ["t-gemini-advanced", "t-sheets"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-3-1", title: "Dọn rác Dữ liệu lộn xộn bằng Gemini", duration: "7 phút đọc", type: "practice", content: L1_3.sk_3_1 },
      { id: "sk-3-2", title: "Phân tích Số liệu bằng Câu hỏi Tiếng Việt", duration: "8 phút đọc", type: "practice", content: L1_3.sk_3_2 }
    ]
  },
  {
    id: "course-l4-data",
    title: "Level 4: Thuyết trình Tự động (Google Slides & Imagen)",
    description: "Không cần đụng chuột. Ra lệnh cho Gemini tự đẻ ra 5 trang Slide nội dung và tự vẽ ảnh độc quyền bằng Imagen 3.",
    thumbnailUrl: "/courses/office_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales", "r-hr"],
    targetToolIds: ["t-gemini", "t-slides", "t-imagen"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-4-1", title: "Thuyết trình 'Lười biếng' với Google Slides", duration: "8 phút đọc", type: "practice", content: L4_6.sk_4_1 },
      { id: "sk-4-2", title: "Sáng tạo Hình ảnh với Imagen 3", duration: "10 phút đọc", type: "practice", content: L4_6.sk_4_2 }
    ]
  },
  {
    id: "course-l5-image",
    title: "Level 5: Đặc vụ Google Drive (Tìm kiếm & Phân tích chéo)",
    description: "Ép Gemini lặn sâu vào Google Drive để lục lọi, đọc thấu và phân tích chéo so sánh hàng nghìn trang tài liệu cùng lúc.",
    thumbnailUrl: "/courses/office_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-gemini-advanced", "t-drive"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-5-1", title: "Đặc vụ Lục lọi (Gemini + Drive Workspace)", duration: "8 phút đọc", type: "practice", content: L4_6.sk_5_1 },
      { id: "sk-5-2", title: "Phân tích chéo hàng ngàn trang tài liệu", duration: "10 phút đọc", type: "practice", content: L4_6.sk_5_2 }
    ]
  },
  {
    id: "course-l6-video",
    title: "Level 6: Nhồi bộ nhớ & Cá nhân hóa với Gemini Gems",
    description: "Tạo ra một đội quân nhân sự ảo thu nhỏ (Gemini Gems), mỗi Gem được cài đặt sẵn một nhân cách và quy trình làm việc rập khuôn.",
    thumbnailUrl: "/courses/office_level_6.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-director"],
    targetToolIds: ["t-gemini-gems"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-6-1", title: "Nhân sự ảo cá nhân (Tạo Gemini Gems)", duration: "7 phút đọc", type: "practice", content: L4_6.sk_6_1 },
      { id: "sk-6-2", title: "Setup quy trình tự động dây chuyền với Gems", duration: "8 phút đọc", type: "practice", content: L4_6.sk_6_2 }
    ]
  },

  // --- GIAI ĐOẠN 2: AUTOMATION (THỰC CHIẾN FLOW GOOGLE LABS) ---
  {
    id: "course-l7-auto-intro",
    title: "Level 7: Nhập môn Tự động hóa Flow Google Labs",
    description: "Từ bỏ khái niệm nối dây API phức tạp. Làm quen với công cụ kéo thả tinh gọn 100% tiếng Việt do chính đội ngũ phát triển.",
    thumbnailUrl: "/courses/marketing_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin"],
    targetToolIds: ["t-flow-google-labs"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-7-1", title: "Nhập môn Kéo - Thả trong Flow Google Labs", duration: "8 phút đọc", type: "practice", content: L7_9.sk_7_1 },
      { id: "sk-7-2", title: "Dùng Meta-Prompting để học Flow Google Labs", duration: "8 phút đọc", type: "theory", content: L7_9.sk_7_2 }
    ]
  },
  {
    id: "course-l8-auto-lead",
    title: "Level 8: Flow hút Khách hàng (Lead) & Giao việc tự động",
    description: "Tự động hút thông tin khách hàng từ Google Forms đổ về Sheets, sau đó tự động bắn tin nhắn vào Chat báo Sale gọi chốt đơn.",
    thumbnailUrl: "/courses/marketing_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing"],
    targetToolIds: ["t-flow-google-labs", "t-forms", "t-sheets"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-8-1", title: "Tự động gom Lead từ Google Forms vào Sheets", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_1 },
      { id: "sk-8-2", title: "Tự động Phân chia Công việc (Giao task vào Chat)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_2 }
    ]
  },
  {
    id: "course-l9-auto-email",
    title: "Level 9: Flow CSKH: Phân loại Email & Trả lời tự động",
    description: "Gắn não Gemini vào giữa luồng Flow Google Labs để đọc hiểu ý định Email khách hàng, phân loại và soạn thư cảm ơn cá nhân hóa.",
    thumbnailUrl: "/courses/marketing_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales"],
    targetToolIds: ["t-flow-google-labs", "t-gmail", "t-gemini"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-9-1", title: "Phân loại Email tự động (Flow + Gemini)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_9_1 },
      { id: "sk-9-2", title: "Tự động Gửi thư Cảm ơn (Cá nhân hóa)", duration: "12 phút đọc", type: "practice", content: L7_9.sk_9_2 }
    ]
  },
  {
    id: "course-l10-auto-social",
    title: "Level 10: Báo cáo Tự động định kỳ (Hẹn giờ)",
    description: "Cấu hình Schedule kích hoạt luồng lúc 5h chiều hàng ngày: Tự lấy số liệu, nhờ AI tóm tắt, vẽ biểu đồ và bắn báo cáo vào nhóm.",
    thumbnailUrl: "/courses/marketing_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-director"],
    targetToolIds: ["t-flow-google-labs", "t-chat", "t-quickchart"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-10-1", title: "Báo cáo Tự động Định kỳ (Schedule Trigger)", duration: "8 phút đọc", type: "practice", content: L10_12.sk_10_1 },
      { id: "sk-10-2", title: "Đính kèm Biểu đồ sinh động vào Báo cáo tự động", duration: "12 phút đọc", type: "practice", content: L10_12.sk_10_2 }
    ]
  },
  {
    id: "course-l11-auto-alert",
    title: "Level 11: Tích hợp API cơ bản & Bot cảnh báo Tỷ giá",
    description: "Không sợ API. Dùng Node HTTP Request kéo giá Vàng, ép AI đọc mớ JSON lộn xộn để xuất ra 1 con số và làm điều kiện IF hú còi.",
    thumbnailUrl: "/courses/vibecoding_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-sales"],
    targetToolIds: ["t-flow-google-labs", "t-api", "t-telegram"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-11-1", title: "Nhập môn kết nối API cơ bản (HTTP Request)", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_1 },
      { id: "sk-11-2", title: "Bot Cảnh báo Tỷ giá / Chứng khoán (IF Condition)", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_2 }
    ]
  },
  {
    id: "course-l12-auto-multi",
    title: "Level 12: Đỉnh cao Flow: Xây dựng Nhân sự Ảo (Agent)",
    description: "Cấp quyền truy cập 3 ứng dụng cho 1 con Agent đứng giữa luồng Flow Google Labs, để nó tự quyết định hành động nào cần làm tiếp theo.",
    thumbnailUrl: "/courses/vibecoding_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing"],
    targetToolIds: ["t-flow-google-labs", "t-agent"],
    tier: "MARKETING",
    totalSessions: 1,
    skills: [
      { id: "sk-12-1", title: "Xây dựng Agent (Nhân sự Ảo) tự quyết định trên Flow", duration: "12 phút đọc", type: "practice", content: L10_12.sk_12_1 },
      { id: "sk-12-2", title: "Guardrails và Quản lý Bầy đàn Agent kiểm duyệt nhau", duration: "12 phút đọc", type: "theory", content: L10_12.sk_12_2 }
    ]
  },

  // --- GIAI ĐOẠN 3: VIBE CODING (LẬP TRÌNH VỚI ANTIGRAVITY & CLAUDE) ---
  {
    id: "course-l13-vibe-intro",
    title: "Level 13: Trở thành PM với Antigravity IDE & Claude",
    description: "Tuyệt đỉnh Vibe Coding với môi trường chuyên nghiệp Antigravity. Cấp quyền cho Đặc vụ Claude kiểm soát Terminal và File máy tính.",
    thumbnailUrl: "/courses/vibecoding_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-marketing"],
    targetToolIds: ["t-antigravity", "t-claude"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-13-1", title: "Nhập môn Agentic Coding với Antigravity", duration: "8 phút đọc", type: "theory", content: L13_15.sk_13_1 },
      { id: "sk-13-2", title: "Giao tiếp và Cấp quyền (Workspace) cho Đặc vụ", duration: "8 phút đọc", type: "practice", content: L13_15.sk_13_2 }
    ]
  },
  {
    id: "course-l14-vibe-landing",
    title: "Level 14: Kiến trúc sư Claude & Tự động cài Môi trường",
    description: "Nhờ Claude vẽ dàn ý Landing Page. Giao nhiệm vụ cho Antigravity Agent tự động mở Terminal gõ lệnh cài đặt thư viện để chạy web.",
    thumbnailUrl: "/courses/vibecoding_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-antigravity", "t-claude"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-14-1", title: "Kiến trúc sư Giao diện Landing Page (React/Tailwind)", duration: "10 phút đọc", type: "practice", content: L13_15.sk_14_1 },
      { id: "sk-14-2", title: "Đặc vụ Tự động Setup Môi trường qua Terminal", duration: "8 phút đọc", type: "practice", content: L13_15.sk_14_2 }
    ]
  },
  {
    id: "course-l15-vibe-game",
    title: "Level 15: Cập nhật Giao diện Hiện đại & Mobile-First",
    description: "Ép Claude đọc tài liệu thư viện mới nhất (Shadcn/UI) tự động chèn vào code. Yêu cầu AI sửa lỗi tràn màn hình trên điện thoại.",
    thumbnailUrl: "/courses/vibecoding_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-marketing"],
    targetToolIds: ["t-antigravity", "t-claude"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-15-1", title: "Đọc Thư viện mới và Thiết kế Hiện đại (Style-grounding)", duration: "10 phút đọc", type: "practice", content: L13_15.sk_15_1 },
      { id: "sk-15-2", title: "Tự động thiết kế đáp ứng Đa nền tảng (Mobile-first)", duration: "12 phút đọc", type: "practice", content: L13_15.sk_15_2 }
    ]
  },
  {
    id: "course-l16-vibe-ecom",
    title: "Level 16: E-Commerce Mini & Kết nối Database tự động",
    description: "Dùng Antigravity code thuật toán áp mã giảm giá giỏ hàng. Cung cấp API Supabase cho Claude tự động viết kết nối dữ liệu ngầm.",
    thumbnailUrl: "/courses/office_level_1.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing", "r-director"],
    targetToolIds: ["t-antigravity", "t-supabase"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-16-1", title: "E-Commerce Mini: Code Logic Giỏ Hàng", duration: "10 phút đọc", type: "practice", content: L16_18.sk_16_1 },
      { id: "sk-16-2", title: "Đặc vụ Database Tự xây nhà (Cấu hình Supabase)", duration: "15 phút đọc", type: "practice", content: L16_18.sk_16_2 }
    ]
  },
  {
    id: "course-l17-vibe-chatbot",
    title: "Level 17: Auto-Debugging (Tự sửa lỗi) & Quản lý Rủi ro",
    description: "Web lỗi đỏ lòm? Copy ném lỗi vào cho Claude tự phân tích, tự tìm file, tự gõ lại code đến khi web sống lại (Auto-Healing).",
    thumbnailUrl: "/courses/office_level_2.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-antigravity", "t-git"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-17-1", title: "Auto-Debugging: Kỹ năng Đọc và Vứt Lỗi cho AI", duration: "10 phút đọc", type: "theory", content: L16_18.sk_17_1 },
      { id: "sk-17-2", title: "Quản lý Rủi ro với Điểm lưu game (Học xài Git)", duration: "12 phút đọc", type: "practice", content: L16_18.sk_17_2 }
    ]
  },
  {
    id: "course-l18-vibe-saas",
    title: "Level 18: Lập trình SaaS & Tung lên mạng (Deploy)",
    description: "Bắt AI làm Kiến trúc sư vẽ hệ thống CRUD 500 nhân sự. Thiết lập phân quyền bảo mật RLS và giao DevOps Agent đưa web lên mạng.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-hr"],
    targetToolIds: ["t-antigravity", "t-vercel", "t-supabase"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-18-1", title: "Bắt AI làm Kiến trúc sư (Thiết kế sơ đồ CRUD)", duration: "10 phút đọc", type: "theory", content: L16_18.sk_18_1 },
      { id: "sk-18-2", title: "Phân quyền RLS & Đưa dự án lên mạng (Deploy)", duration: "20 phút đọc", type: "practice", content: L16_18.sk_18_2 }
    ]
  }
];
