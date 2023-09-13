import { test, expect, type Page } from "@playwright/test";

test.beforeEach(async ({ page }) => {
  await page.goto("http://localhost:3000/");
});

test.describe("New Todo", () => {
  test("should allow me to create new todo", async ({ page }) => {
    const newTodo = page.getByPlaceholder("New Task");
    // create a new Todo item
    await newTodo.fill("New Task - 0");
    await newTodo.press("Enter");

    expect(page.getByText("New Task - 0")).toBeTruthy();
  });

  test("should clear the input on submit", async ({ page }) => {
    const newTodo = page.getByPlaceholder("New Task");
    // create a new Todo item
    await newTodo.fill("New Task - 6");
    await newTodo.press("Enter");

    // Check that input is empty.
    await expect(newTodo).toBeEmpty();
  });
});

test.describe("Mark todo as complete", () => {
  test("should be able to mark a task as complete", () => {

  });
});

