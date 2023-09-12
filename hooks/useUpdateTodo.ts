import { useMutation } from "@tanstack/react-query";
import { Todo } from "@/types/generated";

export function useUpdateTodo() {
  const updateTodoMutation = useMutation(
    async ({ id, complete }: { id: number; complete: boolean }) => {
      const response = await fetch(`/api/todos/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ complete }),
      });
      if (!response.ok) {
        throw new Error("Failed to update todo");
      }
      return response.json();
    }
  );

  const updateTodo = async (todo: Todo) => {
    try {
      await updateTodoMutation.mutateAsync({
        id: todo.id,
        complete: !todo.complete,
      });
    } catch (error) {
      console.error("Failed to update todo:", error);
    }
  };

  return {
    updateTodo,
    isLoading: updateTodoMutation.isLoading,
    isError: updateTodoMutation.isError
  };
}
