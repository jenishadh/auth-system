"use client";

import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export function Social() {
  async function onProviderSignIn(provider: "google" | "github") {
    await signIn(provider, { redirectTo: DEFAULT_LOGIN_REDIRECT });
  }

  return (
    <div className="flex w-full flex-col gap-y-4">
      <Button
        size="lg"
        variant="outline"
        className="font-normal"
        onClick={() => onProviderSignIn("google")}
      >
        <FcGoogle />
        Continue with Google
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="font-normal"
        onClick={() => onProviderSignIn("github")}
      >
        <FaGithub />
        Continue with Github
      </Button>
    </div>
  );
}
