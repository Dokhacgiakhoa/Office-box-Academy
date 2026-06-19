/**
 * Dữ liệu tĩnh các dự án tiêu biểu (Portfolio B2B).
 * Dùng cho trang /projects để minh chứng năng lực triển khai AI thực tế.
 */
export interface Project {
  id: string;
  name: string;
  partner: string;
  description: string;
  /** Đường dẫn ảnh demo trong /public, hoặc để trống dùng gradient placeholder. */
  imageUrl: string;
  /** Lĩnh vực / nhóm dự án (Marketing, Nội bộ, Thương mại điện tử...). */
  category: string;
  /** Stack công nghệ sử dụng. */
  techStack: string[];
  /** Link demo/case study (tùy chọn). */
  demoLink?: string;
}

export const projects: Project[] = [
  {
    id: "chatbot-cskh-retail",
    name: "Chatbot CSKH tự động cho chuỗi bán lẻ",
    partner: "Nhà bán lẻ thời trang ABC",
    description:
      "Trợ lý AI trả lời tự động trên Fanpage và website, xử lý 80% câu hỏi thường gặp và chốt đơn 24/7.",
    imageUrl: "/projects/chatbot-cskh.jpg",
    category: "Sale & CSKH",
    techStack: ["Next.js", "OpenAI API", "RAG", "Tailwind CSS"],
    demoLink: "#",
  },
  {
    id: "auto-content-marketing",
    name: "Hệ thống sản xuất nội dung Marketing tự động",
    partner: "Agency truyền thông Beta",
    description:
      "Quy trình tạo nội dung đa kênh (bài viết, ảnh, video ngắn) bằng AI, rút ngắn 70% thời gian sản xuất.",
    imageUrl: "/projects/auto-content.jpg",
    category: "Marketing",
    techStack: ["Claude API", "Capcut", "Canva AI", "n8n"],
    demoLink: "#",
  },
  {
    id: "dashboard-tai-chinh",
    name: "Dashboard phân tích tài chính thông minh",
    partner: "Công ty sản xuất Gamma",
    description:
      "Tự động bóc tách hóa đơn, tổng hợp số liệu và sinh báo cáo tài chính trực quan theo thời gian thực.",
    imageUrl: "/projects/dashboard-tai-chinh.jpg",
    category: "Kế toán & Tài chính",
    techStack: ["Next.js", "TypeScript", "Recharts", "Claude API"],
    demoLink: "#",
  },
  {
    id: "tro-ly-tuyen-dung",
    name: "Trợ lý AI sàng lọc CV tuyển dụng",
    partner: "Tập đoàn nhân sự Delta",
    description:
      "Công cụ nội bộ tự động đọc và chấm điểm CV theo tiêu chí, giúp HR tiết kiệm hàng trăm giờ sàng lọc.",
    imageUrl: "/projects/tro-ly-tuyen-dung.jpg",
    category: "Nhân sự",
    techStack: ["Next.js", "OpenAI API", "Shadcn/UI"],
    demoLink: "#",
  },
  {
    id: "landing-ban-hang-ai",
    name: "Landing Page bán hàng tối ưu chuyển đổi",
    partner: "Thương hiệu mỹ phẩm Epsilon",
    description:
      "Trang bán hàng dựng bằng Vibe Coding với nội dung và bố cục tối ưu bởi AI, tăng 35% tỷ lệ chuyển đổi.",
    imageUrl: "/projects/landing-ban-hang.jpg",
    category: "Thương mại điện tử",
    techStack: ["Next.js", "Tailwind CSS", "Vercel"],
    demoLink: "#",
  },
  {
    id: "quy-trinh-noi-bo-ai",
    name: "Số hóa quy trình vận hành nội bộ",
    partner: "Doanh nghiệp logistics Zeta",
    description:
      "Bộ công cụ AI hỗ trợ soạn thảo văn bản, tổng hợp cuộc họp và tự động hóa luồng phê duyệt nội bộ.",
    imageUrl: "/projects/quy-trinh-noi-bo.jpg",
    category: "Vận hành nội bộ",
    techStack: ["Next.js", "Claude API", "Automation"],
    demoLink: "#",
  },
];
