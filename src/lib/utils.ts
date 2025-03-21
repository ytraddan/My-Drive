import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatDate(date: Date | undefined) {
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

export function formatFileSize(bytes: number) {
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
