import type { ReactNode } from "react";
import Sidebar from "./components/sidebar";
import Header from "./components/header";
import { SignInButton, SignedIn, SignedOut } from "@clerk/nextjs";

interface DashboardLayoutProps {
  children: ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <div className="dark flex min-h-screen flex-col bg-background text-foreground">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-auto p-4">
          <SignedOut>
            <span className="block pt-10 text-center text-2xl font-bold">
              Please <SignInButton>Sign In</SignInButton> First
            </span>
          </SignedOut>
          <SignedIn>{children}</SignedIn>
        </main>
      </div>
    </div>
  );
}
