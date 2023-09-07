
export default async function Home() {

  const result = await getData();
  console.log(result.data);
  return (
    <div>
      <p>Welcome to my Todo App</p>
      <p>Here is the list of your tasks:</p>
      <ul>
        {result.data.todo.map((todo: any) => (
          <li key={todo.id}>
            {todo.name}
          </li>
        ))}
      </ul>
    </div>
  )
}

async function getData() {
  const res = await fetch(process.env.GRAPHQL_URL as string, {
    method: "POST",
    headers:{
      'x-hasura-admin-secret': process.env.GRAPHQL_SECRET as string
    },
    body: JSON.stringify({
      query: `query{
        todo {
          name
          id
          created_at
        }
      }
      `
    })
  });
  if(!res.ok){
    throw new Error('Failed to fetch data');
  }
  return res.json();
}