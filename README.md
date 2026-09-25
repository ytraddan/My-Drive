# My Drive
 
A Google Drive clone built with Next.js and TypeScript. You can sign in, upload files, organize them into folders, star favorites, and manage your personal storage — all through a Drive-style interface.
 
Built as a portfolio project to practice a typical full-stack setup: authentication, a relational database with an ORM, file storage/uploads, and a component library on top of Next.js.

Work still in progress.
 
## Features
 
- Authentication and user sessions via Clerk
- Upload files and browse them in a folder structure
- Per-user private storage (each account only sees its own files)
- Star/favorite files and folders for quick access
- Responsive UI built with Radix UI primitives and Tailwind CSS
## Stack
 
Next.js · React · TypeScript · Tailwind CSS · Radix UI · Drizzle ORM · MySQL · Clerk (auth) · UploadThing (file uploads)
 
## Structure
 
```
src/app           routes and pages (Next.js App Router)
src/components    UI components
src/server         Drizzle schema and database access
src/lib            shared helpers, types, constants
src/styles         global styles
```
 
## How to run locally
 
```bash
pnpm install
```
 
Add a `.env` file with your own keys:
 
```
DATABASE_URL=your_mysql_connection_string
CLERK_SECRET_KEY=your_clerk_secret_key
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
UPLOADTHING_TOKEN=your_uploadthing_token
```
 
Push the database schema:
 
```bash
pnpm db:push
```
 
Start the dev server:
 
```bash
pnpm dev
```
 
## Live demo
 
[drive-taupe.vercel.app](https://drive-taupe.vercel.app/)

## TO DO

- [x] separate storage for every user
- [x] starred files/folders
- [ ] add/delete folder button
- [ ] recent files
- [ ] upload button should always stays visible
