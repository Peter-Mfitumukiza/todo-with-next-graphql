import { getTodos } from "../service/todoService";

export const GET = async (req: Request) => {
    try {
        const todos = await getTodos();
        return new Response(JSON.stringify(todos), { status: 200});
    } catch (error) {
        return new Response(JSON.stringify(error), { status: 500});
    }
}