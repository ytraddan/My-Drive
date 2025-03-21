"use client";

import { generateUploadButton } from "@uploadthing/react";
import { Upload as UploadIcon } from "lucide-react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { Button } from "./ui/button";
import { useParams, useRouter } from "next/navigation";
import { MAX_FILE_SIZE } from "@/server/db/schema";

export function UploadButton() {
  const navigate = useRouter();
  const { folderId } = useParams();

  const parsedFolderId = parseInt(folderId as string);

  if (isNaN(parsedFolderId)) {
    return null;
  }

  const Upload = generateUploadButton<OurFileRouter>();

  return (
    <Upload
      input={{ parentId: parsedFolderId }}
      endpoint="driveUploader"
      onClientUploadComplete={() => {
        navigate.refresh();
      }}
      content={{
        button({ ready, isUploading }) {
          if (!ready)
            return (
              <Button className="w-full cursor-not-allowed gap-2 active:pointer-events-none">
                <UploadIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Upload</span>
              </Button>
            );
          if (isUploading)
            return (
              <Button className="w-full animate-pulse cursor-not-allowed gap-2 active:pointer-events-none">
                <UploadIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Uploading...</span>
              </Button>
            );
          return (
            <Button className="w-full gap-2 active:pointer-events-none">
              <UploadIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Upload</span>
            </Button>
          );
        },
        allowedContent({ ready, isUploading, uploadProgress }) {
          if (!ready)
            return (
              <span className="text-muted-foreground">
                Files up to {MAX_FILE_SIZE}
              </span>
            );
          if (isUploading)
            return (
              <div className="flex justify-between">
                <span>Files up to {MAX_FILE_SIZE}</span>
                <span>{uploadProgress}%</span>
              </div>
            );
          return (
            <span className="text-muted-foreground">
              Files up to {MAX_FILE_SIZE}
            </span>
          );
        },
      }}
      appearance={{
        button: "w-full",
        container: "gap-1",
        allowedContent: "self-start text-white px-1 w-full ",
      }}
    />
  );
}
