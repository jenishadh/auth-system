import { auth, signOut } from "@/auth";

import { Button } from "@/components/ui/button";

export default async function AccountPage() {
  const session = await auth();
  return (
    <div>
      {JSON.stringify(session)}
      <form
        action={async function () {
          "use server";
          await signOut();
        }}
      >
        <Button type="submit" variant="destructive">
          Logout
        </Button>
      </form>
    </div>
  );
}
