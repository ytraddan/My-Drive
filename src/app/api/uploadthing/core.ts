/* eslint-disable @typescript-eslint/only-throw-error */
import { createUploadthing, type FileRouter } from "uploadthing/next";
import { MUTATIONS, QUERIES } from "@/server/db/queries";
import { UploadThingError } from "uploadthing/server";
import { MAX_FILE_SIZE, MAX_STORAGE_SIZE } from "@/server/db/schema";
import { auth } from "@clerk/nextjs/server";
import { z } from "zod";

const f = createUploadthing();

export const ourFileRouter = {
  driveUploader: f({
    blob: {
      maxFileSize: MAX_FILE_SIZE,
      maxFileCount: 5,
    },
  })
    .input(
      z.object({
        parentId: z.number(),
      }),
    )
    .middleware(async ({ input, files }) => {
      const user = await auth();

      if (!user.userId) {
        throw new UploadThingError("Unauthorized");
      }

      const storageSize = await QUERIES.getTotalSize();
      const totalUploadSize = files.reduce((sum, file) => sum + file.size, 0);

      if (storageSize + totalUploadSize > MAX_STORAGE_SIZE) {
        throw new UploadThingError("Insufficient storage capacity");
      }

      const folder = await QUERIES.getFolderById(input.parentId);

      if (!folder) {
        throw new UploadThingError("Folder not found");
      }

      if (folder.ownerId !== user.userId) {
        throw new UploadThingError("Unauthorized");
      }

      return { userId: user.userId, parentId: input.parentId };
    })
    .onUploadComplete(async ({ metadata, file }) => {
      console.log("Upload complete for userId:", metadata.userId);
      console.log("file url", file.url);

      await MUTATIONS.createFile({
        ownerId: metadata.userId,
        name: file.name,
        size: file.size,
        url: file.url,
        parent: metadata.parentId,
      });

      // Whatever is returned here is sent to the clientside `onClientUploadComplete` callback
      return { uploadedBy: metadata.userId };
    }),
} satisfies FileRouter;

export type OurFileRouter = typeof ourFileRouter;
