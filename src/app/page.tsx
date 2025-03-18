import Link from "next/link";

import { auth } from "@/auth";
import { Check } from "lucide-react";

import { buttonVariants } from "@/components/ui/button";

import MaxWidthWrapper from "@/components/max-width-wrapper";

const features = [
  "🔑 Credentials based",
  "🌐 OAuth integration",
  "🔒 Forgot password",
  "✉️ Email verification",
  "📱 Two factor authentication",
  "👥 Authorization",
];

export default async function Home() {
  const session = await auth();
  return (
    <main className="py-20 font-mono">
      <MaxWidthWrapper className="flex flex-col items-center gap-8">
        <div className="space-y-3 text-center">
          <h1 className="text-4xl font-bold tracking-tight">Auth System</h1>
          <p className="max-w-prose tracking-wide text-pretty">
            Built using <strong>🔐 Auth.js</strong> and <strong>🚀 Next.js 15</strong> with server
            actions
          </p>
        </div>
        <ul className="space-y-3">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center gap-2 tracking-wide">
              <span className="flex size-6 items-center justify-center rounded-full bg-emerald-400 p-0.5">
                <Check className="size-3 text-emerald-100" strokeWidth={6} />
              </span>
              {feature}
            </li>
          ))}
        </ul>
        {session ? (
          <Link
            className={buttonVariants({
              size: "lg",
            })}
            href="/settings"
          >
            Settings
          </Link>
        ) : (
          <div className="flex gap-4">
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/login"
            >
              Sign in
            </Link>
            <Link
              className={buttonVariants({
                size: "lg",
              })}
              href="/register"
            >
              Sign up
            </Link>
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
}
