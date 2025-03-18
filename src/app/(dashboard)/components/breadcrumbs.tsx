import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { mockFolders } from "@/lib/mock";
import { useMemo } from "react";

export default function Breadcrumbs({
  currentFolderId,
  handleClick,
}: {
  currentFolderId: string;
  handleClick: (id: string) => void;
}) {
  const breadcrumbs = useMemo(() => {
    const path = [];
    let currentId: string | null = currentFolderId;

    while (currentId) {
      const folder = mockFolders.find((f) => f.id === currentId);
      if (!folder) break;

      path.unshift({ id: currentId, name: folder.name });
      currentId = folder.parent;
    }

    return path;
  }, [currentFolderId]);

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {breadcrumbs.map((item, index) => (
          <>
            <BreadcrumbItem key={item.id}>
              {index === breadcrumbs.length - 1 ? (
                <span className="cursor-default">{item.name}</span>
              ) : (
                <BreadcrumbLink
                  className="cursor-pointer"
                  onClick={() => handleClick(item.id)}
                >
                  {item.name}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < breadcrumbs.length - 1 && (
              <BreadcrumbSeparator key={`separator-${item.id}`}>
                <ChevronRight className="h-4 w-4" />
              </BreadcrumbSeparator>
            )}
          </>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
