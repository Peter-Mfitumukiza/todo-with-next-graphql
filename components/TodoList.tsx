"use client";

import { Flex, Text, Checkbox, Select, Button } from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";
import { useTodos } from "../hooks/useTodo";
import { Todo } from "@/types/generated";
import { useUpdateTodo } from "@/hooks/useUpdateTodo";
import { useDeleteTodo } from "@/hooks/useDeleteTodo";
import { useDeleteAllCompleted } from "@/hooks/useDeleteAllCompleted";

export default function TodoList() {
  const { data, error, isLoading } = useTodos();

  const { updateTodo } = useUpdateTodo();
  const { deleteTodo } = useDeleteTodo();
  const { deleteAllCompleted } = useDeleteAllCompleted();

  const handleCheckboxChange = async (task: Todo) => {
    updateTodo(task);
  };

  const handleDeleteClick = async (task: Todo) => {
    deleteTodo(task.id);
  };

  const handleDeleteAllCompleted = async () => {
    deleteAllCompleted();
  }

  return (
    <div className="w-100">
      <Flex
        direction="column"
        gap="5"
        style={{ maxWidth: 300 }}
        className="mb-8"
      >
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>Something went wrong</p>
        ) : (
          // Map over the tasks fetched from the API
          data.map((task: Todo) => (
            <Text asChild size="3" key={task.id}>
              <Flex align="center" gap="3">
                <Checkbox
                  id={`checkbox-${task.id}`}
                  defaultChecked={task.complete ? task.complete : false}
                  onCheckedChange={() => handleCheckboxChange(task)}
                />
                <label htmlFor={`checkbox-${task.id}`}>{task.name}</label>
                <button
                  aria-label="Delete"
                  style={{ border: "none", background: "transparent" }}
                  onClick={() => handleDeleteClick(task)} 
                >
                  <FaTrash color="red" size={14} />
                </button>
              </Flex>
            </Text>
          ))
        )}
      </Flex>
      <Flex gap="8">
        <Select.Root defaultValue="all">
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
          onClick={() => handleDeleteAllCompleted()} 
          >
          Delete Completed
        </Button>
      </Flex>
    </div>
  );
}
