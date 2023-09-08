"use client"

import { Flex, Text, Checkbox, Select, Button } from "@radix-ui/themes";
import { FaTrash } from "react-icons/fa";

export default function TodoList() {
  return (
    <div className="w-100">
      <Flex
        direction="column"
        gap="5"
        style={{ maxWidth: 300 }}
        className="mb-8"
      >
        {/* Task 1 */}
        <Text asChild size="3">
          <Flex align="center" gap="3">
            <Checkbox id="checkbox-2" />
            <label htmlFor="checkbox-2">Designing the user interface</label>
            <button
              aria-label="Delete"
              style={{ border: "none", background: "transparent" }}
            >
              <FaTrash color="red" size={14} />
            </button>
          </Flex>
        </Text>

        {/* Task 2 */}
        <Text asChild size="3">
          <Flex align="center" gap="3">
            <Checkbox id="checkbox-3" />
            <label htmlFor="checkbox-3">Buy some groceries</label>
            <button
              aria-label="Delete"
              style={{ border: "none", background: "transparent" }}
            >
              <FaTrash color="red" size={14} />
            </button>
          </Flex>
        </Text>

        {/* Task 3 */}
        <Text asChild size="3">
          <Flex align="center" gap="3">
            <Checkbox id="checkbox-4" />
            <label htmlFor="checkbox-4">Implement the design</label>
            <button
              aria-label="Delete"
              style={{ border: "none", background: "transparent" }}
            >
              <FaTrash color="red" size={14} />
            </button>
          </Flex>
        </Text>

        {/* Task 4 */}
        <Text asChild size="3">
          <Flex align="center" gap="3">
            <Checkbox id="checkbox-5" />
            <label htmlFor="checkbox-5">Testing the app</label>
            <button
              aria-label="Delete"
              style={{ border: "none", background: "transparent" }}
            >
              <FaTrash color="red" size={14} />
            </button>
          </Flex>
        </Text>
      </Flex>
      <Flex gap="8">
        <Select.Root defaultValue="all">
          <Select.Trigger color="indigo" variant="surface" />
          <Select.Content color="indigo">
            <Select.Item value="all">All</Select.Item>
            <Select.Item value="active">Active</Select.Item>
            <Select.Item value="completed">Completed</Select.Item>
          </Select.Content>
        </Select.Root>
        <Button color="crimson" variant="soft">Delete Completed</Button>
      </Flex>
    </div>
  );
}
