import { PostHogProvider } from "./providers";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My Drive",
  description: "Google drive clone",
  icons: "/favicon.svg",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider
      appearance={{
        baseTheme: dark,
      }}
    >
      <html lang="en" className={`${GeistSans.variable}`}>
        <PostHogProvider>
          <body className="dark min-h-screen bg-background text-foreground">
            {children}
          </body>
        </PostHogProvider>
      </html>
    </ClerkProvider>
  );
}
