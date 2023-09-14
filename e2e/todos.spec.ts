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
  test.beforeEach(async ({ page }) => {
    await createTodo(page);
  });

  test("should be able to mark a task as complete", async ({ page }) => {
    await page.getByLabel("Another Task").check();
    await expect(page.getByLabel("Another Task")).toBeChecked();
  });
});

// test.describe("Delete todo", () => {
//   test("Should delete all compeleted tasks", async ({ page }) => {

//     // create a new Todo item
//     const newTodo = page.getByPlaceholder("New Task");
//     await newTodo.fill("Task To Complete");
//     await newTodo.press("Enter");

//     // mark task as completed
//     // await page.getByText("Task To Complete").check();
//     expect(page.getByText("Task To Complete")).toBeTruthy();    

//     // expect(page.getByText("Delete Completed")).toBeTruthy();
//     // expect the completed task to be deleted
//     // expect(page.getByLabel("Task To Complete")).toBeFalsy();
//   });
// });

async function createTodo(page: Page) {
  const newTodo = page.getByPlaceholder("New Task");
  // create a new Todo item
  await newTodo.fill("Another Task");
  await newTodo.press("Enter");
}
