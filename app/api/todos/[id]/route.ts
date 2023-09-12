import  { updateTodo, getTodoById } from "../../service/todoService"

export const PUT = async (req: Request, { params }: any) => {
  try {
    const todoId = params.id;

    const body = await req.json();

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
  } catch (error) {}
};
