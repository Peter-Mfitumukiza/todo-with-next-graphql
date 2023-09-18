"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { TextField, Button, Flex } from "@radix-ui/themes";

export default function SignUp() {
  const [names, setNames] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    if(error){
      alert(error);
      return;
    }
    alert("Registration successful, Check your email for confirmation.");
    router.replace("/login")
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
        onSubmit={handleSignUp}
        className="w-fit p-4 rounded border border-gray"
      >
        <Flex direction="column" gap="4">
          <TextField.Input
            size="2"
            style={{ width: 300 }}
            placeholder="Full names"
            value={names}
            onChange={(e) => {
              setNames(e.target.value);
            }}
          />
          <TextField.Input
            size="2"
            style={{ width: 300 }}
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField.Input
            size="2"
            style={{ width: 300 }}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button variant="solid" style={{ width: 300 }} type="submit">
            Register
          </Button>
        </Flex>
      </form>
    </Flex>
  );
}
