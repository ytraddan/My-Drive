export interface BaseItem {
  type: "file" | "folder";
  name: string;
  parent?: string;
}

export interface FileItem extends BaseItem {
  type: "file";
  size: string;
  modified: string;
}

export interface FolderItem extends BaseItem {
  type: "folder";
  children: string[];
}

export type DriveItem = FileItem | FolderItem;

export type DriveData = Record<string, DriveItem>;
