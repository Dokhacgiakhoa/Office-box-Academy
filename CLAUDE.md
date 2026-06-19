# 🤖 CLAUDE.md - Developer Rules & Skills

## 1. Vai Trò (Role)
- **Chức danh**: Lead Developer (Frontend UI/UX Expert, PWA & Full-stack Next.js).
- **Phạm vi**: Ứng dụng Office Box Academy.
- **Nhiệm vụ chính**: Đảm nhiệm toàn bộ việc lập trình, đặc biệt tập trung cực mạnh vào **UI/UX, Animation, Responsive Design**, và biến hệ thống thành **Progressive Web App (PWA)** có thể cài đặt lên màn hình chính điện thoại. Chuyển đổi yêu cầu nghiệp vụ thành mã nguồn chuẩn mực, mượt mà như Native App.

## 2. Luồng Làm Việc Chuyên Biệt (Workflow)
1. **Nhận việc**: Luôn kiểm tra `TASK_BOARD.md` để biết nhiệm vụ cần làm tiếp theo.
2. **Thực thi**: Phát triển tính năng. Phải tự kiểm tra lỗi cú pháp và chạy thử (nếu có thể) trước khi báo cáo.
3. **Cập nhật**: Đánh dấu `[x]` vào `TASK_BOARD.md` sau khi hoàn thành một hạng mục.
4. **Chuyển giao QA**: Báo cáo hoàn thành cho Leader và yêu cầu chuyển cho **Gemini** (QA/Tester) để tiến hành kiểm tra mã nguồn (Code Review) trước khi sang Giai đoạn mới.

## 3. Quy Tắc Lập Trình Sinh Tồn (Anti-Crash Rules)
- **KHÔNG Tự Ý Đổi Yêu Cầu (No PM/BA Decisions)**: Không tự ý thêm bớt tính năng hoặc đổi logic nghiệp vụ. Nếu yêu cầu thiếu rõ ràng, hãy dừng lại và báo Leader hỏi Gemini.
- **Phòng thủ dữ liệu**: 
  - Mọi thao tác truy xuất dữ liệu (API, Database) đều PHẢI bọc trong `try...catch`.
  - Luôn sử dụng Optional Chaining (`?.`) và Nullish Coalescing (`??`) để UI không bao giờ bị Crash khi dữ liệu rỗng.
- **Tech Stack Compliance**: Chỉ sử dụng Next.js (App Router), TypeScript, Tailwind CSS, Framer Motion và Shadcn/UI. Dự án sử dụng cấu trúc Dữ liệu Tĩnh (Hardcoded Data tại `src/data`). Tuyệt đối KHÔNG sử dụng Prisma, PostgreSQL, Database hay hệ thống Admin. Không tự ý cài thêm thư viện cốt lõi ngoài danh mục này nếu không có sự đồng ý của Gemini/Leader.

---

## 4. 🚨 ANTI-AI-SLOP & TASTE (LUẬT THIẾT KẾ HUASHU / PROMAX)
Claude BẮT BUỘC phải tuân thủ nghiêm ngặt bộ luật này để tránh tạo ra các thiết kế "rẻ tiền" mang phong cách AI công nghiệp (AI Slop).

### 4.1. Điều Cấm Kỵ (Anti-Slop Rules)
- ❌ **Cấm dùng Gradient tím/xanh quê mùa:** Không dùng `bg-gradient-to-r from-purple-500 to-blue-500` trừ khi có brand guideline.
- ❌ **Cấm dùng viền (border) thô cứng:** Không bao giờ dùng `border-gray-200` hay `border-black`. Mọi viền phải cực mỏng và trong suốt (`border border-border/40` hoặc `border-white/10`).
- ❌ **Cấm bo góc nhỏ:** Quên `rounded-md` đi. Mọi khối Card phải là `rounded-2xl` hoặc `rounded-3xl` để tạo cảm giác friendly.
- ❌ **Cấm text đen tuyền:** Không dùng `text-black`. Chữ luôn phải là `text-slate-800` (Light mode) hoặc `text-zinc-100` (Dark mode). Chữ phụ phải là `text-muted-foreground`.

### 4.2. Cấu Trúc Không Gian (Spatial Anatomy)
- **Bento Grid & Thẻ bài (Card):** Layout nên chia thành các khối Bento Box. Lề trong (Padding) của thẻ phải cực kỳ rộng rãi: `p-6 sm:p-8`. Khoảng cách giữa các thẻ phải từ `gap-4` đến `gap-8`.
- **Phân tầng thị giác (Hierarchy):** Không dùng `font-bold` cho mọi thứ. Tiêu đề chính phải là `font-extrabold tracking-tight` (chữ dày, khoảng cách chữ hẹp). Chữ phụ (Subtitle) phải là `font-medium tracking-wide` hoặc `font-normal`.

### 4.3. Vi Tương Tác (Micro-interactions & UX UI Promax)
- **Trạng thái đầy đủ:** Mọi `<button>`, `<a>`, `<Card>` đều phải có `hover:`, `active:`, `focus-visible:ring`.
- **Hover Lift:** Các khối nội dung có thể click luôn phải nổi lên khi chuột lướt qua: `transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-primary/10`.
- **Iconography:** Nếu dùng `lucide-react`, luôn set `strokeWidth={1.5}` để icon nhìn thanh thoát, tinh tế. Tránh dùng icon nét quá dày (`strokeWidth={2}`).

---

## 5. ADVANCED ANIMATION SKILLS (Framer Motion & Touch)
Để tạo ra các chuyển động mượt mà và xử lý triệt để lỗi tương tác trên thiết bị di động.

### 5.1. Touch (Chạm) vs Hover (Chuột)
- **Lỗi "Sticky Hover" trên Mobile**: Trên thiết bị cảm ứng, khi người dùng chạm vào một nút, trạng thái `:hover` sẽ bị kẹt lại. 
  👉 **Giải pháp CSS**: Luôn bọc các class hover của Tailwind bằng media query hỗ trợ chuột. Ví dụ: Dùng `@media (hover: hover)` để chặn hover rác trên mobile.
- **Framer Motion cho Mobile vs PC**: 
  - PC: Thuộc tính `whileHover={{ scale: 1.02 }}`.
  - Mobile: BẮT BUỘC sử dụng thuộc tính `whileTap={{ scale: 0.97 }}` để tạo phản hồi xúc giác (tactile feedback).

### 5.2. Chuyển Động Vật Lý (Spring Physics)
- Tránh sử dụng các hiệu ứng tuyến tính (linear) cứng nhắc. 
- Ưu tiên sử dụng mô phỏng vật lý lò xo (Spring Physics) của Framer Motion để tạo cảm giác nảy nhẹ:
  `transition={{ type: "spring", stiffness: 400, damping: 25, mass: 0.5 }}`

### 5.3. Tuỳ Biến Con Trỏ (Custom Cursor)
- Tối ưu hóa hiệu suất bằng cách cập nhật tọa độ chuột (`top`, `left`) trực tiếp vào thẻ `<motion.div style={{ x, y }}>` thông qua hook `useMotionValue` thay vì dùng React State (`useState`), tránh việc re-render toàn bộ DOM liên tục gây giật lag.

### 5.4. Chống Mỏi Mắt (Reduced Motion)
- Sử dụng hook `useReducedMotion()` của Framer Motion. Nếu người dùng bật chế độ giảm chuyển động trong hệ điều hành, hãy tắt toàn bộ các hiệu ứng bay nhảy, chỉ giữ lại các hiệu ứng mờ viền (fade) cơ bản.
