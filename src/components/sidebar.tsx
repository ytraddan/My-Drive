import { UploadButton } from "@/components/upload-button";
import { Button } from "@/components/ui/button";
import { Storage } from "@/components/storage";
import {
  Clock,
  Computer,
  FileText,
  HardDrive,
  Image as ImageIcon,
  Share2,
  Star,
  Trash2,
  Users,
} from "lucide-react";

const mainNavItems = [
  { Icon: HardDrive, label: "My Drive", href: "/1" },
  { Icon: Computer, label: "Computers", href: "#" },
  { Icon: Share2, label: "Shared with me", href: "#" },
  { Icon: Clock, label: "Recent", href: "#" },
  { Icon: Star, label: "Starred", href: "#" },
  { Icon: Trash2, label: "Trash", href: "#" },
];

const categoryItems = [
  { Icon: ImageIcon, label: "Images", href: "#" },
  { Icon: FileText, label: "Documents", href: "#" },
  { Icon: Users, label: "Shared", href: "#" },
];

export default function Sidebar() {
  const SidebarItem = ({ Icon, label, href }: (typeof categoryItems)[0]) => {
    return (
      <Button variant="ghost" className="w-full justify-start" asChild>
        <a href={href}>
          <Icon className="mr-2 h-4 w-4" />
          {label}
        </a>
      </Button>
    );
  };

  return (
    <div className="hidden w-64 border-r border-border p-4 md:block">
      <div className="space-y-6">
        <UploadButton />

        <div className="space-y-1">
          {mainNavItems.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>

        <div className="space-y-1">
          <h3 className="px-2 text-xs font-semibold text-muted-foreground">
            Categories
          </h3>
          {categoryItems.map((item) => (
            <SidebarItem key={item.label} {...item} />
          ))}
        </div>
        <Storage />
      </div>
    </div>
  );
}
