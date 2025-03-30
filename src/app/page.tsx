"use client";

import { handleGetStarted } from "@/server/actions";
import { Button } from "@/components/ui/button";
import { useActionState } from "react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950 p-4">
      <div className="mt-[25vh] space-y-6 text-center">
        <h1 className="text-7xl font-bold tracking-tight text-zinc-200">
          My Drive
        </h1>
        <p className="mx-auto max-w-96 text-2xl text-zinc-400">
          Secure, fast, and easy file storage for the modern web
        </p>
        <SubmitButton />
      </div>
      <footer className="absolute bottom-8 text-sm text-zinc-500">
        © {new Date().getFullYear()} My Drive. No rights reserved.
      </footer>
    </main>
  );
}

function SubmitButton() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, formAction, isPending] = useActionState(handleGetStarted, null);

  return (
    <form action={formAction}>
      <Button
        type="submit"
        size="lg"
        disabled={isPending}
        className="border border-zinc-500 bg-zinc-950/40 py-6 text-lg text-zinc-300 transition-all duration-200 hover:bg-zinc-800 hover:text-white disabled:opacity-50"
      >
        {isPending ? (
          <div className="flex items-center gap-2">
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-zinc-300 border-t-transparent" />
            Loading
          </div>
        ) : (
          "Get Started"
        )}
      </Button>
    </form>
  );
}
