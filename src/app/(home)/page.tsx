import { Upload, FolderPlus, Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import File from "@/components/files";
import Folder from "@/components/folders";
import type { DB_FileType, DB_FolderType } from "@/server/db/schema";

export default function HomePage() {
  // Example data - would be replaced with actual data fetching
  const recentFolders: DB_FolderType[] = [
    { id: 1, name: "Documents", ownerId: "1" },
    { id: 2, name: "Photos", ownerId: "1" },
  ];

  const recentFiles: DB_FileType[] = [
    {
      id: 1,
      name: "report.pdf",
      size: 2300,
      url: "#",
      parent: 1,
      ownerId: "1",
    },
    {
      id: 2,
      name: "presentation.pptx",
      size: 4700,
      url: "#",
      parent: 1,
      ownerId: "1",
    },
  ];

  return (
    <div className="space-y-8">
      {/* Welcome section */}
      <section className="rounded-lg bg-zinc-900/70 p-8 text-white">
        <h1 className="text-3xl font-bold">Welcome to My Drive</h1>
        <p className="mt-2 text-lg">
          Securely store, access, and share your files from anywhere
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <Button variant="secondary" className="flex items-center gap-2">
            <Upload size={16} />
            Upload File
          </Button>
          <Button variant="secondary" className="flex items-center gap-2">
            <FolderPlus size={16} />
            New Folder
          </Button>
        </div>
      </section>

      {/* Recent items section */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Clock size={20} /> Recent Items
        </h2>

        <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          <Folder folders={recentFolders} />
          <File files={recentFiles} />
        </div>
      </section>

      {/* Quick access section */}
      <section>
        <h2 className="mb-4 flex items-center gap-2 text-xl font-semibold">
          <Star size={20} /> Starred
        </h2>
        <div className="rounded-lg border border-dashed border-border p-8 text-center text-muted-foreground">
          <p>Items you star will appear here for quick access</p>
          <Button variant="outline" className="mt-4">
            View All Files
          </Button>
        </div>
      </section>
    </div>
  );
}
