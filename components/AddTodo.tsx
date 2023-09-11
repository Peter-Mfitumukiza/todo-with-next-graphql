"use client";

import { Button, Flex, TextField } from "@radix-ui/themes";
import { useMutation } from "@tanstack/react-query";
import React, { useState } from "react";

export default function AddTodo() {
  const [task, setTask] = useState<string>("");

  const { mutate }= useMutation(createTodo);

  // handle text field input changes
  const handleTaskChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTask(e.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    mutate(task, {
      onSuccess: () => {
        // Handle success, if needed
        console.log("Task added successfully!");
        setTask("");

      },
      onError: () => {
        // Handle error, if needed
        console.error("Failed to add task.");
      },
    });

  };
  // Submit form on enter
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault(); 
      handleSubmit(e as any); 
    }
  };

  return (
    <div className="mb-8 mt-10">
      <form onSubmit={handleSubmit}>
        <Flex gap="3">
          <TextField.Input
            size="2"
            style={{ width: 450 }}
            placeholder="New Task"
            value={task}
            onChange={handleTaskChange}
            onKeyDown={handleKeyDown}
          />
          <Button variant="solid" style={{ width: 150 }} type="submit">
            Add
          </Button>
        </Flex>
      </form>
    </div>
  );
}

const createTodo = async (newTask: string) => {
  console.log(newTask);
  const response = await fetch("/api/todos", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ name: newTask }),
  });

  if (!response.ok) {
    throw new Error("Failed to create task.");
  }

  return response.json();
};
