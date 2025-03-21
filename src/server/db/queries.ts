import "server-only";

import {
  folders_table as folderSchema,
  files_table as fileSchema,
} from "@/server/db/schema";
import { db } from "@/server/db";
import { eq, sql } from "drizzle-orm";

export const QUERIES = {
  getFolders: function (folderId: number) {
    return db
      .select()
      .from(folderSchema)
      .where(eq(folderSchema.parent, folderId));
  },

  getFiles: function (folderId: number) {
    return db.select().from(fileSchema).where(eq(fileSchema.parent, folderId));
  },

  getFolderParents: async function (folderId: number) {
    const parents = [];
    let currentId: number | null = folderId;

    while (currentId !== null) {
      const folder = await db
        .selectDistinct()
        .from(folderSchema)
        .where(eq(folderSchema.id, currentId));

      if (!folder[0]) {
        throw new Error("Parent folder not found");
      }

      parents.unshift(folder[0]);
      currentId = folder[0].parent;
    }

    return parents;
  },

  getFolderById: async function (folderId: number) {
    const folder = await db
      .select()
      .from(folderSchema)
      .where(eq(folderSchema.id, folderId));
    return folder[0];
  },

  getTotalSize: async function () {
    const result = await db
      .select({
        total: sql<number>`CAST(sum(${fileSchema.size}) AS SIGNED)`,
      })
      .from(fileSchema);
    return result[0]?.total ?? 0;
  },

  getUserTotalSize: async function (ownerId: string) {
    const result = await db
      .select({
        total: sql<number>`sum(${fileSchema.size})`,
      })
      .from(fileSchema)
      .where(eq(fileSchema.ownerId, ownerId));
    return result[0]?.total ?? 0;
  },
};

export const MUTATIONS = {
  createFile: async function (input: {
    ownerId: string;
    name: string;
    size: number;
    url: string;
    parent: number;
  }) {
    return await db.insert(fileSchema).values(input);
  },
};
