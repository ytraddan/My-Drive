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
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { SignedIn } from "@clerk/nextjs";
import { UploadButton } from "@/components/upload-button";

interface SidebarItemProps {
  icon: LucideIcon;
  label: string;
  href: string;
}

const mainNavItems = [
  { icon: HardDrive, label: "My Drive", href: "/1" },
  { icon: Computer, label: "Computers", href: "#" },
  { icon: Share2, label: "Shared with me", href: "#" },
  { icon: Clock, label: "Recent", href: "#" },
  { icon: Star, label: "Starred", href: "#" },
  { icon: Trash2, label: "Trash", href: "#" },
];

const categoryItems = [
  { icon: ImageIcon, label: "Images", href: "#" },
  { icon: FileText, label: "Documents", href: "#" },
  { icon: Users, label: "Shared", href: "#" },
];

export default function Sidebar() {
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
        <SignedIn>
          <Storage />
        </SignedIn>
      </div>
    </div>
  );
}

function Storage() {
  return (
    <div className="pt-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">Storage</div>
        <div className="text-xs text-muted-foreground">
          7.5 GB of 15 GB used
        </div>
      </div>
      <div className="mt-2 h-2 rounded-full bg-muted">
        <div className="h-2 w-1/2 rounded-full bg-primary"></div>
      </div>
    </div>
  );
}

function SidebarItem({ icon: Icon, label, href }: SidebarItemProps) {
  return (
    <Button variant="ghost" className="w-full justify-start" asChild>
      <a href={href}>
        <Icon className="mr-2 h-4 w-4" />
        {label}
      </a>
    </Button>
  );
}
