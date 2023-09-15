"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { TextField, Button, Flex } from "@radix-ui/themes";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async () => {
    await supabase.auth.signInWithPassword({
      email,
      password,
    });
    router.refresh();
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="4"
      className="mb-8 h-screen "
    >
      <form
        onSubmit={handleSignIn}
        className="w-fit p-4 rounded border border-gray-200"
      >
        <Flex direction="column" gap="4">
          <TextField.Input
            size="2"
            style={{ width: 300 }}
            // className="mb-2"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField.Input
            size="2"
            style={{ width: 300 }}
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button variant="solid" style={{ width: 300 }} type="submit">
            Login
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
