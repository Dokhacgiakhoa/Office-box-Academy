import {
  Briefcase,
  Megaphone,
  PhoneCall,
  Calculator,
  Users,
  Palette,
  type LucideIcon,
} from "lucide-react";

/** Map tên icon (string trong data) sang component icon thực tế. */
const iconMap: Record<string, LucideIcon> = {
  Briefcase,
  Megaphone,
  PhoneCall,
  Calculator,
  Users,
  Palette,
};

/** Trả về component icon theo tên; fallback về Briefcase nếu không khớp. */
export function getProfessionIcon(iconName?: string): LucideIcon {
  return iconMap[iconName ?? ""] ?? Briefcase;
}
