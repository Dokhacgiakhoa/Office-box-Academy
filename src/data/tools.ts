import type { Tier } from "./tiers";

export interface AiTool {
  id: string;
  name: string;
  category: string;
  tier: Tier; // Phân loại tool theo nhánh
  logoUrl?: string;
}

/**
 * Danh sách công cụ AI cho Marquee hệ sinh thái.
 * Ưu tiên logo cục bộ trong /public/logos (tránh phụ thuộc CDN — simpleicons
 * từng gỡ icon OpenAI làm vỡ ảnh GPT). Tool nào không có logo (cục bộ lẫn CDN)
 * sẽ tự hiển thị chữ cái đầu qua ToolLogo, đồng thời ToolLogo có onError
 * fallback nên không bao giờ hiển thị ảnh vỡ (broken image).
 */
export const tools: AiTool[] = [
  { id: "gpt", name: "ChatGPT", category: "Core AI", tier: "OFFICE", logoUrl: "/logos/chatgpt.png" },
  { id: "claude", name: "Claude", category: "Core AI", tier: "EXPERT", logoUrl: "/logos/claude.png" },
  { id: "gemini", name: "Gemini", category: "Core AI", tier: "OFFICE", logoUrl: "/logos/gemini.png" },
  { id: "notebooklm", name: "NotebookLM", category: "Core AI", tier: "OFFICE" },
  { id: "deepseek", name: "DeepSeek", category: "Core AI", tier: "OFFICE", logoUrl: "/logos/deepseek.png" },
  { id: "flux", name: "Flux", category: "Image / Video", tier: "OFFICE" },
  { id: "freepik", name: "Freepik AI", category: "Image / Video", tier: "OFFICE", logoUrl: "https://cdn.simpleicons.org/freepik/1273EB" },
  { id: "comfyui", name: "ComfyUI", category: "Image / Video", tier: "OFFICE" },
  { id: "veo3", name: "Veo 3", category: "Image / Video", tier: "OFFICE", logoUrl: "/logos/veo3.png" },
  { id: "kling", name: "Kling", category: "Image / Video", tier: "OFFICE" },
  { id: "luma", name: "Luma", category: "Image / Video", tier: "OFFICE" },
  { id: "n8n", name: "n8n", category: "Automation", tier: "MARKETING", logoUrl: "https://cdn.simpleicons.org/n8n/FF6D5A" },
  { id: "googlestudio", name: "Google AI Studio", category: "Code / Data", tier: "MARKETING", logoUrl: "/logos/googlestudio.png" },
  { id: "github", name: "GitHub", category: "Code / Data", tier: "EXPERT", logoUrl: "https://cdn.simpleicons.org/github/181717" },
  { id: "vercel", name: "Vercel", category: "Code / Data", tier: "EXPERT", logoUrl: "https://cdn.simpleicons.org/vercel/000000" },
  { id: "python", name: "Python", category: "Code / Data", tier: "EXPERT", logoUrl: "https://cdn.simpleicons.org/python/3776AB" },
  { id: "streamlit", name: "Streamlit", category: "Code / Data", tier: "EXPERT", logoUrl: "https://cdn.simpleicons.org/streamlit/FF4B4B" },
  { id: "stitch", name: "Google Stitch", category: "Code / Data", tier: "EXPERT" },
  { id: "antigravity", name: "Google Antigravity", category: "Code / Data", tier: "EXPERT" }
];
