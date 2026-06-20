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
  // --- GIAI ĐOẠN 1: MULTIMODAL & VOICE (KỸ NĂNG NỀN TẢNG 2026) ---
  {
    id: "course-l1-intro",
    title: "Level 1: Giao tiếp Đa phương thức (Giọng nói & Hình ảnh)",
    description: "Không còn gõ chữ lạch cạch. Làm chủ GPT-5.5 và Claude 4.8 bằng Advanced Voice và phân tích Không gian 3D.",
    thumbnailUrl: "/courses/office_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ", 
    targetRoleIds: ["r-marketing", "r-sales", "r-hr", "r-admin", "r-director"],
    targetToolIds: ["t-gpt-5-5", "t-claude-4-8", "t-midjourney-v7"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-1-1", title: "Giao tiếp Voice-to-Voice & Hình ảnh Thế hệ mới", duration: "8 phút đọc", type: "theory", content: L1_3.sk_1_1 },
      { id: "sk-1-2", title: "Reasoning Models & Kỹ thuật Tự trị (Agentic)", duration: "10 phút đọc", type: "practice", content: L1_3.sk_1_2 }
    ]
  },
  {
    id: "course-l2-writing",
    title: "Level 2: Nhân sự Ảo quản lý Hòm thư (Gemini 3.5 Pro)",
    description: "Nhồi nhét lịch sử công ty vào context 2 triệu token để AI tự động soạn và duyệt email mà không bị 'mất trí nhớ'.",
    thumbnailUrl: "/courses/office_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-admin", "r-hr", "r-marketing"],
    targetToolIds: ["t-gemini-3-5", "t-gpt-5-5"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-2-1", title: "Email Agent (Nhân sự Ảo quản lý hòm thư)", duration: "7 phút đọc", type: "practice", content: L1_3.sk_2_1 },
      { id: "sk-2-2", title: "Dạy AI nhại giọng bạn vĩnh viễn (Persona Memory)", duration: "10 phút đọc", type: "theory", content: L1_3.sk_2_2 }
    ]
  },
  {
    id: "course-l3-reading",
    title: "Level 3: Đặc vụ Nghiên cứu Real-time & Phân tích Đa luồng",
    description: "Dùng Perplexity AI để cào số liệu chứng khoán thời gian thực và NotebookLM 2026 tổng hợp hàng nghìn file PDF/MP4 thành file Audio 2 người trò chuyện.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing", "r-sales"],
    targetToolIds: ["t-perplexity", "t-notebooklm"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-3-1", title: "Đặc vụ Nghiên cứu Thị trường (Research Agent)", duration: "7 phút đọc", type: "practice", content: L1_3.sk_3_1 },
      { id: "sk-3-2", title: "Nhồi não AI bằng hàng nghìn trang tài liệu", duration: "8 phút đọc", type: "practice", content: L1_3.sk_3_2 }
    ]
  },
  {
    id: "course-l4-data",
    title: "Level 4: Đặc vụ Phân tích Dữ liệu (Data Analyst Agent)",
    description: "Giao database cho GPT-5.5 tự viết code Python dọn rác dữ liệu ngầm và render các bảng Interactive Dashboard thao tác trực tiếp.",
    thumbnailUrl: "/courses/office_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales", "r-hr"],
    targetToolIds: ["t-gpt-5-5", "t-claude-4-8"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-4-1", title: "Đặc vụ Xử lý Dữ liệu Tự động", duration: "8 phút đọc", type: "practice", content: L4_6.sk_4_1 },
      { id: "sk-4-2", title: "Dashboard Tương tác với AI", duration: "10 phút đọc", type: "practice", content: L4_6.sk_4_2 }
    ]
  },
  {
    id: "course-l5-image",
    title: "Level 5: Giám đốc Hình ảnh 3D & Meta-Prompting",
    description: "Xoay góc nhân vật 3D với Midjourney v7 và ép Gemini dùng kỹ năng nhìn (Vision) để dịch ngược bức ảnh thành câu lệnh vẽ.",
    thumbnailUrl: "/courses/office_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-midjourney-v7", "t-flux-2"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-5-1", title: "Giám đốc Hình ảnh Thế hệ 2026", duration: "8 phút đọc", type: "theory", content: L4_6.sk_5_1 },
      { id: "sk-5-2", title: "Meta-Prompting Đảo ngược bằng Tầm nhìn", duration: "10 phút đọc", type: "practice", content: L4_6.sk_5_2 }
    ]
  },
  {
    id: "course-l6-video",
    title: "Level 6: Đạo diễn Phim Sora 2 & Nhân bản Số",
    description: "Chỉ đạo cú máy Camera chuẩn Hollywood với Sora 2 và tạo Avatar AI mang giọng nói/khuôn mặt của chính bạn để tự động ra video Tiktok mỗi ngày.",
    thumbnailUrl: "/courses/office_level_6.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-director"],
    targetToolIds: ["t-sora-2", "t-heygen"],
    tier: "OFFICE",
    totalSessions: 2,
    skills: [
      { id: "sk-6-1", title: "Đạo diễn Phim AI (Sora 2 / Kling v3)", duration: "7 phút đọc", type: "practice", content: L4_6.sk_6_1 },
      { id: "sk-6-2", title: "Nhân bản chính mình làm MC", duration: "8 phút đọc", type: "practice", content: L4_6.sk_6_2 }
    ]
  },

  // --- GIAI ĐOẠN 2: AUTONOMOUS AGENTS (TỰ ĐỘNG HÓA 2026) ---
  {
    id: "course-l7-auto-intro",
    title: "Level 7: Tạo Nhân sự Ảo (Agent) thay vì Webhook",
    description: "Không còn kéo thả rườm rà. Dùng Lindy.ai và n8n Agent cấp quyền cho AI tự đọc tài liệu API và tự đẻ ra nút kết nối.",
    thumbnailUrl: "/courses/marketing_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin"],
    targetToolIds: ["t-lindy", "t-n8n-agent"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-7-1", title: "Tạo Nhân sự Ảo thay vì tạo Webhook", duration: "8 phút đọc", type: "practice", content: L7_9.sk_7_1 },
      { id: "sk-7-2", title: "AI tự đọc tài liệu và đẻ công cụ kết nối", duration: "8 phút đọc", type: "theory", content: L7_9.sk_7_2 }
    ]
  },
  {
    id: "course-l8-auto-lead",
    title: "Level 8: Agent phân tích Lead tự động & Xin duyệt",
    description: "Đặc vụ AI đọc hiểu ngữ cảnh chat để chấm điểm độ nóng của khách, tự soạn Email và bắn thông báo chờ Sếp ấn duyệt trên Zalo.",
    thumbnailUrl: "/courses/marketing_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing"],
    targetToolIds: ["t-lindy", "t-sheets"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-8-1", title: "Đặc vụ phân tích Lead (Khách hàng tiềm năng)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_1 },
      { id: "sk-8-2", title: "Human-in-the-loop (Chờ Sếp ấn nút Duyệt mới gửi)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_8_2 }
    ]
  },
  {
    id: "course-l9-auto-email",
    title: "Level 9: Bộ nhớ Vector & Routing Agent",
    description: "AI dùng bộ nhớ dài hạn tìm ra hóa đơn của khách mua 3 tháng trước, và 1 con Routing Agent đóng vai trò phân chia công việc cho các AI con.",
    thumbnailUrl: "/courses/marketing_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-sales"],
    targetToolIds: ["t-n8n-agent", "t-vector-db"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-9-1", title: "Bộ não Vector của Hộp thư (Long-term Memory)", duration: "10 phút đọc", type: "practice", content: L7_9.sk_9_1 },
      { id: "sk-9-2", title: "Ông trùm AI phân việc cho Đệ tử (Routing Agent)", duration: "12 phút đọc", type: "practice", content: L7_9.sk_9_2 }
    ]
  },
  {
    id: "course-l10-auto-social",
    title: "Level 10: Content Agent tự cào tin & Tự render ảnh",
    description: "Đặc vụ Grok tự lùng sục X/Tiktok chấm điểm tin tức. Claude viết kịch bản, tự gọi Midjourney vẽ ảnh và auto Publish.",
    thumbnailUrl: "/courses/marketing_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing"],
    targetToolIds: ["t-grok-4", "t-claude-4-8"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-10-1", title: "Đặc vụ Săn Tin Tự Trị (Grok/Real-time)", duration: "8 phút đọc", type: "practice", content: L10_12.sk_10_1 },
      { id: "sk-10-2", title: "Content Creator Agent (Xào bài + Tự vẽ ảnh)", duration: "12 phút đọc", type: "practice", content: L10_12.sk_10_2 }
    ]
  },
  {
    id: "course-l11-auto-alert",
    title: "Level 11: Vision Bot soi biểu đồ & Guardrails",
    description: "Dùng Mắt AI (Vision) nhìn chằm chằm biểu đồ nến TradingView. Nếu có biến, Agent 1 phải chờ Agent 2 check chéo (Guardrails) mới được hú còi.",
    thumbnailUrl: "/courses/vibecoding_level_1.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-sales"],
    targetToolIds: ["t-gemini-3-5", "t-telegram"],
    tier: "MARKETING",
    totalSessions: 2,
    skills: [
      { id: "sk-11-1", title: "Bot đọc Biểu đồ bằng Vision AI", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_1 },
      { id: "sk-11-2", title: "Cảnh báo Tự động với Guardrails an toàn", duration: "10 phút đọc", type: "practice", content: L10_12.sk_11_2 }
    ]
  },
  {
    id: "course-l12-auto-multi",
    title: "Level 12: Bầy đàn Đặc vụ (Multi-Agent Swarms)",
    description: "Xây dựng cả một công ty Ảo trong n8n. Designer AI vẽ ảnh xấu sẽ bị Reviewer AI chửi và bắt vẽ lại cho đến khi sếp hài lòng.",
    thumbnailUrl: "/courses/vibecoding_level_2.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-marketing"],
    targetToolIds: ["t-n8n-agent", "t-openai-swarm"],
    tier: "MARKETING",
    totalSessions: 1,
    skills: [
      { id: "sk-12-1", title: "Quản trị Công ty 'Bầy Đàn AI'", duration: "12 phút đọc", type: "practice", content: L10_12.sk_12_1 }
    ]
  },

  // --- GIAI ĐOẠN 3: AGENTIC CODING (LÀM PHẦN MỀM TỰ ĐỘNG) ---
  {
    id: "course-l13-vibe-intro",
    title: "Level 13: Trở thành Product Manager với Agentic Coding",
    description: "Vibe coding đã lỗi thời. Dùng Claude Code cấp quyền cho Terminal tự động tải thư viện, dựng toàn bộ sườn dự án không cần bạn gõ phím.",
    thumbnailUrl: "/courses/vibecoding_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-marketing"],
    targetToolIds: ["t-cursor", "t-claude-code"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-13-1", title: "Agentic Coding & Tư duy Quản lý Dự án", duration: "8 phút đọc", type: "theory", content: L13_15.sk_13_1 },
      { id: "sk-13-2", title: "Nhờ AI thao tác Terminal cài môi trường Tự động", duration: "8 phút đọc", type: "practice", content: L13_15.sk_13_2 }
    ]
  },
  {
    id: "course-l14-vibe-landing",
    title: "Level 14: Kiến trúc sư Web với Style-Grounding & DevOps Agent",
    description: "Ép AI đọc tài liệu Shadcn 2026 để làm Web đỉnh cao. Sau đó ra lệnh cho DevOps Agent tự gõ lệnh Vercel đưa trang web lên mạng.",
    thumbnailUrl: "/courses/vibecoding_level_4.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-cursor", "t-vercel"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-14-1", title: "Dùng Style-Grounding nặn ra giao diện cực xịn", duration: "10 phút đọc", type: "practice", content: L13_15.sk_14_1 },
      { id: "sk-14-2", title: "Đặc vụ DevOps tự tung Web lên Internet (Deploy)", duration: "8 phút đọc", type: "practice", content: L13_15.sk_14_2 }
    ]
  },
  {
    id: "course-l15-vibe-game",
    title: "Level 15: Game 3D & Đặc vụ Đánh vật với Bug (Auto-Healing)",
    description: "Bật chế độ Reasoning cho AI tự nghĩ Logic vật lý 3D. Game lỗi? AI sẽ tự sửa, tự sụp, tự nghĩ cách khác liên tục 5 vòng tới khi game chạy.",
    thumbnailUrl: "/courses/vibecoding_level_5.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-admin", "r-marketing"],
    targetToolIds: ["t-cursor", "t-claude-4-8"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-15-1", title: "Làm Game 3D bằng Deep Reasoning (Suy luận Sâu)", duration: "10 phút đọc", type: "practice", content: L13_15.sk_15_1 },
      { id: "sk-15-2", title: "Đặc vụ Đánh vật với Bug (Auto-Debugging Loop)", duration: "12 phút đọc", type: "practice", content: L13_15.sk_15_2 }
    ]
  },
  {
    id: "course-l16-vibe-ecom",
    title: "Level 16: E-Commerce Thông minh & Database Agent",
    description: "Nhờ Claude tự code logic trừ mã giảm giá 50%. Quẳng chuỗi kết nối Database cho AI tự đục đẽo thiết kế bảng trong Supabase.",
    thumbnailUrl: "/courses/office_level_1.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-sales", "r-marketing", "r-director"],
    targetToolIds: ["t-cursor", "t-supabase"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-16-1", title: "Agentic E-Commerce (Code Giỏ hàng thông minh)", duration: "10 phút đọc", type: "practice", content: L16_18.sk_16_1 },
      { id: "sk-16-2", title: "Đặc vụ Quản trị Database tự xây nhà (Supabase)", duration: "15 phút đọc", type: "practice", content: L16_18.sk_16_2 }
    ]
  },
  {
    id: "course-l17-vibe-chatbot",
    title: "Level 17: Cấy Agent vào Web & Đặc vụ Bảo mật Audit",
    description: "Không chỉ chat, Agent có khả năng tự chui vào CSDL xóa đơn hàng giúp khách. Ra lệnh cho Đặc vụ Security tự quét toàn bộ code tìm API rò rỉ.",
    thumbnailUrl: "/courses/office_level_2.png", 
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-marketing", "r-sales"],
    targetToolIds: ["t-cursor", "t-openai-agent"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-17-1", title: "Tích hợp Agent vào phần mềm (Function Calling)", duration: "10 phút đọc", type: "theory", content: L16_18.sk_17_1 },
      { id: "sk-17-2", title: "Đặc vụ Bảo mật (Security Agent) tìm rò rỉ Key", duration: "12 phút đọc", type: "practice", content: L16_18.sk_17_2 }
    ]
  },
  {
    id: "course-l18-vibe-saas",
    title: "Level 18: Kiến trúc sư AI & CTO Phân quyền RLS",
    description: "Dùng 1 câu prompt bắt AI làm Tổng công trình sư vẽ kiến trúc SaaS Trello 500 nhân sự và tự cài đặt Rule bảo mật cấp cao trên Database.",
    thumbnailUrl: "/courses/office_level_3.png",
    youtubeVideoId: "dQw4w9WgXcQ",
    targetRoleIds: ["r-director", "r-admin", "r-hr"],
    targetToolIds: ["t-cursor", "t-supabase", "t-vercel"],
    tier: "EXPERT",
    totalSessions: 2,
    skills: [
      { id: "sk-18-1", title: "Kiến trúc sư AI đẻ ra phần mềm SaaS khổng lồ", duration: "10 phút đọc", type: "theory", content: L16_18.sk_18_1 },
      { id: "sk-18-2", title: "Phân quyền cấp cao (RLS) bằng Cursor Agent", duration: "20 phút đọc", type: "practice", content: L16_18.sk_18_2 }
    ]
  }
];
