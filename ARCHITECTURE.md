# SYSTEM ARCHITECTURE

## 1. Nền tảng công nghệ (Tech Stack)
Dựa trên yêu cầu website được phát triển theo hướng **Website tĩnh, cập nhật bằng Code (Không Database, Không Admin Panel)**.

- **Framework**: Next.js (App Router) - Tối ưu SEO cho bài viết phổ cập kiến thức, sử dụng Server Components để render giao diện siêu tốc.
- **Language**: TypeScript - Hệ thống Data tĩnh phải được bảo vệ bởi Type-Checking để tránh lỗi (Anti-crash).
- **Styling**: Tailwind CSS & Shadcn/UI - Thiết kế UI hiện đại, component có sẵn.
- **Media/Video**: YouTube Embed API (Video được lưu thẳng ID vào file code).
- **Database / Auth**: **KHÔNG SỬ DỤNG**. 

## 2. Cấu trúc Dữ Liệu Tĩnh (Static Data Models)

Vì không dùng Database, toàn bộ dữ liệu sẽ được lưu tại `src/data/*.ts`. Dưới đây là các Interface định nghĩa:

### `Profession` (Chức vụ / Nghề nghiệp)
```typescript
interface Profession {
  id: string; // VD: "ceo", "marketing"
  name: string;
  icon: string;
  description: string;
}
```

### `AiTool` (Công cụ AI)
```typescript
interface AiTool {
  id: string; // VD: "chatgpt", "claude"
  name: string;
  logo: string;
  strongPoints: string;
}
```

### `Course` (Khóa học) & `Lesson` (Bài học)
```typescript
interface Lesson {
  id: string;
  title: string;
  youtubeId: string;
  contentMarkdown?: string;
}

interface Course {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  professionIds: string[]; // Khóa học thuộc về các nghề nào
  aiToolIds: string[]; // Khóa học dùng AI nào
  lessons: Lesson[];
}
```

### `Event` (Sự kiện / Lịch đào tạo)
```typescript
interface Event {
  id: string;
  title: string;
  description: string;
  eventType: "ONLINE" | "OFFLINE";
  startDate: string; // ISO String
  endDate?: string;
  thumbnail?: string;
  actionLink: string; // Chuyển hướng tới Google Form / Zalo
}
```

## 3. Cấu trúc thư mục (Folder Structure)
```
/src
  /app
    /(public)      # Các trang hiển thị (Home, Catalog, Event, Blog)
  /components
    /ui            # UI Elements (Shadcn/UI)
    /shared        # Reusable components
  /data            # 🗄️ NƠI LƯU TRỮ TOÀN BỘ DỮ LIỆU TĨNH (thay thế Database)
    /courses.ts
    /events.ts
    /professions.ts
    /tools.ts
```
