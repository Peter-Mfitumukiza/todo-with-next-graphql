import { useMutation } from "@tanstack/react-query";

export function useDeleteAllCompleted() {
  const deleteAllCompletedMutation = useMutation(async () => {
    await fetch(`/api/todos/`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  });

  const deleteAllCompleted = async () => {
    try {
      await deleteAllCompletedMutation.mutateAsync();
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return {
    deleteAllCompleted,
    isLoading: deleteAllCompletedMutation.isLoading,
    isError: deleteAllCompletedMutation.isError,
  };
}
