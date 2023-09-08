"use client";

import { Button, Flex, TextField } from "@radix-ui/themes";

export default function AddTodo() {
  return (
    <div className="mb-8 mt-10">
      <Flex gap="3">
        <TextField.Input size="2" style={{ width: 450 }} placeholder="New Task" />
        <Button variant="solid" style={{ width: 150 }}>Add</Button>
      </Flex>
    </div>
  );
}

// 022515
