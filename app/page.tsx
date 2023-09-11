import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default async function Home() {

  return (
    <div className="flex flex-col items-center h-screen w-full">
      <AddTodo />
      <TodoList />
    </div>
  );
}


async function getData() {
  // const { data, error } = await client.query<GetTodosQuery, GetTodosQueryVariables>({
  //   query: GetTodosDocument
  // })
  // if(error){
  //   console.log(error);
  //   // throw new Error(error.message);
  // }
  // console.log(data);
  // return data;
  // const { data } = useQuery<TodoQuery>('todos', async () => {
  //   const { todos } = await request(process.env.GRAPHQL_URL as string, TodosQueryDocument)
  //   return todos
  // })
}
