"use client";

import { Folder as FolderIcon, MoreVertical, Star, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import type { DB_FolderType } from "@/server/db/schema";
import Link from "next/link";

export default function Folder({ folders }: { folders: DB_FolderType[] }) {
  if (!folders) {
    return null;
  }

  return (
    <>
      {folders.map((folder) => (
        <Link
          key={folder.id}
          className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
          href={`/${folder.id}`}
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
            <DropdownMenuContent
              align="end"
              onClick={(e) => e.stopPropagation()}
            >
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
        </Link>
      ))}
    </>
  );
}
