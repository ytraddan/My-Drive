import { Folder as FolderIcon, MoreVertical, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { folders as foldersT } from "@/server/db/schema";

export default function Folder({
  folder,
  handleFolderClick,
}: {
  folder: typeof foldersT.$inferSelect;
  handleFolderClick: () => void;
}) {
  if (!folder) {
    return null;
  }

  return (
    <div
      className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
      onClick={handleFolderClick}
    >
      <FolderIcon className="h-9 w-9 text-blue-400" />
      <div className="min-w-0 flex-1">
        <p className="truncate text-sm font-medium">{folder.name}</p>
      </div>
      <DropdownMenu>
        <DropdownMenuTrigger asChild onClick={(e) => e.stopPropagation()}>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVertical className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem>
            <Star className="mr-2 h-4 w-4" />
            <span>Star</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Share2 className="mr-2 h-4 w-4" />
            <span>Share</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
