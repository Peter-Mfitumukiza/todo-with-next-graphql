import { useQuery } from "@tanstack/react-query";

export const useTodos = (userId: string) => {

  return useQuery(["todos"], async () => {
    const response = await fetch(`/api/todos/user/${userId}`);
    if (!response.ok) {
        console.log("Error fetching");
    //   throw new Error("Network response was not ok");
    }
    return response.json();
  });
};
