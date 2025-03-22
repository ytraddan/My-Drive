import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4">
      <SignIn forceRedirectUrl="/drive" signUpForceRedirectUrl="/drive" />
    </main>
  );
}
