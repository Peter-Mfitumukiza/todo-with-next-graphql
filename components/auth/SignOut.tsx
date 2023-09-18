"use client";

import { Database } from "@/types/supabase";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { useRouter } from "next/navigation";
import { Button } from "@radix-ui/themes"

export default function SignOut() {
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  async function handleSignOut() {
    const { error } = await supabase.auth.signOut();

    if (error) {
      alert(error);
    }
    router.replace("/login");
  }

  return (
    <Button variant="surface" style={{ width: '100px', marginTop: '100px' }} onClick={handleSignOut}>
      Sign Out
    </Button>
  );
}
