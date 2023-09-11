import gqlClient from '../../../lib/gqlclient';
import { GetTodosDocument, GetTodosQuery, Todo } from '@/types/generated';
import { CreateTodoDocument, CreateTodoMutation } from '@/types/generated';

export async function getTodos() {
    const result:GetTodosQuery = await gqlClient.request(GetTodosDocument);
    return result.todo;
}

export async function recordNewTodo(newTodo: any){
    const result: CreateTodoMutation = await gqlClient.request(CreateTodoDocument, newTodo);
    return result.insert_todo;
}

export async function updateTask() {

}

export async function deleteTask() {

}