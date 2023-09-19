import { recordNewTodo } from "../service/todoService";

export const POST = async (req: Request) => {
  try {
    const body: any = await req.json();
    const result = await recordNewTodo({
      name: body.name,
      userId: body.userId,
    });
    return new Response(JSON.stringify(result), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
};
