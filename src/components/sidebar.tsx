import {
  Clock,
  Computer,
  FileText,
  HardDrive,
  Image,
  Share2,
  Star,
  Trash2,
  Users,
} from "lucide-react";
import { Button } from "~/components/ui/button";
import { UploadButton } from "~/components/upload-button";

export function Sidebar() {
  return (
    <div className="hidden w-64 border-r border-border p-4 md:block">
      <div className="space-y-6">
        <UploadButton />

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <HardDrive className="mr-2 h-4 w-4" />
              My Drive
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Computer className="mr-2 h-4 w-4" />
              Computers
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Share2 className="mr-2 h-4 w-4" />
              Shared with me
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Clock className="mr-2 h-4 w-4" />
              Recent
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Star className="mr-2 h-4 w-4" />
              Starred
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Trash2 className="mr-2 h-4 w-4" />
              Trash
            </a>
          </Button>
        </div>

        <div className="space-y-1">
          <h3 className="px-2 text-xs font-semibold text-muted-foreground">
            Categories
          </h3>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Image className="mr-2 h-4 w-4" />
              Images
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <FileText className="mr-2 h-4 w-4" />
              Documents
            </a>
          </Button>
          <Button variant="ghost" className="w-full justify-start" asChild>
            <a href="#">
              <Users className="mr-2 h-4 w-4" />
              Shared
            </a>
          </Button>
        </div>

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
      </div>
    </div>
  );
}
