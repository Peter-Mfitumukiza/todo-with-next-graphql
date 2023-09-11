import { getTodos, getTodoById, recordNewTodo, updateTodo } from "../service/todoService";

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

export const PUT = async (req: Request) => {
  try {
    // Extract the todoId from the URL path
    const parts = req.url.split("/");
    const todoId = parts[parts.length - 1];

    const body: any = await req.json();

    const existingTodo = await getTodoById(todoId);

    if (!existingTodo) {
      return new Response(JSON.stringify({ error: "Todo not found" }), {
        status: 404,
      });
    }

    // Update the existing todo item with the new data
    const updatedTodo = {
      ...existingTodo,
      ...body,
    };
    await updateTodo(updatedTodo);
    return new Response(JSON.stringify(updatedTodo), { status: 200 });
  } catch (error) {

    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
};

export const DELETE = async () => {
    try {
        
    } catch (error) {
        
    }
}