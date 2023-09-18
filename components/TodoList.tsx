"use client";
import { useState } from "react";
import { Flex, Text, Checkbox, Select, Button } from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";
import { useTodos } from "../hooks/useTodo";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useDeleteAllCompleted } from "@/hooks/useDeleteAllCompleted";
import TODO from "@/types/Todo";

export default function TodoList() {
  const [filter, setFilter] = useState("all");
  const { data, error, isLoading } = useTodos();
  const updateTodo = useUpdateTodo();
  const deleteTodo = useDeleteTodo();
  const deleteAllCompleted = useDeleteAllCompleted();

  // Check if data is still loading or if there's an error
  if (isLoading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Something went wrong</p>;
  }

  // Filter todos based on the 'filter' value
  const filteredTodos = data.filter((task: TODO) => {
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
        {/* Map over the filtered todos */}
        {filteredTodos.map((task: TODO) => (
          <Text asChild size="3" key={task.id}>
            <Flex align="center" gap="3">
              <Checkbox
                id={`checkbox-${task.id}`}
                defaultChecked={task.complete ? task.complete : false}
                onCheckedChange={() => updateTodo(task)}
              />
              <label htmlFor={`checkbox-${task.id}`}>{task.name}</label>
              <button
                aria-label="Delete"
                style={{ border: "none", background: "transparent" }}
                onClick={() => deleteTodo(task.id)}
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
          onClick={() => deleteAllCompleted()}
        >
          Delete Completed
        </Button>
      </Flex>
    </div>
  );
}
