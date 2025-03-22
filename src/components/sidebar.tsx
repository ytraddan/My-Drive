import { UploadButton } from "@/components/upload-button";
import { Button } from "@/components/ui/button";
import { Storage } from "@/components/storage";
import {
  Clock,
  FileText,
  HardDrive,
  Image as ImageIcon,
  Star,
  Trash2,
  AudioLines,
  Clapperboard,
} from "lucide-react";

const mainNavItems = [
  { Icon: HardDrive, label: "Drive", href: "drive/folder/1" },
  { Icon: Clock, label: "Recent", href: "drive/recent" },
  { Icon: Star, label: "Starred", href: "drive/starred" },
  { Icon: Trash2, label: "Trash", href: "drive/trash" },
];

const categoryItems = [
  { Icon: ImageIcon, label: "Images", href: "drive/images" },
  { Icon: FileText, label: "Documents", href: "drive/documents" },
  { Icon: AudioLines, label: "Audio", href: "drive/audio" },
  { Icon: Clapperboard, label: "Video", href: "drive/video" },
];

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

export default function Sidebar() {
  return (
    <div className="hidden w-64 overflow-y-scroll border-r border-border p-4 md:block">
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
