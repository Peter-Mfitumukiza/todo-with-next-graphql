import { useMutation } from "@tanstack/react-query";
import { useTodos } from "./useTodo";

// function to delete all completed todo items
async function deleteCompletedTodos(userId: string){
  await fetch(`/api/todos/user/${userId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function useDeleteAllCompleted(userId: string) {
  const { refetch } = useTodos(userId);

  // mutation to delete completed todos
  const deleteAllCompletedMutation = useMutation(deleteCompletedTodos, {
    onSuccess: () => refetch()
  });
  // function to delete completed todos using the mutation
  const deleteAllCompleted = async (userId: string) => {
    try {
      await deleteAllCompletedMutation.mutateAsync(userId);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return deleteAllCompleted
}
