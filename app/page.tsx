import AddTodo from "@/components/AddTodo";
import TodoList from "@/components/TodoList";

export default function Home() {
  return (
    <div className="flex flex-col items-center h-screen">
      <AddTodo />
      <TodoList />
    </div>
  );
}
