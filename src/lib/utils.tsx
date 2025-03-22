import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { FILE_PATTERNS } from "@/constants/filePatterns";
import {
  File as FileIcon,
  FileImage,
  FileText,
  FileMusic,
  FileVideo,
} from "lucide-react";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getFormatedDate(date: Date | undefined) {
  if (!date) {
    return "unknown date";
  }
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0"); // Months are 0-indexed
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${day}.${month}.${year} ${hours}:${minutes}`;
}

export function getFormatedSize(bytes: number) {
  const KB = 1024;
  const MB = KB * 1024;
  const GB = MB * 1024;

  if (bytes < KB) {
    return `${bytes} B`;
  } else if (bytes < MB) {
    const sizeKb = (bytes / KB).toFixed(0);
    return `${sizeKb} KB`;
  } else if (bytes < GB) {
    const sizeMb = (bytes / MB).toFixed(1);
    return `${sizeMb} MB`;
  } else {
    const sizeGb = (bytes / GB).toFixed(1);
    return `${sizeGb} GB`;
  }
}

export const getFileIcon = (filename: string) => {
  const extension = filename.split(".").pop()?.toLowerCase();

  for (const [type, patterns] of Object.entries(FILE_PATTERNS)) {
    if (
      patterns.some(
        (pattern) => pattern.replace("%", "").slice(1) === extension,
      )
    ) {
      switch (type) {
        case "images":
          return <FileImage className="h-7 w-7 text-blue-400" />;
        case "documents":
          return <FileText className="h-7 w-7 text-green-400" />;
        case "audio":
          return <FileMusic className="h-7 w-7 text-purple-400" />;
        case "video":
          return <FileVideo className="h-7 w-7 text-red-400" />;
      }
    }
  }
  return <FileIcon className="h-7 w-7 text-gray-400" />;
};
