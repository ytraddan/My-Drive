"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import {
  ChevronRight,
  File,
  FileImage,
  FileText,
  Folder,
  MoreVertical,
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
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { mockData } from "@/lib/mock";


export default function FileExplorer() {
  const [currentFolder, setCurrentFolder] = useState("root");
  const router = useRouter();
  const pathname = usePathname();

  // Get the path from root to current folder
  const getBreadcrumbPath = (id: string) => {
    const path = [];
    let current: string | undefined = id;

    while (current) {
      path.unshift({
        id: current,
        name: mockData[current]?.name ?? "My Drive",
      });
      current = mockData[current]?.parent;
    }

    return path;
  };

  const breadcrumbPath = getBreadcrumbPath(currentFolder);

  // Get the children of the current folder
  const folderContents =
    mockData[currentFolder]?.type === "folder"
      ? mockData[currentFolder].children
      : [];

  const handleFolderClick = (id: string) => {
    setCurrentFolder(id);
  };

  const handleFileClick = (id: string) => {
    // In a real app, this would open the file or download it
    alert(`Opening file: ${mockData[id]?.name}`);
  };

  // Get icon for file based on extension
  const getFileIcon = (filename: string) => {
    const extension = filename.split(".").pop()?.toLowerCase();

    switch (extension) {
      case "jpg":
      case "jpeg":
      case "png":
      case "gif":
        return <FileImage className="h-5 w-5 text-blue-400" />;
      case "pdf":
      case "doc":
      case "docx":
      case "txt":
        return <FileText className="h-5 w-5 text-green-400" />;
      default:
        return <File className="h-5 w-5 text-gray-400" />;
    }
  };

  // Create breadcrumb items and separators as flat array
  const breadcrumbItems = breadcrumbPath.flatMap((item, index) => {
    const isLast = index === breadcrumbPath.length - 1;

    // For each item, return the item and a separator (if not the last item)
    const result = [
      <BreadcrumbItem key={`item-${item.id}`}>
        {!isLast ? (
          <BreadcrumbLink
            className="cursor-pointer"
            onClick={() => handleFolderClick(item.id)}
          >
            {item.name}
          </BreadcrumbLink>
        ) : (
          <span className="cursor-default">{item.name}</span>
        )}
      </BreadcrumbItem>,
    ];

    // Add a separator after each item except the last one
    if (!isLast) {
      result.push(
        <BreadcrumbSeparator key={`separator-${item.id}`}>
          <ChevronRight className="h-4 w-4" />
        </BreadcrumbSeparator>,
      );
    }

    return result;
  });

  return (
    <div className="space-y-4">
      <Breadcrumb>
        <BreadcrumbList>{breadcrumbItems}</BreadcrumbList>
      </Breadcrumb>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        {folderContents.map((id) => {
          const item = mockData[id];

          if (!item) {
            return null;
          }

          if (item.type === "folder") {
            return (
              <div
                key={id}
                className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
                onClick={() => handleFolderClick(id)}
              >
                <Folder className="h-10 w-10 text-blue-400" />
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">{item.name}</p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
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
          } else {
            const fileItem = item;
            return (
              <div
                key={id}
                className="flex cursor-pointer items-center space-x-3 rounded-lg border border-border p-3 hover:bg-muted/50"
                onClick={() => handleFileClick(id)}
              >
                {getFileIcon(fileItem.name)}
                <div className="min-w-0 flex-1">
                  <p className="truncate text-sm font-medium">
                    {fileItem.name}
                  </p>
                  <p className="text-xs text-muted-foreground">
                    {fileItem.size} • {fileItem.modified}
                  </p>
                </div>
                <DropdownMenu>
                  <DropdownMenuTrigger
                    asChild
                    onClick={(e) => e.stopPropagation()}
                  >
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
        })}
      </div>
    </div>
  );
}
