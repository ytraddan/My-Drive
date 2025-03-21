"use client";

import { generateUploadButton } from "@uploadthing/react";
import { Upload as UploadIcon } from "lucide-react";
import type { OurFileRouter } from "@/app/api/uploadthing/core";
import { Button } from "./ui/button";
import { useParams, useRouter } from "next/navigation";

export function UploadButton() {
  const navigate = useRouter();
  const { folderId } = useParams();

  const parsedFolderId = parseInt(folderId as string);

  console.log(parsedFolderId);
  if (isNaN(parsedFolderId)) {
    return null;
  }

  const Upload = generateUploadButton<OurFileRouter>();

  return (
    <Upload
      input={{ folderId: parsedFolderId }}
      endpoint="imageUploader"
      onClientUploadComplete={() => {
        navigate.refresh();
      }}
      content={{
        button({ ready, isUploading }) {
          if (ready && !isUploading)
            return (
              <Button className="w-full gap-2 active:pointer-events-none">
                <UploadIcon className="h-4 w-4" />
                <span className="text-sm font-medium">Upload</span>
              </Button>
            );
          return (
            <Button className="w-full gap-2 active:pointer-events-none">
              <UploadIcon className="h-4 w-4" />
              <span className="text-sm font-medium">Loading...</span>
            </Button>
          );
        },
        // allowedContent({ ready, fileTypes, isUploading }) {
        //   if (!ready) return "Checking what you allow";
        //   if (isUploading) return "Seems like stuff is uploading";
        //   return `Stuff you can upload: ${fileTypes.join(", ")}`;
        // },
      }}
      appearance={{
        button: "w-full",
        container: "min-h-16 justify-between",
        allowedContent: "self-start text-white px-1",
      }}
    />
  );
}
