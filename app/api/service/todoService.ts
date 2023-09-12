import gqlClient from "../../../lib/gqlclient";
import {
  GetTodoByIdDocument,
  GetTodoByIdQuery,
  GetTodosDocument,
  GetTodosQuery,
  Todo,
  UpdateTodoDocument,
  UpdateTodoMutation,
  DeleteTodoDocument,
  DeleteTodoMutation,
} from "@/types/generated";
import { CreateTodoDocument, CreateTodoMutation } from "@/types/generated";

export async function getTodos() {
  const result: GetTodosQuery = await gqlClient.request(GetTodosDocument);
  return result.todo;
}

export async function getTodoById(id: string) {
  const result: GetTodoByIdQuery = await gqlClient.request(
    GetTodoByIdDocument,
    {
      id: id,
    }
  );

  return result.todo_by_pk;
}

export async function recordNewTodo(newTodo: {
  id?: string;
  name: string;
  complete?: boolean;
}) {
  const result: CreateTodoMutation = await gqlClient.request(
    CreateTodoDocument,
    newTodo
  );
  return result.insert_todo;
}

export async function updateTodo(taskData: {
  id: string;
  name?: string;
  complete?: boolean;
}) {
  try {
    const result: UpdateTodoMutation = await gqlClient.request(
      UpdateTodoDocument,
      { id: taskData.id, complete: taskData.complete }
    );
    return result;
  } catch (error) {
    console.log("Something went wrong", error);
  }
}

export async function deleteTodo(id: string) {
  try {
    const result: DeleteTodoMutation = await gqlClient.request(
      DeleteTodoDocument,
      { id }
    );
    return result;
  } catch (error) {
    throw new Error("Couldn't delete todo");
  }
}
