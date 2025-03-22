import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-900 p-4 pt-[25vh]">
      <SignIn forceRedirectUrl="/drive" signUpForceRedirectUrl="/drive" />
    </main>
  );
}
