import { getTodos, recordNewTodo} from "../service/todoService";

export const GET = async (req: Request) => {
  try {
    const todos = await getTodos();
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const POST = async (req: Request) => {
  try {
    const body: any = await req.json();
    const result = await recordNewTodo({ name: body.name });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
