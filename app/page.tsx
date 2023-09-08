import { gql} from "@apollo/client";
import { initializeApollo } from "@/lib/apolloClient";
import { GetTodosDocument, GetTodosQuery, GetTodosQueryVariables } from "@/types/generated";

export default async function Home() {
  const result = await getData();
  // console.log(result.data);
  // getData();
  return (
    <div className="w-full bg-indigo-500">
      <p>Welcome to my Todo App</p>
      <p>Here is the list of your tasks:</p>
      <ul>
        {result.todo.map((todo: any) => (
          <li key={todo.id}>{todo.name}</li>
        ))}
      </ul>
    </div>
  );
}

async function getData() {
  const client = initializeApollo();
  const { data, error } = await client.query<GetTodosQuery, GetTodosQueryVariables>({
    query: GetTodosDocument
  })
  if(error){
    console.log(error);
    // throw new Error(error.message);
  }
  console.log(data);
  return data;
}
