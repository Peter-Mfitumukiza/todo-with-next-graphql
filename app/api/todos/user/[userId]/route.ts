import { deleteAllCompletedTodos, getTodos } from "../../../service/todoService";

export const GET = async (req: Request, { params }: any) => {
  try {
    const userId = params.userId;
    const todos = await getTodos(userId);
    return new Response(JSON.stringify(todos), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};

export const DELETE = async (req: Request, { params }: any) => {
  try {
    const userId = params.userId;
    await deleteAllCompletedTodos(userId);
    return new Response(JSON.stringify({ success: true }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
