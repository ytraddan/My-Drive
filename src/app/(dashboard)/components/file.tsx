"use client";

import {
  File as FileIcon,
  MoreVertical,
  FileImage,
  FileText,
  Star,
  Share2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { files_table } from "@/server/db/schema";

import Link from "next/link";

export default function File({ file }: { file: typeof files_table.$inferSelect }) {
  const getFileIcon = (filename: string) => {
    const extension = filename.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <FileImage className="h-7 w-7 text-blue-400" />;
      case "pdf":
      case "doc":
      case "docx":
      case "txt":
        return <FileText className="h-7 w-7 text-green-400" />;
      default:
        return <FileIcon className="h-7 w-7 text-gray-400" />;
    }
  };

  if (!file) {
    return null;
  }

  return (
    <div className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50">
      {getFileIcon(file.name)}
      <Link className="min-w-0 flex-1" href={file.url} target="_blank">
        <p className="truncate text-sm font-medium">{file.name}</p>
        <p className="text-xs text-muted-foreground">
          {file.size} • {file.last_modified}
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
