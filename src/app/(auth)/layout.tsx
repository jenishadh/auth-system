import React from "react";

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return <main className="flex flex-col items-center py-10 md:py-15">{children}</main>;
}
