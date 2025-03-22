export type File = {
  id: number;
  name: string;
  type: "file";
  url: string;
  size: number;
  fileKey: string;
  parent: number;
  last_modified: string;
};

export type Folder = {
  id: number;
  name: string;
  type: "folder";
  fileKey: string;
  parent: number | null;
};

export const mockFolders: Folder[] = [
  {
    id: 1,
    name: "My Drive",
    type: "folder",
    fileKey: "d01_root",
    parent: null,
  },
  {
    id: 2,
    name: "Documents",
    type: "folder",
    fileKey: "d02_docs",
    parent: 1,
  },
  {
    id: 3,
    name: "Work",
    type: "folder",
    fileKey: "d03_work",
    parent: 2,
  },
  {
    id: 4,
    name: "Personal",
    type: "folder",
    fileKey: "d04_pers",
    parent: 2,
  },
  {
    id: 5,
    name: "Images",
    type: "folder",
    fileKey: "d05_imgs",
    parent: 1,
  },
  {
    id: 6,
    name: "Vacation",
    type: "folder",
    fileKey: "d06_vaca",
    parent: 5,
  },
  {
    id: 7,
    name: "Projects",
    type: "folder",
    fileKey: "d07_proj",
    parent: 1,
  },
  {
    id: 8,
    name: "Website",
    type: "folder",
    fileKey: "d08_web",
    parent: 7,
  },
  {
    id: 9,
    name: "App",
    type: "folder",
    fileKey: "d09_app",
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
    fileKey: "f10_a7x9",
    parent: 1,
    last_modified: "2024-03-15T10:30:00Z",
  },
  {
    id: 11,
    name: "presentation.pptx",
    type: "file",
    url: "/files/presentation.pptx",
    size: 2400, // KB (2.4 MB * 1000)
    fileKey: "f11_b3k2",
    parent: 1,
    last_modified: "2024-03-14T15:45:00Z",
  },
  {
    id: 12,
    name: "resume.pdf",
    type: "file",
    url: "/files/resume.pdf",
    size: 450, // KB
    fileKey: "f12_m4p8",
    parent: 2,
    last_modified: "2024-03-10T09:20:00Z",
  },
  {
    id: 13,
    name: "notes.docx",
    type: "file",
    url: "/files/notes.docx",
    size: 35, // KB
    fileKey: "f13_n5q7",
    parent: 2,
    last_modified: "2024-03-13T11:15:00Z",
  },
  {
    id: 14,
    name: "report.docx",
    type: "file",
    url: "/files/report.docx",
    size: 1200, // KB (1.2 MB * 1000)
    fileKey: "f14_c6w4",
    parent: 3,
    last_modified: "2024-03-12T16:30:00Z",
  },
  {
    id: 15,
    name: "data.xlsx",
    type: "file",
    url: "/files/data.xlsx",
    size: 890, // KB
    fileKey: "f15_d8y6",
    parent: 3,
    last_modified: "2024-03-11T14:25:00Z",
  },
  {
    id: 16,
    name: "budget.xlsx",
    type: "file",
    url: "/files/budget.xlsx",
    size: 120, // KB
    fileKey: "f16_e9z1",
    parent: 4,
    last_modified: "2024-03-09T13:40:00Z",
  },
  {
    id: 17,
    name: "journal.txt",
    type: "file",
    url: "/files/journal.txt",
    size: 45, // KB
    fileKey: "f17_h2x5",
    parent: 4,
    last_modified: "2024-03-15T08:55:00Z",
  },
  {
    id: 18,
    name: "profile.jpg",
    type: "file",
    url: "/files/profile.jpg",
    size: 1800, // KB (1.8 MB * 1000)
    fileKey: "f18_j4v7",
    parent: 5,
    last_modified: "2024-03-08T17:10:00Z",
  },
  {
    id: 19,
    name: "screenshot.png",
    type: "file",
    url: "/files/screenshot.png",
    size: 950, // KB
    fileKey: "f19_k6t9",
    parent: 5,
    last_modified: "2024-03-14T12:05:00Z",
  },
  {
    id: 20,
    name: "beach.jpg",
    type: "file",
    url: "/files/beach.jpg",
    size: 3200, // KB (3.2 MB * 1000)
    fileKey: "f20_l8r3",
    parent: 6,
    last_modified: "2024-03-07T10:15:00Z",
  },
  {
    id: 21,
    name: "mountain.jpg",
    type: "file",
    url: "/files/mountain.jpg",
    size: 2800, // KB (2.8 MB * 1000)
    fileKey: "f21_p1q4",
    parent: 6,
    last_modified: "2024-03-07T10:20:00Z",
  },
  {
    id: 22,
    name: "sunset.jpg",
    type: "file",
    url: "/files/sunset.jpg",
    size: 2100, // KB (2.1 MB * 1000)
    fileKey: "f22_s5w8",
    parent: 6,
    last_modified: "2024-03-07T10:25:00Z",
  },
  {
    id: 23,
    name: "project-plan.pdf",
    type: "file",
    url: "/files/project-plan.pdf",
    size: 1500, // KB (1.5 MB * 1000)
    fileKey: "f23_t7y2",
    parent: 7,
    last_modified: "2024-03-13T09:30:00Z",
  },
  {
    id: 24,
    name: "index.html",
    type: "file",
    url: "/files/index.html",
    size: 15, // KB
    fileKey: "f24_u9z4",
    parent: 8,
    last_modified: "2024-03-15T15:40:00Z",
  },
  {
    id: 25,
    name: "styles.css",
    type: "file",
    url: "/files/styles.css",
    size: 8, // KB
    fileKey: "f25_v2x6",
    parent: 8,
    last_modified: "2024-03-15T15:45:00Z",
  },
  {
    id: 26,
    name: "script.js",
    type: "file",
    url: "/files/script.js",
    size: 12, // KB
    fileKey: "f26_w4y8",
    parent: 8,
    last_modified: "2024-03-15T16:00:00Z",
  },
  {
    id: 27,
    name: "main.js",
    type: "file",
    url: "/files/main.js",
    size: 25, // KB
    fileKey: "f27_x6z1",
    parent: 9,
    last_modified: "2024-03-14T13:20:00Z",
  },
  {
    id: 28,
    name: "config.json",
    type: "file",
    url: "/files/config.json",
    size: 3, // KB
    fileKey: "f28_y8a3",
    parent: 9,
    last_modified: "2024-03-14T13:25:00Z",
  },
];
