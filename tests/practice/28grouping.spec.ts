import { test, expect } from "@playwright/test";
test.describe.configure({ mode: "parallel" });

test.describe("group1", () => {
  test("Test1", async ({ page }) => {
    console.log("First group");
  });

  test("Test2", async ({ page }) => {
    console.log("Second group");
  });

  test("Test3", async ({ page }) => {
    console.log("Third group");
  });

  test("Test4", async ({ page }) => {
    console.log("Fourth group");
  });
});

test.describe("group2", () => {
  //test.describe.configure({mode : 'serial'});
  test("Test1 G2", async ({ page }) => {
    console.log("First group G2");
  });

  test("Test2 G2", async ({ page }) => {
    console.log("Second group G2");
  });

  test("Test3 G2", async ({ page }) => {
    console.log("Third group G2 ");
  });

  test("Test4 G2", async ({ page }) => {
    console.log("Fourth group G2 ");
  });
});


//npx playwright test ./tests/practice/28grouping.spec.ts --workers=4 --grep group1