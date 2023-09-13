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
