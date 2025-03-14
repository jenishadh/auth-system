import React from "react";

import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Social } from "@/components/auth/social";

interface CardWrapperProps {
  children: React.ReactNode;
  title: string;
  description: string;
  showSocial?: boolean;
  footerLabel: string;
  linkLabel: string;
  linkHref: string;
}

export function CardWrapper({
  children,
  title,
  description,
  showSocial,
  footerLabel,
  linkLabel,
  linkHref,
}: CardWrapperProps) {
  return (
    <Card className="w-[350px] shadow-md md:w-[400px]">
      <CardHeader>
        <CardTitle className="text-3xl tracking-tight">{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocial && (
        <div className="space-y-4">
          <div className="flex w-full items-center px-6">
            <span className="flex-1 border-t-1" />
            <span className="text-muted-foreground px-2 text-sm">OR</span>
            <span className="flex-1 border-t-1" />
          </div>
          <CardFooter>
            <Social />
          </CardFooter>
        </div>
      )}
      <CardFooter className="space-x-1 self-center">
        <span>{footerLabel}</span>
        <Link href={linkHref} className="underline underline-offset-2">
          {linkLabel}
        </Link>
      </CardFooter>
    </Card>
  );
}
