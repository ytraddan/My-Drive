"use client";

import { Upload } from "lucide-react";
import { Button } from "@/components/ui/button";

export function UploadButton() {
  const handleUpload = (): void => {
    // This would be replaced with actual upload functionality
    alert("Upload functionality would be implemented here");
  };

  return (
    <Button className="w-full justify-start gap-2" onClick={handleUpload}>
      <Upload className="h-4 w-4" />
      Upload
    </Button>
  );
}
