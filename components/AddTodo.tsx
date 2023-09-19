"use client";

import { Button, Flex, TextField } from "@radix-ui/themes";
import React, { useState } from "react";
import { trpc } from "@/app/_trpc/client";

export default function AddTodo({ user }: any) {
  const [task, setTask] = useState<string>("");
  const getTodo = trpc.getTodos.useQuery(user.id);
  const addTodo = trpc.addTodo.useMutation({
    onSettled: () => getTodo.refetch(),
  });

  // handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (task === "") return;
    // createTodo(task, user.id);
    addTodo.mutate({content: task, userId: user.id});
    setTask("");
  };

  // Submit form on enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      handleSubmit(e as any);
    }
  };

  return (
    <div className="mb-8 mt-10">
      <form onSubmit={handleSubmit}>
        <Flex gap="3">
          <TextField.Input
            size="2"
            style={{ width: 450 }}
            placeholder="New Task"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <Button variant="solid" style={{ width: 150 }} type="submit">
            Add
          </Button>
        </Flex>
      </form>
    </div>
  );
}
