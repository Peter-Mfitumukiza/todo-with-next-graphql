import { useMutation } from "@tanstack/react-query";

export function useDeleteTodo() {
  const deleteTodoMutation = useMutation(async (id: number) => {
    await fetch(`/api/todos/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  const deleteTodo = async (id: number) => {
    try {
      await deleteTodoMutation.mutateAsync(id);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return {
    deleteTodo,
    isLoading: deleteTodoMutation.isLoading,
    isError: deleteTodoMutation.isError,
  };
}
