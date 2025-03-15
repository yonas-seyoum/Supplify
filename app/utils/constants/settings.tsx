import { Bell, Lock, Palette, Globe, HelpCircle, User } from "lucide-react";

export type Tabs = {
  id:
    | "profile"
    | "notifications"
    | "security"
    | "appearance"
    | "language"
    | "help";
  label: string;
  icon: any;
};

export const tabs: Tabs[] = [
  {
    id: "profile",
    label: "Profile",
    icon: <User size={20} />,
  },
  {
    id: "notifications",
    label: "Notifications",
    icon: <Bell size={20} />,
  },
  {
    id: "security",
    label: "Security",
    icon: <Lock size={20} />,
  },
  {
    id: "appearance",
    label: "Appearance",
    icon: <Palette size={20} />,
  },
  {
    id: "language",
    label: "Language",
    icon: <Globe size={20} />,
  },
  {
    id: "help",
    label: "Help & Support",
    icon: <HelpCircle size={20} />,
  },
];
