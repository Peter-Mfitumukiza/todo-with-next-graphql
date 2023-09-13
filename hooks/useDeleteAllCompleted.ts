import { useMutation } from "@tanstack/react-query";
import { useTodos } from "./useTodo";

// function to delete all completed todo items
async function deleteCompletedTodos(){
  await fetch(`/api/todos/`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function useDeleteAllCompleted() {
  const { refetch } = useTodos();

  // mutation to delete completed todos
  const deleteAllCompletedMutation = useMutation(deleteCompletedTodos, {
    onSuccess: () => refetch()
  });
  // function to delete completed todos using the mutation
  const deleteAllCompleted = async () => {
    try {
      await deleteAllCompletedMutation.mutateAsync();
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return deleteAllCompleted
}
