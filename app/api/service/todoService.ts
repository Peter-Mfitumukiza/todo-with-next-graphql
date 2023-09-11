import gqlClient from '../../../lib/gqlclient';
import { GetTodosDocument } from '@/types/generated';

export async function getTodos() {
    const result:any = await gqlClient.request(GetTodosDocument);
    // console.log(result);
    return result.todo;
}