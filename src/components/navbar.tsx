import Link from "next/link";

import MaxWidthWrapper from "@/components/max-width-wrapper";

export function Navbar() {
  return (
    <header className="h-16 border-b shadow-xs">
      <MaxWidthWrapper className="flex items-center">
        <Link href="/" className="font-mono text-lg font-bold tracking-tight">
          Auth System
        </Link>
      </MaxWidthWrapper>
    </header>
  );
}
