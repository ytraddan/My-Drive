export type File = {
  id: string;
  name: string;
  type: "file";
  url: string;
  size: string;
  parent: string;
  modified: string;
};

export type Folder = {
  id: string;
  name: string;
  type: "folder";
  parent: string | null;
};

export const mockFolders: Folder[] = [
  {
    id: "root",
    name: "My Drive",
    type: "folder",
    parent: null,
  },
  {
    id: "1",
    name: "Documents",
    type: "folder",
    parent: "root",
  },
  {
    id: "2",
    name: "Work",
    type: "folder",
    parent: "1",
  },
  {
    id: "3",
    name: "Personal",
    type: "folder",
    parent: "1",
  },
  {
    id: "4",
    name: "Images",
    type: "folder",
    parent: "root",
  },
  {
    id: "5",
    name: "Vacation",
    type: "folder",
    parent: "4",
  },
  {
    id: "6",
    name: "Projects",
    type: "folder",
    parent: "root",
  },
  {
    id: "7",
    name: "Website",
    type: "folder",
    parent: "6",
  },
  {
    id: "8",
    name: "App",
    type: "folder",
    parent: "6",
  },
];

export const mockFiles: File[] = [
  {
    id: "9",
    name: "file1.txt",
    type: "file",
    url: "/files/file1.txt",
    size: "12 KB",
    parent: "root",
    modified: "2024-03-15T10:30:00Z",
  },
  {
    id: "10",
    name: "presentation.pptx",
    type: "file",
    url: "/files/presentation.pptx",
    size: "2.4 MB",
    parent: "root",
    modified: "2024-03-14T15:45:00Z",
  },
  {
    id: "11",
    name: "resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    size: "450 KB",
    parent: "1",
    modified: "2024-03-10T09:20:00Z",
  },
  {
    id: "12",
    name: "notes.docx",
    type: "file",
    url: "/files/notes.docx",
    size: "35 KB",
    parent: "1",
    modified: "2024-03-13T11:15:00Z",
  },
  {
    id: "13",
    name: "report.docx",
    type: "file",
    url: "/files/report.docx",
    size: "1.2 MB",
    parent: "2",
    modified: "2024-03-12T16:30:00Z",
  },
  {
    id: "14",
    name: "data.xlsx",
    type: "file",
    url: "/files/data.xlsx",
    size: "890 KB",
    parent: "2",
    modified: "2024-03-11T14:25:00Z",
  },
  {
    id: "15",
    name: "budget.xlsx",
    type: "file",
    url: "/files/budget.xlsx",
    size: "120 KB",
    parent: "3",
    modified: "2024-03-09T13:40:00Z",
  },
  {
    id: "16",
    name: "journal.txt",
    type: "file",
    url: "/files/journal.txt",
    size: "45 KB",
    parent: "3",
    modified: "2024-03-15T08:55:00Z",
  },
  {
    id: "17",
    name: "profile.jpg",
    type: "file",
    url: "/files/profile.jpg",
    size: "1.8 MB",
    parent: "4",
    modified: "2024-03-08T17:10:00Z",
  },
  {
    id: "18",
    name: "screenshot.png",
    type: "file",
    url: "/files/screenshot.png",
    size: "950 KB",
    parent: "4",
    modified: "2024-03-14T12:05:00Z",
  },
  {
    id: "19",
    name: "beach.jpg",
    type: "file",
    url: "/files/beach.jpg",
    size: "3.2 MB",
    parent: "5",
    modified: "2024-03-07T10:15:00Z",
  },
  {
    id: "20",
    name: "mountain.jpg",
    type: "file",
    url: "/files/mountain.jpg",
    size: "2.8 MB",
    parent: "5",
    modified: "2024-03-07T10:20:00Z",
  },
  {
    id: "21",
    name: "sunset.jpg",
    type: "file",
    url: "/files/sunset.jpg",
    size: "2.1 MB",
    parent: "5",
    modified: "2024-03-07T10:25:00Z",
  },
  {
    id: "22",
    name: "project-plan.pdf",
    type: "file",
    url: "/files/project-plan.pdf",
    size: "1.5 MB",
    parent: "6",
    modified: "2024-03-13T09:30:00Z",
  },
  {
    id: "23",
    name: "index.html",
    type: "file",
    url: "/files/index.html",
    size: "15 KB",
    parent: "7",
    modified: "2024-03-15T15:40:00Z",
  },
  {
    id: "24",
    name: "styles.css",
    type: "file",
    url: "/files/styles.css",
    size: "8 KB",
    parent: "7",
    modified: "2024-03-15T15:45:00Z",
  },
  {
    id: "25",
    name: "script.js",
    type: "file",
    url: "/files/script.js",
    size: "12 KB",
    parent: "7",
    modified: "2024-03-15T16:00:00Z",
  },
  {
    id: "26",
    name: "main.js",
    type: "file",
    url: "/files/main.js",
    size: "25 KB",
    parent: "8",
    modified: "2024-03-14T13:20:00Z",
  },
  {
    id: "27",
    name: "config.json",
    type: "file",
    url: "/files/config.json",
    size: "3 KB",
    parent: "8",
    modified: "2024-03-14T13:25:00Z",
  },
];
