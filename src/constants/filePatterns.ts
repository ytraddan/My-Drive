export const FILE_PATTERNS = {
  images: ["%.jpg", "%.jpeg", "%.png", "%.gif", "%.webp", "%.svg", "%.bmp"],
  documents: [
    "%.pdf",
    "%.doc",
    "%.docx",
    "%.txt",
    "%.rtf",
    "%.xls",
    "%.xlsx",
    "%.ppt",
    "%.pptx",
  ],
  audio: ["%.mp3", "%.wav", "%.ogg", "%.m4a", "%.aac"],
  video: ["%.mp4", "%.mov", "%.avi", "%.mkv", "%.webm"],
} as const;

export type FilePattern = keyof typeof FILE_PATTERNS;
