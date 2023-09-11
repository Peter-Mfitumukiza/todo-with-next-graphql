import gqlClient from "../../../lib/gqlclient";
import {
  GetTodoByIdDocument,
  GetTodoByIdQuery,
  GetTodosDocument,
  GetTodosQuery,
  Todo,
  UpdateTodoDocument,
  UpdateTodoMutation,
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

export async function recordNewTodo(newTodo: any) {
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
  const result: UpdateTodoMutation = await gqlClient.request(
    UpdateTodoDocument,
    taskData
  );
  console.log(result);
  return result;
}

export async function deleteTask() {}
