import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Header() {
  return (
    <header className="border-b border-border px-6 py-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h1 className="text-xl font-semibold">My Drive</h1>
          <div className="relative hidden md:block">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search in Drive"
              className="w-[300px] bg-muted/50 pl-8"
            />
          </div>
        </div>
        <div className="flex items-center gap-2">
          <SignedOut>
            <SignInButton>
              <Button className="rounded-full">Sign In</Button>
            </SignInButton>
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
        </div>
      </div>
    </header>
  );
}
