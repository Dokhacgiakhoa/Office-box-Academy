/**
 * Nguồn dữ liệu DUY NHẤT cho Lịch sự kiện AI91.
 * Dùng chung cho:
 *  - Thanh sự kiện dưới menu (EventBanner) — hiển thị sự kiện nổi bật theo thời gian thực.
 *  - Dòng thời gian sự kiện ở trang /community (ContentSchedule).
 */
export type EventStatus = "PAST" | "ONGOING" | "UPCOMING";

export interface AcademyEvent {
  id: string;
  /** ISO string kèm offset, ví dụ '2026-06-20T14:00:00+07:00'. */
  date: string;
  platform: string;
  eventType: string;
  topic: string;
  /** Link hành động (đăng ký kênh / group / form khai giảng). */
  actionLink: string;
  imageUrl: string;
}

/** Sự kiện được coi là ONGOING nếu cách thời điểm hiện tại trong vòng 1 giờ. */
const ONGOING_WINDOW_MS = 1000 * 60 * 60;

export const events: AcademyEvent[] = [
  {
    id: "yt-1",
    date: "2026-06-06T14:00:00+07:00",
    platform: "YouTube",
    eventType: "Video Premiere",
    topic: "Tự động hóa báo cáo với Google Sheets và AI",
    actionLink: "https://youtube.com/@ai91",
    imageUrl: "/courses/office_level_1.png",
  },
  {
    id: "live-1",
    date: "2026-06-10T20:00:00+07:00",
    platform: "Group AI91",
    eventType: "Livestream",
    topic: "Q&A: Giải đáp vướng mắc khi dùng ChatGPT làm việc",
    actionLink: "https://facebook.com/groups/ai91.vn",
    imageUrl: "/courses/marketing_level_1.png",
  },
  {
    id: "yt-2",
    date: "2026-06-13T14:00:00+07:00",
    platform: "YouTube",
    eventType: "Video Premiere",
    topic: "Viết kịch bản video TikTok bằng Claude 3.5 Sonnet",
    actionLink: "https://youtube.com/@ai91",
    imageUrl: "/courses/marketing_level_2.png",
  },
  {
    id: "course-1",
    // Sự kiện động: +30 phút từ hiện tại để minh hoạ trạng thái ONGOING real-time.
    date: new Date(Date.now() + 1000 * 60 * 30).toISOString(),
    platform: "Office Box",
    eventType: "Khai giảng Khóa học",
    topic: "Khai giảng: Vibe Coding - Làm App Không Cần Code",
    actionLink: "/learning",
    imageUrl: "/courses/vibecoding_level_1.png",
  },
  {
    id: "yt-3",
    date: "2026-06-20T14:00:00+07:00",
    platform: "YouTube",
    eventType: "Video Premiere",
    topic: "Xử lý hàng ngàn Data với Python Script do AI viết",
    actionLink: "https://youtube.com/@ai91",
    imageUrl: "/courses/vibecoding_level_3.png",
  },
  {
    id: "live-2",
    date: "2026-06-25T20:30:00+07:00",
    platform: "Facebook",
    eventType: "Livestream",
    topic: "Chữa bài thực hành Vibe Coding cùng Giảng viên",
    actionLink: "https://facebook.com/officebox",
    imageUrl: "/courses/vibecoding_level_4.png",
  },
  {
    id: "yt-4",
    date: "2026-06-27T14:00:00+07:00",
    platform: "YouTube",
    eventType: "Video Premiere",
    topic: "Tổng kết: 5 Công cụ AI tốt nhất tháng 6/2026",
    actionLink: "https://youtube.com/@ai91",
    imageUrl: "/courses/office_level_5.png",
  },
];

/** Trạng thái sự kiện dựa trên thời gian thực (mốc `nowMs`). */
export function getEventStatus(dateStr: string, nowMs: number): EventStatus {
  const eventTime = new Date(dateStr).getTime();
  if (Math.abs(eventTime - nowMs) < ONGOING_WINDOW_MS) return "ONGOING";
  if (eventTime < nowMs) return "PAST";
  return "UPCOMING";
}

/**
 * Chọn sự kiện nổi bật để hiển thị trên thanh banner:
 *  1) Ưu tiên sự kiện ĐANG diễn ra (ONGOING).
 *  2) Nếu không có → sự kiện SẮP diễn ra gần nhất (UPCOMING sớm nhất).
 *  3) Không có gì phù hợp → null (ẩn banner).
 */
export function getFeaturedEvent(nowMs: number): AcademyEvent | null {
  const ongoing = events.find((e) => getEventStatus(e.date, nowMs) === "ONGOING");
  if (ongoing) return ongoing;

  const upcoming = events
    .filter((e) => getEventStatus(e.date, nowMs) === "UPCOMING")
    .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  return upcoming[0] ?? null;
}
