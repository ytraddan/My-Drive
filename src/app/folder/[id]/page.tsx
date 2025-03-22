import { QUERIES } from "@/server/db/queries";
import Breadcrumbs from "@/components/breadcrumbs";
import Folder from "@/components/folder";
import Files from "@/components/file";

export default async function MyDrive(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const parsedFolderId = parseInt(params.id);

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
        {folders.map((folder) => (
          <Folder key={folder.id} folder={folder} />
        ))}

        {files.map((file) => (
          <Files key={file.id} file={file} />
        ))}
      </div>
    </div>
  );
}
