import {
  int,
  text,
  index,
  singlestoreTableCreator,
  bigint,
  timestamp,
  boolean,
} from "drizzle-orm/singlestore-core";

export const createTable = singlestoreTableCreator(
  (name) => `my_drive_${name}`,
);

export const files_table = createTable(
  "files_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text("ownerId").notNull(),
    name: text("name").notNull(),
    size: int("size").notNull(),
    url: text("url").notNull(),
    fileKey: text("file_key").notNull(),
    isStarred: boolean("is_starred").notNull().default(false),
    parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => {
    return [
      index("parent_index").on(t.parent),
      index("owner_id_index").on(t.ownerId),
    ];
  },
);

export const folders_table = createTable(
  "folders_table",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text("ownerId").notNull(),
    name: text("name").notNull(),
    isStarred: boolean("is_starred").notNull().default(false),
    parent: bigint("parent", { mode: "number", unsigned: true }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (t) => {
    return [
      index("parent_index").on(t.parent),
      index("owner_id_index").on(t.ownerId),
    ];
  },
);

export type DB_FileType = typeof files_table.$inferInsert;
export type DB_FolderType = typeof folders_table.$inferInsert;

export const MAX_STORAGE_SIZE = 100 * 1024 * 1024; // 100 MB in bytes
export const MAX_FILE_SIZE = "64MB";
