"use client";
import { useState } from "react";
import { Flex, Text, Checkbox, Select, Button } from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";
import { trpc } from "@/app/_trpc/client";

export default function TodoList({ user }: any) {

  const getTodos = trpc.getTodos.useQuery(user.id);

  const setCompleted = trpc.setComplete.useMutation({
    onSettled: () => getTodos.refetch(),
  });

  const deleteTodo = trpc.deleteTodo.useMutation({
    onSettled: () => getTodos.refetch(),
  });

  const deleteAllCompleted = trpc.deleteCompletedTodos.useMutation({
    onSettled: () => getTodos.refetch(),
  });

  const [filter, setFilter] = useState("all");

  // Filter todos based on the 'filter' value
  let filteredTodos = getTodos?.data?.filter((task) => {
    if (filter === "active") {
      return !task.complete;
    } else if (filter === "completed") {
      return task.complete;
    }
    return true; // Display all todos for the "all" filter
  });

  return (
    <div className="w-100">
      <Flex
        direction="column"
        gap="5"
        style={{ maxWidth: 300 }}
        className="mb-8"
      >
        {filteredTodos?.map((task) => (
          <Text asChild size="3" key={task.id}>
            <Flex align="center" gap="3">
              <Checkbox
                id={`checkbox-${task.id}`}
                checked={!!task.complete}
                onCheckedChange={() =>
                  setCompleted.mutate({
                    id: task.id,
                    complete: !!task.complete,
                  })
                }
              />
              <label htmlFor={`checkbox-${task.id}`}>{task.content}</label>
              <button
                aria-label="Delete"
                style={{ border: "none", background: "transparent" }}
                onClick={() => deleteTodo.mutate(task.id)}
              >
                <FaTrash color="red" size={14} />
              </button>
            </Flex>
          </Text>
        ))}
      </Flex>
      <Flex gap="8" align="center" justify="center">
        <Select.Root value={filter} onValueChange={(value) => setFilter(value)}>
          <Select.Trigger color="indigo" variant="surface" />
          <Select.Content color="indigo">
            <Select.Item value="all">All</Select.Item>
            <Select.Item value="active">Active</Select.Item>
            <Select.Item value="completed">Completed</Select.Item>
          </Select.Content>
        </Select.Root>
        <Button
          color="crimson"
          variant="soft"
          onClick={() => deleteAllCompleted.mutate(user.id)}
        >
          Delete Completed
        </Button>
      </Flex>
    </div>
  );
}
