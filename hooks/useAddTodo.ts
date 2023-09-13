import { useMutation } from "@tanstack/react-query";
import { useTodos } from "./useTodo";

// a function to add a new todo Item
async function createTodoItem(newTask: string) {
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newTask }),
  });

  return response.json();
}

export function useAddTodo() {
    const { refetch } = useTodos();

    // creacreateTodo mutation to create new todo item
    const createTodoMutation = useMutation(createTodoItem, {
        onSuccess: () => refetch()
    });

    // function to create todo using the mutation
    const createTodo = async (newTodo: string) =>{
        try {
            await createTodoMutation.mutateAsync(newTodo);
        } catch (error) {
            console.error("Failed to create new todo:", error);
        }
    }

    return createTodo;
}
