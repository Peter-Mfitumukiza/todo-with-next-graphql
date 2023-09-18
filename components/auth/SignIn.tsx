"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { Database } from "@/types/supabase";
import { TextField, Button, Flex } from "@radix-ui/themes";
import Link from "next/link";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const supabase = createClientComponentClient<Database>();

  const handleSignIn = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) {
      alert(error);
      return;
    }
    alert("Login successful");
    router.replace("/");
  };

  return (
    <Flex
      direction="column"
      align="center"
      justify="center"
      gap="4"
      className="mb-8 h-screen"
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
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
          <Button variant="solid" style={{ width: 300 }} type="submit">
            Login
          </Button>
          <p className="text-slate-400">
            Dont have an account?
            <Link href="/register" className="font-bold">
              Register here
            </Link>
          </p>
        </Flex>
      </form>
    </Flex>
  );
}
