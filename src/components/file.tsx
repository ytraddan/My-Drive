"use client";

import { Button } from "@/components/ui/button";
import type { DB_FileType } from "@/server/db/schema";
import { getFormatedDate, getFormatedSize, getFileIcon } from "@/lib/utils";
import Link from "next/link";
import { MoreVertical, Star, Share2 } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function File({ file }: { file: DB_FileType }) {
  if (!file) {
    return null;
  }

  return (
    <div className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50">
      {getFileIcon(file.name)}
      <Link className="min-w-0 flex-1" href={file.url} target="_blank">
        <p className="truncate text-sm font-medium">{file.name}</p>
        <p className="text-xs text-muted-foreground">
          {getFormatedSize(file.size)} • {getFormatedDate(file.createdAt)}
        </p>
      </Link>
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
