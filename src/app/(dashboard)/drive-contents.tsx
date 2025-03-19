"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import File from "./components/file";
import Folder from "./components/folder";
import Breadcrumbs from "./components/breadcrumbs";
import type { files as filesT, folders as foldersT } from "@/server/db/schema";

export default function DriveContents({
  files,
  folders,
}: {
  files: (typeof filesT.$inferSelect)[];
  folders: (typeof foldersT.$inferSelect)[];
}) {
  const router = useRouter();
  const pathname = usePathname();

  const Folders = () =>
    folders.map((folder) => <Folder key={folder.id} folder={folder} />);

  const Files = () => files.map((file) => <File key={file.id} file={file} />);

  return (
    <div className="space-y-4">
      <Breadcrumbs />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Folders />
        <Files />
      </div>
    </div>
  );
}
