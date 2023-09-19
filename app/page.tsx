import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { Database } from "@/types/supabase";
import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";
import SignOut from "@/components/auth/SignOut";

export const dynamic = "force-dynamic";

export default async function Home() {
  const supabase = createServerComponentClient<Database>({ cookies });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    redirect("/sign-in");
  }

  return (
    <div className="flex flex-col items-center h-screen">
      <AddTodo user={user} />
      <TodoList user={user} />
      <SignOut />
    </div>
  );
}
