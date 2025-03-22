"use client";

import { MoreVerticalIcon, StarIcon, Trash2Icon } from "lucide-react";
import { getFormatedDate, getFormatedSize, getFileIcon } from "@/lib/utils";
import type { DB_FileType } from "@/server/db/schema";
import { Button } from "@/components/ui/button";
import { deleteFile } from "@/server/actions";
import Link from "next/link";
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
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="h-8 w-8">
            <MoreVerticalIcon className="h-4 w-4" />
            <span className="sr-only">More</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" onClick={(e) => e.stopPropagation()}>
          <DropdownMenuItem>
            <StarIcon className="mr-2 h-4 w-4" />
            <span>Star</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={() => deleteFile(file.id!)}>
            <Trash2Icon className="mr-2 h-4 w-4" />
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
