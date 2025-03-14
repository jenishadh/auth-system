import { FaGithub } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

import { Button } from "@/components/ui/button";

export function Social() {
  return (
    <div className="flex w-full flex-col gap-y-4">
      <Button size="lg" variant="outline" className="font-normal">
        <FcGoogle />
        Continue with Google
      </Button>
      <Button size="lg" variant="outline" className="font-normal">
        <FaGithub />
        Continue with Github
      </Button>
    </div>
  );
}
