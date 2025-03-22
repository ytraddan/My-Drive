import { Clapperboard } from "lucide-react";
import { QUERIES } from "@/server/db/queries";
import File from "@/components/file";

export default async function VideoPage() {
  const files = await QUERIES.getFilesByCategory("video");

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Clapperboard className="h-6 w-6" />
        <h1 className="text-2xl font-bold">Video</h1>
      </div>
      <div className="grid gap-4">
        {files.length === 0 ? (
          <div className="rounded-lg border border-border bg-card p-4 text-card-foreground shadow">
            <p className="text-sm text-muted-foreground">
              No video files found
            </p>
          </div>
        ) : (
          files.map((file) => <File key={file.id} file={file} />)
        )}
      </div>
    </div>
  );
}
