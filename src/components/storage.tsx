import { QUERIES } from "@/server/db/queries";
import { formatFileSize } from "@/lib/utils";
import { SignedIn } from "@clerk/nextjs";
import { MAX_STORAGE_SIZE } from "@/server/db/schema";

export async function Storage() {
  const totalSize = await QUERIES.getTotalSize();
  const usedPercentage = Math.min((totalSize / MAX_STORAGE_SIZE) * 100, 100);

  return (
    <SignedIn>
      <div className="pt-4">
        <div className="flex items-center justify-between">
          <div className="text-xs text-muted-foreground">Storage</div>
          <div className="text-xs text-muted-foreground">
            {formatFileSize(totalSize)} of {formatFileSize(MAX_STORAGE_SIZE)}
          </div>
        </div>
        <div className="mt-2 h-2 rounded-full bg-muted">
          <div
            className="h-2 rounded-full bg-primary transition-all duration-300"
            style={{ width: `${usedPercentage}%` }}
          />
        </div>
      </div>
    </SignedIn>
  );
}
