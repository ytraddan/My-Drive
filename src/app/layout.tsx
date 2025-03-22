import { PostHogProvider } from "./providers";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import {
  SignInButton,
  SignedIn,
  SignedOut as SignedOutClerk,
} from "@clerk/nextjs";

import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "My Drive",
  description: "Google drive clone",
  icons: {
    icon: "/favicon.svg",
  },
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
            <div className="flex h-screen flex-col">
              <Header />
              <div className="flex flex-1 overflow-hidden">
                <Sidebar />
                <main className="flex-1 overflow-y-auto p-4">
                  <SignedOut />
                  <SignedIn>{children}</SignedIn>
                </main>
              </div>
            </div>
          </body>
        </PostHogProvider>
      </html>
    </ClerkProvider>
  );
}

function SignedOut() {
  return (
    <SignedOutClerk>
      <span className="block pt-10 text-center text-2xl font-bold">
        Please <SignInButton>Sign In</SignInButton> First
      </span>
    </SignedOutClerk>
  );
}
