import { MAX_STORAGE_SIZE } from "@/server/db/schema";
import { QUERIES } from "@/server/db/queries";
import { getFormatedSize } from "@/lib/utils";
import { auth } from "@clerk/nextjs/server";

export async function Storage() {
  const { userId } = await auth();

  if (!userId) {
    return null;
  }

  const totalSize = await QUERIES.getTotalFileSize();
  const usedPercentage = Math.min((totalSize / MAX_STORAGE_SIZE) * 100, 100);

  return (
    <div className="pt-4">
      <div className="flex items-center justify-between">
        <div className="text-xs text-muted-foreground">Storage</div>
        <div className="text-xs text-muted-foreground">
          {getFormatedSize(totalSize)} of {getFormatedSize(MAX_STORAGE_SIZE)}
        </div>
      </div>
      <div className="mt-2 h-2 rounded-full bg-muted">
        <div
          className="h-2 rounded-full bg-primary transition-all duration-300"
          style={{ width: `${usedPercentage}%` }}
        />
      </div>
    </div>
  );
}
