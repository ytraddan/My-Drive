"use server";

import { auth } from "@clerk/nextjs/server";
import { revalidatePath } from "next/cache";
import { UTApi } from "uploadthing/server";
import { redirect } from "next/navigation";
import { files_table } from "./db/schema";
import { and, eq } from "drizzle-orm";
import { db } from "./db";

const utApi = new UTApi();

export async function deleteFile(fileId: number) {
  const session = await auth();

  if (!session.userId) {
    return { error: "Unauthorized" };
  }

  const [file] = await db
    .select()
    .from(files_table)
    .where(
      and(eq(files_table.id, fileId), eq(files_table.ownerId, session.userId)),
    );

  if (!file) {
    return { error: "File not found" };
  }

  const utApiResult = await utApi.deleteFiles(file.fileKey);
  console.log(utApiResult);

  const dbDeleteResult = await db
    .delete(files_table)
    .where(eq(files_table.id, fileId));
  console.log(dbDeleteResult);

  revalidatePath(`/drive/folder/${file.parent}`);

  return { success: true };
}

export async function handleGetStarted() {
  const session = await auth();

  if (!session.userId) {
    redirect("/sign-in");
  }

  redirect("/drive");
}
