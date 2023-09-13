import { useMutation } from "@tanstack/react-query";
import { useTodos } from "./useTodo";
import TODO from "@/types/Todo";

//function to update a todo item
async function updateTodoItem(todo: TODO) {
  const response = await fetch(`/api/todos/${todo.id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ complete: !todo.complete }),
  });

  return response.json();
}

export function useUpdateTodo() {
  const { refetch } = useTodos();

  // Create a mutation using the useMutation hook
  const updateTodoMutation = useMutation(updateTodoItem, { 
    onSuccess:  () => refetch()
  });

  // Define a function to update a todo item using the mutation
  const updateTodo = async (todo: TODO) => {
    try {
      await updateTodoMutation.mutateAsync(todo);
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  return updateTodo
}
