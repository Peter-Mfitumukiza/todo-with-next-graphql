import { useMutation } from "@tanstack/react-query";
import { useTodos } from "./useTodo";

// function to delete todo
async function deleteTodoItem(id: string){
  await fetch(`/api/todos/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
}

export function useDeleteTodo() {
  const { refetch } = useTodos();
  // create a mutation to delete todo item
  const deleteTodoMutation = useMutation(deleteTodoItem, {
    onSuccess: () => refetch()
  }); 

  // a function to delete a todo item using the mutation
  const deleteTodo = async (id: string) => {
    try {
      await deleteTodoMutation.mutateAsync(id);
    } catch (error) {
      console.error("Failed to delete todo:", error);
    }
  };

  return deleteTodo;
}
