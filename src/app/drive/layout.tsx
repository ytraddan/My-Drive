import Sidebar from "@/components/sidebar";
import Header from "@/components/header";
import {
  SignInButton,
  SignedIn,
  SignedOut as SignedOutClerk,
} from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
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
