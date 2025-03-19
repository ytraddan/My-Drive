import { ChevronRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import type { folders_table } from "@/server/db/schema";

export default function Breadcrumbs({
  parents,
}: {
  parents: (typeof folders_table.$inferSelect)[];
}) {
  return (
    <Breadcrumb>
      <BreadcrumbList>
        {parents.map((item, index) => (
          <>
            <BreadcrumbItem key={item.id}>
              {index === parents.length - 1 ? (
                <span className="cursor-default">{item.name}</span>
              ) : (
                <BreadcrumbLink href={`/${item.id}`} className="cursor-pointer">
                  {item.name}
                </BreadcrumbLink>
              )}
            </BreadcrumbItem>
            {index < parents.length - 1 && (
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
