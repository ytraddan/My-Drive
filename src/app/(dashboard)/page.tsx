"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { mockFiles, mockFolders } from "@/lib/mock";
import File from "./components/file";
import Folder from "./components/folder";
import Breadcrumbs from "./components/breadcrumbs";

export default function FileExplorer() {
  const [currentFolderId, setCurrentFolderId] = useState("root");
  const router = useRouter();
  const pathname = usePathname();

  const currentFiles = mockFiles.filter(
    (file) => file.parent === currentFolderId,
  );

  const currentFolders = mockFolders.filter(
    (folder) => folder.parent === currentFolderId,
  );

  const Folders = () =>
    currentFolders.map((folder) => (
      <Folder
        key={folder.id}
        folder={folder}
        handleFolderClick={() => setCurrentFolderId(folder.id)}
      />
    ));

  const Files = () =>
    currentFiles.map((file) => <File key={file.id} file={file} />);

  return (
    <div className="space-y-4">
      <Breadcrumbs
        currentFolderId={currentFolderId}
        handleClick={(id) => setCurrentFolderId(id)}
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Folders />
        <Files />
      </div>
    </div>
  );
}
