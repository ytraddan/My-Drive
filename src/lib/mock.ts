export type File = {
  id: number;
  name: string;
  type: "file";
  url: string;
  size: number; // Size in kilobytes
  parent: number;
  last_modified: string;
};

export type Folder = {
  id: number;
  name: string;
  type: "folder";
  parent: number | null;
};

export const mockFolders: Folder[] = [
  {
    id: 1,
    name: "My Drive",
    type: "folder",
    parent: null,
  },
  {
    id: 2,
    name: "Documents",
    type: "folder",
    parent: 1,
  },
  {
    id: 3,
    name: "Work",
    type: "folder",
    parent: 2,
  },
  {
    id: 4,
    name: "Personal",
    type: "folder",
    parent: 2,
  },
  {
    id: 5,
    name: "Images",
    type: "folder",
    parent: 1,
  },
  {
    id: 6,
    name: "Vacation",
    type: "folder",
    parent: 5,
  },
  {
    id: 7,
    name: "Projects",
    type: "folder",
    parent: 1,
  },
  {
    id: 8,
    name: "Website",
    type: "folder",
    parent: 7,
  },
  {
    id: 9,
    name: "App",
    type: "folder",
    parent: 7,
  },
];

export const mockFiles: File[] = [
  {
    id: 10,
    name: "file1.txt",
    type: "file",
    url: "/files/file1.txt",
    size: 12, // KB
    parent: 1,
    last_modified: "2024-03-15T10:30:00Z",
  },
  {
    id: 11,
    name: "presentation.pptx",
    type: "file",
    url: "/files/presentation.pptx",
    size: 2400, // KB (2.4 MB * 1000)
    parent: 1,
    last_modified: "2024-03-14T15:45:00Z",
  },
  {
    id: 12,
    name: "resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    size: 450, // KB
    parent: 2,
    last_modified: "2024-03-10T09:20:00Z",
  },
  {
    id: 13,
    name: "notes.docx",
    type: "file",
    url: "/files/notes.docx",
    size: 35, // KB
    parent: 2,
    last_modified: "2024-03-13T11:15:00Z",
  },
  {
    id: 14,
    name: "report.docx",
    type: "file",
    url: "/files/report.docx",
    size: 1200, // KB (1.2 MB * 1000)
    parent: 3,
    last_modified: "2024-03-12T16:30:00Z",
  },
  {
    id: 15,
    name: "data.xlsx",
    type: "file",
    url: "/files/data.xlsx",
    size: 890, // KB
    parent: 3,
    last_modified: "2024-03-11T14:25:00Z",
  },
  {
    id: 16,
    name: "budget.xlsx",
    type: "file",
    url: "/files/budget.xlsx",
    size: 120, // KB
    parent: 4,
    last_modified: "2024-03-09T13:40:00Z",
  },
  {
    id: 17,
    name: "journal.txt",
    type: "file",
    url: "/files/journal.txt",
    size: 45, // KB
    parent: 4,
    last_modified: "2024-03-15T08:55:00Z",
  },
  {
    id: 18,
    name: "profile.jpg",
    type: "file",
    url: "/files/profile.jpg",
    size: 1800, // KB (1.8 MB * 1000)
    parent: 5,
    last_modified: "2024-03-08T17:10:00Z",
  },
  {
    id: 19,
    name: "screenshot.png",
    type: "file",
    url: "/files/screenshot.png",
    size: 950, // KB
    parent: 5,
    last_modified: "2024-03-14T12:05:00Z",
  },
  {
    id: 20,
    name: "beach.jpg",
    type: "file",
    url: "/files/beach.jpg",
    size: 3200, // KB (3.2 MB * 1000)
    parent: 6,
    last_modified: "2024-03-07T10:15:00Z",
  },
  {
    id: 21,
    name: "mountain.jpg",
    type: "file",
    url: "/files/mountain.jpg",
    size: 2800, // KB (2.8 MB * 1000)
    parent: 6,
    last_modified: "2024-03-07T10:20:00Z",
  },
  {
    id: 22,
    name: "sunset.jpg",
    type: "file",
    url: "/files/sunset.jpg",
    size: 2100, // KB (2.1 MB * 1000)
    parent: 6,
    last_modified: "2024-03-07T10:25:00Z",
  },
  {
    id: 23,
    name: "project-plan.pdf",
    type: "file",
    url: "/files/project-plan.pdf",
    size: 1500, // KB (1.5 MB * 1000)
    parent: 7,
    last_modified: "2024-03-13T09:30:00Z",
  },
  {
    id: 24,
    name: "index.html",
    type: "file",
    url: "/files/index.html",
    size: 15, // KB
    parent: 8,
    last_modified: "2024-03-15T15:40:00Z",
  },
  {
    id: 25,
    name: "styles.css",
    type: "file",
    url: "/files/styles.css",
    size: 8, // KB
    parent: 8,
    last_modified: "2024-03-15T15:45:00Z",
  },
  {
    id: 26,
    name: "script.js",
    type: "file",
    url: "/files/script.js",
    size: 12, // KB
    parent: 8,
    last_modified: "2024-03-15T16:00:00Z",
  },
  {
    id: 27,
    name: "main.js",
    type: "file",
    url: "/files/main.js",
    size: 25, // KB
    parent: 9,
    last_modified: "2024-03-14T13:20:00Z",
  },
  {
    id: 28,
    name: "config.json",
    type: "file",
    url: "/files/config.json",
    size: 3, // KB
    parent: 9,
    last_modified: "2024-03-14T13:25:00Z",
  },
];
