import {
  Home,
  Building2,
  KeyRound,
  ShieldCheck,
  FileText,
  Scale,
  Gavel,
  ShieldAlert,
  Map,
  Tag,
  type LucideIcon,
} from "lucide-react";

export const ICON_MAP: Record<string, LucideIcon> = {
  Home,
  Building2,
  KeyRound,
  ShieldCheck,
  FileText,
  Scale,
  Gavel,
  ShieldAlert,
  Map,
  Tag,
};

export function getIcon(name: string): LucideIcon {
  return ICON_MAP[name] ?? FileText;
}
