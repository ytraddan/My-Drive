import { QUERIES } from "@/server/db/queries";
import Breadcrumbs from "@/components/breadcrumbs";
import Folders from "@/components/folders";
import Files from "@/components/files";

export default async function MyDrive(props: {
  params: Promise<{ folderId: string }>;
}) {
  const params = await props.params;
  const parsedFolderId = parseInt(params.folderId);

  if (isNaN(parsedFolderId)) {
    return <div>Invalid Id</div>;
  }

  const [folders, files, parents] = await Promise.all([
    QUERIES.getFolders(parsedFolderId),
    QUERIES.getFiles(parsedFolderId),
    QUERIES.getFolderParents(parsedFolderId),
  ]);

  return (
    <div className="space-y-4">
      <Breadcrumbs parents={parents} />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-4">
        <Folders folders={folders} />
        <Files files={files} />
      </div>
    </div>
  );
}
