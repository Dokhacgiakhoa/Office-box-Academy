/**
 * Hệ thống phân hướng 3-Tier cho người dùng & nội dung.
 * - OFFICE: Các khóa học hỗ trợ các công việc nội bộ (HR, Quản lý, Tài chính).
 * - MARKETING (AI Agent): Các khóa học về Tự động hóa n8n và tạo Trợ lý ảo.
 * - EXPERT (VibeCoding): hiểu sâu và tự xây dựng giải pháp AI.
 */
export type Tier = "OFFICE" | "MARKETING" | "EXPERT";

export interface TierMeta {
  label: string;
  tagline: string;
  description: string;
}

export const tierMeta: Record<Tier, TierMeta> = {
  OFFICE: {
    label: "AI Office",
    tagline: "Ứng dụng hàng ngày",
    description:
      "Làm chủ các công cụ AI phổ biến để tự động hóa công việc, xử lý tài liệu, phân tích dữ liệu và tối ưu hiệu suất cá nhân.",
  },
  MARKETING: {
    label: "AI Agent",
    tagline: "Tự động hóa thông minh",
    description:
      "Làm chủ n8n và các công cụ Node-based để tự động hóa quy trình nghiệp vụ và thiết kế Trợ lý ảo cho doanh nghiệp.",
  },
  EXPERT: {
    label: "VibeCoding",
    tagline: "Làm chủ & Tự Build",
    description:
      "Hiểu bản chất và tự tay thiết kế hệ thống, ứng dụng Web, và Trợ lý ảo (AI Agent) cá nhân hóa bằng ngôn ngữ tự nhiên.",
  },
};

/** Thứ tự hiển thị của các tier trên UI (Toggle, Tabs). */
export const tierOrder: Tier[] = ["OFFICE", "MARKETING", "EXPERT"];
