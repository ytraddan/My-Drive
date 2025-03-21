import "server-only";

import {
  folders_table as folderSchema,
  files_table as fileSchema,
} from "@/server/db/schema";
import { db } from "@/server/db";
import { eq } from "drizzle-orm";

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
