import { LucideIcon } from "lucide-react";

export interface Profession {
  id: string;
  name: string;
  iconName: string;
  description: string;
}

export const professions: Profession[] = [
  { 
    id: "c-level", 
    name: "Quản lý & CEO", 
    iconName: "Briefcase", 
    description: "Lên chiến lược, phân tích dữ liệu tổng thể và tự động hóa quy trình quản trị." 
  },
  { 
    id: "marketing", 
    name: "Marketing & PR", 
    iconName: "Megaphone", 
    description: "Sáng tạo nội dung, viết bài SEO, lên kế hoạch chiến dịch truyền thông đa kênh." 
  },
  { 
    id: "sales", 
    name: "Sale & CSKH", 
    iconName: "PhoneCall", 
    description: "Tạo kịch bản chốt sale, email phản hồi tự động, phân tích tâm lý khách hàng." 
  },
  { 
    id: "finance", 
    name: "Kế toán & Tài chính", 
    iconName: "Calculator", 
    description: "Xử lý dữ liệu Excel khổng lồ, bóc tách hóa đơn, phân tích báo cáo tài chính." 
  },
  { 
    id: "hr", 
    name: "Nhân sự (HR)", 
    iconName: "Users", 
    description: "Sàng lọc CV hàng loạt, soạn thảo hợp đồng, xây dựng chính sách nội bộ." 
  },
  { 
    id: "design", 
    name: "Thiết kế (Designer)", 
    iconName: "Palette", 
    description: "Brainstorm ý tưởng, tạo ảnh minh họa, chỉnh sửa video và thiết kế ấn phẩm 2D/3D." 
  },
];
